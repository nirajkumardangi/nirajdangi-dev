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
    <>
      <BreadcrumbJsonLd items={[{ name: "Selected Work", url: "/work" }]} />
      <Suspense
        fallback={
          <div className="py-36 min-h-screen bg-bg">
            <Container>
              <div className="h-8 w-48 bg-muted/10 rounded animate-pulse mb-4" />
              <div className="h-12 w-96 bg-muted/10 rounded animate-pulse" />
            </Container>
          </div>
        }
      >
        <WorkClient />
      </Suspense>
    </>
  );
}
