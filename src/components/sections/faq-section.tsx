"use client";

import * as React from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { faqItems } from "@/data/faq";
import { whatsappLink } from "@/lib/utils";

export function FaqSection() {
  // Track open state for items (default first one open for discovery)
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  // Structured data (Schema.org FAQPage)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="py-20 md:py-28 lg:py-36 border-b border-[var(--color-border)] bg-bg"
    >
      {/* Schema.org FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container>
        {/* Section Heading */}
        <div className="flex flex-col gap-4 max-w-3xl mb-12 md:mb-16">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            heading={
              <>
                Common questions.{" "}
                <span className="font-serif italic font-normal text-accent">
                  Direct answers.
                </span>
              </>
            }
            sub="Everything you need to know about pricing, timelines, technical handoff, and how we collaborate. No corporate runaround."
          />
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            const questionId = `faq-q-${idx}`;
            const answerId = `faq-a-${idx}`;

            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-accent/40 bg-surface shadow-xs"
                    : "border-[var(--color-border)] bg-surface/60 hover:bg-surface hover:border-[var(--color-border-md)]"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleItem(idx)}
                    className="w-full text-left py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20 shrink-0">
                        {item.category}
                      </span>
                      <span className="text-base sm:text-lg font-semibold text-ink leading-snug">
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={`shrink-0 w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-accent text-white border-accent" : "bg-bg"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`grid transition-all duration-300 ease-out-expo ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-muted text-pretty leading-relaxed border-t border-[var(--color-border)]/50 mt-1">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-[var(--color-border)] bg-surface max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-semibold text-ink text-sm sm:text-base">
                Have a specific question not covered here?
              </p>
              <p className="text-xs sm:text-sm text-muted mt-0.5">
                Send a quick WhatsApp message. You&apos;ll get a direct reply from Niraj.
              </p>
            </div>
          </div>

          <Button
            variant="whatsapp"
            size="sm"
            href={whatsappLink("Hi Niraj, I have a question before discussing a website.")}
            className="shrink-0 w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}

