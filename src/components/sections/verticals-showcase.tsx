"use client";

import * as React from "react";
import Image from "next/image";
import {
  Stethoscope,
  Palette,
  Camera,
  HeartHandshake,
  CalendarDays,
  Wrench,
  Check,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { whatsappLink } from "@/lib/utils";

interface VerticalItem {
  id: string;
  label: string;
  shortLabel: string;
  icon: React.ElementType;
  status: "Concept" | "Live";
  headline: string;
  description: string;
  src: string;
  liveUrl?: string;
  benefits: [string, string, string];
  metricCallout: {
    stat: string;
    label: string;
  };
}

const VERTICALS: VerticalItem[] = [
  {
    id: "doctor",
    label: "Doctors & Clinics",
    shortLabel: "Doctors",
    icon: Stethoscope,
    status: "Concept",
    headline: "Medifine healthcare portal: 24/7 appointments booked directly.",
    description:
      "A medical site must establish immediate clinical credibility. Clear OPD timings, verified credentials, and 1-tap WhatsApp consultation tokens.",
    src: "/work/doctor/desktop.webp",
    benefits: [
      "Direct WhatsApp token booking reduces reception calls by 60%",
      "Live clinic queue & OPD schedule status prevents waiting crowd",
      "One-tap Google Maps directions for elderly patients and ambulances",
    ],
    metricCallout: {
      stat: "1-Tap",
      label: "OPD WhatsApp Booking",
    },
  },
  {
    id: "artist",
    label: "Artists & Creators",
    shortLabel: "Artists",
    icon: Palette,
    status: "Concept",
    headline: "Clean editorial canvas that puts your art first.",
    description:
      "For painters, sculptors, and digital creators. Warm gallery minimalism, canvas cataloging with availability tags, and direct studio commission inquiries.",
    src: "/work/artist/preview.svg",
    benefits: [
      "Full-bleed high-res canvas viewing with zero visual clutter",
      "Clear acquisition status: Available, In-Exhibition, or Acquired",
      "Direct bespoke commission briefs straight to your email & WhatsApp",
    ],
    metricCallout: {
      stat: "Direct",
      label: "Studio Commissions",
    },
  },
  {
    id: "photographer",
    label: "Photographers",
    shortLabel: "Photographers",
    icon: Camera,
    status: "Live",
    headline: "LENS Photography: Editorial visual storytelling with session booking.",
    description:
      "For commercial, wedding, and portrait photographers. Dark full-bleed galleries, transparent shoot packages, and fast client proofing portal teaser.",
    src: "/work/framer-lens/desktop.webp",
    liveUrl: "https://framer-lens.netlify.app/",
    benefits: [
      "Deep black stage that makes color-graded photography pop",
      "Transparent package rates to filter out budget tire-kickers",
      "Easy date reservation for commercial and wedding shoots",
    ],
    metricCallout: {
      stat: "Live Site",
      label: "LENS Photography",
    },
  },
  {
    id: "wedding",
    label: "Wedding Planners",
    shortLabel: "Wedding",
    icon: HeartHandshake,
    status: "Concept",
    headline: "Visual romance meets ruthless operational clarity.",
    description:
      "Weddings are emotional investments. Couples need to feel the elegance through real stories, venue walkthroughs, and limited date exclusivity.",
    src: "/work/wedding/preview.svg",
    benefits: [
      "Real wedding gallery showcases with guest count & venue credits",
      "Monthly date availability tracker showing remaining prime season dates",
      "WhatsApp inquiry link pre-filled with wedding month and city",
    ],
    metricCallout: {
      stat: "Date Lock",
      label: "Calendar Exclusivity",
    },
  },
  {
    id: "event",
    label: "Event Organisers",
    shortLabel: "Events",
    icon: CalendarDays,
    status: "Concept",
    headline: "Credibility to close state summits and corporate sponsors.",
    description:
      "For conference organizers, expo managers, and fest directors. Turnkey RFP downloads, speaker agendas, and sponsor deck requests.",
    src: "/work/event/preview.svg",
    benefits: [
      "Turnkey speaker schedules, floor plans, and stage AV highlights",
      "Instant sponsor deck & RFP download capture",
      "Past expo metrics (footfall, trade booths, media reach)",
    ],
    metricCallout: {
      stat: "Turnkey",
      label: "Sponsor Deck Downloads",
    },
  },
  {
    id: "service",
    label: "Local Services (RO/Repair)",
    shortLabel: "Services",
    icon: Wrench,
    status: "Live",
    headline: "Rovala.in: Ranchi's on-demand RO service across 42 localities.",
    description:
      "For RO purifier repairs and local home service brands in Ranchi. Upfront service menu, 15-day warranty, and doorstep dispatch via WhatsApp.",
    src: "/work/rovala/desktop.webp",
    liveUrl: "https://rovala.in",
    benefits: [
      "42 Ranchi localities covered with ₹0 advance deposit",
      "15-day service revisit warranty with genuine parts guarantee",
      "1-tap WhatsApp booking sends locality and issue automatically",
    ],
    metricCallout: {
      stat: "42 Areas",
      label: "Covered in Ranchi",
    },
  },
];

export function VerticalsShowcase() {
  const [selectedId, setSelectedId] = React.useState("doctor");
  const tabListRef = React.useRef<HTMLDivElement>(null);

  const selectedIndex = VERTICALS.findIndex((v) => v.id === selectedId);
  const activeVertical = VERTICALS[selectedIndex] || VERTICALS[0];

  // Keyboard navigation for accessible tablist (ArrowLeft, ArrowRight, Home, End)
  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let nextIndex = currentIndex;
    if (e.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % VERTICALS.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + VERTICALS.length) % VERTICALS.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = VERTICALS.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextItem = VERTICALS[nextIndex];
    setSelectedId(nextItem.id);

    // Focus the next tab button
    const buttons = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    buttons?.[nextIndex]?.focus();
  };

  return (
    <section
      id="verticals"
      aria-label="Websites for specific professions"
      className="bg-[#0A0A0F] text-white py-20 md:py-28 lg:py-36 border-b border-[var(--color-dark-border)] relative"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl mb-12 md:mb-16">
          <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-white/50">
            Tailored Architecture · 06 Verticals
          </p>

          <h2 className="text-h2 font-semibold text-white tracking-tight text-balance">
            Websites for specific{" "}
            <span className="font-serif italic font-normal text-accent">
              professions.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 max-w-prose text-pretty">
            A doctor&apos;s clinic needs appointment trust; a wedding planner
            needs visual romance. Every site is designed around how your
            customers actually decide.
          </p>
        </div>

        {/* Interactive Segmented Tabs with mobile horizontal scroll-snap and edge fade */}
        <div className="relative mb-10 overflow-hidden md:overflow-visible">
          <div
            ref={tabListRef}
            role="tablist"
            aria-label="Vertical professions"
            className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {VERTICALS.map((item, idx) => {
              const isSelected = item.id === selectedId;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  id={`tab-${item.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  aria-controls={`panel-${item.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setSelectedId(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`snap-start shrink-0 inline-flex items-center gap-2 h-11 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isSelected
                      ? "bg-accent text-[var(--color-accent-fg)] shadow-accent font-bold"
                      : "bg-[#16161F] text-white/80 hover:text-white hover:bg-[#20202E] border border-[var(--color-dark-border)]"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Panel: Two-column layout (Content + DeviceFrame) */}
        <div
          id={`panel-${activeVertical.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeVertical.id}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: What this site does for you */}
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-2.5">
              <Badge variant={activeVertical.status}>
                {activeVertical.status}
              </Badge>
              <span className="font-mono text-xs uppercase tracking-wider text-white/70">
                Architecture Blueprint
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              {activeVertical.headline}
            </h3>

            <p className="text-sm sm:text-base text-white/80 text-pretty leading-relaxed">
              {activeVertical.description}
            </p>

            {/* Benefit Bullets */}
            <div className="flex flex-col gap-3 py-2 border-y border-[var(--color-dark-border)]">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/70 pt-1">
                What this site solves:
              </p>
              {activeVertical.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </span>
                  <span className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Actions for Vertical */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={whatsappLink(
                  `Hi Niraj, I saw your ${activeVertical.label} website concept and would like to build something similar.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-[#25D366] text-[#052e16] text-sm font-bold hover:bg-[#1da851] active:scale-[0.98] transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <MessageCircle className="w-4 h-4 text-[#052e16]" />
                <span>Discuss {activeVertical.shortLabel} site</span>
              </a>

              {activeVertical.liveUrl ? (
                <a
                  href={activeVertical.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 h-11 px-4 rounded-md border border-white/20 text-xs font-mono uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                >
                  <span>Visit Live Website</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <a
                  href={activeVertical.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 h-11 px-4 text-xs font-mono uppercase tracking-wider text-white/80 hover:text-white transition-colors"
                >
                  <span>View Full Mockup</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: DeviceFrame Preview */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden border border-[var(--color-dark-border)] bg-[#111118] shadow-2xl">
              {/* Browser chrome Header */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b border-[var(--color-dark-border)] bg-[#161622] gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F57]/80 shrink-0" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]/80 shrink-0" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28C840]/80 shrink-0" aria-hidden="true" />
                  <div className="hidden min-[420px]:block ml-2 px-2.5 py-0.5 rounded bg-white/10 text-[11px] font-mono text-white/80 truncate max-w-[130px] sm:max-w-xs">
                    {activeVertical.liveUrl || `https://demo.niraj.online/${activeVertical.id}`}
                  </div>
                </div>

                <span className="font-mono text-[10px] text-white/70 uppercase tracking-widest shrink-0 truncate max-w-[150px] sm:max-w-none text-right">
                  {activeVertical.metricCallout.stat} · {activeVertical.metricCallout.label}
                </span>
              </div>

              {/* Preview Image with constant aspect ratio to prevent ANY layout shift */}
              <div
                className="relative overflow-hidden w-full bg-[#0F172A]"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  key={activeVertical.id}
                  src={activeVertical.src}
                  alt={`${activeVertical.label} website layout mockup`}
                  fill
                  className="object-cover object-top select-none animate-fade-in"
                  unoptimized={activeVertical.src.endsWith(".svg")}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
