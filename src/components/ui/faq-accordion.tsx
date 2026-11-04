"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FaqItemProps {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItemProps[];
  className?: string;
  renderSchema?: boolean;
}

export function FaqAccordion({
  items,
  className,
  renderSchema = true,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {renderSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const triggerId = `faq-trigger-${idx}`;
        const contentId = `faq-panel-${idx}`;

        return (
          <div
            key={idx}
            className={cn(
              "border border-[var(--color-border)] rounded-md transition-colors",
              isOpen ? "bg-surface" : "bg-bg/60 hover:bg-surface/50"
            )}
          >
            <button
              id={triggerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => toggleItem(idx)}
              className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-sans font-semibold text-ink text-base md:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md min-h-[44px]"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-muted shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180 text-accent"
                )}
              />
            </button>

            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={triggerId}
                className="px-5 pb-5 md:px-6 md:pb-6 text-muted text-sm md:text-base leading-relaxed border-t border-[var(--color-border)]/50 pt-4"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

