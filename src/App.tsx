import { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import MediaSection from './components/MediaSection';

function App() {
  const [isDark, setIsDark] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = window.innerWidth; 
      containerRef.current.scrollBy({ 
        left: direction === 'right' ? scrollAmount : -scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-[#111] text-[#111] dark:text-gray-50 transition-colors duration-300 font-sans">
      <Sidebar isDark={isDark} setIsDark={setIsDark} />
      
      <main 
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <IntroSection />
        <AboutSection />
        <ProjectsSection />
        <MediaSection />
      </main>

      <div className="fixed bottom-8 right-8 z-30 flex gap-4">
        <button 
          onClick={() => scroll('left')}
          className="w-12 h-12 bg-gray-50 dark:bg-[#111] border-2 border-[#111] dark:border-gray-50 rounded-full flex items-center justify-center shadow-[4px_4px_0_rgba(17,17,17,1)] dark:shadow-[4px_4px_0_rgba(249,250,251,1)] hover:-translate-y-1 hover:bg-[#111] hover:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-[#111] transition-all cursor-pointer"
          aria-label="Scroll Left"
        >
          ←
        </button>
        <button 
          onClick={() => scroll('right')}
          className="w-12 h-12 bg-blue-600 text-white border-2 border-[#111] dark:border-gray-50 rounded-full flex items-center justify-center shadow-[4px_4px_0_rgba(17,17,17,1)] dark:shadow-[4px_4px_0_rgba(249,250,251,1)] hover:-translate-y-1 hover:bg-blue-700 transition-all cursor-pointer"
          aria-label="Scroll Right"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default App;
