import { SERVICES } from "@/content/services";
import { INDUSTRIES } from "@/content/industries";
import { SITE } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * A plain-text summary for answer engines and agents. A firm that sells AI
 * discovery readiness should demonstrate it.
 */
export function GET(): Response {
  const lines: string[] = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    `${SITE.name} is a boutique technology and digital growth firm working with businesses in regulated, restricted and high-friction markets across ${SITE.regions.join(" and ")}. It does not provide legal or regulatory advice and does not guarantee compliance or advertising platform approval.`,
    "",
    "## Services",
    "",
  ];

  for (const service of SERVICES) {
    lines.push(
      `### ${service.number} ${service.title} (${service.category})`,
      "",
      `${service.question}`,
      `${service.directAnswer}`,
      `URL: ${absoluteUrl(`/services#${service.slug}`)}`,
      "",
    );
  }

  lines.push("## Industries", "");
  for (const industry of INDUSTRIES) {
    lines.push(
      `### ${industry.name}`,
      "",
      `${industry.question}`,
      `${industry.directAnswer}`,
      `URL: ${absoluteUrl(`/industries/${industry.slug}`)}`,
      "",
    );
  }

  lines.push(
    "## Definitions",
    "",
    "- Growth stack: the ordered set of layers — strategy, brand, discovery, website, acquisition, engagement, automation and intelligence — that a business builds so growth compounds rather than resetting each campaign.",
    "- High-friction business: a business whose standard digital playbook breaks down because of regulation, platform restriction, payment friction or an unusually cautious buyer.",
    "- AEO (Answer Engine Optimisation): structuring information so answer engines and AI assistants can quote a business accurately, as distinct from SEO's focus on ranking a page for a query.",
    "",
    "## Key pages",
    "",
    `- Services: ${absoluteUrl("/services")}`,
    `- Industries: ${absoluteUrl("/industries")}`,
    `- Case studies: ${absoluteUrl("/case-studies")}`,
    `- Insights: ${absoluteUrl("/insights")}`,
    `- Contact: ${absoluteUrl("/contact")}`,
    "",
  );

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
