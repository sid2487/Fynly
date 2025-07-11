"use client";

import { SignedOut, SignedIn, SignUpButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function GetStarted() {
  const router = useRouter();

  return (
    <div className="text-center mt-8">
      <SignedOut>
        <SignUpButton mode="modal">
          <button
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-6 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <button
          onClick={() => router.push("/create-plan")}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-6 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Create Your Plan
        </button>
      </SignedIn>
    </div>
  );
}
