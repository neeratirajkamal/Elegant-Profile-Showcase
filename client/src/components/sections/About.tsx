import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { BrainCircuit, Cpu, Zap, ArrowRight } from "lucide-react";
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
      desc: "Designing end-to-end AI pipelines using n8n, Make, and custom Python scripts that eliminate repetitive tasks, reduce human error, and scale business operations automatically.",
    },
    {
      icon: Zap,
      title: "Prompt Engineering",
      desc: "Crafting structured prompts that guide LLMs to reason precisely, reduce hallucinations, and deliver production-ready outputs — the core skill behind every reliable AI system.",
    },
    {
      icon: Cpu,
      title: "LLM Integration & No-Code AI",
      desc: "Connecting GPT, Gemini, and open-source LLMs to business tools via no-code platforms and REST APIs — building powerful AI systems that are fast, maintainable, and business-ready.",
    },
  ];

  const howItWorks = [
    { step: "01", title: "Understand the Problem", desc: "Identify the repetitive workflow or decision that needs AI — whether it's data extraction, content generation, or customer routing." },
    { step: "02", title: "Design Prompt Architecture", desc: "Engineer structured prompts that guide the AI model to reason accurately and return reliable outputs with zero hallucination." },
    { step: "03", title: "Build the Automation Pipeline", desc: "Connect the AI to your business tools using n8n, Make, or Python — integrating with APIs, databases, CRMs, and communication platforms." },
    { step: "04", title: "Test, Iterate & Deploy", desc: "Run real-world tests, measure accuracy, refine prompts, and deploy the fully automated system to production." },
  ];

  return (
    <AnimatedSection id="about" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section 1 — Who I Am */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            {/* H2 — Prompt 2: primary keyword in heading */}
            <h2 id="about-heading" className="text-3xl md:text-5xl font-bold mb-8">
              Prompt Engineer &{" "}
              <span className="text-primary">AI Automation Expert</span>{" "}
              — Hyderabad.
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm <strong className="text-foreground">Raj Kamal Neerati</strong>, a Prompt Engineer and AI Automation Expert based in Hyderabad, India. I specialize in building intelligent systems that make businesses faster, smarter, and more profitable — without the overhead of traditional software development.
              </p>
              <p>
                My work sits at the intersection of <strong className="text-foreground">prompt engineering</strong>, <strong className="text-foreground">AI workflow automation</strong>, and <strong className="text-foreground">LLM integration</strong>. I design structured prompt architectures that guide AI models to reason precisely, then wire those models into real business workflows using n8n, Make, and Python pipelines.
              </p>
              <p>
                I started with one question: <em>"Can AI think like me if I teach it right?"</em> That curiosity grew into a mission — building smart, scalable AI systems that create measurable business impact for startups and enterprises worldwide.
              </p>
            </div>

            {/* Prompt 4: internal link to skills and contact */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#skills"
                onClick={(e) => { e.preventDefault(); document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
              >
                View my AI skill stack <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Hire me for a project <ArrowRight className="w-4 h-4" />
              </a>
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

        {/* Section 2 — How I Work (Prompt 3: step-by-step for AI Overviews & People Also Ask) */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold mb-3">
              How I Build AI Automation Systems
            </h3>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A proven 4-step process from business problem to deployed AI pipeline — used across every freelance and client project.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card p-6 rounded-2xl border-white/5 hover:border-primary/30 transition-all"
              >
                <span className="text-4xl font-black text-primary/20 block mb-3">{step.step}</span>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
