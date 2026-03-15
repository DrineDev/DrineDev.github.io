import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Gimi",
    category: "Web",
    desc: "Full-Stack application built with React, Python, and Django. Features a secure testing environment deploying a local LLM over a Tailscale zero-trust network.",
    img: "/Gimi.png",
    links: []
  },
  {
    title: "MyCollex Website",
    category: "Web",
    desc: "Commercial real estate platform utilizing Next.js and Supabase to manage dynamic property listings with scalable database schemas.",
    img: "/MyCollex.png", 
    links: [{label: 'Visit Website', url: 'http://mycollex-website.vercel.app'}]
  },
  {
    title: "Linya",
    category: "Web",
    desc: "A robust RESTful API built with Laravel, containerized with Docker, and deployed on scalable AWS infrastructure (EC2, RDS, S3) serving 250+ users.",
    img: "/Linya.png", 
    links: []
  },
  {
    title: "iDiscount Mobile",
    category: "Mobile",
    desc: "Award-winning mobile app (Visayas Startup Awards 2025). Engineered critical user flows using Flutter and Supabase for a seamless cross-platform experience.",
    img: "/iDiscount.png", 
    links: [{label: 'Website', url: 'idiscount.codemagic.app/'}]
  },
  {
    title: "Project Gaia",
    category: "IoT",
    desc: "Google Gemini Hackathon project integrating an ESP32 hardware controller to monitor plant stats, leveraging Gemini AI to assign distinct 'personalities' to plants.",
    img: "/Gaia.png", 
    links: [{label: 'GitHub Repo', url: 'https://github.com/HoogaBoga/project_gaia'}]
  },
  {
    title: "Sugbo Intern",
    category: "Mobile",
    desc: "Localized networking platform built with a Java Spring Boot backend, Dockerized PostgreSQL, and a responsive Flutter mobile frontend.",
    img: "/SugboIntern.jpg", 
    links: [{label: 'GitHub Repo', url: 'https://github.com/DrineDev/Sugbo-Intern'}]
  },
  {
    title: "Lucky Defense Bot V2",
    category: "Automation",
    desc: "High-performance automated utility bot processing screen captures at 60 FPS using Java, OpenCV for object detection, and TesseractOCR.",
    img: "/LuckyDefense.png", 
    links: [{ label: "GitHub Repo", url: "https://github.com/DrineDev/Lucky-Defense-Bot-V2" }]
  },
  {
    title: "Bubble Dash",
    category: "Games",
    desc: "Fast-paced arcade game coded in C# using the Godot Engine. Programmed 2D physics and platforming mechanics for the Global Game Jam 2025.",
    img: "/BubbleDash.png", 
    links: [{ label: "GitHub Repo", url: "https://github.com/DrineDev/GGJ25" }]
  },
  {
    title: "Peek-A-Boo",
    category: "Games",
    desc: "Survival game requiring players to navigate a maze filled with monsters. Designed and developed the procedural maze generation mechanics and scoring system.",
    img: "/PeekABoo.png", 
    links: [{ label: "GitHub Repo", url: "https://github.com/toot-a-loot/UP-GameJam" }]
  },
  {
    title: "Puto-Pandol",
    category: "Games",
    desc: "Rapidly prototyped core gameplay mechanics, traversal systems, and enemy AI logic using Godot and GDScript under strict 72-hour game jam constraints.",
    img: "/PutoPandol.png", 
    links: [{ label: "GitHub Repo", url: "https://github.com/toot-a-loot/Puto-Pandol" }]
  },
  {
    title: "Task Management System",
    category: "Web",
    desc: "Full-stack application built in 2 weeks using Laravel, TailwindCSS, and Supabase (PostgreSQL). Features secure authentication and relational task mapping.",
    img: "/TaskManagementSystem.png", 
    links: [{ label: "GitHub Repo", url: "https://github.com/DrineDev/Task-Management-System" }]
  },
  {
    title: "RoamRome",
    category: "Web",
    desc: "A responsive travel website built using Tailwind CSS and TypeScript that showcases tourist attractions in Rome.",
    img: "/RoamRome.png", 
    links: [
      { label: "Visit Website", url: "https://roam-rome.vercel.app/" }, 
      { label: "GitHub Repo", url: "https://github.com/DrineDev/Roam-Rome" }
    ]
  },
];

const categories = ["All", "Web", "Mobile", "IoT", "Automation", "Games"];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="min-w-[100vw] min-h-screen snap-start flex flex-col px-8 py-20 md:px-24 overflow-y-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-12"
      >
        <h2 className="text-6xl sm:text-8xl font-black drop-shadow-[8px_8px_0_rgba(37,99,235,1)] mb-8">
          Projects
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all border-2 ${
                filter === cat 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-[4px_4px_0_rgba(17,17,17,1)] dark:shadow-[4px_4px_0_rgba(249,250,251,1)] translate-y-[2px]' 
                  : 'bg-transparent border-[#111] dark:border-gray-50 text-[#111] dark:text-gray-50 hover:bg-[#111] hover:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-[#111]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto w-full pb-20"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((proj) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              key={proj.title} 
              className="flex flex-col bg-gray-50 dark:bg-[#111] border-2 border-[#111] dark:border-gray-50 rounded-2xl overflow-hidden shadow-[4px_4px_0_rgba(17,17,17,1)] dark:shadow-[4px_4px_0_rgba(249,250,251,1)] transition-colors duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0_rgba(37,99,235,1)] dark:hover:shadow-[8px_8px_0_rgba(37,99,235,1)] group"
            >
              <div className="w-full aspect-video overflow-hidden border-b-2 border-[#111] dark:border-gray-50 bg-gray-200 dark:bg-gray-800">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/800x450/111/fff?text=${proj.title.replace(/ /g, '+')}`;
                  }}
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-black tracking-widest text-blue-600 uppercase mb-2">
                  {proj.category}
                </div>
                <h3 className="text-2xl font-bold mb-3 inline-block">
                  {proj.title}
                </h3>
                <p className="text-md opacity-80 mb-6 flex-grow">
                  {proj.desc}
                </p>
                
                <div className="flex flex-wrap gap-3 mt-auto">
                  {proj.links.length > 0 ? (
                    proj.links.map((link, lIdx) => (
                      <a 
                        key={lIdx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-4 py-2 bg-[#111] dark:bg-gray-50 text-gray-50 dark:text-[#111] text-sm font-bold rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ))
                  ) : (
                    <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-500 text-sm font-bold rounded-lg cursor-not-allowed">
                      Private / Client Repo
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
