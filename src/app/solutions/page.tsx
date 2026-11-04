import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { solutions, getPublishedSolutions } from "@/data/solutions";
import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Web & AI Solutions Architecture",
  description:
    "Explore 9 specialized web engineering and AI solutions by Niraj Kumar Dangi. Production Next.js, healthcare portals, e-commerce, and custom chatbots.",
  alternates: {
    canonical: `${siteConfig.url}/solutions`,
  },
  openGraph: {
    title: "Web & AI Solutions Architecture | niraj.online",
    description:
      "Precision web development and AI automation solutions. Scalable Next.js systems engineered for conversion and operational clarity.",
    url: `${siteConfig.url}/solutions`,
    type: "website",
  },
};

const hubFaqs = [
  {
    question: "How do you select which solutions are active for deployment?",
    answer:
      "We operate under a strict engineering rule: no solution page is published without verified proof (either a live client production platform or a public concept benchmark). Wave 1 solutions (Portfolio, Healthcare, E-commerce, AI, and Nonprofit) are active with proven delivery records. Wave 1.5 and Wave 2 solutions are available for bespoke contracting upon consultation.",
  },
  {
    question: "Can you combine features from multiple solution categories?",
    answer:
      "Yes. Many modern platforms combine multiple architectures—for example, a clinic website (Healthcare) that sells wellness packages (E-commerce) and uses an automated appointment bot (AI & Automation). Every project is scoped modularly to meet your exact operational requirements.",
  },
  {
    question: "What are your commercial payment terms and code ownership policy?",
    answer:
      "Every project follows transparent commercial terms: 50% advance to initiate architectural design and development, and the remaining 50% upon final acceptance before production deployment. You receive 100% full intellectual property and code repository ownership, with zero vendor lock-in.",
  },
  {
    question: "Do you work with international clients outside India?",
    answer:
      "Yes. We collaborate with founders, medical practices, and businesses across the United States, United Kingdom, Canada, Australia, and the Middle East. Contracts and milestones are billed transparently in USD via Stripe or wire transfer, with daily asynchronous updates and scheduled video syncs.",
  },
];

export default function SolutionsHubPage() {
  const publishedSolutions = getPublishedSolutions();
  const queuedSolutions = solutions.filter((s) => !s.isPublished);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <BreadcrumbJsonLd items={[{ name: "Solutions", url: "/solutions" }]} />

      <Container>
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[{ name: "Solutions", href: "/solutions" }]}
          className="mb-8"
        />

        {/* Hero Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <Eyebrow className="mb-4">ARCHITECTURAL DIRECTORY</Eyebrow>
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.15] mb-6">
            Nine specialized solutions.{" "}
            <span className="font-serif italic font-normal text-accent block sm:inline">
              Engineered for conversion.
            </span>
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed text-pretty">
            Instead of generic templates or bloated WordPress plugins, every
            solution is custom-coded with Next.js App Router, TypeScript, and
            clean API integrations. Browse our active production architectures
            below, or inquire directly for tailored custom roadmaps.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono text-muted">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-[var(--color-border)] text-ink">
              <ShieldCheck className="w-4 h-4 text-accent" />
              100% Code Ownership
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-[var(--color-border)] text-ink">
              <Sparkles className="w-4 h-4 text-[#25D366]" />
              Lighthouse 90+ Target
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-[var(--color-border)] text-ink">
              <Layers className="w-4 h-4 text-accent" />
              Zero Vendor Lock-In
            </span>
          </div>
        </div>

        {/* Wave 1: Active Production Architectures */}
        <div className="mb-20 md:mb-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[var(--color-border)] mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-1">
                WAVE 1 DEPLOYMENTS
              </span>
              <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink">
                Active Production Solutions
              </h2>
            </div>
            <p className="text-xs font-mono text-muted">
              5 Categories · Verified Proof &amp; Complete Deliverables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {publishedSolutions.map((sol) => {
              const waMessage = `Hi Niraj, I am exploring your ${sol.title} solution on niraj.online and would like to discuss a project.`;

              return (
                <div
                  key={sol.id}
                  className="flex flex-col justify-between p-6 sm:p-7 rounded-lg border border-[var(--color-border)] bg-surface hover:border-ink/20 transition-all group"
                >
                  <div className="flex flex-col gap-4">
                    {/* Top Meta */}
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-accent font-semibold">
                        Category #{sol.id}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#25D366]/10 text-[#25D366] font-medium text-[11px]">
                        ● Active Architecture
                      </span>
                    </div>

                    {/* Title & One-liner */}
                    <div>
                      <h3 className="font-sans text-xl font-bold text-ink group-hover:text-accent transition-colors leading-snug mb-2">
                        <Link href={`/solutions/${sol.slug}`}>
                          {sol.title}
                        </Link>
                      </h3>
                      <p className="text-muted text-sm leading-relaxed line-clamp-3">
                        {sol.tagline}
                      </p>
                    </div>

                    {/* Key Features preview */}
                    <div className="pt-3 border-t border-[var(--color-border)]/60">
                      <span className="text-[11px] font-mono uppercase text-muted tracking-wider block mb-2 font-semibold">
                        Core Architecture Scope:
                      </span>
                      <ul className="flex flex-col gap-1.5 text-xs text-ink/90 font-sans">
                        {sol.features[0]?.items.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Timeline & Pricing */}
                    <div className="pt-3 border-t border-[var(--color-border)]/60 flex items-center justify-between text-xs font-mono text-muted">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-muted/70" />
                        {sol.timeline}
                      </span>
                      <span className="font-medium text-ink">
                        {sol.priceRange.inr}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-[var(--color-border)] flex items-center gap-3">
                    <Link
                      href={`/solutions/${sol.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-md bg-ink text-surface font-mono text-xs font-medium hover:bg-accent hover:text-white transition-colors min-h-[44px]"
                    >
                      View Specs <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={whatsappLink(waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire about ${sol.title} on WhatsApp`}
                      className="inline-flex items-center justify-center p-2.5 rounded-md border border-[var(--color-border)] hover:border-ink/20 text-muted hover:text-ink transition-colors min-h-[44px] min-w-[44px]"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Wave 1.5 & Wave 2: Coming Soon / On Request */}
        <div className="mb-20 md:mb-28 p-8 md:p-12 rounded-xl border border-[var(--color-border)] bg-surface/50">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-muted font-semibold block mb-1">
              WAVE 1.5 &amp; WAVE 2 PIPELINE
            </span>
            <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink mb-3">
              Specialized Architectures on Request
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              In accordance with our strict engineering transparency rule, we
              do not publish public solution guides until live client proof or
              an open-source benchmark is verified. The categories below are
              actively engineered on request for bespoke projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {queuedSolutions.map((sol) => {
              const waCustomMsg = `Hi Niraj, I am interested in custom architecture for ${sol.title}. Can we discuss scope and timelines?`;

              return (
                <div
                  key={sol.id}
                  className="p-6 rounded-lg border border-[var(--color-border)] bg-bg flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-muted font-semibold">
                        Category #{sol.id}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-medium text-[11px]">
                        Bespoke On Request
                      </span>
                    </div>

                    <h3 className="font-sans text-lg font-bold text-ink">
                      {sol.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {sol.tagline}
                    </p>

                    <div className="text-xs font-mono text-muted/80 pt-2">
                      <span>Starting benchmark: {sol.priceRange.inr} ({sol.priceRange.usd})</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[var(--color-border)]/50 flex items-center justify-between">
                    <span className="text-xs font-mono text-muted">
                      Demo in Build Queue
                    </span>
                    <a
                      href={whatsappLink(waCustomMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink hover:text-accent transition-colors min-h-[44px]"
                    >
                      Inquire Custom Scope <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Localized & Pan-India Service Pages */}
        <div className="mb-20 md:mb-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[var(--color-border)] mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-1">
                REGIONAL &amp; GLOBAL FOCUS
              </span>
              <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink">
                Localized Web Development Hubs
              </h2>
            </div>
            <p className="text-xs font-mono text-muted">
              Ranchi · Jharkhand · India &amp; Worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/website-developer-ranchi"
              className="p-6 rounded-lg border border-[var(--color-border)] bg-surface hover:border-ink/20 transition-all flex flex-col justify-between group min-h-[220px]"
            >
              <div>
                <span className="text-xs font-mono text-accent font-semibold block mb-2">
                  LOCAL ANCHOR
                </span>
                <h3 className="font-sans text-lg font-bold text-ink group-hover:text-accent transition-colors mb-2">
                  Website Developer in Ranchi
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Tailored web engineering for clinics, retailers, and local
                  enterprises across Ranchi. Rapid in-person or remote consultation.
                </p>
              </div>
              <span className="mt-4 font-mono text-xs text-ink group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Explore Ranchi Services →
              </span>
            </Link>

            <Link
              href="/website-developer-jharkhand"
              className="p-6 rounded-lg border border-[var(--color-border)] bg-surface hover:border-ink/20 transition-all flex flex-col justify-between group min-h-[220px]"
            >
              <div>
                <span className="text-xs font-mono text-accent font-semibold block mb-2">
                  STATE ANCHOR
                </span>
                <h3 className="font-sans text-lg font-bold text-ink group-hover:text-accent transition-colors mb-2">
                  Web Developer in Jharkhand
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Serving businesses across Jamshedpur, Dhanbad, Bokaro, and
                  Deoghar with fast, production Next.js architecture.
                </p>
              </div>
              <span className="mt-4 font-mono text-xs text-ink group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Explore Jharkhand Services →
              </span>
            </Link>

            <Link
              href="/hire-developer-india"
              className="p-6 rounded-lg border border-[var(--color-border)] bg-surface hover:border-ink/20 transition-all flex flex-col justify-between group min-h-[220px]"
            >
              <div>
                <span className="text-xs font-mono text-accent font-semibold block mb-2">
                  GLOBAL &amp; PAN-INDIA
                </span>
                <h3 className="font-sans text-lg font-bold text-ink group-hover:text-accent transition-colors mb-2">
                  Hire Senior Developer (India &amp; Global)
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Senior freelance Next.js and TypeScript engineering for
                  international clients (USA, UK, Canada) at transparent rates.
                </p>
              </div>
              <span className="mt-4 font-mono text-xs text-ink group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Explore Global Hiring →
              </span>
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <Eyebrow className="mb-4">QUESTIONS &amp; ARCHITECTURE</Eyebrow>
          <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink mb-8">
            Frequently Asked Questions About Our Solutions
          </h2>
          <FaqAccordion items={hubFaqs} />
        </div>

        {/* Bottom Consultation CTA */}
        <div className="p-8 md:p-12 rounded-xl border border-[var(--color-border)] bg-surface text-center flex flex-col items-center gap-6">
          <Eyebrow>LET&apos;S TALK ARCHITECTURE</Eyebrow>
          <h2 className="font-sans text-2xl md:text-4xl font-bold tracking-tight text-ink max-w-xl">
            Have a project in mind that crosses categories?
          </h2>
          <p className="text-muted text-sm md:text-base max-w-lg leading-relaxed">
            Send a brief summary of what you are building. You will receive a
            direct response with realistic timeline and pricing within 2 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink("Hi Niraj, I am looking at your solutions directory and would like to discuss a custom architecture.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#25D366] text-white font-medium text-sm hover:bg-[#20ba59] transition-colors min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              Discuss on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-[var(--color-border)] bg-bg text-ink font-medium text-sm hover:border-ink/20 transition-colors min-h-[44px]"
            >
              Submit Project Details
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
