import Link from "next/link";
import { Section } from "@/components/editorial/Section";
import { ImageSlab } from "@/components/editorial/ImageSlab";
import { PlaceholderTag } from "@/components/editorial/Placeholder";
import { REAL_CASE_STUDIES } from "@/content/case-studies";
import { servicesBySlug } from "@/content/services";

export function ProofSection() {
  const study = REAL_CASE_STUDIES[0];
  if (!study) return null;
  const services = servicesBySlug(study.serviceSlugs);

  return (
    <Section signal={study.signal} ground="paper">
      <div className="shell">
        <div className="flex items-baseline justify-between gap-6 border-t border-rule pt-3">
          <span className="type-label text-accent">06 — Proof</span>
          <span className="type-label text-mute">{study.year}</span>
        </div>

        <div className="mt-10 grid gap-x-10 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ImageSlab
              src={study.image}
              alt={study.imageAlt}
              ratio="16/10"
              intervention="none"
              sizes="(min-width: 1024px) 56vw, 100vw"
            />
          </div>

          <div className="lg:col-span-5">
            <span className="type-label text-mute">{study.client}</span>
            <h2 className="reveal type-display-m mt-4 text-balance">
              {study.title}
            </h2>
            <p className="reveal type-body measure mt-6 text-body">
              {study.summary}
            </p>

            <ul className="reveal mt-9 flex flex-wrap gap-2">
              {services.map((s) => (
                <li
                  key={s.slug}
                  className="type-label border border-rule px-2.5 py-1.5 text-mute"
                >
                  {s.number} {s.title}
                </li>
              ))}
            </ul>

            <div className="reveal mt-10 border-t border-rule pt-5">
              <div className="flex items-center gap-3">
                <span className="type-label text-mute">Results</span>
                <PlaceholderTag
                  label="Awaiting data"
                  detail="No performance figures published until measured"
                />
              </div>
              <dl className="mt-4 grid grid-cols-3 gap-4">
                {study.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="type-label text-mute">{m.label}</dt>
                    <dd className="type-h3 mt-2 text-mute" aria-label="Not yet published">
                      —
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link
              href={`/case-studies/${study.slug}`}
              className="type-label link-rule mt-9 inline-block"
            >
              Read the case study →
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
