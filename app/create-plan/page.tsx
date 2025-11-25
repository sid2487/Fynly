"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface Expense {
  category: string;
  amount: number;
}

export default function CreatePlan() {
  const [selectedMonth, setSelectedMonth] = useState("Select Month");
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [newExpenseCategory, setNewExpenseCategory] = useState("");
  const [newExpenseAmount, setNewExpenseAmount] = useState("");

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [totalBudget, setTotalBudget] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [tempBudgetError, setTempBudgetError] = useState(false);
  const [inputExceedsBudget, setInputExceedsBudget] = useState(false);
  const [isCreatingAI , setIsCreatingAI] = useState(false);
  const [persona, setPersona] = useState("");


  const router = useRouter();

  const addExpense = () => {
    const category = newExpenseCategory.trim().toLowerCase();
    const amount = parseFloat(newExpenseAmount);

    const isValidCategory = category !== "";
    const isUnique = !expenses.some(
      (e) => e.category.trim().toLowerCase() === category
    );
    const isValidAmount = !isNaN(amount) && amount > 0;

    const totalBudgetNumber = Number(totalBudget);
    const currentTotal = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
    const willExceedBudget =
      totalBudget !== "" && currentTotal + amount > totalBudgetNumber;

    if (isValidCategory && isUnique && isValidAmount) {
      if (willExceedBudget) {
        setTempBudgetError(true);
        return;
      }

      setExpenses((prev) => [...prev, { category, amount }]);
      setNewExpenseCategory("");
      setNewExpenseAmount("");
      setTempBudgetError(false);
      setInputExceedsBudget(false);
    }
  };

  const removeExpense = (category: string) => {
    setExpenses((prev) => prev.filter((e) => e.category !== category));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addExpense();
  };

  function getMonthIndex(name: string) {
    return months.indexOf(name); // 0–11
  }

  const monthIndex = getMonthIndex(selectedMonth);
  const year = new Date().getFullYear();

  const from = new Date(year, monthIndex, 1); // first day of selected months
  const to = new Date(year, monthIndex + 1, 0); // last dayof selected month(one day before the first dayof nextmonth)


  const handleCreateAI = async () => {
    if (selectedMonth === "Select Month") {
      alert("Please select a month before generating an AI plan");
      return;
    }
    if (selectedMonth === "Select Month") {
      alert("Select a month first");
      return;
    }

     if (!totalBudget.trim() || Number(totalBudget) <= 0) {
       alert("Please enter a valid total budget before generating AI plan");
       return;
     }

if (!persona) {
  alert("Please select your category/profession");
  return;
}


    setIsCreatingAI(true);

    const monthIndex = months.indexOf(selectedMonth);
    const year = new Date().getFullYear();

    const fromDate = new Date(year, monthIndex, 1).toISOString().split("T")[0];
    const toDate = new Date(year, monthIndex + 1, 0)
      .toISOString()
      .split("T")[0];

    const res = await fetch("/api/create-plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ai: true,
        month: selectedMonth,
        fromDate,
        toDate,
        totalBudget: Number(totalBudget),
        persona,
      }),
    });
    
    const data = await res.json();
    if(res.ok){
      alert("AI Plan Created");
      router.push("/dashboard");
    }else {
      alert(data.message);
    }
    setIsCreatingAI(false);
  }

  const handleCreatePlan = async () => {
     if (selectedMonth === "Select Month") {
       alert("Please select a month before generating the plan");
       return;
     }
     if (selectedMonth === "Select Month") {
       alert("Select a month first");
       return;
     }

     if (!totalBudget.trim() || Number(totalBudget) <= 0) {
       alert("Please enter a valid total budget before generating the plan");
       return;
     }

     if (!persona) {
       alert("Please select your category/profession");
       return;
     }

    setIsCreating(true);

    try {
      const res = await fetch("/api/create-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          month: selectedMonth,
          fromDate,
          toDate,
          totalBudget,
          expenses,
        }),
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : null;

      if (!res.ok) throw new Error(data?.message || "Something went wrong");

      alert("Plan created Successfully");
      router.push("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unexpected error occurred");
      }
    } finally {
      setIsCreating(false);
    }
  };

  useEffect(() => {
    const idx = months.indexOf(selectedMonth);
    if (idx >= 0) {
      const y = new Date().getFullYear();
      setFromDate(new Date(y, idx, 1).toISOString().split("T")[0]);
      setToDate(new Date(y, idx + 1, 0).toISOString().split("T")[0]);
    }
  }, [selectedMonth]);


  const totalPlanned = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
  const pendingAmount = parseFloat(newExpenseAmount);
  const totalBudgetNumber = Number(totalBudget);
  const futureTotal =
    totalPlanned +
    (!isNaN(pendingAmount) && pendingAmount > 0 ? pendingAmount : 0);

  const isBudgetExceeded =
    totalBudget !== "" && futureTotal > totalBudgetNumber;

  return (
    <div className="min-h-screen flex items-start justify-center pt-32 px-6">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-xl shadow-2xl space-y-6 border border-zinc-200 dark:border-zinc-800">
        <h1 className="text-2xl font-bold text-center">
          Create Your Expense Plan
        </h1>

        <p className="text-sm text-center">
          (Just Select month, toatal budget and persona with AI)
        </p>

        <div>
          <label className="block text-sm mb-1 font-medium">Select Month</label>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full border px-4 py-2 rounded-md text-left bg-white dark:bg-zinc-800">
              {selectedMonth}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              {months.map((month) => (
                <DropdownMenuItem
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                >
                  {month}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex gap-2 flex-col sm:flex-row">
          <div className="flex-1">
            <label className="block text-sm mb-1 font-medium">From</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="w-full border px-3 py-2 rounded-md bg-white dark:bg-zinc-800"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm mb-1 font-medium">To</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="w-full border px-3 py-2 rounded-md bg-white dark:bg-zinc-800"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1 font-medium">Total Budget</label>
          <input
            type="number"
            value={totalBudget}
            onChange={(e) => setTotalBudget(e.target.value)}
            placeholder="₹10000"
            className={`w-full border px-3 py-2 rounded-md bg-white dark:bg-zinc-800 ${
              isBudgetExceeded ? "border-red-500" : ""
            }`}
          />
        </div>

        <div>
          <label className="block text-sm mb-1 font-medium">
            Select Persona
          </label>
          <select
            value={persona}
            onChange={(e) => setPersona(e.target.value)}
            className="w-full border px-3 py-2 rounded-md bg-white dark:bg-zinc-800"
          >
            <option value="">Select Category</option>
            <option value="student">Student</option>
            <option value="working professional">Working Professional</option>
            <option value="business owner">Business Owner</option>
            <option value="freelancer">Freelancer</option>
            <option value="homemaker">Homemaker</option>
            <option value="retired">Retired</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1 font-medium">Add Expense</label>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1">
            <input
              type="text"
              value={newExpenseCategory}
              onChange={(e) => setNewExpenseCategory(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="e.g., Netflix"
              className="flex-1 border px-0 text-center py-2 rounded-md bg-white dark:bg-zinc-800"
            />

            <input
              type="number"
              value={newExpenseAmount}
              onChange={(e) => {
                const value = e.target.value;
                setNewExpenseAmount(value);

                const amount = parseFloat(value);
                const currentTotal = expenses.reduce(
                  (sum, e) => sum + Number(e.amount),
                  0
                );

                if (
                  totalBudget !== "" &&
                  !isNaN(amount) &&
                  amount > 0 &&
                  currentTotal + amount > Number(totalBudget)
                ) {
                  setInputExceedsBudget(true);
                } else {
                  setInputExceedsBudget(false);
                }

                setTempBudgetError(false);
              }}
              onKeyDown={handleKeyDown}
              placeholder="₹1000"
              className="w-full sm:w-[120px] border px-4 py-2 rounded-md bg-white dark:bg-zinc-800"
            />

            <button
              onClick={addExpense}
              disabled={inputExceedsBudget}
              className={`w-full sm:w-auto px-4 py-2 rounded-md flex items-center justify-center ${
                inputExceedsBudget
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-500 text-white hover:bg-indigo-600"
              }`}
            >
              Add
            </button>
          </div>

          <ul className="mt-3 text-sm text-zinc-700 dark:text-zinc-300 space-y-2">
            {expenses.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-1"
              >
                <div className="flex items-center justify-between w-full gap-3">
                  <span className="flex-1">{item.category}</span>
                  <span className="font-medium">₹{item.amount}</span>
                  <button
                    onClick={() => removeExpense(item.category)}
                    className="text-red-500 hover:text-red-700 text-xs font-bold"
                    aria-label={`Remove ${item.category}`}
                  >
                    ✖
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Errors */}
        {inputExceedsBudget && (
          <div className="text-red-600 text-sm mt-1">
            This expense would exceed your total budget.
          </div>
        )}

        {tempBudgetError && (
          <div className="text-red-600 bg-red-100 border border-red-400 p-2 rounded-md mt-2 text-sm">
            Adding this expense would exceed your total budget. Not added.
          </div>
        )}

        <div className="flex justify-between mt-4 flex-col sm:flex-row gap-3">
          <button
            onClick={handleCreatePlan}
            disabled={
              isCreating ||
              isCreatingAI ||
              isBudgetExceeded ||
              tempBudgetError ||
              inputExceedsBudget
            }
            className={`w-full sm:w-auto px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 flex items-center justify-center min-w-[100px] ${
              isCreating ||
              isBudgetExceeded ||
              tempBudgetError ||
              inputExceedsBudget
                ? "opacity-70 cursor-not-allowed"
                : ""
            }`}
          >
            {isCreating ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              "Create"
            )}
          </button>

          <button
            onClick={handleCreateAI}
            disabled={isCreating || isCreatingAI}
            className="w-full sm:w-auto px-4 py-2 border border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-50 dark:hover:bg-zinc-800"
          >
            {isCreatingAI ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              "Create with AI"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
