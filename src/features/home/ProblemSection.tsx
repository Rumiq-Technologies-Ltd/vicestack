import { Section } from "@/components/editorial/Section";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { GhostNumeral } from "@/components/editorial/GhostNumeral";

const FRICTIONS = [
  {
    n: "01",
    title: "The ad account is a coin flip",
    body: "Channel availability shifts by category, product and market. A plan that assumes stable paid access is not a growth plan, it is a bet.",
  },
  {
    n: "02",
    title: "The agency says no, or says yes and means no",
    body: "Some decline the category outright. Others accept it and run the same playbook they run for everyone, which fails in market rather than in the pitch.",
  },
  {
    n: "03",
    title: "The buyer is checking you out first",
    body: "In these categories, trust is established before price is considered. Thin presentation reads as a warning long before anyone reaches the offer.",
  },
  {
    n: "04",
    title: "Nobody can tell you what is working",
    body: "Spend is spread across channels that each report their own version of success. Without one measurement layer, budget moves on instinct.",
  },
];

export function ProblemSection() {
  return (
    <Section signal="red" ground="paper" className="overflow-hidden">
      <GhostNumeral value="01" side="right" className="-top-8" />
      <div className="shell relative">
        <SectionHeader
          index="01"
          eyebrow="The problem"
          title={
            <>
              Traditional playbooks weren&rsquo;t built for every market.
            </>
          }
          lead="Most digital advice assumes a set of channels is simply there when you need it. For a whole class of legitimate businesses, that assumption is the first thing to break and everything downstream breaks with it."
          size="l"
        />

        <div className="mt-16 grid gap-x-10 gap-y-0 md:grid-cols-2 lg:mt-20">
          {FRICTIONS.map((item, i) => (
            <div
              key={item.n}
              className="reveal border-t border-rule py-8"
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
            >
              <span className="type-label text-accent">{item.n}</span>
              <h3 className="type-h3 mt-4 text-balance">{item.title}</h3>
              <p className="type-body measure mt-3 text-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
