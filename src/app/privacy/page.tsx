import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { siteConfig } from "@/data/site";
import { ShieldCheck, Lock, EyeOff, Server, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | niraj.",
  description:
    "Plain-language privacy policy for niraj.online. Zero invasive advertising trackers, encrypted WhatsApp interactions, and transparent data handling.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  const breadcrumbs = [{ name: "Privacy Policy", url: "/privacy" }];

  return (
    <div className="py-16 md:py-24 lg:py-32">
      <BreadcrumbJsonLd items={breadcrumbs} />

      <Container className="max-w-3xl">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12 border-b border-[var(--color-border)] pb-8">
          <Eyebrow>LEGAL &amp; PRIVACY</Eyebrow>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-muted">
            Last updated: November 2026 · Plain language commitment
          </p>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-10 text-sm sm:text-base text-ink leading-relaxed">
          {/* Section 1: Philosophy */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-ink flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span>1. Zero Invasive Tracking</span>
            </h2>
            <p className="text-muted leading-relaxed">
              niraj.online is a professional portfolio and direct client consultancy service. There are no third-party advertising pixels (such as Meta Pixel or TikTok pixel), no fingerprinting scripts, and no data broker integrations. Your browsing behavior is never recorded or monetized.
            </p>
          </div>

          {/* Section 2: Form Submission Data */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-ink flex items-center gap-2">
              <Server className="w-5 h-5 text-accent" />
              <span>2. Project Enquiry Information</span>
            </h2>
            <p className="text-muted leading-relaxed">
              When you submit a project enquiry via our contact form, we collect:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-muted pl-2">
              <li>Your Name</li>
              <li>Your WhatsApp or phone number (for project communication)</li>
              <li>Your Email address (optional)</li>
              <li>Your business vertical, desired service, estimated budget, and brief</li>
            </ul>
            <p className="text-muted leading-relaxed">
              This information is transmitted securely over HTTPS and delivered via Resend to Niraj Kumar Dangi. It is used exclusively to evaluate your requirements and send a project proposal. We never sell, rent, or distribute your contact details to third parties.
            </p>
          </div>

          {/* Section 3: WhatsApp Communication */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-ink flex items-center gap-2">
              <Lock className="w-5 h-5 text-accent" />
              <span>3. WhatsApp Communications</span>
            </h2>
            <p className="text-muted leading-relaxed">
              If you choose to contact Niraj directly via WhatsApp buttons, your exchange occurs on the WhatsApp platform and is governed by WhatsApp&apos;s end-to-end encryption and terms of service. We do not store transcripts of WhatsApp conversations on third-party marketing databases.
            </p>
          </div>

          {/* Section 4: Analytics */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-ink flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-accent" />
              <span>4. Web Analytics</span>
            </h2>
            <p className="text-muted leading-relaxed">
              We may use Google Analytics 4 (GA4) with IP anonymization enabled to evaluate aggregate metrics such as total visitors, regional distribution (e.g. Ranchi vs national vs international), and button conversion click-rates. These metrics are anonymous and cannot be tied to your individual identity.
            </p>
          </div>

          {/* Section 5: Your Rights */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-ink flex items-center gap-2">
              <Mail className="w-5 h-5 text-accent" />
              <span>5. Data Deletion Requests</span>
            </h2>
            <p className="text-muted leading-relaxed">
              You retain full control over your personal data. If you have submitted an enquiry and wish to have your contact details permanently purged from our email archives, simply send an email to{" "}
              <a href={`mailto:${siteConfig.owner.email}`} className="text-accent underline font-mono text-xs">
                {siteConfig.owner.email}
              </a>{" "}
              or message via WhatsApp. We will delete all records within 48 hours.
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

