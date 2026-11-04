import { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  ShieldCheck,
  Building2,
  Layers,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Website Developer in Jharkhand | Niraj Kumar Dangi",
  description:
    "Freelance web developer serving Jharkhand businesses across Jamshedpur, Dhanbad, Bokaro, and Ranchi. High-performance Next.js websites and custom portals.",
  keywords: [
    "website developer in jharkhand",
    "web development company jharkhand",
    "freelance web developer jamshedpur",
    "web developer dhanbad",
    "web designer bokaro",
  ],
  alternates: {
    canonical: `${siteConfig.url}/website-developer-jharkhand`,
  },
  openGraph: {
    title: "Website Developer in Jharkhand | Niraj Kumar Dangi",
    description:
      "Modern web architecture for Jharkhand enterprises. Sub-second Next.js websites designed to capture business leads across regional markets.",
    url: `${siteConfig.url}/website-developer-jharkhand`,
    type: "website",
  },
};

const jharkhandFaqs = [
  {
    question: "Do you handle web development for businesses outside Ranchi across Jharkhand?",
    answer:
      "Yes. A significant portion of my clientele is located in Jamshedpur, Dhanbad, Bokaro Steel City, and Deoghar. Project scoping, design reviews, and architecture demonstrations are conducted seamlessly via Google Meet screen-shares and WhatsApp updates.",
  },
  {
    question: "Why choose an independent Next.js developer over a regional web agency in Jharkhand?",
    answer:
      "Most local IT agencies in Jharkhand build on slow, outdated WordPress or PHP templates packed with vulnerability-prone plugins that crash and take 5+ seconds to load. As an independent engineer, I write clean Next.js 16 and TypeScript code with sub-second speeds, zero monthly CMS fees, and direct engineer communication without sales reps.",
  },
  {
    question: "Can you build B2B supplier catalogs and quotation request portals?",
    answer:
      "Yes. For manufacturing suppliers in Jamshedpur or mining equipment distributors in Dhanbad, I engineer fast digital product catalogs with instant WhatsApp RFQ (Request for Quote) dispatch and automated email lead logging.",
  },
  {
    question: "What are your payment milestones for Jharkhand clients?",
    answer:
      "Every project follows a straightforward commercial structure: 50% advance to confirm scheduling and initiate architecture, and the final 50% upon completed testing before production launch. Full code repository ownership is transferred directly to your organization.",
  },
];

const jharkhandHubs = [
  {
    city: "Jamshedpur (Tatanagar)",
    focus: "Manufacturing suppliers, auto logistics, engineering consultancies, and retail brands.",
  },
  {
    city: "Dhanbad",
    focus: "Mining equipment vendors, safety gear distributors, and educational training institutes.",
  },
  {
    city: "Bokaro Steel City",
    focus: "Steel fabrication units, specialized healthcare clinics, and academy portals.",
  },
  {
    city: "Deoghar",
    focus: "Hotels, spiritual tourism operators, wellness retreats, and local handicrafts.",
  },
  {
    city: "Hazaribagh & Ramgarh",
    focus: "Regional agricultural distributors, logistics operators, and trade businesses.",
  },
  {
    city: "Ranchi (State Capital)",
    focus: "Medical specialty clinics, legal chambers, event management, and D2C startups.",
  },
];

export default function WebsiteDeveloperJharkhandPage() {
  const waRegionalMsg =
    "Hi Niraj, I am looking for a website developer in Jharkhand for my business. Can we discuss scope?";

  const jharkhandBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Niraj Kumar Dangi — Web Developer in Jharkhand",
    description:
      "Specialized Next.js web engineering and lead automation for businesses across Jharkhand including Jamshedpur, Dhanbad, Bokaro, and Ranchi.",
    url: `${siteConfig.url}/website-developer-jharkhand`,
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
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Jharkhand, India",
      },
      {
        "@type": "City",
        name: "Jamshedpur",
      },
      {
        "@type": "City",
        name: "Dhanbad",
      },
      {
        "@type": "City",
        name: "Bokaro",
      },
      {
        "@type": "City",
        name: "Deoghar",
      },
    ],
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Schema */}
      <BreadcrumbJsonLd
        items={[
          {
            name: "Website Developer in Jharkhand",
            url: "/website-developer-jharkhand",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jharkhandBusinessSchema),
        }}
      />

      <Container>
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[{ name: "Website Developer in Jharkhand" }]}
          className="mb-8"
        />

        {/* Hero Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Eyebrow>STATE-WIDE DIGITAL ENGINEERING</Eyebrow>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface border border-[var(--color-border)] text-ink font-mono text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              Jharkhand · All Districts
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.15] mb-6">
            Website developer in Jharkhand.{" "}
            <span className="font-serif italic font-normal text-accent block sm:inline">
              Engineered for regional growth.
            </span>
          </h1>

          <p className="text-muted text-lg md:text-xl leading-relaxed text-pretty mb-8">
            Helping Jharkhand enterprises modernize their web presence.
            High-speed Next.js storefronts, B2B quotation portals, and medical
            directories engineered to generate genuine customer inquiries
            across Jamshedpur, Dhanbad, Bokaro, and beyond.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-[var(--color-border)] text-ink">
              <Building2 className="w-3.5 h-3.5 text-accent" />
              B2B &amp; Consumer Portals
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-[var(--color-border)] text-ink">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
              100% Intellectual Property Ownership
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-[var(--color-border)] text-ink">
              <TrendingUp className="w-3.5 h-3.5 text-accent" />
              Direct Developer Contact
            </span>
          </div>
        </div>

        {/* GEO & AI Overview TL;DR Answer Box */}
        <div className="mb-14 p-6 sm:p-7 rounded-xl border border-accent/30 bg-accent/[0.03] dark:bg-accent/[0.06]">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-accent">
              Jharkhand Web Engineering Summary (TL;DR)
            </span>
          </div>
          <p className="text-ink font-sans text-base sm:text-lg leading-relaxed text-pretty">
            Niraj Kumar Dangi provides specialized web development services for
            enterprises across Jharkhand, including commercial hubs in
            Jamshedpur, Dhanbad, Bokaro, and Ranchi. Deliverables include
            custom Next.js business platforms, B2B product catalogs, and clinic
            portals featuring sub-second mobile page loads, WhatsApp-routed
            enquiry funnels, and transparent milestones starting at ₹4,999.
          </p>
        </div>

        {/* Industrial & Commercial Focus */}
        <div className="mb-16 md:mb-24">
          <div className="max-w-2xl mb-8">
            <Eyebrow className="mb-2">REGIONAL INDUSTRIAL REACH</Eyebrow>
            <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink mb-3">
              Web Architecture for Jharkhand&apos;s Core Sectors
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              Every city in Jharkhand has a distinct economic engine. We tailor
              technical deliverables to your specific market demand:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jharkhandHubs.map((hub, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-[var(--color-border)] bg-surface flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-accent font-mono text-xs font-semibold mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{hub.city}</span>
                  </div>
                  <h3 className="font-sans text-lg font-bold text-ink mb-2">
                    {hub.city.split(" ")[0]} Web Solutions
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {hub.focus}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[var(--color-border)]/60 text-xs font-mono text-ink/80 flex items-center gap-1">
                  <span>Custom Next.js Stack</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24">
          <div className="p-6 rounded-lg border border-[var(--color-border)] bg-surface flex flex-col gap-3">
            <Layers className="w-5 h-5 text-accent" />
            <h3 className="font-sans text-lg font-bold text-ink">
              Fast, Low-Bandwidth Architecture
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              In industrial zones and semi-urban districts where mobile
              connectivity fluctuates, our static SSG pages load instantly
              without spinning loaders or bloated script bundles.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-[var(--color-border)] bg-surface flex flex-col gap-3">
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <h3 className="font-sans text-lg font-bold text-ink">
              Regional Lead Conversion
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Direct integration with WhatsApp Business APIs ensures that
              quotes, catalogue downloads, and inquiries go straight to your
              sales team&apos;s phone within seconds.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-[var(--color-border)] bg-surface flex flex-col gap-3">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <h3 className="font-sans text-lg font-bold text-ink">
              Zero Vendor Lock-In
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Full GitHub repository handover upon project launch. You maintain
              complete independence with clear documentation and 30 days of
              post-deployment warranty.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <Eyebrow className="mb-4">STATE-WIDE QUESTIONS</Eyebrow>
          <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-ink mb-8">
            Frequently Asked Questions for Jharkhand Businesses
          </h2>
          <FaqAccordion items={jharkhandFaqs} />
        </div>

        {/* Regional CTA */}
        <div className="p-8 md:p-12 rounded-xl border border-[var(--color-border)] bg-surface text-center flex flex-col items-center gap-6">
          <Eyebrow>DISCUSS YOUR JHARKHAND PROJECT</Eyebrow>
          <h2 className="font-sans text-2xl md:text-4xl font-bold tracking-tight text-ink max-w-xl">
            Modernize your company&apos;s digital infrastructure
          </h2>
          <p className="text-muted text-sm md:text-base max-w-lg leading-relaxed">
            Message me on WhatsApp with your city, industry, and requirements.
            You will receive a clear architectural proposal within 2 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink(waRegionalMsg)}
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
              Submit Project Details
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
