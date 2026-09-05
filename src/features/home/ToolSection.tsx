import { Section } from "@/components/editorial/Section";
import { GhostNumeral } from "@/components/editorial/GhostNumeral";
import { ButtonLink } from "@/components/ui/Button";
import { CTA } from "@/content/site";
import { STACK } from "@/content/stack";

const STEPS = [
  "Industry, stage and current setup",
  "Where growth is actually stuck",
  "Which channels are open to you",
  "Your recommended sequence",
];

export function ToolSection() {
  return (
    <Section signal="yellow" ground="accent" className="overflow-hidden">
      <GhostNumeral value="07" side="right" />
      <div className="shell relative">
        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="reveal type-label block border-t border-rule pt-3">
              07 — Find your growth stack
            </span>
            <h2 className="reveal type-display-l mt-6 max-w-[14ch] text-balance">
              Not sure which layer you&rsquo;re missing?
            </h2>
            <p className="reveal type-lead measure mt-7">
              Ten questions about your business, your market and what is
              currently working. You get a recommended stack: which of the nine
              services matter now, which come next, and why in that order.
            </p>
            <div className="reveal mt-9 flex flex-wrap gap-3">
              <ButtonLink href={CTA.tool.href} variant="primary" size="lg">
                {CTA.tool.label}
              </ButtonLink>
              <ButtonLink href={CTA.secondary.href} variant="secondary" size="lg">
                {CTA.secondary.label}
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <ol className="reveal border-b border-rule">
              {STEPS.map((step, i) => (
                <li
                  key={step}
                  className="flex items-baseline gap-5 border-t border-rule py-4"
                >
                  <span className="type-label w-7 shrink-0 opacity-60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="type-body">{step}</span>
                </li>
              ))}
            </ol>
            <p className="type-small mt-6 opacity-70">
              Covers all {STACK.length} layers of the stack. No pricing is
              generated and nothing is committed it is a diagnostic, not a
              quote.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
