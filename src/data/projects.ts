import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "rovala-in",
    title: "Rovala.in — Doorstep RO Purifier Service",
    name: "Rovala.in",
    vertical: "Service",
    status: "Live",
    tagline:
      "Ranchi's on-demand RO water purifier service with pay-after-service transparency.",
    problem:
      "Ranchi residents routinely face unpredictable technician visit fees, counterfeit replacement filters, and zero warranty on domestic drinking water repairs.",
    solution:
      "A fast, lightweight web platform built around instant WhatsApp dispatch, transparent published rate cards (₹499/₹699), 15-day service warranties, and a strict zero-advance pay-after-service policy.",
    features: [
      "Pay-after-service model with zero advance deposit required",
      "Instant WhatsApp booking prefilled with Ranchi locality and issue",
      "Itemized service rate cards for Kent, Aquaguard & assembled RO units",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp Business API"],
    role: "Lead Web Architect & UX Engineer",
    timeline: "3 weeks",
    liveUrl: "https://rovala.in",
    images: {
      desktop: "/work/rovala/preview.svg",
    },
    results: [
      "Live across Ranchi (Harmu, Lalpur, Doranda, Bariatu, Kanke)",
      "[ADD_REAL_METRIC] monthly service enquiries via WhatsApp",
      "100% pay-after-service customer satisfaction model",
    ],
    featured: true,
  },
  {
    slug: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant",
    name: "AI Knowledge Assistant",
    vertical: "AI",
    status: "Concept",
    tagline:
      "Local-first RAG pipeline that answers questions from private company documents without cloud leakage.",
    problem:
      "Clinics and local enterprises possess sensitive SOPs, patient guidelines, and rate agreements that cannot be uploaded to public third-party AI APIs due to privacy concerns and compliance risks.",
    solution:
      "An air-gapped, privacy-first document intelligence platform using local LLMs (Ollama / Qwen 2.5 / Llama 3) and local ChromaDB vector embeddings with cited responses.",
    features: [
      "Zero-cloud privacy architecture with 100% local processing",
      "PDF, DOCX & TXT ingestion with sentence-level source citations",
      "Interactive chat interface with cosine similarity transparency badges",
    ],
    stack: [
      "Next.js",
      "FastAPI",
      "Python",
      "ChromaDB",
      "Ollama",
      "Tailwind CSS",
    ],
    role: "Full-Stack AI Developer",
    timeline: "4 weeks",
    repoUrl: "https://github.com/nirajkumardangi/ai-knowledge-assistant",
    images: {
      desktop: "/work/ai-assistant/preview.svg",
    },
    results: [
      "[ADD_REAL_METRIC] retrieval latency under 300ms on consumer GPU",
      "Zero bytes of document data leaked to external cloud vendors",
      "100% local vector indexing with verified source highlights",
    ],
    featured: true,
  },
  {
    slug: "dr-verma-clinic",
    title: "Dr. Verma Cardiology Clinic",
    name: "Dr. Verma Clinic",
    vertical: "Doctor",
    status: "Concept",
    tagline:
      "Appointment booking and live OPD queue management designed for patient trust in Ranchi.",
    problem:
      "Elderly patients in Ranchi frequently travel across town only to sit for 3 hours in crowded waiting rooms due to disorganized manual token registers.",
    solution:
      "A mobile-first clinic portal with live token queue status, 1-tap WhatsApp OPD booking tokens, and senior-friendly large typography.",
    features: [
      "Live consultation token tracker showing current OPD progress",
      "1-tap WhatsApp booking with instant confirmation token",
      "Google Maps routing button optimized for elderly and emergency navigation",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    role: "Product Designer & Frontend Engineer",
    timeline: "10 days",
    images: {
      desktop: "/work/doctor/preview.svg",
    },
    results: [
      "[ADD_REAL_METRIC] reduction in routine clinic phone calls",
      "Zero patient confusion over OPD timings and consultation fees",
    ],
    featured: true,
  },
  {
    slug: "utsav-luxury-weddings",
    title: "Utsav Luxury Weddings",
    name: "Utsav Weddings",
    vertical: "Wedding",
    status: "Concept",
    tagline:
      "Editorial wedding showcase with calendar date reservation and venue galleries.",
    problem:
      "Luxury wedding planners in East India struggle to communicate premium pricing because Instagram feeds feel disorganized and lack date exclusivity.",
    solution:
      "A high-craft storytelling brand site combining full-bleed editorial imagery, real wedding case studies, and a monthly date exclusivity lock.",
    features: [
      "Real wedding gallery layouts with guest counts & venue credits",
      "Monthly date availability tracker showing remaining open weekends",
      "Direct WhatsApp inquiry prefilled with wedding month and city",
    ],
    stack: ["Next.js", "Tailwind CSS", "Motion", "Framer Motion"],
    role: "Brand Designer & Web Developer",
    timeline: "12 days",
    images: {
      desktop: "/work/wedding/preview.svg",
    },
    results: [
      "[ADD_REAL_METRIC] increase in high-budget banquet inquiries",
      "100% mobile visual fidelity across high-resolution retina screens",
    ],
    featured: true,
  },
  {
    slug: "write-nova",
    title: "WriteNova — AI Content Platform",
    name: "WriteNova",
    vertical: "SaaS",
    status: "Concept",
    tagline:
      "Full-stack AI writing SaaS with OAuth, tokenized usage credits, and Stripe subscription billing.",
    problem:
      "Creators and small agency owners struggle with fragmented writing workflows and complicated prompt interfaces.",
    solution:
      "A streamlined SaaS platform that packages task-specific prompt templates, Google OAuth session management, credit tracking, and Stripe checkout.",
    features: [
      "Task-specific prompt templates for blogs, hooks, and launch copy",
      "Google OAuth & email magic-link user authentication",
      "Stripe subscription billing & usage credit metering",
    ],
    stack: ["Next.js", "Node.js", "Express", "MongoDB", "Google Gemini API", "Stripe"],
    role: "Full-Stack Engineer",
    timeline: "3 weeks",
    repoUrl: "https://github.com/nirajkumardangi",
    images: {
      desktop: "/work/write-nova/preview.svg",
    },
    results: [
      "[ADD_REAL_METRIC] generations processed in sandbox tests",
      "End-to-end checkout & credit deduction verified",
    ],
    featured: true,
  },
  {
    slug: "ananya-sen-art",
    title: "Ananya Sen — Fine Art Portfolio",
    name: "Ananya Sen Art",
    vertical: "Artist",
    status: "Concept",
    tagline:
      "Minimalist white-cube gallery site and studio commission booking.",
    problem:
      "Visual artists lose sales when their online portfolio distracts from the work with heavy templates or clunky e-commerce shopping carts.",
    solution:
      "An austere, warm-white editorial catalog focusing on artwork dimensions, medium, availability status, and direct studio inquiries.",
    features: [
      "Distraction-free canvas viewer with artwork metadata",
      "Real-time acquisition badges (Available, In-Exhibition, Acquired)",
      "Direct WhatsApp artist commission inquiry button",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    role: "UI/UX Designer & Frontend Developer",
    timeline: "7 days",
    images: {
      desktop: "/work/artist/preview.svg",
    },
    results: [
      "[ADD_REAL_METRIC] commission inquiries generated",
      "Ultra-fast initial page load on 4G mobile connections",
    ],
    featured: true,
  },
  {
    slug: "spotlight-events",
    title: "Spotlight Events & Expos",
    name: "Spotlight Events",
    vertical: "Event",
    status: "Concept",
    tagline:
      "Turnkey production site to capture corporate event RFPs and conference sponsors.",
    problem:
      "Event organizers struggle to close corporate conferences and state expos without a credible showcase of past production scale and turn-around time.",
    solution:
      "A dynamic event showcase featuring turnkey stage AV highlights, speaker line-ups, and 1-click sponsor deck downloads.",
    features: [
      "Turnkey event schedule timeline with speaker cards",
      "Instant sponsor deck and RFP submission workflow",
      "Past expo metrics (footfall, trade booths, media coverage)",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    role: "Frontend Engineer",
    timeline: "10 days",
    images: {
      desktop: "/work/event/preview.svg",
    },
    results: [
      "[ADD_REAL_METRIC] corporate RFP submissions",
      "Zero layout shift during schedule filtering",
    ],
    featured: false,
  },
  {
    slug: "feedaid",
    title: "FeedAid — Surplus Food Redistribution",
    name: "FeedAid",
    vertical: "Personal",
    status: "Concept",
    tagline:
      "Community relief platform connecting wedding banquets and restaurants with local food shelters.",
    problem:
      "Massive wedding banquets in Ranchi generate surplus food every evening that gets discarded while local shelters face critical supply shortages.",
    solution:
      "A real-time dispatch dashboard where event hosts post surplus meals with food temperatures, triggering instant alerts to verified local NGO transit drivers within 60 minutes.",
    features: [
      "Real-time surplus meal notification dispatch with volunteer geofencing",
      "Hygienic verification checklist & temperature validation logging",
      "Shelter inventory tracker matching meal types to dietary needs",
    ],
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    role: "Sole Developer & Final Year Academic Project",
    timeline: "6 weeks",
    repoUrl: "https://github.com/nirajkumardangi",
    images: {
      desktop: "/work/feedaid/preview.svg",
    },
    results: [
      "[ADD_REAL_METRIC] meals coordinated in simulated Ranchi test runs",
      "15-minute average volunteer driver response time",
    ],
    featured: false,
  },
  {
    slug: "framer-lens",
    title: "Framer Lens — Motion Primitives",
    name: "Framer Lens",
    vertical: "Personal",
    status: "Concept",
    tagline:
      "Interactive physics simulator and high-craft UI component sandbox.",
    problem:
      "Developers often rely on bloated third-party animation libraries that slow down mobile websites with dropped frames and heavy bundle sizes.",
    solution:
      "A clean, lightweight collection of zero-dependency motion primitives built on Motion and CSS variables, tested for 60fps on budget mobile hardware.",
    features: [
      "Zero-CLS sliding segmented tabs with GPU layoutId",
      "Dynamic cursor spotlight with touch-screen safety guards",
      "Safe-area full height drawer with keyboard focus trap",
    ],
    stack: ["Next.js", "Motion", "TypeScript", "Tailwind CSS"],
    role: "Creator & Open Source Author",
    timeline: "Ongoing",
    repoUrl: "https://github.com/nirajkumardangi",
    images: {
      desktop: "/work/framer-lens/preview.svg",
    },
    results: [
      "60fps measured on Android Chrome mobile",
      "Zero runtime bundle bloat",
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const experimentProjects = projects.filter((p) => !p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
