"use client"

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Dashboard(){

    const [data, setData] = useState<any>(null);
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [note, setNote] = useState("");
    const [hasPlan, setHasPlan] = useState(true);
    const [isAdding, setIsAdding] = useState(false);

    const router = useRouter();

    const fetchDashboard = async () => {
      const res = await fetch("/api/dashboard");
      const json = await res.json();

      if (!json.hasPlan) {
        setHasPlan(false);
      } else {
        setData(json);
        setHasPlan(true);
      }
    };

    useEffect(() => {
        fetchDashboard();
    }, []);

    const handleAddExpenses = async () => {
        setIsAdding(true);
      const res = await fetch("/api/expense", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category,
          amount,
          note,
          planId: data.plan.id,
        }),
      });

      if (res.ok) {
        setCategory("");
        setAmount("");
        setNote("");
        await fetchDashboard(); 
      }
      setIsAdding(false);
    };

    if (!hasPlan) {
      return (
        <div className="min-h-screen flex flex-col justify-center items-center space-y-4">
          <h2 className="text-2xl font-bold">No Plan Found</h2>
          <p className="text-lg">You haven't created a plan yet.</p>
          <button
            onClick={() => router.push("/create-plan")}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Create Plan Now
          </button>
        </div>
      );
    }

    if (!data) return <div>Loading...</div>;

    return (
      <div className=" mt-10 max-w-3xl mx-auto py-10 px-4 space-y-6">
        <h1 className="text-2xl font-bold">Dashboard – {data.plan.month}</h1>

        <p className="text-lg">Total Budget: ₹{data.plan.totalBudget}</p>
        <p>Total Spent: ₹{data.totalSpent}</p>
        <p>Remaining: ₹{data.remainingBudget}</p>

        <h2 className="text-xl font-semibold mt-6">Breakdown</h2>
        <ul className="space-y-2">
          {data.breakdown.map((item: any) => (
            <li key={item.category} className="border p-2 rounded">
              <div className="flex justify-between">
                <span>{item.category}</span>
                <span>
                  ₹{item.spent} / ₹{item.planned} (
                  <span className="text-green-600">₹{item.remaining} left</span>
                  )
                </span>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-6">Add New Expense</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Category (e.g., Food)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded p-2 flex-1 bg-white text-black dark:bg-zinc-800 dark:text-white"
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded p-2 flex-1 bg-white text-black dark:bg-zinc-800 dark:text-white"
          />
          <input
            type="text"
            placeholder="Note (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="border rounded p-2 flex-1 bg-white text-black dark:bg-zinc-800 dark:text-white"
          />
          <button
            onClick={handleAddExpenses}
            disabled={isAdding}
            className={`bg-indigo-600 text-white px-4 py-2 rounded flex items-center justify-center min-w-[80px] ${
              isAdding ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isAdding ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              "Add"
            )}
          </button>
        </div>

        <h2 className="text-xl font-semibold mt-6">Transactions</h2>
        <ul className="space-y-1 text-sm">
          {data.transactions.map((tx: any) => (
            <li key={tx.id} className="border-b pb-1">
              ₹{tx.amount} on {tx.category} – {tx.note || "No note"} (
              {new Date(tx.date).toLocaleDateString()})
            </li>
          ))}
        </ul>
      </div>
    );
    }
    
