import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const SITE_URL = "https://elegant-profile-showcase.onrender.com";

const DEFAULT_TITLE =
  "Raj Kamal Neerati | Hire Prompt Engineer & AI Automation Expert — Hyderabad, India";

const DEFAULT_DESCRIPTION =
  "Hire Raj Kamal Neerati — Prompt Engineer & AI Automation Expert from Hyderabad. Specializing in n8n, Make, LLM integration & no-code AI systems. Open to remote & freelance roles. Contact today.";

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
      {/* ── Primary Meta ─────────────────────────────────────────────────────── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="author" content="Raj Kamal Neerati" />

      {/* Prompt 1 — 20 high-intent long-tail keywords (informational + navigational + transactional) */}
      <meta
        name="keywords"
        content="hire prompt engineer India, freelance AI automation developer Hyderabad, prompt engineering consultant India, hire n8n developer India, AI workflow automation expert for hire, no-code AI developer freelance India, LLM integration developer India, hire AI developer Hyderabad, how to use prompt engineering for business automation, what is AI workflow automation, n8n automation expert Hyderabad, how to build no-code AI systems, LLM integration guide startups, Raj Kamal Neerati portfolio, Raj Kamal prompt engineer Hyderabad, neeratirajkamal GitHub, AI pipeline design Hyderabad, intelligent workflow systems India, GPT prompt engineering expert, business process automation AI developer India, Make Integromat developer India, Python AI automation developer for hire, affordable AI developer India remote, startup AI developer Hyderabad, prompt engineering services India"
      />

      {/* ── Open Graph ───────────────────────────────────────────────────────── */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Raj Kamal Neerati — Prompt Engineer & AI Automation Expert, Hyderabad"
      />
      <meta property="og:site_name" content="Raj Kamal Neerati — AI Portfolio" />
      <meta property="og:locale" content="en_IN" />

      {/* ── Twitter Card ─────────────────────────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta
        name="twitter:image:alt"
        content="Raj Kamal Neerati — Prompt Engineer & AI Automation Expert"
      />
      <meta name="twitter:creator" content="@rajkamal_ai" />

      {/* ── Geo Tags ─────────────────────────────────────────────────────────── */}
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad, Telangana" />
      <meta name="geo.position" content="17.3850;78.4867" />
      <meta name="ICBM" content="17.3850, 78.4867" />

      {/* ── Mobile / PWA ─────────────────────────────────────────────────────── */}
      <meta name="theme-color" content="#0a0a14" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Raj Kamal Portfolio" />

      {/* ── JSON-LD: Person Schema ───────────────────────────────────────────── */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Raj Kamal Neerati",
          url: SITE_URL,
          jobTitle: "Prompt Engineer & AI Automation Expert",
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
            "Prompt Engineering",
            "AI Workflow Automation",
            "No-Code AI Systems",
            "n8n Automation",
            "Make (Integromat)",
            "LLM Integration",
            "Python",
            "React",
            "Machine Learning",
            "GPT Prompt Design",
            "Business Process Automation",
          ],
          sameAs: [
            "https://www.linkedin.com/in/raj-kamal-neerati-378a67272/",
            "https://github.com/neeratirajkamal",
          ],
          offers: {
            "@type": "Offer",
            description:
              "Freelance and full-time prompt engineering, AI workflow automation, and LLM integration services",
            availableAtOrFrom: {
              "@type": "Place",
              name: "Hyderabad, Telangana, India",
            },
            eligibleRegion: { "@type": "Place", name: "Worldwide" },
          },
        })}
      </script>

      {/* ── JSON-LD: WebSite Schema ──────────────────────────────────────────── */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Raj Kamal Neerati — Prompt Engineer & AI Automation Expert Portfolio",
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

      {/* ── JSON-LD: BreadcrumbList ───────────────────────────────────────────── */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "About Raj Kamal", item: `${SITE_URL}/#about` },
            { "@type": "ListItem", position: 3, name: "Skills & Tech Stack", item: `${SITE_URL}/#skills` },
            { "@type": "ListItem", position: 4, name: "AI Projects", item: `${SITE_URL}/#experience` },
            { "@type": "ListItem", position: 5, name: "FAQ", item: `${SITE_URL}/#faq` },
            { "@type": "ListItem", position: 6, name: "Contact", item: `${SITE_URL}/#contact` },
          ],
        })}
      </script>

      {/* ── JSON-LD: ItemList (Projects) ─────────────────────────────────────── */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "AI Projects by Raj Kamal Neerati — Prompt Engineer, Hyderabad",
          description:
            "Real-world AI automation and prompt engineering projects built by Raj Kamal Neerati.",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "CreativeWork",
                name: "HydroFlow — AI Metro Crowd Predictor",
                description:
                  "Intelligent AI system that predicts metro crowd patterns using machine learning and optimizes urban passenger flow in real time.",
                url: `${SITE_URL}/#experience`,
                keywords: ["AI/ML", "Python", "Predictive Analytics", "Urban Tech", "Prompt Engineering"],
                author: { "@type": "Person", name: "Raj Kamal Neerati" },
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "CreativeWork",
                name: "HealthScanX — AI Healthcare Diagnostic Automation",
                description:
                  "AI-driven diagnostic tool that automates health data analysis, generates reports, and flags anomalies for faster clinical decisions.",
                url: `${SITE_URL}/#experience`,
                keywords: ["AI Automation", "Healthcare", "Python", "NLP", "LLM Integration"],
                author: { "@type": "Person", name: "Raj Kamal Neerati" },
              },
            },
          ],
        })}
      </script>

      {/* ── JSON-LD: FAQPage — Prompt 3 (AEO for AI Search / People Also Ask) ── */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is prompt engineering and how can it help my business?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Prompt engineering is the practice of designing precise instructions that guide AI models like GPT to produce accurate, reliable, and production-ready outputs. For businesses, it eliminates AI hallucinations, automates content pipelines, and enables intelligent decision-making at scale — without writing complex code.",
              },
            },
            {
              "@type": "Question",
              name: "What does Raj Kamal Neerati specialize in?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Raj Kamal Neerati specializes in prompt engineering, AI workflow automation, LLM integration, and no-code AI systems using n8n, Make (Integromat), and Python. He builds intelligent pipelines that help startups and businesses automate decisions, reduce manual work, and scale faster.",
              },
            },
            {
              "@type": "Question",
              name: "How can I hire Raj Kamal Neerati as a prompt engineer or AI developer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can contact Raj Kamal Neerati directly at neeratirajkamal0505@gmail.com or use the contact form at https://elegant-profile-showcase.onrender.com/#contact. He is open to full-time, freelance, and remote roles. Response within 24 hours.",
              },
            },
            {
              "@type": "Question",
              name: "What is AI workflow automation and what tools does Raj Kamal use?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "AI workflow automation connects AI models with business processes to eliminate repetitive tasks. Raj Kamal uses n8n, Make (Integromat), Zapier, Python, and REST APIs to build automated pipelines that integrate LLMs with CRMs, databases, email systems, and more.",
              },
            },
            {
              "@type": "Question",
              name: "Is Raj Kamal Neerati available for remote work or freelance projects?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Raj Kamal Neerati is based in Hyderabad, India and is open to remote work, freelance AI projects, and international collaborations. Contact neeratirajkamal0505@gmail.com to discuss your project.",
              },
            },
            {
              "@type": "Question",
              name: "What is the difference between prompt engineering and traditional software development?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Traditional software development requires writing explicit code for every scenario. Prompt engineering teaches AI models to reason and respond correctly through structured instructions — achieving the same outcomes faster, with lower cost and maintenance overhead. It is ideal for content automation, data extraction, chatbots, and intelligent decision systems.",
              },
            },
            {
              "@type": "Question",
              name: "What AI projects has Raj Kamal Neerati built?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Raj Kamal has built HydroFlow (an AI metro crowd predictor using machine learning and predictive analytics) and HealthScanX (an AI-driven healthcare diagnostic tool that automates medical report generation using NLP and Python).",
              },
            },
            {
              "@type": "Question",
              name: "Where is Raj Kamal Neerati based?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Raj Kamal Neerati is based in Kakatiya Hills, Pragathi Nagar, KPHB Colony, Hyderabad, Telangana — 500090, India. He is open to remote opportunities worldwide.",
              },
            },
          ],
        })}
      </script>

      {/* ── JSON-LD: HowTo — Prompt 3 (step-by-step for AI Overviews) ────────── */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How Raj Kamal Neerati Builds AI Automation Systems",
          description:
            "A step-by-step process for designing and deploying AI workflow automation systems, as practiced by Raj Kamal Neerati, Prompt Engineer from Hyderabad.",
          step: [
            {
              "@type": "HowToStep",
              position: 1,
              name: "Understand the Business Problem",
              text: "Identify the repetitive decision or workflow that needs AI automation — whether it's data extraction, content generation, customer routing, or report creation.",
            },
            {
              "@type": "HowToStep",
              position: 2,
              name: "Design the Prompt Architecture",
              text: "Engineer structured prompts that guide the LLM to reason accurately, handle edge cases, and return production-ready outputs with zero hallucination.",
            },
            {
              "@type": "HowToStep",
              position: 3,
              name: "Build the Automation Pipeline",
              text: "Connect the AI model to business tools using n8n, Make, or custom Python scripts. Integrate with APIs, databases, CRMs, and communication platforms.",
            },
            {
              "@type": "HowToStep",
              position: 4,
              name: "Test, Iterate & Deploy",
              text: "Run real-world tests, measure accuracy and performance, refine prompts, then deploy the fully automated system to production.",
            },
          ],
        })}
      </script>
    </Helmet>
  );
}
