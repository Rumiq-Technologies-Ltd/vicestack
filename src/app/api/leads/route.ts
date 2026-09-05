import { NextResponse } from "next/server";
import { leadSchema, type LeadResult } from "@/features/leads/schema";
import { submitLead } from "@/features/leads/service";
import { logger } from "@/lib/logger";

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

// ponytail: in-memory limiter, so it is per-instance and resets on deploy.
// Enough to stop a form-spam script; move to Upstash/Redis if abuse is real.
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5_000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request: Request): Promise<NextResponse<LeadResult>> {
  try {
    if (rateLimited(clientIp(request))) {
      return NextResponse.json(
        { success: false, message: "Too many submissions. Please try again in a minute." },
        { status: 429 },
      );
    }

    const body: unknown = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the highlighted fields and try again.",
          errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
        },
        { status: 400 },
      );
    }

    // Honeypot. Bots complete it; humans never see it. Answer 200 so the bot
    // has no signal that it was rejected.
    if (parsed.data.companyWebsiteUrl) {
      logger.warn("lead.honeypot", { source: parsed.data.source });
      return NextResponse.json({
        success: true,
        message: "Thank you. We will be in touch within one business day.",
      });
    }

    const result = await submitLead(parsed.data);
    return NextResponse.json(result, { status: result.success ? 200 : 500 });
  } catch (error) {
    logger.error("lead.route_failed", {
      message: error instanceof Error ? error.message : String(error),
    });
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again shortly." },
      { status: 500 },
    );
  }
}
