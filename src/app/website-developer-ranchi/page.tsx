import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  ShieldCheck,
  MessageCircle,
  Smartphone,
  Zap,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Website Developer in Ranchi | Niraj Kumar Dangi",
  description:
    "Freelance website developer in Ranchi building fast Next.js websites for doctors, retail, and local businesses. 100% code ownership, starting ₹4,999.",
  keywords: [
    "website developer in ranchi",
    "web designer in ranchi",
    "freelance web developer ranchi",
    "website design ranchi jharkhand",
    "doctor website developer ranchi",
  ],
  alternates: {
    canonical: `${siteConfig.url}/website-developer-ranchi`,
  },
  openGraph: {
    title: "Website Developer in Ranchi | Niraj Kumar Dangi",
    description:
      "Precision web development for Ranchi businesses. High-speed Next.js websites designed to generate genuine WhatsApp and phone enquiries.",
    url: `${siteConfig.url}/website-developer-ranchi`,
    type: "website",
  },
};

const ranchiFaqs = [
  {
    question: "Do you meet clients in person in Ranchi?",
    answer:
      "Yes. While I operate as an independent freelance engineer from my home workspace in Ranchi, I regularly meet clients for initial project briefings and milestone reviews across central Ranchi, including Lalpur, Ashok Nagar, Morabadi, and Doranda by prior appointment.",
  },
  {
    question: "How long does it take to design and launch a website in Ranchi?",
    answer:
      "A focused Starter business website (single page or essential 3 pages) typically launches within 5 to 7 business days. More comprehensive platforms with custom catalogs, clinic booking workflows, or WhatsApp dispatch take 2 to 3 weeks.",
  },
  {
    question: "What is your pricing for Ranchi businesses?",
    answer:
      "Pricing is fully transparent with zero hidden fees: Starter package begins at ₹4,999, Standard multi-page business websites are ₹12,999, and bespoke web apps or e-commerce platforms start at ₹24,999. All packages include 50% advance and 100% code ownership.",
  },
  {
    question: "Will my website show up on Google when people search in Ranchi?",
    answer:
      "Yes. Every website is built with clean semantic HTML, localized schema markup (PostalAddress Ranchi, GeoCoordinates), rapid mobile loading speeds, and optimized meta tags targeting your specific locality and customer service areas.",
  },
  {
    question: "What happens if I need changes after the website goes live?",
    answer:
      "Every project includes 30 days of complimentary technical support and minor content adjustments. After that, you can opt for an optional monthly maintenance retainer (starting at ₹999/month) or request hourly updates as needed.",
  },
];

const ranchiLocalities = [
  "Lalpur",
  "Bariatu",
  "Doranda",
  "Kanke",
  "Harmu Housing Colony",
  "Ashok Nagar",
  "Morabadi",
  "Hinoo",
  "Namkum",
  "Ratu Road",
  "Dhurwa",
  "Main Road (Ranchi)",
];

export default function WebsiteDeveloperRanchiPage() {
  const waLocalMsg =
    "Hi Niraj, I am looking for a website developer in Ranchi for my business. Can we discuss requirements?";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Niraj Kumar Dangi — Website Developer in Ranchi",
    description:
      "Freelance web developer based in Ranchi, Jharkhand specializing in Next.js websites and AI lead generation for clinics, stores, and professionals.",
    url: `${siteConfig.url}/website-developer-ranchi`,
    telephone: siteConfig.owner.whatsapp,
    email: siteConfig.owner.email,
    priceRange: "₹₹ (from ₹4,999)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ranchi",
      addressRegion: "Jharkhand",
      postalCode: "834001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.3441,
      longitude: 85.3096,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Ranchi, Jharkhand",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Schema */}
      <BreadcrumbJsonLd
        items={[{ name: "Website Developer in Ranchi", url: "/website-developer-ranchi" }]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Container>
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[{ name: "Website Developer in Ranchi" }]}
          className="mb-8"
        />

        {/* Hero Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Eyebrow>LOCAL FREELANCE WEB ARCHITECT</Eyebrow>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface border border-[var(--color-border)] text-ink font-mono text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              Ranchi, Jharkhand
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.15] mb-6">
            Website developer in Ranchi.{" "}
            <span className="font-serif italic font-normal text-accent block sm:inline">
              Built for real business enquiries.
            </span>
          </h1>

          <p className="text-muted text-lg md:text-xl leading-relaxed text-pretty mb-8">
            I build fast, clean, and mobile-optimized websites for doctors,
            retailers, and independent businesses across Ranchi. Direct
            WhatsApp integration, 100% code ownership, and zero monthly
            platform fees.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-[var(--color-border)] text-ink">
              <Clock className="w-3.5 h-3.5 text-accent" />
              Response within 2 hours (IST)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-[var(--color-border)] text-ink">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
              No Agency Middlemen · Direct Engineer
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-[var(--color-border)] text-ink">
              <Zap className="w-3.5 h-3.5 text-accent" />
              Starting at ₹4,999
            </span>
          </div>
        </div>

        {/* GEO & AI Overview TL;DR Answer Box */}
        <div className="mb-14 p-6 sm:p-7 rounded-xl border border-accent/30 bg-accent/[0.03] dark:bg-accent/[0.06]">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-accent">
              Ranchi Web Development Overview (TL;DR)
            </span>
          </div>
          <p className="text-ink font-sans text-base sm:text-lg leading-relaxed text-pretty">
            Niraj Kumar Dangi is a freelance full-stack web developer and MCA
            graduate based in Ranchi, Jharkhand. He engineers custom Next.js
            websites, clinic portals, and e-commerce catalogs for Ranchi
            businesses. Projects feature sub-second mobile page loads, localized
            Google Search optimization, pre-filled WhatsApp enquiry routing,
            and complete source code ownership starting from ₹4,999.
          </p>
        </div>

        {/* Local Problems Solved */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24">
          <div className="p-6 rounded-lg border border-[var(--color-border)] bg-surface flex flex-col gap-3">
            <Smartphone className="w-5 h-5 text-accent" />
            <h3 className="font-sans text-lg font-bold text-ink">
              Over 85% Mobile Traffic
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Most Ranchi customers browse on mobile phones using 4G/5G. Heavy
              WordPress templates take 6+ seconds to load. We build lightweight
              Next.js sites that load in under 1 second.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-[var(--color-border)] bg-surface flex flex-col gap-3">
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <h3 className="font-sans text-lg font-bold text-ink">
              WhatsApp-First Conversions
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Indian buyers don&apos;t want to fill out 10-field contact forms.
              Every call-to-action connects directly to your WhatsApp with
              pre-filled service details, so you never miss a local lead.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-[var(--color-border)] bg-surface flex flex-col gap-3">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <h3 className="font-sans text-lg font-bold text-ink">
              100% Code Ownership
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              No agency lock-in, recurring domain markups, or proprietary
              builder hostages. You own your code repository, hosting account,
              and domain name from day one.
            </p>
          </div>
        </div>

        {/* Local Proof Highlight: Rovala.in */}
        <div className="mb-16 md:mb-24 p-8 rounded-xl border border-[var(--color-border)] bg-surface">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[var(--color-border)] mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-1">
                FEATURED RANCHI PROJECT
              </span>
              <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink">
                Rovala.in — Doorstep RO Service in Ranchi
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#25D366]/10 text-[#25D366] font-mono text-xs font-medium self-start md:self-auto">
              ● Live Client Deployment
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4 text-sm sm:text-base text-muted leading-relaxed">
              <p>
                Rovala.in is an on-demand water purifier repair and filter
                replacement platform actively serving residents across Ranchi
                (Harmu, Lalpur, Doranda, Bariatu, and Kanke).
              </p>
              <p>
                Built to solve the problem of unpredictable technician fees, the
                platform showcases transparent rate cards and dispatches customer
                bookings directly to WhatsApp with zero advance deposit.
              </p>
              <div className="pt-2">
                <Link
                  href="/work/rovala-in"
                  className="font-mono text-xs text-accent hover:underline inline-flex items-center gap-1.5"
                >
                  Read the Rovala.in Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-5 rounded-lg border border-[var(--color-border)] bg-bg flex flex-col gap-3 font-mono text-xs">
              <span className="text-ink font-semibold uppercase tracking-wider">
                Production Highlights:
              </span>
              <div className="flex items-center justify-between text-muted border-b border-[var(--color-border)]/50 pb-2">
                <span>Location:</span>
                <span className="text-ink">Ranchi, Jharkhand</span>
              </div>
              <div className="flex items-center justify-between text-muted border-b border-[var(--color-border)]/50 pb-2">
                <span>Architecture:</span>
                <span className="text-ink">Next.js 16 + TypeScript</span>
              </div>
              <div className="flex items-center justify-between text-muted border-b border-[var(--color-border)]/50 pb-2">
                <span>Booking Flow:</span>
                <span className="text-ink">WhatsApp Deep Link Routing</span>
              </div>
              <div className="flex items-center justify-between text-muted">
                <span>Mobile Speed:</span>
                <span className="text-[#25D366]">Lighthouse 95+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Localized Ranchi Service Areas */}
        <div className="mb-16 md:mb-24">
          <div className="max-w-2xl mb-8">
            <Eyebrow className="mb-2">SERVICE LOCALITIES</Eyebrow>
            <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink mb-3">
              Serving Localities Across Greater Ranchi
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              Whether you need an in-person meeting in central Ranchi or a quick
              video screen-share, I collaborate with businesses across the
              district:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {ranchiLocalities.map((loc, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-md border border-[var(--color-border)] bg-surface text-ink text-xs font-mono flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>{loc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Local Pricing Structure */}
        <div className="mb-16 md:mb-24">
          <div className="text-center max-w-xl mx-auto mb-10">
            <Eyebrow className="mb-2">TRANSPARENT RATES</Eyebrow>
            <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink mb-3">
              Straightforward Packages for Ranchi Businesses
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              No hidden agency fees or surprise invoices. Pay 50% advance to start,
              50% upon final launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-[var(--color-border)] bg-surface flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-1">
                  Starter Business
                </span>
                <div className="font-sans text-3xl font-bold text-ink mb-2">
                  ₹4,999
                </div>
                <p className="text-xs text-muted mb-4">
                  For single-location services, consultants, and quick launches.
                </p>
                <ul className="flex flex-col gap-2 text-xs text-muted border-t border-[var(--color-border)] pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Single-page fast Next.js site</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Direct WhatsApp enquiry buttons</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Google Maps &amp; local SEO tags</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Delivery in 5 to 7 days</span>
                  </li>
                </ul>
              </div>
              <a
                href={whatsappLink("Hi Niraj, I am interested in the ₹4,999 Starter package for my Ranchi business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-2.5 px-4 rounded-md border border-[var(--color-border)] hover:border-ink/20 text-center font-mono text-xs font-medium text-ink transition-colors min-h-[44px] flex items-center justify-center"
              >
                Choose Starter
              </a>
            </div>

            <div className="p-6 rounded-lg border-2 border-accent bg-surface flex flex-col justify-between relative shadow-sm">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-accent text-white font-mono text-[10px] uppercase tracking-wider font-semibold">
                Most Popular
              </span>
              <div>
                <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-1">
                  Standard Business
                </span>
                <div className="font-sans text-3xl font-bold text-ink mb-2">
                  ₹12,999
                </div>
                <p className="text-xs text-muted mb-4">
                  For clinics, studios, retail stores, and growing firms.
                </p>
                <ul className="flex flex-col gap-2 text-xs text-muted border-t border-[var(--color-border)] pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Up to 5 custom-designed pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Lead capture form with Resend alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Full Local SEO &amp; Schema markup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Delivery in 10 to 14 days</span>
                  </li>
                </ul>
              </div>
              <a
                href={whatsappLink("Hi Niraj, I am interested in the ₹12,999 Standard package for my Ranchi business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-2.5 px-4 rounded-md bg-accent text-white hover:bg-accent/90 text-center font-mono text-xs font-medium transition-colors min-h-[44px] flex items-center justify-center"
              >
                Choose Standard
              </a>
            </div>

            <div className="p-6 rounded-lg border border-[var(--color-border)] bg-surface flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-1">
                  Custom &amp; E-Commerce
                </span>
                <div className="font-sans text-3xl font-bold text-ink mb-2">
                  ₹24,999+
                </div>
                <p className="text-xs text-muted mb-4">
                  For online catalogs, booking systems, or AI chatbot integration.
                </p>
                <ul className="flex flex-col gap-2 text-xs text-muted border-t border-[var(--color-border)] pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Custom database &amp; payment gateway</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Admin dashboard or CMS integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>AI FAQ assistant or booking pipeline</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Delivery in 2 to 4 weeks</span>
                  </li>
                </ul>
              </div>
              <a
                href={whatsappLink("Hi Niraj, I would like to discuss a custom web application or e-commerce build in Ranchi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-2.5 px-4 rounded-md border border-[var(--color-border)] hover:border-ink/20 text-center font-mono text-xs font-medium text-ink transition-colors min-h-[44px] flex items-center justify-center"
              >
                Discuss Custom Scope
              </a>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <Eyebrow className="mb-4">LOCAL QUESTIONS</Eyebrow>
          <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink mb-8">
            Frequently Asked Questions for Ranchi Clients
          </h2>
          <FaqAccordion items={ranchiFaqs} />
        </div>

        {/* Local CTA */}
        <div className="p-8 md:p-12 rounded-xl border border-[var(--color-border)] bg-surface text-center flex flex-col items-center gap-6">
          <Eyebrow>START YOUR PROJECT IN RANCHI</Eyebrow>
          <h2 className="font-sans text-2xl md:text-4xl font-bold tracking-tight text-ink max-w-xl">
            Ready to upgrade your business website in Ranchi?
          </h2>
          <p className="text-muted text-sm md:text-base max-w-lg leading-relaxed">
            Message me on WhatsApp with your business name and what you want to
            achieve. I reply personally within 2 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink(waLocalMsg)}
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
              Send Detailed Message
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
