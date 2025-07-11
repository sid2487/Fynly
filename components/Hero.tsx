export default function Hero() {
  return (
    <section className="w-full px-4 md:px-8 mt-24">
      <div className=" text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
          SEE HOW IT WORKS
        </h1>

        <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-200">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
