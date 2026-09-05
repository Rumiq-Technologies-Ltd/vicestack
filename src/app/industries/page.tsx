import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/editorial/PageIntro";
import { Section } from "@/components/editorial/Section";
import { GhostNumeral } from "@/components/editorial/GhostNumeral";
import { CTABanner } from "@/components/editorial/CTABanner";
import { INDUSTRIES } from "@/content/industries";
import { servicesBySlug } from "@/content/services";
import { SITE } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Industries — regulated, restricted and high-friction markets",
  description:
    "ViceStack works with peptide, cannabis, adult entertainment, adult novelty and vape businesses, and with other companies whose markets break the standard digital playbook.",
  path: "/industries",
});

const HUB_FAQS = [
  {
    question: "What is a high-friction business?",
    answer:
      "Any business where standard digital playbooks break down because of regulation, platform restriction, payment friction, reputational assumptions or an unusually cautious buyer. The category matters less than the pattern: normal channels are unreliable, so growth has to be built on infrastructure the business owns.",
  },
  {
    question: "Which industries does ViceStack work with?",
    answer:
      "Peptide businesses, cannabis businesses in legal US states and Canada, adult entertainment businesses, adult novelty and product businesses, vape businesses, and other companies operating in regulated or restricted markets.",
  },
  {
    question: "Do you work outside these industries?",
    answer:
      "Yes. The listed industries are where we started, not a boundary. If conventional digital approaches keep failing for reasons outside your control, the same method applies.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: graph(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Industries", path: "/industries" },
            ]),
            faqSchema(HUB_FAQS),
          ),
        }}
      />

      <PageIntro
        eyebrow="Industries"
        title="Markets where the usual playbook stops working."
        lead="We specialise in businesses operating in regulated, restricted and high-friction markets. The category determines which channels are open to you. It does not change the order the stack has to be built in."
        answer={{
          question: "What is a high-friction business?",
          body: HUB_FAQS[0].answer,
        }}
        crumbs={[{ name: "Industries", path: "/industries" }]}
        signal="red"
        meta={[
          { label: "Industries", value: `${INDUSTRIES.length} starting points` },
          { label: "Regions", value: SITE.regions.join(", ") },
          { label: "Company size", value: "New, established and scaling" },
        ]}
      />

      {INDUSTRIES.map((industry, i) => {
        const services = servicesBySlug(industry.serviceSlugs).slice(0, 4);
        return (
          <Section
            key={industry.slug}
            signal={industry.signal}
            ground={i % 2 === 1 ? "paper-pure" : "paper"}
            space="tight"
            className="overflow-hidden"
          >
            <GhostNumeral
              value={String(i + 1).padStart(2, "0")}
              side={i % 2 === 0 ? "right" : "left"}
            />
            <div className="shell relative">
              <div className="grid gap-x-10 gap-y-8 border-t border-rule pt-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <span className="type-label text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="reveal type-display-m mt-4 text-balance">
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="transition-opacity duration-300 hover:opacity-60"
                    >
                      {industry.short}
                    </Link>
                  </h2>
                  <p className="reveal type-lead measure-tight mt-5 text-balance">
                    {industry.headline}
                  </p>
                </div>

                <div className="lg:col-span-6 lg:col-start-7">
                  <h3 className="type-label text-mute">{industry.question}</h3>
                  <p className="reveal type-body measure mt-4">
                    {industry.directAnswer}
                  </p>

                  <ul className="reveal mt-7 flex flex-wrap gap-2">
                    {services.map((s) => (
                      <li
                        key={s.slug}
                        className="type-label border border-rule px-2.5 py-1.5 text-mute"
                      >
                        {s.number} {s.title}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/industries/${industry.slug}`}
                    className="type-label link-rule mt-8 inline-block"
                  >
                    {industry.short} in detail →
                  </Link>
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      <Section signal="neutral" ground="paper">
        <div className="shell">
          <h2 className="type-display-m max-w-[18ch] text-balance">
            Questions we get before the first call.
          </h2>
          <dl className="mt-12 border-b border-rule">
            {HUB_FAQS.map((faq) => (
              <div
                key={faq.question}
                className="grid gap-x-10 gap-y-3 border-t border-rule py-7 lg:grid-cols-12"
              >
                <dt className="type-h3 lg:col-span-5">{faq.question}</dt>
                <dd className="type-body measure text-body lg:col-span-6 lg:col-start-7">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <CTABanner
        eyebrow="Start here"
        title="Tell us which market you are in and what keeps breaking."
        body="We will tell you which layer to build first, and whether we are the right people to build it."
        signal="blue"
      />
    </>
  );
}
