"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { STACK } from "@/content/stack";
import { cn } from "@/lib/cn";

/**
 * The Stack. Eight layers over nine services, revealed in sequence.
 *
 * The active layer sets `data-signal` on the whole section, so the accent
 * colour moves neutral -> yellow -> blue -> red -> neutral as the reader
 * descends. Every layer is real DOM content, not a canvas, so the section is
 * fully indexable and readable with JavaScript disabled.
 */
export function StackSection() {
  const [active, setActive] = useState(0);
  const blocks = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const els = blocks.current.filter((el): el is HTMLElement => Boolean(el));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (!Number.isNaN(index)) setActive(index);
        }
      },
      // A thin band across the middle of the viewport decides what is current.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = STACK[active];

  return (
    <section
      id="the-stack"
      data-ground="ink"
      data-header-theme="dark"
      data-signal={current.signal}
      className="relative transition-colors duration-700"
    >
      <div className="shell py-[clamp(4rem,9vw,8rem)]">
        <div className="grid gap-x-10 lg:grid-cols-12">
          {/* Rail — sticky on desktop, the persistent map of where you are. */}
          <div className="lg:col-span-4 xl:col-span-4">
            <div className="lg:sticky lg:top-[calc(72px+clamp(2rem,5vw,4.5rem))]">
              <span className="type-label block border-t border-rule pt-3 text-accent">
                03 — The Stack
              </span>
              <h2 className="type-display-m mt-6 text-balance">
                Eight layers. Nine services. One system.
              </h2>
              <p className="type-body prose-body measure-tight mt-6">
                Most agencies sell the layers separately and hope they add up.
                They rarely do. The stack is the order the pieces have to arrive
                in for any of them to compound.
              </p>

              <ol className="mt-10 hidden lg:block" aria-label="Stack layers">
                {STACK.map((layer, i) => {
                  const isActive = i === active;
                  return (
                    <li key={layer.layer}>
                      <a
                        href={`#layer-${layer.index}`}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "flex min-h-11 items-center gap-4 border-t border-rule py-2.5 transition-all duration-500",
                          isActive ? "opacity-100" : "opacity-60 hover:opacity-85",
                        )}
                      >
                        <span
                          className={cn(
                            "type-label transition-colors duration-500",
                            isActive ? "text-accent" : "",
                          )}
                        >
                          {layer.index}
                        </span>
                        <span className="type-body flex-1">{layer.layer}</span>
                        <span
                          aria-hidden="true"
                          className={cn(
                            "h-px bg-signal transition-all duration-700",
                            isActive ? "w-10" : "w-0",
                          )}
                        />
                      </a>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          {/* Layers */}
          <div className="mt-14 lg:col-span-7 lg:col-start-6 lg:mt-0">
            {STACK.map((layer, i) => (
              <article
                key={layer.layer}
                id={`layer-${layer.index}`}
                data-index={i}
                data-signal={layer.signal}
                ref={(el) => {
                  blocks.current[i] = el;
                }}
                className="scroll-mt-28 border-t border-rule py-[clamp(2.5rem,5vw,4rem)] first:border-t-0 first:pt-0"
              >
                <div className="flex items-baseline gap-5">
                  <span className="type-index text-accent">{layer.index}</span>
                  <h3 className="type-h2">{layer.layer}</h3>
                </div>
                <p className="type-lead measure mt-5 text-balance">
                  {layer.premise}
                </p>

                <ul className="mt-8">
                  {layer.services.map((service) => (
                    <li key={service.slug} className="border-t border-rule">
                      <Link
                        href={`/services#${service.slug}`}
                        className="group flex items-baseline gap-5 py-4 transition-opacity duration-300 hover:opacity-70"
                      >
                        <span className="type-label w-7 shrink-0 text-accent">
                          {service.number}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="type-body block">{service.title}</span>
                          <span className="type-small prose-body mt-1 block">
                            {service.headline}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className="type-label shrink-0 opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
