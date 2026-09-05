import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | null = null;

/**
 * Server-side Supabase client using the service role key. Never import this
 * from a client component — the key must not reach the browser.
 *
 * Returns null when credentials are absent, so local development and preview
 * builds work without a database. Callers must handle that.
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  if (cached) return cached;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;

  cached = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}
