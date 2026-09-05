import { cn } from "@/lib/cn";

interface GhostNumeralProps {
  /** Usually a two-digit layer index, but any short string works. */
  value: string;
  className?: string;
  /** Which edge the numeral bleeds off. */
  side?: "left" | "right";
}

/**
 * Oversized numeral sitting behind a section and bleeding off the edge.
 * Decorative only — hidden from assistive technology, and never the sole
 * carrier of the number, which is always repeated in real text nearby.
 */
export function GhostNumeral({ value, className, side = "right" }: GhostNumeralProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute top-0 select-none font-semibold leading-none tracking-[-0.06em] text-signal",
        "text-[clamp(9rem,26vw,26rem)]",
        side === "right" ? "-right-[0.08em]" : "-left-[0.08em]",
        className,
      )}
      style={{ opacity: "var(--ghost-opacity)" }}
    >
      {value}
    </span>
  );
}
