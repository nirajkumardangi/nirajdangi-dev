import { Suspense } from "react";
import type { Metadata } from "next";
import { WorkClient } from "./work-client";
import { Container } from "@/components/layout/container";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies | niraj.",
  description:
    "Explore websites designed for doctors, wedding planners, creators, and local services in Ranchi and beyond. Fast on 4G, built to get enquiries.",
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
  openGraph: {
    title: "Selected Work & Case Studies | niraj.",
    description: "Websites designed for doctors, wedding planners, creators, and local services in Ranchi.",
    url: `${siteConfig.url}/work`,
  },
};

export default function WorkPage() {
  return (
    <div className="pt-24 md:pt-32 lg:pt-36 bg-bg min-h-screen">
      <BreadcrumbJsonLd items={[{ name: "Selected Work", url: "/work" }]} />
      <Container>
        {/* Static Header with H1 for SEO */}
        <div className="flex flex-col gap-4 max-w-2xl mb-12">
          <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted">
            INDEX · 09 PROJECTS &amp; PROTOTYPES
          </p>

          <h1 className="text-h1 font-bold text-ink tracking-tight text-balance">
            All projects, prototypes &amp;{" "}
            <span className="font-serif italic font-normal text-accent">
              tools.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted text-pretty">
            Filter by business vertical or explore open-source tools. Every site
            is designed for enquiries, mobile-first performance, and full code
            ownership.
          </p>
        </div>
      </Container>

      <Suspense
        fallback={
          <Container>
            <div className="h-10 w-full max-w-md bg-muted/10 rounded animate-pulse mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-64 bg-muted/10 rounded-lg animate-pulse" />
              ))}
            </div>
          </Container>
        }
      >
        <WorkClient />
      </Suspense>
    </div>
  );
}
