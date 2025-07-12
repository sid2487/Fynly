export default function Contact() {
  return (
    <section className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white px-6 py-20 flex items-center justify-center">
      <div className="w-full max-w-3xl space-y-12">
       
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg">
            Have questions, feedback, or just want to say hello? Fill out the
            form below and I'll get back to you as soon as possible.
          </p>
        </div>

       
        <form className="space-y-6 bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                required
                placeholder="John"
                className="w-full px-4 py-2 border rounded-md bg-white dark:bg-zinc-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                required
                placeholder="Doe"
                className="w-full px-4 py-2 border rounded-md bg-white dark:bg-zinc-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-zinc-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              required
              placeholder="Write your message here..."
              rows={5}
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-zinc-900 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-2 px-6 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="text-center pt-8 text-zinc-500 dark:text-zinc-400 text-sm">
          Built with ❤️ by{" "}
          <a
            href="https://portfolio-vn4i.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            Siddharth Mishra
          </a>
        </div>
      </div>
    </section>
  );
}
