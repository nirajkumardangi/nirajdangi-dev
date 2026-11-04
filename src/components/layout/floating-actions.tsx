"use client";

import { MessageCircle, Phone } from "lucide-react";
import { whatsappLink, phoneLink, DEFAULT_WA_MESSAGE } from "@/lib/utils";
import { trackWhatsAppClick, trackCallClick } from "@/lib/analytics";

export function FloatingActions() {
  return (
    <>
      {/* ── 1. Desktop Floating WhatsApp Button (hidden on mobile) ── */}
      <aside
        aria-label="Quick contact"
        className="hidden md:flex fixed bottom-8 right-8 z-[200] items-center"
      >
        <a
          href={whatsappLink(DEFAULT_WA_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("Desktop Floating Button", DEFAULT_WA_MESSAGE)}
          className="group flex items-center gap-2.5 h-12 px-4 rounded-full bg-[#25D366] text-[#052e16] font-semibold text-sm shadow-lg hover:bg-[#1da851] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out-expo border border-black/10 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#052e16] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#052e16]" />
          </span>
          <MessageCircle className="w-5 h-5 text-[#052e16]" />
          <span>Chat on WhatsApp</span>
        </a>
      </aside>

      {/* ── 2. Mobile Bottom Bar (hidden on desktop) ── */}
      <nav
        aria-label="Mobile quick actions"
        className="md:hidden fixed bottom-0 left-0 right-0 z-[200] bg-surface/95 backdrop-blur-md border-t border-[var(--color-border)] shadow-lg px-4 pt-2.5 pb-[calc(env(safe-area-inset-bottom,0px)+0.75rem)]"
      >
        <div className="flex items-center gap-2.5 max-w-md mx-auto">
          {/* Secondary: Quick Call */}
          <a
            href={phoneLink()}
            onClick={() => trackCallClick("Mobile Bottom Bar")}
            className="flex items-center justify-center gap-1.5 h-11 px-4 rounded-md border border-[var(--color-border-md)] bg-surface text-ink text-sm font-medium hover:bg-[rgba(10,10,20,0.03)] active:scale-[0.98] transition-all min-w-[90px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Phone className="w-4 h-4 text-muted" />
            <span>Call</span>
          </a>

          {/* Primary: WhatsApp Enquiry */}
          <a
            href={whatsappLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("Mobile Bottom Bar", DEFAULT_WA_MESSAGE)}
            className="flex-1 flex items-center justify-center gap-2 h-11 px-4 rounded-md bg-[#25D366] text-[#052e16] text-sm font-bold shadow-sm hover:bg-[#1da851] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-1"
          >
            <MessageCircle className="w-4 h-4 text-[#052e16]" />
            <span>WhatsApp Niraj</span>
          </a>
        </div>
      </nav>
    </>
  );
}
