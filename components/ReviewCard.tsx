import p1 from "../public/p1.jpg"
import p3 from "../public/p3.jpg"
import o from "../public/o.jpg"
import p4 from "../public/p4.jpg"
import p5 from "../public/p5.jpg"
import p8 from "../public/p8.jpg"
import p6 from "../public/p6.jpg"
import p7 from "../public/p7.jpg"
import Image from "next/image"

export default function Card() {
  const reviews = [
    {
      name: "Agusto Lee",
      time: "2 weeks ago",
      review:
        "This website is great and I can't even express in words how much time and money it saved me. Earlier I spent a lot but couldn’t track it. Now I can finally see where my money is going.",
      image: p1,
    },
    {
      name: "Maria Gomez",
      time: "1 week ago",
      review:
        "Loved the simplicity and clarity! Helps me track my expenses effortlessly.",
      image: o,
    },
    {
      name: "John Doe",
      time: "5 days ago",
      review:
        "Super intuitive and a great UI. Budget tracking has never been this easy.",
      image: p3,
    },
    {
      name: "Lisa Ray",
      time: "3 days ago",
      review:
        "A game-changer for my financial discipline. Everything is visualized perfectly.",
      image: p4,
    },
    {
      name: "Lisa Ray",
      time: "3 days ago",
      review:
        "A game-changer for my financial discipline. Everything is visualized perfectly.",
      image: p5,
    },
    {
      name: "Lisa Ray",
      time: "3 days ago",
      review:
        "A game-changer for my financial discipline. Everything is visualized perfectly.",
      image: p8,
    },
    {
      name: "Lisa Ray",
      time: "3 days ago",
      review:
        "A game-changer for my financial discipline. Everything is visualized perfectly.",
      image: p6,
    },
    {
      name: "Lisa Ray",
      time: "3 days ago",
      review:
        "A game-changer for my financial discipline. Everything is visualized perfectly.",
      image: p7,
    },
  ];

  return (
    <section className="mt-20 space-y-8">
      <h1 className="text-3xl font-bold text-center text-black dark:text-white">
        Reviews from Our Users
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((user, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-4 space-y-3 border border-gray-100 dark:border-neutral-700 h-full"
          >
            {/* User Info */}
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
                <p className="text-xs text-gray-700 dark:text-gray-300">{user.time}</p>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-sm text-gray-700 dark:text-gray-300 italic">
              “
              {user.review.length > 100
                ? user.review.slice(0, 100) + "..."
                : user.review}
              ”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
