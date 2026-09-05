import Image from "next/image";
import { cn } from "@/lib/cn";
import { PlaceholderTag } from "@/components/editorial/Placeholder";

type Intervention = "none" | "field" | "slash" | "offset" | "edge";

interface ImageSlabProps {
  src?: string;
  /** Required whenever src is set. Describes the image, not the brand. */
  alt: string;
  /** CSS aspect-ratio value, e.g. "4/5". */
  ratio?: string;
  /** One geometric intervention per image. Never more. */
  intervention?: Intervention;
  /** Editorial caption rendered beneath the image on a hairline. */
  caption?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Renders the image high-contrast monochrome. */
  mono?: boolean;
}

/**
 * Full-bleed or column-width photography with a single graphic intervention.
 * Never a card: no radius, no shadow, no border on the image itself.
 *
 * With no `src` it renders a deliberately blank, marked slot so an unfinished
 * image reads as a decision rather than a broken asset.
 */
export function ImageSlab({
  src,
  alt,
  ratio = "4/5",
  intervention = "none",
  caption,
  className,
  priority,
  sizes = "(min-width: 1024px) 45vw, 100vw",
  mono = true,
}: ImageSlabProps) {
  return (
    <figure className={cn("relative", className)}>
      <div className="relative">
        {/* Intervention sits behind the image and breaks its edge. */}
        {intervention === "field" && (
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -left-5 top-14 w-2/3 bg-signal"
          />
        )}
        {intervention === "offset" && (
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-full w-full border border-signal"
          />
        )}

        <div
          className="relative overflow-hidden bg-line"
          style={{ aspectRatio: ratio }}
        >
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              className={cn(
                "object-cover",
                mono && "grayscale contrast-[1.08]",
              )}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col justify-between p-5">
              <div aria-hidden="true" className="absolute inset-0">
                <span className="absolute left-0 top-1/2 h-px w-full bg-line-strong" />
                <span className="absolute left-1/2 top-0 h-full w-px bg-line-strong" />
              </div>
              <PlaceholderTag label="Image pending" detail={alt} className="relative self-start" />
              <span className="type-label relative text-mute">Art direction slot</span>
            </div>
          )}
        </div>

        {/* Object photography only. Never across a face. */}
        {intervention === "slash" && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <span className="absolute left-[8%] top-[62%] h-[3px] w-[84%] origin-left -rotate-[14deg] bg-signal" />
          </span>
        )}

        {/* The portrait-safe intervention: a bar breaking the bottom edge. */}
        {intervention === "edge" && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-3 left-[12%] h-6 w-[46%] bg-signal"
          />
        )}
      </div>

      {caption && (
        <figcaption className="type-label mt-4 border-t border-rule pt-3 text-mute">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
