"use client";

import * as React from "react";
import {
  MessageCircle,
  ArrowDown,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { whatsappLink, DEFAULT_WA_MESSAGE } from "@/lib/utils";
import { useReducedMotion } from "motion/react";

const HERO_PROJECTS = [
  {
    id: "doctor",
    title: "Dr. Verma Cardiology Clinic",
    vertical: "Doctor / Clinic",
    status: "Concept" as const,
    src: "/work/doctor/preview.svg",
    description: "Instant WhatsApp OPD booking with live token queue.",
  },
  {
    id: "wedding",
    title: "Utsav Luxury Weddings",
    vertical: "Wedding & Events",
    status: "Concept" as const,
    src: "/work/wedding/preview.svg",
    description: "Visual-first wedding showcase with date availability checks.",
  },
  {
    id: "ai-assistant",
    title: "AI Knowledge Assistant",
    vertical: "AI / RAG",
    status: "Concept" as const,
    src: "/work/ai-assistant/preview.svg",
    description: "Local-first document Q&A assistant with zero cloud leakage.",
  },
];

const TRUST_FACTS = [
  { icon: MapPin, text: "Ranchi, Jharkhand" },
  { icon: Clock, text: "< 24hr response time" },
  { icon: ShieldCheck, text: "100% fixed pricing" },
  { icon: CheckCircle2, text: "You own all source code" },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Gentle automatic cycling every 5 seconds, pauses on hover or if reduced motion is enabled
  React.useEffect(() => {
    if (isPaused || shouldReduceMotion) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_PROJECTS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, shouldReduceMotion]);

  const currentProject = HERO_PROJECTS[activeIndex];

  return (
    <section
      aria-label="Hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden border-b border-[var(--color-border)]"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 25%, rgba(91, 91, 214, 0.05), transparent 60%),
          linear-gradient(rgba(10, 10, 20, 0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(10, 10, 20, 0.035) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 40px 40px, 40px 40px",
      }}
    >
      <Container>
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Top: Headline & Positioning Copy (Mobile-first stack) */}
          <div className="flex flex-col items-start gap-6 max-w-3xl">
            {/* Mono Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-border)] bg-surface shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
              <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted">
                Freelance Web Designer · Ranchi
              </p>
            </div>

            {/* H1: strictly <= 12 words with ONE Instrument Serif italic accent word */}
            <h1 className="text-h1 font-bold text-ink tracking-tight text-balance">
              We build websites that help your business{" "}
              <span className="font-serif italic font-normal text-accent">
                grow.
              </span>
            </h1>

            {/* One-line Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-prose text-pretty leading-relaxed">
              Custom-designed for businesses in Ranchi and beyond — fast on
              mobile, clear to customers, built to convert.
            </p>

            {/* CTAs: WhatsApp Primary + Explore Work Secondary */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <Button
                variant="whatsapp"
                size="lg"
                href={whatsappLink(DEFAULT_WA_MESSAGE)}
                className="justify-center shadow-md w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Niraj</span>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#work"
                className="justify-center w-full sm:w-auto"
              >
                <span>See my work</span>
                <ArrowDown className="w-4 h-4 text-muted" />
              </Button>
            </div>

            {/* Trust Strip using real facts (no invented metrics) */}
            <div
              className="pt-4 border-t border-[var(--color-border)] w-full grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-6 gap-y-3"
              aria-label="Direct facts"
            >
              {TRUST_FACTS.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-xs font-mono text-muted/90"
                >
                  <Icon className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DeviceFrame with real project screenshot gently cycling */}
          <div
            className="w-full flex flex-col gap-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Device Frame Display with crossfade transition */}
            <div className="relative rounded-lg overflow-hidden border border-[var(--color-border-md)] shadow-lg bg-surface">
              {/* Browser Header Chrome */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b border-[var(--color-border)] bg-surface gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F57] shrink-0" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] shrink-0" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28C840] shrink-0" aria-hidden="true" />
                  <div className="hidden min-[420px]:block ml-2 px-2.5 py-0.5 rounded bg-bg border border-[var(--color-border)] text-[11px] font-mono text-muted truncate max-w-[130px] sm:max-w-xs">
                    https://preview.niraj.online/{currentProject.id}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Badge variant={currentProject.status}>
                    {currentProject.status}
                  </Badge>
                  <span className="hidden sm:inline-block font-mono text-[10px] text-muted uppercase">
                    {currentProject.vertical}
                  </span>
                </div>
              </div>

              {/* Crossfade Slides */}
              <div
                className="relative overflow-hidden w-full bg-bg"
                style={{ aspectRatio: "16/10" }}
              >
                {HERO_PROJECTS.map((project, idx) => {
                  const isCurrent = idx === activeIndex;
                  return (
                    <div
                      key={project.id}
                      aria-hidden={!isCurrent}
                      className="absolute inset-0 transition-opacity duration-700 ease-out-expo"
                      style={{
                        opacity: isCurrent ? 1 : 0,
                        pointerEvents: isCurrent ? "auto" : "none",
                      }}
                    >
                      <Image
                        src={project.src}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 1200px"
                        className="object-cover object-top select-none"
                        priority={idx === 0}
                        unoptimized
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cycler Project Controls & Caption */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-1">
              <p className="text-xs sm:text-sm text-muted">
                <strong className="font-semibold text-ink">
                  {currentProject.title}:
                </strong>{" "}
                {currentProject.description}
              </p>

              {/* Manual Selection Pills */}
              <div
                className="flex items-center gap-1.5 self-end sm:self-auto shrink-0"
                role="tablist"
                aria-label="Hero project previews"
              >
                {HERO_PROJECTS.map((proj, idx) => {
                  const isCurrent = idx === activeIndex;
                  return (
                    <button
                      key={proj.id}
                      type="button"
                      role="tab"
                      aria-selected={isCurrent}
                      onClick={() => setActiveIndex(idx)}
                      className={`min-h-[44px] min-w-[44px] sm:h-8 sm:min-h-0 sm:min-w-0 px-3.5 sm:px-3 rounded-full text-xs font-mono transition-all duration-200 flex items-center justify-center gap-1.5 ${
                        isCurrent
                          ? "bg-ink text-bg font-semibold"
                          : "bg-surface border border-[var(--color-border)] text-muted hover:text-ink hover:border-[var(--color-border-md)]"
                      }`}
                    >
                      <span>0{idx + 1}</span>
                      <span className="hidden md:inline">{proj.id}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
