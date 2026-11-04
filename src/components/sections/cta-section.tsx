"use client";

import { MessageCircle, Mail, Clock, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { QuickEnquiry } from "@/components/forms/quick-enquiry";
import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/utils";
import Link from "next/link";

interface CTASectionProps {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  waMessage?: string;
}

export function CTASection({
  id = "contact",
  eyebrow = "READY TO START?",
  title,
  description,
  waMessage = "Hi Niraj, I'd like to discuss a website for my business.",
}: CTASectionProps) {
  return (
    <section
      id={id}
      aria-label="Call to action"
      className="py-20 md:py-28 lg:py-36 bg-surface relative overflow-hidden"
    >
      {/* Background subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,rgba(10,10,20,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,10,20,0.04)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl border border-[var(--color-border-md)] bg-bg p-8 sm:p-12 lg:p-16 shadow-lg text-center flex flex-col items-center gap-6">
          <Eyebrow>{eyebrow}</Eyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight text-balance max-w-2xl">
            {title ?? (
              <>
                Let&apos;s build a website that{" "}
                <span className="font-serif italic font-normal text-accent">
                  actually gets you enquiries.
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-muted text-pretty max-w-2xl leading-relaxed">
            {description ??
              "Send a brief overview of what your business does. You get a recommended scope and fixed price within 24 hours."}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
            <Button
              variant="whatsapp"
              size="lg"
              href={whatsappLink(waMessage)}
              className="w-full sm:w-auto text-base shadow-md"
            >
              <MessageCircle className="w-5 h-5 text-[#052e16]" />
              <span>Chat on WhatsApp</span>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href={`mailto:${siteConfig.owner.email}?subject=Project%20Enquiry`}
              className="w-full sm:w-auto text-base"
            >
              <Mail className="w-5 h-5 text-muted" />
              <span>Send an Email</span>
            </Button>

            <Link
              href="/contact"
              className="min-h-[44px] inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline px-4 py-2.5"
            >
              <span>Full Project Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Enquiry Mini Form */}
          <div className="w-full pt-6 mt-2 border-t border-[var(--color-border)] flex flex-col items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              Or request a quick quote in 10 seconds:
            </span>
            <QuickEnquiry />
          </div>

          {/* Direct Trust Badges */}
          <div className="pt-8 mt-4 border-t border-[var(--color-border)] w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-muted">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-accent shrink-0" />
              <span>Under 24h response time</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
              <span>Fixed scope &amp; price guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span>Ranchi, Jharkhand &amp; Remote</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
