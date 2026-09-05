import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { Signal } from "@/types/content";

type Ground = "paper" | "paper-pure" | "ink" | "accent";

interface SectionProps {
  children: ReactNode;
  /** Recolours every accent inside this section. One accent per section. */
  signal?: Signal;
  ground?: Ground;
  /** Drives the header's contextual logo colour as the section passes under it. */
  headerTheme?: "light" | "dark";
  className?: string;
  id?: string;
  as?: "section" | "div" | "footer" | "header" | "article";
  /** Vertical rhythm. `flush` removes it for sections that manage their own. */
  space?: "default" | "tight" | "loose" | "flush";
}

const SPACE: Record<NonNullable<SectionProps["space"]>, string> = {
  default: "py-[clamp(4rem,9vw,8.5rem)]",
  tight: "py-[clamp(2.5rem,5vw,4.5rem)]",
  loose: "py-[clamp(5.5rem,13vw,12rem)]",
  flush: "",
};

const GROUND: Record<Ground, string> = {
  paper: "bg-paper text-ink",
  "paper-pure": "bg-paper-pure text-ink",
  ink: "",
  accent: "bg-signal text-accent-ink",
};

/**
 * The single sectioning primitive. `signal` sets the accent that cascades to
 * everything inside, and `headerTheme` tells the header which logo colour to
 * take while this section is beneath it.
 */
export function Section({
  children,
  signal = "neutral",
  ground = "paper",
  headerTheme,
  className,
  id,
  as: Tag = "section",
  space = "default",
}: SectionProps) {
  const resolvedTheme =
    headerTheme ?? (ground === "ink" ? "dark" : "light");

  return (
    <Tag
      id={id}
      data-signal={signal}
      data-ground={
        ground === "ink" ? "ink" : ground === "accent" ? "accent" : undefined
      }
      data-header-theme={resolvedTheme}
      className={cn("relative", GROUND[ground], SPACE[space], className)}
    >
      {children}
    </Tag>
  );
}
