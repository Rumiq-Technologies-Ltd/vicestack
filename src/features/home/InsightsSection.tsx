import Link from "next/link";
import { Section } from "@/components/editorial/Section";
import { PlaceholderTag } from "@/components/editorial/Placeholder";
import { INSIGHTS, formatInsightDate } from "@/content/insights";

export function InsightsSection() {
  const featured = INSIGHTS.slice(0, 3);

  return (
    <Section signal="neutral" ground="paper-pure">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-rule pt-3">
          <span className="type-label text-accent">08 — Insights</span>
          <Link href="/insights" className="type-label link-rule">
            All insights →
          </Link>
        </div>

        <h2 className="reveal type-display-m mt-8 max-w-[20ch] text-balance">
          Notes on building growth where the usual advice stops working.
        </h2>

        <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {featured.map((post, i) => (
            <article
              key={post.slug}
              data-signal={post.signal}
              className="reveal"
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <Link href={`/insights/${post.slug}`} className="group block">
                <div className="flex items-center justify-between gap-4 border-t border-rule pt-3">
                  <span className="type-label text-accent">{post.category}</span>
                  <span className="type-label text-mute">{post.readingTime}</span>
                </div>
                <h3 className="type-h3 mt-5 text-balance transition-opacity duration-300 group-hover:opacity-60">
                  {post.title}
                </h3>
                <p className="type-small measure mt-3 text-body">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="type-label text-mute">
                    {formatInsightDate(post.date)}
                  </span>
                  {post.draft && <PlaceholderTag label="Demo article" />}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
