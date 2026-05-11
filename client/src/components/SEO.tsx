import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const SITE_URL = "https://elegant-profile-showcase.onrender.com";
const DEFAULT_TITLE = "Raj Kamal Neerati — Prompt Engineering | Hyderabad";
const DEFAULT_DESCRIPTION =
  "Raj Kamal Neerati — Prompt Engineering from Hyderabad. Expert in prompt engineering, AI workflow automation, n8n, Make, and no-code AI systems. Based in KPHB Colony, Hyderabad.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.svg`;

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical = SITE_URL,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
}: SEOProps) {
  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Raj Kamal Neerati" />
      <meta
        name="keywords"
        content="AI developer Hyderabad, AI automation developer India, hire AI developer Hyderabad, prompt engineering expert India, no-code AI systems developer, MCA developer Hyderabad, full stack AI developer India, workflow automation developer, n8n developer India, Make automation developer, Raj Kamal Neerati, AI developer open to work, hire automation developer India"
      />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Raj Kamal Neerati — Prompt Engineering, Hyderabad" />
      <meta property="og:site_name" content="Raj Kamal Neerati Portfolio" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Raj Kamal Neerati — AI & Automation Developer" />
      <meta name="twitter:creator" content="@rajkamal_ai" />

      {/* Geo Tags */}
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad, Telangana" />
      <meta name="geo.position" content="17.3850;78.4867" />
      <meta name="ICBM" content="17.3850, 78.4867" />

      {/* Mobile / PWA */}
      <meta name="theme-color" content="#0a0a14" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Raj Kamal Portfolio" />

      {/* ── JSON-LD Structured Data ─────────────────────────────────────────── */}

      {/* Person Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Raj Kamal Neerati",
          url: SITE_URL,
          jobTitle: "Prompt Engineering",
          description: DEFAULT_DESCRIPTION,
          image: DEFAULT_OG_IMAGE,
          email: "neeratirajkamal0505@gmail.com",
          telephone: "+916303551518",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kakatiya Hills, Pragathi Nagar, KPHB Colony",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500090",
            addressCountry: "IN",
          },
          alumniOf: {
            "@type": "EducationalOrganization",
            name: "Anurag University",
            address: { "@type": "PostalAddress", addressLocality: "Hyderabad" },
          },
          hasCredential: [
            {
              "@type": "EducationalOccupationalCredential",
              name: "Automate Your Work with AI",
              credentialCategory: "Certificate",
              recognizedBy: { "@type": "Organization", name: "Google / Coursera" },
            },
          ],
          knowsAbout: [
            "AI Workflow Automation",
            "Prompt Engineering",
            "No-Code AI Systems",
            "n8n Automation",
            "Make (Integromat)",
            "Python",
            "React",
            "Machine Learning",
            "LLM Integration",
          ],
          sameAs: [
            "https://www.linkedin.com/in/raj-kamal-neerati-378a67272/",
            "https://github.com/rajkamal-neerati",
          ],
        })}
      </script>

      {/* WebSite Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Raj Kamal Neerati — AI Developer Portfolio",
          url: SITE_URL,
          description: DEFAULT_DESCRIPTION,
          inLanguage: "en-IN",
          author: { "@type": "Person", name: "Raj Kamal Neerati" },
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE_URL}/?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        })}
      </script>

      {/* BreadcrumbList */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/#about` },
            { "@type": "ListItem", position: 3, name: "Skills & Tech Stack", item: `${SITE_URL}/#skills` },
            { "@type": "ListItem", position: 4, name: "AI Projects", item: `${SITE_URL}/#experience` },
            { "@type": "ListItem", position: 5, name: "Contact", item: `${SITE_URL}/#contact` },
          ],
        })}
      </script>

      {/* Projects ItemList */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "AI Projects by Raj Kamal Neerati",
          description: "AI and automation projects built by Raj Kamal Neerati, AI developer from Hyderabad.",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "CreativeWork",
                name: "HydroFlow — AI Metro Crowd Predictor",
                description:
                  "An intelligent AI system that predicts metro crowd patterns and optimizes passenger flow using machine learning models.",
                url: `${SITE_URL}/#experience`,
                keywords: ["AI/ML", "Python", "Predictive Analytics", "Urban Tech"],
                author: { "@type": "Person", name: "Raj Kamal Neerati" },
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "CreativeWork",
                name: "HealthScanX",
                description:
                  "AI-driven diagnostic tool that streamlines health data analysis and automates report generation for faster clinical decisions.",
                url: `${SITE_URL}/#experience`,
                keywords: ["AI Automation", "Healthcare", "Python", "NLP"],
                author: { "@type": "Person", name: "Raj Kamal Neerati" },
              },
            },
          ],
        })}
      </script>

      {/* FAQPage Schema — recruiter & client search queries */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is Raj Kamal Neerati available for hire?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — Raj Kamal Neerati is actively available for full-time, freelance, and remote AI automation developer roles. Contact at neeratirajkamal0505@gmail.com.",
              },
            },
            {
              "@type": "Question",
              name: "What does Raj Kamal Neerati specialize in?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Raj Kamal specializes in AI workflow automation, prompt engineering, no-code AI systems (n8n, Make), LLM integration, and Python-based AI solutions.",
              },
            },
            {
              "@type": "Question",
              name: "Where is Raj Kamal Neerati based?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Raj Kamal Neerati is based in Hyderabad, Telangana, India and is open to remote opportunities worldwide.",
              },
            },
            {
              "@type": "Question",
              name: "What AI projects has Raj Kamal Neerati built?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Raj Kamal has built HydroFlow (AI metro crowd predictor) and HealthScanX (AI diagnostic tool for healthcare automation), among other AI automation systems.",
              },
            },
            {
              "@type": "Question",
              name: "How can I contact Raj Kamal Neerati for freelance or full-time work?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Email neeratirajkamal0505@gmail.com or use the contact form at https://elegant-profile-showcase.onrender.com/#contact. He responds within 24 hours.",
              },
            },
          ],
        })}
      </script>
    </Helmet>
  );
}
