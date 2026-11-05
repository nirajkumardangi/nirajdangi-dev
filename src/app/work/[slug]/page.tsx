import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Code2,
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
import { DeviceMockupPreview } from "@/components/portfolio/device-mockup-preview";
import { ProjectOverviewSection } from "@/components/portfolio/project-overview-section";
import { ProjectGalleryLightbox } from "@/components/portfolio/project-gallery-lightbox";
import { ProjectFeatureBreakdown } from "@/components/portfolio/project-feature-breakdown";
import { ProjectTechStack } from "@/components/portfolio/project-tech-stack";
import { ProjectTechnicalDeepDive } from "@/components/portfolio/project-technical-deep-dive";

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

  const waEnquiryMessage = `Hi Niraj, I saw your ${project.name || project.title} showcase and would like to build something similar for my business.`;

  return (
    <article className="py-24 md:py-32 lg:py-36 bg-bg">
      <BreadcrumbJsonLd
        items={[
          { name: "Selected Work", url: "/work" },
          { name: project.name || project.title, url: `/work/${project.slug}` },
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
        <header className="flex flex-col gap-4 max-w-3xl mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={project.status}>{project.status}</Badge>
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              {project.vertical} · {project.timeline ?? "Custom Build"}
            </span>
            {project.supportsIframe && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Interactive Preview</span>
              </span>
            )}
          </div>

          <h1 className="text-h1 font-bold text-ink tracking-tight text-balance">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted text-pretty leading-relaxed">
            {project.tagline}
          </p>
        </header>

        {/* 1. LIVE WEBSITE PREVIEW (16:9 Desktop Monitor & Bezel-less Mobile) */}
        <DeviceMockupPreview
          title={project.name || project.title}
          liveUrl={project.liveUrl}
          supportsIframe={project.supportsIframe}
          iframeBlockedReason={project.iframeBlockedReason}
          desktopImage={project.images.desktop}
          mobileImage={project.images.mobile}
          role={project.role}
        />

        {/* 2-Column Editorial Grid: Left content flow + Right sticky summary sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Case Study Narrative & Sections */}
          <div className="lg:col-span-8 flex flex-col gap-14">
            {/* 01. Detailed Project Overview */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-accent font-semibold">01</span>
                <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
                  Project Overview &amp; Objectives
                </h2>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-6 leading-snug">
                Purpose, Problem &amp; Core Value Proposition
              </p>
              <ProjectOverviewSection
                description={project.description}
                overview={project.overview}
                fallbackProblem={project.problem}
                fallbackSolution={project.solution}
              />
            </div>

            {/* 02. Screenshots & Visual Showcase with Lightbox */}
            <ProjectGalleryLightbox
              projectTitle={project.name || project.title}
              items={project.gallery}
            />

            {/* 03. Complete Feature Breakdown */}
            <ProjectFeatureBreakdown
              categories={project.featureCategories}
              fallbackFeatures={project.features}
            />

            {/* 04. Technology Stack */}
            <ProjectTechStack
              techStack={project.techStack}
              fallbackStack={project.stack}
            />

            {/* 05. Technical Implementation (Deep Dive) */}
            <ProjectTechnicalDeepDive implementation={project.implementation} />

            {/* 06. Measurable Outcomes & Real Results */}
            <section aria-labelledby="heading-results" className="pt-12 border-t border-[var(--color-border)]">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-accent font-semibold">06</span>
                <h2
                  id="heading-results"
                  className="font-mono text-xs uppercase tracking-widest text-muted"
                >
                  Measurable Outcomes
                </h2>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-2 leading-snug">
                Real Operational Results
              </p>
              <p className="text-sm text-muted mb-8 max-w-2xl">
                Verified performance indicators and business impact. No inflated metrics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.results.map((res, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-surface border border-[var(--color-border)] flex flex-col justify-between gap-3 shadow-xs"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
                      Outcome 0{i + 1}
                    </span>
                    <p className="text-sm font-semibold text-ink leading-snug">
                      {res}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 07. "Want something like this?" Final Conversion Card */}
            <div className="mt-4 p-8 sm:p-10 rounded-2xl bg-surface border border-[var(--color-border)] shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex flex-col gap-2 max-w-md">
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase text-accent font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start a similar project</span>
                </div>
                <h3 className="text-2xl font-bold text-ink tracking-tight">
                  Want a high-converting website for your business?
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Let&apos;s talk about your customers, your goals, and what a good enquiry looks like. No obligation on the initial discovery call.
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
            <Card className="p-6 flex flex-col gap-6 bg-surface border border-[var(--color-border)]">
              {/* Status & Live Link */}
              <div className="flex items-center justify-between pb-5 border-b border-[var(--color-border)]">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase text-muted tracking-wider">
                    Deployment Status
                  </span>
                  <Badge variant={project.status}>{project.status}</Badge>
                </div>

                <div className="flex items-center gap-3">
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

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-ink hover:underline"
                    >
                      <span>Repository</span>
                      <Code2 className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
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

              {/* Live Iframe Status Badge */}
              <div className="flex flex-col gap-1 pb-5 border-b border-[var(--color-border)]">
                <span className="font-mono text-[10px] uppercase text-muted tracking-wider">
                  Interactive Preview
                </span>
                <p className="text-xs text-muted flex items-center gap-1.5">
                  {project.supportsIframe ? (
                    <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live Iframe Supported
                    </span>
                  ) : (
                    <span className="text-muted">
                      Ultra-HD Crisp Capture (16:9 Desktop / Mobile)
                    </span>
                  )}
                </p>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-col gap-2 pb-5 border-b border-[var(--color-border)]">
                <span className="font-mono text-[10px] uppercase text-muted tracking-wider">
                  Core Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-bg border border-[var(--color-border)] text-xs font-mono text-ink"
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
                <span>Discuss Similar Project</span>
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
            className="group p-5 rounded-xl border border-[var(--color-border)] bg-surface hover:border-[var(--color-border-md)] hover:shadow-md transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <ArrowLeft className="w-4 h-4 text-muted group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  Previous Project
                </span>
                <p className="text-sm font-bold text-ink group-hover:text-accent transition-colors">
                  {prevProject.name || prevProject.title}
                </p>
              </div>
            </div>
            <Badge variant={prevProject.status}>{prevProject.status}</Badge>
          </Link>

          {/* Next Project */}
          <Link
            href={`/work/${nextProject.slug}`}
            className="group p-5 rounded-xl border border-[var(--color-border)] bg-surface hover:border-[var(--color-border-md)] hover:shadow-md transition-all flex items-center justify-between text-right"
          >
            <Badge variant={nextProject.status}>{nextProject.status}</Badge>
            <div className="flex items-center gap-3">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  Next Project
                </span>
                <p className="text-sm font-bold text-ink group-hover:text-accent transition-colors">
                  {nextProject.name || nextProject.title}
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
