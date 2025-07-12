"use client";

import { SignedOut, SignedIn, SignUpButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function GetStarted() {
  const router = useRouter();
  const [isCreating, setIsCreating] = useState(false);
  const [isViewing, setIsViewing] = useState(false);

  const handleCreate = () => {
    setIsCreating(true);
    router.push("/create-plan");
  };

  const handleView = () => {
    setIsViewing(true);
    router.push("/dashboard");
  };

  return (
    <div className="text-center mt-8 px-4">
      <SignedOut>
        <SignUpButton mode="modal">
          <button className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-6 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            Get Started
          </button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleCreate}
            disabled={isCreating}
            className={`w-full sm:w-auto px-6 py-4 rounded-full shadow-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
              isCreating ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isCreating ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              "Create Your Plan"
            )}
          </button>

          <button
            onClick={handleView}
            disabled={isViewing}
            className={`w-full sm:w-auto px-6 py-4 rounded-full shadow-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
              isViewing ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isViewing ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              "See Your Plan"
            )}
          </button>
        </div>
      </SignedIn>
    </div>
  );
}
