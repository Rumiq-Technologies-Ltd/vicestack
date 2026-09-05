import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

/**
 * Non-production deployments are kept out of the index entirely, so a preview
 * URL can never outrank the real site.
 */
export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production" || process.env.ALLOW_INDEXING === "true";

  if (!isProduction) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/portal"],
      },
    ],
    sitemap: new URL("/sitemap.xml", SITE.url).toString(),
    host: SITE.url,
  };
}
