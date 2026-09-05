import type { Service } from "@/types/content";

/**
 * The nine ViceStack services, in stack order. The conceptual stack has eight
 * layers — Engagement covers both Social Media and Email — but all nine
 * services stay individually explicit everywhere they appear.
 */
export const SERVICES: readonly Service[] = [
  {
    number: "01",
    slug: "core-strategy-and-knowledge",
    category: "Foundation",
    layer: "Strategy",
    title: "Core Strategy & Knowledge",
    signal: "neutral",
    headline: "One source of truth, written down before anything gets built.",
    question:
      "What is a core strategy and knowledge foundation, and why does it come first?",
    directAnswer:
      "Core Strategy & Knowledge is a single documented record of your positioning, audiences, services, priorities and operating constraints. Every other layer of the stack reads from it. It exists so that a search result, an ad, a WhatsApp reply and a newsletter all describe the same business in the same terms.",
    description:
      "Most growth problems are not channel problems. They are alignment problems that only become visible once money is being spent. We start by writing the business down: what it sells, who it serves, what it can and cannot say, and which constraints are real. That record then governs everything downstream.",
    includes: [
      "Positioning and market definition",
      "Audience and segment definitions",
      "Service, product and category taxonomy",
      "Messaging hierarchy and proof points",
      "Operating constraints and channel limitations",
      "Marketing priorities and sequencing",
      "Terminology standards used across every channel",
    ],
    deliverables: [
      "Strategy and knowledge base",
      "Messaging framework",
      "Priority and sequencing map",
      "Constraint register",
    ],
    outcome:
      "Decisions stop being re-argued. New channels launch from an existing position instead of inventing one.",
    nextStep:
      "Start with a growth audit to separate what is documented from what is assumed.",
  },
  {
    number: "02",
    slug: "brand-guidelines",
    category: "Identity",
    layer: "Brand",
    title: "Brand Guidelines",
    signal: "neutral",
    headline: "A brand that survives contact with every channel.",
    question:
      "What do brand guidelines cover, and why do restricted businesses need them?",
    directAnswer:
      "Brand guidelines define visual identity, tone of voice, messaging and imagery rules, and how each is applied per touchpoint. In restricted markets they carry extra weight: the rules also record what the brand will not say or show, which keeps a business consistent under review and recognisable when a channel becomes unavailable.",
    description:
      "A brand in a high-friction market is judged faster and more harshly. It has to signal legitimacy in the first two seconds on a product page, a profile and a packing slip alike. Guidelines make that repeatable by people who were not in the room when the brand was made.",
    includes: [
      "Visual identity and logo system",
      "Typography and colour system",
      "Imagery and art direction rules",
      "Tone of voice and writing standards",
      "Messaging application per channel",
      "Packaging and physical touchpoints",
      "Explicit boundaries what the brand does not say or show",
    ],
    deliverables: [
      "Brand guidelines document",
      "Logo and asset library",
      "Tone of voice guide",
      "Channel application examples",
    ],
    outcome: "Every touchpoint reads as the same company, whoever produced it.",
    nextStep:
      "Pair with Website Development so the guidelines ship as working components rather than a PDF.",
  },
  {
    number: "03",
    slug: "search-local-and-ai-discovery",
    category: "Discovery",
    layer: "Discovery",
    title: "Search, Local & AI Discovery",
    signal: "yellow",
    headline: "Be findable in the places your market actually looks.",
    question:
      "How can a regulated or restricted business improve online visibility without relying only on paid ads?",
    directAnswer:
      "By making the business genuinely legible to the systems people search with: organic search, maps and local results, review and citation surfaces, and the answer engines and AI assistants now sitting in front of them. That takes structured, factual, well-linked content on a clean technical foundation the kind of visibility a business owns rather than rents.",
    description:
      "Discovery matters most when advertising is restricted, because it is the layer nobody can switch off. We treat search, local and answer engines as one problem: give the systems clear entities, clear definitions and clear answers, and let them place you.",
    includes: [
      "Technical SEO and site architecture",
      "Local SEO, Google Business Profile and maps presence",
      "Answer engine optimisation and generative search visibility",
      "Entity and topical authority development",
      "Reviews and citation consistency",
      "Multilingual and multi-market search where relevant",
      "Agent readiness machine-readable structure and clean crawl paths",
    ],
    deliverables: [
      "Discovery audit and opportunity map",
      "Site architecture and internal linking plan",
      "Structured data implementation",
      "Content briefs and answer targets",
      "Local presence setup and cleanup",
    ],
    outcome: "Qualified discovery that keeps working when a paid channel closes.",
    nextStep: "A growth audit will show where discovery is currently leaking.",
  },
  {
    number: "04",
    slug: "website-development",
    category: "Conversion",
    layer: "Website",
    title: "Website Development",
    signal: "blue",
    headline: "Your website is not marketing. It is infrastructure.",
    question: "What should a high-friction business expect from its website?",
    directAnswer:
      "It should be the one asset that cannot be suspended, so it has to carry more load than a brochure: discovery, trust, product understanding, enquiry handling, measurement and integrations. We plan, build and keep optimising it as the hub every other channel points at.",
    description:
      "When advertising is conditional and social accounts can disappear, the website stops being a marketing artefact and becomes the operating surface of the business. We build it that way fast, crawlable, accessible, measurable, and structured so content can change without redesigning the page.",
    includes: [
      "Information architecture and UX",
      "Design system and component build",
      "Search and answer-engine ready templates",
      "Conversion paths and enquiry handling",
      "Trust, transparency and product information design",
      "Mobile performance and Core Web Vitals",
      "Analytics and marketing integrations",
    ],
    deliverables: [
      "Production website",
      "Reusable component and content system",
      "Structured data and SEO architecture",
      "Analytics and conversion tracking",
      "Documentation and handover",
    ],
    outcome:
      "A hub that converts, ranks and reports — and that you still own next quarter.",
    nextStep: "See the peptide business build in Case Studies.",
  },
  {
    number: "05",
    slug: "paid-media",
    category: "Acquisition",
    layer: "Acquisition",
    title: "Paid Media",
    signal: "red",
    headline: "Buy attention where you are actually allowed to buy it.",
    question: "Can restricted businesses run paid advertising?",
    directAnswer:
      "Sometimes, partially, and it varies by product, market and platform. Channel availability changes and approval is never guaranteed, so we plan paid media around what is currently permitted, build tracking that proves what it returns, and make sure the business is not structurally dependent on any single channel.",
    description:
      "Paid media in a high-friction category is an exercise in constraints. The work is knowing which channels are open to your specific category and market, structuring accounts and creative to stay inside them, and connecting spend to real acquisition economics rather than platform-reported optimism.",
    includes: [
      "Channel assessment for your category and market",
      "Campaign structure and targeting",
      "Creative strategy and iteration",
      "Landing page and offer alignment",
      "Lead handling and routing",
      "Conversion tracking and attribution",
      "Acquisition economics and budget pacing",
    ],
    deliverables: [
      "Channel viability assessment",
      "Campaign build and structure",
      "Creative and landing page plan",
      "Tracking and reporting setup",
    ],
    outcome:
      "Spend measured against revenue, with a clear view of what happens if a channel closes.",
    nextStep:
      "Channel availability varies by market and platform and is subject to platform policies. We assess yours before proposing spend.",
  },
  {
    number: "06",
    slug: "social-media",
    category: "Engagement",
    layer: "Engagement",
    title: "Social Media",
    signal: "yellow",
    headline:
      "Build an audience that is yours to keep, not the platform's to remove.",
    question:
      "What does social media look like for a business in a restricted category?",
    directAnswer:
      "Education, personality, customer stories and short-form video, built so the value survives being moved. We plan content around what the category is permitted to show, and route audience toward assets the business controls because continued account access cannot be assumed in these industries.",
    description:
      "The goal is not reach for its own sake. It is a recognisable presence that teaches, answers real questions, and converts attention into an owned relationship an email address, a message thread, a return visit before the platform gets a vote.",
    includes: [
      "Platform selection for your category",
      "Content strategy and formats",
      "Short-form video direction",
      "Education and customer story programmes",
      "Community and comment handling",
      "Publishing cadence and production workflow",
      "Cross-channel repurposing",
    ],
    deliverables: [
      "Social strategy and content pillars",
      "Content calendar and production workflow",
      "Creative direction and templates",
      "Performance reporting",
    ],
    outcome: "A presence that compounds into owned audience rather than rented reach.",
    nextStep: "Pair with Email Marketing so attention has somewhere to land.",
  },
  {
    number: "07",
    slug: "email-marketing-and-newsletter",
    category: "Retention",
    layer: "Engagement",
    title: "Email Marketing & Newsletter",
    signal: "blue",
    headline: "The channel nobody can revoke.",
    question:
      "Why does email matter more for regulated and restricted businesses?",
    directAnswer:
      "Because it is owned. Rankings move, ad accounts pause and social profiles get removed, but a permissioned email list stays with the business. For most high-friction categories it is the most reliable route to repeat revenue.",
    description:
      "We build the list, the lifecycle and the editorial rhythm behind it: what a new subscriber receives, what brings a lapsed customer back, and what makes the newsletter worth opening when nothing is on sale.",
    includes: [
      "List growth and permission strategy",
      "Newsletter format and editorial rhythm",
      "Welcome and education sequences",
      "Promotional and launch flows",
      "Reactivation and win-back",
      "Referral programmes",
      "Deliverability and list health",
    ],
    deliverables: [
      "Lifecycle map and flow build",
      "Newsletter template and editorial plan",
      "Segmentation model",
      "Performance reporting",
    ],
    outcome: "Repeat revenue that is not conditional on a platform decision.",
    nextStep:
      "Combine with Analytics to see which sequences actually produce revenue.",
  },
  {
    number: "08",
    slug: "customer-access-messaging-and-automation",
    category: "Automation",
    layer: "Automation",
    title: "Customer Access, Messaging & Automation",
    signal: "blue",
    headline: "Answer faster without sounding like a robot.",
    question: "What should be automated in customer messaging, and what should not?",
    directAnswer:
      "Automate the predictable parts acknowledgement, routing, confirmations, reminders, FAQs and follow-up and keep judgement, pricing and sensitive conversations human. In categories where customers are cautious about who they are talking to, response speed builds trust and a bad bot destroys it.",
    description:
      "We design WhatsApp and messaging systems around how customers actually make contact, then automate the repetitive layer so enquiries are answered in minutes instead of days and nothing falls through the gaps between channels.",
    includes: [
      "Messaging and WhatsApp system design",
      "Enquiry capture and routing",
      "Booking requests and confirmations",
      "Reminders and follow-up sequences",
      "FAQ and self-service responses",
      "Lead nurturing and reactivation",
      "Handover rules between automation and people",
    ],
    deliverables: [
      "Messaging architecture",
      "Automation flows and templates",
      "Routing and escalation rules",
      "Response reporting",
    ],
    outcome:
      "Faster replies, fewer dropped enquiries, and a customer experience that still feels human.",
    nextStep: "Works best once Website Development is capturing enquiries cleanly.",
  },
  {
    number: "09",
    slug: "analytics-and-growth-intelligence",
    category: "Intelligence",
    layer: "Intelligence",
    title: "Analytics & Growth Intelligence",
    signal: "neutral",
    headline: "Know what is happening. Know why. Know what to do next.",
    question: "What should a growth reporting system actually tell you?",
    directAnswer:
      "Which activity produced revenue, which did not, and what to change. That means one reporting layer across website, advertising, social, email, messaging, search and business data, with conversion paths and attribution defined once so every channel is measured on the same terms.",
    description:
      "Marketing without measurement is expensive optimism. We centralise reporting so the business can see the funnel end to end, and so the decision to stop spending somewhere is made on evidence instead of instinct.",
    includes: [
      "Measurement plan and KPI definitions",
      "Website and conversion tracking",
      "Channel reporting consolidation",
      "Attribution model and funnel mapping",
      "Revenue and ROI reporting",
      "Dashboards and reporting cadence",
      "Data quality and tracking maintenance",
    ],
    deliverables: [
      "Measurement plan",
      "Tracking implementation",
      "Consolidated dashboard",
      "Reporting cadence and review process",
    ],
    outcome:
      "Every channel measured on the same terms, so budget moves toward what works.",
    nextStep:
      "Usually implemented alongside Website Development so tracking is correct from day one.",
  },
] as const;

const BY_SLUG = new Map(SERVICES.map((s) => [s.slug, s]));
const BY_NUMBER = new Map(SERVICES.map((s) => [s.number, s]));

export function getService(slug: string): Service | null {
  return BY_SLUG.get(slug) ?? null;
}

export function servicesByNumber(numbers: readonly string[]): Service[] {
  return numbers.map((n) => BY_NUMBER.get(n)).filter((s): s is Service => Boolean(s));
}

export function servicesBySlug(slugs: readonly string[]): Service[] {
  return slugs.map((s) => BY_SLUG.get(s)).filter((s): s is Service => Boolean(s));
}
