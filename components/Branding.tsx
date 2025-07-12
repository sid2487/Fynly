"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function Branding() {
  const router = useRouter();
  const [loading, setLoading] = useState<"create" | "pricing" | null>(null);

  const handleClick = (path: string, type: "create" | "pricing") => {
    setLoading(type);
    router.push(path);
  };

  return (
    <section className="w-full bg-gradient-to-b from-indigo-50 to-white dark:from-zinc-900 dark:to-black py-20 px-6 border-b dark:border-zinc-800">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-800 dark:text-white">
          Master Your Money with Confidence
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Fynly helps you plan, track, and understand your spending so you can
          reach your financial goals faster - all in one place.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() => handleClick("/create-plan", "create")}
            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition flex items-center justify-center min-w-[160px]"
            disabled={loading !== null}
          >
            {loading === "create" ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              "Start Planning"
            )}
          </button>

          <button
            onClick={() => handleClick("/pricing", "pricing")}
            className="w-full sm:w-auto px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md font-medium hover:bg-indigo-50 dark:hover:bg-zinc-800 transition flex items-center justify-center min-w-[160px]"
            disabled={loading !== null}
          >
            {loading === "pricing" ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              "View Pricing"
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
