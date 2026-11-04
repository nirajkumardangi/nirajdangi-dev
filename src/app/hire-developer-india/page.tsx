import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  Sparkles,
  Globe2,
  ShieldCheck,
  MessageCircle,
  Zap,
  Terminal,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hire Next.js Developer India",
  description:
    "Hire senior Next.js and TypeScript developer in India. Clean architecture, US/EU timezone overlap, transparent USD pricing from $300. Full code ownership.",
  keywords: [
    "hire nextjs developer india",
    "freelance web developer india",
    "remote react developer india",
    "outsource web development to india",
    "hire full stack developer india",
  ],
  alternates: {
    canonical: `${siteConfig.url}/hire-developer-india`,
  },
  openGraph: {
    title: "Hire Freelance Next.js Developer in India | Niraj Kumar Dangi",
    description:
      "Senior full-stack Next.js and TypeScript engineering for international founders and teams. Transparent milestones, direct engineer communication, zero agency fluff.",
    url: `${siteConfig.url}/hire-developer-india`,
    type: "website",
  },
};

const internationalFaqs = [
  {
    question: "How do you handle time zone differences with US and European clients?",
    answer:
      "I am based in India (IST, UTC+5:30), which provides convenient overlap with European afternoons and US East Coast mornings. For asynchronous collaboration, I provide daily Loom video walkthroughs, GitHub pull request updates, and clear milestone summaries so work progresses without blocking your schedule.",
  },
  {
    question: "What are your payment terms and accepted international currencies?",
    answer:
      "International contracts are billed transparently in USD via Stripe or international wire transfer. Every engagement operates on clear deliverables: 50% advance before project commencement, and the remaining 50% upon final acceptance before production deployment.",
  },
  {
    question: "How does code ownership and intellectual property transfer work?",
    answer:
      "You retain 100% full intellectual property and commercial copyright ownership. Upon final milestone payment, full administrative access to GitHub repositories, environment secrets, and deployed infrastructure is transferred directly to your organization.",
  },
  {
    question: "Do you work with agencies as a white-label development partner?",
    answer:
      "Yes. I regularly collaborate with design studios, marketing agencies, and consultants in the US, UK, and Australia who need high-performance Next.js and React execution for their client projects under white-label terms.",
  },
  {
    question: "What makes your work different from standard offshore Indian IT agencies?",
    answer:
      "You work directly with me—a senior engineer with an MCA from Ranchi University—rather than being handed off to a junior outsourcer. I write production-grade TypeScript, follow strict component hygiene, achieve 90+ Lighthouse mobile performance scores, and never write unmaintainable spaghetti code.",
  },
];

const internationalWorkflows = [
  {
    title: "Direct Engineer Access",
    desc: "Zero account managers, sales reps, or junior proxies. You discuss requirements directly with the engineer writing your code.",
  },
  {
    title: "Clean Modern Stack",
    desc: "Next.js 16 App Router, TypeScript, Tailwind CSS, PostgreSQL, and serverless edge functions. Zero legacy PHP or bloated CMS plugins.",
  },
  {
    title: "Asynchronous Rigor",
    desc: "Daily Git commits, clear PR descriptions, Loom screen recordings, and transparent task tracking via GitHub or Linear.",
  },
  {
    title: "Performance & SEO Guaranteed",
    desc: "Every website targets Lighthouse 90+ mobile scores, semantic schema markup, clean OpenGraph cards, and sub-second loading.",
  },
];

export default function HireDeveloperIndiaPage() {
  const waGlobalMsg =
    "Hi Niraj, I am exploring your freelance developer services from outside India. Can we discuss a project?";

  const globalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Niraj Kumar Dangi — Freelance Next.js Developer India",
    description:
      "Senior freelance Next.js and TypeScript developer in India building web applications, client portals, and e-commerce platforms for international founders.",
    url: `${siteConfig.url}/hire-developer-india`,
    telephone: siteConfig.owner.whatsapp,
    email: siteConfig.owner.email,
    priceRange: "$$ (from $300 USD)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ranchi",
      addressRegion: "Jharkhand",
      addressCountry: "IN",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "United Kingdom",
      },
      {
        "@type": "Country",
        name: "Canada",
      },
      {
        "@type": "Country",
        name: "Australia",
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
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Schema */}
      <BreadcrumbJsonLd
        items={[
          {
            name: "Hire Developer in India",
            url: "/hire-developer-india",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(globalServiceSchema),
        }}
      />

      <Container>
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[{ name: "Hire Developer in India" }]}
          className="mb-8"
        />

        {/* Hero Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Eyebrow>REMOTE SENIOR ENGINEERING</Eyebrow>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface border border-[var(--color-border)] text-ink font-mono text-[11px]">
              <Globe2 className="w-3.5 h-3.5 text-accent" />
              US · UK · Canada · Worldwide
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.15] mb-6">
            Hire freelance Next.js developer in India.{" "}
            <span className="font-serif italic font-normal text-accent block sm:inline">
              Senior quality. Zero agency overhead.
            </span>
          </h1>

          <p className="text-muted text-lg md:text-xl leading-relaxed text-pretty mb-8">
            I partner with international founders, agency teams, and growing
            businesses to build high-performance web applications and custom
            portals. Transparent USD milestone billing, clean TypeScript
            architecture, and seamless remote collaboration.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-[var(--color-border)] text-ink">
              <Clock className="w-3.5 h-3.5 text-accent" />
              IST (UTC+5:30) · US &amp; EU Overlap
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-[var(--color-border)] text-ink">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
              50% Advance · Full IP Transfer
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-[var(--color-border)] text-ink">
              <Zap className="w-3.5 h-3.5 text-accent" />
              Starting from $300 USD
            </span>
          </div>
        </div>

        {/* GEO & AI Overview TL;DR Answer Box */}
        <div className="mb-14 p-6 sm:p-7 rounded-xl border border-accent/30 bg-accent/[0.03] dark:bg-accent/[0.06]">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-accent">
              Global Remote Engineering Summary (TL;DR)
            </span>
          </div>
          <p className="text-ink font-sans text-base sm:text-lg leading-relaxed text-pretty">
            Niraj Kumar Dangi is a senior freelance Next.js and TypeScript
            developer in India working with international clients across the
            United States, United Kingdom, Canada, and Australia. Services include
            bespoke Next.js 16 web development, SaaS MVP architecture, and API
            integrations. Projects feature milestone-based USD invoicing via
            Stripe/Wise, daily asynchronous communication, 100% intellectual
            property ownership, and projects starting from $300 USD.
          </p>
        </div>

        {/* Workflow & Engineering Culture */}
        <div className="mb-16 md:mb-24">
          <div className="max-w-2xl mb-8">
            <Eyebrow className="mb-2">WHY GLOBAL CLIENTS PARTNER WITH ME</Eyebrow>
            <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink mb-3">
              Agency-Grade Execution Without Agency Bloat
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              Tired of massive quotes from local US/UK agencies or low-quality
              freelance marketplaces? Here is how we collaborate:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internationalWorkflows.map((flow, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-[var(--color-border)] bg-surface flex flex-col gap-3"
              >
                <div className="flex items-center gap-2 font-mono text-xs text-accent font-semibold">
                  <Terminal className="w-4 h-4" />
                  <span>Principle #{idx + 1}</span>
                </div>
                <h3 className="font-sans text-lg font-bold text-ink">
                  {flow.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {flow.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Transparent International Rates */}
        <div className="mb-16 md:mb-24">
          <div className="text-center max-w-xl mx-auto mb-10">
            <Eyebrow className="mb-2">INTERNATIONAL PRICING</Eyebrow>
            <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink mb-3">
              Clear Fixed-Price &amp; Retainer Engagements
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              Billed transparently in USD via Stripe or Wire Transfer. No hidden
              exchange markups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-[var(--color-border)] bg-surface flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-1">
                  Landing Page / Portfolio
                </span>
                <div className="font-sans text-3xl font-bold text-ink mb-2">
                  $300 – $500
                </div>
                <p className="text-xs text-muted mb-4">
                  For brand landing pages, newsletters, or portfolio sites.
                </p>
                <ul className="flex flex-col gap-2 text-xs text-muted border-t border-[var(--color-border)] pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Next.js 16 + Tailwind CSS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Mobile responsive &amp; 90+ Lighthouse</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Custom domain &amp; Vercel deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Delivery in 5 to 7 business days</span>
                  </li>
                </ul>
              </div>
              <a
                href={whatsappLink("Hi Niraj, I am interested in a $300-$500 USD landing page project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-2.5 px-4 rounded-md border border-[var(--color-border)] hover:border-ink/20 text-center font-mono text-xs font-medium text-ink transition-colors min-h-[44px] flex items-center justify-center"
              >
                Inquire Scope
              </a>
            </div>

            <div className="p-6 rounded-lg border-2 border-accent bg-surface flex flex-col justify-between relative shadow-sm">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-accent text-white font-mono text-[10px] uppercase tracking-wider font-semibold">
                Most Common
              </span>
              <div>
                <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-1">
                  Custom Platform / MVP
                </span>
                <div className="font-sans text-3xl font-bold text-ink mb-2">
                  $800 – $1,800
                </div>
                <p className="text-xs text-muted mb-4">
                  For multi-page web applications, portals, and e-commerce.
                </p>
                <ul className="flex flex-col gap-2 text-xs text-muted border-t border-[var(--color-border)] pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Next.js App Router + TypeScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Database (Supabase / PostgreSQL)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Stripe payment gateway integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Delivery in 2 to 3 weeks</span>
                  </li>
                </ul>
              </div>
              <a
                href={whatsappLink("Hi Niraj, I would like to discuss a custom platform / MVP build in USD.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-2.5 px-4 rounded-md bg-accent text-white hover:bg-accent/90 text-center font-mono text-xs font-medium transition-colors min-h-[44px] flex items-center justify-center"
              >
                Book Consultation
              </a>
            </div>

            <div className="p-6 rounded-lg border border-[var(--color-border)] bg-surface flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-1">
                  Monthly Retainer
                </span>
                <div className="font-sans text-3xl font-bold text-ink mb-2">
                  $350 / mo
                </div>
                <p className="text-xs text-muted mb-4">
                  For ongoing feature development, maintenance, and support.
                </p>
                <ul className="flex flex-col gap-2 text-xs text-muted border-t border-[var(--color-border)] pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Dedicated development hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Dependency &amp; security maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Same-day priority bug fixes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Cancel anytime with 14-day notice</span>
                  </li>
                </ul>
              </div>
              <a
                href={whatsappLink("Hi Niraj, I am interested in discussing a monthly engineering retainer.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-2.5 px-4 rounded-md border border-[var(--color-border)] hover:border-ink/20 text-center font-mono text-xs font-medium text-ink transition-colors min-h-[44px] flex items-center justify-center"
              >
                Discuss Retainer
              </a>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <Eyebrow className="mb-4">INTERNATIONAL QUESTIONS</Eyebrow>
          <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink mb-8">
            Frequently Asked Questions for Remote &amp; Global Clients
          </h2>
          <FaqAccordion items={internationalFaqs} />
        </div>

        {/* Global CTA */}
        <div className="p-8 md:p-12 rounded-xl border border-[var(--color-border)] bg-surface text-center flex flex-col items-center gap-6">
          <Eyebrow>START YOUR REMOTE ENGAGEMENT</Eyebrow>
          <h2 className="font-sans text-2xl md:text-4xl font-bold tracking-tight text-ink max-w-xl">
            Have a project or MVP ready to build?
          </h2>
          <p className="text-muted text-sm md:text-base max-w-lg leading-relaxed">
            Message me on WhatsApp or submit your project specification. I will
            review your requirements and reply with a milestone roadmap within
            2 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink(waGlobalMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#25D366] text-white font-medium text-sm hover:bg-[#20ba59] transition-colors min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Niraj Directly
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-[var(--color-border)] bg-bg text-ink font-medium text-sm hover:border-ink/20 transition-colors min-h-[44px]"
            >
              Submit Project Brief
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
