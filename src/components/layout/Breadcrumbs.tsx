import Link from "next/link";
import { cn } from "@/lib/cn";

export interface Crumb {
  readonly name: string;
  readonly path: string;
}

interface BreadcrumbsProps {
  /** Excludes Home, which is prepended automatically. */
  crumbs: readonly Crumb[];
  className?: string;
}

/** Visible breadcrumbs. Pages emit matching BreadcrumbList schema separately. */
export function Breadcrumbs({ crumbs, className }: BreadcrumbsProps) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...crumbs];

  return (
    <nav aria-label="Breadcrumb" className={cn(className)}>
      <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
        {all.map((crumb, i) => {
          const last = i === all.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2.5">
              {last ? (
                <span className="type-label text-mute" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.path} className="type-label link-rule text-mute">
                  {crumb.name}
                </Link>
              )}
              {!last && (
                <span aria-hidden="true" className="type-label text-line-strong">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
