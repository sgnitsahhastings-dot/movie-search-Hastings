import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContinueWatching from './components/ContinueWatching';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="pb-8">
            <HeroSection />
            <ContinueWatching />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
