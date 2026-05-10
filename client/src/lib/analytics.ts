/* ─────────────────────────────────────────────────────────────────────────────
   GA4 Analytics Utility — Parts 3 & 6
   Full event taxonomy + recruiter intent scoring + audience segmentation
   ───────────────────────────────────────────────────────────────────────────── */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type GtagEvent = {
  [key: string]: string | number | boolean | undefined;
};

function track(eventName: string, params: GtagEvent = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      ...params,
      send_to: "G-BQE8PSN8R3",
    });
  }
}

// ── Page & Session ───────────────────────────────────────────────────────────

export function trackPageView(path: string, title: string) {
  track("page_view", {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

// ── CTA & Navigation ─────────────────────────────────────────────────────────

export function trackContactClick(source: string) {
  track("contact_click", { cta_source: source });
  incrementEngagementScore(5);
}

export function trackLinkedInClick(source: string) {
  track("linkedin_click", { cta_source: source });
  incrementEngagementScore(8);
  flagRecruiterIntent("linkedin_visit");
}

export function trackGitHubClick(source: string) {
  track("github_click", { cta_source: source });
  incrementEngagementScore(6);
}

export function trackEmailClick() {
  track("email_click", { method: "mailto" });
  incrementEngagementScore(10);
  flagRecruiterIntent("email_contact");
}

export function trackResumeDownload() {
  track("resume_download", { file_name: "raj_kamal_neerati_resume.pdf" });
  incrementEngagementScore(15);
  flagRecruiterIntent("resume_download");
}

// ── Project Tracking ─────────────────────────────────────────────────────────

export function trackProjectView(projectName: string, index: number) {
  track("project_view", {
    project_name: projectName,
    project_index: index,
    engagement_type: "view",
  });
  incrementEngagementScore(3);
}

export function trackProjectExpand(projectName: string) {
  track("project_expand", {
    project_name: projectName,
    engagement_type: "expand",
  });
  incrementEngagementScore(5);
}

// ── Form ─────────────────────────────────────────────────────────────────────

export function trackFormStart() {
  track("form_start", { form_name: "contact_form" });
}

export function trackFormSubmission(success: boolean) {
  track("form_submission", {
    form_name: "contact_form",
    success,
    engagement_type: "conversion",
  });
  if (success) {
    incrementEngagementScore(20);
    flagRecruiterIntent("contact_form");
  }
}

// ── Scroll Depth ─────────────────────────────────────────────────────────────

let firedDepths = new Set<number>();

export function initScrollDepthTracking() {
  firedDepths = new Set();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = Math.round((scrollTop / docHeight) * 100);

    ([25, 50, 75, 90, 100] as const).forEach((depth) => {
      if (pct >= depth && !firedDepths.has(depth)) {
        firedDepths.add(depth);
        track("scroll_depth", { percent_scrolled: depth });
        if (depth === 50) incrementEngagementScore(3);
        if (depth === 90) {
          incrementEngagementScore(7);
          flagRecruiterIntent("deep_scroll");
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}

// ── Section Visibility ────────────────────────────────────────────────────────

export function trackSectionView(sectionId: string) {
  track("section_view", { section_id: sectionId });
}

// ── Recruiter Intent Scoring (Parts 5 & 6) ───────────────────────────────────

const INTENT_KEY = "rkn_intent_score";
const ENGAGEMENT_KEY = "rkn_engagement_score";
const VISITOR_TYPE_KEY = "rkn_visitor_type";

function getScore(key: string): number {
  return parseInt(sessionStorage.getItem(key) ?? "0", 10);
}

function setScore(key: string, value: number) {
  sessionStorage.setItem(key, String(value));
}

function incrementEngagementScore(delta: number) {
  const newScore = getScore(ENGAGEMENT_KEY) + delta;
  setScore(ENGAGEMENT_KEY, newScore);

  // Push engagement score as a GA4 user property
  if (typeof window.gtag === "function") {
    window.gtag("set", "user_properties", {
      engagement_score: newScore,
      visitor_type: getVisitorType(),
    });
  }
}

function flagRecruiterIntent(signal: string) {
  const score = getScore(INTENT_KEY) + 1;
  setScore(INTENT_KEY, score);

  track("recruiter_intent_signal", {
    signal_type: signal,
    intent_score: score,
  });

  // Classify visitor after enough signals
  if (score >= 2) {
    setScore(VISITOR_TYPE_KEY, 2); // 2 = recruiter
    if (typeof window.gtag === "function") {
      window.gtag("set", "user_properties", { visitor_type: "recruiter" });
    }
  }
}

function getVisitorType(): string {
  const t = getScore(VISITOR_TYPE_KEY);
  if (t === 2) return "recruiter";
  if (t === 1) return "client";
  return "developer";
}

// ── Outbound Link Helper ──────────────────────────────────────────────────────

export function trackOutboundLink(url: string, label: string) {
  track("outbound_link", { link_url: url, link_label: label });
}

// ── Time on Site ──────────────────────────────────────────────────────────────

export function initTimeOnSiteTracking() {
  const startTime = Date.now();

  const sendTime = () => {
    const seconds = Math.round((Date.now() - startTime) / 1000);
    track("time_on_site", { seconds_spent: seconds });
  };

  window.addEventListener("beforeunload", sendTime);
  return () => window.removeEventListener("beforeunload", sendTime);
}
