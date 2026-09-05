import type { Service, Signal, StackLayer } from "@/types/content";
import { SERVICES } from "@/content/services";

export interface StackLayerEntry {
  /** Two-digit layer index, "01"–"08". Distinct from service numbers. */
  readonly index: string;
  readonly layer: StackLayer;
  readonly signal: Signal;
  /** One line describing what the layer is for. */
  readonly premise: string;
  readonly services: readonly Service[];
}

const PREMISE: Record<StackLayer, { signal: Signal; premise: string }> = {
  Strategy: {
    signal: "neutral",
    premise: "Decide what the business is before deciding how to sell it.",
  },
  Brand: {
    signal: "neutral",
    premise: "Make it recognisable, and make the rules portable.",
  },
  Discovery: {
    signal: "yellow",
    premise: "Be found by the systems people search with.",
  },
  Website: {
    signal: "blue",
    premise: "Own the surface everything else points at.",
  },
  Acquisition: {
    signal: "red",
    premise: "Buy attention where the category is actually permitted.",
  },
  Engagement: {
    signal: "yellow",
    premise: "Turn attention into a relationship you control.",
  },
  Automation: {
    signal: "blue",
    premise: "Respond in minutes without losing the human part.",
  },
  Intelligence: {
    signal: "neutral",
    premise: "Measure it all on the same terms, then move the budget.",
  },
};

const ORDER: readonly StackLayer[] = [
  "Strategy",
  "Brand",
  "Discovery",
  "Website",
  "Acquisition",
  "Engagement",
  "Automation",
  "Intelligence",
];

/** Eight conceptual layers over nine services. Engagement holds two. */
export const STACK: readonly StackLayerEntry[] = ORDER.map((layer, i) => ({
  index: String(i + 1).padStart(2, "0"),
  layer,
  signal: PREMISE[layer].signal,
  premise: PREMISE[layer].premise,
  services: SERVICES.filter((s) => s.layer === layer),
}));
