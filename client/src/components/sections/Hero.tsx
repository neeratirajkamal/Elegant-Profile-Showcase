import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full flex justify-center items-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary mb-8 border-primary/20">
            <Terminal className="w-4 h-4" />
            <span className="text-sm font-medium">Aspiring AI & Automation Developer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.1] mb-6">
            Hi, I'm <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-indigo-400">Raj Kamal.</span><br />
            Building Intelligent Systems.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            I simplify workflows & empower businesses by connecting people, data, and decisions seamlessly through AI-driven solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="h-14 px-8 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/25"
            >
              Contact Me <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="h-14 px-8 rounded-full glass-card text-foreground font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
            >
              View LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
