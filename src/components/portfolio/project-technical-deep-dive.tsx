import * as React from "react";
import {
  Workflow,
  Cpu,
  ShieldCheck,
  Zap,
  GitBranch,
  Network,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import type { TechnicalImplementation } from "@/types";

interface ProjectTechnicalDeepDiveProps {
  implementation?: TechnicalImplementation;
}

export function ProjectTechnicalDeepDive({
  implementation,
}: ProjectTechnicalDeepDiveProps) {
  if (!implementation) {
    return null;
  }

  const {
    architecture,
    workflows,
    communication,
    technicalDecisions,
    performanceSecurity,
  } = implementation;

  return (
    <section aria-labelledby="heading-deep-dive" className="pt-12 border-t border-[var(--color-border)]">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-mono text-xs text-accent font-semibold">05</span>
        <h2
          id="heading-deep-dive"
          className="font-mono text-xs uppercase tracking-widest text-muted"
        >
          Technical Implementation
        </h2>
      </div>

      <p className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-2 leading-snug">
        Architecture, Workflows &amp; Decisions
      </p>
      <p className="text-sm text-muted mb-8 max-w-2xl">
        Engineering breakdown covering data pathways, architectural trade-offs, and production optimizations.
      </p>

      <div className="space-y-6">
        {/* Overall System Architecture */}
        {architecture && (
          <Card className="p-6 bg-surface border border-[var(--color-border)]">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <Cpu className="w-4 h-4" />
              </span>
              <h3 className="text-sm font-bold text-ink uppercase tracking-wide font-mono">
                System Architecture
              </h3>
            </div>
            <p className="text-sm text-muted leading-relaxed">{architecture}</p>
          </Card>
        )}

        {/* Frontend / Backend Communication */}
        {communication && (
          <Card className="p-6 bg-surface border border-[var(--color-border)]">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <Network className="w-4 h-4" />
              </span>
              <h3 className="text-sm font-bold text-ink uppercase tracking-wide font-mono">
                Data Communication &amp; State Orchestration
              </h3>
            </div>
            <p className="text-sm text-muted leading-relaxed">{communication}</p>
          </Card>
        )}

        {/* End-to-End User & Data Workflows */}
        {workflows && workflows.length > 0 && (
          <Card className="p-6 bg-surface border border-[var(--color-border)]">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <Workflow className="w-4 h-4" />
              </span>
              <h3 className="text-sm font-bold text-ink uppercase tracking-wide font-mono">
                Key Operational Workflows
              </h3>
            </div>

            <div className="space-y-3">
              {workflows.map((flow, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-bg border border-[var(--color-border)]">
                  <span className="w-6 h-6 rounded-full bg-accent text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-ink leading-relaxed pt-0.5">
                    {flow}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* 2-Column Grid: Technical Decisions + Performance & Security */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Important Technical Decisions */}
          {technicalDecisions && technicalDecisions.length > 0 && (
            <Card className="p-6 bg-surface border border-[var(--color-border)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <GitBranch className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm font-bold text-ink uppercase tracking-wide font-mono">
                    Architectural Decisions
                  </h3>
                </div>

                <ul className="space-y-3">
                  {technicalDecisions.map((decision, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted leading-relaxed">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          )}

          {/* Performance & Security Considerations */}
          {performanceSecurity && performanceSecurity.length > 0 && (
            <Card className="p-6 bg-surface border border-[var(--color-border)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm font-bold text-ink uppercase tracking-wide font-mono">
                    Performance &amp; Security
                  </h3>
                </div>

                <ul className="space-y-3">
                  {performanceSecurity.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted leading-relaxed">
                      <Zap className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
