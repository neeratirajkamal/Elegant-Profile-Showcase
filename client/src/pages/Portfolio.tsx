import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { initScrollDepthTracking, initTimeOnSiteTracking } from "@/lib/analytics";

export default function Portfolio() {
  useEffect(() => {
    const cleanupScroll = initScrollDepthTracking();
    const cleanupTime = initTimeOnSiteTracking();
    return () => {
      cleanupScroll();
      cleanupTime();
    };
  }, []);

  return (
    <>
      <SEO />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
