"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn, whatsappLink, QUOTE_WA_MESSAGE } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>("");
  const pathname = usePathname();
  const menuRef = React.useRef<HTMLDivElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const openButtonRef = React.useRef<HTMLButtonElement>(null);

  // Monitor scroll state for transparent -> hairline glass transition
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection on homepage
      if (pathname === "/") {
        const sections = ["work", "services", "pricing", "about"];
        const scrollPosition = window.scrollY + 120;
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              return;
            }
          }
        }
        if (window.scrollY < 200) {
          setActiveSection("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Handle mobile drawer: scroll lock, Escape key, and focus trap
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      // Focus first element in sheet (close button)
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpen(false);
          openButtonRef.current?.focus();
        }

        // Focus trap inside drawer
        if (e.key === "Tab" && menuRef.current) {
          const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Close sheet on route changes (adjusting state during render)
  const [prevPathname, setPrevPathname] = React.useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ease-out-expo",
          isScrolled
            ? "bg-bg/85 backdrop-blur-md border-b border-[var(--color-border)] py-3.5 shadow-xs"
            : "bg-transparent border-b border-transparent py-5"
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Wordmark */}
            <Link
              href="/"
              className="group inline-flex items-center font-sans text-xl font-bold tracking-tight text-ink select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm min-h-[44px]"
            >
              <span>Niraj</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent ml-0.5 inline-block transition-transform duration-300 group-hover:scale-125" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive =
                  activeSection === link.label.toLowerCase() ||
                  pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors duration-fast",
                      isActive
                        ? "text-ink bg-[rgba(10,10,20,0.05)] font-semibold"
                        : "text-muted hover:text-ink hover:bg-[rgba(10,10,20,0.03)]"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Desktop CTA & Theme Toggle */}
            <div className="hidden md:flex items-center gap-2.5">
              <ThemeToggle />
              <Button
                variant="primary"
                size="sm"
                href={whatsappLink(QUOTE_WA_MESSAGE)}
                className="group"
              >
                <span>Get a free quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>

            {/* Mobile Controls: Theme Toggle + Hamburger */}
            <div className="flex md:hidden items-center gap-1.5">
              <ThemeToggle />
              <button
                ref={openButtonRef}
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label="Open main menu"
                aria-expanded={isOpen}
                aria-controls="mobile-drawer"
                className="flex items-center justify-center w-11 h-11 rounded-md text-ink hover:bg-[rgba(10,10,20,0.05)] transition-colors focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Backdrop & Sheet */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[500] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Backdrop Scrim */}
          <div
            className="fixed inset-0 bg-ink/40 backdrop-blur-xs transition-opacity animate-fade-in"
            onClick={() => {
              setIsOpen(false);
              openButtonRef.current?.focus();
            }}
            aria-hidden="true"
          />

          {/* Full-height Sheet */}
          <div
            ref={menuRef}
            id="mobile-drawer"
            className="fixed inset-y-0 right-0 w-full max-w-[340px] min-w-[280px] bg-surface border-l border-[var(--color-border)] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-fade-in"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[var(--color-border)]">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center font-sans text-xl font-bold tracking-tight text-ink min-h-[44px]"
                >
                  <span>Niraj</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent ml-0.5 inline-block" />
                </Link>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    openButtonRef.current?.focus();
                  }}
                  aria-label="Close menu"
                  className="w-11 h-11 flex items-center justify-center rounded-md text-ink hover:bg-[rgba(10,10,20,0.05)] transition-colors focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-1 py-8" aria-label="Mobile Links">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted/60 px-3 pb-2">
                  Navigation
                </p>
                {NAV_LINKS.map((link) => {
                  const isActive =
                    activeSection === link.label.toLowerCase() ||
                    pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between px-3.5 py-3 rounded-md text-base font-medium transition-colors min-h-[44px]",
                        isActive
                          ? "text-accent bg-accent/5 font-semibold"
                          : "text-ink hover:bg-[rgba(10,10,20,0.04)]"
                      )}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-muted/40" />
                    </Link>
                  );
                })}

                <Link
                  href="/design-system"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-3.5 py-3 rounded-md text-sm text-muted hover:text-ink hover:bg-[rgba(10,10,20,0.04)] transition-colors min-h-[44px]"
                >
                  <span>Design System</span>
                  <span className="font-mono text-[10px] text-muted tracking-wider uppercase">
                    Preview
                  </span>
                </Link>
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-[var(--color-border)] flex flex-col gap-3">
              <Button
                variant="whatsapp"
                size="lg"
                href={whatsappLink(QUOTE_WA_MESSAGE)}
                className="w-full justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get a free quote</span>
              </Button>

              <p className="font-mono text-[11px] text-muted text-center tracking-wide">
                Ranchi, Jharkhand · Worldwide
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

