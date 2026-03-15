import { useState } from 'react';
import { motion } from 'framer-motion';

export default function MediaSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    
    formData.append("access_key", "1606de4c-86db-4232-927e-ca2110b8a545");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="media" className="min-w-[100vw] min-h-screen snap-start flex flex-col items-center justify-center p-8 overflow-y-auto overflow-x-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col text-center lg:text-left"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black drop-shadow-[6px_6px_0_rgba(37,99,235,1)] mb-6">
            Let's Talk.
          </h1>
          <p className="text-xl md:text-2xl opacity-80 mb-10 max-w-lg mx-auto lg:mx-0">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <a href="https://github.com/DrineDev" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:-translate-y-1 hover:text-blue-600 transition-all duration-300">
              <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/edwell-cotejar-063753229/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:-translate-y-1 hover:text-blue-600 transition-all duration-300">
              <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://discord.com/users/wiswiswiswis" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:-translate-y-1 hover:text-blue-600 transition-all duration-300">
              <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.445.865-.608 1.249a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.249.077.077 0 00-.079-.037 19.736 19.736 0 00-4.885 1.515.069.069 0 00-.032.027C.533 9.046-.32 13.58.099 18.064a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.427-.312 8.01 8.01 0 007.01 0 .078.078 0 01-.008.128 13.11 13.11 0 01-1.872.892.076.076 0 00-.041.106c.352.699.764 1.364 1.226 1.994a.077.077 0 00.084.028 19.84 19.84 0 005.993-3.03.077.077 0 00.031-.057c.5-5.177-.838-9.674-3.548-13.666a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419z"/></svg>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-50 dark:bg-[#111] border-2 border-[#111] dark:border-gray-50 rounded-2xl p-8 shadow-[8px_8px_0_rgba(17,17,17,1)] dark:shadow-[8px_8px_0_rgba(249,250,251,1)]"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-bold">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                required 
                className="p-3 bg-transparent border-2 border-[#111] dark:border-gray-50 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-bold">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                className="p-3 bg-transparent border-2 border-[#111] dark:border-gray-50 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-bold">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows={4} 
                required 
                className="p-3 bg-transparent border-2 border-[#111] dark:border-gray-50 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 transition-colors resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === "submitting"}
              className="mt-2 py-4 bg-blue-600 text-white font-black text-lg rounded-lg hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-[4px_4px_0_rgba(17,17,17,1)] dark:shadow-[4px_4px_0_rgba(249,250,251,1)] disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 dark:text-green-400 font-bold text-center mt-2 animate-pulse">
                Message sent successfully! I'll be in touch.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 dark:text-red-400 font-bold text-center mt-2">
                Something went wrong. Please try again or reach out on social media.
              </p>
            )}
            
          </form>
        </motion.div>

      </div>
    </section>
  );
}
