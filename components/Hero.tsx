export default function Hero() {
  return (
    <section className="w-full px-4 md:px-8 mt-24">
      <div className=" text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
          SEE HOW IT WORKS
        </h1>

        <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-200">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
