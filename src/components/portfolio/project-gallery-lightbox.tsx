"use client";

import * as React from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Layers,
} from "lucide-react";
import type { ProjectGalleryItem } from "@/types";

interface ProjectGalleryLightboxProps {
  projectTitle?: string;
  items?: ProjectGalleryItem[];
}

export function ProjectGalleryLightbox({
  items = [],
}: ProjectGalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const isOpen = selectedIndex !== null;
  const currentItem =
    selectedIndex !== null && items[selectedIndex] ? items[selectedIndex] : null;

  // Prevent background body scroll when lightbox modal is open
  React.useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Keyboard navigation for Lightbox
  React.useEffect(() => {
    if (!isOpen || items.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + items.length) % items.length : null
        );
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % items.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, items.length]);

  // If no gallery items exist, omit the entire section cleanly
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="heading-gallery"
      className="pt-12 border-t border-[var(--color-border)]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-accent font-semibold">02</span>
            <h2
              id="heading-gallery"
              className="font-mono text-xs uppercase tracking-widest text-muted"
            >
              Screenshots &amp; Visual Showcase
            </h2>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
            Production UI &amp; Page Details
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-muted">
          <Layers className="w-3.5 h-3.5 text-accent" />
          <span>
            {items.length} verified screenshot{items.length > 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className="group cursor-pointer rounded-xl overflow-hidden border border-[var(--color-border)] bg-surface hover:border-[var(--color-border-md)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Preview Container with Zoom Overlay (exact 16:9 ratio to prevent cropping) */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                unoptimized={item.src.endsWith(".svg")}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-black text-xs font-medium shadow-md backdrop-blur-xs">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </span>
              </div>
            </div>

            {/* Thumbnail Details */}
            <div className="p-4 flex flex-col gap-1.5">
              {item.category && (
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
                  {item.category}
                </span>
              )}
              <h4 className="text-sm font-semibold text-ink group-hover:text-accent transition-colors leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-muted leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {isOpen && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${currentItem.title} full-screen viewer`}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 cursor-pointer select-none animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          {/* TOP CONTROLS BAR */}
          {/* Top Left Counter & Title */}
          <div
            className="fixed top-4 left-4 sm:top-6 sm:left-6 z-[1000] flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-zinc-900/90 border border-white/15 backdrop-blur-md text-xs font-mono pointer-events-none shadow-xl"
          >
            <span className="text-accent font-semibold">
              {selectedIndex + 1}/{items.length}
            </span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-200 font-sans truncate max-w-[180px] sm:max-w-xs md:max-w-md">
              {currentItem.title}
            </span>
          </div>

          {/* Top Right Prominent Close Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[1000] flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/95 hover:bg-zinc-800 active:scale-95 text-white border border-white/25 hover:border-white/50 shadow-2xl transition-all cursor-pointer group focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close modal viewer (Esc)"
          >
            <span className="text-xs font-mono font-medium tracking-wide text-zinc-300 group-hover:text-white">
              Close
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-zinc-400 group-hover:text-zinc-200">
              Esc
            </span>
            <X className="w-4 h-4 text-white group-hover:rotate-90 transition-transform duration-200" />
          </button>

          {/* Previous Button */}
          {items.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  (prev) => (prev! - 1 + items.length) % items.length
                );
              }}
              className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 active:scale-95 text-white border border-white/20 shadow-2xl transition-all z-[1000] flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5 text-zinc-300 group-hover:text-white group-hover:-translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Next Button */}
          {items.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev! + 1) % items.length);
              }}
              className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 active:scale-95 text-white border border-white/20 shadow-2xl transition-all z-[1000] flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5 text-zinc-300 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Centered Image Card (stops click propagation so only clicking image card doesn't close) */}
          <div
            className="relative flex flex-col items-center max-w-5xl max-h-[82vh] cursor-default z-[999] mx-auto px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 16:9 Image Container */}
            <div className="relative rounded-xl overflow-hidden border border-white/20 bg-black shadow-2xl flex items-center justify-center max-h-[72vh]">
              <Image
                src={currentItem.src}
                alt={currentItem.title}
                width={1440}
                height={810}
                priority
                className="max-h-[72vh] w-auto h-auto max-w-full object-contain select-none"
                unoptimized={currentItem.src.endsWith(".svg")}
              />
            </div>

            {/* Bottom Caption Pill */}
            {currentItem.description && (
              <div className="mt-3 text-center max-w-xl px-4 py-2 rounded-lg bg-zinc-900/90 border border-white/10 shadow-lg">
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {currentItem.description}
                </p>
              </div>
            )}
          </div>

          {/* Dismissal Hint Footer */}
          <div className="fixed bottom-4 inset-x-0 flex justify-center pointer-events-none z-[1000]">
            <span className="text-[11px] font-mono text-zinc-400 bg-zinc-950/80 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
              Click anywhere outside or press Esc to close
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
