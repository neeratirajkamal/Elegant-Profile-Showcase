import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { trackContactClick, trackSectionView } from "@/lib/analytics";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      trackSectionView(id);
      setMobileOpen(false);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <motion.header
        role="banner"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            className="text-xl font-bold font-display cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Raj Kamal Neerati — back to top"
            data-testid="button-nav-logo"
          >
            RKN.
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`button-nav-${item.id}`}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <button
              onClick={() => {
                scrollTo("contact");
                trackContactClick("navbar_cta");
              }}
              className="hidden md:inline-flex h-10 px-6 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium text-sm"
              data-testid="button-nav-contact"
              aria-label="Hire Raj Kamal Neerati"
            >
              Hire Me
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full glass-card text-foreground"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              data-testid="button-nav-mobile-toggle"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-md px-6 py-4"
            >
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <button
                        onClick={() => scrollTo(item.id)}
                        className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                        data-testid={`button-mobile-nav-${item.id}`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                  <li className="mt-3">
                    <button
                      onClick={() => {
                        scrollTo("contact");
                        trackContactClick("mobile_navbar_cta");
                      }}
                      className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all"
                      data-testid="button-mobile-nav-contact"
                    >
                      Hire Me
                    </button>
                  </li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Sticky mobile CTA — Part 5 CRO — only shows after scroll */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/80 backdrop-blur-md border-t border-white/5"
          >
            <button
              onClick={() => {
                scrollTo("contact");
                trackContactClick("sticky_mobile_cta");
              }}
              className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
              data-testid="button-sticky-mobile-cta"
              aria-label="Contact Raj Kamal Neerati"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              Available for Hire — Contact Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
