# Placeholder inventory

Everything on this list is standing in for content that does not exist yet.
Nothing here may be presented as real. Clear the list before launch.

To find every marker in the running site:

```bash
grep -rn "PlaceholderTag\|Placeholder\b\|draft: true\|real: false" src/
```

In development, placeholders render as a red chip. In production they render as
a discreet bordered label — still visible, never silent.

---

## Blocking launch

| Item | Where | What is needed |
|---|---|---|
| Case study metrics | `src/content/case-studies.ts` → `metrics[].value` | Real measured figures, or delete the metric rows. Never estimate. |
| Insights articles | `src/content/insights.ts` → all six, `draft: true` | Real article bodies. Titles come from the brief and are fine to keep. |
| Social links | `src/content/site.ts` → `SOCIAL` | Real profile URLs, or remove the entries. |
| Legal pages | `/privacy`, `/terms` | Written by the client's own advisors. Routes do not exist yet. |
| Canonical origin | `NEXT_PUBLIC_SITE_URL` | Confirm the production domain. Currently defaults to `https://vicestack.com`. |
| Contact email | `src/content/site.ts` → `SITE.email` | Confirm `hello@vicestack.com` is monitored. |

## Not blocking, but unfinished

| Item | Where | Note |
|---|---|---|
| Case study body | `src/content/case-studies.ts` → `sections` | Written from the brief's description of the peptide project. Confirm accuracy with whoever delivered it. |
| Peptide client name | `case-studies.ts` → `client: "Peptide business"` | Anonymous until the client agrees to be named. |
| Imagery | `public/images/*` | AI-generated to the brief's art direction, monochrome, marked as placeholder art. Swap for commissioned or licensed photography when available. Every slot is swappable — see `ImageSlab`. |
| Logo vector | `public/vicestack-logo.svg` | Traced from the supplied 639×197 JPEG at 91.7% pixel agreement. Replace with the designer's original vector if it exists; it is one file. |

## Rules

- Never invent revenue, ROAS, lead counts, traffic, conversion rates, awards,
  certifications, testimonials, team members or years in business.
- Where a figure is unavailable, render an em dash and a visible marker rather
  than an estimate.
- Demo case studies must carry `DEMO CASE STUDY — PLACEHOLDER CONTENT` on the
  card itself, not only in this file.
