import Link from "next/link";
import { ArrowUpRight, MessageCircle, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { siteConfig } from "@/data/site";
import { whatsappLink, DEFAULT_WA_MESSAGE } from "@/lib/utils";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[var(--color-border)] bg-surface pt-20 pb-16 md:pt-28 md:pb-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[var(--color-border)]">
          {/* Brand & Bio column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link
              href="/"
              className="inline-flex items-center font-sans text-2xl font-bold tracking-tight text-ink min-h-[44px]"
            >
              <span>Niraj</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent ml-0.5 inline-block" />
            </Link>

            <p className="text-muted text-base max-w-sm text-pretty leading-relaxed">
              Precision websites and AI automation built for doctors, studios,
              and event brands. Designed for enquiries, built to keep forever.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(10,10,20,0.04)] border border-[var(--color-border)] text-ink font-mono text-[11px] tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                Based in Ranchi, working worldwide
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <Eyebrow className="mb-2">Navigation</Eyebrow>
            <ul className="flex flex-col gap-1 text-sm">
              <li>
                <Link
                  href="/#work"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center gap-1 min-h-[44px]"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center gap-1 min-h-[44px]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center gap-1 min-h-[44px]"
                >
                  Pricing &amp; Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center gap-1 min-h-[44px]"
                >
                  About Niraj
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center gap-1 min-h-[44px]"
                >
                  Project Enquiry &amp; Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center gap-1 min-h-[44px]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/design-system"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center gap-1 min-h-[44px]"
                >
                  Design System (v2)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <Eyebrow className="mb-2">Direct Contact</Eyebrow>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={whatsappLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between p-3 rounded-md border border-[var(--color-border)] hover:border-[rgba(10,10,20,0.2)] bg-bg/50 hover:bg-bg transition-all min-h-[44px]"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span className="font-medium text-ink">WhatsApp</span>
                </div>
                <span className="font-mono text-xs text-muted group-hover:text-ink flex items-center gap-0.5">
                  Direct message <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href={`mailto:${siteConfig.owner.email}`}
                className="group inline-flex items-center justify-between p-3 rounded-md border border-[var(--color-border)] hover:border-[rgba(10,10,20,0.2)] bg-bg/50 hover:bg-bg transition-all min-h-[44px]"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="font-medium text-ink">Email</span>
                </div>
                <span className="font-mono text-xs text-muted group-hover:text-ink flex items-center gap-0.5">
                  Send note <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted font-semibold">
                Network:
              </span>
              <a
                href={siteConfig.owner.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted hover:text-ink transition-colors inline-flex items-center gap-1 min-h-[44px]"
              >
                GitHub <ArrowUpRight className="w-3 h-3 text-muted" />
              </a>
              <span className="text-muted/40">·</span>
              <a
                href={siteConfig.owner.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted hover:text-ink transition-colors inline-flex items-center gap-1 min-h-[44px]"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3 text-muted" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <p>© {currentYear} {siteConfig.owner.name}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="hover:text-ink transition-colors min-h-[32px] inline-flex items-center">Privacy</Link>
            <span>·</span>
            <span>Studio Precision</span>
            <span>·</span>
            <span>Next.js App Router</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
