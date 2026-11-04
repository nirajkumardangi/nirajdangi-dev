"use client";

import {
  Check,
  X,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Globe2,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  pricingTiers,
  pricingAddons,
  maintenancePlans,
  comparisonRows,
  paymentTerms,
} from "@/data/pricing";
import { whatsappLink } from "@/lib/utils";

export function PricingSection() {
  return (
    <section
      id="pricing"
      aria-label="Pricing tiers and packages"
      className="py-20 md:py-28 lg:py-36 border-b border-[var(--color-border)] bg-bg"
    >
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col gap-4 max-w-3xl mb-12 md:mb-16">
          <SectionHeading
            eyebrow="TRANSPARENT PRICING"
            heading={
              <>
                Fixed pricing.{" "}
                <span className="font-serif italic font-normal text-accent">
                  Complete code ownership.
                </span>
              </>
            }
            sub="Scope, milestones, and price agreed upfront before writing any code. Pay 50% advance to start, and the remaining 50% only after staging preview approval."
          />
        </div>

        {/* 3 Main Pricing Cards (Equal-height layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {pricingTiers.map((tier) => {
            const isHighlighted = tier.highlighted;

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col rounded-2xl transition-all duration-300 ${
                  isHighlighted
                    ? "p-[1px] bg-gradient-to-b from-accent via-accent/40 to-transparent shadow-lg"
                    : "border border-[var(--color-border)] shadow-xs"
                }`}
              >
                <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 rounded-[15px] bg-surface h-full">
                  <div>
                    {/* Tier Header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-ink tracking-tight">
                        {tier.name}
                      </h3>
                      {tier.badge && (
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-accent font-semibold px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                          <Sparkles className="w-3 h-3" />
                          {tier.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-muted text-pretty leading-relaxed mb-6 min-h-[36px]">
                      {tier.targetAudience}
                    </p>

                    {/* Price display */}
                    <div className="flex items-baseline gap-1.5 pb-6 mb-6 border-b border-[var(--color-border)]">
                      <span className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
                        {tier.price}
                      </span>
                      <span className="font-mono text-xs text-muted">
                        fixed fee
                      </span>
                    </div>

                    {/* Features list */}
                    <ul className="flex flex-col gap-3 mb-8">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/90">
                          <span className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-accent" />
                          </span>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Plan CTA button */}
                  <Button
                    variant={isHighlighted ? "whatsapp" : "secondary"}
                    size="lg"
                    href={whatsappLink(
                      `Hi Niraj, I'd like to book the ${tier.name} package (${tier.price}) for my business.`
                    )}
                    className="w-full justify-center shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{tier.ctaLabel}</span>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Plan Comparison Table (Horizontally Scrollable on Mobile with Sticky Column) */}
        <div className="mb-20">
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-ink tracking-tight">
                Plan Comparison
              </h3>
              <span className="md:hidden font-mono text-[11px] text-muted flex items-center gap-1">
                <span>Swipe left</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
            <p className="text-sm text-muted">
              Side-by-side feature comparison to help you choose the right tier.
            </p>
          </div>

          <div className="relative rounded-xl border border-[var(--color-border)] bg-surface shadow-xs overflow-hidden">
            <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:thin]">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-[var(--color-border)] bg-bg/60">
                    <th className="py-4 px-6 font-mono text-xs uppercase tracking-wider text-muted font-semibold sticky left-0 bg-surface z-10 w-1/3 min-w-[200px] border-r border-[var(--color-border)]">
                      Deliverable
                    </th>
                    <th className="py-4 px-5 text-sm font-bold text-ink w-2/9 text-center">
                      Starter (₹4,999)
                    </th>
                    <th className="py-4 px-5 text-sm font-bold text-accent w-2/9 text-center bg-accent/5">
                      Standard (₹12,999)
                    </th>
                    <th className="py-4 px-5 text-sm font-bold text-ink w-2/9 text-center">
                      Premium (₹24,999+)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)] text-xs sm:text-sm">
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-bg/40 transition-colors"
                    >
                      {/* Sticky First Column */}
                      <td className="py-3.5 px-6 font-medium text-ink sticky left-0 bg-surface z-10 border-r border-[var(--color-border)] shadow-xs">
                        {row.feature}
                      </td>

                      {/* Starter */}
                      <td className="py-3.5 px-5 text-center text-muted">
                        {typeof row.starter === "boolean" ? (
                          row.starter ? (
                            <Check className="w-4 h-4 text-accent mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-muted/30 mx-auto" />
                          )
                        ) : (
                          <span className="font-mono text-xs">{row.starter}</span>
                        )}
                      </td>

                      {/* Standard */}
                      <td className="py-3.5 px-5 text-center text-ink font-medium bg-accent/5">
                        {typeof row.standard === "boolean" ? (
                          row.standard ? (
                            <Check className="w-4 h-4 text-accent mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-muted/30 mx-auto" />
                          )
                        ) : (
                          <span className="font-mono text-xs font-semibold text-accent">
                            {row.standard}
                          </span>
                        )}
                      </td>

                      {/* Premium */}
                      <td className="py-3.5 px-5 text-center text-muted">
                        {typeof row.premium === "boolean" ? (
                          row.premium ? (
                            <Check className="w-4 h-4 text-accent mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-muted/30 mx-auto" />
                          )
                        ) : (
                          <span className="font-mono text-xs">{row.premium}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Add-ons & Maintenance Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Add-ons (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-ink tracking-tight mb-2">
              Popular Add-Ons
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pricingAddons.map((addon, aIdx) => (
                <div
                  key={aIdx}
                  className="p-4 rounded-xl border border-[var(--color-border)] bg-surface flex flex-col justify-between gap-2 shadow-xs"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-sm font-bold text-ink">
                      {addon.title}
                    </h4>
                    <span className="font-mono text-xs font-bold text-accent shrink-0">
                      {addon.price}
                    </span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    {addon.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Plans (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-ink tracking-tight mb-2">
              Monthly Website Care
            </h3>
            <div className="flex flex-col gap-3">
              {maintenancePlans.map((plan, pIdx) => (
                <div
                  key={pIdx}
                  className="p-4 rounded-xl border border-[var(--color-border)] bg-surface flex items-center justify-between gap-4 shadow-xs"
                >
                  <div>
                    <h4 className="text-sm font-bold text-ink">{plan.title}</h4>
                    <p className="text-xs text-muted">
                      {plan.features.slice(0, 2).join(" · ")}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-bold text-ink text-sm sm:text-base">
                      {plan.price}
                    </span>
                    <span className="font-mono text-[10px] text-muted block">
                      {plan.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Terms & International Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-[var(--color-border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4 max-w-xl">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-accent" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-bold text-ink">
                Payment Terms: 50% Advance · 50% on Handover
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                {paymentTerms.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-stretch md:self-auto pt-4 md:pt-0 border-t md:border-t-0 border-[var(--color-border)]">
            <Globe2 className="w-4 h-4 text-muted shrink-0" />
            <p className="font-mono text-xs text-muted leading-snug">
              {paymentTerms.internationalNote}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
