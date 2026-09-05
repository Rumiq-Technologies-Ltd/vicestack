import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const IS_DEV = process.env.NODE_ENV !== "production";

interface PlaceholderProps {
  /** What is standing in, e.g. "Demo case study". */
  label: string;
  /** Extra context shown only in development. */
  detail?: string;
  className?: string;
}

/**
 * Marks content that is not real yet. Loud in development so it cannot be
 * forgotten; discreet but still visible in production so nothing demo is ever
 * presented as genuine. Inventory lives in src/content/PLACEHOLDERS.md.
 */
export function PlaceholderTag({ label, detail, className }: PlaceholderProps) {
  return (
    <span
      data-placeholder="true"
      className={cn(
        "type-label inline-flex max-w-full items-start gap-2 px-2 py-1 leading-[1.35]",
        IS_DEV
          ? "bg-signal-red text-white"
          : "border border-rule text-mute",
        className,
      )}
    >
      <span className="shrink-0">{label}</span>
      {IS_DEV && detail && (
        <span className="min-w-0 opacity-80">· {detail}</span>
      )}
    </span>
  );
}

interface PlaceholderBlockProps extends PlaceholderProps {
  children: ReactNode;
}

/** Wraps a whole block of demo content with a visible marker above it. */
export function Placeholder({
  label,
  detail,
  className,
  children,
}: PlaceholderBlockProps) {
  return (
    <div data-placeholder="true" className={cn("relative", className)}>
      <PlaceholderTag label={label} detail={detail} className="mb-4" />
      {children}
    </div>
  );
}
