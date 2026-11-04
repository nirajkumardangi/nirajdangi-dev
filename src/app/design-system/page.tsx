import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { Input, Textarea, Select } from "@/components/ui/input";
import { DeviceFramePlaceholder } from "@/components/ui/device-frame";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import {
  MessageCircle,
  ArrowRight,
  Zap,
  Star,
  Globe,
  Lock,
} from "lucide-react";

function DSSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[var(--color-border)] pt-12 mt-12 first:border-t-0 first:mt-0 first:pt-0">
      <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted mb-8">
        {title}
      </p>
      {children}
    </section>
  );
}

function ColorSwatch({
  name,
  bg,
  textClass = "text-muted",
}: {
  name: string;
  bg: string;
  textClass?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full h-16 rounded-md border border-[var(--color-border)]"
        style={{ background: bg }}
      />
      <p className="font-mono text-[10px] tracking-wide text-muted">{name}</p>
      <p className={`font-mono text-[10px] ${textClass}`}>{bg}</p>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="bg-bg min-h-screen pb-36">
      {/* Header */}
      <div className="pt-28 pb-16 border-b border-[var(--color-border)] bg-surface text-ink">
        <Container>
          <Eyebrow className="text-accent mb-4">niraj.online v2</Eyebrow>
          <h1 className="text-h1 font-semibold text-ink tracking-[-0.04em] leading-[1.02] text-balance">
            Design System
            <span className="font-serif italic text-accent"> Studio Precision</span>
          </h1>
          <p className="text-muted text-pretty mt-4 max-w-prose">
            Every primitive, token and state in one place. This page is for review
            only — it will not be linked in production.
          </p>
        </Container>
      </div>

      <Container className="mt-16">

        {/* ── Colors ── */}
        <DSSection title="01 — Colors">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            <ColorSwatch name="Background"    bg="#FAFAF9" />
            <ColorSwatch name="Surface"       bg="#FFFFFF" />
            <ColorSwatch name="Ink"           bg="#0B0B0F" />
            <ColorSwatch name="Muted"         bg="#5C5C66" />
            <ColorSwatch name="Accent"        bg="#5B5BD6" />
            <ColorSwatch name="Accent Hover"  bg="#4a4abf" />
            <ColorSwatch name="WhatsApp"      bg="#25D366" />
            <ColorSwatch name="Dark BG"       bg="#0A0A0F" />
            <ColorSwatch name="Dark Surface"  bg="#111118" />
          </div>
        </DSSection>

        {/* ── Typography ── */}
        <DSSection title="02 — Typography">
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-mono text-[10px] text-muted mb-3 tracking-widest uppercase">H1 — Geist Sans Semibold</p>
              <p className="text-h1 font-semibold text-ink tracking-[-0.04em] leading-[1.02] text-balance">
                Websites that get your clinic,{" "}
                <span className="font-serif italic">studio</span> or brand enquiries.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-muted mb-3 tracking-widest uppercase">H2 — Geist Sans Semibold</p>
              <h2 className="text-h2 font-semibold text-ink tracking-[-0.02em] leading-[1.1] text-balance">
                Three things. Done properly.
              </h2>
            </div>
            <div>
              <p className="font-mono text-[10px] text-muted mb-3 tracking-widest uppercase">H3 — Geist Sans Medium</p>
              <h3 className="text-h3 font-medium text-ink">Website Design & Build</h3>
            </div>
            <div>
              <p className="font-mono text-[10px] text-muted mb-3 tracking-widest uppercase">Body — 18px, max 65ch</p>
              <p className="text-[18px] text-muted max-w-prose text-pretty leading-relaxed">
                Custom-designed and built for businesses in Ranchi and beyond. Fast on mobile.
                Clear to your customers. Yours to keep. No monthly platform fees.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-muted mb-3 tracking-widest uppercase">Eyebrow — Geist Mono 11px</p>
              <Eyebrow>FREELANCE WEB DESIGNER · RANCHI</Eyebrow>
            </div>
            <div>
              <p className="font-mono text-[10px] text-muted mb-3 tracking-widest uppercase">Instrument Serif Italic (accent only)</p>
              <p className="font-serif italic text-[2rem] text-ink">
                studio · precision · craft
              </p>
            </div>
          </div>
        </DSSection>

        {/* ── Buttons ── */}
        <DSSection title="03 — Buttons">
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary" size="lg">
              <Zap className="w-4 h-4" /> Primary Large
            </Button>
            <Button variant="primary" size="md">
              Primary Medium
            </Button>
            <Button variant="primary" size="sm">
              Primary Small
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center mt-4">
            <Button variant="secondary" size="lg">
              Secondary Large
            </Button>
            <Button variant="secondary" size="md">
              Secondary <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center mt-4">
            <Button variant="ghost" size="md">
              Ghost Button
            </Button>
            <Button variant="whatsapp" size="md">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center mt-4">
            <Button variant="primary" size="md" disabled>
              Disabled
            </Button>
            <Button variant="primary" size="md" href="#anchor">
              As Link
            </Button>
          </div>
        </DSSection>

        {/* ── Badges ── */}
        <DSSection title="04 — Badges">
          <div className="flex flex-wrap gap-3 items-center">
            <Badge variant="Live" />
            <Badge variant="Concept" />
            <Badge variant="neutral">Beta</Badge>
            <Badge variant="Live">Live — Custom label</Badge>
          </div>
        </DSSection>

        {/* ── Cards ── */}
        <DSSection title="05 — Cards">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <Eyebrow className="mb-3">Basic Card</Eyebrow>
              <h3 className="text-h3 font-medium text-ink mb-2">Service title</h3>
              <p className="text-muted text-sm text-pretty">
                Description text sits here. Muted, comfortable to read at small size.
              </p>
            </Card>
            <Card spotlight className="p-6">
              <Eyebrow className="mb-3">Spotlight Card (hover me)</Eyebrow>
              <h3 className="text-h3 font-medium text-ink mb-2">With spotlight</h3>
              <p className="text-muted text-sm text-pretty">
                On desktop hover, a radial gradient follows the cursor.
              </p>
            </Card>
            <Card className="p-6 bg-dark-bg text-white border-[var(--color-dark-border)]">
              <Eyebrow className="mb-3 text-white/70">Dark Card</Eyebrow>
              <h3 className="text-h3 font-medium text-white mb-2">Dark variant</h3>
              <p className="text-white/70 text-sm text-pretty">
                Used inside dark-bg sections.
              </p>
            </Card>
          </div>
        </DSSection>

        {/* ── Form Elements ── */}
        <DSSection title="06 — Form Elements">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            <Input label="Your name" placeholder="Niraj Kumar" />
            <Input label="Email" type="email" placeholder="you@example.com" />
            <Input label="With error" placeholder="…" error="This field is required" />
            <Input label="Disabled" placeholder="…" disabled />
            <Textarea label="Message" placeholder="Tell me about your business…" />
            <Select
              label="Budget range"
              options={[
                { value: "", label: "Select a range…" },
                { value: "starter", label: "Starter" },
                { value: "studio", label: "Studio" },
                { value: "growth", label: "Growth" },
              ]}
            />
          </div>
        </DSSection>

        {/* ── Device Frames ── */}
        <DSSection title="07 — Device Frames">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="font-mono text-[10px] text-muted mb-4 tracking-widest uppercase">Browser Frame — Placeholder</p>
              <DeviceFramePlaceholder type="browser" label="Desktop screenshot" />
            </div>
            <div>
              <p className="font-mono text-[10px] text-muted mb-4 tracking-widest uppercase">Phone Frame — Placeholder</p>
              <DeviceFramePlaceholder type="phone" label="Mobile screenshot" />
            </div>
          </div>
        </DSSection>

        {/* ── Motion ── */}
        <DSSection title="08 — Motion Primitives">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-[10px] text-muted mb-4 tracking-widest uppercase">Reveal (scroll into view)</p>
              <div className="flex flex-col gap-3">
                <Reveal delay={0}>
                  <Card className="p-4">
                    <p className="text-sm text-ink">Reveal — delay 0ms</p>
                  </Card>
                </Reveal>
                <Reveal delay={100}>
                  <Card className="p-4">
                    <p className="text-sm text-ink">Reveal — delay 100ms</p>
                  </Card>
                </Reveal>
                <Reveal delay={200}>
                  <Card className="p-4">
                    <p className="text-sm text-ink">Reveal — delay 200ms</p>
                  </Card>
                </Reveal>
              </div>
            </div>
            <div>
              <p className="font-mono text-[10px] text-muted mb-4 tracking-widest uppercase">Stagger (scroll into view)</p>
              <Stagger className="flex flex-col gap-3" staggerMs={80}>
                {["Item one", "Item two", "Item three", "Item four"].map((item) => (
                  <StaggerItem key={item}>
                    <Card className="p-4">
                      <p className="text-sm text-ink">{item}</p>
                    </Card>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </DSSection>

        {/* ── Section Heading ── */}
        <DSSection title="09 — Section Headings">
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Services · 01"
              heading="Three things. Done properly."
              sub="A fast website, an AI chatbot, and automations that save you time. Each one focused. Each one yours."
              align="left"
            />
            <SectionHeading
              eyebrow="Work · Featured"
              heading={
                <>
                  Things I&apos;ve{" "}
                  <span className="font-serif italic">built.</span>
                </>
              }
              sub="Real projects for real businesses."
              align="center"
            />
          </div>
        </DSSection>

        {/* ── Icons ── */}
        <DSSection title="10 — Icons (Lucide)">
          <div className="flex flex-wrap gap-6 items-center">
            {[MessageCircle, ArrowRight, Zap, Star, Globe, Lock].map((Icon, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-md bg-[rgba(10,10,20,0.04)] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-ink" />
                </div>
                <p className="font-mono text-[9px] text-muted tracking-widest">{Icon.name ?? "Icon"}</p>
              </div>
            ))}
          </div>
        </DSSection>

        {/* ── Shadows ── */}
        <DSSection title="11 — Shadows">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { name: "shadow-sm",     cls: "shadow-sm" },
              { name: "shadow-md",     cls: "shadow-md" },
              { name: "shadow-lg",     cls: "shadow-lg" },
              { name: "shadow-accent", cls: "shadow-accent" },
            ].map(({ name, cls }) => (
              <div key={name} className="flex flex-col gap-3 items-start">
                <div className={`w-full h-20 rounded-lg bg-surface ${cls}`} />
                <p className="font-mono text-[10px] text-muted tracking-widest">{name}</p>
              </div>
            ))}
          </div>
        </DSSection>

        {/* ── Spacing ── */}
        <DSSection title="12 — Spacing & Layout Grid">
          <p className="text-sm text-muted max-w-prose text-pretty mb-6">
            4/8px grid. Container max-width 1200px with 20px mobile / 32px tablet / 40px desktop horizontal padding.
            Section vertical padding: 80px mobile, 112px md, 144px lg.
          </p>
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16].map((n) => (
              <div key={n} className="flex items-center gap-4">
                <div
                  className="bg-accent/20 h-5 rounded-sm flex-shrink-0"
                  style={{ width: `${n * 4}px` }}
                />
                <p className="font-mono text-[10px] text-muted tracking-widest">{n * 4}px — space-{n}</p>
              </div>
            ))}
          </div>
        </DSSection>

      </Container>
    </main>
  );
}
