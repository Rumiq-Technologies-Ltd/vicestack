import type { Signal } from "@/types/content";

export interface Insight {
  readonly slug: string;
  readonly title: string;
  readonly category: string;
  readonly signal: Signal;
  readonly date: string;
  readonly readingTime: string;
  readonly excerpt: string;
  /** All current entries are demo articles awaiting real editorial. */
  readonly draft: boolean;
}

export const INSIGHT_CATEGORIES = [
  "Strategy",
  "Brand",
  "Websites",
  "SEO",
  "AEO",
  "Local Search",
  "Paid Media",
  "Automation",
  "Analytics",
  "Growth",
  "Industry Insights",
] as const;

/**
 * Placeholder editorial. Titles come from the brief; bodies are written in
 * Phase 2. Every entry is flagged `draft` and rendered with a visible marker
 * until replaced with real published content.
 */
export const INSIGHTS: readonly Insight[] = [
  {
    slug: "why-traditional-agencies-struggle-with-high-friction-markets",
    title: "Why traditional digital agencies struggle with high-friction markets",
    category: "Strategy",
    signal: "red",
    date: "2026-08-14",
    readingTime: "6 min",
    excerpt:
      "The standard playbook opens with paid social. For a whole class of legitimate businesses, that first move is unavailable — and most agencies have no second move.",
    draft: true,
  },
  {
    slug: "your-website-is-infrastructure",
    title: "Your website isn't your marketing. It's your infrastructure.",
    category: "Websites",
    signal: "blue",
    date: "2026-08-02",
    readingTime: "5 min",
    excerpt:
      "When advertising is conditional and social accounts can disappear, the website stops being a brochure and starts being the operating surface of the business.",
    draft: true,
  },
  {
    slug: "search-is-becoming-an-answer",
    title: "SEO is changing. Search is becoming an answer.",
    category: "AEO",
    signal: "yellow",
    date: "2026-07-21",
    readingTime: "7 min",
    excerpt:
      "Ranking for a query matters less than being the source a system quotes. What that changes about structure, entities and how you write.",
    draft: true,
  },
  {
    slug: "customers-who-search-without-clicking",
    title: "What happens when your customers search without clicking?",
    category: "SEO",
    signal: "yellow",
    date: "2026-07-09",
    readingTime: "5 min",
    excerpt:
      "Zero-click behaviour is not a traffic problem to be solved. It is a change in where the buying decision happens.",
    draft: true,
  },
  {
    slug: "build-a-growth-stack-before-you-spend-more-on-ads",
    title: "Building a growth stack before you spend more on ads",
    category: "Growth",
    signal: "neutral",
    date: "2026-06-27",
    readingTime: "6 min",
    excerpt:
      "Adding budget to a funnel that leaks is a way of finding out how fast it leaks. The order the layers arrive in is the whole argument.",
    draft: true,
  },
  {
    slug: "marketing-without-attribution",
    title: "Marketing without attribution is just expensive guesswork.",
    category: "Analytics",
    signal: "blue",
    date: "2026-06-11",
    readingTime: "6 min",
    excerpt:
      "If two platforms both claim the same conversion, at least one is wrong. Defining measurement once is what turns reporting into decisions.",
    draft: true,
  },
];

const BY_SLUG = new Map(INSIGHTS.map((i) => [i.slug, i]));

export function getInsight(slug: string): Insight | null {
  return BY_SLUG.get(slug) ?? null;
}

export function formatInsightDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
