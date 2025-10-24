import { Search, Bell, ChevronLeft } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#0f0f0f] border-b border-gray-800 sticky top-0 z-10 backdrop-blur-lg bg-opacity-90">
      <div className="flex items-center justify-between px-8 py-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-800 hover:bg-white/5 transition-all duration-300 hover:scale-105">
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-4">
          <div className="relative group">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-gray-400 transition-colors duration-300"
            />
            <input
              type="text"
              placeholder="Search everything"
              className="w-80 bg-[#1a1a1a] border border-gray-800 rounded-lg pl-12 pr-4 py-2.5 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-700 focus:ring-2 focus:ring-gray-700/50 transition-all duration-300"
            />
          </div>

          <button className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-all duration-300 hover:scale-105 group">
            <Bell size={20} className="group-hover:animate-swing" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full animate-pulse" />
          </button>

          <div className="w-10 h-10 bg-gray-700 rounded-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-red-600 transition-all duration-300 hover:scale-105">
            <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-lg">
              👤
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
