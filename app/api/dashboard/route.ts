import {  NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth";

export async function GET() {
  const user = await getAuthUser();
  if (!user)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const plan = await prisma.createPlan.findFirst({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    include: { plannedExpenses: true },
  });

  if (!plan) {
    return NextResponse.json(
      { message: "No plan found", hasPlan: false },
      { status: 200 }
    );
  }

  const expenses = await prisma.expenses.findMany({
    where: { userId: user.id, planId: plan.id },
  });

  const spentMap: Record<string, number> = {};
  expenses.forEach((tx) => {
    spentMap[tx.category] = (spentMap[tx.category] || 0) + tx.amount;
  });

  const breakdown = plan.plannedExpenses.map((item) => ({
    category: item.category,
    planned: item.amount,
    spent: spentMap[item.category] || 0,
    remaining: item.amount - (spentMap[item.category] || 0),
  }));

  const totalSpent = expenses.reduce((sum, tx) => sum + tx.amount, 0);
  const remainingBudget = plan.totalBudget - totalSpent;

  return NextResponse.json({
    hasPlan: true,
    plan,
    breakdown,
    totalSpent,
    remainingBudget,
    transactions: expenses,
  });
}
