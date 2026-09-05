import "server-only";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { errorMessage, logger } from "@/lib/logger";
import { SITE } from "@/content/site";
import { getService } from "@/content/services";
import { getIndustry } from "@/content/industries";
import type { Lead, LeadResult } from "@/features/leads/schema";

const SOURCE_LABEL: Record<Lead["source"], string> = {
  contact: "Consultation request",
  "growth-audit": "Growth audit request",
  "growth-stack": "Find your growth stack",
};

interface LeadRow {
  source: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  website: string | null;
  country: string | null;
  industry: string | null;
  services_needed: string[];
  budget_band: string | null;
  message: string | null;
  payload: Record<string, unknown>;
  status: string;
}

function toRow(lead: Lead): LeadRow {
  const shared = {
    source: lead.source,
    name: lead.name,
    email: lead.email,
    phone: lead.phone || null,
    company: lead.company || null,
    website: lead.website || null,
    country: lead.country || null,
    message: lead.message || null,
    status: "new",
  };

  if (lead.source === "contact") {
    return {
      ...shared,
      industry: lead.industry,
      services_needed: [...lead.services],
      budget_band: lead.budget ?? null,
      payload: {},
    };
  }

  if (lead.source === "growth-audit") {
    return {
      ...shared,
      industry: lead.industry,
      services_needed: [],
      budget_band: null,
      payload: { areas: lead.areas },
    };
  }

  return {
    ...shared,
    industry: null,
    services_needed: [...lead.recommended],
    budget_band: null,
    payload: { answers: lead.answers },
  };
}

/** Plain-text notification. Kept simple so it renders in any mail client. */
function composeEmail(lead: Lead): { subject: string; text: string } {
  const lines: string[] = [
    SOURCE_LABEL[lead.source],
    "",
    `Name:     ${lead.name}`,
    `Email:    ${lead.email}`,
  ];

  if (lead.phone) lines.push(`Phone:    ${lead.phone}`);
  if (lead.company) lines.push(`Company:  ${lead.company}`);
  if (lead.website) lines.push(`Website:  ${lead.website}`);
  if (lead.country) lines.push(`Country:  ${lead.country}`);

  if (lead.source === "contact") {
    const industry = getIndustry(lead.industry);
    lines.push(`Industry: ${industry?.name ?? lead.industry}`);
    if (lead.budget) lines.push(`Budget:   ${lead.budget}`);
    lines.push("", "Services requested:");
    for (const slug of lead.services) {
      const service = getService(slug);
      lines.push(`  - ${service ? `${service.number} ${service.title}` : slug}`);
    }
  }

  if (lead.source === "growth-audit") {
    const industry = getIndustry(lead.industry);
    lines.push(`Industry: ${industry?.name ?? lead.industry}`);
    if (lead.areas.length > 0) {
      lines.push("", "Areas to review:");
      for (const area of lead.areas) lines.push(`  - ${area}`);
    }
  }

  if (lead.source === "growth-stack") {
    lines.push("", "Recommended stack:");
    for (const slug of lead.recommended) {
      const service = getService(slug);
      lines.push(`  - ${service ? `${service.number} ${service.title}` : slug}`);
    }
    lines.push("", "Answers:");
    for (const [key, value] of Object.entries(lead.answers)) {
      lines.push(`  ${key}: ${JSON.stringify(value)}`);
    }
  }

  if (lead.message) lines.push("", "Message:", lead.message);

  return {
    subject: `${SOURCE_LABEL[lead.source]} — ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
    text: lines.join("\n"),
  };
}

/**
 * Persists the lead, then notifies. Notification failure is logged but never
 * fails the submission — the row is already saved, and asking a prospect to
 * retype a form because an email provider timed out loses the lead twice.
 */
export async function submitLead(lead: Lead): Promise<LeadResult> {
  const supabase = getSupabaseAdmin();
  let stored = false;

  if (supabase) {
    const { error } = await supabase.from("leads").insert(toRow(lead));
    if (error) {
      logger.error("lead.store_failed", {
        source: lead.source,
        code: error.code,
        message: error.message,
      });
      return {
        success: false,
        message: "We could not submit your enquiry. Please try again shortly.",
      };
    }
    stored = true;
  } else {
    logger.warn("lead.store_skipped", {
      source: lead.source,
      reason: "supabase_not_configured",
    });
  }

  await notify(lead);
  logger.info("lead.submitted", { source: lead.source, stored });

  return {
    success: true,
    message: "Thank you. We will be in touch within one business day.",
  };
}

async function notify(lead: Lead): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL ?? SITE.email;
  const from = process.env.LEAD_FROM_EMAIL;

  if (!apiKey || !from) {
    logger.warn("lead.notify_skipped", { reason: "resend_not_configured" });
    return;
  }

  try {
    const { subject, text } = composeEmail(lead);
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: lead.email,
      subject,
      text,
    });
    if (error) throw new Error(error.message);
    logger.info("lead.notified", { source: lead.source });
  } catch (error) {
    // The lead is safe in the database; surface this for follow-up.
    logger.error("lead.notify_failed", {
      source: lead.source,
      message: errorMessage(error),
    });
  }
}
