import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { INDUSTRY_SLUGS } from "@/content/industries";
import { INSIGHTS } from "@/content/insights";
import { CASE_STUDIES } from "@/content/case-studies";

/**
 * Routes that exist in the content modules but are not built yet. Listing an
 * unbuilt URL would advertise a 404 to crawlers, so they are filtered out.
 * Delete entries here as each phase lands — see docs/architecture.md.
 */
const NOT_BUILT_YET = new Set([
  "/about",
  "/case-studies",
  "/insights",
  "/pricing",
  "/faq",
  "/growth-audit",
  "/find-your-growth-stack",
]);

function isBuilt(path: string): boolean {
  if (NOT_BUILT_YET.has(path)) return false;
  // Detail routes under an unbuilt hub are unbuilt too.
  for (const parent of NOT_BUILT_YET) {
    if (path.startsWith(`${parent}/`)) return false;
  }
  return !path.startsWith("/industries/");
}

/** Generated from the same content modules the pages render from. */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, SITE.url).toString();
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: url("/"), changeFrequency: "monthly", priority: 1 },
    { url: url("/services"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/industries"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/about"), changeFrequency: "yearly", priority: 0.6 },
    { url: url("/case-studies"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("/insights"), changeFrequency: "weekly", priority: 0.7 },
    { url: url("/pricing"), changeFrequency: "yearly", priority: 0.6 },
    { url: url("/faq"), changeFrequency: "monthly", priority: 0.6 },
    { url: url("/contact"), changeFrequency: "yearly", priority: 0.8 },
    { url: url("/growth-audit"), changeFrequency: "yearly", priority: 0.8 },
    { url: url("/find-your-growth-stack"), changeFrequency: "yearly", priority: 0.7 },
  ];

  const industries: MetadataRoute.Sitemap = INDUSTRY_SLUGS.map((slug) => ({
    url: url(`/industries/${slug}`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseStudies: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: url(`/case-studies/${c.slug}`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const insights: MetadataRoute.Sitemap = INSIGHTS.map((post) => ({
    url: url(`/insights/${post.slug}`),
    lastModified: new Date(`${post.date}T00:00:00Z`),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...core, ...industries, ...caseStudies, ...insights]
    .filter((entry) => isBuilt(new URL(entry.url).pathname))
    .map((entry) => ({ lastModified: now, ...entry }));
}
