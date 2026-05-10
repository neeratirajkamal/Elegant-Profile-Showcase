import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { BrainCircuit, Cpu, Zap } from "lucide-react";
import { trackSectionView } from "@/lib/analytics";
import { useEffect } from "react";

export function About() {
  useEffect(() => {
    trackSectionView("about");
  }, []);

  const focuses = [
    {
      icon: BrainCircuit,
      title: "AI Workflow Automation",
      desc: "Designing intelligent systems using n8n, Make, and custom pipelines that eliminate repetitive tasks and scale business operations.",
    },
    {
      icon: Zap,
      title: "Prompt Engineering",
      desc: "Crafting structured prompts that guide LLMs to reason precisely, reduce hallucinations, and deliver production-ready outputs.",
    },
    {
      icon: Cpu,
      title: "No-Code AI Systems",
      desc: "Leveraging no-code platforms to build powerful AI-driven workflows — fast, maintainable, and business-ready.",
    },
  ];

  return (
    <AnimatedSection id="about" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* H2 — keyword-rich, Part 2 */}
            <h2 id="about-heading" className="text-3xl md:text-5xl font-bold mb-8">
              Prompt Engineering Developer{" "}
              <span className="text-primary">based in Hyderabad.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm <strong className="text-foreground">Raj Kamal Neerati</strong>, a developer from Anurag University with a passion for building AI-driven automation systems that create measurable business impact.
              </p>
              <p>
                My work focuses on <strong className="text-foreground">AI workflow automation</strong>, <strong className="text-foreground">prompt engineering</strong>, and intelligent systems that connect people, data, and decisions seamlessly — all without the overhead of traditional software development.
              </p>
              <p>
                I started with one question: <em>"Can AI think like me if I teach it right?"</em> That curiosity grew into a mission — building smart, scalable systems using the latest AI tools and no-code platforms.
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
                aria-label={item.title}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0" aria-hidden="true">
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
