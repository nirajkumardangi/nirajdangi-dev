import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ContactForm } from "@/components/forms/contact-form";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { siteConfig } from "@/data/site";
import { whatsappLink, phoneLink } from "@/lib/utils";
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Phone,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Get in Touch — Start Your Project | niraj.",
  description:
    "Direct project consultation and quote request for doctors, creators, and businesses. Connect with Niraj Kumar Dangi in Ranchi, Jharkhand via WhatsApp or form.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Get in Touch — Start Your Project | niraj.",
    description: "Direct project consultation for doctors, creators, and event brands in Ranchi and beyond.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 lg:py-32">
      <BreadcrumbJsonLd items={[{ name: "Contact & Enquiry", url: "/contact" }]} />
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl mb-12 md:mb-16">
          <Eyebrow>GET IN TOUCH</Eyebrow>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight">
            Let&apos;s build your website{" "}
            <span className="font-serif italic font-normal text-accent">
              together.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted text-pretty max-w-2xl leading-relaxed">
            Fill out the brief below to get a fixed-scope recommendation within 24 hours, or start an immediate conversation on WhatsApp.
          </p>
        </div>

        {/* 2-Column Layout: Form Left, Direct Contact Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Direct Contact & Location */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* 1. Instant WhatsApp Direct Channel */}
            <div className="p-6 sm:p-8 rounded-2xl border border-[rgba(37,211,102,0.3)] bg-surface shadow-xs flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-[#15803d] dark:text-[#4ade80] font-semibold flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-whatsapp opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-whatsapp" />
                  </span>
                  <span>Direct WhatsApp Channel</span>
                </span>
                <span className="font-mono text-[11px] text-muted">
                  Replies &lt;2 hrs
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-ink mb-1">
                  Prefer a direct chat?
                </h2>
                <p className="text-sm text-muted leading-relaxed">
                  Fastest way to get answers. Send audio notes, share reference links, or schedule an in-person meeting in Ranchi.
                </p>
              </div>

              <a
                href={whatsappLink("Hi Niraj, I'd like to discuss a website project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 rounded-xl bg-whatsapp text-[#052e16] font-bold flex items-center justify-center gap-2 hover:bg-whatsapp-hover transition-colors shadow-sm text-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#052e16]" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

            {/* 2. Direct Email & Phone Channels */}
            <div className="p-6 sm:p-8 rounded-2xl border border-[var(--color-border)] bg-surface shadow-xs flex flex-col gap-4">
              <h2 className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
                Direct Contact Details
              </h2>

              <div className="flex flex-col gap-4 divide-y divide-[var(--color-border)]">
                {/* Email */}
                <div className="pt-2 first:pt-0 flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-muted block">Direct Email</span>
                    <a
                      href={`mailto:${siteConfig.owner.email}`}
                      className="text-sm font-semibold text-ink hover:text-accent transition-colors"
                    >
                      {siteConfig.owner.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="pt-4 flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-muted block">Direct Calling</span>
                    <a
                      href={phoneLink()}
                      className="text-sm font-semibold text-ink hover:text-accent transition-colors"
                    >
                      {siteConfig.owner.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="pt-4 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-muted block">Working Hours &amp; SLA</span>
                    <p className="text-sm text-ink font-medium">
                      Mon – Sat: 10:00 AM – 7:00 PM IST
                    </p>
                    <p className="text-xs text-muted mt-0.5">
                      Guaranteed reply within 24 hours on all channels
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Location Card (Clean static graphic + Map link, NO heavy embed) */}
            <div className="p-6 sm:p-8 rounded-2xl border border-[var(--color-border)] bg-surface shadow-xs flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-muted font-semibold flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Based in Ranchi, India</span>
                </span>
                <a
                  href="https://maps.google.com/?q=Ranchi,+Jharkhand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-accent hover:underline inline-flex items-center gap-1"
                >
                  <span>Open Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 rounded-xl bg-bg border border-[var(--color-border)] text-xs text-muted leading-relaxed">
                <p className="font-semibold text-ink mb-1">In-Person Consultations</p>
                Available for in-person project discovery sessions across Ranchi (Lalpur, Harmu, Kanke Road, Doranda, Bariatu, Ashok Nagar) by appointment.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
