import { z } from "zod";
import { SERVICES } from "@/content/services";
import { INDUSTRY_SLUGS } from "@/content/industries";

export const LEAD_SOURCES = ["contact", "growth-audit", "growth-stack"] as const;
export type LeadSource = (typeof LEAD_SOURCES)[number];

export const BUDGET_BANDS = [
  "Not sure yet",
  "Under $2,000 / month",
  "$2,000 – $5,000 / month",
  "$5,000 – $10,000 / month",
  "$10,000+ / month",
  "Project based",
] as const;

const serviceSlugs = SERVICES.map((s) => s.slug) as [string, ...string[]];
const industrySlugs = ["other", ...INDUSTRY_SLUGS] as [string, ...string[]];

/** Shared by every lead-capturing surface. */
const baseLead = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  website: z
    .string()
    .trim()
    .max(200)
    .optional()
    .or(z.literal(""))
    .refine(
      (v) => !v || /^([a-z]+:\/\/)?[^\s.]+\.[^\s]{2,}$/i.test(v),
      "Please enter a valid website address",
    ),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().max(4000).optional().or(z.literal("")),
  /**
   * Honeypot. Must stay empty, but it is deliberately permissive here: if the
   * schema rejected it, the 400 would name the field and tell a bot exactly
   * which one to leave alone. The route checks it after parsing and answers
   * 200 instead.
   */
  companyWebsiteUrl: z.string().max(200).optional(),
});

export const contactLeadSchema = baseLead.extend({
  source: z.literal("contact"),
  industry: z.enum(industrySlugs, {
    message: "Please choose the closest industry",
  }),
  services: z
    .array(z.enum(serviceSlugs))
    .min(1, "Please select at least one service"),
  budget: z.enum(BUDGET_BANDS).optional(),
});

export const auditLeadSchema = baseLead.extend({
  source: z.literal("growth-audit"),
  industry: z.enum(industrySlugs, {
    message: "Please choose the closest industry",
  }),
  /** Areas the prospect wants reviewed. */
  areas: z.array(z.string().max(80)).max(20).default([]),
});

export const growthStackLeadSchema = baseLead.extend({
  source: z.literal("growth-stack"),
  /** Raw questionnaire answers, kept verbatim for later analysis. */
  answers: z.record(z.string(), z.unknown()),
  recommended: z.array(z.string()).max(20).default([]),
});

export const leadSchema = z.discriminatedUnion("source", [
  contactLeadSchema,
  auditLeadSchema,
  growthStackLeadSchema,
]);

export type ContactLead = z.infer<typeof contactLeadSchema>;
export type AuditLead = z.infer<typeof auditLeadSchema>;
export type GrowthStackLead = z.infer<typeof growthStackLeadSchema>;
export type Lead = z.infer<typeof leadSchema>;

export interface LeadResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
