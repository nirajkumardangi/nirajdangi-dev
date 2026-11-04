import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { aboutData } from "@/data/about";
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
            {/* Portrait Frame with proper aspect ratio & fallback */}
            <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-bg shadow-sm">
              <div
                className="relative w-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-surface to-bg"
                style={{ aspectRatio: "4/4.5" }}
              >
                {/* Clean avatar badge representation */}
                <div className="w-28 h-28 rounded-full bg-accent/15 border-2 border-accent/30 flex items-center justify-center mb-4 text-accent text-3xl font-bold font-serif italic shadow-inner">
                  NKD
                </div>
                <h3 className="text-xl font-bold text-ink">{aboutData.name}</h3>
                <p className="font-mono text-xs text-muted mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{aboutData.location}</span>
                </p>

                <div className="mt-6 px-4 py-2 rounded-full bg-surface border border-[var(--color-border)] shadow-xs">
                  <p className="font-mono text-[11px] text-muted text-center">
                    [PORTRAIT PHOTO PENDING]
                  </p>
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
