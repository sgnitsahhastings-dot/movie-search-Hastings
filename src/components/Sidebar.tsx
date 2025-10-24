import { Compass, TrendingUp, Users, Video, List, ChevronDown, Wifi } from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('browse');

  const menuItems = [
    { id: 'browse', label: 'Browse', icon: Compass },
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'following', label: 'Following', icon: Users },
    { id: 'videos', label: 'Your Videos', icon: Video },
    { id: 'playlist', label: 'Playlist', icon: List },
  ];

  const followers = [
    { name: 'ikako.t', avatar: '👤', status: 'wifi' },
    { name: 'Nick.B', avatar: '👤', status: 'online' },
    { name: 'Vika.J', avatar: '👤', status: 'wifi' },
    { name: 'Alesanda.B', avatar: '👤', status: 'online' },
    { name: 'Jessie.J', avatar: '👤', status: 'online' },
    { name: 'Dadd.H', avatar: '👤', status: 'online' },
  ];

  return (
    <aside className="w-72 bg-[#0f0f0f] border-r border-gray-800 h-screen sticky top-0 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold">
            N
          </div>
          <div className="text-xl font-semibold">
            Adze<span className="text-red-600">.DESIGN</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-xs text-gray-500 font-medium mb-3 px-4">News Feed</div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeMenu === item.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-[1.02]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8">
          <div className="text-xs text-gray-500 font-medium mb-3 px-4">Following</div>
          <div className="space-y-1">
            {followers.map((follower, index) => (
              <div
                key={follower.name}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer group"
                style={{
                  animation: `slideIn 0.3s ease-out ${index * 0.05}s both`,
                }}
              >
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm group-hover:scale-110 transition-transform duration-300">
                  {follower.avatar}
                </div>
                <span className="text-sm text-gray-300 flex-1 group-hover:text-white transition-colors duration-300">
                  {follower.name}
                </span>
                {follower.status === 'online' ? (
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                ) : (
                  <Wifi size={12} className="text-gray-500" />
                )}
              </div>
            ))}
          </div>
          <button className="w-full flex items-center justify-center gap-2 mt-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-600/10 rounded-lg transition-all duration-300">
            <ChevronDown size={16} />
            <span>Load more</span>
          </button>
        </div>
      </div>

      <div className="mt-auto p-6 text-xs text-gray-600">
        IKAKO Design
      </div>
    </aside>
  );
};

export default Sidebar;
