import Link from "next/link";
import { Section } from "@/components/editorial/Section";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { INDUSTRIES } from "@/content/industries";

export function IndustriesSection() {
  return (
    <Section signal="neutral" ground="paper-pure">
      <div className="shell">
        <SectionHeader
          index="04"
          eyebrow="Industries"
          title="We specialise in regulated, restricted and high-friction markets."
          lead="Six starting points, one method. The category changes which channels are open to you; it does not change the order the stack has to be built in."
          size="m"
        />

        <ul className="mt-16 border-t border-line">
          {INDUSTRIES.map((industry, i) => (
            <li
              key={industry.slug}
              data-signal={industry.signal}
              className="reveal border-b border-line"
              style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}
            >
              <Link
                href={`/industries/${industry.slug}`}
                className="group grid items-baseline gap-x-8 gap-y-2 py-7 md:grid-cols-12"
              >
                <span className="type-label text-accent md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="type-h3 transition-colors duration-300 group-hover:text-accent md:col-span-4">
                  {industry.short}
                </span>
                <span className="type-body measure text-body md:col-span-6">
                  {industry.headline}
                </span>
                <span
                  aria-hidden="true"
                  className="type-label hidden text-mute transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent md:col-span-1 md:block md:text-right"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/industries"
          className="type-label link-rule mt-10 inline-block"
        >
          All industries →
        </Link>
      </div>
    </Section>
  );
}
