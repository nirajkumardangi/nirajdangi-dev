import { Hero } from "@/components/sections/hero";
import { VerticalsShowcase } from "@/components/sections/verticals-showcase";
import { SelectedWork } from "@/components/sections/selected-work";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { AboutSection } from "@/components/sections/about-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section: Direct positioning, trust strip, 3-project cycler */}
      <Hero />

      {/* 2. Verticals Showcase: Dark showcase (#0A0A0F) with interactive tabs */}
      <VerticalsShowcase />

      {/* 3. Selected Work: Bento grid with desktop cursor spotlights */}
      <SelectedWork />

      {/* 4. Services & Capabilities: 3 concrete offers with deliverables & starting prices */}
      <ServicesSection />

      {/* 5. Process: 4-step predictable development sequence */}
      <ProcessSection />

      {/* 6. Pricing & Plans: 3 tiers, comparison table, add-ons, maintenance, terms */}
      <PricingSection />

      {/* 7. Testimonials: Dormant until verified client quotes are gathered (Rule 2) */}
      <TestimonialsSection />

      {/* 8. About Niraj: Human story, MCA, working principles, skills */}
      <AboutSection />

      {/* 9. FAQ: Interactive accordion with Schema.org FAQPage JSON-LD */}
      <FaqSection />

      {/* 10. Reusable CTA: One clear action with prefilled WhatsApp link */}
      <CTASection />
    </div>
  );
}
