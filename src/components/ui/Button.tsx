import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "accent" | "quiet";
type Size = "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-none type-label transition-colors duration-300 disabled:pointer-events-none disabled:opacity-40";

const VARIANT: Record<Variant, string> = {
  primary: [
    "bg-ink text-paper hover:bg-signal hover:text-accent-ink",
    "[[data-ground='ink']_&]:bg-paper [[data-ground='ink']_&]:text-ink",
    "[[data-ground='ink']_&]:hover:bg-signal [[data-ground='ink']_&]:hover:text-accent-ink",
    // On a signal ground the hover cannot be the signal itself.
    "[[data-ground='accent']_&]:hover:bg-paper [[data-ground='accent']_&]:hover:text-ink",
  ].join(" "),
  secondary:
    "border border-current text-current hover:bg-ink hover:text-paper hover:border-ink [[data-ground='ink']_&]:hover:bg-paper [[data-ground='ink']_&]:hover:text-ink [[data-ground='ink']_&]:hover:border-paper",
  accent: "bg-signal text-accent-ink hover:bg-ink hover:text-paper",
  quiet: "link-rule text-current px-0",
};

const SIZE: Record<Size, string> = {
  md: "h-11 px-6",
  lg: "h-14 px-8",
};

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonLinkProps = ButtonBaseProps &
  Omit<ComponentProps<typeof Link>, "className" | "children">;

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(BASE, VARIANT[variant], variant !== "quiet" && SIZE[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}

type ButtonProps = ButtonBaseProps &
  Omit<ComponentProps<"button">, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(BASE, VARIANT[variant], variant !== "quiet" && SIZE[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
