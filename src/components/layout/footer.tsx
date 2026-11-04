import Link from "next/link";
import { ArrowUpRight, MessageCircle, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { siteConfig } from "@/data/site";
import { whatsappLink, DEFAULT_WA_MESSAGE } from "@/lib/utils";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[var(--color-border)] bg-surface pt-16 pb-14 md:pt-24 md:pb-16">
      <Container>
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[var(--color-border)]">
          {/* Brand & Bio column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link
              href="/"
              className="inline-flex items-center font-sans text-2xl font-bold tracking-tight text-ink min-h-[44px]"
            >
              <span>Niraj</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent ml-0.5 inline-block" />
            </Link>

            <p className="text-muted text-sm leading-relaxed max-w-sm text-pretty">
              Precision web development and AI automation built for healthcare
              professionals, independent studios, and growing businesses.
              Clean architecture, high performance, and full code ownership.
            </p>

            <div className="flex flex-col gap-2 pt-1 text-xs font-mono text-muted">
              <span className="inline-flex items-center gap-1.5 text-ink">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                Ranchi, Jharkhand, India · Global Remote
              </span>
              <span>IST (UTC+5:30) · Response within 2 hours</span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.owner.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted hover:text-ink transition-colors inline-flex items-center gap-1 min-h-[44px]"
              >
                GitHub <ArrowUpRight className="w-3 h-3 text-muted" />
              </a>
              <span className="text-muted/40">·</span>
              <a
                href={siteConfig.owner.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted hover:text-ink transition-colors inline-flex items-center gap-1 min-h-[44px]"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3 text-muted" />
              </a>
            </div>
          </div>

          {/* Solutions links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <Eyebrow className="mb-1 text-xs">Solutions</Eyebrow>
            <ul className="flex flex-col text-sm">
              <li>
                <Link
                  href="/solutions"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center font-medium min-h-[44px]"
                >
                  All Solutions Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/portfolio-personal-branding-websites"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center min-h-[44px]"
                >
                  Portfolio &amp; Branding
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/healthcare-medical-portals"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center min-h-[44px]"
                >
                  Healthcare &amp; Clinics
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/ecommerce-development"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center min-h-[44px]"
                >
                  E-commerce Stores
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/ai-chatbots-automation"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center min-h-[44px]"
                >
                  AI Chatbots &amp; RAG
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/nonprofit-community-websites"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center min-h-[44px]"
                >
                  Nonprofit &amp; Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations & Core Navigation */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <Eyebrow className="mb-1 text-xs">Locations &amp; Hub</Eyebrow>
            <ul className="flex flex-col text-sm">
              <li>
                <Link
                  href="/website-developer-ranchi"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center min-h-[44px]"
                >
                  Ranchi Developer
                </Link>
              </li>
              <li>
                <Link
                  href="/website-developer-jharkhand"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center min-h-[44px]"
                >
                  Jharkhand Web Dev
                </Link>
              </li>
              <li>
                <Link
                  href="/hire-developer-india"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center min-h-[44px]"
                >
                  Hire in India (USD/INR)
                </Link>
              </li>
              <li>
                <Link
                  href="/#work"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center min-h-[44px]"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center min-h-[44px]"
                >
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center min-h-[44px]"
                >
                  Technical Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact CTAs */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <Eyebrow className="mb-1 text-xs">Quick Direct Contact</Eyebrow>
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

              <Link
                href="/contact"
                className="inline-flex items-center justify-center p-3 rounded-md border border-[var(--color-border)] hover:border-ink/20 bg-bg text-ink font-medium text-xs font-mono transition-all min-h-[44px]"
              >
                Schedule Consultation →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <p>© {currentYear} {siteConfig.owner.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/privacy"
              className="hover:text-ink transition-colors min-h-[44px] inline-flex items-center"
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link
              href="/terms"
              className="hover:text-ink transition-colors min-h-[44px] inline-flex items-center"
            >
              Terms of Service
            </Link>
            <span>·</span>
            <span>50% Advance &amp; Code Ownership</span>
            <span>·</span>
            <span>Ranchi, Jharkhand</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
