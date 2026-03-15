import { motion } from 'framer-motion';

export default function IntroSection() {
  return (
    <section id="intro" className="min-w-[100vw] h-screen snap-start flex flex-col items-center justify-center p-8 relative">
      
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1 }}
        className="flex justify-center items-center"
      >
        <img
          src="/Me.jpg"
          alt="Edwell John Cotejar"
          className="aspect-square w-full max-w-[20vw] border-[7.5px] border-[#111] dark:border-gray-50 rounded-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </motion.div>
      
      <div className="mt-8 max-w-[60vw] text-center sm:text-left flex flex-col items-center sm:items-start">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight"
        >
          Hey, I'm <span className="text-blue-600 underline decoration-blue-600 drop-shadow-[4px_4px_0_rgba(37,99,235,0.5)]">Edwell John Cotejar.</span> 
        </motion.h1>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mt-6 text-xl sm:text-2xl opacity-90 max-w-3xl"
        >
          I'm a Full-Stack & Systems Engineer. I build highly optimized commercial platforms, award-winning mobile apps, and low-level tools.
        </motion.p>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <a 
            href="#projects" 
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-[4px_4px_0_rgba(17,17,17,1)] dark:shadow-[4px_4px_0_rgba(249,250,251,1)]"
          >
            View My Work
          </a>
          <a 
            href="#media" 
            className="px-8 py-3 bg-transparent border-2 border-[#111] dark:border-gray-50 text-[#111] dark:text-gray-50 font-bold rounded-lg hover:bg-[#111] hover:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-[#111] hover:-translate-y-1 transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-center gap-3 animate-bounce"
      >
        <span className="text-sm font-bold tracking-widest uppercase hidden md:block">Scroll or Swipe to explore</span>
        <svg className="w-8 h-8 fill-current text-blue-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" transform="rotate(90 12 12)"/>
        </svg>
      </motion.div>

    </section>
  );
}
