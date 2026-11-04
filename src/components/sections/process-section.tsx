import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { processSteps } from "@/data/process";
import { Clock } from "lucide-react";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-label="Development process and timeline"
      className="py-20 md:py-28 lg:py-36 border-b border-[var(--color-border)] bg-surface"
    >
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col gap-4 max-w-3xl mb-12 md:mb-16">
          <SectionHeading
            eyebrow="HOW WE WORK"
            heading={
              <>
                From first message to live site.{" "}
                <span className="font-serif italic font-normal text-accent">
                  Four steps.
                </span>
              </>
            }
            sub="No technical confusion or unexplained delays. A predictable 4-phase sequence where you always know what is being built, when you review it, and when it goes live."
          />
        </div>

        {/* 4-Step Grid with Mono Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <Card
              key={step.step}
              className="p-6 flex flex-col justify-between gap-6 relative border-[var(--color-border)] shadow-xs hover:border-[var(--color-border-md)] hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Step Number + Timeframe Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border)] mb-4">
                  <span className="font-mono text-2xl font-bold text-accent">
                    {step.step}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-muted px-2 py-0.5 rounded bg-[rgba(10,10,20,0.03)] dark:bg-white/5 border border-[var(--color-border)]">
                    <Clock className="w-3 h-3 text-muted/70" />
                    <span>{step.timeframe}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-ink tracking-tight mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-muted text-pretty leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Step Deliverables */}
              <div className="pt-4 border-t border-[var(--color-border)] flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted font-semibold">
                  Deliverables:
                </span>
                <ul className="flex flex-col gap-1.5 text-xs text-ink/90">
                  {step.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5 leading-snug">
                      <span className="text-accent font-bold">›</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
