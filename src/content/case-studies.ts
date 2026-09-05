import type { Signal } from "@/types/content";

export interface CaseStudy {
  readonly slug: string;
  readonly client: string;
  readonly title: string;
  readonly industrySlug: string;
  readonly signal: Signal;
  readonly year: string;
  /** False for demo entries, which must be labelled everywhere they appear. */
  readonly real: boolean;
  readonly summary: string;
  readonly serviceSlugs: readonly string[];
  /** Metric slots stay empty until real figures exist. Never invented. */
  readonly metrics: readonly { label: string; value: string | null }[];
  readonly sections: readonly { heading: string; body: string }[];
  readonly image?: string;
  readonly imageAlt: string;
}

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    slug: "peptide-commerce-platform",
    client: "Peptide business",
    title: "A research peptide storefront built to be believed.",
    industrySlug: "peptides",
    signal: "blue",
    year: "2026",
    real: true,
    summary:
      "A peptide business needed a storefront that could carry product documentation, survive without dependable paid acquisition, and be understood correctly by search engines and answer engines. ViceStack designed and built it.",
    serviceSlugs: [
      "website-development",
      "search-local-and-ai-discovery",
      "core-strategy-and-knowledge",
      "analytics-and-growth-intelligence",
    ],
    metrics: [
      { label: "Organic visibility", value: null },
      { label: "Enquiry volume", value: null },
      { label: "Core Web Vitals", value: null },
    ],
    sections: [
      {
        heading: "Challenge",
        body: "The category attracts a cautious, well-informed buyer and a crowded field of thin, near-identical storefronts. Advertising access could not be relied on, so the website had to carry acquisition, trust and enquiry handling on its own.",
      },
      {
        heading: "Approach",
        body: "We started with the knowledge layer — products, categories, documentation and the constraints the business operates under — then built the site from that single source, so a new product becomes a page, structured data and internal links in one step.",
      },
      {
        heading: "Website",
        body: "A fast, crawlable storefront with product and documentation presentation designed for a buyer who is verifying the seller before considering the price. Enquiry capture routes by product interest rather than into a single inbox.",
      },
      {
        heading: "Discovery",
        body: "Technical SEO, entity structure and structured data implemented from the first commit rather than retrofitted, with direct-answer content written against the questions buyers actually ask.",
      },
      {
        heading: "Measurement",
        body: "Conversion tracking and reporting built alongside the site, so enquiry sources were attributable from launch rather than reconstructed later.",
      },
    ],
    image: "/images/case-peptide.jpg",
    imageAlt:
      "Clinical white product vial photographed against a deep shadow, with an electric blue graphic field behind it",
  },
];

export const REAL_CASE_STUDIES = CASE_STUDIES.filter((c) => c.real);

const BY_SLUG = new Map(CASE_STUDIES.map((c) => [c.slug, c]));

export function getCaseStudy(slug: string): CaseStudy | null {
  return BY_SLUG.get(slug) ?? null;
}
