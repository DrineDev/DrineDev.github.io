import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const aboutData = [
  {
    title: "Education",
    content: (
      <div className="pl-4 border-l-2 border-blue-600 flex flex-col gap-4">
        <div>
          <h4 className="font-bold text-lg">Bachelor of Science in Computer Science</h4>
          <p className="text-sm font-bold text-blue-600 mt-1">iACADEMY Cebu | 2023 - 2027</p>
          <p className="text-sm opacity-80 mt-2">
            Major in Software Engineering. Consistent Dean's Lister. 
            <br />
            <span className="font-semibold">Coursework:</span> Operating Systems, Algorithms & Complexity, Data Structures, Computer Architecture.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Work Experience",
    content: (
      <div className="pl-4 border-l-2 border-blue-600 flex flex-col gap-6">
        <div>
          <h4 className="font-bold text-lg">Backend Engineer</h4>
          <p className="text-sm font-bold text-blue-600 mt-1">MyCollex Website | Aug 2025 - Present</p>
          <p className="text-sm opacity-80 mt-2">
            Led backend architecture for a commercial real estate platform using Next.js and Supabase. Translated business requirements into 10+ scalable database schemas and API endpoints.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg">Software Engineer</h4>
          <p className="text-sm font-bold text-blue-600 mt-1">iDiscount Mobile Philippines | May 2025 - Present</p>
          <p className="text-sm opacity-80 mt-2">
            Spearheaded frontend development using Flutter. Engineered critical user flows (secure ID verification, profile management) integrated with Supabase, leading the app to win the Visayas Startup Awards 2025.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Proficiencies",
    content: (
      <div className="pl-4 border-l-2 border-blue-600 flex flex-col gap-6">
        <div>
          <h4 className="font-bold text-lg mb-3">Languages</h4>
          <div className="flex flex-wrap gap-2">
            {['Java', 'TypeScript / JavaScript', 'Python', 'C++', 'C#', 'Dart', 'PHP', 'Rust', 'HTML', 'CSS'].map(tech => (
              <span key={tech} className="px-3 py-1 bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-600/30 rounded-full text-xs font-bold">{tech}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-3">Frameworks</h4>
          <div className="flex flex-wrap gap-2">
            {['Spring Boot', 'Next.js', 'React', 'Flutter', 'Prisma', 'Laravel', 'Django', '.NET', 'TailwindCSS'].map(tech => (
              <span key={tech} className="px-3 py-1 bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-600/30 rounded-full text-xs font-bold">{tech}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-3">Tools & Tech</h4>
          <div className="flex flex-wrap gap-2">
            {['Linux', 'Docker', 'Git', 'n8n', 'Tailscale', 'Ollama', 'PostgreSQL', 'Supabase', 'AWS (EC2, RDS, S3)'].map(tech => (
              <span key={tech} className="px-3 py-1 bg-[#111]/10 dark:bg-gray-50/10 border border-[#111]/30 dark:border-gray-50/30 rounded-full text-xs font-bold">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Extracurriculars",
    content: (
      <div className="pl-4 border-l-2 border-blue-600 flex flex-col gap-6">
        <div>
          <h4 className="font-bold text-lg">President</h4>
          <p className="text-sm font-bold text-blue-600 mt-1">IDEA Programming Club | 2023 - 2027</p>
          <p className="text-sm opacity-80 mt-2">
            Spearheaded technical and community initiatives, growing active membership from 0 to 90. Facilitated recurring technical workshops and networking gatherings.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg">Event Lead</h4>
          <p className="text-sm font-bold text-blue-600 mt-1">Code the Future Hackathon | 2025</p>
          <p className="text-sm opacity-80 mt-2">
            Directed day-of operations, logistics, and scheduling for a major hackathon event hosting 40+ participants.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg">Volunteer</h4>
          <p className="text-sm font-bold text-blue-600 mt-1">AWS Community Day (2025) & Geeks On A Beach (2024)</p>
          <p className="text-sm opacity-80 mt-2">
            Assisted in logistical execution and attendee onboarding for premier regional tech conferences, supporting over 1000+ attendees and industry professionals.
          </p>
        </div>
      </div>
    )
  }
];

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="about" className="min-w-[100vw] h-screen snap-start flex flex-col overflow-y-auto px-8 py-20 md:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 mt-8"
      >
        <h1 className="text-6xl sm:text-8xl font-black drop-shadow-[8px_8px_0_rgba(37,99,235,1)] mb-6">About Me</h1>
        <p className="max-w-4xl mx-auto text-lg sm:text-xl font-normal leading-relaxed opacity-90">
          Driven Computer Science student with a proven track record of delivering production-ready applications. Passionate about low-level systems, embedded programming, and backend architecture, with a strong drive to write highly optimized code from the ground up.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center w-full max-w-3xl mx-auto gap-4 mb-20"
      >
        {aboutData.map((item, index) => (
          <motion.div variants={itemVariants} key={index} className="w-full">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full flex justify-between items-center text-left text-xl font-bold p-5 border-2 border-[#111] dark:border-gray-50 bg-gray-50 dark:bg-[#111] shadow-[4px_4px_0_rgba(17,17,17,1)] dark:shadow-[4px_4px_0_rgba(249,250,251,1)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(37,99,235,1)] dark:hover:shadow-[6px_6px_0_rgba(37,99,235,1)] ${openIndex === index ? 'rounded-t-xl shadow-[4px_4px_0_rgba(37,99,235,1)] dark:shadow-[4px_4px_0_rgba(37,99,235,1)]' : 'rounded-xl'}`}
            >
              <span>{item.title}</span>
              <motion.span 
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-blue-600"
              >
                ▼
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden border-x-2 border-b-2 border-[#111] dark:border-gray-50 bg-gray-50 dark:bg-[#111] rounded-b-xl"
                >
                  <div className="p-6">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
