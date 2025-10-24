import { Wifi, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const thumbnails = [
    { id: 1, image: "🎬" },
    { id: 2, image: "🎭" },
    { id: 3, image: "🎪" },
    { id: 4, image: "🎨" },
  ];

  return (
    <section className="relative px-8 pt-6 pb-12">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-gray-900 h-[500px] group">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&h=900&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative h-full flex flex-col justify-center px-12 z-10">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 w-fit animate-pulse">
            <Wifi size={12} />
            Live
          </div>

          <h1
            className="text-6xl font-bold mb-4 animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            4k MW Movies
          </h1>
          <h2
            className="text-4xl font-semibold text-gray-100 mb-6 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Enjoy malawi movies
          </h2>

          <div
            className="flex items-center gap-6 mb-8 animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-2">
              <div className="bg-yellow-500 text-black text-xs font-bold px-1.5 py-0.5 rounded">
                IMDb
              </div>
              <span className="text-yellow-500 font-semibold">7.8</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23B22234'/%3E%3Crect y='3' width='32' height='3' fill='white'/%3E%3Crect y='9' width='32' height='3' fill='white'/%3E%3Crect y='15' width='32' height='3' fill='white'/%3E%3Crect y='21' width='32' height='3' fill='white'/%3E%3Crect y='27' width='32' height='3' fill='white'/%3E%3Crect width='13' height='17' fill='%233C3B6E'/%3E%3C/svg%3E"
                alt="US"
                className="w-6 h-4 rounded"
              />
              <span className="text-gray-300">English</span>
            </div>
          </div>

          <button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-12 py-3.5 rounded-xl w-fit transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Watch More....
          </button>
        </div>

        <div className="absolute bottom-8 right-8 flex items-center gap-3">
          <button
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-600/50"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {thumbnails.map((thumb, index) => (
              <div
                key={thumb.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-20 h-12 rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-center text-2xl ${
                  currentSlide === index
                    ? "ring-2 ring-red-600 scale-110 bg-gray-700"
                    : "bg-gray-800 hover:bg-gray-700 opacity-60 hover:opacity-100"
                }`}
              >
                {thumb.image}
              </div>
            ))}
          </div>
          <button
            onClick={() =>
              setCurrentSlide(Math.min(thumbnails.length - 1, currentSlide + 1))
            }
            className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-600/50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
