"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { ButtonLink } from "@/components/ui/Button";
import { CTA, NAV } from "@/content/site";
import { cn } from "@/lib/cn";

const HEADER_H = 72;

/**
 * Reads `data-header-theme` from whichever section is currently under the
 * header line, so the wordmark and nav recolour as the page scrolls. Uses
 * cached bounding rects rather than hit-testing — there are only a handful of
 * sections per page.
 */
function useSectionTheme(): "light" | "dark" {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();
  const frame = useRef(0);

  useEffect(() => {
    let sections: HTMLElement[] = [];

    const collect = () => {
      sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-header-theme]"),
      );
    };

    const measure = () => {
      frame.current = 0;
      const line = HEADER_H / 2;
      let next: "light" | "dark" = "light";
      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= line && rect.bottom > line) {
          next = el.dataset.headerTheme === "dark" ? "dark" : "light";
        }
      }
      setTheme(next);
    };

    const onScroll = () => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(measure);
    };

    collect();
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Sections can arrive after hydration on streamed routes.
    const mo = new MutationObserver(() => {
      collect();
      onScroll();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mo.disconnect();
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [pathname]);

  return theme;
}

export function Header() {
  const theme = useSectionTheme();
  const pathname = usePathname();

  // The menu is open only for the route it was opened on, so navigating —
  // including via back/forward — closes it without an effect.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const close = useCallback(() => setOpenPath(null), []);
  const toggle = useCallback(
    () => setOpenPath((current) => (current === pathname ? null : pathname)),
    [pathname],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenPath(null);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const dark = theme === "dark" || open;

  return (
    <>
      <a
        href="#main"
        className="type-label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
      >
        Skip to content
      </a>

      <header
        data-ground={dark ? "ink" : undefined}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          dark ? "text-paper" : "text-ink",
          open && "bg-ink",
        )}
        style={{ height: HEADER_H }}
      >
        <div className="shell flex h-full items-center justify-between gap-8">
          <Link
            href="/"
            aria-label="ViceStack — home"
            onClick={close}
            className="shrink-0 transition-opacity duration-300 hover:opacity-70"
          >
            <Wordmark height={17} />
          </Link>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-7">
              {NAV.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "type-label link-rule whitespace-nowrap transition-opacity duration-300",
                        active ? "opacity-100" : "opacity-60 hover:opacity-100",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <ButtonLink
              href={CTA.primary.href}
              variant="primary"
              className="hidden sm:inline-flex"
            >
              {CTA.primary.label}
            </ButtonLink>
            <button
              type="button"
              onClick={toggle}
              aria-expanded={open}
              aria-controls="site-menu"
              className="type-label -mr-1 flex h-11 items-center gap-2.5 px-1 xl:hidden"
            >
              <span className="relative block h-2.5 w-5" aria-hidden="true">
                <span
                  className={cn(
                    "absolute left-0 block h-px w-5 bg-current transition-transform duration-300",
                    open ? "top-1/2 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 block h-px w-5 bg-current transition-transform duration-300",
                    open ? "top-1/2 -rotate-45" : "top-full",
                  )}
                />
              </span>
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        <div
          className={cn(
            "shell pointer-events-none absolute inset-x-0 bottom-0 transition-opacity duration-500",
            dark ? "opacity-20" : "opacity-100",
          )}
        >
          <div className="h-px w-full bg-rule" />
        </div>
      </header>

      {/* Full index. Always in the DOM so it is crawlable and keyboard reachable. */}
      <div
        id="site-menu"
        data-ground="ink"
        hidden={!open}
        className="fixed inset-0 z-40 overflow-y-auto bg-ink text-paper"
      >
        <div className="shell flex min-h-full flex-col justify-between pb-14" style={{ paddingTop: HEADER_H + 40 }}>
          <nav aria-label="All pages">
            <ul>
              {NAV.map((item, i) => (
                <li key={item.href} className="border-t border-rule">
                  <Link
                    href={item.href}
                    onClick={close}
                    className="group flex items-baseline gap-6 py-5 transition-colors duration-300 hover:text-signal-yellow"
                  >
                    <span className="type-label w-7 shrink-0 opacity-50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="type-display-m">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-14 flex flex-wrap gap-3 border-t border-rule pt-10">
            <ButtonLink href={CTA.primary.href} onClick={close} variant="primary" size="lg">
              {CTA.primary.label}
            </ButtonLink>
            <ButtonLink href={CTA.secondary.href} onClick={close} variant="secondary" size="lg">
              {CTA.secondary.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}
