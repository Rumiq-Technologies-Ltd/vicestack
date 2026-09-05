"use client";

import { useEffect } from "react";

/**
 * Adds `reveal-in` to every `.reveal` element as it enters the viewport.
 *
 * One observer for the whole document rather than one per component, and it
 * re-scans on route change. Elements are unobserved once revealed, so there is
 * no work left running after first paint.
 */
export function useReveal(): void {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      document
        .querySelectorAll<HTMLElement>(".reveal")
        .forEach((el) => el.classList.add("reveal-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("reveal-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.reveal-in)")
        .forEach((el) => observer.observe(el));
    };

    scan();

    // Catch elements added by client transitions or lazy sections.
    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);
}

/** Mounted once in the root layout. Renders nothing. */
export function RevealProvider(): null {
  useReveal();
  return null;
}
