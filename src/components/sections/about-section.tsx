import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { aboutData } from "@/data/about";
import { siteConfig } from "@/data/site";
import { LinkedInIcon, InstagramIcon } from "@/components/ui/social-icons";
import {
  GraduationCap,
  Clock,
  MapPin,
  CheckCircle2,
  Code2,
} from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Niraj Kumar Dangi"
      className="py-20 md:py-28 lg:py-36 border-b border-[var(--color-border)] bg-surface"
    >
      <Container>
        {/* Top Header */}
        <div className="flex flex-col gap-4 max-w-3xl mb-12 md:mb-16">
          <SectionHeading
            eyebrow="ABOUT THE ENGINEER"
            heading={
              <>
                Craft, code, and{" "}
                <span className="font-serif italic font-normal text-accent">
                  local context.
                </span>
              </>
            }
            sub="No account managers, no junior handoffs, and zero template markups. When you work with me, you work directly with the engineer writing your code."
          />
        </div>

        {/* 2-Column Overview: Photo/Bio + Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Portrait Frame & Human Story */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Portrait Frame with real photograph */}
            <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-surface shadow-sm">
              <div className="relative w-full aspect-[4/4.8] sm:aspect-[4/4.5] overflow-hidden bg-bg">
                <Image
                  src="/images/niraj-portrait.jpg"
                  alt="Niraj Kumar Dangi — Freelance Full-Stack Developer in Ranchi"
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-lg font-bold drop-shadow-xs">{aboutData.name}</h3>
                    <p className="font-mono text-xs text-white/90 flex items-center gap-1 drop-shadow-xs">
                      <MapPin className="w-3 h-3 text-accent" />
                      <span>{aboutData.location}</span>
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-xs border border-white/20 text-[11px] font-mono text-white/95">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    Available
                  </span>
                </div>
              </div>

              {/* Education Banner */}
              <div className="p-4 border-t border-[var(--color-border)] bg-surface flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-ink">
                    {aboutData.education.degree}
                  </span>
                  <span className="text-[11px] text-muted">
                    {aboutData.education.institution} · {aboutData.education.focus}
                  </span>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee Pill */}
            <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 flex items-center gap-3">
              <Clock className="w-5 h-5 text-accent shrink-0" />
              <p className="text-xs text-ink/90 leading-relaxed font-medium">
                {aboutData.responsePromise}
              </p>
            </div>

            {/* Direct Social & Professional Profiles */}
            <div className="p-4 rounded-xl border border-[var(--color-border)] bg-surface shadow-xs flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted font-semibold">
                  Direct Social Profiles
                </span>
                <span className="font-mono text-[10px] text-accent font-medium">
                  Verified Channels
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={siteConfig.owner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 p-2.5 rounded-lg border border-[var(--color-border)] hover:border-[#0A66C2]/50 bg-bg/60 hover:bg-[#0A66C2]/5 transition-all text-ink min-h-[44px]"
                  aria-label="Connect with Niraj Kumar Dangi on LinkedIn"
                >
                  <span className="w-8 h-8 rounded-md bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedInIcon className="w-4 h-4 fill-current" />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-bold leading-tight truncate group-hover:text-[#0A66C2] transition-colors">
                      LinkedIn
                    </span>
                    <span className="text-[10px] font-mono text-muted truncate">
                      @nirajkumardangi
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.owner.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 p-2.5 rounded-lg border border-[var(--color-border)] hover:border-[#E4405F]/50 bg-bg/60 hover:bg-[#E4405F]/5 transition-all text-ink min-h-[44px]"
                  aria-label="Follow Niraj Kumar Dangi on Instagram"
                >
                  <span className="w-8 h-8 rounded-md bg-[#E4405F]/10 text-[#E4405F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-4 h-4" />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-bold leading-tight truncate group-hover:text-[#E4405F] transition-colors">
                      Instagram
                    </span>
                    <span className="text-[10px] font-mono text-muted truncate">
                      @nirajdangi.dev
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Working Principles */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-4 text-base sm:text-lg text-muted text-pretty leading-relaxed">
              {aboutData.bio.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Working Principles Grid */}
            <div className="pt-6 border-t border-[var(--color-border)]">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted font-semibold mb-6">
                Core Working Principles:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutData.principles.map((pr, idx) => (
                  <Card key={idx} className="p-5 flex flex-col justify-between shadow-xs">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-5 h-5 rounded-md bg-accent/15 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                        </span>
                        <h4 className="text-sm font-bold text-ink">
                          {pr.title}
                        </h4>
                      </div>
                      <p className="text-xs text-muted leading-relaxed">
                        {pr.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Grouped by Domain */}
        <div className="pt-12 border-t border-[var(--color-border)]">
          <div className="flex flex-col gap-2 mb-8">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted font-semibold">
              TECHNICAL REPERTOIRE
            </p>
            <h3 className="text-2xl font-bold text-ink tracking-tight">
              Stack &amp; tooling chosen for stability and speed
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutData.skillGroups.map((group, gIdx) => (
              <Card key={gIdx} className="p-6 flex flex-col gap-4 shadow-xs">
                <div className="flex items-center gap-2 pb-3 border-b border-[var(--color-border)]">
                  <Code2 className="w-4 h-4 text-accent" />
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                    {group.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[rgba(10,10,20,0.03)] dark:bg-white/5 border border-[var(--color-border)] text-xs font-mono text-ink/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
