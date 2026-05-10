import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const SITE_URL = "https://elegant-profile-showcase.onrender.com";
const DEFAULT_TITLE = "Raj Kamal Neerati — AI & Automation Developer | Hyderabad";
const DEFAULT_DESCRIPTION =
  "Hire Raj Kamal Neerati — AI & Automation Developer from Hyderabad. Specializing in AI workflow automation, prompt engineering, and no-code AI systems. MCA graduate open to work.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

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
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Raj Kamal Neerati" />
      <meta
        name="keywords"
        content="AI developer Hyderabad, AI automation developer India, hire AI developer, prompt engineering expert, no-code AI systems, MCA developer Hyderabad, full stack AI developer, workflow automation developer, machine learning Hyderabad, Raj Kamal Neerati"
      />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Raj Kamal Neerati — AI & Automation Developer" />
      <meta property="og:site_name" content="Raj Kamal Neerati Portfolio" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Raj Kamal Neerati — AI & Automation Developer" />

      {/* Geo Tags */}
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad" />
      <meta name="geo.position" content="17.3850;78.4867" />
      <meta name="ICBM" content="17.3850, 78.4867" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Raj Kamal Neerati",
          url: SITE_URL,
          jobTitle: "AI & Automation Developer",
          description:
            "AI & Automation Developer from Hyderabad specializing in AI workflow automation, prompt engineering, and no-code AI systems.",
          image: DEFAULT_OG_IMAGE,
          email: "neeratirajkamal0505@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
          alumniOf: {
            "@type": "EducationalOrganization",
            name: "Anurag University",
          },
          knowsAbout: [
            "AI Workflow Automation",
            "Prompt Engineering",
            "No-Code AI Systems",
            "n8n Automation",
            "Machine Learning",
            "Full Stack Development",
          ],
          sameAs: [
            "https://linkedin.com",
            "https://github.com",
          ],
        })}
      </script>

      {/* WebSite Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Raj Kamal Neerati Portfolio",
          url: SITE_URL,
          description: DEFAULT_DESCRIPTION,
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
            { "@type": "ListItem", position: 3, name: "Skills", item: `${SITE_URL}/#skills` },
            { "@type": "ListItem", position: 4, name: "Experience", item: `${SITE_URL}/#experience` },
            { "@type": "ListItem", position: 5, name: "Contact", item: `${SITE_URL}/#contact` },
          ],
        })}
      </script>

      {/* Projects ItemList Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Raj Kamal Neerati — AI Projects",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "CreativeWork",
                name: "Metro Crowd Predictor Hydro Flow",
                description:
                  "An intelligent system designed to predict metro crowd patterns and optimize flow using advanced AI models.",
                url: `${SITE_URL}/#experience`,
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
                  "AI-driven diagnostic tool that streamlines health data analysis and simplifies medical workflows.",
                url: `${SITE_URL}/#experience`,
                author: { "@type": "Person", name: "Raj Kamal Neerati" },
              },
            },
          ],
        })}
      </script>

      {/* FAQ Schema — recruiter/client questions */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is Raj Kamal Neerati available for freelance work?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Raj Kamal Neerati is available for freelance and full-time opportunities. He specializes in AI workflow automation, prompt engineering, and no-code AI systems. Reach out at neeratirajkamal0505@gmail.com.",
              },
            },
            {
              "@type": "Question",
              name: "What technologies does Raj Kamal Neerati specialize in?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Raj Kamal specializes in AI automation, prompt engineering, no-code AI platforms (n8n, Make), and full-stack AI solutions. He is an MCA graduate from Anurag University, Hyderabad.",
              },
            },
            {
              "@type": "Question",
              name: "Where is Raj Kamal Neerati based?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Raj Kamal Neerati is based in Hyderabad, Telangana, India, and is open to remote work opportunities worldwide.",
              },
            },
            {
              "@type": "Question",
              name: "What AI projects has Raj Kamal Neerati built?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Raj Kamal has built Metro Crowd Predictor Hydro Flow — an AI system for predicting metro crowd patterns — and HealthScanX, an AI-driven diagnostic tool for health data analysis.",
              },
            },
            {
              "@type": "Question",
              name: "How can I hire Raj Kamal Neerati?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can contact Raj Kamal Neerati directly at neeratirajkamal0505@gmail.com or through the contact form on his portfolio at https://elegant-profile-showcase.onrender.com/.",
              },
            },
          ],
        })}
      </script>
    </Helmet>
  );
}
