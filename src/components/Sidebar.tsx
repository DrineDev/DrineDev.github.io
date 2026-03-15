import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
}

export default function Sidebar({ isDark, setIsDark }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#intro' },
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Media', href: '#media' }
  ];

  return (
    <>
      <motion.button 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "backOut" }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-3 bg-gray-50 dark:bg-[#111] border-2 border-[#111] dark:border-gray-50 rounded-lg shadow-[4px_4px_0_rgba(17,17,17,1)] dark:shadow-[4px_4px_0_rgba(249,250,251,1)] hover:-translate-y-1 transition-transform flex flex-col justify-center items-center gap-1.5 w-14 h-14 cursor-pointer"
        aria-label="Toggle Menu"
      >
        <span className={`w-7 h-[3px] bg-[#111] dark:bg-gray-50 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
        <span className={`w-7 h-[3px] bg-[#111] dark:bg-gray-50 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-7 h-[3px] bg-[#111] dark:bg-gray-50 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-80 bg-gray-50 dark:bg-[#111] border-l-2 border-[#111] dark:border-gray-50 flex flex-col px-10 py-24 z-40 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col gap-8 flex-grow">
              {navItems.map((item, i) => (
                <motion.a 
                  key={item.label} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black text-[#111] dark:text-gray-50 hover:text-blue-600 dark:hover:text-blue-600 hover:translate-x-2 transition-all"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-6 border-t-2 border-[#111] dark:border-gray-50 pt-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg text-[#111] dark:text-gray-50">Theme</span>
                <button 
                  onClick={() => setIsDark(!isDark)}
                  className="w-12 h-12 rounded-full border-2 border-[#111] dark:border-gray-50 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-all cursor-pointer text-xl"
                >
                  {isDark ? '🌙' : '☀️'}
                </button>
              </div>

              <a 
                href="/COTEJAR,_EDWELL_JOHN_FlowCV_Resume_2026-03-13.pdf" 
                download
                className="text-center bg-blue-600 text-white font-black py-4 px-6 rounded-lg hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-[4px_4px_0_rgba(17,17,17,1)] dark:shadow-[4px_4px_0_rgba(249,250,251,1)]"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
