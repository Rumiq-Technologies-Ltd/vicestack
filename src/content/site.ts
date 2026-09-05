export const SITE = {
  name: "ViceStack",
  /** Set NEXT_PUBLIC_SITE_URL per environment. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vicestack.com",
  tagline: "Technology + digital growth for high-friction businesses.",
  description:
    "ViceStack builds the technology, discovery, acquisition and automation infrastructure behind businesses in regulated, restricted and high-friction markets across the US and Canada.",
  positioning:
    "We build the technology and growth infrastructure behind high-friction businesses.",
  regions: ["United States", "Canada"] as const,
  email: "hello@vicestack.com",
} as const;

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Client Portal", href: "/portal" },
] as const;

export const CTA = {
  primary: { label: "Book a consultation", href: "/contact" },
  secondary: { label: "Get a free growth audit", href: "/growth-audit" },
  tool: { label: "Find your growth stack", href: "/find-your-growth-stack" },
} as const;

/** Hedges required whenever advertising channels or regulation are described.
 *  ViceStack does not guarantee compliance or platform approval. */
export const HEDGE = {
  platform: "subject to platform policies",
  availability: "where available",
  market: "depending on market and platform",
} as const;

export const FOOTER_LEGAL = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

export const SOCIAL = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X", href: "#" },
] as const;
