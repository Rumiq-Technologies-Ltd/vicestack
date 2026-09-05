import { SITE } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";
import type { FaqItem, Service } from "@/types/content";

/** Minimal JSON-LD node. Emitted only where the content is visible on the page. */
export type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    logo: absoluteUrl("/vicestack-logo.svg"),
    slogan: SITE.tagline,
    areaServed: SITE.regions.map((name) => ({ "@type": "Country", name })),
    knowsAbout: [
      "Technology infrastructure",
      "Digital growth",
      "Search engine optimisation",
      "Answer engine optimisation",
      "Local SEO",
      "Website development",
      "Paid media",
      "Marketing automation",
      "Analytics",
      "Regulated businesses",
      "Restricted industries",
      "High-friction markets",
    ],
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": absoluteUrl("/#organization") },
    inLanguage: "en",
  };
}

export function serviceSchema(service: Service): JsonLd {
  return {
    "@type": "Service",
    "@id": absoluteUrl(`/services#${service.slug}`),
    name: service.title,
    serviceType: service.category,
    description: service.directAnswer,
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: SITE.regions.map((name) => ({ "@type": "Country", name })),
  };
}

export function faqSchema(items: readonly FaqItem[]): JsonLd {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(
  crumbs: readonly { name: string; path: string }[],
): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

/** Wraps nodes into a single @graph document. */
export function graph(...nodes: JsonLd[]): string {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes });
}
