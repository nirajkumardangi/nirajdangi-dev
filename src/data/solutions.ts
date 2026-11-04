import type { Solution } from "@/types";

export const solutions: Solution[] = [
  {
    id: 1,
    slug: "ecommerce-development",
    title: "E-Commerce & Online Store Development",
    shortTitle: "E-Commerce",
    wave: 1,
    isPublished: true,
    tagline: "High-speed custom storefronts with WhatsApp dispatch and secure payment checkout.",
    answerBox:
      "Custom e-commerce web development by Niraj Kumar Dangi provides fast, mobile-first online stores with product catalogs, shopping carts, Razorpay or Stripe checkout, and automated WhatsApp order dispatch. Built on Next.js with zero monthly platform subscriptions.",
    primaryKeyword: "custom ecommerce website developer",
    secondaryKeywords: [
      "ecommerce website development india",
      "razorpay payment gateway website integration",
      "online store development for small business",
      "whatsapp order notification ecommerce website",
    ],
    targetAudience: {
      headline: "Built for independent brands, manufacturers, and local retail stores.",
      examples: [
        "Direct-to-consumer (D2C) brands wanting complete code ownership without Shopify recurring app fees.",
        "Local Ranchi and Jharkhand specialty manufacturers (appliances, food products, craft goods) selling regionally and across India.",
        "Service businesses selling spare components and scheduled maintenance packages directly to customers.",
      ],
    },
    features: [
      {
        group: "Customer Experience",
        items: [
          "Instant product catalog search and faceted category filtering",
          "Persistent client-side shopping cart with zero layout shifts",
          "Streamlined 1-page checkout optimized for mobile thumb reach",
          "Instant WhatsApp order confirmation dispatch with itemized summary",
          "Customer order status tracking via phone number or email",
        ],
      },
      {
        group: "Store Operations & Payments",
        items: [
          "Razorpay, Cashfree, or Stripe payment gateway integration",
          "Pay-after-service or Cash-on-Delivery (COD) workflow support",
          "Inventory status badges (In Stock, Low Stock, Backorder)",
          "Discount voucher and seasonal promotion engine",
          "Exportable order logs and customer enquiry records (CSV / Excel)",
        ],
      },
    ],
    stack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "PostgreSQL / Supabase", "Razorpay SDK"],
    integrations: [
      "Razorpay / Cashfree / Stripe payment gateways",
      "WhatsApp Business API for order dispatch alerts",
      "Shiprocket / Delhivery webhook compatibility",
      "Resend for automated customer email receipts",
    ],
    priceRange: {
      inr: "₹12,999 – ₹34,999",
      usd: "$400 – $1,200",
    },
    timeline: "2 to 4 weeks",
    proof: {
      slug: "rovala-in",
      name: "Rovala.in",
      status: "Live",
      description: "Live on-demand RO service and filter replacement booking platform operating in Ranchi.",
      featuresDemonstrated: [
        "Itemized published rate cards for major filter brands",
        "Direct WhatsApp dispatch prefilled with customer locality and problem",
        "Transparent pay-after-service workflow with zero advance deposit",
      ],
    },
    complianceNotes:
      "Payment processing is handled through PCI-DSS certified third-party gateways (such as Razorpay or Stripe). Credit card, debit card, and banking credentials are never transmitted through or stored on my servers.",
    faqs: [
      {
        question: "How does this compare to Shopify or WooCommerce?",
        answer:
          "Shopify charges $29+/month plus app subscription fees and transaction cuts that add up quickly. WooCommerce often suffers from bloated WordPress plugins and sluggish mobile load times. A custom Next.js storefront has zero monthly platform fees, loads in under 1 second on mobile 4G, and is 100% owned by you.",
      },
      {
        question: "How do payments reach my bank account?",
        answer:
          "Payments go directly into your verified Razorpay, Cashfree, or Stripe merchant account linked to your business bank account. Funds settle directly on the gateway's standard T+1 or T+2 schedule.",
      },
      {
        question: "Can orders be received directly on WhatsApp?",
        answer:
          "Yes. For Indian customers, WhatsApp checkout reduces friction. Customers assemble their cart on the website, and checkout formats an itemized message directly to your business WhatsApp with products, customer address, and payment preference.",
      },
      {
        question: "Can I manage product inventory myself?",
        answer:
          "Yes. Depending on your preference, inventory can be updated through a secure web admin portal, a headless CMS like Sanity, or even a synchronized Google Sheet for non-technical teams.",
      },
    ],
    lastModified: "2026-11-04T00:00:00Z",
  },
  {
    id: 2,
    slug: "healthcare-medical-portals",
    title: "Healthcare & Medical Clinic Portals",
    shortTitle: "Healthcare",
    wave: 1,
    isPublished: true,
    tagline: "Appointment booking, live OPD queue tracking, and doctor directories built for patient trust.",
    answerBox:
      "Healthcare web development by Niraj Kumar Dangi delivers mobile-first portals for doctors, diagnostic centers, and clinics. Features include live OPD token tracking, 1-tap WhatsApp appointment booking, doctor credentials, and accessible navigation for elderly patients.",
    primaryKeyword: "doctor website design india",
    secondaryKeywords: [
      "clinic appointment booking website",
      "online appointment booking system for clinics",
      "opd queue tracking website for doctors",
      "medical practice website design jharkhand",
    ],
    targetAudience: {
      headline: "Designed for independent physicians, polyclinics, and diagnostic centers.",
      examples: [
        "Cardiologists, dentists, dermatologists, and pediatricians looking to reduce manual receptionist phone calls.",
        "Multi-specialty clinics in Ranchi and tier-2 cities seeking organized daily OPD token management.",
        "Diagnostic labs and therapy centers publishing transparent test tariffs and preparation instructions.",
      ],
    },
    features: [
      {
        group: "Patient Experience",
        items: [
          "Senior-friendly large typography and high-contrast color scheme",
          "Live consultation token queue tracker showing current OPD progress",
          "1-tap WhatsApp appointment requests with pre-filled consultation reason",
          "Comprehensive doctor bio, verified qualifications, and clinic hours",
          "Interactive emergency Google Maps routing button for rapid navigation",
        ],
      },
      {
        group: "Clinic Operations",
        items: [
          "Daily OPD slot and token availability display",
          "Consultation fee and procedure rate transparency cards",
          "Pre-consultation patient intake forms (symptoms, age, medical history)",
          "Automated WhatsApp confirmation and appointment reminder triggers",
          "Telemedicine consultation link generator (Google Meet / Zoom)",
        ],
      },
    ],
    stack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Motion", "WhatsApp API"],
    integrations: [
      "WhatsApp Business API for token confirmation",
      "Google Maps Platform for clinical directions",
      "Razorpay for advance consultation fee collection (optional)",
      "Calendar sync (Google Calendar / Outlook)",
    ],
    priceRange: {
      inr: "₹12,999 – ₹29,999",
      usd: "$350 – $950",
    },
    timeline: "10 to 18 days",
    proof: {
      slug: "dr-verma-clinic",
      name: "Dr. Verma Cardiology Clinic",
      status: "Concept",
      description: "Concept healthcare portal engineered for cardiology OPD appointments and live token tracking in Ranchi.",
      featuresDemonstrated: [
        "Live consultation token tracker display showing queue progress",
        "1-tap WhatsApp appointment booking workflow",
        "Emergency hospital routing button optimized for elderly patients",
      ],
    },
    complianceNotes:
      "Medical Disclaimer: These websites are intended for informational, appointment coordination, and administrative purposes only; they do not provide medical diagnosis or treatment advice. In medical emergencies, patients must immediately contact local hospital emergency facilities. Built with architectural awareness of the Digital Personal Data Protection (DPDP) Act 2023 and Telemedicine Practice Guidelines India; no official government or statutory certification is claimed.",
    faqs: [
      {
        question: "Can patients book appointments without installing an app?",
        answer:
          "Yes. The entire booking workflow operates inside standard mobile web browsers and connects directly to your clinic's WhatsApp or receptionist phone without forcing patients to download any app.",
      },
      {
        question: "How does the live OPD queue tracker work?",
        answer:
          "Your clinic receptionist updates the current token number with one tap on their phone. Patients can check the website from home to see the current OPD number, avoiding long waits in crowded clinic waiting rooms.",
      },
      {
        question: "Do you publish patient testimonials or ratings on doctor websites?",
        answer:
          "No. In adherence to National Medical Commission (NMC) ethics guidelines and white-hat SEO best practices, we avoid self-promotional patient testimonials, superlative claims ('best doctor'), or commercial promotional reviews on medical clinic pages.",
      },
      {
        question: "Is patient data stored securely?",
        answer:
          "Appointment requests are routed directly to your clinic's private communications channel (WhatsApp/email) rather than stored in unmanaged public databases, protecting patient privacy under DPDP Act principles.",
      },
    ],
    lastModified: "2026-11-04T00:00:00Z",
  },
  {
    id: 3,
    slug: "education-elearning-websites",
    title: "Education & E-Learning Portals",
    shortTitle: "Education & LMS",
    wave: 2,
    isPublished: false,
    tagline: "Course catalogs, interactive quizzes, video modules, and student enrollment systems.",
    answerBox:
      "Education web development by Niraj Kumar Dangi builds fast learning portals for coaching institutes, private tutors, and training academies. Features include course catalogs, student intake forms, video module integration, and quiz assessments.",
    primaryKeyword: "coaching institute website development",
    secondaryKeywords: [
      "custom lms website developer india",
      "online test and quiz website developer",
      "school and college website design ranchi",
    ],
    targetAudience: {
      headline: "Tailored for coaching institutes, competitive exam academies, and online educators.",
      examples: [
        "Competitive coaching centers in Ranchi (JEE, NEET, UPSC, JPSC) publishing batch schedules and sample tests.",
        "Skill training institutes offering professional certification and student enrollments.",
        "Individual educators and course creators hosting video curriculum and notes.",
      ],
    },
    features: [
      {
        group: "Student Experience",
        items: [
          "Categorized course catalog with syllabus preview and faculty profiles",
          "Interactive timed MCQ practice tests with instant score analysis",
          "Secure video lesson player supporting Vimeo, YouTube Unlisted, or Bunny.net",
          "Downloadable course notes, study material PDFs, and previous year papers",
          "Admission inquiry form with batch timing and fee breakdown",
        ],
      },
      {
        group: "Institute Administration",
        items: [
          "Batch schedule announcement board and notice ticker",
          "Student enrollment workflow with optional Razorpay fee processing",
          "Lead management for student counseling and demo class requests",
          "Student performance reporting exports (CSV / PDF)",
        ],
      },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Bunny.net Video Stream"],
    integrations: ["Razorpay fee gateway", "Bunny.net / Vimeo video CDN", "WhatsApp alerts"],
    priceRange: {
      inr: "₹14,999 – ₹34,999",
      usd: "$450 – $1,100",
    },
    timeline: "3 to 4 weeks",
    proof: {
      name: "Apex Prep LMS (Demo Build Queue)",
      status: "Build Queue",
      description: "Concept demo currently in development queue. Features course catalog, sample video player, and timed MCQ quiz.",
      featuresDemonstrated: [
        "Timed MCQ diagnostic quiz with instant score calculation",
        "Course syllabus accordion and downloadable sample notes",
        "Admission inquiry with WhatsApp dispatch",
      ],
    },
    complianceNotes:
      "Educational content and student records are treated with privacy safeguards; fee collections are processed exclusively through certified payment gateways.",
    faqs: [
      {
        question: "When will the live demo be available?",
        answer:
          "This solution is currently in the active build queue. Contact Niraj directly to review prototype wireframes or request a custom build proposal.",
      },
    ],
    lastModified: "2026-11-04T00:00:00Z",
  },
  {
    id: 4,
    slug: "saas-development",
    title: "SaaS Application & MVP Engineering",
    shortTitle: "SaaS Products",
    wave: 1.5,
    isPublished: false,
    tagline: "Full-stack web applications with authentication, credit metering, and subscription billing.",
    answerBox:
      "SaaS engineering by Niraj Kumar Dangi builds production-ready software MVPs using Next.js, Node.js, and MongoDB/PostgreSQL. Features include OAuth authentication, Stripe/Razorpay recurring subscriptions, usage credit metering, and administrative dashboards.",
    primaryKeyword: "full stack saas developer india",
    secondaryKeywords: [
      "nextjs saas mvp development",
      "saas subscription billing integration stripe",
      "build mvp for startup india",
    ],
    targetAudience: {
      headline: "Built for founders, indie hackers, and agencies launching digital products.",
      examples: [
        "Startup founders validating software ideas with a working MVP in weeks rather than months.",
        "Agencies packaging recurring client services into automated software dashboards.",
        "B2B service providers creating client collaboration and file management portals.",
      ],
    },
    features: [
      {
        group: "User & Security",
        items: [
          "Google OAuth, email magic-link, and credential authentication",
          "Role-based access control (Admin, Member, Viewer)",
          "Profile management, session control, and API token creation",
        ],
      },
      {
        group: "Billing & Architecture",
        items: [
          "Stripe or Razorpay recurring subscription billing with customer portal",
          "Usage-based credit tracking and rate-limiting middleware",
          "Responsive analytics dashboard with charts and operational stats",
          "Scalable REST and server action API endpoints",
        ],
      },
    ],
    stack: ["Next.js (App Router)", "Node.js", "TypeScript", "MongoDB / PostgreSQL", "Stripe SDK"],
    integrations: ["Stripe Billing / Customer Portal", "Google OAuth / NextAuth", "Resend Transactional Email"],
    priceRange: {
      inr: "₹24,999 – ₹69,999",
      usd: "$750 – $2,200",
    },
    timeline: "3 to 6 weeks",
    proof: {
      slug: "write-nova",
      name: "WriteNova AI Platform",
      status: "Concept",
      description: "Full-stack SaaS application with Google OAuth, tokenized usage credits, and Stripe subscription billing.",
      featuresDemonstrated: [
        "Google OAuth & email magic-link authentication",
        "Tokenized credit deduction engine for API calls",
        "Stripe checkout session integration and webhook handler",
      ],
    },
    complianceNotes:
      "Subscriptions and card details are handled entirely via Stripe or Razorpay compliance vaults. Zero cardholder data touches the application server.",
    faqs: [
      {
        question: "Do I get full ownership of the source code?",
        answer:
          "Yes. 100% of the repository, database schemas, and deployment scripts are transferred directly to your GitHub and hosting accounts upon project handover.",
      },
    ],
    lastModified: "2026-11-04T00:00:00Z",
  },
  {
    id: 5,
    slug: "real-estate-websites",
    title: "Real Estate & Property Portals",
    shortTitle: "Real Estate",
    wave: 2,
    isPublished: false,
    tagline: "Property listings, interactive maps, EMI calculators, and lead capture for brokers and builders.",
    answerBox:
      "Real estate web development by Niraj Kumar Dangi provides property listing websites for builders and property consultants. Features include locality search, amenity maps, mortgage EMI calculators, and verified RERA disclosure templates.",
    primaryKeyword: "real estate website development india",
    secondaryKeywords: [
      "property listing website developer",
      "emi calculator property website",
      "real estate broker website design ranchi",
    ],
    targetAudience: {
      headline: "Designed for property builders, real estate agencies, and individual brokers.",
      examples: [
        "Residential property developers in Ranchi showcasing upcoming residential towers.",
        "Real estate consultants managing resale, commercial leasing, and plot listings.",
      ],
    },
    features: [
      {
        group: "Property Showcase",
        items: [
          "Advanced filter by locality, budget, BHK, property type, and possession date",
          "Comprehensive property specifications (Carpet Area, Super Built-up, Facing, Floor)",
          "Mandatory [RERA_NUMBER] registration verification badge and document download",
          "Interactive Leaflet / OpenStreetMap amenity map showing nearby landmarks",
          "Client-side EMI calculator with adjustable loan amount, interest rate, and tenure",
        ],
      },
      {
        group: "Lead Capture",
        items: [
          "1-click 'Schedule Site Visit' modal with instant WhatsApp dispatch",
          "Floor plan PDF brochure download with automated lead capture",
          "Direct agent calling and WhatsApp contact buttons",
        ],
      },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Leaflet Maps"],
    integrations: ["Leaflet / OpenStreetMap", "WhatsApp Business API"],
    priceRange: {
      inr: "₹14,999 – ₹34,999",
      usd: "$450 – $1,100",
    },
    timeline: "2 to 3 weeks",
    proof: {
      name: "RanchiHomes Portal (Demo Build Queue)",
      status: "Build Queue",
      description: "Concept demo currently in development queue. Features neighborhood property filters, Leaflet map view, and interactive EMI calculator.",
      featuresDemonstrated: [
        "Locality-filtered property search for Ranchi neighborhoods",
        "Interactive EMI calculator slider",
        "Mandatory [RERA_NUMBER] compliance badge placeholder",
      ],
    },
    complianceNotes:
      "All property listing templates are architected to display the mandatory state Real Estate Regulatory Authority (RERA) registration number [RERA_NUMBER] and developer disclaimers in accordance with RERA regulations.",
    faqs: [
      {
        question: "When will the real estate demo be published?",
        answer:
          "This solution is currently in the active build queue. Contact Niraj directly to request wireframe previews or an early project quote.",
      },
    ],
    lastModified: "2026-11-04T00:00:00Z",
  },
  {
    id: 6,
    slug: "ai-chatbots-automation",
    title: "AI Chatbots & Business Workflow Automation",
    shortTitle: "AI & Automation",
    wave: 1,
    isPublished: true,
    tagline: "Private document RAG assistants, WhatsApp automated responders, and lead triage workflows.",
    answerBox:
      "AI and automation engineering by Niraj Kumar Dangi integrates conversational assistants and automated workflows into business websites. Solutions include air-gapped private document RAG pipelines, WhatsApp automated enquiry triage, and instant FAQ responders.",
    primaryKeyword: "ai chatbot developer india",
    secondaryKeywords: [
      "custom rag chatbot development",
      "whatsapp chatbot for business india",
      "private ai document assistant for business",
      "ai chatbot developer ranchi",
    ],
    targetAudience: {
      headline: "Built for clinics, customer service teams, and businesses handling repetitive enquiries.",
      examples: [
        "Medical clinics wanting to answer common patient questions on OPD timings and fees 24/7.",
        "Small businesses in Ranchi needing automated WhatsApp triage before handing off to human staff.",
        "Enterprises with private SOP documents and product manuals requiring search without cloud data leakage.",
      ],
    },
    features: [
      {
        group: "Conversational AI Capabilities",
        items: [
          "Private document indexing (PDF, DOCX, TXT) with exact source text citations",
          "Air-gapped local model compatibility (Ollama / Llama 3 / Qwen) for zero cloud leakage",
          "Cloud model compatibility (Google Gemini / OpenAI) for cost-efficient general queries",
          "Interactive chat widget with streaming responses and confidence indicators",
        ],
      },
      {
        group: "Business Automation",
        items: [
          "WhatsApp automated enquiry triage routing high-value leads to staff phones",
          "Automated lead capture feeding into Google Sheets, Notion, or internal databases",
          "Out-of-office automated replies with next-business-day callback booking",
          "Automated email notifications via Resend on new customer enquiries",
        ],
      },
    ],
    stack: ["Next.js (App Router)", "FastAPI", "Python", "ChromaDB", "Ollama / Gemini API", "Tailwind CSS"],
    integrations: [
      "ChromaDB local vector embeddings",
      "Google Gemini API / OpenAI API",
      "WhatsApp Business API webhooks",
      "Resend email dispatch",
    ],
    priceRange: {
      inr: "₹12,999 – ₹39,999",
      usd: "$380 – $1,300",
    },
    timeline: "2 to 3 weeks",
    proof: {
      slug: "ai-knowledge-assistant",
      name: "AI Knowledge Assistant",
      status: "Concept",
      description: "Air-gapped document intelligence pipeline using FastAPI, ChromaDB, and local LLMs with sentence-level citations.",
      featuresDemonstrated: [
        "100% local vector processing with zero data leakage to external clouds",
        "PDF/DOCX ingestion with sentence-level source highlights",
        "Interactive chat interface with cosine similarity transparency badges",
      ],
    },
    complianceNotes:
      "For enterprise deployments with proprietary documents, solutions can run on air-gapped local hardware where data never leaves your internal network. Cloud-hosted models use official APIs with explicit zero-data-retention agreements where supported.",
    faqs: [
      {
        question: "Can the AI hallucinate incorrect information about my business?",
        answer:
          "Our RAG (Retrieval-Augmented Generation) pipeline strictly constrains the AI to answer exclusively from your provided documents, FAQs, and price lists. If an answer cannot be found in your documentation, the assistant politely declines and routes the user to human staff.",
      },
      {
        question: "Does this require expensive monthly GPU hosting?",
        answer:
          "No. For small businesses, we use Google Gemini Flash or OpenAI API which cost only a few paise per thousand queries, keeping monthly operating costs negligible (typically under ₹200/month for normal small business volumes).",
      },
      {
        question: "Can the chatbot run directly on WhatsApp?",
        answer:
          "Yes. We configure automated WhatsApp webhooks that receive customer messages, run them through your business knowledge base, and return verified replies directly inside the chat.",
      },
    ],
    lastModified: "2026-11-04T00:00:00Z",
  },
  {
    id: 7,
    slug: "travel-tourism-websites",
    title: "Travel & Tourism Agency Portals",
    shortTitle: "Travel & Tourism",
    wave: 2,
    isPublished: false,
    tagline: "Destination guides, itinerary timelines, tour package bookings, and inquiry workflows.",
    answerBox:
      "Travel web development by Niraj Kumar Dangi builds immersive websites for tour operators and travel agencies. Features include package showcases, day-by-day interactive itineraries, WhatsApp quotation dispatch, and seasonal travel advisories.",
    primaryKeyword: "tour package booking website developer",
    secondaryKeywords: [
      "travel agency website design india",
      "itinerary planning website development",
      "jharkhand tourism tour operator website",
    ],
    targetAudience: {
      headline: "Tailored for tour operators, travel agencies, and regional experience providers.",
      examples: [
        "Tour operators in Jharkhand organizing eco-tourism, waterfall trails, and wildlife safaris.",
        "Boutique travel agencies promoting domestic and international custom holiday packages.",
      ],
    },
    features: [
      {
        group: "Tour Showcase",
        items: [
          "Package showcases categorized by region, duration, budget, and travel style",
          "Day-by-day interactive itinerary timeline with hotel and transfer details",
          "High-resolution destination photo galleries with mobile-optimized loading",
          "Seasonal travel advisories, packing guidelines, and route condition alerts",
        ],
      },
      {
        group: "Booking & Inquiries",
        items: [
          "Custom tour quotation form with guest count, dates, and travel preferences",
          "Instant WhatsApp itinerary consultation dispatch",
          "Customer review cards and trip photo submissions",
        ],
      },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    integrations: ["WhatsApp Business API", "Google Maps Platform"],
    priceRange: {
      inr: "₹12,999 – ₹29,999",
      usd: "$400 – $950",
    },
    timeline: "2 to 3 weeks",
    proof: {
      name: "WildTrail Jharkhand (Demo Build Queue)",
      status: "Build Queue",
      description: "Concept travel demo currently in development queue. Features Betla, Patratu, and Netarhat packages with day-by-day itinerary timelines.",
      featuresDemonstrated: [
        "Interactive day-by-day tour itinerary timeline",
        "Custom quotation form with WhatsApp dispatch",
        "Regional travel advisory notes",
      ],
    },
    complianceNotes:
      "Travel operator registration numbers, cancellation policies, and refund terms are prominently integrated on booking templates in compliance with tourism standards.",
    faqs: [
      {
        question: "When will the travel agency demo be available?",
        answer:
          "This solution is currently in the active build queue. Contact Niraj directly to discuss your travel company's requirements.",
      },
    ],
    lastModified: "2026-11-04T00:00:00Z",
  },
  {
    id: 8,
    slug: "portfolio-personal-branding-websites",
    title: "Portfolio & Personal Branding Websites",
    shortTitle: "Portfolio & Studio",
    wave: 1,
    isPublished: true,
    tagline: "High-craft editorial portfolios for wedding planners, photographers, artists, and consultants.",
    answerBox:
      "Portfolio web development by Niraj Kumar Dangi delivers high-craft editorial portfolios for creative professionals, photographers, wedding planners, and artists. Built for mobile-first speed, zero layout shift, and high-conversion client inquiries.",
    primaryKeyword: "portfolio website developer india",
    secondaryKeywords: [
      "wedding planner website design india",
      "photographer portfolio website design",
      "artist gallery website design",
      "event organiser website developer",
    ],
    targetAudience: {
      headline: "Crafted for luxury wedding planners, commercial photographers, artists, and boutique studios.",
      examples: [
        "Wedding planners in East India establishing date-exclusivity and closing high-budget banquet clients.",
        "Commercial and portrait photographers wanting high-resolution galleries that load instantly on mobile 4G.",
        "Visual artists and studio creators requiring distraction-free catalogs with artwork acquisition status.",
      ],
    },
    features: [
      {
        group: "Visual Craft & Storytelling",
        items: [
          "Distraction-free editorial canvas viewer with full-bleed imagery and zero CLS",
          "Real-time acquisition and availability badges (Available, Reserved, Acquired)",
          "Monthly date exclusivity calendar showing remaining open weekends for weddings and shoots",
          "Interactive client project case studies with deliverables, venue credits, and results",
          "High-contrast light and soft dark mode optimized for visual artwork",
        ],
      },
      {
        group: "Client Inquiries & Social Synergy",
        items: [
          "Direct WhatsApp commission and booking buttons prefilled with project context",
          "Synchronized Instagram feed grid embedding without slowing page load",
          "Downloadable media kit, rate card, and exhibition catalog PDFs",
          "Structured Person and CreativeWork JSON-LD schema for personal branding",
        ],
      },
    ],
    stack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Motion primitives"],
    integrations: ["WhatsApp Business API", "Instagram Graph API (optional)", "Resend for client inquiries"],
    priceRange: {
      inr: "₹9,999 – ₹24,999",
      usd: "$300 – $800",
    },
    timeline: "7 to 14 days",
    proof: {
      slug: "ananya-sen-art",
      name: "Ananya Sen Fine Art & Utsav Luxury Weddings",
      status: "Concept",
      description: "Bespoke fine art catalog and editorial luxury wedding brand showcases engineered for visual fidelity.",
      featuresDemonstrated: [
        "Editorial art viewer with artwork dimensions, medium, and acquisition status",
        "Monthly wedding date availability tracker with direct banquet inquiry prefill",
        "60fps gesture-based motion tabs and safe-area drawer navigation",
      ],
    },
    complianceNotes:
      "Copyright and intellectual property rights are protected through proper image metadata, attribution notices, and watermark-ready layout architecture.",
    faqs: [
      {
        question: "Why not just rely on an Instagram profile?",
        answer:
          "Instagram is an algorithm you don't control. A custom website establishes editorial authority, lets you present full-resolution work without compression, locks date exclusivity, and ranks on Google when high-budget clients search for professionals.",
      },
      {
        question: "Will high-resolution images slow down my mobile website?",
        answer:
          "No. All images are automatically converted to next-generation AVIF and WebP formats, served in exact device dimensions with blur placeholders, achieving sub-1-second mobile renders with zero cumulative layout shift (CLS).",
      },
      {
        question: "Can I update new projects myself?",
        answer:
          "Yes. Adding a new case study or artwork is as simple as adding photos and text to a structured data file or a lightweight visual editor, without writing any code.",
      },
    ],
    lastModified: "2026-11-04T00:00:00Z",
  },
  {
    id: 9,
    slug: "nonprofit-community-websites",
    title: "Nonprofit, Trust & Community Websites",
    shortTitle: "Nonprofit & Community",
    wave: 1,
    isPublished: true,
    tagline: "Transparent donation pages, volunteer coordination, and impact showcases for NGOs.",
    answerBox:
      "Nonprofit web development by Niraj Kumar Dangi builds credible, transparent websites for NGOs, charitable trusts, and community initiatives. Features include online donation integrations (Razorpay Donations), volunteer registration, and real-time impact metrics.",
    primaryKeyword: "donation website for ngo india",
    secondaryKeywords: [
      "ngo website design india",
      "razorpay donation integration website",
      "volunteer registration website development",
      "trust and foundation website design jharkhand",
    ],
    targetAudience: {
      headline: "Engineered for registered NGOs, charitable trusts, and social impact initiatives.",
      examples: [
        "Regional NGOs in Jharkhand and Bihar raising funds for education, food security, and healthcare.",
        "Community initiatives coordinating volunteer drivers, blood donation, and relief supply chains.",
        "Social foundations publishing audited annual reports and project impact galleries for donor trust.",
      ],
    },
    features: [
      {
        group: "Donor Trust & Giving",
        items: [
          "Seamless online donation button with one-time and recurring monthly giving options",
          "Razorpay Donations / Cashfree integration supporting UPI, Net Banking, and Cards",
          "Optional client-provided 80G tax exemption receipt data collection fields",
          "Transparent expenditure and impact breakdown graphics",
          "Audited annual report and registration certificate PDF download repository",
        ],
      },
      {
        group: "Community Operations",
        items: [
          "Volunteer registration and area coordination sign-up forms",
          "Emergency relief alert banner with instant dispatch updates",
          "Event calendar for community workshops, health camps, and distribution drives",
          "Direct WhatsApp coordinator hotline for urgent queries",
        ],
      },
    ],
    stack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Razorpay Donations SDK"],
    integrations: [
      "Razorpay Donations / Cashfree Payments",
      "WhatsApp Business API for volunteer coordination",
      "Resend for automated donor contribution acknowledgments",
    ],
    priceRange: {
      inr: "₹9,999 – ₹24,999",
      usd: "$300 – $800",
    },
    timeline: "10 to 18 days",
    proof: {
      slug: "feedaid",
      name: "FeedAid Relief Platform",
      status: "Concept",
      description: "Community surplus food redistribution platform connecting banquet hosts with local shelters in Ranchi.",
      featuresDemonstrated: [
        "Real-time surplus meal notification dispatch with volunteer geofencing",
        "Hygienic verification checklist and temperature validation logging",
        "Shelter inventory tracker matching meal types to dietary requirements",
      ],
    },
    complianceNotes:
      "80G and 12A tax exemption notices, NGO registration numbers (Darpan ID / Trust Registration), and FCRA disclosures are displayed strictly based on valid client-provided documentation. Donations are processed directly through certified gateways into the NGO's registered bank account.",
    faqs: [
      {
        question: "Can donors pay using Google Pay, PhonePe, or UPI?",
        answer:
          "Yes. Our integration supports all Indian UPI apps (Google Pay, PhonePe, Paytm, BHIM), Net Banking, and Debit/Credit cards through Razorpay's trusted donation interface.",
      },
      {
        question: "Can the website collect 80G tax receipt details automatically?",
        answer:
          "Yes. The donation flow includes optional PAN and address fields required for generating Section 80G tax exemption receipts for Indian donors.",
      },
      {
        question: "Do you take any commission on donations?",
        answer:
          "Zero commission. Niraj Kumar Dangi charges only a one-time website design fee. 100% of donor funds flow directly to your NGO's bank account (subject only to standard gateway transaction charges of ~2%).",
      },
    ],
    lastModified: "2026-11-04T00:00:00Z",
  },
];

export function getPublishedSolutions(): Solution[] {
  return solutions.filter((s) => s.isPublished);
}

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
