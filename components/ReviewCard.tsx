import p1 from "../public/p1.jpg";
import p3 from "../public/p3.jpg";
import o from "../public/o.jpg";
import p4 from "../public/p4.jpg";
import p5 from "../public/p5.jpg";
import p8 from "../public/p8.jpg";
import p6 from "../public/p6.jpg";
import p7 from "../public/p7.jpg";
import Image from "next/image";

export default function Card() {
  const reviews = [
    {
      name: "Agusto Lee",
      time: "2 weeks ago",
      review:
        "Fynly gave me clarity over my spending habits. I finally know where my money goes each month.",
      image: p1,
    },
    {
      name: "Maria Gomez",
      time: "1 week ago",
      review:
        "Clean UI, smooth experience, and most importantly, it actually helps me budget better.",
      image: o,
    },
    {
      name: "Lily",
      time: "5 days ago",
      review:
        "Love how intuitive this is! I didn’t need a tutorial. Everything just works beautifully.",
      image: p3,
    },
    {
      name: "Lisa Ray",
      time: "3 days ago",
      review:
        "Helps me plan ahead and keep track of both essentials and extras. Highly recommended!",
      image: p4,
    },
    {
      name: "Isabella",
      time: "3 days ago",
      review:
        "I’ve tried many budgeting tools, but Fynly is by far the easiest to stick with.",
      image: p5,
    },
    {
      name: "Lucas",
      time: "3 days ago",
      review:
        "From day one, it made budgeting feel less like a chore. Great job!",
      image: p8,
    },
    {
      name: "Sophia",
      time: "3 days ago",
      review:
        "I never realized how much I was overspending until I started using Fynly.",
      image: p6,
    },
    {
      name: "Isaac",
      time: "3 days ago",
      review:
        "The perfect tool to build better money habits. I check it daily now.",
      image: p7,
    },
  ];

  return (
    <section className="mt-20 space-y-8">
      <h1 className="text-3xl font-bold text-center text-black dark:text-white">
        Reviews from Our Users
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((user, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-4 space-y-3 border border-gray-100 dark:border-neutral-700 h-full"
          >
            <div className="flex items-center gap-3">
              <div className="w-20 h-20">
                <Image
                  src={user.image}
                  alt={user.name}
                  className="w-full h-full object-cover rounded-full shadow border"
                />
              </div>
              <div>
                <h2 className="text-base font-semibold">{user.name}</h2>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  {user.time}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-300 italic">
              “{user.review}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
