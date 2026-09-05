# Architecture

## Principle

One source of content, many consumers. `src/content` holds typed modules;
routes, `sitemap.ts`, JSON-LD, internal links, `llms.txt`, the contact form's
options and (in Phase 3) the recommendation engine all read from them. Adding a
service or industry is one object in one file.

## Layers

```
Route (app/)          thin — metadata, schema, composition
  ↓
Feature (features/)   page-specific sections and client behaviour
  ↓
Component             editorial primitives and UI, no business logic
  ↓
Content (content/)    typed data, the source of truth
```

Server-side work goes the other way:

```
Route handler (app/api/)   validate, rate limit, delegate
  ↓
Service (features/*/service.ts)   business rules, orchestration
  ↓
Integration (lib/)   Supabase, Resend, logger
```

Route handlers hold no business logic. Services never touch React. Components
never query anything.

## Directories

| Path | Holds |
|---|---|
| `src/app` | Routes only. Metadata, JSON-LD, section composition. |
| `src/content` | Services, industries, stack, case studies, insights, site constants. Typed, readonly. |
| `src/types` | Shared content types. |
| `src/components/editorial` | `Section` `SectionHeader` `GhostNumeral` `DataRow` `ImageSlab` `CTABanner` `PageIntro` `Placeholder` |
| `src/components/layout` | `Header` `Footer` `Breadcrumbs` |
| `src/components/brand` | The wordmark sprite and its `<use>` wrapper. |
| `src/components/ui` | `Button` `Field` — generic, no business logic. |
| `src/features` | `stack` `home` `leads`. Feature-owned components, schemas and services. |
| `src/lib` | `seo` `schema` `logger` `cn` `supabase`. Integrations and cross-cutting helpers. |
| `src/hooks` | `useReveal`. |
| `supabase/migrations` | Versioned schema. Never edit production directly. |
| `scripts` | Screenshot and image-optimisation utilities. Not shipped. |

## The Stack

`src/content/stack.ts` derives eight conceptual layers from the nine services by
grouping on `service.layer` — Engagement holds both Social Media and Email. The
nine stay individually explicit everywhere they render.

`features/stack/StackSection.tsx` observes each layer block against a thin band
across the middle of the viewport and writes the active layer's signal onto the
section, which recolours everything inside. Every layer is real DOM: the section
reads correctly with JavaScript disabled and is fully indexable.

## Colour

See the design system section in the README. The mechanism is one CSS cascade
keyed on `data-signal` and `data-ground`, defined entirely in `globals.css`.
Components use `bg-signal` / `border-signal` for graphics and `text-accent` for
type; the cascade guarantees contrast.

## The wordmark

Traced from the supplied artwork into `public/vicestack-logo.svg` (91.7% pixel
agreement with the original, sub-pixel edge error only). Letterforms are fixed —
thin monoline geometric, crossbar-less A, stemless three-bar E, K with the lower
leg branching off the upper arm. Only the colour changes.

Rendered once per document as a hidden `<symbol>` in the root layout; every logo
on the page is a `<use>` reference, so the path data appears once and
`currentColor` still resolves per instance.

## SEO and AEO

Built into the templates, not bolted on:

- `lib/seo.ts` — one `buildMetadata()` per route. Title, description, canonical, OG, Twitter.
- `lib/schema.ts` — Organization, WebSite, Service, FAQPage, BreadcrumbList. Emitted only where the matching content is visible.
- **Direct answers.** Every service and industry opens with a plain two-or-three sentence answer to its target question before any elaboration. This is the AEO mechanism and it doubles as good editorial writing.
- `sitemap.ts` and `robots.ts` generate from the content modules. Non-production deploys are `disallow: /`.
- `/llms.txt` summarises services, industries and definitions for answer engines.

Interactive tools never hold information exclusively — the static page always
carries the same ground.

## Leads

Three surfaces (contact, growth audit, growth stack) share one Zod discriminated
union, one table and one service. Storage happens first; notification failure is
logged but never fails the submission, because the row is already safe and
making a prospect retype a form loses the lead twice.

The honeypot field is deliberately permissive in the schema — a strict rule
would return a 400 naming the field and tell a bot which one to leave alone. The
route checks it after parsing and answers 200.

Rate limiting is in-memory and therefore per-instance. It stops form-spam
scripts; move it to Upstash if abuse becomes real.

## Motion

One IntersectionObserver in `useReveal`, mounted once in the root layout,
adding `.reveal-in` to `.reveal` elements as they enter and unobserving them
after. No animation library. `prefers-reduced-motion: reduce` reveals everything
immediately and disables transforms.

## Not built yet

Phase 2: industry detail pages, case studies, insights, about, pricing, FAQ.
Phase 3: the recommendation engine and its two front-ends, growth audit, client
portal demo.

`src/app/sitemap.ts` already lists those routes — they will 404 until built, so
do not deploy to production before Phase 2 lands or trim the sitemap.
