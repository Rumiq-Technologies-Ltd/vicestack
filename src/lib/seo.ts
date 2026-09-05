import type { Metadata } from "next";
import { SITE } from "@/content/site";

interface BuildMetadataInput {
  title: string;
  description: string;
  /** Site-root-relative path, e.g. "/services". */
  path: string;
  /** Set false for pages that should not be indexed. */
  index?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
}

/** Single source of page metadata. Every route calls this. */
export function buildMetadata({
  title,
  description,
  path,
  index = true,
  type = "website",
  publishedTime,
}: BuildMetadataInput): Metadata {
  const url = new URL(path, SITE.url).toString();
  const fullTitle = path === "/" ? title : `${title} — ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      type,
      locale: "en_US",
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).toString();
}
