import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { PlaceholderTag } from "@/components/editorial/Placeholder";
import { CTA, FOOTER_LEGAL, NAV, SITE, SOCIAL } from "@/content/site";

const YEAR = new Date().getFullYear();

const EXTRA = [
  { label: "Contact", href: "/contact" },
  { label: "Growth Audit", href: "/growth-audit" },
  { label: "Find Your Growth Stack", href: CTA.tool.href },
] as const;

export function Footer() {
  return (
    <footer data-ground="ink" data-header-theme="dark" data-signal="neutral">
      <div className="shell pb-12 pt-[clamp(3.5rem,7vw,6rem)]">
        <div className="grid gap-12 border-t border-rule pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark height={26} />
            <p className="type-lead measure-tight mt-7 text-balance">
              {SITE.tagline}
            </p>
            <p className="type-small prose-body mt-6">
              Working with businesses across {SITE.regions.join(" and ")}.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <h2 className="type-label mb-5 opacity-65">Index</h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {[...NAV, ...EXTRA].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="type-small link-rule">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="type-label mb-5 opacity-65">Elsewhere</h2>
            <ul className="space-y-2.5">
              {SOCIAL.map((s) => (
                <li key={s.label} className="flex items-center gap-2">
                  <a href={s.href} className="type-small link-rule">
                    {s.label}
                  </a>
                  <PlaceholderTag label="Link pending" />
                </li>
              ))}
            </ul>
            <a href={`mailto:${SITE.email}`} className="type-small link-rule mt-6 inline-block">
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-rule pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="type-small opacity-65">
            © {YEAR} {SITE.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-6">
            {FOOTER_LEGAL.map((l) => (
              <li key={l.href} className="flex items-center gap-2">
                <Link href={l.href} className="type-label opacity-65 hover:opacity-100">
                  {l.label}
                </Link>
                <PlaceholderTag label="Page pending" />
              </li>
            ))}
          </ul>
        </div>

        <p className="type-small measure mt-8 opacity-60">
          ViceStack provides technology and marketing services. We do not provide
          legal or regulatory advice, and we do not guarantee compliance with any
          law, regulation or platform policy. Advertising channel availability
          varies by market and platform and is subject to platform policies.
        </p>
      </div>
    </footer>
  );
}
