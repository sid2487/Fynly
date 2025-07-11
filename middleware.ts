import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/create-plan", // Home page
    "/dashboard", // Dashboard page
    // "/profile", // Profile page (example)
    // "/settings", // Settings page (example)
    // "/api/(.*)", // API routes (optional)
  ],
};
