"use client";

import * as React from "react";
import Image from "next/image";
import {
  Monitor,
  Smartphone,
  ExternalLink,
  RotateCw,
  ShieldCheck,
  Sparkles,
  Lock,
} from "lucide-react";

interface DeviceMockupPreviewProps {
  title: string;
  liveUrl?: string;
  supportsIframe?: boolean;
  iframeBlockedReason?: string;
  desktopImage: string;
  mobileImage?: string;
  role?: string;
}

export function DeviceMockupPreview({
  title,
  liveUrl,
  supportsIframe = false,
  iframeBlockedReason,
  desktopImage,
  mobileImage,
  role,
}: DeviceMockupPreviewProps) {
  const [device, setDevice] = React.useState<"desktop" | "mobile">("desktop");
  const [mode, setMode] = React.useState<"iframe" | "capture">(
    supportsIframe && liveUrl ? "iframe" : "capture"
  );
  const [iframeKey, setIframeKey] = React.useState(0);
  const [isLoadingIframe, setIsLoadingIframe] = React.useState(true);

  const desktopViewportRef = React.useRef<HTMLDivElement>(null);
  const mobileViewportRef = React.useRef<HTMLDivElement>(null);
  const [desktopScale, setDesktopScale] = React.useState(0.7);
  const [mobileScale, setMobileScale] = React.useState(0.9);

  React.useEffect(() => {
    const updateDesktopScale = () => {
      if (desktopViewportRef.current) {
        const width = desktopViewportRef.current.clientWidth;
        if (width > 0) {
          // Native desktop width: 1440px
          setDesktopScale(width / 1440);
        }
      }
    };

    const updateMobileScale = () => {
      if (mobileViewportRef.current) {
        const width = mobileViewportRef.current.clientWidth;
        if (width > 0) {
          // Native mobile flagship width: 390px
          setMobileScale(width / 390);
        }
      }
    };

    updateDesktopScale();
    updateMobileScale();

    let desktopObserver: ResizeObserver | null = null;
    let mobileObserver: ResizeObserver | null = null;

    if (typeof ResizeObserver !== "undefined") {
      if (desktopViewportRef.current) {
        desktopObserver = new ResizeObserver(() => updateDesktopScale());
        desktopObserver.observe(desktopViewportRef.current);
      }
      if (mobileViewportRef.current) {
        mobileObserver = new ResizeObserver(() => updateMobileScale());
        mobileObserver.observe(mobileViewportRef.current);
      }
    }

    const handleWindowResize = () => {
      updateDesktopScale();
      updateMobileScale();
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      desktopObserver?.disconnect();
      mobileObserver?.disconnect();
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [device, mode]);

  const hasMobileImage = Boolean(mobileImage);

  const handleRefresh = () => {
    setIsLoadingIframe(true);
    setIframeKey((prev) => prev + 1);
  };

  const currentDisplayUrl = liveUrl || `https://demo.niraj.online`;

  return (
    <div className="w-full flex flex-col items-center mb-16">
      {/* Top Device & Mode Control Bar */}
      <div className="w-full max-w-6xl flex flex-wrap items-center justify-between gap-3 p-2.5 mb-6 rounded-2xl bg-surface border border-[var(--color-border)] shadow-xs">
        {/* Left: Device Switcher (16:9 Desktop Monitor / Bezel-less Mobile) */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-bg border border-[var(--color-border)]">
          <button
            type="button"
            onClick={() => setDevice("desktop")}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              device === "desktop"
                ? "bg-ink text-bg font-semibold shadow-xs"
                : "text-muted hover:text-ink"
            }`}
            aria-label="Switch to 16:9 Desktop Monitor Preview"
          >
            <Monitor className="w-4 h-4" />
            <span>Desktop (16:9)</span>
          </button>

          <button
            type="button"
            onClick={() => setDevice("mobile")}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              device === "mobile"
                ? "bg-ink text-bg font-semibold shadow-xs"
                : "text-muted hover:text-ink"
            }`}
            aria-label="Switch to Bezel-less Mobile Preview"
          >
            <Smartphone className="w-4 h-4" />
            <span>Bezel-less Mobile</span>
          </button>
        </div>

        {/* Center: Mode Switcher (Live Iframe vs High-Res Capture) */}
        <div className="flex items-center gap-2">
          {liveUrl && supportsIframe ? (
            <div className="flex items-center gap-1 p-1 rounded-xl bg-bg border border-[var(--color-border)]">
              <button
                type="button"
                onClick={() => setMode("iframe")}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  mode === "iframe"
                    ? "bg-accent text-white font-semibold shadow-xs"
                    : "text-muted hover:text-ink"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Interactive Site</span>
              </button>

              <button
                type="button"
                onClick={() => setMode("capture")}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  mode === "capture"
                    ? "bg-ink text-bg font-semibold shadow-xs"
                    : "text-muted hover:text-ink"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Crisp HD Capture</span>
              </button>
            </div>
          ) : liveUrl && !supportsIframe ? (
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Security Protected (SAMEORIGIN)</span>
            </div>
          ) : null}
        </div>

        {/* Right: Quick External Actions */}
        <div className="flex items-center gap-2">
          {mode === "iframe" && liveUrl && (
            <button
              type="button"
              onClick={handleRefresh}
              className="p-1.5 rounded-lg text-muted hover:text-ink hover:bg-bg transition-colors"
              title="Reload Preview"
              aria-label="Reload Preview"
            >
              <RotateCw className="w-4 h-4" />
            </button>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-white text-xs font-medium hover:bg-accent/90 transition-all shadow-xs"
            >
              <span>Open Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Security notice for blocked iframe sites (e.g. rovala.in) */}
      {!supportsIframe && liveUrl && iframeBlockedReason && (
        <div className="w-full max-w-6xl mb-4 px-4 py-2.5 rounded-xl bg-surface border border-[var(--color-border)] flex items-center justify-between text-xs text-muted">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>{iframeBlockedReason}</span>
          </div>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-semibold text-accent hover:underline ml-4"
          >
            Launch in new tab ↗
          </a>
        </div>
      )}

      {/* DEVICE MOCKUP CONTAINER */}
      <div className="w-full max-w-6xl flex justify-center items-center">
        {device === "desktop" ? (
          /* ============================================================ */
          /* 🖥️ PREMIUM 16:9 BEZEL-LESS DESKTOP MONITOR                  */
          /* ============================================================ */
          <div className="w-full flex flex-col items-center">
            {/* Monitor Outer Chassis with Bezel-less Micro-Rim */}
            <div className="w-full rounded-[18px] p-1.5 sm:p-2 bg-gradient-to-b from-[#2F2F3D] via-[#1A1A22] to-[#0E0E14] border border-white/15 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.6)] relative group">
              {/* Subtle top edge glare reflection */}
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              {/* Edge-to-Edge Bezel-less Display Panel */}
              <div className="w-full rounded-[14px] overflow-hidden bg-black border border-white/5 flex flex-col">
                {/* Ultra-slim Minimal Browser Bar */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-1.5 bg-[#14141B] border-b border-white/5 select-none text-[11px] font-mono text-zinc-400">
                  {/* Traffic lights */}
                  <div className="flex items-center gap-1.5 w-20">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/40" />
                  </div>

                  {/* Centered Floating Address Pill */}
                  <div className="flex-1 max-w-md sm:max-w-lg mx-2 px-3 py-1 rounded-full bg-[#0A0A0F] border border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400 shadow-inner">
                    <div className="flex items-center gap-1.5 truncate">
                      <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{currentDisplayUrl}</span>
                    </div>
                    <span className="hidden sm:inline-block text-[9px] uppercase tracking-wider text-accent font-semibold px-2 py-0.5 rounded-full bg-accent/10">
                      16:9 Widescreen
                    </span>
                  </div>

                  {/* Right role/spec tag */}
                  <div className="flex items-center justify-end gap-2 w-24">
                    {role && (
                      <span className="hidden sm:inline-block font-mono text-[9px] text-zinc-400 uppercase truncate">
                        {role}
                      </span>
                    )}
                  </div>
                </div>

                {/* 16:9 Aspect Ratio Viewport with Scaled Desktop Rendering */}
                <div
                  ref={desktopViewportRef}
                  className="relative w-full aspect-[16/9] bg-[#0A0A0F] overflow-hidden"
                >
                  {mode === "iframe" && liveUrl && supportsIframe ? (
                    <>
                      {isLoadingIframe && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface gap-3 z-10">
                          <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
                          <p className="font-mono text-xs text-muted">
                            Loading 16:9 desktop live {title} website...
                          </p>
                        </div>
                      )}
                      {/* Scaled Desktop Canvas (1440x810 viewport ensures genuine desktop UI & no mobile hamburger) */}
                      <div
                        className="absolute top-0 left-0 pointer-events-auto"
                        style={{
                          width: 1440,
                          height: 810,
                          transform: `scale(${desktopScale})`,
                          transformOrigin: "top left",
                        }}
                      >
                        <iframe
                          key={iframeKey}
                          src={liveUrl}
                          title={`${title} 16:9 desktop live interactive preview`}
                          style={{ width: 1440, height: 810 }}
                          className="w-[1440px] h-[810px] border-0 select-auto"
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                          loading="lazy"
                          onLoad={() => setIsLoadingIframe(false)}
                        />
                      </div>
                    </>
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={desktopImage}
                        alt={`${title} 16:9 Desktop preview`}
                        fill
                        priority
                        sizes="(max-width: 1400px) 100vw, 1400px"
                        className="object-cover object-top select-none"
                        unoptimized={desktopImage.endsWith(".svg")}
                      />
                    </div>
                  )}
                </div>

                {/* Micro Bezel Bottom Rim with Centered Power LED */}
                <div className="w-full h-1 bg-[#1A1A22] border-t border-white/5 flex items-center justify-center">
                  <div className="w-1.5 h-0.5 rounded-full bg-emerald-400/80 shadow-[0_0_6px_#10B981]" />
                </div>
              </div>
            </div>

            {/* Futuristic Minimalist Monitor Stand */}
            <div className="flex flex-col items-center">
              {/* Stand Neck / Articulated Column */}
              <div className="w-12 sm:w-16 h-7 sm:h-10 bg-gradient-to-b from-[#202028] via-[#2A2A36] to-[#14141A] border-x border-white/10 shadow-inner" />
              {/* Sleek Low-Profile Geometric Pedestal */}
              <div className="w-48 sm:w-72 h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#181820] via-[#323240] to-[#181820] border-t border-white/20 shadow-[0_15px_30px_rgba(0,0,0,0.6)]" />
              {/* Ambient LED Bias Light Glow Reflection */}
              <div className="w-72 sm:w-96 h-3 bg-accent/20 blur-xl -mt-1 pointer-events-none" />
            </div>
          </div>
        ) : (
          /* ============================================================ */
          /* 📱 BEZEL-LESS FLAGSHIP MOBILE (Modern Infinity Display)      */
          /* ============================================================ */
          <div className="flex flex-col items-center py-4">
            {/* Flagship Chassis with Edge-to-Edge Curves & Micro Titanium Rim */}
            <div className="relative w-[310px] sm:w-[350px] md:w-[370px] rounded-[36px] p-2 sm:p-2.5 bg-gradient-to-b from-[#383846] via-[#1F1F28] to-[#121218] border border-white/20 shadow-[0_35px_80px_-15px_rgba(0,0,0,0.65)]">
              {/* Subtle metallic antenna bands */}
              <div className="absolute -left-1 top-20 w-1 h-3 rounded-l bg-zinc-500/80" />
              <div className="absolute -left-1 bottom-24 w-1 h-3 rounded-l bg-zinc-500/80" />
              <div className="absolute -right-1 top-28 w-1 h-10 rounded-r bg-zinc-600" />
              <div className="absolute -right-1 top-44 w-1 h-14 rounded-r bg-zinc-600" />

              {/* Edge-to-Edge Bezel-less Display Glass */}
              <div className="relative w-full rounded-[28px] overflow-hidden bg-black border border-white/10 flex flex-col">
                {/* Modern Punch-Hole Status Bar */}
                <div className="w-full h-9 bg-black/90 backdrop-blur-md px-5 flex items-center justify-between z-20 select-none text-white text-[11px] font-sans">
                  {/* Left: Time (12:45) */}
                  <span className="font-semibold tracking-tight text-zinc-200">
                    12:45
                  </span>

                  {/* Center: Tiny Punch-Hole Camera Cutout (Bezel-less Flagship style) */}
                  <div className="w-3.5 h-3.5 rounded-full bg-black ring-1 ring-white/15 flex items-center justify-center shadow-inner">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0A1020] flex items-center justify-center">
                      <div className="w-0.5 h-0.5 rounded-full bg-[#0088FF]/70" />
                    </div>
                  </div>

                  {/* Right: Modern Flagship Connectivity (5G, Wi-Fi, 98% Battery) */}
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <span className="text-[10px] font-mono font-medium">5G</span>
                    {/* Wi-Fi Wave Indicator */}
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-5c-2.8 0-5.3 1.1-7.1 2.9l1.4 1.4C7.7 15.9 9.7 15 12 15s4.3.9 5.7 2.3l1.4-1.4C17.3 14.1 14.8 13 12 13zm0-5C7.6 8 3.6 9.8.8 12.6l1.4 1.4C4.6 11.6 8.1 10 12 10s7.4 1.6 9.8 4l1.4-1.4C20.4 9.8 16.4 8 12 8z" />
                    </svg>
                    {/* Battery Capsule */}
                    <div className="flex items-center gap-0.5">
                      <span className="text-[9px] font-mono">98%</span>
                      <div className="w-4 h-2 rounded-[2px] border border-white/70 p-[1px] flex items-center">
                        <div className="w-full h-full bg-emerald-400 rounded-2xs" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Viewport (19.5:9 Ultra-Tall Aspect Ratio) */}
                <div
                  ref={mobileViewportRef}
                  className="relative w-full aspect-[9/19.5] bg-[#0A0A0F] overflow-hidden"
                >
                  {mode === "iframe" && liveUrl && supportsIframe ? (
                    <>
                      {isLoadingIframe && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface gap-3 z-10">
                          <div className="w-7 h-7 rounded-full border-2 border-accent border-t-transparent animate-spin" />
                          <p className="font-mono text-[11px] text-muted">
                            Loading mobile preview...
                          </p>
                        </div>
                      )}
                      {/* Scaled Mobile Canvas (390x845 native resolution) */}
                      <div
                        className="absolute top-0 left-0 pointer-events-auto"
                        style={{
                          width: 390,
                          height: 845,
                          transform: `scale(${mobileScale})`,
                          transformOrigin: "top left",
                        }}
                      >
                        <iframe
                          key={`m-${iframeKey}`}
                          src={liveUrl}
                          title={`${title} bezel-less mobile preview`}
                          style={{ width: 390, height: 845 }}
                          className="w-[390px] h-[845px] border-0 select-auto"
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                          loading="lazy"
                          onLoad={() => setIsLoadingIframe(false)}
                        />
                      </div>
                    </>
                  ) : hasMobileImage && mobileImage ? (
                    <Image
                      src={mobileImage}
                      alt={`${title} bezel-less mobile preview`}
                      fill
                      priority
                      sizes="(max-width: 480px) 100vw, 400px"
                      className="object-cover object-top select-none"
                    />
                  ) : (
                    <Image
                      src={desktopImage}
                      alt={`${title} mobile preview`}
                      fill
                      priority
                      sizes="(max-width: 480px) 100vw, 400px"
                      className="object-cover object-top select-none"
                      unoptimized={desktopImage.endsWith(".svg")}
                    />
                  )}
                </div>

                {/* Modern Android Gesture Bar */}
                <div className="w-full h-5 bg-black/90 backdrop-blur-md flex items-center justify-center z-20">
                  <div className="w-24 h-1 rounded-full bg-white/50" />
                </div>
              </div>
            </div>

            {/* Subtle Flagship Drop Shadow */}
            <div className="w-52 h-4 rounded-full bg-black/50 blur-lg mt-3" />
          </div>
        )}
      </div>
    </div>
  );
}
