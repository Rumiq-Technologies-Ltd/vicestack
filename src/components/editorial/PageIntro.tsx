import type { ReactNode } from "react";
import { Section } from "@/components/editorial/Section";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import type { Signal } from "@/types/content";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  lead: string;
  /** The direct answer block. Stated plainly, before any elaboration. */
  answer?: { question: string; body: string };
  crumbs?: readonly Crumb[];
  signal?: Signal;
  meta?: readonly { label: string; value: string }[];
  children?: ReactNode;
}

/** Opening block for every interior page. Carries the AEO direct answer. */
export function PageIntro({
  eyebrow,
  title,
  lead,
  answer,
  crumbs,
  signal = "neutral",
  meta,
  children,
}: PageIntroProps) {
  return (
    <Section signal={signal} ground="paper" space="tight" className="pt-10">
      <div className="shell">
        {crumbs && <Breadcrumbs crumbs={crumbs} className="mb-10" />}

        <div className="flex items-baseline justify-between gap-6 border-t border-rule pt-3">
          <span className="type-label text-accent">{eyebrow}</span>
        </div>

        <h1 className="type-display-xl mt-7 max-w-[17ch] text-balance">{title}</h1>

        <div className="mt-10 grid gap-x-10 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="type-lead measure text-body">{lead}</p>
            {children}
          </div>

          {answer && (
            <div className="lg:col-span-5 lg:col-start-8">
              <h2 className="type-label border-t border-rule pt-3 text-mute">
                {answer.question}
              </h2>
              <p className="type-body measure mt-4">{answer.body}</p>
            </div>
          )}
        </div>

        {meta && (
          <dl className="mt-14 grid gap-x-10 border-t border-rule sm:grid-cols-3">
            {meta.map((m) => (
              <div key={m.label} className="py-4">
                <dt className="type-label text-mute">{m.label}</dt>
                <dd className="type-body mt-2">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </Section>
  );
}
