import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/editorial/PageIntro";
import { Section } from "@/components/editorial/Section";
import { GhostNumeral } from "@/components/editorial/GhostNumeral";
import { DataList } from "@/components/editorial/DataRow";
import { CTABanner } from "@/components/editorial/CTABanner";
import { SERVICES } from "@/content/services";
import { STACK } from "@/content/stack";
import { CTA } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Services — the nine layers of the ViceStack system",
  description:
    "Nine services in one sequence: strategy, brand, discovery, website, paid media, social, email, messaging automation and analytics — built for regulated, restricted and high-friction markets.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: graph(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]),
            ...SERVICES.map(serviceSchema),
          ),
        }}
      />

      <PageIntro
        eyebrow="Services"
        title="Nine services. One sequence."
        lead="ViceStack is not a menu. The nine services below are the layers of a single system, and the order they arrive in is most of the value. Buy one layer if that is what you need but know where it sits."
        answer={{
          question: "What services does ViceStack provide?",
          body: "Core strategy and knowledge, brand guidelines, search and AI discovery, website development, paid media, social media, email marketing, customer messaging and automation, and analytics and growth intelligence. All nine are delivered for businesses operating in regulated, restricted and high-friction markets across the US and Canada.",
        }}
        crumbs={[{ name: "Services", path: "/services" }]}
        signal="blue"
        meta={[
          { label: "Layers", value: `${STACK.length} conceptual layers` },
          { label: "Services", value: `${SERVICES.length} individual services` },
          { label: "Engagements", value: "Project or ongoing" },
        ]}
      />

      {/* Index — the whole system visible at a glance before the detail. */}
      <Section signal="neutral" ground="paper-pure" space="tight">
        <div className="shell">
          <h2 className="type-label border-t border-rule pt-3 text-mute">
            The system at a glance
          </h2>
          <ol className="mt-8 grid gap-x-10 md:grid-cols-2">
            {SERVICES.map((service) => (
              <li key={service.slug} data-signal={service.signal}>
                <Link
                  href={`#${service.slug}`}
                  className="group flex items-baseline gap-5 border-t border-rule py-4"
                >
                  <span className="type-label w-7 shrink-0 text-accent">
                    {service.number}
                  </span>
                  <span className="type-body flex-1 transition-opacity duration-300 group-hover:opacity-60">
                    {service.title}
                  </span>
                  <span className="type-label shrink-0 text-mute">
                    {service.category}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {SERVICES.map((service, i) => {
        const dark = i % 2 === 1;
        return (
          <Section
            key={service.slug}
            id={service.slug}
            signal={service.signal}
            ground={dark ? "ink" : "paper"}
            className="scroll-mt-20 overflow-hidden"
          >
            <GhostNumeral
              value={service.number}
              side={i % 2 === 0 ? "right" : "left"}
            />

            <div className="shell relative">
              <div className="flex items-baseline justify-between gap-6 border-t border-rule pt-3">
                <span className="type-label text-accent">
                  {service.number} — {service.category}
                </span>
                <span className="type-label text-mute">{service.layer}</span>
              </div>

              <div className="mt-8 grid gap-x-10 gap-y-12 lg:grid-cols-12">
                <div className="lg:col-span-6">
                  <h2 className="reveal type-display-m text-balance">
                    {service.title}
                  </h2>
                  <p className="reveal type-lead measure mt-6 text-balance">
                    {service.headline}
                  </p>

                  {/* Direct answer — plain, first, before elaboration. */}
                  <div className="reveal mt-10 border-t border-rule pt-5">
                    <h3 className="type-label text-mute">{service.question}</h3>
                    <p className="type-body measure mt-4">{service.directAnswer}</p>
                  </div>

                  <p className="reveal type-body prose-body measure mt-7">
                    {service.description}
                  </p>
                </div>

                <div className="lg:col-span-5 lg:col-start-8">
                  <h3 className="type-label border-t border-rule pt-3 text-mute">
                    What is included
                  </h3>
                  <DataList items={service.includes} className="mt-4" numbered />

                  <h3 className="type-label mt-10 border-t border-rule pt-3 text-mute">
                    Example deliverables
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="type-label border border-rule px-2.5 py-1.5"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 border-t border-rule pt-5">
                    <h3 className="type-label text-mute">Business outcome</h3>
                    <p className="type-body measure mt-3">{service.outcome}</p>
                  </div>

                  <div className="mt-8 border-t border-rule pt-5">
                    <h3 className="type-label text-mute">Suggested next step</h3>
                    <p className="type-small prose-body measure mt-3">
                      {service.nextStep}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      <CTABanner
        eyebrow="Not sure where to start"
        title="Answer ten questions and we will tell you which layer to build first."
        body="The recommendation is generated from your industry, stage, current setup and main bottleneck. It costs nothing and commits you to nothing."
        signal="yellow"
        secondary={CTA.tool}
      />
    </>
  );
}
