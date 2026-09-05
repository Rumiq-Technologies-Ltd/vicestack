"use client";

import type { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";
import { useId } from "react";
import { cn } from "@/lib/cn";

const CONTROL =
  "w-full rounded-none border-0 border-b border-rule bg-transparent px-0 py-3 type-body text-current placeholder:text-mute focus:border-accent focus:outline-none focus:ring-0 transition-colors duration-300 aria-[invalid=true]:border-signal-red";

interface FieldShellProps {
  label: string;
  /** Rendered beneath the label to explain what is wanted. */
  hint?: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: (props: { id: string; describedBy?: string; invalid: boolean }) => ReactNode;
}

/** Label, control, hint and error, wired together for screen readers. */
export function Field({
  label,
  hint,
  error,
  optional,
  className,
  children,
}: FieldShellProps) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="type-label text-mute">
          {label}
        </label>
        {optional && <span className="type-label text-mute">Optional</span>}
      </div>
      {hint && (
        <p id={hintId} className="type-small mt-1.5 text-mute">
          {hint}
        </p>
      )}
      <div className="mt-1">
        {children({ id, describedBy, invalid: Boolean(error) })}
      </div>
      {error && (
        <p id={errorId} role="alert" className="type-small mt-2 text-signal-red-text">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextInput({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(CONTROL, className)} {...props} />;
}

export function TextArea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea rows={4} className={cn(CONTROL, "resize-y", className)} {...props} />;
}

export function Select({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(CONTROL, "cursor-pointer", className)} {...props}>
      {children}
    </select>
  );
}

interface CheckGridProps {
  legend: string;
  hint?: string;
  error?: string;
  options: readonly { value: string; label: string; note?: string }[];
  selected: readonly string[];
  onToggle: (value: string) => void;
  columns?: 1 | 2;
}

/**
 * Multi-select rendered as a grid of real checkboxes. Keyboard and screen
 * reader behaviour comes from the native control; the box is styling only.
 */
export function CheckGrid({
  legend,
  hint,
  error,
  options,
  selected,
  onToggle,
  columns = 2,
}: CheckGridProps) {
  const id = useId();
  const errorId = error ? `${id}-error` : undefined;

  return (
    <fieldset aria-describedby={errorId} aria-invalid={Boolean(error)}>
      <legend className="type-label text-mute">{legend}</legend>
      {hint && <p className="type-small mt-1.5 text-mute">{hint}</p>}

      <div
        className={cn(
          "mt-4 grid gap-x-8 border-t border-rule",
          columns === 2 ? "sm:grid-cols-2" : "",
        )}
      >
        {options.map((option) => {
          const checked = selected.includes(option.value);
          return (
            <label
              key={option.value}
              className="group flex cursor-pointer items-start gap-3.5 border-b border-rule py-3.5"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onToggle(option.value)}
                className="peer sr-only"
              />
              <span
                aria-hidden="true"
                className={cn(
                  "mt-0.5 grid h-4 w-4 shrink-0 place-items-center border transition-colors duration-200",
                  checked ? "border-accent bg-accent" : "border-line-strong",
                  "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-signal-blue",
                )}
              >
                {checked && (
                  <span className="block h-1.5 w-1.5 bg-accent-ink" />
                )}
              </span>
              <span className="min-w-0">
                <span className="type-body block leading-snug">{option.label}</span>
                {option.note && (
                  <span className="type-small mt-0.5 block text-mute">{option.note}</span>
                )}
              </span>
            </label>
          );
        })}
      </div>

      {error && (
        <p id={errorId} role="alert" className="type-small mt-3 text-signal-red-text">
          {error}
        </p>
      )}
    </fieldset>
  );
}
