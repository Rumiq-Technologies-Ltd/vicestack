import type { Industry } from "@/types/content";

/**
 * Industry content. Positioning stays discreet: these are businesses operating
 * in regulated, restricted and high-friction markets. Nothing here claims or
 * implies legal, regulatory or platform-approval outcomes.
 */
export const INDUSTRIES: readonly Industry[] = [
  {
    slug: "peptides",
    name: "Peptide businesses",
    short: "Peptides",
    signal: "blue",
    headline: "Credibility is the product.",
    question: "How can a peptide business improve its online visibility?",
    directAnswer:
      "By building visibility it owns rather than rents. Peptide businesses face inconsistent advertising access, so growth usually comes from a technically strong website, disciplined search and answer-engine presence, transparent product information, and owned channels like email and messaging. Paid media can support that where it is available, but rarely carries it.",
    overview: [
      "Peptide businesses sell to a cautious, well-informed buyer who is checking whether the seller is serious before checking the price. Purity documentation, storage handling, clear compound information and a professional storefront do more for conversion here than any promotional angle.",
      "The commercial difficulty is that the usual acquisition playbook is only partly available. Advertising access varies by platform, product and market, and it changes. That pushes the centre of gravity toward discovery, the website itself, and channels the business controls outright.",
    ],
    challenges: [
      {
        title: "Restricted and inconsistent advertising access",
        body: "Platform availability for this category varies by market and product and can change without notice. Building an acquisition model that assumes stable paid access is a structural risk, not a tactic.",
      },
      {
        title: "A buyer who is verifying you",
        body: "Purchase decisions turn on documentation, consistency and presentation. Missing product detail or a thin website reads as a warning sign long before price is considered.",
      },
      {
        title: "Search results crowded with low-quality operators",
        body: "The category attracts thin, near-identical storefronts. Differentiation comes from depth and structure that those sites cannot cheaply imitate.",
      },
      {
        title: "Answer engines summarising the category for you",
        body: "Buyers increasingly ask an assistant before they open a browser tab. If your product and company information is not structured and unambiguous, you are described by whatever else is available.",
      },
    ],
    whyConventionalFails: [
      "Agency playbooks in this space usually start with paid social, which may not be reliably available for the category.",
      "Templated storefronts cannot carry the product documentation and trust signals the buyer is actually looking for.",
      "SEO work that stops at keywords misses the entity and structured-data layer that answer engines rely on.",
      "Reporting built around platform-attributed conversions overstates channels that are easy to measure and hides the ones doing the work.",
    ],
    approach: [
      {
        title: "Build the hub first",
        body: "A fast, crawlable, well-structured website that presents products, documentation and company information clearly, and captures enquiries without friction.",
      },
      {
        title: "Own discovery",
        body: "Technical SEO, entity and topical structure, answer-engine targets and clean product data, so the business is described accurately by search and by assistants.",
      },
      {
        title: "Route everything to owned channels",
        body: "Email and messaging carry repeat revenue, and they do not depend on a platform decision.",
      },
      {
        title: "Measure end to end",
        body: "One reporting layer across the website, search, email and messaging, so budget decisions rest on evidence.",
      },
    ],
    serviceSlugs: [
      "website-development",
      "search-local-and-ai-discovery",
      "email-marketing-and-newsletter",
      "customer-access-messaging-and-automation",
      "analytics-and-growth-intelligence",
      "core-strategy-and-knowledge",
    ],
    recommendedStack: [
      {
        phase: "Now",
        serviceNumbers: ["01", "04"],
        rationale:
          "Get the business documented and the hub built. Everything else references both.",
      },
      {
        phase: "Next",
        serviceNumbers: ["03", "09"],
        rationale:
          "Make it discoverable and make it measurable, in that order, before adding spend.",
      },
      {
        phase: "Later",
        serviceNumbers: ["07", "08", "05"],
        rationale:
          "Compound with owned channels and automation. Add paid media only where the category has viable access.",
      },
    ],
    workflows: [
      {
        title: "Enquiry to first reply",
        steps: [
          "Visitor submits an enquiry from a product page",
          "Enquiry is validated, stored and routed by product interest",
          "Automated acknowledgement confirms receipt and sets a response expectation",
          "A person follows up with pricing and availability",
          "Outcome is written back so reporting reflects real revenue",
        ],
      },
      {
        title: "New product to indexed page",
        steps: [
          "Product data is added once to the content system",
          "Page, structured data and internal links generate from it",
          "Sitemap updates and the page enters the crawl path",
          "Answer targets and FAQ content are written against real buyer questions",
        ],
      },
    ],
    faqs: [
      {
        question: "Can peptide businesses advertise online?",
        answer:
          "Access varies by platform, product and market, and it changes over time. We assess current viability for your specific category before proposing any spend, and we build acquisition so the business is not dependent on it. Advertising is always subject to platform policies.",
      },
      {
        question: "What matters most for a peptide business website?",
        answer:
          "Clear product and documentation presentation, fast mobile performance, a crawlable structure, and a frictionless enquiry path. The website is the asset that cannot be suspended, so it carries the most weight.",
      },
      {
        question: "How long does discovery work take to show results?",
        answer:
          "Technical and structural fixes can register quickly; entity and content authority build over months. We report on leading indicators throughout rather than asking you to wait for a single number.",
      },
    ],
  },
  {
    slug: "cannabis",
    name: "Cannabis businesses",
    short: "Cannabis",
    signal: "yellow",
    headline: "Local visibility is the whole game.",
    question:
      "How do cannabis businesses grow when advertising options are limited?",
    directAnswer:
      "Through local discovery and owned channels. In legal US states and Canada, most cannabis demand is local and high-intent, so maps presence, local search, review consistency and a fast menu-driven website usually outperform whatever paid access happens to be available in a given market.",
    overview: [
      "Cannabis retail is a proximity business. Someone is deciding between you and two other options within a short drive, usually on a phone, usually within the hour. That makes local search, map presence and menu accuracy the highest-leverage work available.",
      "It is also a jurisdictional business. Rules differ between states and provinces, and marketing that is routine in one market is unavailable in the next. The architecture has to accommodate that rather than fight it.",
    ],
    challenges: [
      {
        title: "Advertising access differs by jurisdiction",
        body: "What is permitted varies between markets and platforms. Any acquisition plan has to be built per market, and rebuilt when rules move.",
      },
      {
        title: "Local competition is dense and close",
        body: "Ranking in maps and local results is often the difference between a visit and a competitor's visit. Small inconsistencies in listings cost real revenue.",
      },
      {
        title: "Menus change constantly",
        body: "Inventory turns fast. A website that cannot reflect current availability sends customers to a shelf that is empty.",
      },
      {
        title: "Reviews carry disproportionate weight",
        body: "In a category where customers are still calibrating trust, review volume, recency and response quality function as a ranking and conversion factor at once.",
      },
    ],
    whyConventionalFails: [
      "National campaign thinking ignores that demand is concentrated within a few kilometres of each location.",
      "Generic agencies treat Google Business Profile as a setup task rather than an ongoing surface that needs maintenance.",
      "Templated multi-location pages get built without genuinely distinct local content, so none of them rank.",
      "Menu and inventory integration is treated as an afterthought, leaving the website permanently out of date.",
    ],
    approach: [
      {
        title: "Win the map",
        body: "Local SEO, profile management, citation and listing consistency, and review operations treated as recurring work rather than a one-off.",
      },
      {
        title: "Make each location its own answer",
        body: "Location pages with genuinely distinct, useful content — hours, stock character, area context — instead of a template with the city name swapped.",
      },
      {
        title: "Keep the menu honest",
        body: "A website that reflects current availability, because inaccurate stock is a conversion problem and a trust problem.",
      },
      {
        title: "Build the list",
        body: "Email and messaging convert repeat visits without depending on advertising access in your particular market.",
      },
    ],
    serviceSlugs: [
      "search-local-and-ai-discovery",
      "website-development",
      "email-marketing-and-newsletter",
      "social-media",
      "analytics-and-growth-intelligence",
      "brand-guidelines",
    ],
    recommendedStack: [
      {
        phase: "Now",
        serviceNumbers: ["03", "04"],
        rationale:
          "Local discovery and a working hub produce the fastest measurable movement for a proximity business.",
      },
      {
        phase: "Next",
        serviceNumbers: ["09", "07"],
        rationale:
          "Measure what local is delivering, then build the owned channel that brings customers back.",
      },
      {
        phase: "Later",
        serviceNumbers: ["02", "06", "08"],
        rationale:
          "Consistency and presence across locations, once the fundamentals are producing.",
      },
    ],
    workflows: [
      {
        title: "New location to local visibility",
        steps: [
          "Location record created once in the content system",
          "Location page, structured data and internal links generate from it",
          "Business profile and citations set up and verified",
          "Review request flow connected to point of sale",
          "Local performance reported per location",
        ],
      },
      {
        title: "Review to response",
        steps: [
          "New review arrives on any surface",
          "Routed to the responsible person with context",
          "Response drafted within brand tone rules",
          "Recurring themes reported back into product and operations",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you work with cannabis businesses in Canada and the US?",
        answer:
          "Yes, in legal US states and in Canada. Because rules differ by jurisdiction, we build per market rather than applying one national plan.",
      },
      {
        question: "Can cannabis businesses run paid ads?",
        answer:
          "It depends on the market and the platform, and availability changes. We assess what is currently viable for your jurisdiction and category before recommending spend. All advertising is subject to platform policies.",
      },
      {
        question: "What produces results fastest for a dispensary?",
        answer:
          "Usually local search and map presence, combined with a fast website that reflects real availability. Both address customers who are already close and already deciding.",
      },
    ],
  },
  {
    slug: "adult-entertainment",
    name: "Adult entertainment businesses",
    short: "Adult Entertainment",
    signal: "red",
    headline: "Infrastructure over exposure.",
    question:
      "What digital infrastructure do adult entertainment businesses need?",
    directAnswer:
      "Owned infrastructure, primarily. Mainstream advertising and organic reach are unreliable for this category, so growth depends on a website the business controls, discovery work that operates within general search, direct customer relationships through email and messaging, and measurement that shows which of those is actually producing.",
    overview: [
      "This is a category where the standard growth channels are least dependable. Accounts can be restricted, reach can be limited, and the business has little say in any of it. The response is not to fight the platforms; it is to reduce how much the business depends on them.",
      "We work at the infrastructure layer: the website, the discovery surface, the customer relationship and the reporting. The output is a business that keeps operating regardless of any single channel decision.",
    ],
    challenges: [
      {
        title: "Unreliable platform access",
        body: "Reach and advertising availability cannot be assumed, and can change with no notice or explanation. Dependence on any one channel is a business risk.",
      },
      {
        title: "Payment and vendor friction",
        body: "Tooling that other businesses take for granted is often unavailable, which shapes what can realistically be built and integrated.",
      },
      {
        title: "Discretion requirements",
        body: "Customers expect privacy in how they browse, enquire and are contacted. That has to be designed into the experience rather than promised in a policy page.",
      },
      {
        title: "Brand perception under scrutiny",
        body: "The presentation has to establish professionalism quickly, because assumptions about the category arrive before the business does.",
      },
    ],
    whyConventionalFails: [
      "Most agencies decline the category outright, or accept it and apply a playbook built for channels this business cannot rely on.",
      "Growth plans anchored on paid acquisition collapse the first time access changes.",
      "Off-the-shelf tooling frequently will not serve the category, so integration assumptions made elsewhere do not hold.",
      "Discretion is treated as a legal checkbox rather than an experience design requirement.",
    ],
    approach: [
      {
        title: "Reduce platform dependence",
        body: "Build the website, the list and the messaging layer first, so no single external decision can interrupt trading.",
      },
      {
        title: "Design for discretion",
        body: "Browsing, enquiry and follow-up experiences built around customer privacy expectations from the first screen.",
      },
      {
        title: "Work the discovery surface that remains",
        body: "Structured, factual content and clean technical foundations to earn placement in general search and answer engines.",
      },
      {
        title: "Measure honestly",
        body: "Reporting that reflects the channels actually producing revenue, not the ones easiest to attribute.",
      },
    ],
    serviceSlugs: [
      "website-development",
      "customer-access-messaging-and-automation",
      "email-marketing-and-newsletter",
      "search-local-and-ai-discovery",
      "analytics-and-growth-intelligence",
      "brand-guidelines",
    ],
    recommendedStack: [
      {
        phase: "Now",
        serviceNumbers: ["01", "04"],
        rationale:
          "Document the operating constraints, then build the asset that cannot be switched off.",
      },
      {
        phase: "Next",
        serviceNumbers: ["08", "07"],
        rationale:
          "Direct customer relationships are the most durable acquisition and retention route available.",
      },
      {
        phase: "Later",
        serviceNumbers: ["03", "09", "02"],
        rationale:
          "Compound discovery and consistency once the owned layer is producing reliably.",
      },
    ],
    workflows: [
      {
        title: "Enquiry with discretion",
        steps: [
          "Enquiry submitted with clearly stated handling expectations",
          "Stored and routed without unnecessary data collection",
          "Acknowledgement sent through the customer's chosen channel",
          "Follow-up handled by a person, within agreed contact rules",
        ],
      },
      {
        title: "Channel interruption response",
        steps: [
          "Interruption detected through reporting rather than by surprise",
          "Traffic and messaging redirected to owned channels",
          "Customer communication issued from the list",
          "Dependence reviewed and reduced for next time",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you work with adult industry businesses?",
        answer:
          "Yes. We work at the technology and growth infrastructure layer — website, discovery, messaging, automation and analytics. We do not produce adult content.",
      },
      {
        question: "How do you handle discretion?",
        answer:
          "Privacy expectations are treated as design requirements. That covers what is collected, how enquiries are routed, which channels are used for follow-up, and what appears in reporting.",
      },
      {
        question: "Can you guarantee our accounts will not be restricted?",
        answer:
          "No, and nobody can. Platforms make their own decisions. What we can do is reduce how much of the business depends on any one of them.",
      },
    ],
  },
  {
    slug: "adult-novelty",
    name: "Adult novelty and product businesses",
    short: "Adult Novelty",
    signal: "yellow",
    headline: "A retail problem wearing a compliance costume.",
    question:
      "How do adult novelty and product businesses grow their online sales?",
    directAnswer:
      "Largely as a retail business, with constraints layered on top. Product discovery, clear and non-euphemistic information, fast mobile browsing and strong repeat-purchase flows do most of the work. The restriction affects which acquisition channels are available, not what makes a product page convert.",
    overview: [
      "Underneath the category label this is product retail: findability, presentation, a browsing experience that respects the customer, and a reason to come back. Most of the growth ceiling here is a merchandising and search problem, not a compliance one.",
      "The constraints are real, though. Advertising access is uneven, some marketing surfaces are unavailable, and discretion expectations shape the entire customer journey from search result to delivery.",
    ],
    challenges: [
      {
        title: "Product discovery is genuinely hard",
        body: "Customers often do not know the vocabulary for what they want. Category structure, filtering and plain-language product information carry more weight than in most retail.",
      },
      {
        title: "Uneven advertising access",
        body: "Some channels are available for some products in some markets. Planning has to be specific rather than categorical.",
      },
      {
        title: "Discretion across the whole journey",
        body: "Browsing, checkout, packaging and follow-up all carry privacy expectations. A failure at any point costs the repeat purchase.",
      },
      {
        title: "Euphemism damages both search and conversion",
        body: "Vague copy fails the customer who is trying to understand the product and fails the search systems trying to categorise it.",
      },
    ],
    whyConventionalFails: [
      "Generic e-commerce work applies a category tree that does not match how customers in this space actually search.",
      "Copy is softened until it stops describing the product, which hurts conversion and discovery simultaneously.",
      "Acquisition plans assume paid social access that may not exist for the specific product set.",
      "Repeat purchase and reactivation flows go unbuilt, so every sale is acquired from scratch.",
    ],
    approach: [
      {
        title: "Fix discovery inside the site",
        body: "Category structure, filtering and search built around real customer language, so people find the product they came for.",
      },
      {
        title: "Write clearly",
        body: "Product information that is direct, accurate and useful — better for the customer and better for how search systems classify the catalogue.",
      },
      {
        title: "Design the discretion",
        body: "Privacy expectations built into browsing, checkout, communications and delivery presentation.",
      },
      {
        title: "Build repeat revenue",
        body: "Email, messaging and reactivation flows so growth is not entirely dependent on new acquisition.",
      },
    ],
    serviceSlugs: [
      "website-development",
      "search-local-and-ai-discovery",
      "email-marketing-and-newsletter",
      "brand-guidelines",
      "analytics-and-growth-intelligence",
      "paid-media",
    ],
    recommendedStack: [
      {
        phase: "Now",
        serviceNumbers: ["04", "03"],
        rationale:
          "Product discovery and on-site conversion are the largest available gains in retail.",
      },
      {
        phase: "Next",
        serviceNumbers: ["07", "09"],
        rationale:
          "Repeat purchase economics, and the reporting to see them clearly.",
      },
      {
        phase: "Later",
        serviceNumbers: ["02", "05", "06"],
        rationale:
          "Brand consistency, then acquisition channels where the specific product set has viable access.",
      },
    ],
    workflows: [
      {
        title: "Catalogue to search visibility",
        steps: [
          "Product data entered once with plain-language attributes",
          "Category, filter and search behaviour generated from it",
          "Structured data and internal links produced automatically",
          "Answer targets written for the questions customers actually ask",
        ],
      },
      {
        title: "First purchase to second",
        steps: [
          "Order confirmed with discreet communication defaults",
          "Post-purchase education sequence sent",
          "Reorder or complementary product prompt timed to the product",
          "Reactivation flow for lapsed customers",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build e-commerce for adult product businesses?",
        answer:
          "Yes. We work on the website, product discovery, conversion, owned channels and analytics. We do not produce explicit content.",
      },
      {
        question: "Will you write explicit product copy?",
        answer:
          "We write clear, accurate, non-euphemistic product information. It is written to inform a customer and to be correctly categorised by search systems, not to shock.",
      },
      {
        question: "Can this category advertise?",
        answer:
          "It varies by product, market and platform, and it changes. We assess viability for your specific catalogue before recommending spend. All advertising is subject to platform policies.",
      },
    ],
  },
  {
    slug: "vape",
    name: "Vape businesses",
    short: "Vape",
    signal: "red",
    headline: "Regulated, local, and mostly won on search.",
    question: "How can a vape business grow with restricted advertising?",
    directAnswer:
      "By concentrating on the channels that stay open: local and organic search, an accurate website, review presence, and owned channels. Advertising access for this category is heavily restricted and varies by jurisdiction, so acquisition is generally built around discovery and repeat custom rather than paid reach.",
    overview: [
      "Vape retail combines two hard constraints: tight and shifting regulation, and very limited advertising access. What remains is search, local presence and the relationship with existing customers — which is where nearly all of the available growth sits.",
      "Requirements differ significantly between jurisdictions and change regularly. The digital architecture has to be built so that a market-level change is a content update, not a rebuild.",
    ],
    challenges: [
      {
        title: "Heavily restricted advertising",
        body: "Most mainstream paid channels are unavailable or severely limited for this category, which removes the default growth lever entirely.",
      },
      {
        title: "Rules vary by jurisdiction and move",
        body: "What can be shown, said and sold differs by market and changes over time. Content architecture has to absorb that without redesign.",
      },
      {
        title: "Local intent dominates",
        body: "Most demand is proximity-driven and immediate. Map and local search presence is the primary acquisition surface.",
      },
      {
        title: "Age and access controls affect the experience",
        body: "Verification and access requirements sit directly in the conversion path and have to be designed rather than bolted on.",
      },
    ],
    whyConventionalFails: [
      "Playbooks that open with paid social have nothing to offer a category that largely cannot use it.",
      "Local presence is treated as a one-time setup rather than the main acquisition channel it actually is.",
      "Content is built per campaign rather than per market, so a rule change breaks pages instead of updating them.",
      "Owned channels are neglected, leaving the business with no route to its own customers.",
    ],
    approach: [
      {
        title: "Concentrate on search and local",
        body: "Technical SEO, local presence, listing consistency and review operations, because that is where the reachable demand is.",
      },
      {
        title: "Structure content per market",
        body: "Architecture that lets jurisdiction-specific requirements be maintained as content rather than as code changes.",
      },
      {
        title: "Design the access path",
        body: "Verification and access controls built into the journey so they inform rather than obstruct.",
      },
      {
        title: "Own the customer relationship",
        body: "Email and messaging for repeat custom, since re-acquiring the same customer through paid channels is largely unavailable.",
      },
    ],
    serviceSlugs: [
      "search-local-and-ai-discovery",
      "website-development",
      "email-marketing-and-newsletter",
      "customer-access-messaging-and-automation",
      "analytics-and-growth-intelligence",
      "core-strategy-and-knowledge",
    ],
    recommendedStack: [
      {
        phase: "Now",
        serviceNumbers: ["03", "04"],
        rationale:
          "With paid access largely closed, discovery and the website carry acquisition.",
      },
      {
        phase: "Next",
        serviceNumbers: ["07", "08"],
        rationale:
          "Owned channels for repeat custom, and faster response on the enquiries discovery produces.",
      },
      {
        phase: "Later",
        serviceNumbers: ["09", "01", "02"],
        rationale:
          "Measurement and consistency to compound what the first two phases established.",
      },
    ],
    workflows: [
      {
        title: "Market rule change to live site",
        steps: [
          "Requirement recorded against the affected market",
          "Market-scoped content updated in one place",
          "Affected pages and structured data regenerate",
          "Change logged for future reference",
        ],
      },
      {
        title: "Local search to store visit",
        steps: [
          "Customer searches nearby with immediate intent",
          "Profile and location page present accurate hours and stock character",
          "Directions, contact and enquiry paths all one tap away",
          "Visit attributed back through local reporting",
        ],
      },
    ],
    faqs: [
      {
        question: "Can vape businesses advertise online?",
        answer:
          "Advertising options for this category are heavily restricted and vary by jurisdiction and platform. We assess what is currently available in your market and generally build acquisition around discovery and owned channels instead. All advertising is subject to platform policies.",
      },
      {
        question: "Do you handle age verification requirements?",
        answer:
          "We design the access and verification path as part of the website experience and integrate the tooling you use. We do not provide legal advice on which requirements apply to your market.",
      },
      {
        question: "What is the single highest-value activity?",
        answer:
          "For most vape retailers, local search and map presence. It reaches customers who are nearby and already deciding, and it does not depend on advertising access.",
      },
    ],
  },
  {
    slug: "other-high-friction-businesses",
    name: "Other high-friction businesses",
    short: "Other High-Friction",
    signal: "neutral",
    headline: "If the usual playbook keeps failing, it is probably not you.",
    question: "What counts as a high-friction business?",
    directAnswer:
      "Any business where standard digital playbooks break down because of regulation, platform restriction, payment friction, reputational assumptions or an unusually cautious buyer. The specific category matters less than the pattern: normal channels are unreliable, so growth has to be built on infrastructure the business owns.",
    overview: [
      "Our initial focus is peptides, cannabis, adult entertainment, adult novelty and vape, but the underlying problem is not unique to those categories. Plenty of businesses hit the same walls: advertising accounts that behave unpredictably, payment processors that hesitate, agencies that decline the brief, and buyers who need convincing before they will consider the offer.",
      "If that describes your situation, the approach is the same one we apply everywhere else. Reduce dependence on channels you do not control, build discovery and conversion into infrastructure you own, and measure the whole thing on one set of terms.",
    ],
    challenges: [
      {
        title: "Channels behave unpredictably",
        body: "Access that exists today may not exist next quarter, which makes any single-channel growth model fragile.",
      },
      {
        title: "Vendors and partners hesitate",
        body: "Tooling, processing and agency support that other businesses assume is available often is not, which shapes what can be built.",
      },
      {
        title: "The buyer needs more convincing",
        body: "Trust has to be established before the offer is even evaluated, which puts unusual weight on presentation and documentation.",
      },
      {
        title: "Generic advice does not apply",
        body: "Most published growth guidance assumes channel access this business does not have, so following it produces predictable disappointment.",
      },
    ],
    whyConventionalFails: [
      "The default playbook assumes stable paid access, which is exactly the assumption that does not hold.",
      "Agencies without category experience underestimate how much of the plan is unavailable until it fails in market.",
      "Owned channels get deprioritised in favour of faster-looking paid results.",
      "Attribution built on platform reporting misreads which channel is actually producing.",
    ],
    approach: [
      {
        title: "Map the real constraints first",
        body: "Establish what is actually available in your category and market before any plan is built on top of it.",
      },
      {
        title: "Build owned infrastructure",
        body: "Website, discovery, list and messaging — the layers that keep working when a platform decision goes against you.",
      },
      {
        title: "Add acquisition where it is viable",
        body: "Paid media where the category has genuine access, sized so its loss would not be existential.",
      },
      {
        title: "Measure on one set of terms",
        body: "One reporting layer, so the comparison between channels is honest.",
      },
    ],
    serviceSlugs: [
      "core-strategy-and-knowledge",
      "website-development",
      "search-local-and-ai-discovery",
      "analytics-and-growth-intelligence",
      "email-marketing-and-newsletter",
      "customer-access-messaging-and-automation",
    ],
    recommendedStack: [
      {
        phase: "Now",
        serviceNumbers: ["01"],
        rationale:
          "Constraints have to be documented before a plan can be built that survives them.",
      },
      {
        phase: "Next",
        serviceNumbers: ["04", "03"],
        rationale: "Own the hub, then make it discoverable.",
      },
      {
        phase: "Later",
        serviceNumbers: ["09", "07", "08"],
        rationale:
          "Measurement, owned audience and automation compound once the foundation holds.",
      },
    ],
    workflows: [
      {
        title: "Constraint mapping",
        steps: [
          "Category, product set and target markets defined",
          "Channel availability assessed per market",
          "Dependencies and single points of failure identified",
          "Plan sequenced around what is actually available",
        ],
      },
    ],
    faqs: [
      {
        question: "My industry is not listed. Do you still work with us?",
        answer:
          "Very likely. The named industries are where we started, not the boundary. If standard digital playbooks keep failing for reasons outside your control, the approach applies.",
      },
      {
        question: "Do you work with small businesses as well as established ones?",
        answer:
          "Yes. Engagements scale by scope and sequence rather than by company size. A newer business usually starts with strategy and the website; an established one often starts with discovery and measurement.",
      },
      {
        question: "Do you provide legal or regulatory advice?",
        answer:
          "No. We are not lawyers and we do not advise on compliance. We build technology and growth infrastructure, and we work within the constraints your own advisors set.",
      },
    ],
  },
] as const;

const BY_SLUG = new Map(INDUSTRIES.map((i) => [i.slug, i]));

export function getIndustry(slug: string): Industry | null {
  return BY_SLUG.get(slug) ?? null;
}

export const INDUSTRY_SLUGS: readonly string[] = INDUSTRIES.map((i) => i.slug);
