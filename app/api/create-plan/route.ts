import { getAuthUser } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
import { prisma } from "@/lib/prisma";

type PlanData = {
  month: string;
  fromDate: string;
  toDate: string;
  totalBudget: number;
  expenses: { category: string; amount: number }[];
};

export async function POST(req: NextRequest) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  let planData: PlanData;

  if (body.ai === true) {
    const aiRes = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `
          You MUST return valid JSON in this exact shape:
            {
              "month": string,
              "fromDate": string,
              "toDate": string,
              "totalBudget": number,
              "expenses": [{ "category": string, "amount": number }]
            }
            Ensure expenses <= totalBudget.
            Ensure dates are inside the month.
          `,
        },
        {
          role: "user",
          content: `
Generate a budget plan for a "${body.persona}".

Month: ${body.month}
Date Range: ${body.fromDate} to ${body.toDate}
Total Budget: ${body.totalBudget}

You MUST return valid JSON in this exact shape:
{
  "month": string,
  "fromDate": string,
  "toDate": string,
  "totalBudget": number,
  "expenses": [{ "category": string, "amount": number }]
}

RULES:
- Expense categories MUST be relevant to the selected persona.
- Total of all expenses MUST NOT exceed totalBudget.
- Use realistic categories based on "${body.persona}".
- Ensure dates match the given fromDate and toDate.
- Return ONLY JSON, nothing else.
`,
        },
      ],
    });

    planData = JSON.parse(aiRes.choices[0].message.content!);
  } else {
    const { month, fromDate, toDate, totalBudget, expenses } = body;
    planData = { month, fromDate, toDate, totalBudget, expenses };
  }

  if (
    !planData.month ||
    !planData.fromDate ||
    !planData.toDate ||
    !planData.totalBudget
  ) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  if (!Array.isArray(planData.expenses) || planData.expenses.length === 0) {
    return NextResponse.json(
      { message: "At least one expense is required" },
      { status: 400 }
    );
  }

  for (const e of planData.expenses) {
    if (!e.category || !e.amount) {
      return NextResponse.json(
        { message: "Each expense requires category and amount" },
        { status: 400 }
      );
    }
  }

  const totalPlanned = planData.expenses.reduce(
    (sum, e) => sum + Number(e.amount),
    0
  );

  if (totalPlanned > Number(planData.totalBudget)) {
    return NextResponse.json(
      {
        message: `Your planned expenses (₹${totalPlanned}) exceed the total budget (₹${planData.totalBudget})`,
      },
      { status: 400 }
    );
  }

  try {
    const plan = await prisma.createPlan.create({
      data: {
        month: planData.month,
        fromDate: new Date(planData.fromDate),
        toDate: new Date(planData.toDate),
        totalBudget: Number(planData.totalBudget),
        userId: user.id,
        plannedExpenses: {
          create: planData.expenses.map((e) => ({
            category: e.category.trim().toLowerCase(),
            amount: Number(e.amount),
            userId: user.id,
          })),
        },
      },
      include: { plannedExpenses: true },
    });

    return NextResponse.json(plan);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
