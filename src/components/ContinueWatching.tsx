import { ChevronDown } from 'lucide-react';

const ContinueWatching = () => {
  const movies = [
    {
      id: 1,
      title: 'AVATAR',
      subtitle: 'THE WAY OF THE WATER',
      user: 'ikako.t',
      category: 'Avatar',
      status: 'online',
      image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=500&fit=crop',
      progress: 45,
    },
    {
      id: 2,
      title: 'GUARDIANS',
      subtitle: 'THE GALAXY VOL. 3',
      user: 'Steve',
      category: 'Guardians',
      status: 'online',
      image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=500&fit=crop',
      progress: 60,
    },
    {
      id: 3,
      title: 'LORD OF THE RINGS',
      subtitle: 'THE RINGS OF POWER',
      user: 'Vika.J',
      category: 'Lord of the Rings',
      status: 'online',
      image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=500&fit=crop',
      progress: 30,
    },
    {
      id: 4,
      title: 'BLACK PANTHER',
      subtitle: 'WAKANDA FOREVER',
      user: 'Nick.B',
      category: 'Black Panther',
      status: 'online',
      image: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=500&fit=crop',
      progress: 75,
    },
  ];

  return (
    <section className="px-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">Continue Watching</h2>
          <div className="h-1 w-20 bg-red-600 rounded-full" />
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-gray-800 rounded-lg hover:bg-[#222] transition-all duration-300 group">
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
            Popular
          </span>
          <ChevronDown size={16} className="text-gray-500 group-hover:text-white transition-colors duration-300" />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className="group cursor-pointer animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[3/4]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${movie.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-2xl shadow-red-600/50">
                  <svg
                    className="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
                <div
                  className="h-full bg-red-600 transition-all duration-300"
                  style={{ width: `${movie.progress}%` }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-sm group-hover:text-red-500 transition-colors duration-300">
                {movie.title}
              </h3>
              <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                {movie.subtitle}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs group-hover:scale-110 transition-transform duration-300">
                  👤
                </div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">
                  {movie.user}
                </span>
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              </div>
              <p className="text-xs text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                {movie.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContinueWatching;
