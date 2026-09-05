import type { Metadata } from "next";
import { Hero } from "@/features/home/Hero";
import { ProblemSection } from "@/features/home/ProblemSection";
import { PositioningSection } from "@/features/home/PositioningSection";
import { StackSection } from "@/features/stack/StackSection";
import { IndustriesSection } from "@/features/home/IndustriesSection";
import { PhilosophySection } from "@/features/home/PhilosophySection";
import { ProofSection } from "@/features/home/ProofSection";
import { ToolSection } from "@/features/home/ToolSection";
import { InsightsSection } from "@/features/home/InsightsSection";
import { CTABanner } from "@/components/editorial/CTABanner";
import { SITE } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <PositioningSection />
      <StackSection />
      <IndustriesSection />
      <PhilosophySection />
      <ProofSection />
      <ToolSection />
      <InsightsSection />
      <CTABanner
        eyebrow="09 — Start here"
        title="Tell us what is complicated. We will tell you what to build first."
        body="A short conversation about your market, your constraints and what is currently producing. No pitch deck, no obligation."
        signal="blue"
      />
    </>
  );
}
