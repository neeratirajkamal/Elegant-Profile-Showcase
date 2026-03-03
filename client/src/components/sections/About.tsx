import { AnimatedSection } from "../AnimatedSection";
import { BrainCircuit, Cpu, Zap } from "lucide-react";

export function About() {
  const focuses = [
    { icon: BrainCircuit, title: "AI Workflow Automation", desc: "Designing systems that take over repetitive tasks." },
    { icon: Zap, title: "Prompt Engineering", desc: "Teaching AI to reason and deliver precise outputs." },
    { icon: Cpu, title: "No-Code AI Systems", desc: "Leveraging platforms like n8n and Make for rapid development." },
  ];

  return (
    <AnimatedSection id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Curiosity turned into a <span className="text-primary">mission.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I’m an MCA Graduate from Anurag University with a strong passion for building AI-driven and full stack solutions that automate workflows and create massive business impact.
              </p>
              <p>
                My journey started with a simple question — <em>"Can AI think like me if I teach it right?"</em> — and turned into a mission to develop smart systems that connect people, data, and decisions seamlessly.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {focuses.map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-primary/40 transition-colors duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
