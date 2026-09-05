import { Section } from "@/components/editorial/Section";
import { GhostNumeral } from "@/components/editorial/GhostNumeral";
import { ImageSlab } from "@/components/editorial/ImageSlab";

const PRINCIPLES = [
  {
    n: "01",
    claim: "Build once. Learn constantly.",
    body: "A site, a list and a measurement layer are assets that appreciate. Campaigns are expenses that reset to zero. We front-load the first so the second becomes optional rather than existential.",
  },
  {
    n: "02",
    claim: "Make it discoverable before you make it loud.",
    body: "Discovery is the only channel nobody can revoke. Structure, entities and direct answers earn placement in search and in the assistants sitting in front of it.",
  },
  {
    n: "03",
    claim: "Marketing without measurement is expensive optimism.",
    body: "If two channels report the same conversion, at least one of them is wrong. One measurement layer, defined once, is what makes a budget decision a decision.",
  },
  {
    n: "04",
    claim: "Constraints are the brief, not the excuse.",
    body: "We plan around what a category is actually permitted to do. That is a narrower field than most businesses get, and it makes the work more precise rather than less.",
  },
];

export function PhilosophySection() {
  return (
    <Section signal="yellow" ground="paper" className="overflow-hidden">
      <GhostNumeral value="05" side="left" className="top-4" />
      <div className="shell relative">
        <div className="grid gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="reveal type-label block border-t border-rule pt-3 text-accent">
              05 — How we think
            </span>
            <h2 className="reveal type-display-m mt-6 text-balance">
              Four positions we will argue about.
            </h2>
            <p className="reveal type-body measure mt-6 text-body">
              None of these are novel. They are just unevenly applied, and they
              get abandoned first in exactly the markets that need them most.
            </p>

            <ImageSlab
              src="/images/philosophy-portrait.jpg"
              alt="High-contrast black and white portrait, tightly cropped, direct gaze, minimal background"
              ratio="3/4"
              intervention="edge"
              className="mt-12 hidden lg:block"
              sizes="(min-width: 1024px) 36vw, 100vw"
            />
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.n}
                className="reveal border-t border-rule py-8 last:border-b"
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              >
                <span className="type-label text-mute">{p.n}</span>
                <h3 className="type-h3 mt-3 text-balance">{p.claim}</h3>
                <p className="type-body measure mt-3 text-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
