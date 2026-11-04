import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  Code2,
  MessageCircle,
  AlertCircle,
  Layers,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import {
  getSolutionBySlug,
  getPublishedSolutions,
} from "@/data/solutions";
import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/utils";

interface SolutionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const published = getPublishedSolutions();
  return published.map((sol) => ({
    slug: sol.slug,
  }));
}

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution || !solution.isPublished) {
    return {
      title: "Solution In Build Queue | niraj.online",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const metaTitle = `${solution.title} | niraj.online`;
  const metaDescription = `${solution.answerBox.slice(0, 150)}...`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [solution.primaryKeyword, ...solution.secondaryKeywords],
    alternates: {
      canonical: `${siteConfig.url}/solutions/${solution.slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${siteConfig.url}/solutions/${solution.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  };
}

export default async function SolutionDetailPage({
  params,
}: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution || !solution.isPublished) {
    notFound();
  }

  const waEnquiryMsg = `Hi Niraj, I am exploring your ${solution.title} architecture on niraj.online and would like to discuss scoping a project.`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    serviceType: solution.shortTitle,
    description: solution.answerBox,
    provider: {
      "@type": "Person",
      name: siteConfig.owner.name,
      url: siteConfig.url,
      sameAs: [siteConfig.owner.github, siteConfig.owner.linkedin],
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Ranchi, Jharkhand",
      },
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "Country",
        name: "Worldwide (Remote)",
      },
    ],
    termsOfService: `${siteConfig.url}/terms`,
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: "Solutions", url: "/solutions" },
          { name: solution.title, url: `/solutions/${solution.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Container>
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: "Solutions", href: "/solutions" },
            { name: solution.shortTitle },
          ]}
          className="mb-8"
        />

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-ink transition-colors min-h-[36px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to All Solutions
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Eyebrow>CATEGORY #{solution.id} · WAVE 1 PRODUCTION</Eyebrow>
            <span className="px-2.5 py-0.5 rounded-full bg-[#25D366]/10 text-[#25D366] font-mono text-[11px] font-medium">
              ● Active Architecture
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.15] mb-6">
            {solution.title}
          </h1>

          <p className="text-muted text-lg md:text-xl leading-relaxed text-pretty mb-8">
            {solution.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-[var(--color-border)] text-ink">
              <Clock className="w-3.5 h-3.5 text-accent" />
              Delivery: {solution.timeline}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-[var(--color-border)] text-ink">
              <Layers className="w-3.5 h-3.5 text-accent" />
              Benchmark: {solution.priceRange.inr} ({solution.priceRange.usd})
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-[var(--color-border)] text-ink">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
              50% Advance &amp; Code Ownership
            </span>
          </div>
        </div>

        {/* GEO & AI Overview TL;DR Answer Box */}
        <div className="mb-14 p-6 sm:p-7 rounded-xl border border-accent/30 bg-accent/[0.03] dark:bg-accent/[0.06] relative">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-accent">
              Direct Verdict &amp; Summary (TL;DR)
            </span>
          </div>
          <p className="text-ink font-sans text-base sm:text-lg leading-relaxed text-pretty">
            {solution.answerBox}
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Core Content */}
          <div className="lg:col-span-8 flex flex-col gap-14 md:gap-20">
            {/* Section 1: Who This Is For */}
            <section aria-labelledby="who-this-is-for">
              <Eyebrow className="mb-3">AUDIENCE &amp; FIT</Eyebrow>
              <h2
                id="who-this-is-for"
                className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink mb-4"
              >
                Who This Architecture Is Engineered For
              </h2>
              <p className="text-muted text-base leading-relaxed mb-6">
                {solution.targetAudience.headline}
              </p>
              <ul className="flex flex-col gap-3">
                {solution.targetAudience.examples.map((example, idx) => (
                  <li
                    key={idx}
                    className="p-4 rounded-md border border-[var(--color-border)] bg-surface text-ink text-sm sm:text-base leading-relaxed flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 2: What You Get (Deliverables) */}
            <section aria-labelledby="what-you-get">
              <Eyebrow className="mb-3">DELIVERABLES BREAKDOWN</Eyebrow>
              <h2
                id="what-you-get"
                className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink mb-6"
              >
                Production Scope &amp; Deliverables
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {solution.features.map((group, gIdx) => (
                  <div
                    key={gIdx}
                    className="p-6 rounded-lg border border-[var(--color-border)] bg-surface flex flex-col gap-4"
                  >
                    <div className="flex items-center gap-2 pb-3 border-b border-[var(--color-border)]">
                      <Code2 className="w-4 h-4 text-accent" />
                      <h3 className="font-sans text-base font-bold text-ink">
                        {group.group}
                      </h3>
                    </div>
                    <ul className="flex flex-col gap-2.5 text-sm text-muted">
                      {group.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-ink/90 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Technical Stack & Integration */}
            <section aria-labelledby="tech-stack">
              <Eyebrow className="mb-3">UNDER THE HOOD</Eyebrow>
              <h2
                id="tech-stack"
                className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink mb-6"
              >
                Technical Stack &amp; Infrastructure
              </h2>

              <div className="p-6 sm:p-8 rounded-lg border border-[var(--color-border)] bg-surface flex flex-col gap-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted block mb-3 font-semibold">
                    Core Engineering Framework:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {solution.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded bg-bg border border-[var(--color-border)] font-mono text-xs text-ink"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted block mb-3 font-semibold">
                    Third-Party APIs &amp; Gateway Integrations:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {solution.integrations.map((integ, iIdx) => (
                      <span
                        key={iIdx}
                        className="px-3 py-1 rounded bg-bg border border-[var(--color-border)] font-mono text-xs text-ink"
                      >
                        {integ}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Verified Proof Block */}
            <section aria-labelledby="verified-proof">
              <Eyebrow className="mb-3">EVIDENCE &amp; PROOF</Eyebrow>
              <h2
                id="verified-proof"
                className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink mb-6"
              >
                Demonstrated Proof of Capability
              </h2>

              <div className="p-6 sm:p-8 rounded-lg border border-[var(--color-border)] bg-surface">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-xl font-bold text-ink">
                      {solution.proof.name}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-mono text-[11px] font-medium ${
                        solution.proof.status === "Live"
                          ? "bg-[#25D366]/10 text-[#25D366]"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {solution.proof.status === "Live"
                        ? "● Live Production"
                        : "◈ Concept Demo"}
                    </span>
                  </div>

                  {solution.proof.slug && (
                    <Link
                      href={`/work/${solution.proof.slug}`}
                      className="font-mono text-xs text-accent hover:underline inline-flex items-center gap-1 min-h-[36px]"
                    >
                      Read Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>

                <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                  {solution.proof.description}
                </p>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted block mb-2 font-semibold">
                    Features Verified in Production / Demo:
                  </span>
                  <ul className="flex flex-col gap-2 text-sm text-ink/90">
                    {solution.proof.featuresDemonstrated.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5: Compliance & Guardrails */}
            <section aria-labelledby="compliance-guardrails">
              <Eyebrow className="mb-3">DATA PRIVACY &amp; STANDARDS</Eyebrow>
              <h2
                id="compliance-guardrails"
                className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink mb-4"
              >
                Compliance &amp; Engineering Guardrails
              </h2>

              <div className="p-5 sm:p-6 rounded-lg border border-[var(--color-border)] bg-surface flex items-start gap-3.5">
                <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-muted leading-relaxed">
                  <p className="font-medium text-ink mb-1">
                    Regulatory &amp; Architectural Notice:
                  </p>
                  <p>{solution.complianceNotes}</p>
                </div>
              </div>
            </section>

            {/* Section 6: FAQs */}
            <section aria-labelledby="faqs-heading">
              <Eyebrow className="mb-3">DIRECT ANSWERS</Eyebrow>
              <h2
                id="faqs-heading"
                className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink mb-6"
              >
                Frequently Asked Questions
              </h2>
              <FaqAccordion items={solution.faqs} />
            </section>
          </div>

          {/* Right Column: Sticky Sidebar with Pricing & WhatsApp CTA */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 flex flex-col gap-6">
              {/* Pricing & Commercial Card */}
              <div className="p-6 rounded-xl border border-[var(--color-border)] bg-surface flex flex-col gap-5">
                <div className="pb-4 border-b border-[var(--color-border)]">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-1">
                    TRANSPARENT PRICING
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans text-2xl sm:text-3xl font-bold text-ink">
                      {solution.priceRange.inr}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted block mt-1">
                    International: {solution.priceRange.usd}
                  </span>
                </div>

                <div className="flex flex-col gap-3 text-xs font-mono text-muted">
                  <div className="flex items-center justify-between">
                    <span>Typical Timeline:</span>
                    <span className="font-medium text-ink">
                      {solution.timeline}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Payment Terms:</span>
                    <span className="font-medium text-ink">50% Advance</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Code Ownership:</span>
                    <span className="font-medium text-[#25D366]">100% Client Owned</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Post-Launch Warranty:</span>
                    <span className="font-medium text-ink">30 Days Included</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)] flex flex-col gap-3">
                  <a
                    href={whatsappLink(waEnquiryMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-[#25D366] text-white font-medium text-sm hover:bg-[#20ba59] transition-colors min-h-[44px]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enquire on WhatsApp
                  </a>

                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md border border-[var(--color-border)] hover:border-ink/20 bg-bg text-ink font-medium text-sm transition-colors min-h-[44px]"
                  >
                    Submit Project Enquiry
                  </Link>
                </div>
              </div>

              {/* Response Time & Location Card */}
              <div className="p-5 rounded-lg border border-[var(--color-border)] bg-surface text-xs font-mono text-muted flex flex-col gap-2">
                <span className="font-semibold text-ink">
                  Direct Engineer Collaboration:
                </span>
                <p className="leading-relaxed">
                  You work directly with Niraj Kumar Dangi. No intermediate
                  account managers or junior outsourcers.
                </p>
                <div className="pt-2 border-t border-[var(--color-border)] text-[11px] text-muted/80">
                  <span>Based in Ranchi (IST UTC+5:30) · Response &lt; 2 hrs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
