import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types";

interface BadgeProps {
  variant: ProjectStatus | "neutral";
  className?: string;
  children?: React.ReactNode;
}

const variantClasses = {
  Live:    "bg-live-bg text-live-text",
  Concept: "bg-concept-bg text-concept-text",
  neutral: "bg-surface text-muted border border-[var(--color-border)]",
};

/** Dot indicator for Live/Concept badges */
const dotClasses = {
  Live:    "bg-green-500",
  Concept: "bg-slate-400",
  neutral: "bg-muted",
};

export function Badge({ variant, className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5",
        "font-mono text-[10px] tracking-widest uppercase",
        "px-2.5 py-1 rounded-full",
        "border border-[var(--color-border)]",
        variantClasses[variant],
        className
      )}
    >
      <span
        className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", dotClasses[variant])}
        aria-hidden="true"
      />
      {children ?? variant}
    </span>
  );
}
