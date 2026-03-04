import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { Award, Briefcase, GraduationCap, Cpu, BrainCircuit } from "lucide-react";

export function Experience() {
  const projects = [
    { 
      title: "Metro Crowd Predictor Hydro Flow", 
      desc: "An intelligent system designed to predict metro crowd patterns and optimize flow using advanced AI models.",
      icon: Cpu
    },
    { 
      title: "HealthScanX", 
      desc: "AI-driven diagnostic tool that streamlines health data analysis and simplifies medical workflows.",
      icon: BrainCircuit
    },
  ];

  const certifications = [
    { title: "Tata Imagination Challenge 2024", issuer: "Tata Group" },
    { title: "Accenture UK Job Simulation", issuer: "Accenture" },
    { title: "Identity Security for AI Age", issuer: "Saviynt" },
    { title: "Automate Your Work", issuer: "Google / Coursera" },
  ];

  const education = [
    { 
      degree: "Master of Computer Applications (MCA)", 
      school: "Anurag Group of Institutions", 
      period: "2023 - 2025" 
    },
    { 
      degree: "Bachelor of Business Administration (BBA)", 
      school: "Vivekananda Degree College", 
      period: "2021 - 2023" 
    },
  ];

  return (
    <AnimatedSection id="experience">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Key Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-3xl border-white/5 hover:border-primary/30 shadow-xl hover:shadow-primary/10 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:to-transparent pl-12 md:pl-0">
              {education.map((edu, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.02 }}
                  className="relative md:flex md:justify-between md:items-center"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[35px] md:left-1/2 md:-ml-2.5 w-5 h-5 rounded-full border-4 border-background bg-primary z-10 shadow-[0_0_15px_rgba(139,92,246,0.6)]" />
                  
                  <div className={`md:w-5/12 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="glass-card p-6 rounded-2xl hover:border-primary/40 transition-all shadow-lg hover:shadow-primary/5">
                      <span className="text-primary font-mono text-sm block mb-2">{edu.period}</span>
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
            </div>
            
            <div className="grid gap-4">
              {certifications.map((cert, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ x: 10, backgroundColor: "rgba(139,92,246,0.08)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="glass-card p-6 rounded-2xl flex items-center justify-between group transition-all duration-300 border-white/5 hover:border-primary/30 cursor-default"
                >
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{cert.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
