/** Colour signal used across the site. Yellow = discovery, blue = technology,
 *  red = friction. Neutral carries foundation and resolution. */
export type Signal = "neutral" | "yellow" | "blue" | "red";

/** Conceptual stack layer. Eight layers group the nine services; Engagement
 *  covers both Social Media and Email. */
export type StackLayer =
  | "Strategy"
  | "Brand"
  | "Discovery"
  | "Website"
  | "Acquisition"
  | "Engagement"
  | "Automation"
  | "Intelligence";

export interface Service {
  /** Two-digit index, "01"–"09". Stable; used as the visible layer number. */
  readonly number: string;
  readonly slug: string;
  /** Editorial category shown above the title, e.g. "Foundation". */
  readonly category: string;
  readonly layer: StackLayer;
  readonly title: string;
  readonly signal: Signal;
  readonly headline: string;
  /** The question this service answers for an answer engine. */
  readonly question: string;
  /** Direct answer, stated before any elaboration. Two or three sentences. */
  readonly directAnswer: string;
  readonly description: string;
  readonly includes: readonly string[];
  readonly deliverables: readonly string[];
  readonly outcome: string;
  readonly nextStep: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface StackPhase {
  readonly phase: string;
  readonly serviceNumbers: readonly string[];
  readonly rationale: string;
}

export interface Industry {
  readonly slug: string;
  readonly name: string;
  /** Short label for cards and navigation. */
  readonly short: string;
  readonly signal: Signal;
  readonly headline: string;
  readonly question: string;
  readonly directAnswer: string;
  readonly overview: readonly string[];
  readonly challenges: readonly { title: string; body: string }[];
  readonly whyConventionalFails: readonly string[];
  readonly approach: readonly { title: string; body: string }[];
  /** Service slugs most relevant to this industry, in priority order. */
  readonly serviceSlugs: readonly string[];
  readonly recommendedStack: readonly StackPhase[];
  readonly workflows: readonly { title: string; steps: readonly string[] }[];
  readonly faqs: readonly FaqItem[];
}
