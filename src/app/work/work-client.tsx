"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowUpRight, Code2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { projects, experimentProjects } from "@/data/projects";

const VERTICAL_FILTERS: { label: string; value: string }[] = [
  { label: "All Work", value: "all" },
  { label: "Local Services", value: "Service" },
  { label: "Photography", value: "Photographer" },
  { label: "Food Relief / NGO", value: "Personal" },
  { label: "Doctors & Clinics", value: "Doctor" },
  { label: "Real Estate", value: "Real Estate" },
  { label: "E-Commerce", value: "E-commerce" },
  { label: "AI & RAG", value: "AI" },
  { label: "SaaS Platforms", value: "SaaS" },
];

export function WorkClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("vertical") || "all";

  const handleFilterChange = (val: string) => {
    if (val === "all") {
      router.push("/work", { scroll: false });
    } else {
      router.push(`/work?vertical=${val}`, { scroll: false });
    }
  };

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    return p.vertical.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div className="pb-24 md:pb-32 bg-bg">
      <Container>
        {/* URL-Synced Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {VERTICAL_FILTERS.map((f) => {
            const isSelected = activeFilter.toLowerCase() === f.value.toLowerCase();
            return (
              <button
                key={f.value}
                type="button"
                onClick={() => handleFilterChange(f.value)}
                className={`shrink-0 min-h-[44px] sm:min-h-0 sm:h-10 px-4 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 select-none flex items-center justify-center ${
                  isSelected
                    ? "bg-ink text-bg font-semibold shadow-xs"
                    : "bg-surface border border-[var(--color-border)] text-muted hover:text-ink hover:border-[var(--color-border-md)]"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Filtered Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {filteredProjects.map((project) => (
            <Card
              key={project.slug}
              spotlight
              className="h-full flex flex-col justify-between p-5 transition-all duration-300 hover:border-[rgba(10,10,20,0.2)] hover:shadow-md group"
            >
              <div>
                {/* Top Bar: Vertical + Status + Live Preview / Arrow */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Badge variant={project.status}>{project.status}</Badge>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      {project.vertical}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-accent/10 hover:bg-accent/20 text-accent font-medium text-xs transition-colors"
                        aria-label={`Open live preview of ${project.name || project.title}`}
                      >
                        <span>Live Preview</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    <Link
                      href={`/work/${project.slug}`}
                      className="w-7 h-7 rounded-full bg-[rgba(10,10,20,0.04)] dark:bg-white/10 flex items-center justify-center text-muted group-hover:text-ink transition-colors"
                      aria-label={`View case study of ${project.title}`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Device Preview */}
                <Link
                  href={`/work/${project.slug}`}
                  className="block relative w-full rounded-md overflow-hidden border border-[var(--color-border)] bg-[#FAFAF9] mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: "16/10" }}
                  >
                    <Image
                      src={project.images.desktop}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                      unoptimized={project.images.desktop.endsWith(".svg")}
                    />
                  </div>
                </Link>

                {/* Title & Tagline */}
                <h2 className="text-lg font-bold text-ink tracking-tight mb-1.5">
                  <Link
                    href={`/work/${project.slug}`}
                    className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    {project.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-muted text-pretty leading-relaxed mb-4">
                  {project.tagline}
                </p>
              </div>

              {/* Stack & Actions */}
              <div className="flex items-center justify-between gap-2 pt-3 border-t border-[var(--color-border)]">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.stack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[rgba(10,10,20,0.03)] text-[10px] font-mono text-muted/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/work/${project.slug}`}
                  className="text-xs font-semibold text-accent hover:underline shrink-0"
                >
                  Case Study →
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* "More Experiments & Open Source" Section */}
        <div className="pt-16 border-t border-[var(--color-border)]">
          <div className="flex flex-col gap-2 mb-8">
            <p className="font-mono text-[11px] tracking-widest uppercase text-muted">
              LAB &amp; OPEN SOURCE
            </p>
            <h2 className="text-2xl font-bold text-ink tracking-tight">
              More experiments &amp; technical tools
            </h2>
            <p className="text-sm text-muted max-w-prose">
              Component libraries, student initiatives, and exploratory
              prototypes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experimentProjects.map((exp) => (
              <Card key={exp.slug} className="p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant={exp.status}>{exp.status}</Badge>
                    <span className="font-mono text-[10px] uppercase text-muted">
                      {exp.vertical}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-ink mb-1.5">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed mb-4">
                    {exp.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border)]">
                  <div className="flex items-center gap-2.5">
                    <Link
                      href={`/work/${exp.slug}`}
                      className="min-h-[44px] py-2 text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read case study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    {exp.liveUrl && (
                      <a
                        href={exp.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-muted hover:text-ink underline inline-flex items-center gap-0.5"
                      >
                        <span>Live Site</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  {exp.repoUrl && (
                    <a
                      href={exp.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-muted hover:text-ink transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Code2 className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
