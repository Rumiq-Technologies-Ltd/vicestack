import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface DataRowProps {
  label: ReactNode;
  value?: ReactNode;
  /** Rendered small and muted beneath the label. */
  note?: ReactNode;
  className?: string;
  /** Marks the row as the active one — used by the stack rail and lists. */
  active?: boolean;
}

/**
 * label ————————————————— value, on a hairline.
 * The workhorse row for service specs, stack layers and audit checklists.
 */
export function DataRow({ label, value, note, className, active }: DataRowProps) {
  return (
    <div
      className={cn(
        "group flex items-baseline gap-5 border-t border-rule py-4",
        active && "text-accent",
        className,
      )}
    >
      <div className="min-w-0 flex-1">
        <span className="type-body block">{label}</span>
        {note && <span className="type-small mt-1 block text-mute">{note}</span>}
      </div>
      {value !== undefined && (
        <span className="type-label shrink-0 text-mute">{value}</span>
      )}
    </div>
  );
}

interface DataListProps {
  items: readonly string[];
  className?: string;
  /** Prefix each item with its index. */
  numbered?: boolean;
}

export function DataList({ items, className, numbered }: DataListProps) {
  return (
    <ul className={cn("border-b border-rule", className)}>
      {items.map((item, i) => (
        <li key={item} className="flex items-baseline gap-5 border-t border-rule py-3.5">
          {numbered && (
            <span className="type-label w-6 shrink-0 text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
          )}
          <span className="type-body">{item}</span>
        </li>
      ))}
    </ul>
  );
}
