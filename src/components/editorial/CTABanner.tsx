import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/editorial/Section";
import { CTA } from "@/content/site";
import type { Signal } from "@/types/content";

interface CTABannerProps {
  eyebrow?: string;
  title: string;
  body?: string;
  signal?: Signal;
  /** Swap the secondary action, e.g. to the questionnaire. */
  secondary?: { label: string; href: string };
}

/** Closing call to action. Every route ends in one. */
export function CTABanner({
  eyebrow = "Next step",
  title,
  body,
  signal = "neutral",
  secondary = CTA.secondary,
}: CTABannerProps) {
  return (
    <Section signal={signal} ground="ink" space="loose">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="reveal type-label block border-t border-rule pt-3 text-accent">
              {eyebrow}
            </span>
            <h2
              className="reveal type-display-l mt-6 text-balance"
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {title}
            </h2>
          </div>
          <div className="flex flex-col justify-end md:col-span-5 md:col-start-8">
            {body && (
              <p className="reveal type-body prose-body measure mb-8">{body}</p>
            )}
            <div className="reveal flex flex-wrap gap-3">
              <ButtonLink href={CTA.primary.href} variant="primary" size="lg">
                {CTA.primary.label}
              </ButtonLink>
              <ButtonLink href={secondary.href} variant="secondary" size="lg">
                {secondary.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
