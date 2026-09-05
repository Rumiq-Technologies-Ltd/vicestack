import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/editorial/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/features/leads/ContactForm";
import { CTA, SITE } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Book a consultation",
  description:
    "Tell us about your market, your constraints and what is currently producing. We will tell you which layer of the stack to build first.",
  path: "/contact",
});

const EXPECT = [
  {
    n: "01",
    title: "A conversation, not a pitch",
    body: "Thirty minutes on your market, your constraints and what is currently working. No deck.",
  },
  {
    n: "02",
    title: "An honest read",
    body: "Which layer we would build first, and why. If the answer is that you do not need us yet, we will say so.",
  },
  {
    n: "03",
    title: "A scope, if it fits",
    body: "Sequence, deliverables and timeline. Pricing is quoted against scope — we do not publish rate cards.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: graph(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]),
          ),
        }}
      />

      <Section signal="blue" ground="paper" space="tight" className="pt-10">
        <div className="shell">
          <Breadcrumbs crumbs={[{ name: "Contact", path: "/contact" }]} className="mb-10" />

          <div className="border-t border-rule pt-3">
            <span className="type-label text-accent">Contact</span>
          </div>

          <h1 className="type-display-xl mt-7 max-w-[15ch] text-balance">
            Tell us what is complicated.
          </h1>

          <div className="mt-12 grid gap-x-10 gap-y-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="type-lead measure text-body">
                The more you tell us about your market and its constraints, the
                more useful the first conversation is. Everything below except
                name, email, industry and services is optional.
              </p>
              <ContactForm />
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <h2 className="type-label border-t border-rule pt-3 text-mute">
                What happens next
              </h2>
              <ol className="mt-6">
                {EXPECT.map((step) => (
                  <li key={step.n} className="border-t border-rule py-5 first:border-t-0 first:pt-0">
                    <span className="type-label text-accent">{step.n}</span>
                    <h3 className="type-h3 mt-3">{step.title}</h3>
                    <p className="type-small measure mt-2 text-body">{step.body}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-12 border-t border-rule pt-6">
                <h2 className="type-label text-mute">Rather not fill in a form?</h2>
                <a
                  href={`mailto:${SITE.email}`}
                  className="type-body link-rule mt-3 inline-block"
                >
                  {SITE.email}
                </a>
              </div>

              <div className="mt-10 border-t border-rule pt-6">
                <h2 className="type-label text-mute">Not ready to talk yet?</h2>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link href={CTA.secondary.href} className="type-body link-rule">
                      {CTA.secondary.label} →
                    </Link>
                  </li>
                  <li>
                    <Link href={CTA.tool.href} className="type-body link-rule">
                      {CTA.tool.label} →
                    </Link>
                  </li>
                </ul>
              </div>

              <p className="type-small mt-12 border-t border-rule pt-6 text-mute">
                We work with businesses across {SITE.regions.join(" and ")}. We do
                not provide legal or regulatory advice, and advertising channel
                availability varies by market and platform.
              </p>
            </aside>
          </div>
        </div>
      </Section>
    </>
  );
}
