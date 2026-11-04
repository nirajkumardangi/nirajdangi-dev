import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Code2,
  CheckCircle2,
  MessageCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { projects, getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study | niraj.`,
    description: project.tagline,
    alternates: {
      canonical: `${siteConfig.url}/work/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Niraj Kumar Dangi`,
      description: project.tagline,
      url: `${siteConfig.url}/work/${slug}`,
      images: [{ url: `/work/${slug}/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study`,
      description: project.tagline,
      images: [`/work/${slug}/opengraph-image`],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Prev / Next Project Logic
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const waEnquiryMessage = `Hi Niraj, I saw your ${project.title} case study and would like to build something similar for my business.`;

  return (
    <article className="py-24 md:py-32 lg:py-36 bg-bg">
      <BreadcrumbJsonLd
        items={[
          { name: "Selected Work", url: "/work" },
          { name: project.title, url: `/work/${project.slug}` },
        ]}
      />
      <Container>
        {/* Top Back Navigation */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted hover:text-ink transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="flex flex-col gap-4 max-w-3xl mb-12">
          <div className="flex items-center gap-3">
            <Badge variant={project.status}>{project.status}</Badge>
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              {project.vertical} · {project.timeline ?? "Custom Build"}
            </span>
          </div>

          <h1 className="text-h1 font-bold text-ink tracking-tight text-balance">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted text-pretty leading-relaxed">
            {project.tagline}
          </p>
        </header>

        {/* Large Primary Device Frame Visual */}
        <div className="rounded-lg overflow-hidden border border-[var(--color-border-md)] shadow-xl bg-surface mb-16">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)] bg-surface">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" aria-hidden="true" />
              <div className="ml-2 px-3 py-0.5 rounded bg-bg border border-[var(--color-border)] text-[11px] font-mono text-muted truncate max-w-xs">
                {project.liveUrl ?? `https://demo.niraj.online/${project.slug}`}
              </div>
            </div>

            <span className="font-mono text-[11px] text-muted uppercase">
              {project.role}
            </span>
          </div>

          <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
            <Image
              src={project.images.desktop}
              alt={`${project.title} visual overview`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-top select-none"
              unoptimized={project.images.desktop.endsWith(".svg")}
            />
          </div>
        </div>

        {/* 2-Column Editorial Grid: Left content flow + Right sticky summary sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Case Study Narrative */}
          <div className="lg:col-span-8 flex flex-col gap-14">
            {/* 1. The Problem */}
            <section aria-labelledby="heading-problem">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-accent font-semibold">01</span>
                <h2
                  id="heading-problem"
                  className="font-mono text-xs uppercase tracking-widest text-muted"
                >
                  The Friction &amp; Problem
                </h2>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-4 leading-snug">
                Why existing methods failed to convert enquiries.
              </p>
              <div className="text-base sm:text-lg text-muted text-pretty leading-relaxed space-y-4">
                <p>{project.problem}</p>
              </div>
            </section>

            {/* 2. The Solution & Architecture */}
            <section aria-labelledby="heading-solution" className="pt-8 border-t border-[var(--color-border)]">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-accent font-semibold">02</span>
                <h2
                  id="heading-solution"
                  className="font-mono text-xs uppercase tracking-widest text-muted"
                >
                  The Solution &amp; Engineering
                </h2>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-4 leading-snug">
                Eliminating steps between interest and consultation.
              </p>
              <div className="text-base sm:text-lg text-muted text-pretty leading-relaxed space-y-4">
                <p>{project.solution}</p>
              </div>
            </section>

            {/* 3. Key Operational Features */}
            <section aria-labelledby="heading-features" className="pt-8 border-t border-[var(--color-border)]">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-accent font-semibold">03</span>
                <h2
                  id="heading-features"
                  className="font-mono text-xs uppercase tracking-widest text-muted"
                >
                  Key Architectural Features
                </h2>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-6 leading-snug">
                Engineered for speed, trust, and simplicity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat, i) => (
                  <Card key={i} className="p-5 flex flex-col justify-between">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      </span>
                      <p className="text-sm text-ink font-medium leading-relaxed">
                        {feat}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* 4. Results & Outcomes (Strictly Real) */}
            <section aria-labelledby="heading-results" className="pt-8 border-t border-[var(--color-border)]">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-accent font-semibold">04</span>
                <h2
                  id="heading-results"
                  className="font-mono text-xs uppercase tracking-widest text-muted"
                >
                  Measurable Outcomes
                </h2>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-6 leading-snug">
                Real operational results. No invented metrics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.results.map((res, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-surface border border-[var(--color-border)] flex flex-col justify-between gap-2 shadow-xs"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      Outcome 0{i + 1}
                    </span>
                    <p className="text-sm font-semibold text-ink leading-snug">
                      {res}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. "Want something like this?" Final Conversion Card */}
            <div className="mt-8 p-8 sm:p-10 rounded-2xl bg-surface border border-[var(--color-border)] shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex flex-col gap-2 max-w-md">
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase text-accent font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start a similar project</span>
                </div>
                <h3 className="text-2xl font-bold text-ink tracking-tight">
                  Want something like this for your business?
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Let&apos;s talk about your business, your customers, and what a
                  good enquiry looks like. No commitment on the first chat.
                </p>
              </div>

              <Button
                variant="whatsapp"
                size="lg"
                href={whatsappLink(waEnquiryMessage)}
                className="shrink-0 justify-center shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Niraj</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Sticky Summary Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6">
            <Card className="p-6 flex flex-col gap-6">
              {/* Status & Live Link */}
              <div className="flex items-center justify-between pb-5 border-b border-[var(--color-border)]">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase text-muted tracking-wider">
                    Deployment Status
                  </span>
                  <Badge variant={project.status}>{project.status}</Badge>
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.repoUrl && !project.liveUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink hover:underline"
                  >
                    <span>View Repository</span>
                    <Code2 className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Role & Scope */}
              <div className="flex flex-col gap-1 pb-5 border-b border-[var(--color-border)]">
                <span className="font-mono text-[10px] uppercase text-muted tracking-wider">
                  Role &amp; Responsibilities
                </span>
                <p className="text-sm font-semibold text-ink">{project.role}</p>
              </div>

              {/* Timeline */}
              {project.timeline && (
                <div className="flex flex-col gap-1 pb-5 border-b border-[var(--color-border)]">
                  <span className="font-mono text-[10px] uppercase text-muted tracking-wider">
                    Build Timeline
                  </span>
                  <p className="text-sm font-medium text-ink flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-muted" />
                    <span>{project.timeline}</span>
                  </p>
                </div>
              )}

              {/* Tech Stack */}
              <div className="flex flex-col gap-2 pb-5 border-b border-[var(--color-border)]">
                <span className="font-mono text-[10px] uppercase text-muted tracking-wider">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[rgba(10,10,20,0.04)] border border-[var(--color-border)] text-xs font-mono text-ink"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick WhatsApp Action inside sidebar */}
              <Button
                variant="whatsapp"
                size="md"
                href={whatsappLink(waEnquiryMessage)}
                className="w-full justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss {project.vertical} Site</span>
              </Button>
            </Card>
          </aside>
        </div>

        {/* Bottom Adjacent Projects Navigation */}
        <nav
          aria-label="More projects navigation"
          className="mt-20 pt-12 border-t border-[var(--color-border)] grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Previous Project */}
          <Link
            href={`/work/${prevProject.slug}`}
            className="group p-5 rounded-lg border border-[var(--color-border)] bg-surface hover:border-[rgba(10,10,20,0.2)] transition-all flex items-center justify-between shadow-xs"
          >
            <div className="flex items-center gap-3">
              <ArrowLeft className="w-4 h-4 text-muted group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  Previous Project
                </span>
                <p className="text-sm font-bold text-ink group-hover:text-accent transition-colors">
                  {prevProject.title}
                </p>
              </div>
            </div>
            <Badge variant={prevProject.status}>{prevProject.status}</Badge>
          </Link>

          {/* Next Project */}
          <Link
            href={`/work/${nextProject.slug}`}
            className="group p-5 rounded-lg border border-[var(--color-border)] bg-surface hover:border-[rgba(10,10,20,0.2)] transition-all flex items-center justify-between text-right shadow-xs"
          >
            <Badge variant={nextProject.status}>{nextProject.status}</Badge>
            <div className="flex items-center gap-3">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  Next Project
                </span>
                <p className="text-sm font-bold text-ink group-hover:text-accent transition-colors">
                  {nextProject.title}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </nav>
      </Container>
    </article>
  );
}
