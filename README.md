# ViceStack

Technology and digital growth infrastructure for businesses in regulated,
restricted and high-friction markets across the US and Canada.

Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind v4 · Supabase · Resend

---

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Supabase and Resend, or leave blank
npm run dev
```

The site runs without any environment variables. With Supabase unset, leads are
validated and accepted but not stored — a warning is logged. With Resend unset,
no notification is sent. Both are safe for local development; neither is safe
for production.

## Scripts

| Command | Does |
|---|---|
| `npm run dev` | Dev server on :3000 |
| `npm run build` | Production build (runs typecheck) |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `bash scripts/shot.sh /path name [w] [h]` | Full-page screenshot, sliced into review tiles |
| `node scripts/optimize-images.cjs` | Resize and compress source images into `public/images` |

`scripts/shot.sh` uses headless Chrome, which enforces a minimum window width on
Windows — capture mobile widths in a real browser rather than below ~500px.

## Database

```bash
# Apply supabase/migrations/0001_leads.sql to your Supabase project.
```

One `leads` table serves all three capture surfaces. Source-specific data —
growth audit areas, or the full growth stack questionnaire — lives in `payload`.
RLS is on with no policies: writes go through the service role key server-side,
and nothing else can read the table.

## Architecture

See [docs/architecture.md](docs/architecture.md).

The short version: content lives in typed modules under `src/content`, and the
routes, sitemap, JSON-LD, internal links and `llms.txt` all read from those same
modules. Adding an industry is one object, not eight edits.

## Design system

Defined once in `src/app/globals.css`.

The site is monochrome. Yellow, blue and red are **signals**, not decoration —
yellow means discovery, blue means technology, red means friction. A section
declares `data-signal` and everything inside recolours from it.

Three colour roles, because a signal that works as a fill often fails as text:

- `--signal` — fills, rules, oversized marks
- `--accent` — the same idea used as type, always legible on the current ground
- `--accent-ink` — type placed on top of a signal ground

Yellow is never type on paper (~1.3:1). Red darkens for type on light and
lightens for type on dark. Blue does the same. This is handled by the cascade,
so using `text-accent` is always safe.

## Placeholders

Demo content is marked in the UI and inventoried in
[src/content/PLACEHOLDERS.md](src/content/PLACEHOLDERS.md). Clear that list
before launch. No performance figures, testimonials or client names are
invented anywhere in this repo.

## Legal

The site makes no compliance or platform-approval guarantees, and gives no legal
advice. Advertising copy always carries a hedge — see `HEDGE` in
`src/content/site.ts`.
