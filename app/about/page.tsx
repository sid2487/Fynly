export default function About() {
  return (
    <section className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white px-6 py-20 flex items-center justify-center">
      <div className="max-w-4xl w-full text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">About Fynly</h1>
          <p className="text-lg sm:text-xl leading-relaxed">
            <span className="font-semibold text-indigo-600">Fynly</span> is a
            modern personal finance tracker built for simplicity, clarity, and
            control. Track your income, manage your expenses, and stay on top of
            your financial goals - all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm bg-zinc-50 dark:bg-zinc-800">
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              To empower individuals to take full control of their finances
              through intuitive digital tools.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm bg-zinc-50 dark:bg-zinc-800">
            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Making financial clarity accessible to everyone - no jargon, no
              complexity.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm bg-zinc-50 dark:bg-zinc-800">
            <h2 className="text-xl font-semibold mb-2">Our Values</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Simplicity, privacy, trust, and a passion for problem-solving.
            </p>
          </div>
        </div>

        
        <div className="mt-16 space-y-6">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            👋 Hey! I&apos;m{" "}
            <span className="font-semibold text-indigo-600">
              Siddharth Mishra
            </span>
            , a solo full-stack developer passionate about building clean,
            useful, and impactful digital products.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            I created <span className="text-indigo-500 font-medium">Fynly</span>{" "}
            to help individuals easily track and plan their expenses, without
            the overwhelm of traditional tools.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            Check out my portfolio and see what else I&apos;ve built 👉{" "}
            <a
              href="https://portfolio-vn4i.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-medium hover:underline"
            >
              portfolio-vn4i.vercel.app
            </a>
          </p>
        </div>

        <div className="pt-10 text-sm text-zinc-500 dark:text-zinc-400">
          Built with ❤️ by Siddharth Mishra - Powered by Next.js, Prisma, Clerk
          & PostgreSQL.
        </div>
      </div>
    </section>
  );
}
