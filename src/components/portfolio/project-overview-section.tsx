import * as React from "react";
import { Target, AlertCircle, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { ProjectOverview } from "@/types";

interface ProjectOverviewSectionProps {
  description?: string;
  overview?: ProjectOverview;
  fallbackProblem?: string;
  fallbackSolution?: string;
}

export function ProjectOverviewSection({
  description,
  overview,
  fallbackProblem,
  fallbackSolution,
}: ProjectOverviewSectionProps) {
  const purpose = overview?.purpose || fallbackSolution;
  const problem = overview?.problem || fallbackProblem;
  const targetAudience = overview?.targetAudience;
  const highlights = overview?.highlights;

  return (
    <section aria-labelledby="heading-overview" className="flex flex-col gap-8">
      {/* Detailed Narrative */}
      {description && (
        <div className="text-base sm:text-lg text-muted text-pretty leading-relaxed">
          <p>{description}</p>
        </div>
      )}

      {/* Structured 3-Card Grid: Purpose / Problem / Audience */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* 1. Purpose */}
        {purpose && (
          <Card className="p-5 bg-surface border border-[var(--color-border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Target className="w-4 h-4" />
                </span>
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
                  Purpose &amp; Objective
                </h3>
              </div>
              <p className="text-sm text-ink leading-relaxed font-medium">
                {purpose}
              </p>
            </div>
          </Card>
        )}

        {/* 2. The Problem */}
        {problem && (
          <Card className="p-5 bg-surface border border-[var(--color-border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <AlertCircle className="w-4 h-4" />
                </span>
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
                  Problem Solved
                </h3>
              </div>
              <p className="text-sm text-ink leading-relaxed font-medium">
                {problem}
              </p>
            </div>
          </Card>
        )}

        {/* 3. Target Audience */}
        {targetAudience ? (
          <Card className="p-5 bg-surface border border-[var(--color-border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Users className="w-4 h-4" />
                </span>
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
                  Target Audience
                </h3>
              </div>
              <p className="text-sm text-ink leading-relaxed font-medium">
                {targetAudience}
              </p>
            </div>
          </Card>
        ) : null}
      </div>

      {/* Key Highlights Pill Box */}
      {highlights && highlights.length > 0 && (
        <Card className="p-6 bg-surface border border-[var(--color-border)]">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <h3 className="font-mono text-xs uppercase tracking-wider text-ink font-semibold">
              Key Engineering Highlights
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-ink leading-relaxed">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </Card>
      )}
    </section>
  );
}
