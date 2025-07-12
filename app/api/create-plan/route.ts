import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { month, fromDate, toDate, totalBudget, expenses } = await req.json();

  try {
    const plan = await prisma.createPlan.create({
      data: {
        month,
        fromDate: new Date(fromDate),
        toDate: new Date(toDate),
        totalBudget: parseFloat(totalBudget),
        userId: user.id,
        plannedExpenses: {
          create: expenses.map((e: any) => ({
            category: e.category.trim().toLowerCase(),
            amount: parseFloat(e.amount),
            userId: user.id,
          })),
        },
      },
      include: {
        plannedExpenses: true,
      },
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
