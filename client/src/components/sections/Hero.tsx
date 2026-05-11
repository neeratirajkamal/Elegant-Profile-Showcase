import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Github } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { trackContactClick, trackLinkedInClick, trackGitHubClick } from "@/lib/analytics";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    trackContactClick("hero_primary_cta");
  };

  return (
    <section
      id="home"
      aria-label="Raj Kamal Neerati — Prompt Engineering based in Hyderabad"
      className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-center pointer-events-none" aria-hidden="true">
        <div className="w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary border-primary/20">
              <CheckCircle className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium">Prompt Engineer · Hyderabad, India</span>
            </div>
          </div>

          {/* H1 — keyword-rich for SEO, Part 2 */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.1] mb-6">
            Raj Kamal Neerati —{" "}
            <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-indigo-400">
              Prompt Engineering
            </span>{" "}
            Hyderabad
          </h1>

          {/* Recruiter-focused subheadline — Part 5 CRO */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl leading-relaxed">
            I build AI workflow systems, prompt-engineered pipelines, and no-code automation that help businesses make smarter decisions, faster.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground/70 mb-10 max-w-xl leading-relaxed">
            Specializing in <strong className="text-foreground/80">AI automation</strong>, <strong className="text-foreground/80">n8n / Make workflows</strong>, and <strong className="text-foreground/80">intelligent system design</strong>.
          </p>

          {/* CTA row — Part 5 CRO optimization */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              data-testid="button-hero-contact"
              aria-label="Contact Raj Kamal Neerati"
              className="h-14 px-8 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/25"
            >
              Hire Me <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>

            <a
              href="https://www.linkedin.com/in/raj-kamal-neerati-378a67272/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-hero-linkedin"
              aria-label="View Raj Kamal Neerati on LinkedIn"
              onClick={() => trackLinkedInClick("hero_linkedin_cta")}
              className="h-14 px-8 rounded-full glass-card text-foreground font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
            >
              <SiLinkedin className="w-5 h-5 text-[#0A66C2]" aria-hidden="true" />
              LinkedIn Profile
            </a>

            <a
              href="https://github.com/rajkamal-neerati"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-hero-github"
              aria-label="View Raj Kamal Neerati on GitHub"
              onClick={() => trackGitHubClick("hero_github_cta")}
              className="h-14 px-8 rounded-full glass-card text-foreground font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
              GitHub
            </a>
          </div>

          {/* Social proof micro-copy — Part 5 CRO trust signal */}
          <p className="mt-6 text-sm text-muted-foreground/60">
            2 AI projects shipped · Google-certified · Hyderabad, Telangana
          </p>
        </motion.div>
      </div>
    </section>
  );
}
