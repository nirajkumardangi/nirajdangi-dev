import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SHOW_TESTIMONIALS, testimonials } from "@/data/testimonials";
import { Quote, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  // Non-negotiable rule: Never invent testimonials.
  // Component remains dormant until real, verified client feedback is supplied.
  if (!SHOW_TESTIMONIALS || testimonials.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      aria-label="Client feedback"
      className="py-20 md:py-28 lg:py-36 border-b border-[var(--color-border)] bg-surface"
    >
      <Container>
        <div className="flex flex-col gap-4 max-w-3xl mb-12 md:mb-16">
          <SectionHeading
            eyebrow="CLIENT VOICES"
            heading={
              <>
                What clients say about{" "}
                <span className="font-serif italic font-normal text-accent">
                  working together.
                </span>
              </>
            }
            sub="Genuine reviews from founders, clinic heads, and studio directors."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.id} className="p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <Quote className="w-8 h-8 text-accent/30" />
                <p className="text-base text-ink italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                <div>
                  <p className="font-semibold text-ink text-sm">{t.author}</p>
                  <p className="text-xs text-muted">
                    {t.role}, {t.business}
                  </p>
                </div>
                {t.verified && (
                  <Badge variant="Live" className="gap-1 text-[10px]">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
