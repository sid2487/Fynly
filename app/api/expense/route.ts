import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth";


export async function POST(req: NextRequest) {
  const user = await getAuthUser();
  if (!user)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const { category, amount, note, planId } = await req.json();

  if (!category || !amount || !planId) {
    return NextResponse.json({ message: "Missing Fields" }, { status: 400 });
  }

  const expenses = await prisma.expenses.create({
    data: {
      category,
      amount: parseFloat(amount),
      note,
      planId,
      userId: user.id,
    },
  });

  return NextResponse.json(expenses);
}