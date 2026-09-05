import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  /** Small uppercase label, e.g. "The Stack". */
  eyebrow?: string;
  /** Two-digit editorial index rendered in the accent colour. */
  index?: string;
  title: ReactNode;
  /** Supporting paragraph. Kept to a readable measure. */
  lead?: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "l" | "m";
  className?: string;
  align?: "start" | "between";
}

const SIZE = {
  xl: "type-display-xl",
  l: "type-display-l",
  m: "type-display-m",
} as const;

export function SectionHeader({
  eyebrow,
  index,
  title,
  lead,
  as: Heading = "h2",
  size = "l",
  className,
  align = "start",
}: SectionHeaderProps) {
  return (
    <div className={cn("relative", className)}>
      {(eyebrow || index) && (
        <div
          className={cn(
            "reveal flex items-baseline gap-4 border-t border-rule pt-3",
            align === "between" && "justify-between",
          )}
        >
          {index && <span className="type-label text-accent">{index}</span>}
          {eyebrow && <span className="type-label text-mute">{eyebrow}</span>}
        </div>
      )}
      <Heading
        className={cn(
          "reveal mt-6 text-balance",
          SIZE[size],
        )}
        style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
      >
        {title}
      </Heading>
      {lead && (
        <div
          className="reveal type-lead measure prose-body mt-7 text-body"
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          {lead}
        </div>
      )}
    </div>
  );
}
