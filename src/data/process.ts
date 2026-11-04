import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consult",
    timeframe: "Day 1",
    description:
      "A 30-minute voice call or WhatsApp exchange. We discuss who your customers are, what friction exists in your current enquiry process, and what a qualified conversion looks like.",
    deliverables: [
      "Target customer profile clarification",
      "Core conversion goal definition (WhatsApp vs Form)",
      "Technical asset checklist (domain, logo, images)",
    ],
  },
  {
    step: "02",
    title: "Proposal & Scope",
    timeframe: "Days 2 – 3",
    description:
      "I send you an itemized fixed-price proposal with page wireframes, clear timelines, and exact deliverables. No technical jargon, no hidden fees. Work begins upon 50% advance agreement.",
    deliverables: [
      "Page-by-page wireframe structure",
      "Fixed INR quote with milestones",
      "Draft content outline ready for your review",
    ],
  },
  {
    step: "03",
    title: "Build & Revisions",
    timeframe: "Days 4 – 10",
    description:
      "I design and engineer your site on Next.js. You receive a private preview link to test on your phone. We do a structured revision round to refine typography, buttons, and details.",
    deliverables: [
      "Live private staging preview URL",
      "Tested on budget Android 4G & iPhone retina viewports",
      "One full revision round covering copy and layout tweaks",
    ],
  },
  {
    step: "04",
    title: "Launch & Support",
    timeframe: "Day 11+",
    description:
      "We connect your custom domain, set up SSL, test live WhatsApp links, and hand over 100% of the source code. I remain available for post-launch questions and warranty support.",
    deliverables: [
      "Live deployment on your primary domain",
      "Google Search Console & Business profile indexing",
      "Complete source code repository handover",
      "30-day post-launch bug warranty",
    ],
  },
];
