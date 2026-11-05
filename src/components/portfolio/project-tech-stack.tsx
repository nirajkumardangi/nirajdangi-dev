import * as React from "react";
import {
  Layout,
  Server,
  Database,
  KeyRound,
  Network,
  Cloud,
  Wrench,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import type { TechStackGrouped } from "@/types";

interface ProjectTechStackProps {
  techStack?: TechStackGrouped;
  fallbackStack?: string[];
}

export function ProjectTechStack({
  techStack,
  fallbackStack,
}: ProjectTechStackProps) {
  // If structured techStack is provided, map non-empty groups
  const groups: {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    items?: string[];
  }[] = techStack
    ? [
        { title: "Frontend & UI", icon: Layout, items: techStack.frontend },
        { title: "Backend & APIs", icon: Server, items: techStack.backend },
        { title: "Database & Storage", icon: Database, items: techStack.database },
        { title: "Auth & Security", icon: KeyRound, items: techStack.auth },
        { title: "APIs & Integrations", icon: Network, items: techStack.integrations },
        { title: "Deployment & Infra", icon: Cloud, items: techStack.deployment },
        { title: "Engineering Tools", icon: Wrench, items: techStack.tools },
      ].filter((g) => g.items && g.items.length > 0)
    : [];

  const hasGroups = groups.length > 0;
  const hasFallback = fallbackStack && fallbackStack.length > 0;

  if (!hasGroups && !hasFallback) {
    return null;
  }

  return (
    <section aria-labelledby="heading-tech-stack" className="pt-12 border-t border-[var(--color-border)]">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-mono text-xs text-accent font-semibold">04</span>
        <h2
          id="heading-tech-stack"
          className="font-mono text-xs uppercase tracking-widest text-muted"
        >
          Technology Stack
        </h2>
      </div>

      <p className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-2 leading-snug">
        Architectural Tools &amp; Libraries
      </p>
      <p className="text-sm text-muted mb-8 max-w-2xl">
        Technologies selected for performance, reliability, and maintainability.
      </p>

      {hasGroups ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((grp, idx) => {
            const Icon = grp.icon;
            return (
              <Card
                key={idx}
                className="p-5 bg-surface border border-[var(--color-border)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-ink">
                      {grp.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {grp.items!.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-bg border border-[var(--color-border)] text-xs font-mono text-ink font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {fallbackStack!.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1.5 rounded-lg bg-surface border border-[var(--color-border)] text-xs font-mono text-ink font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
