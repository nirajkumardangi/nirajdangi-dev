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
  { label: "Doctors & Clinics", value: "Doctor" },
  { label: "Wedding Planners", value: "Wedding" },
  { label: "Artists", value: "Artist" },
  { label: "Event Organisers", value: "Event" },
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
    <div className="py-24 md:py-32 lg:py-36 bg-bg">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-2xl mb-12">
          <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted">
            INDEX · 09 PROJECTS &amp; PROTOTYPES
          </p>

          <h1 className="text-h1 font-bold text-ink tracking-tight text-balance">
            All projects, prototypes &amp;{" "}
            <span className="font-serif italic font-normal text-accent">
              tools.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted text-pretty">
            Filter by business vertical or explore open-source tools. Every site
            is designed for enquiries, mobile-first performance, and full code
            ownership.
          </p>
        </div>

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
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            >
              <Card
                spotlight
                className="h-full flex flex-col justify-between p-5 transition-all duration-300 group-hover:border-[rgba(10,10,20,0.2)] group-hover:shadow-md"
              >
                <div>
                  {/* Top Bar: Vertical + Status + Arrow */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Badge variant={project.status}>{project.status}</Badge>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                        {project.vertical}
                      </span>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  {/* Device Preview */}
                  <div className="relative w-full rounded-md overflow-hidden border border-[var(--color-border)] bg-[#FAFAF9] mb-4">
                    <div
                      className="relative w-full"
                      style={{ aspectRatio: "16/10" }}
                    >
                      <Image
                        src={project.images.desktop}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        className="object-cover object-top"
                        unoptimized={project.images.desktop.endsWith(".svg")}
                      />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h2 className="text-lg font-bold text-ink tracking-tight mb-1.5 group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-muted text-pretty leading-relaxed mb-4">
                    {project.tagline}
                  </p>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[var(--color-border)]">
                  {project.stack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[rgba(10,10,20,0.03)] text-[10px] font-mono text-muted/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </Link>
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
                  <Link
                    href={`/work/${exp.slug}`}
                    className="min-h-[44px] py-2 text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read case study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

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
