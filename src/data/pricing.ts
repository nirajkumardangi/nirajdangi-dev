import type {
  PricingTier,
  PricingAddon,
  MaintenancePlan,
  ComparisonRow,
} from "@/types";

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹4,999",
    targetAudience:
      "Best for local clinics, solo photographers, and on-demand home services needing a direct WhatsApp landing page.",
    features: [
      "1 Custom Landing Page (Hero, Services, Reviews, Contact)",
      "Mobile-First Responsive Layout (tested at 360px)",
      "Direct WhatsApp Consultation CTA button",
      "Google Maps Clinic/Office Routing Integration",
      "Fast CDN Hosting Setup (Free Tier Vercel)",
      "Basic On-Page Local SEO markup",
      "100% Code Handover & No Monthly Platform Fees",
    ],
    ctaLabel: "Get Starter Site",
    highlighted: false,
  },
  {
    id: "standard",
    name: "Standard",
    badge: "Most Popular",
    price: "₹12,999",
    targetAudience:
      "Ideal for established clinics, wedding planners, event brands, and creators wanting a multi-page editorial presence.",
    features: [
      "Up to 5 Custom Pages (Home, About, Services, Gallery, Contact)",
      "Interactive Filter or Date Availability Tracker",
      "Lead Capture Form with Instant Email & WhatsApp Alerts",
      "Custom Design System with Typography Craft (Geist + Serif)",
      "Device-Frame Mockups & Photo Gallery Optimization",
      "Full On-Page Technical & Local Search Optimization",
      "2 Structured Revision Rounds Included",
      "30-Day Post-Launch Technical Support Warranty",
    ],
    ctaLabel: "Get Standard Site",
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹24,999+",
    targetAudience:
      "For startups, healthcare groups, and businesses needing an AI chatbot, client portal, or custom automation.",
    features: [
      "Everything in Standard (Unlimited Core Content Pages)",
      "Custom AI Chatbot trained on your service FAQs & SOPs",
      "Automated Booking & Google Calendar / Sheets Integration",
      "User Authentication & Custom Client Dashboard",
      "Payment Gateway Integration (UPI / Razorpay / Stripe)",
      "Database Architecture (Supabase / MongoDB)",
      "Priority 48hr Turnaround on Revisions",
      "60-Day Dedicated Post-Launch Support",
    ],
    ctaLabel: "Discuss Premium",
    highlighted: false,
  },
];

export const pricingAddons: PricingAddon[] = [
  {
    title: "Domain & Business Email Setup",
    price: "₹1,499",
    description:
      "Custom .in/.com domain registration with Google Workspace or Zoho professional email inbox setup.",
  },
  {
    title: "AI Chatbot Widget Add-On",
    price: "₹6,999",
    description:
      "Embed a custom-trained Q&A chatbot into an existing website with WhatsApp enquiry routing.",
  },
  {
    title: "Additional Custom Sub-Page",
    price: "₹1,999",
    description:
      "One fully responsive, designed sub-page with custom copy structure and layout.",
  },
  {
    title: "Google Business & Local Map Pack Ranking",
    price: "₹2,999",
    description:
      "Optimization of your Google Business profile, local citations, schema markup, and verification audit.",
  },
];

export const maintenancePlans: MaintenancePlan[] = [
  {
    title: "Essential Care",
    price: "₹999",
    period: "/ month",
    features: [
      "Uptime monitoring & automated weekly backups",
      "Up to 2 content updates or image swaps per month",
      "Security patches & library dependency updates",
      "WhatsApp support response within 24 hours",
    ],
  },
  {
    title: "Studio Care",
    price: "₹2,499",
    period: "/ month",
    features: [
      "Everything in Essential Care",
      "Up to 5 content updates, new blogs, or portfolio cases",
      "Monthly performance & Google Search Console report",
      "Priority WhatsApp support response within 6 hours",
    ],
  },
  {
    title: "Growth & Automation",
    price: "₹4,999",
    period: "/ month",
    features: [
      "Everything in Studio Care",
      "Ongoing AI Chatbot knowledge base retraining",
      "Lead automation monitoring & API health checks",
      "1-on-1 monthly strategic consultation call",
    ],
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Custom Pages",
    starter: "1 Landing Page",
    standard: "Up to 5 Pages",
    premium: "Custom (6+ Pages)",
  },
  {
    feature: "Mobile-First Design (360px+)",
    starter: true,
    standard: true,
    premium: true,
  },
  {
    feature: "Direct WhatsApp Conversion Button",
    starter: true,
    standard: true,
    premium: true,
  },
  {
    feature: "Contact Form with Email Routing",
    starter: false,
    standard: true,
    premium: true,
  },
  {
    feature: "Local SEO & Schema Markup",
    starter: "Basic",
    standard: "Comprehensive",
    premium: "Advanced + Blog",
  },
  {
    feature: "Interactive Date / Filter Tool",
    starter: false,
    standard: true,
    premium: true,
  },
  {
    feature: "AI Chatbot Integration",
    starter: false,
    standard: "Add-on",
    premium: true,
  },
  {
    feature: "Database & User Authentication",
    starter: false,
    standard: false,
    premium: true,
  },
  {
    feature: "Revision Rounds Included",
    starter: "1 Round",
    standard: "2 Rounds",
    premium: "Unlimited during build",
  },
  {
    feature: "Delivery Timeline",
    starter: "5–7 Days",
    standard: "10–14 Days",
    premium: "2–4 Weeks",
  },
  {
    feature: "Source Code Ownership",
    starter: "100% Handover",
    standard: "100% Handover",
    premium: "100% Handover",
  },
  {
    feature: "Post-Launch Warranty",
    starter: "15 Days",
    standard: "30 Days",
    premium: "60 Days",
  },
];

export const paymentTerms = {
  advancePercentage: "50%",
  handoverPercentage: "50%",
  description:
    "50% upfront to reserve your build slot; 50% only after staging preview approval and prior to live domain launch. No recurring platform fees.",
  internationalNote:
    "International clients: starting from $300 USD. Custom invoice and quote provided via Stripe or Wise.",
};
