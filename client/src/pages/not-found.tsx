import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — Raj Kamal Neerati Portfolio</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
        <div className="text-center px-6">
          <p className="text-primary font-mono text-lg mb-4">404</p>
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">Page Not Found</h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
            This page doesn't exist. Head back to the portfolio to see Raj Kamal's work.
          </p>
          <Link href="/">
            <a className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300">
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
