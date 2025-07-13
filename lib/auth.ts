import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export const getAuthUser = async () => {
  const { userId } = await auth(); 
  if (!userId) return null;

  let user = await prisma.user.findUnique({ where: { clerkId: userId } });

  // Auto-create user if not exists (on first login)
  if (!user) {
    const clerkUser = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
      },
    }).then((res) => res.json());

    user = await prisma.user.create({
      data: {
        clerkId: userId,
        email: clerkUser.email_addresses[0].email_address,
      },
    });
  }

  return user;
};
