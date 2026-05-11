import { useState } from "react";
import { AnimatedSection } from "../AnimatedSection";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackSectionView } from "@/lib/analytics";
import { useEffect } from "react";

const faqs = [
  {
    q: "What is prompt engineering and how can it help my business?",
    a: "Prompt engineering is the practice of designing precise instructions that guide AI models like GPT to produce accurate, reliable, and production-ready outputs. For businesses, it eliminates AI hallucinations, automates content pipelines, and enables intelligent decision-making at scale — without writing complex code.",
  },
  {
    q: "What AI automation tools does Raj Kamal Neerati work with?",
    a: "Raj Kamal works with n8n, Make (Integromat), Zapier, Python, and REST APIs to build AI-powered pipelines. He integrates LLMs with CRMs, databases, email platforms, and business tools — creating end-to-end automation without traditional software overhead.",
  },
  {
    q: "What is the difference between prompt engineering and traditional software development?",
    a: "Traditional software requires writing explicit code for every scenario. Prompt engineering teaches AI models to reason through structured instructions — achieving the same outcomes faster, with lower cost and maintenance. Ideal for content automation, data extraction, intelligent chatbots, and decision systems.",
  },
  {
    q: "Is Raj Kamal Neerati available for freelance or remote AI projects?",
    a: "Yes. Raj Kamal is based in Hyderabad, India and is open to full-time roles, freelance AI projects, and international remote collaborations. Reach out at neeratirajkamal0505@gmail.com or via the contact form below.",
  },
  {
    q: "How long does it take to build an AI automation system?",
    a: "Simple automation pipelines (single workflow, 1–2 integrations) typically take 1–3 days. Complex multi-step systems with LLM integration, custom APIs, and testing take 1–3 weeks. Every project starts with a scoping call to define the timeline clearly.",
  },
  {
    q: "What AI projects has Raj Kamal Neerati built?",
    a: "Raj Kamal has built HydroFlow — an AI metro crowd predictor using machine learning and predictive analytics — and HealthScanX, an AI-driven diagnostic tool that automates medical report generation using NLP and Python. Both are real-world deployments showcasing end-to-end AI automation.",
  },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="border border-white/10 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        data-testid={`faq-item-${index}`}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-semibold text-foreground text-base leading-snug">{faq.q}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-6 pb-5 text-muted-foreground leading-relaxed text-base">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  useEffect(() => {
    trackSectionView("faq");
  }, []);

  return (
    <AnimatedSection id="faq" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            People Also Ask
          </p>
          <h2 id="faq-heading" className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Questions
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to know about hiring a prompt engineer and AI automation expert from Hyderabad.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground text-sm">
            Have a different question?{" "}
            <a
              href="#contact"
              className="text-primary hover:underline font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ask me directly →
            </a>
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
