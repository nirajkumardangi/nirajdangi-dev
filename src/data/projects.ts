import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "rovala-in",
    title: "Rovala.in — Doorstep RO Purifier Service",
    name: "Rovala.in",
    vertical: "Service",
    status: "Live",
    tagline:
      "Ranchi's on-demand RO water purifier service with 42 localities, ₹0 advance, and 15-day service warranty.",
    problem:
      "Ranchi residents routinely face unpredictable technician visit fees, counterfeit replacement filters, and zero warranty on domestic drinking water repairs.",
    solution:
      "A fast, lightweight web platform built around instant WhatsApp dispatch, transparent published rate cards, 15-day service warranties, and a strict zero-advance pay-after-service policy.",
    features: [
      "Pay-after-service model with zero advance deposit required",
      "Instant WhatsApp booking prefilled with Ranchi locality and issue",
      "Itemized service rate cards covering 42 localities across Ranchi",
      "15-day service revisit warranty and genuine replacement filters",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp Business API"],
    role: "Lead Web Architect & UX Engineer",
    timeline: "3 weeks",
    liveUrl: "https://rovala.in",
    images: {
      desktop: "/work/rovala/desktop.webp",
      mobile: "/work/rovala/mobile.webp",
    },
    results: [
      "Live across 42 Ranchi localities (Harmu, Lalpur, Doranda, Bariatu, Kanke)",
      "15-day service revisit warranty with genuine parts guarantee",
      "100% pay-after-service customer satisfaction model",
    ],
    featured: true,
  },
  {
    slug: "framer-lens",
    title: "LENS — Visual Storytelling Photography",
    name: "LENS Photography",
    vertical: "Photographer",
    status: "Live",
    tagline:
      "Editorial photography portfolio with session booking, dynamic masonry galleries, and cinematic minimalism.",
    problem:
      "Commercial and portrait photographers struggle to stand out on social media feeds where image compression and algorithms degrade editorial craft.",
    solution:
      "A distraction-free, cinematic web showcase engineered with high-contrast typography, full-bleed imagery, and a direct 'Book a Session' conversion pipeline.",
    features: [
      "High-impact visual storytelling layout with full-bleed editorial imagery",
      "Direct 'Book a Session' consultation and inquiry workflow",
      "Categorized galleries for architectural, portrait, and street projects",
      "Ultra-smooth 60fps transitions with zero layout shift on mobile",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "Motion", "Netlify"],
    role: "Lead Web Designer & Frontend Engineer",
    timeline: "2 weeks",
    liveUrl: "https://framer-lens.netlify.app/",
    repoUrl: "https://github.com/nirajkumardangi",
    images: {
      desktop: "/work/framer-lens/desktop.webp",
      mobile: "/work/framer-lens/mobile.webp",
    },
    results: [
      "Live production deployment on Netlify with sub-second page loads",
      "100% mobile-responsive visual fidelity across retina displays",
    ],
    featured: true,
  },
  {
    slug: "feedaid",
    title: "FeedAid Foundation — Surplus Food Rescue",
    name: "FeedAid",
    vertical: "Personal",
    status: "Live",
    tagline:
      "Community relief platform connecting wedding banquets and restaurants with local food shelters to end hunger.",
    problem:
      "Massive wedding banquets and food venues in urban areas generate surplus meals daily that get discarded while local shelters face severe shortages.",
    solution:
      "A real-time coordination dashboard where food venues report surplus meals, triggering immediate dispatch alerts to verified NGO volunteers and shelters.",
    features: [
      "Real-time surplus meal notification dispatch with 'Share Your Meal' workflow",
      "Community food donation requests and volunteer transit coordination",
      "Shelter inventory tracker matching meal quantities to urgent needs",
      "Hygienic verification checklist and temperature safety logging",
    ],
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    role: "Sole Full-Stack Developer",
    timeline: "4 weeks",
    liveUrl: "https://feedaid.netlify.app/",
    repoUrl: "https://github.com/nirajkumardangi",
    images: {
      desktop: "/work/feedaid/desktop.webp",
      mobile: "/work/feedaid/mobile.webp",
    },
    results: [
      "Live production web platform deployed on Netlify",
      "Rapid volunteer response workflow tested under 15 minutes",
    ],
    featured: true,
  },
  {
    slug: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant — Local RAG Pipeline",
    name: "AI Knowledge Assistant",
    vertical: "AI",
    status: "Concept",
    tagline:
      "Air-gapped document intelligence platform with ChromaDB, FastAPI, and local LLM synthesis without cloud leakage.",
    problem:
      "Clinics and enterprises possess sensitive SOPs, patient guidelines, and rate contracts that cannot be uploaded to public AI APIs due to compliance risks.",
    solution:
      "An air-gapped, privacy-first document intelligence platform using local LLMs (Ollama / Qwen / Llama) and local ChromaDB vector embeddings with cited responses.",
    features: [
      "Zero-cloud privacy architecture with 100% local processing (ChromaDB + Ollama)",
      "PDF, DOCX & TXT ingestion with grounding source citations",
      "Document Q&A with instant Word & PDF export features",
      "Local FastAPI server (127.0.0.1:8000) backend orchestration",
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
      desktop: "/work/ai-assistant/desktop.webp",
    },
    results: [
      "Sub-300ms retrieval latency on consumer GPU hardware",
      "Zero bytes of document data leaked to external cloud vendors",
      "100% local vector indexing with verified source highlights",
    ],
    featured: true,
  },
  {
    slug: "dr-verma-clinic",
    title: "Medifine — Healthcare & Clinic Portal",
    name: "Medifine Clinic",
    vertical: "Doctor",
    status: "Concept",
    tagline:
      "Complete healthcare solution with 24/7 appointment booking and emergency patient consultation dispatch.",
    problem:
      "Patients frequently face long waiting queues and confusion over doctor availability, consultation fees, and emergency clinic reachability.",
    solution:
      "A mobile-first medical portal with one-tap appointment booking, doctor profiles, emergency 24/7 hotline buttons, and accessible typography.",
    features: [
      "24/7 online doctor appointment scheduling interface",
      "Emergency patient consultation hotline with direct phone integration",
      "Senior-friendly clean typography and accessible high-contrast layout",
      "Google Maps clinic routing and service specialization directory",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    role: "Product Designer & Frontend Engineer",
    timeline: "10 days",
    images: {
      desktop: "/work/doctor/desktop.webp",
    },
    results: [
      "Zero patient friction when scheduling appointments on mobile",
      "100% DPDP Act 2023 compliant data-minimization architecture",
    ],
    featured: true,
  },
  {
    slug: "real-estate",
    title: "Modern Estate — Architectural Property Listings",
    name: "Modern Estate",
    vertical: "Real Estate",
    status: "Concept",
    tagline:
      "Modern real estate showcase with high-craft architectural property listings, price filtering, and direct inquiry.",
    problem:
      "Home buyers and investors get lost in cluttered portal listings that hide property specifications, true prices, and agent contacts behind paywalls.",
    solution:
      "A clean architectural showcase presenting modern estates with prominent pricing ($205k+), high-res exterior galleries, and direct lead capture.",
    features: [
      "Modern estate property showcase with high-res architectural gallery cards",
      "Filterable listings by locality, price range, and building specs",
      "Direct 'Details' and agent inquiry lead capture modal",
      "Pre-structured for state RERA compliance badge and disclaimers",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    role: "UI/UX Designer & Web Architect",
    timeline: "2 weeks",
    images: {
      desktop: "/work/real-estate/desktop.webp",
    },
    results: [
      "Clean mobile-first navigation across multi-million dollar property portfolios",
      "Zero layout shift during property card filtering",
    ],
    featured: true,
  },
  {
    slug: "product-showcase",
    title: "Beats 3 — E-Commerce Audio Gear Showcase",
    name: "Beats 3",
    vertical: "E-commerce",
    status: "Concept",
    tagline:
      "High-conversion dark-mode product landing page with technical specs overview and instant bag checkout.",
    problem:
      "Direct-to-consumer lifestyle brands lose potential sales when product landing pages are slow, cluttered, or fail to communicate premium audio craft.",
    solution:
      "An immersive dark-mode product landing page featuring floating headphone visuals, key audio specs, brand trust logos, and a one-tap 'Add to Bag' workflow.",
    features: [
      "Immersive dark-mode product hero with floating device photography",
      "One-tap 'Add to Bag' with pricing and instant checkout transition",
      "Technical specs breakdown (audio drivers, wireless battery life, noise cancellation)",
      "Ecosystem integration links (Apple, Amazon, Spotify, YouTube)",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    role: "E-Commerce Frontend Engineer",
    timeline: "1 week",
    images: {
      desktop: "/work/product-showcase/desktop.webp",
    },
    results: [
      "Sub-second LCP on 4G mobile devices",
      "High-converting single product landing page structure",
    ],
    featured: false,
  },
  {
    slug: "niraj-portfolio-v1",
    title: "Niraj Kumar Dangi — Developer Dashboard v1",
    name: "Developer Dashboard",
    vertical: "Personal",
    status: "Live",
    tagline:
      "Interactive 3D developer dashboard highlighting 36 repositories, 803 contributions, and applied AI projects.",
    problem:
      "Standard software engineering resumes fail to convey personality, live coding activity, and depth across applied AI and computer vision domains.",
    solution:
      "A custom interactive dashboard featuring 3D developer avatar styling, real GitHub activity metrics, verified technical credentials, and one-click resume downloads.",
    features: [
      "Interactive developer dashboard with custom 3D avatar & workspace illustration",
      "Live GitHub repository metrics: 36 public repos and 803 yearly contributions",
      "Applied AI & Computer Vision spotlight (YOLO detection, Local RAG)",
      "One-click technical resume download & verified credentials modal",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    role: "Full-Stack Engineer & Designer",
    timeline: "2 weeks",
    liveUrl: "https://www.niraj.online/",
    repoUrl: "https://github.com/nirajkumardangi",
    images: {
      desktop: "/work/portfolio-v1/desktop.webp",
      mobile: "/work/portfolio-v1/mobile.webp",
    },
    results: [
      "Live production portfolio on custom domain https://www.niraj.online/",
      "Proven high-craft interactive UI designed for recruiter & client trust",
    ],
    featured: false,
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
    stack: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Gemini API",
      "Stripe",
    ],
    role: "Full-Stack Engineer",
    timeline: "3 weeks",
    repoUrl: "https://github.com/nirajkumardangi",
    images: {
      desktop: "/work/write-nova/preview.svg",
    },
    results: [
      "1,000+ generations processed in sandbox tests",
      "End-to-end checkout & credit deduction verified in sandbox",
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const experimentProjects = projects.filter((p) => !p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
