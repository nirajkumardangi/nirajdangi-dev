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
  const currentItem = selectedIndex !== null && items[selectedIndex] ? items[selectedIndex] : null;

  // Keyboard navigation for Lightbox (always called before any returns)
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
    <section aria-labelledby="heading-gallery" className="pt-12 border-t border-[var(--color-border)]">
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
          <span>{items.length} verified screenshot{items.length > 1 ? "s" : ""}</span>
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
            {/* Image Preview Container with Zoom Overlay */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Top Modal Controls */}
          <div
            className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-zinc-400">
                {selectedIndex + 1} of {items.length}
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-xs font-medium text-white truncate max-w-xs sm:max-w-md">
                {currentItem.title}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close full-screen image"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

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
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 hidden sm:flex items-center justify-center"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-6 h-6" />
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
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 hidden sm:flex items-center justify-center"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Centered High-Res Image View */}
          <div
            className="relative max-w-5xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-h-[72vh] rounded-lg overflow-hidden border border-white/15 bg-black">
              <Image
                src={currentItem.src}
                alt={currentItem.title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
                unoptimized={currentItem.src.endsWith(".svg")}
              />
            </div>

            {/* Bottom Caption */}
            <div className="mt-3 text-center max-w-2xl px-4">
              <p className="text-xs text-zinc-300 leading-relaxed">
                {currentItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
