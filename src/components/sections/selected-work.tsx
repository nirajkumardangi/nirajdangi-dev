"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-label="Selected work"
      className="py-20 md:py-28 lg:py-36 border-b border-[var(--color-border)] bg-bg"
    >
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-16">
          <SectionHeading
            eyebrow="SELECTED PROJECTS"
            heading={
              <>
                Built for businesses that need{" "}
                <span className="font-serif italic font-normal text-accent">
                  enquiries
                </span>{" "}
                most.
              </>
            }
            sub="Every project solves a real operational or conversion problem. Live client products are marked Live; experimental concepts are badged Concept."
          />

          <Button
            variant="secondary"
            href="/work"
            className="self-start sm:self-auto shrink-0"
          >
            <span>All projects (9)</span>
            <ArrowUpRight className="w-4 h-4 text-muted" />
          </Button>
        </div>

        {/* Bento Grid: Varied layout on desktop (2-col & 1-col cards), 1-col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {featuredProjects.map((project, idx) => {
            // Bento sizing: 1st and 6th span 7 columns, others span 5 or 6
            const isWide = idx === 0 || idx === 3;
            const colSpan = isWide ? "lg:col-span-7" : "lg:col-span-5";

            return (
              <div key={project.slug} className={`col-span-1 md:col-span-1 ${colSpan}`}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
                >
                  <Card
                    spotlight
                    className="h-full flex flex-col justify-between p-5 sm:p-6 transition-all duration-300 group-hover:border-[var(--color-border-md)] group-hover:shadow-md"
                  >
                    <div>
                      {/* Top Bar: Vertical tag + Status Badge + Arrow */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <Badge variant={project.status}>
                            {project.status}
                          </Badge>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                            {project.vertical}
                          </span>
                        </div>

                        <div className="w-8 h-8 rounded-full bg-[rgba(10,10,20,0.04)] dark:bg-white/10 flex items-center justify-center text-muted group-hover:text-ink group-hover:bg-accent/10 transition-colors">
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>

                      {/* Mockup Frame with consistent 16:10 ratio & zero CLS */}
                      <div className="relative w-full rounded-md overflow-hidden border border-[var(--color-border)] bg-bg mb-5 shadow-xs">
                        <div
                          className="relative w-full"
                          style={{ aspectRatio: "16/10" }}
                        >
                          <Image
                            src={project.images.desktop}
                            alt={`${project.title} screenshot preview`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            className="object-cover object-top transition-transform duration-500 ease-out-expo group-hover:scale-[1.01]"
                            unoptimized={project.images.desktop.endsWith(".svg")}
                          />
                        </div>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-muted text-pretty leading-relaxed mb-4">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Footer: Tech Stack Chips */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-[var(--color-border)]">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-[rgba(10,10,20,0.03)] text-[11px] font-mono text-muted/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

