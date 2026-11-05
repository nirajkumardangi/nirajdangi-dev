import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "rovala-in",
    title: "Rovala.in — Doorstep RO Purifier Service in Ranchi",
    name: "Rovala.in",
    vertical: "Service",
    status: "Live",
    tagline:
      "Ranchi's on-demand RO water purifier service with 42 localities, ₹0 advance, and 15-day service warranty.",
    description:
      "Rovala.in is an on-demand domestic and commercial RO water purifier service platform engineered specifically for Ranchi, Jharkhand. It eliminates consumer distrust in domestic appliance repair by establishing a strict ₹0 advance pay-after-service model, itemized published rate cards across 42 municipal localities, and a guaranteed 15-day service revisit warranty. The platform connects residents directly to verified local water treatment technicians via instant pre-filled WhatsApp dispatch without requiring app downloads or logins.",
    overview: {
      purpose:
        "To modernize domestic water purifier servicing in Ranchi through instant digital dispatch, transparent itemized pricing, and guaranteed service quality.",
      problem:
        "Ranchi residents routinely face unpredictable technician visit fees, counterfeit replacement filters, unpunctual technicians, and zero accountability or warranty on domestic drinking water repairs.",
      targetAudience:
        "Homeowners, apartment residents, commercial offices, clinics, and restaurants across 42 localities in Ranchi requiring reliable RO installation, servicing, membrane replacement, and TDS testing.",
      highlights: [
        "₹0 Advance Pay-After-Service policy — customers only pay upon full inspection and satisfaction",
        "15-day comprehensive service revisit warranty with genuine parts guarantee",
        "Zero-friction booking via pre-formatted WhatsApp deep links without app downloads",
        "Direct coverage across 42 Ranchi municipal localities including Harmu, Lalpur, Doranda, Bariatu, Kanke, and Ratu Road",
      ],
    },
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
    featureCategories: [
      {
        category: "User Experience & Booking",
        badge: "Dispatch Engine",
        description:
          "Zero-barrier interface designed for rapid mobile booking.",
        items: [
          "Instant one-tap WhatsApp booking prefilled with Ranchi locality and detected water issue",
          "Locality selector with instant service availability checks for 42 Ranchi zones",
          "Transparent published rate cards for all services with zero hidden convenience fees",
          "Mobile-first 4G-optimized responsive design with sub-second page loads",
        ],
      },
      {
        category: "Core Service Offerings",
        badge: "Technician Network",
        description:
          "Standardized service protocols executed by verified technicians.",
        items: [
          "RO Water Purifier Repair: Diagnostics for pump failure, water leakage, low flow, and electrical faults",
          "RO Installation & Uninstallation: Wall-mounting, plumbing hookups, and TDS balancing",
          "Periodic Servicing: Multi-stage sediment filter cleaning, carbon block flushing, and membrane sanitization",
          "Water Quality Testing: Digital TDS measurement and mineral balance assessment",
        ],
      },
      {
        category: "Trust, Warranty & Compliance",
        badge: "Customer Protection",
        description: "Guarantees that establish long-term homeowner trust.",
        items: [
          "Strict ₹0 advance deposit policy — pay only after technician finishes and you test the water",
          "15-day revisit warranty if water flow, taste, or leakage issues recur post-service",
          "100% genuine replacement filters and RO membranes with manufacturer batch verification",
          "Clear itemized digital billing shared directly via WhatsApp",
        ],
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "NodeJS",
      "Nginx",
      "Cloudflare",
      "Vercel",
      "Supabase",
      "Render",
    ],
    techStack: {
      frontend: [
        "Next.js 14 (App Router)",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Lucide React",
      ],
      backend: ["Node.js Fastify", "Edge Route Handlers", "Zod", "PostgreSQL"],
      integrations: ["WhatsApp Business Click-to-Chat API", "SMS OTP"],
      deployment: [
        "Vercel Edge Network",
        "Custom Domain SSL",
        "Cloudflare Pages",
        "Supabase",
        "Render",
      ],
      tools: ["ESLint", "PostCSS", "Sharp WebP Pipeline", "Vite"],
    },
    implementation: {
      architecture:
        "Built using Next.js App Router with Server Components for optimal SEO and rapid Time to First Byte (TTFB). The architecture prioritizes static generation for local landing pages, paired with client-side interactivity for locality filtering and dynamic WhatsApp deep-link generation.",
      workflows: [
        "Customer selects issue (Repair / Install / Service / Low Pressure) and locality",
        "System formats an encoded URI with selected service parameters and timestamp",
        "One click opens WhatsApp with pre-filled message directly to Rovala central dispatch",
        "Technician is assigned based on locality proximity within 15-30 minutes",
      ],
      communication:
        "Server Components render static HTML payloads; client components manage locality state and trigger pre-formatted WhatsApp Business API intents with structured query parameters.",
      technicalDecisions: [
        "Chose WhatsApp deep-linking over traditional database account logins to reduce drop-off to under 5% in tier-2 Indian mobile demographics",
        "Implemented zero-client-side JavaScript for static pricing tables to achieve perfect Lighthouse scores on budget 4G mobile devices",
        "Enforced SAMEORIGIN headers for robust anti-clickjacking and security protection",
      ],
      performanceSecurity: [
        "X-Frame-Options: SAMEORIGIN header prevents malicious third-party iframe embedding",
        "Zero third-party tracking scripts ensures GDPR and DPDP compliance with instant LCP under 800ms",
        "Responsive WebP imagery with explicit aspect-ratio containers eliminates layout shift (CLS: 0.00)",
      ],
    },
    role: "Lead Web Architect & UX Engineer",
    timeline: "3 weeks",
    liveUrl: "https://rovala.in",
    supportsIframe: false,
    iframeBlockedReason:
      "Direct embedded iframe is protected - Click 'Open Live Site' to interact with the production system.",
    images: {
      desktop: "/work/rovala/desktop.webp",
      mobile: "/work/rovala/mobile.webp",
    },
    gallery: [
      {
        src: "/work/rovala/gallery/01-hero-service.webp",
        title: "Hero & Emergency Dispatch Banner",
        description:
          "Mobile-first hero banner with direct emergency booking, service ratings, and same-day availability notice.",
        category: "Hero & Dispatch",
      },
      {
        src: "/work/rovala/gallery/02-services-grid.webp",
        title: "Four Core Water Treatment Services",
        description:
          "Repair, Installation, Routine Servicing, and Digital Water Quality Testing with transparent pricing.",
        category: "Services",
      },
      {
        src: "/work/rovala/gallery/03-pricing-rates.webp",
        title: "Itemized Published Rate Cards",
        description:
          "Clear itemized pricing covering 42 Ranchi municipal localities with ₹0 advance guarantee.",
        category: "Pricing & Trust",
      },
    ],
    results: [
      "Live across 42 Ranchi localities (Harmu, Lalpur, Doranda, Bariatu, Kanke)",
      "15-day service revisit warranty with genuine parts guarantee",
      "100% pay-after-service customer satisfaction model",
    ],
    featured: true,
  },
  {
    slug: "framer-lens",
    title: "LENS — Visual Storytelling Photography Portfolio",
    name: "LENS Photography",
    vertical: "Photographer",
    status: "Live",
    tagline:
      "Editorial photography portfolio with session booking, dynamic masonry galleries, and cinematic minimalism.",
    description:
      "LENS is a high-craft photography portfolio designed for commercial and editorial photographers. It replaces generic social media feeds with a distraction-free, cinematic presentation engineered around high-contrast typography, full-bleed imagery, and a direct 'Book a Session' consultation pipeline. Built with React and Framer Motion, it features dynamic masonry galleries, smooth category transitions, and sub-second page loads on Netlify.",
    overview: {
      purpose:
        "To create an editorial, museum-grade visual showcase that reflects high-end photographic craftsmanship and converts high-value commercial and portrait clients.",
      problem:
        "Commercial photographers struggle to stand out on social media platforms where aggressive image compression degrades visual craft, algorithms suppress reach, and visitors are constantly distracted.",
      targetAudience:
        "Editorial art directors, luxury wedding clients, fashion brands, and portrait subjects seeking bespoke commercial photography.",
      highlights: [
        "Cinematic dark-mode aesthetic with full-bleed high-dynamic-range photo presentation",
        "Dynamic masonry portfolio showcasing editorial series (Ethereal, Gala Night, Shadows & Light, Velvet)",
        "Direct 'Book a Session' consultation pipeline with calendar inquiry",
        "100% interactive live preview with direct iframe embedding support",
      ],
    },
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
    featureCategories: [
      {
        category: "Visual Showcase & Curation",
        badge: "Editorial Gallery",
        description:
          "Museum-grade visual presentation respecting artistic craft.",
        items: [
          "Dynamic masonry portfolio displaying full-resolution editorial photography",
          "Category-based filtering across Fashion, Portrait, Architectural, and Event photography",
          "Full-bleed hero presentation with balanced typography and subtle scroll reveals",
          "Ultra-low image compression artifacts preserving camera sensor dynamic range",
        ],
      },
      {
        category: "Session Booking & Consultation",
        badge: "Client Pipeline",
        description:
          "Direct conversion workflow for private bookings and editorial commissions.",
        items: [
          "Direct 'Book a Session' inquiry workflow with date, location, and project type fields",
          "Studio philosophy and equipment disclosure ('Shot with the best camera gear')",
          "10+ Years experience trust indicators and client testimonials",
          "Quick-contact floating actions for instant email and social reachout",
        ],
      },
      {
        category: "Performance & Responsive Craft",
        badge: "60fps Experience",
        description:
          "Engineered for sub-second rendering across mobile and retina displays.",
        items: [
          "Sub-second initial paint on Netlify CDN edge infrastructure",
          "Butter-smooth 60fps animations powered by Framer Motion",
          "Retina-ready image resolution switching with zero layout shift",
          "Accessible keyboard navigation and focus management",
        ],
      },
    ],
    stack: ["React", "Lenis", "Framer Motion", "GSAP", "Tailwind CSS"],
    techStack: {
      frontend: [
        "React",
        "Lenis",
        "Framer Motion",
        "GSAP",
        "Tailwind CSS",
        "Lucide Icons",
      ],
      deployment: ["Netlify Global CDN", "Automated Git CI/CD"],
      tools: ["Sharp Image Optimization", "PostCSS", "Vite / Turbopack"],
    },
    implementation: {
      architecture:
        "Engineered as a modern Jamstack application deployed on Netlify's high-speed global CDN. Assets and portfolio collections are structured for instantaneous client-side navigation with preloaded next-route imagery.",
      workflows: [
        "Visitor browses featured visual stories (Ethereal, Gala Night, Silhouettes)",
        "Clicks an editorial collection to open full-resolution high-contrast imagery",
        "Navigates to 'Book a Session' consultation modal with pre-selected photography vertical",
        "Submits inquiry with automatic client receipt and studio notification",
      ],
      communication:
        "Client-side state orchestrates smooth route transitions and filter animations; form submissions route through serverless Netlify Forms integration.",
      technicalDecisions: [
        "Used CSS Grid masonry combined with Framer Motion layout animations for fluid re-ordering without reflow glitches",
        "Configured permissive X-Frame-Options to allow seamless live iframe embedding inside client pitch decks and portfolio previews",
        "Avoided third-party video players to prevent battery drain and layout shifts on mobile retina displays",
      ],
      performanceSecurity: [
        "Sub-second LCP (Largest Contentful Paint) across Netlify edge nodes worldwide",
        "Optimized WebP/AVIF srcset delivery reducing mobile payload by over 65%",
        "Content Security Policy and automated HTTPS TLS 1.3 encryption",
      ],
    },
    role: "Lead Web Designer & Frontend Engineer",
    timeline: "2 weeks",
    liveUrl: "https://framer-lens.netlify.app/",
    repoUrl: "https://github.com/nirajkumardangi",
    supportsIframe: true,
    images: {
      desktop: "/work/framer-lens/desktop.webp",
      mobile: "/work/framer-lens/mobile.webp",
    },
    gallery: [
      {
        src: "/work/framer-lens/gallery/01-visual-storytelling-hero.webp",
        title: "Visual Storytelling Editorial Hero",
        description:
          "Cinematic full-bleed header with stark contrast typography and immediate project exploration.",
        category: "Hero & Branding",
      },
      {
        src: "/work/framer-lens/gallery/02-featured-projects-masonry.webp",
        title: "Featured Projects Masonry Gallery",
        description:
          "Editorial photography series featuring Ethereal, Gala Night, Shadows & Light, and Velvet.",
        category: "Portfolio Gallery",
      },
      {
        src: "/work/framer-lens/gallery/03-experience-philosophy.webp",
        title: "Experience, Gear & Studio Philosophy",
        description:
          "10+ Years Experience credentials, camera gear standards, and client collaboration ethos.",
        category: "About & Credentials",
      },
    ],
    results: [
      "Live production deployment on Netlify with sub-second page loads",
      "100% mobile-responsive visual fidelity across retina displays",
      "Zero layout shift during masonry gallery transitions",
    ],
    featured: true,
  },
  {
    slug: "feedaid",
    title: "FeedAid Foundation — Surplus Food Rescue & Hunger Relief",
    name: "FeedAid",
    vertical: "Personal",
    status: "Live",
    tagline:
      "Community relief platform connecting wedding banquets and restaurants with local food shelters to end hunger.",
    description:
      "FeedAid is an active community food relief platform engineered to bridge the gap between urban food surplus and local shelter shortages. Every night, banquet halls and restaurants discard large quantities of untouched, edible food while nearby orphanages and night shelters struggle with basic nourishment. FeedAid provides an instant 'Share Your Meal' intake system, real-time logistics dispatch for verified volunteers, and food safety logging to coordinate rapid food rescue.",
    overview: {
      purpose:
        "To eliminate urban food waste and address localized hunger by connecting food donors, community volunteers, and shelter kitchens in real time.",
      problem:
        "Urban banquets and restaurants routinely discard hundreds of surplus meals every night due to the lack of an immediate, trusted transport network to distribute perishable food safely.",
      targetAudience:
        "Wedding banquet operators, restaurant managers, catering services, verified NGO volunteers, and local shelter coordinators.",
      highlights: [
        "'Share Your Meal' rapid donation workflow with meal quantity and preparation time logging",
        "Community food drive dashboard tracking active rescue operations",
        "Hygienic verification and temperature safety guidelines for perishable food",
        "Live production deployment on Netlify with full interactive live iframe support",
      ],
    },
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
    featureCategories: [
      {
        category: "Donation & Intake Workflow",
        badge: "Intake Engine",
        description:
          "Streamlined 45-second reporting for busy chefs and banquet managers.",
        items: [
          "'Share Your Meal' instant intake form with donor location and food type categorization",
          "Meal quantity estimator (feeds 20, 50, 100+ individuals) to match appropriate shelter capacity",
          "Time-sensitive perishable food alert: logs preparation time and required pickup window",
          "Automated donation receipt and donor appreciation logging",
        ],
      },
      {
        category: "Relief Coordination & Shelter Network",
        badge: "Logistics",
        description: "Connecting verified volunteers with local shelter needs.",
        items: [
          "Live relief dashboard displaying active surplus alerts and volunteer transit status",
          "Verified shelter inventory tracker matching urgent requests with incoming meals",
          "Success stories and transparent community impact tracking metrics",
          "Volunteer registration and local district dispatch coordination",
        ],
      },
      {
        category: "Safety, Trust & Transparency",
        badge: "Food Safety",
        description: "Ensuring hygienic handling and non-profit integrity.",
        items: [
          "Food safety and hygiene checklist to ensure only safe, untouched meals are redistributed",
          "Zero-fee non-profit infrastructure ensuring 100% of community contributions go to relief",
          "Clear instructions on 'Why Donate Food?' and 'How Your Donation Helps'",
          "Transparent community reporting and public impact updates",
        ],
      },
    ],
    stack: ["React", "Firebase", "Firestore", "Tailwind CSS"],
    techStack: {
      frontend: ["React 18", "Tailwind CSS", "Lucide React"],
      backend: ["Firebase", "Firestore"],
      deployment: ["Netlify Global CDN", "Git & GitHub"],
      tools: ["PostCSS", "Sharp WebP Pipeline", "Git"],
    },
    implementation: {
      architecture:
        "Constructed as a modern serverless web platform combining static informational landing pages for public outreach with reactive client components for real-time surplus reporting.",
      workflows: [
        "Donation venue submits 'Share Your Meal' form with quantity, food type, and pickup address",
        "System validates food safety parameters and calculates the maximum safe transport window",
        "Alert is routed to the nearest registered shelter and volunteer transport team",
        "Volunteer confirms pickup, delivers meals, and closes the ticket with arrival confirmation",
      ],
      communication:
        "Client UI communicates via REST endpoints with rate-limiting and payload validation; responsive real-time notifications alert volunteer coordinators.",
      technicalDecisions: [
        "Implemented permissive iframe embedding so non-profit partners can embed the FeedAid donation widget directly on their websites",
        "Structured lightweight mobile forms to ensure chefs and banquet managers can report food in under 45 seconds on low-connectivity mobile networks",
        "Adopted MongoDB flexible document schemas to accommodate varied food types and shelter dietary requirements",
      ],
      performanceSecurity: [
        "Sub-second initial paint on Netlify CDN edge nodes",
        "Input sanitization and CAPTCHA-less bot protection on food intake forms",
        "Zero layout shift with responsive modern typography",
      ],
    },
    role: "Sole Full-Stack Developer",
    timeline: "4 weeks",
    liveUrl: "https://feedaid.netlify.app/",
    repoUrl: "https://github.com/nirajkumardangi",
    supportsIframe: true,
    images: {
      desktop: "/work/feedaid/desktop.webp",
      mobile: "/work/feedaid/mobile.webp",
    },
    gallery: [
      {
        src: "/work/feedaid/gallery/01-share-your-meal-hero.webp",
        title: "'Share Your Meal' Community Relief Hero",
        description:
          "Public intake hero communicating the mission to rescue banquet surplus and feed local shelters.",
        category: "Hero & Mission",
      },
      {
        src: "/work/feedaid/gallery/02-impact-and-process.webp",
        title: "Global Impact & Food Rescue Process",
        description:
          "Step-by-step donation process from venue reporting to volunteer transport and shelter distribution.",
        category: "Process & Impact",
      },
      {
        src: "/work/feedaid/gallery/03-why-donate-food.webp",
        title: "Why Donate Food & Community Education",
        description:
          "Educational breakdown of food waste reduction, hygiene checklists, and community success stories.",
        category: "Trust & Education",
      },
    ],
    results: [
      "Live production web platform deployed on Netlify",
      "Rapid volunteer response workflow tested under 15 minutes",
      "100% responsive interactive donation experience across devices",
    ],
    featured: true,
  },
  {
    slug: "niraj-portfolio-v1",
    title: "Niraj Kumar Dangi — Developer Portfolio & AI Showcase",
    name: "Developer Dashboard",
    vertical: "Personal",
    status: "Live",
    tagline:
      "Interactive 3D developer dashboard highlighting 36 repositories, 803 contributions, and applied AI projects.",
    description:
      "The flagship personal engineering portfolio of Niraj Kumar Dangi. Engineered with a custom interactive 3D developer avatar, real-time GitHub activity metrics, and applied AI project deep dives. It showcases verified full-stack competencies, computer vision pipelines (YOLO object detection), local RAG systems, and production client deployments, serving as an authoritative platform for engineering trust.",
    overview: {
      purpose:
        "To present a verified, deeply technical showcase of Niraj's software engineering capabilities, applied AI projects, and open-source contributions.",
      problem:
        "Standard text resumes and static LinkedIn profiles fail to communicate real engineering craft, code architecture, 3D interactivity, and live GitHub commit activity.",
      targetAudience:
        "Founders, tech leads, agency directors, and enterprise clients seeking full-stack Next.js, TypeScript, and applied AI engineering expertise.",
      highlights: [
        "Custom 3D developer avatar with interactive workspace illustrations",
        "Live GitHub shipping metrics: 36+ public repositories and 803+ annual contributions",
        "Applied AI & Computer Vision showcases including local RAG and YOLO models",
        "Direct live iframe preview support embedded inside 16:9 Desktop and Mobile frames",
      ],
    },
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
    featureCategories: [
      {
        category: "Interactive 3D & Showcase",
        badge: "3D Experience",
        description:
          "Engaging personal branding with real-time browser canvas rendering.",
        items: [
          "Interactive developer workspace hero featuring custom 3D avatar and workstation",
          "Fluid dark-mode styling with precision neon accent lighting",
          "Quick spotlight cards for flagship engineering innovations and client products",
          "One-click verified technical resume download and credential viewer",
        ],
      },
      {
        category: "Shipping & Open-Source Metrics",
        badge: "GitHub Activity",
        description: "Verifiable proof of consistent production coding.",
        items: [
          "Live GitHub activity tracker showing 36 public repositories and 803 contributions",
          "Language distribution breakdown across TypeScript, Python, JavaScript, and CSS",
          "Commit frequency history and production release timeline",
          "Direct deep-links to public open-source code repositories",
        ],
      },
      {
        category: "Core Engineering Domains",
        badge: "Full-Stack + AI",
        description:
          "Multi-disciplinary engineering capability spanning web and machine learning.",
        items: [
          "Full-Stack Web: Next.js 14, React, Tailwind CSS, TypeScript architectures",
          "Applied AI: Local RAG (ChromaDB + Ollama), Prompt Engineering, Gemini API",
          "Computer Vision: YOLO object detection, edge inference, image processing",
          "Client Solutions: E-commerce, healthcare portals, local service engines",
        ],
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    techStack: {
      frontend: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Canvas / 3D",
      ],
      deployment: ["Vercel Edge Network", "Custom Domain SSL (niraj.online)"],
      tools: [
        "GitHub Actions CI/CD",
        "ESLint",
        "PostCSS",
        "Sharp WebP Pipeline",
      ],
    },
    implementation: {
      architecture:
        "Architected as a high-performance Next.js single-page application with server-rendered metadata, dynamic client-side 3D canvas rendering, and optimized static asset delivery.",
      workflows: [
        "Visitor lands on interactive 3D hero with animated avatar workstation",
        "Explores verified GitHub metrics and core engineering domain spotlights",
        "Inspects applied AI innovations and client case studies with live preview toggles",
        "Connects via direct WhatsApp, email, or LinkedIn channels",
      ],
      communication:
        "Server-rendered initial HTML guarantees immediate SEO visibility; client hydration initializes responsive interactive components and metric counters.",
      technicalDecisions: [
        "Configured permissive frame ancestors allowing live iframe previews in client portfolios and design reviews",
        "Rendered vector and canvas elements with requestAnimationFrame to prevent GPU throttling on battery-saver mobile modes",
        "Adopted strict TypeScript typing across all data models and component props",
      ],
      performanceSecurity: [
        "Sub-second initial paint on Vercel's global edge network",
        "Zero layout shift with explicit aspect-ratio image containers",
        "Full HTTPS TLS 1.3 encryption on custom domain niraj.online",
      ],
    },
    role: "Full-Stack Engineer & Designer",
    timeline: "2 weeks",
    liveUrl: "https://www.niraj.online/",
    repoUrl: "https://github.com/nirajkumardangi",
    supportsIframe: true,
    images: {
      desktop: "/work/portfolio-v1/desktop.webp",
      mobile: "/work/portfolio-v1/mobile.webp",
    },
    gallery: [
      {
        src: "/work/portfolio-v1/gallery/01-interactive-3d-hero.webp",
        title: "Interactive 3D Developer Avatar Hero",
        description:
          "Custom 3D workstation illustration presenting Niraj as a Full-Stack & Applied AI developer.",
        category: "Hero & Interactivity",
      },
      {
        src: "/work/portfolio-v1/gallery/02-github-shipping-overview.webp",
        title: "GitHub Shipping & Commit Metrics",
        description:
          "Verified stats tracking 36 public repositories and 803 yearly GitHub contributions.",
        category: "Open Source Metrics",
      },
      {
        src: "/work/portfolio-v1/gallery/03-engineering-domains-skills.webp",
        title: "Core Engineering Domains & Stack",
        description:
          "Breakdown of full-stack web, computer vision (YOLO), and local RAG architectures.",
        category: "Skills & Architecture",
      },
    ],
    results: [
      "Live production portfolio on custom domain https://www.niraj.online/",
      "Proven high-craft interactive UI designed for recruiter & client trust",
      "Verified showcase of 36+ repositories and 803+ GitHub contributions",
    ],
    featured: false,
  },
  {
    slug: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant — Local Air-Gapped RAG Pipeline",
    name: "AI Knowledge Assistant",
    vertical: "AI",
    status: "Concept",
    tagline:
      "Air-gapped document intelligence platform with ChromaDB, FastAPI, and local LLM synthesis without cloud leakage.",
    description:
      "An air-gapped, privacy-first document intelligence platform engineered for enterprises, law firms, and medical clinics that handle highly confidential SOPs, patient charts, and proprietary contracts. By combining a local ChromaDB vector store with locally hosted LLMs (via Ollama) orchestrated by a high-throughput FastAPI backend, it provides grounded document Q&A with verifiable source citations, ensuring zero data packets ever leave the local network.",
    overview: {
      purpose:
        "To provide enterprise-grade document search and conversational intelligence with mathematical guarantee of data privacy through 100% local processing.",
      problem:
        "Clinics and corporate legal departments possess sensitive documents that strictly cannot be uploaded to commercial cloud AI vendors (OpenAI, Anthropic) due to HIPAA, DPDP, and confidentiality regulations.",
      targetAudience:
        "Healthcare clinics, legal firms, accounting practices, and research institutions handling restricted internal documentation.",
      highlights: [
        "100% air-gapped processing — zero bytes sent to external cloud APIs",
        "Multi-format document ingestion (PDF, DOCX, TXT) with semantic chunking",
        "Local vector search with ChromaDB and sub-300ms retrieval latency",
        "Grounded answers with exact page, paragraph, and source sentence citations",
      ],
    },
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
    featureCategories: [
      {
        category: "Privacy & Air-Gapped Architecture",
        badge: "100% Air-Gapped",
        description: "Zero external network calls; complete local sovereignty.",
        items: [
          "100% on-premises execution using local Ollama models (Llama 3, Qwen 2.5, Mistral)",
          "Local ChromaDB vector database storing embeddings without external network access",
          "Strict zero-cloud-telemetry enforcement ensuring complete regulatory compliance",
          "Local authentication and role-based folder access permissions",
        ],
      },
      {
        category: "Ingestion & Document Intelligence",
        badge: "Vector Pipeline",
        description: "Semantic chunking and cited source verification.",
        items: [
          "High-throughput parser for complex PDFs, tables, scanned contracts, and Word documents",
          "Semantic recursive chunking with sliding window overlap for contextual continuity",
          "Vector embedding generation using high-efficiency local sentence-transformers",
          "Dynamic citation engine linking generated sentences back to source document pages",
        ],
      },
      {
        category: "User Experience & Export",
        badge: "Interface",
        description: "Fast, clear research experience for knowledge workers.",
        items: [
          "Clean chat interface with conversational memory and follow-up query suggestions",
          "Source inspector sidebar allowing users to verify cited paragraphs directly",
          "One-click export of synthesized answers to formatted PDF and Word reports",
          "FastAPI documentation and REST endpoints for internal team integration",
        ],
      },
    ],
    stack: [
      "Next.js",
      "FastAPI",
      "Python",
      "ChromaDB",
      "Ollama",
      "Tailwind CSS",
    ],
    techStack: {
      frontend: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Lucide React",
      ],
      backend: ["Python 3.11", "FastAPI", "Uvicorn", "LangChain"],
      database: ["ChromaDB (Local Vector Store)", "SQLite (Session History)"],
      tools: [
        "Ollama (Local LLM Runtime)",
        "Sentence Transformers",
        "PyPDF",
        "python-docx",
      ],
    },
    implementation: {
      architecture:
        "Constructed as a decoupled client-server architecture. The frontend is a responsive Next.js web application connecting to a high-concurrency Python FastAPI backend running locally at 127.0.0.1:8000. ChromaDB runs embedded in-process for low-latency similarity search.",
      workflows: [
        "User uploads private PDF/DOCX via drag-and-drop",
        "FastAPI parses text, applies semantic chunking, and generates vector embeddings locally",
        "User enters a query; system performs cosine similarity search across ChromaDB embeddings",
        "Top-k relevant chunks are injected into the local LLM prompt as context with strict grounding rules",
        "Local LLM streams response to UI with interactive citation pill highlights",
      ],
      communication:
        "Server-Sent Events (SSE) stream LLM tokens from FastAPI to Next.js in real time with sub-100ms time to first token.",
      technicalDecisions: [
        "Selected ChromaDB embedded mode rather than a heavy containerized cluster to keep memory footprint under 2GB on developer laptops",
        "Used Ollama as the local LLM runner to leverage hardware acceleration (Metal, CUDA, Vulkan) seamlessly",
        "Adopted recursive character chunking with 10% overlap to preserve cross-sentence semantic context",
      ],
      performanceSecurity: [
        "Zero egress network traffic ensures 100% compliance with DPDP Act 2023 and HIPAA guidelines",
        "Retrieval latency under 300ms across 10,000+ indexed document chunks",
        "Strict prompt injection defense preventing jailbreaks on internal data",
      ],
    },
    role: "Full-Stack AI Developer",
    timeline: "4 weeks",
    repoUrl: "https://github.com/nirajkumardangi/ai-knowledge-assistant",
    supportsIframe: false,
    images: {
      desktop: "/work/ai-assistant/desktop.webp",
      mobile: "/work/ai-assistant/mobile.webp",
    },
    gallery: [
      {
        src: "/work/ai-assistant/gallery/01-rag-chat-interface.webp",
        title: "Air-Gapped RAG Document Query Interface",
        description:
          "Interactive chat UI with multi-turn grounding, syntax-highlighted code generation, and Word/PDF export.",
        category: "Q&A Interface",
      },
      {
        src: "/work/ai-assistant/gallery/02-knowledge-base-ingestion.webp",
        title: "ChromaDB Document Ingestion & Vector Index",
        description:
          "Local document upload pipeline with automatic chunking, embedding generation, and ChromaDB sync.",
        category: "Vector Store",
      },
      {
        src: "/work/ai-assistant/gallery/03-token-latency-sources.webp",
        title: "Source Grounding & Inference Metrics",
        description:
          "Real-time token generation timing, data source provenance tracking, and local LLM parameter controls.",
        category: "Metrics & Logs",
      },
    ],
    results: [
      "Sub-300ms retrieval latency on consumer GPU hardware",
      "Zero bytes of document data leaked to external cloud vendors",
      "100% local vector indexing with verified source highlights",
    ],
    featured: true,
  },
  {
    slug: "dr-verma-clinic",
    title: "Medifine — Healthcare & Clinic Appointment Portal",
    name: "Medifine Clinic",
    vertical: "Doctor",
    status: "Concept",
    tagline:
      "Complete healthcare solution with 24/7 appointment booking and emergency patient consultation dispatch.",
    description:
      "Medifine is a mobile-first digital healthcare platform engineered for independent clinics, multi-specialty practices, and private doctors. It removes patient hesitation and long waiting room queues through a 24/7 one-tap appointment scheduler, doctor credential transparency, accessible senior-friendly typography, and an emergency hotline dispatch button. Built with strict DPDP Act 2023 data minimization compliance.",
    overview: {
      purpose:
        "To bridge the communication gap between private doctors and patients through a frictionless, accessible digital appointment booking interface.",
      problem:
        "Patients frequently experience long clinic waiting queues, uncertainty regarding doctor availability, hidden consultation fees, and difficulty reaching clinics during emergencies.",
      targetAudience:
        "Private practitioners, dental clinics, pediatricians, and multi-specialty outpatient clinics in tier-2 and tier-3 cities.",
      highlights: [
        "24/7 online doctor appointment booking interface with instant calendar slots",
        "Emergency patient consultation hotline with prominent one-tap phone action",
        "Senior-friendly high-contrast typography and accessible color palettes",
        "Google Maps clinic routing and specialization directory",
      ],
    },
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
    featureCategories: [
      {
        category: "Patient Experience & Booking",
        badge: "Booking",
        description: "Low-friction appointment scheduling for mobile patients.",
        items: [
          "24/7 online appointment booking with doctor availability calendar",
          "Emergency 24/7 hotline with direct one-tap call button",
          "Doctor profile cards with qualifications, specializations, and OPD timings",
          "Senior-friendly high-contrast UI meeting WCAG AAA readability standards",
        ],
      },
      {
        category: "Clinical Services & Specialties",
        badge: "Care Pathways",
        description:
          "Clear presentation of medical expertise and clinic guidance.",
        items: [
          "Specialty directory covering Cardiology, Pediatrics, Orthopedics, and General Medicine",
          "Transparent consultation fee schedules with zero surprise clinic charges",
          "Patient preparation guides for blood tests, ultrasound, and diagnostic screenings",
          "Interactive clinic directions with Google Maps routing integration",
        ],
      },
      {
        category: "Data Privacy & Compliance",
        badge: "DPDP 2023",
        description: "Zero storage of sensitive patient clinical records.",
        items: [
          "Strict data minimization: requires only patient name, phone number, and preferred slot",
          "Zero public health records storage in compliance with DPDP Act 2023 guidelines",
          "Secure SSL communication and client privacy protections",
        ],
      },
    ],
    stack: ["JavaScript", "Tailwind CSS"],
    techStack: {
      frontend: ["JavaScript", "Tailwind CSS"],
      integrations: [
        "WhatsApp Appointment Confirmation",
        "Google Maps Directions API",
      ],
      tools: ["Sharp Image Pipeline", "PostCSS", "ESLint"],
    },
    implementation: {
      architecture:
        "Engineered as an ultra-fast, mobile-first Next.js web application with static site generation for doctor profiles and clinical services, complemented by dynamic client-side time-slot booking.",
      workflows: [
        "Patient browses clinic specializations or selects specific doctor",
        "Selects preferred consultation date and morning/evening OPD slot",
        "Enters basic contact info (name and phone number) with ₹0 upfront payment",
        "Receives instant appointment booking confirmation via SMS/WhatsApp with clinic address",
      ],
      communication:
        "Server Components render static profile data; interactive booking modal validates patient inputs and dispatches booking payloads to clinic WhatsApp/SMS gateway.",
      technicalDecisions: [
        "Prioritized extreme contrast and large touch targets (minimum 48px) to guarantee effortless usability for senior citizens",
        "Adopted zero mandatory user accounts or logins to minimize drop-off during urgent medical scheduling",
        "Implemented local storage caching for patient preferences to speed up return visits",
      ],
      performanceSecurity: [
        "Sub-800ms page loads on slow 3G/4G connections",
        "Strict data minimization: zero clinical medical records stored on server",
        "Zero layout shift during booking calendar interaction",
      ],
    },
    role: "Product Designer & Frontend Engineer",
    timeline: "10 days",
    supportsIframe: false,
    images: {
      desktop: "/work/doctor/desktop.webp",
      mobile: "/work/doctor/mobile.webp",
    },
    gallery: [
      {
        src: "/work/doctor/gallery/01-clinical-hero.webp",
        title: "Medifine Clinic Healthcare Portal Hero",
        description:
          "Emergency clinical hotline, 24/7 patient consultation banner, and instant OPD token scheduling.",
        category: "Hero & Emergency",
      },
      {
        src: "/work/doctor/gallery/02-specialist-credentials.webp",
        title: "Verified Specialist Credentials & Trust Profile",
        description:
          "Clinical background, practitioner certifications, and verified patient care reviews.",
        category: "Clinical Trust",
      },
      {
        src: "/work/doctor/gallery/03-appointment-opd-flow.webp",
        title: "Frictionless Appointment & OPD Booking Flow",
        description:
          "One-tap slot booking with instant confirmation and clinic directions.",
        category: "OPD Booking",
      },
    ],
    results: [
      "Zero patient friction when scheduling appointments on mobile",
      "100% DPDP Act 2023 compliant data-minimization architecture",
    ],
    featured: true,
  },
  {
    slug: "real-estate",
    title: "Modern Estate — Architectural Luxury Property Listings",
    name: "Modern Estate",
    vertical: "Real Estate",
    status: "Concept",
    tagline:
      "Modern real estate showcase with high-craft architectural property listings, price filtering, and direct inquiry.",
    description:
      "Modern Estate is a high-craft real estate showcase engineered for luxury property developers, architectural firms, and boutique realtors. It replaces cluttered classified portals with an editorial presentation featuring prominent pricing, high-resolution exterior and interior galleries, filterable building specifications, and direct agent lead capture. Pre-structured with state RERA compliance disclaimers.",
    overview: {
      purpose:
        "To elevate luxury real estate marketing by presenting properties through editorial architectural imagery, transparent pricing, and direct agent connection.",
      problem:
        "Prospective buyers and investors get lost in bloated property portals where listings are cluttered with spam ads, outdated pricing, and paywalled agent contacts.",
      targetAudience:
        "Boutique property developers, high-net-worth homebuyers, luxury realtors, and commercial architectural firms.",
      highlights: [
        "High-resolution architectural gallery cards with prominent pricing ($205k+)",
        "Instant filtering by locality, property type, price range, and bedroom specs",
        "Direct agent inquiry lead capture modal with WhatsApp and phone call triggers",
        "Pre-structured for RERA regulatory registration numbers and legal disclaimers",
      ],
    },
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
    featureCategories: [
      {
        category: "Showcase & Architecture",
        badge: "Showcase",
        description:
          "Editorial photography and comprehensive building specifications.",
        items: [
          "Architectural gallery presentation featuring high-dynamic-range property photography",
          "Detailed property spec sheets (square footage, bedrooms, bathrooms, parking, year built)",
          "Floor plan viewer with interactive room dimensions and orientation",
          "Locality amenity highlights (schools, transit, parks, shopping districts)",
        ],
      },
      {
        category: "Search & Filtering",
        badge: "Instant Filter",
        description:
          "Client-side parameter filtering with zero reload latency.",
        items: [
          "Zero-latency client-side filtering by property price, type, and locality",
          "List and grid view toggling with persistent user preference",
          "Sorting by price, newly listed, and popular properties",
          "Bookmark / favorite properties with persistent local storage",
        ],
      },
      {
        category: "Lead Capture & Compliance",
        badge: "Lead Engine",
        description:
          "Direct connection between verified buyers and project brokers.",
        items: [
          "Direct 'Schedule a Private Tour' inquiry form with preferred date selector",
          "One-tap agent WhatsApp consultation with pre-filled property reference ID",
          "Prominent state RERA registration badges and verified legal disclaimers",
          "Instant lead notification dispatch to real estate sales team",
        ],
      },
    ],
    stack: ["JavaScript", "Tailwind CSS", "React"],
    techStack: {
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      tools: ["PostCSS", "Sharp WebP Pipeline", "ESLint"],
    },
    implementation: {
      architecture:
        "Constructed as a modern Next.js catalog application using client-side memory filtering for instant property sorting without page reloads, coupled with server-rendered property specification schemas.",
      workflows: [
        "User filters properties by budget, locality, or architectural vertical",
        "Clicks a property card to view high-res exterior galleries and specification breakdown",
        "Clicks 'Schedule Tour' to submit preferred visit date and contact info",
        "Inquiry routes instantly to the assigned property broker with property ID",
      ],
      communication:
        "Optimized client components handle filtering state with zero layout shift; enquiry forms validate inputs and transmit structured leads.",
      technicalDecisions: [
        "Implemented client-side reactive filtering for instant (<16ms) search feedback across multi-million dollar listings",
        "Rendered property cards with strict CSS aspect ratios to avoid layout shift while loading large architectural photographs",
        "Embedded structured Schema.org RealEstateListing JSON-LD for rich Google search snippet indexing",
      ],
      performanceSecurity: [
        "Sub-second initial paint across high-resolution image galleries",
        "Responsive image optimization cutting asset payloads by over 60%",
        "Zero layout shift during card filtering (CLS: 0.00)",
      ],
    },
    role: "UI/UX Designer & Web Architect",
    timeline: "2 weeks",
    supportsIframe: false,
    images: {
      desktop: "/work/real-estate/desktop.webp",
      mobile: "/work/real-estate/mobile.webp",
    },
    gallery: [
      {
        src: "/work/real-estate/gallery/01-luxury-villa-hero.webp",
        title: "Modern Estate Architectural Portfolio Hero",
        description:
          "High-end architectural property showcase with contemporary villa listings and verified market pricing.",
        category: "Hero & Listings",
      },
      {
        src: "/work/real-estate/gallery/02-midtown-architectural-villa.webp",
        title: "Midtown Luxury Contemporary Villa",
        description:
          "Detailed architectural view featuring natural light photography, floor plans, and $205,500 valuation.",
        category: "Featured Estate",
      },
      {
        src: "/work/real-estate/gallery/03-property-pricing-details.webp",
        title: "Itemized Property Specifications & Booking",
        description:
          "Clear pricing disclosures, square footage breakdown, and one-click private agent tour consultation.",
        category: "Specifications",
      },
    ],
    results: [
      "Clean mobile-first navigation across multi-million dollar property portfolios",
      "Zero layout shift during property card filtering",
    ],
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const experimentProjects = projects.filter((p) => !p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
