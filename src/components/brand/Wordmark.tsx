import { cn } from "@/lib/cn";
import { WORDMARK_ID, WORDMARK_VIEWBOX } from "@/components/brand/WordmarkSprite";

const RATIO = 431.5 / 49.1;

interface WordmarkProps {
  /** Rendered height in pixels. Width follows the fixed aspect ratio. */
  height?: number;
  className?: string;
  /** Set false when adjacent text already names the company. */
  labelled?: boolean;
}

/**
 * The wordmark. Colour comes from `currentColor`, so it adapts to whatever
 * section it sits in — the letterforms never change, only the colour does.
 */
export function Wordmark({
  height = 22,
  className,
  labelled = true,
}: WordmarkProps) {
  return (
    <svg
      viewBox={WORDMARK_VIEWBOX}
      height={height}
      width={Math.round(height * RATIO * 100) / 100}
      className={cn("block", className)}
      role={labelled ? "img" : "presentation"}
      aria-label={labelled ? "ViceStack" : undefined}
      aria-hidden={labelled ? undefined : true}
      focusable="false"
    >
      <use href={`#${WORDMARK_ID}`} />
    </svg>
  );
}
