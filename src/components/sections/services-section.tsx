"use client";

import { Check, MessageCircle, Clock } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { whatsappLink } from "@/lib/utils";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Services and capabilities"
      className="py-20 md:py-28 lg:py-36 border-b border-[var(--color-border)] bg-bg"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl mb-12 md:mb-16">
          <SectionHeading
            eyebrow="SERVICES &amp; CAPABILITIES"
            heading={
              <>
                Websites, AI assistants, and{" "}
                <span className="font-serif italic font-normal text-accent">
                  custom tools.
                </span>
              </>
            }
            sub="Scope, timeline, and exact deliverables agreed before starting. Each offer has an explicit milestone plan, fixed starting pricing, and zero proprietary lock-in."
          />
        </div>

        {/* Structured Services List / Bento */}
        <div className="flex flex-col gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              spotlight
              className="p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-[var(--color-border-md)] hover:shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Header Column */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-accent px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20">
                      SERVICE {service.number}
                    </span>
                    <span className="font-mono text-xs text-muted flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.timeline}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted text-pretty leading-relaxed">
                    {service.description}
                  </p>

                  {/* Who it's for box */}
                  <div className="p-3.5 rounded-lg bg-[rgba(10,10,20,0.03)] dark:bg-white/5 border border-[var(--color-border)]">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted mb-1 font-semibold">
                      Who this is for:
                    </p>
                    <p className="text-xs sm:text-sm text-ink leading-relaxed">
                      {service.forWho}
                    </p>
                  </div>
                </div>

                {/* Right Deliverables & CTA Column */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full gap-6 lg:pl-6 lg:border-l lg:border-[var(--color-border)]">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-3 font-semibold">
                      What you get (Deliverables):
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink">
                          <span className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-accent" />
                          </span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & Action footer */}
                  <div className="pt-4 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-xs text-muted">Starting from</span>
                      <span className="text-2xl font-bold text-ink tracking-tight">
                        {service.startingPrice}
                      </span>
                    </div>

                    <Button
                      variant="whatsapp"
                      size="md"
                      href={whatsappLink(service.ctaMessage)}
                      className="justify-center"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Discuss {service.title}</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
