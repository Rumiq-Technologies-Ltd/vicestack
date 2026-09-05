import { ButtonLink } from "@/components/ui/Button";
import { ImageSlab } from "@/components/editorial/ImageSlab";
import { CTA, SITE } from "@/content/site";

export function Hero() {
  return (
    <section
      data-signal="yellow"
      data-header-theme="light"
      className="relative overflow-hidden"
    >
      <div className="shell pb-[clamp(3.5rem,7vw,6rem)] pt-[clamp(3rem,7vw,6.5rem)]">
        <div className="flex items-baseline justify-between gap-6 border-t border-rule pt-3">
          <span className="type-label text-accent">
            Technology + Digital Growth
          </span>
          <span className="type-label text-mute">
            {SITE.regions.join(" / ")}
          </span>
        </div>

        <h1 className="reveal reveal-in type-display-xl mt-8 max-w-[19ch] text-balance">
          Growth infrastructure for businesses that don&rsquo;t fit the usual
          playbook.
        </h1>

        <div className="mt-12 grid gap-x-10 gap-y-12 lg:mt-16 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-5">
            <p className="type-lead measure text-body">
              ViceStack builds the technology, discovery, acquisition and
              automation infrastructure behind businesses in regulated,
              restricted and high-friction markets. Your market is complicated.
              Your stack doesn&rsquo;t have to be.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href={CTA.primary.href} variant="primary" size="lg">
                {CTA.primary.label}
              </ButtonLink>
              <ButtonLink href={CTA.secondary.href} variant="secondary" size="lg">
                {CTA.secondary.label}
              </ButtonLink>
            </div>

            <dl className="mt-14 border-b border-rule lg:mt-auto lg:pt-14">
              {[
                { k: "Built for", v: "Peptides, cannabis, adult, vape" },
                { k: "Working across", v: SITE.regions.join(", ") },
                { k: "Engagements", v: "Project and ongoing" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-baseline justify-between gap-6 border-t border-rule py-3"
                >
                  <dt className="type-label text-mute">{row.k}</dt>
                  <dd className="type-small text-right">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ImageSlab
              src="/images/hero-obscured.jpg"
              alt="White sculptural figure with black-gloved hands covering its eyes, dramatic shadow, near-black studio ground"
              ratio="4/5"
              intervention="field"
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              caption="Some markets are built to be hard to see into."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
