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

  const hasMobileImage = Boolean(mobileImage);

  const handleRefresh = () => {
    setIsLoadingIframe(true);
    setIframeKey((prev) => prev + 1);
  };

  const currentDisplayUrl = liveUrl || `https://demo.niraj.online`;

  return (
    <div className="w-full flex flex-col items-center mb-16">
      {/* Top Device & Mode Control Bar */}
      <div className="w-full max-w-5xl flex flex-wrap items-center justify-between gap-3 p-2.5 mb-6 rounded-2xl bg-surface border border-[var(--color-border)] shadow-xs">
        {/* Left: Device Switcher (Desktop / Mobile) */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-bg border border-[var(--color-border)]">
          <button
            type="button"
            onClick={() => setDevice("desktop")}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              device === "desktop"
                ? "bg-ink text-bg font-semibold shadow-xs"
                : "text-muted hover:text-ink"
            }`}
            aria-label="Switch to iMac Desktop Preview"
          >
            <Monitor className="w-4 h-4" />
            <span>iMac Desktop</span>
          </button>

          <button
            type="button"
            onClick={() => setDevice("mobile")}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              device === "mobile"
                ? "bg-ink text-bg font-semibold shadow-xs"
                : "text-muted hover:text-ink"
            }`}
            aria-label="Switch to iPhone Mobile Preview"
          >
            <Smartphone className="w-4 h-4" />
            <span>iPhone Mobile</span>
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
        <div className="w-full max-w-5xl mb-4 px-4 py-2.5 rounded-xl bg-surface border border-[var(--color-border)] flex items-center justify-between text-xs text-muted">
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
      <div className="w-full max-w-5xl flex justify-center items-center">
        {device === "desktop" ? (
          /* 💻 PREMIUM IMAC DESKTOP MOCKUP */
          <div className="w-full flex flex-col items-center">
            {/* iMac Screen Chassis */}
            <div className="w-full rounded-[24px] p-2.5 sm:p-3 bg-gradient-to-b from-[#2E2E38] via-[#1F1F24] to-[#121217] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)]">
              {/* Ultra-thin Inner Bezel */}
              <div className="w-full rounded-[18px] overflow-hidden bg-black border border-black/40 flex flex-col">
                {/* Top Bezel with FaceTime Camera Dot */}
                <div className="w-full h-4 bg-[#0E0E12] flex items-center justify-center relative">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1C1C24] ring-1 ring-white/10 flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-[#0084FF]/60" />
                  </div>
                </div>

                {/* macOS Safari Browser Chrome Bar */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#1A1A22] border-b border-white/5 select-none">
                  {/* Traffic lights */}
                  <div className="flex items-center gap-1.5 w-16">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#群体A123]/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/40" />
                  </div>

                  {/* Centered URL Address Bar */}
                  <div className="flex-1 max-w-sm sm:max-w-md mx-2 px-3 py-1 rounded-md bg-[#0E0E14] border border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <div className="flex items-center gap-1.5 truncate">
                      <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{currentDisplayUrl}</span>
                    </div>
                    {liveUrl && (
                      <span className="hidden sm:inline-block text-[9px] uppercase tracking-wider text-zinc-400 font-mono">
                        SSL
                      </span>
                    )}
                  </div>

                  {/* Right role tag */}
                  <div className="flex items-center justify-end gap-2 w-20">
                    {role && (
                      <span className="hidden sm:inline-block font-mono text-[9px] text-zinc-400 uppercase truncate">
                        {role}
                      </span>
                    )}
                  </div>
                </div>

                {/* Screen Viewport (16:10 Aspect Ratio) */}
                <div className="relative w-full aspect-[16/10] bg-[#0A0A0F] overflow-hidden">
                  {mode === "iframe" && liveUrl && supportsIframe ? (
                    <>
                      {isLoadingIframe && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface gap-3 z-10">
                          <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
                          <p className="font-mono text-xs text-muted">
                            Loading live {title} website...
                          </p>
                        </div>
                      )}
                      <iframe
                        key={iframeKey}
                        src={liveUrl}
                        title={`${title} live interactive preview`}
                        className="w-full h-full border-0 select-auto"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        loading="lazy"
                        onLoad={() => setIsLoadingIframe(false)}
                      />
                    </>
                  ) : (
                    <Image
                      src={desktopImage}
                      alt={`${title} iMac desktop preview`}
                      fill
                      priority
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      className="object-cover object-top select-none"
                      unoptimized={desktopImage.endsWith(".svg")}
                    />
                  )}
                </div>

                {/* Bottom iMac Aluminum Chin */}
                <div className="w-full h-7 sm:h-9 bg-gradient-to-r from-[#202026] via-[#2A2A34] to-[#202026] border-t border-white/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>
            </div>

            {/* iMac Stand Neck & Base */}
            <div className="flex flex-col items-center">
              <div className="w-20 sm:w-28 h-8 sm:h-12 bg-gradient-to-b from-[#2A2A34] to-[#1E1E24] border-x border-white/10 shadow-inner" />
              <div className="w-40 sm:w-56 h-3 sm:h-4 rounded-t-sm rounded-b-md bg-gradient-to-r from-[#1C1C22] via-[#33333E] to-[#1C1C22] border-t border-white/15 shadow-[0_12px_24px_rgba(0,0,0,0.5)]" />
            </div>
          </div>
        ) : (
          /* 📱 PREMIUM IPHONE MOBILE MOCKUP */
          <div className="flex flex-col items-center py-4">
            <div className="relative w-[320px] sm:w-[360px] md:w-[380px] rounded-[52px] p-3.5 bg-gradient-to-b from-[#383842] via-[#22222A] to-[#16161C] border border-white/15 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.55)]">
              {/* Outer side buttons */}
              <div className="absolute -left-1 top-24 w-1 h-8 rounded-l bg-zinc-600" />
              <div className="absolute -left-1 top-36 w-1 h-12 rounded-l bg-zinc-600" />
              <div className="absolute -left-1 top-52 w-1 h-12 rounded-l bg-zinc-600" />
              <div className="absolute -right-1 top-32 w-1 h-16 rounded-r bg-zinc-600" />

              {/* Inner screen frame */}
              <div className="relative w-full rounded-[44px] overflow-hidden bg-black border border-black/80 flex flex-col">
                {/* Status Bar */}
                <div className="w-full h-11 bg-black px-6 flex items-center justify-between z-20 select-none">
                  <span className="font-semibold text-xs tracking-tight text-white font-sans">
                    9:41
                  </span>

                  {/* Dynamic Island */}
                  <div className="w-24 h-6 rounded-full bg-black ring-1 ring-white/10 flex items-center justify-between px-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0A0A10] ring-1 ring-white/15 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#0084FF]/70" />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
                  </div>

                  <div className="flex items-center gap-1.5 text-white">
                    <span className="text-[10px] font-mono">5G</span>
                    <div className="w-4 h-2.5 rounded-sm border border-white/70 p-0.5 flex items-center">
                      <div className="w-full h-full bg-white rounded-2xs" />
                    </div>
                  </div>
                </div>

                {/* Mobile Viewport */}
                <div className="relative w-full aspect-[9/19.5] bg-[#0A0A0F] overflow-hidden">
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
                      <iframe
                        key={`m-${iframeKey}`}
                        src={liveUrl}
                        title={`${title} iPhone mobile preview`}
                        className="w-full h-full border-0 select-auto"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        loading="lazy"
                        onLoad={() => setIsLoadingIframe(false)}
                      />
                    </>
                  ) : hasMobileImage && mobileImage ? (
                    <Image
                      src={mobileImage}
                      alt={`${title} iPhone mobile preview`}
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

                {/* Home Indicator */}
                <div className="w-full h-6 bg-black flex items-center justify-center z-20">
                  <div className="w-32 h-1 rounded-full bg-white/40" />
                </div>
              </div>
            </div>

            <div className="w-48 h-4 rounded-full bg-black/40 blur-md mt-2" />
          </div>
        )}
      </div>
    </div>
  );
}
