import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 py-10 space-y-8">
        {children}
      </div>
    </div>
  );
}
