import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, Code, RefreshCw, AlertCircle, FileText } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service & Engagement | niraj.",
  description:
    "Plain-language commercial terms of engagement, milestone payment schedules, code ownership, and warranties for website development by Niraj Kumar Dangi.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
  openGraph: {
    title: "Terms of Service & Engagement | niraj.",
    description:
      "Plain-language commercial terms, milestone payments, and code ownership policies for Niraj Kumar Dangi web engineering.",
    url: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  const breadcrumbs = [{ name: "Terms of Service", url: "/terms" }];

  return (
    <div className="py-16 md:py-24 lg:py-32">
      <BreadcrumbJsonLd items={breadcrumbs} />

      <Container className="max-w-3xl">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12 border-b border-[var(--color-border)] pb-8">
          <Eyebrow>LEGAL &amp; COMMERCIAL TERMS</Eyebrow>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Terms of Service &amp; Engagement
          </h1>
          <p className="text-sm font-mono text-muted">
            Last updated: November 2026 · Fair business terms
          </p>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-10 text-sm sm:text-base text-ink leading-relaxed">
          {/* Section 1: Scope */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-ink flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent" />
              <span>1. Scope of Engagement</span>
            </h2>
            <p className="text-muted leading-relaxed">
              These terms govern all custom web design, software development, and AI integration services provided by Niraj Kumar Dangi (&quot;the Developer&quot;) to clients (&quot;the Client&quot;). Every project commences with a written fixed-scope proposal specifying exact deliverables, timelines, and payment milestones.
            </p>
          </div>

          {/* Section 2: Payment Terms */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-ink flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-accent" />
              <span>2. Payment Milestones &amp; Currency</span>
            </h2>
            <p className="text-muted leading-relaxed">
              To guarantee dedicated scheduling and infrastructure provisioning:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-muted pl-2">
              <li><strong>Advance Deposit:</strong> 50% non-refundable advance upon agreement signing before architecture begins.</li>
              <li><strong>Final Balance:</strong> 50% upon final acceptance in staging and prior to production domain deployment.</li>
              <li><strong>Domestic Projects:</strong> Invoiced in Indian Rupees (INR) payable via direct bank transfer (NEFT / IMPS / UPI) or verified payment gateway.</li>
              <li><strong>International Projects:</strong> Invoiced in US Dollars (USD) payable via Stripe or international wire transfer.</li>
            </ul>
          </div>

          {/* Section 3: Intellectual Property & Code Ownership */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-ink flex items-center gap-2">
              <Code className="w-5 h-5 text-accent" />
              <span>3. Full Code Ownership</span>
            </h2>
            <p className="text-muted leading-relaxed">
              Upon receipt of full and final payment, 100% of the custom source code, design assets, and database schemas developed for the project are permanently transferred to the Client. Unlike proprietary website builders, there are zero monthly platform lock-in fees or recurring license costs owed to the Developer.
            </p>
          </div>

          {/* Section 4: Third-Party Services */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-ink flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-accent" />
              <span>4. Third-Party Costs &amp; Accounts</span>
            </h2>
            <p className="text-muted leading-relaxed">
              The Client is directly responsible for accounts and fees charged by third-party services, including domain registrars (Namecheap, GoDaddy), hosting providers (Vercel, AWS), payment processors (Razorpay, Stripe), and external APIs (OpenAI, WhatsApp Business). The Developer does not mark up third-party utility expenses.
            </p>
          </div>

          {/* Section 5: Warranty & Revisions */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-ink flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-accent" />
              <span>5. Warranty &amp; Post-Launch Support</span>
            </h2>
            <p className="text-muted leading-relaxed">
              All projects include a <strong>30-day post-launch warranty</strong> covering bug fixes, browser rendering discrepancies, and layout defects within the agreed original scope. Requests for new features, major layout changes, or third-party API deprecations after sign-off are billed under standard maintenance tiers or separate milestone quotes.
            </p>
          </div>

          {/* Return CTA */}
          <div className="pt-8 border-t border-[var(--color-border)] flex items-center justify-between">
            <Link
              href="/"
              className="min-h-[44px] py-2 text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1.5"
            >
              <span>← Return to Home</span>
            </Link>
            <Link
              href="/contact"
              className="min-h-[44px] py-2 text-sm font-semibold text-ink hover:text-accent transition-colors inline-flex items-center"
            >
              Start an Enquiry →
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
