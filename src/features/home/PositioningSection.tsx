import { Section } from "@/components/editorial/Section";
import { ImageSlab } from "@/components/editorial/ImageSlab";
import { ButtonLink } from "@/components/ui/Button";

export function PositioningSection() {
  return (
    <Section signal="blue" ground="ink" space="loose">
      <div className="shell">
        <span className="reveal type-label block border-t border-rule pt-3 text-accent">
          02 — The positioning
        </span>

        <p className="reveal type-display-l mt-8 max-w-[17ch] text-balance">
          We build the technology and growth infrastructure behind high-friction
          businesses.
        </p>

        <div className="mt-16 grid gap-x-10 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ImageSlab
              src="/images/positioning-contact.jpg"
              alt="Pale hand entering a pool of glossy black liquid, high contrast, minimal studio setting"
              ratio="1/1"
              intervention="offset"
              sizes="(min-width: 1024px) 40vw, 100vw"
              caption="Crossing a boundary on purpose."
            />
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="reveal type-lead prose-body measure">
              Not a marketing agency that happens to take difficult clients. A
              technology and growth firm whose entire practice is shaped by
              constraint: what a category is permitted to do, which channels are
              actually available, and what has to be owned outright so the
              business keeps trading when one of them closes.
            </p>
            <p className="reveal type-body prose-body measure mt-6">
              That produces a different order of work. Infrastructure first
              the site, the discovery surface, the list, the measurement. Paid
              acquisition afterwards, sized so its loss would be inconvenient
              rather than fatal.
            </p>

            <ul className="reveal mt-12 border-b border-rule">
              {[
                ["Owned before rented", "The asset nobody can suspend comes first."],
                ["Systems before tactics", "Nine services in one sequence, not nine invoices."],
                ["Measured before scaled", "Spend follows evidence, not platform optimism."],
                ["Discreet by default", "Mature brand, not edgy novelty."],
              ].map(([k, v]) => (
                <li
                  key={k}
                  className="flex flex-col gap-1 border-t border-rule py-4 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="type-label w-52 shrink-0 text-accent">{k}</span>
                  <span className="type-small prose-body">{v}</span>
                </li>
              ))}
            </ul>

            <ButtonLink href="/about" variant="quiet" className="mt-8 inline-flex">
              How we think →
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
