import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbCrumb {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbCrumb[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-1.5 text-xs font-mono text-muted", className)}
    >
      <Link
        href="/"
        className="hover:text-ink transition-colors inline-flex items-center gap-1 min-h-[32px]"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;

        return (
          <span key={idx} className="inline-flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-muted/50 shrink-0" />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-ink transition-colors min-h-[32px] inline-flex items-center"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-ink font-medium truncate max-w-[200px] sm:max-w-none">
                {item.name}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}

