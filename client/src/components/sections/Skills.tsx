import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { Bot, BrainCircuit, Code2, Wrench } from "lucide-react";
import { trackSectionView } from "@/lib/analytics";
import { useEffect } from "react";

export function Skills() {
  useEffect(() => {
    trackSectionView("skills");
  }, []);

  const skillCategories = [
    {
      title: "Prompt Engineering & AI",
      icon: Bot,
      skills: [
        "Prompt Engineering",
        "LLM Integration",
        "GPT / Gemini / Claude",
        "AI Workflow Design",
        "Reasoning Architecture",
        "Chatbot Development",
        "RAG Systems",
      ],
    },
    {
      title: "No-Code Automation Platforms",
      icon: Wrench,
      skills: [
        "n8n Automation",
        "Make (Integromat)",
        "Zapier",
        "Airtable",
        "Notion AI",
        "REST API Integration",
      ],
    },
    {
      title: "Development & Engineering",
      icon: Code2,
      skills: [
        "Python",
        "JavaScript",
        "React",
        "Node.js",
        "REST APIs",
        "JSON / Data Pipelines",
      ],
    },
    {
      title: "Soft Skills & Delivery",
      icon: BrainCircuit,
      skills: [
        "Problem Solving",
        "Clear Communication",
        "Analytical Thinking",
        "Team Collaboration",
        "Project Management",
        "Remote Work",
      ],
    },
  ];

  const stats = [
    { value: "2+", label: "AI Projects Shipped" },
    { value: "15+", label: "Tools Mastered" },
    { value: "1", label: "Google Certification" },
    { value: "∞", label: "Curiosity for AI" },
  ];

  return (
    <AnimatedSection id="skills" className="bg-secondary/30" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="text-center mb-16">
          {/* H2 — Prompt 2: primary + secondary keywords */}
          <h2 id="skills-heading" className="text-3xl md:text-5xl font-bold mb-4">
            Prompt Engineering Skills & AI Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The tools and technologies I use to build{" "}
            <strong className="text-foreground/80">AI automation systems</strong>,{" "}
            <strong className="text-foreground/80">LLM-powered pipelines</strong>, and{" "}
            <strong className="text-foreground/80">no-code AI workflows</strong> — from Hyderabad, for clients worldwide.
          </p>
        </div>

        {/* Stats row — social proof + LSI keyword signals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 text-center border-white/5">
              <p className="text-3xl font-black text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="glass-card p-8 rounded-3xl transition-all duration-300 border-white/5 hover:border-primary/30 shadow-xl hover:shadow-primary/5"
              aria-label={`${cat.title} skills`}
            >
              <div
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <cat.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
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

        {/* Prompt 4: internal link to projects and contact */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Want to see these skills in action?{" "}
            <a
              href="#experience"
              onClick={(e) => { e.preventDefault(); document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); }}
              className="text-primary hover:underline underline-offset-4 font-medium"
            >
              View my AI projects →
            </a>
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
