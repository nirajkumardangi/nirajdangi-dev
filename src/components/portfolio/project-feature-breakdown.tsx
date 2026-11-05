import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { FeatureCategory } from "@/types";

interface ProjectFeatureBreakdownProps {
  categories?: FeatureCategory[];
  fallbackFeatures?: string[];
}

export function ProjectFeatureBreakdown({
  categories,
  fallbackFeatures,
}: ProjectFeatureBreakdownProps) {
  // If no structured categories, use fallbackFeatures if available
  const hasCategories = categories && categories.length > 0;
  const hasFallback = fallbackFeatures && fallbackFeatures.length > 0;

  if (!hasCategories && !hasFallback) {
    return null;
  }

  return (
    <section aria-labelledby="heading-features" className="pt-12 border-t border-[var(--color-border)]">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-mono text-xs text-accent font-semibold">03</span>
        <h2
          id="heading-features"
          className="font-mono text-xs uppercase tracking-widest text-muted"
        >
          Complete Feature Breakdown
        </h2>
      </div>

      <p className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-2 leading-snug">
        Implemented Functionality &amp; Workflows
      </p>
      <p className="text-sm text-muted mb-8 max-w-2xl">
        Every feature listed below represents verified, working code. Categorized by system tier and user workflow.
      </p>

      {hasCategories ? (
        <div className="space-y-6">
          {categories!.map((cat, idx) => (
            <Card key={idx} className="p-6 bg-surface border border-[var(--color-border)]">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[var(--color-border)]">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-md bg-accent/10 text-accent font-mono text-xs font-bold flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-ink">{cat.category}</h3>
                </div>
                {cat.badge && (
                  <span className="px-2.5 py-0.5 rounded-full bg-bg border border-[var(--color-border)] text-[10px] font-mono text-muted uppercase tracking-wider">
                    {cat.badge}
                  </span>
                )}
              </div>

              {cat.description && (
                <p className="text-xs text-muted mb-4 leading-relaxed">
                  {cat.description}
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-ink leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fallbackFeatures!.map((feat, i) => (
            <Card key={i} className="p-4 flex items-start gap-3 bg-surface border border-[var(--color-border)]">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-ink font-medium leading-relaxed">{feat}</p>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
