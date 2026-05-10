import { SiLinkedin, SiGithub } from "react-icons/si";
import { Mail } from "lucide-react";
import { trackLinkedInClick, trackGitHubClick, trackEmailClick } from "@/lib/analytics";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-background" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-foreground">
              Raj Kamal Neerati
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              AI & Automation Developer · Hyderabad, India
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-center">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#experience" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/rajkamal-neerati"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile of Raj Kamal Neerati"
              data-testid="link-footer-linkedin"
              onClick={() => trackLinkedInClick("footer")}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all"
            >
              <SiLinkedin className="w-5 h-5 text-[#0A66C2]" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/rajkamal-neerati"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile of Raj Kamal Neerati"
              data-testid="link-footer-github"
              onClick={() => trackGitHubClick("footer")}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all"
            >
              <SiGithub className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="mailto:neeratirajkamal0505@gmail.com"
              aria-label="Email Raj Kamal Neerati"
              data-testid="link-footer-email"
              onClick={trackEmailClick}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Copyright + schema-friendly microdata */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-muted-foreground/60 space-y-1">
          <p>© {year} Raj Kamal Neerati. All rights reserved.</p>
          <p>
            AI Automation Developer · Hyderabad, Telangana, India ·{" "}
            <a href="mailto:neeratirajkamal0505@gmail.com" className="hover:text-primary transition-colors">
              neeratirajkamal0505@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
