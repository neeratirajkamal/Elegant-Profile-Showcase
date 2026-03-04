import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { Bot, BrainCircuit } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Technical AI Skills",
      icon: Bot,
      skills: ["AI Automation", "Prompt Engineering", "Reasoning Design", "No-Code AI Systems"]
    },
    {
      title: "Soft Skills",
      icon: BrainCircuit,
      skills: ["Communication", "Problem Solving", "Team Collaboration", "Analytical Thinking"]
    }
  ];

  return (
    <AnimatedSection id="skills" className="bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech Stack & Tools</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The technologies I use to bring intelligent automation and robust applications to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="glass-card p-8 rounded-3xl transition-all duration-300 border-white/5 hover:border-primary/30 shadow-xl hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-6">
                <cat.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-muted-foreground border border-white/5 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
