import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "business-websites",
    number: "01",
    title: "Business Websites",
    forWho:
      "Doctors, wedding planners, creators, photographers, and local service businesses in Ranchi and beyond.",
    description:
      "Fast, mobile-first sites engineered specifically to turn local visitors into WhatsApp consultations and phone calls. Not a generic WordPress template — custom-coded on Next.js, accessible on any 4G connection, and yours to keep forever.",
    deliverables: [
      "Custom responsive design (mobile-first for 360px+ screens)",
      "High-intent WhatsApp consultation buttons with prefilled messages",
      "Local SEO markup, Google Business integration & Google Maps routing",
      "Full source code ownership with zero monthly platform lock-in",
      "Domain setup, SSL configuration, and deployment on Vercel/Cloudflare",
    ],
    timeline: "5 – 10 working days",
    startingPrice: "₹4,999",
    ctaMessage: "Hi Niraj, I'm interested in a custom Business Website.",
  },
  {
    id: "ai-chatbots",
    number: "02",
    title: "AI Chatbots & Automation",
    forWho:
      "Clinics, service providers, and brands receiving repetitive enquiries outside office hours.",
    description:
      "Conversational chat assistants trained directly on your service catalog, clinic OPD timings, and pricing FAQs. Answers patient and client questions 24/7 at 2 AM, qualifies serious leads, and routes booking tokens straight to WhatsApp.",
    deliverables: [
      "Custom chatbot trained on your SOPs, PDFs, and website FAQs",
      "Direct integration with WhatsApp Business API or website widget",
      "Zero-cloud local privacy option (Ollama/ChromaDB) for confidential data",
      "Automated appointment token generation and Google Sheets sync",
      "Lead qualification filter that routes serious enquiries to your phone",
    ],
    timeline: "7 – 14 working days",
    startingPrice: "₹14,999",
    ctaMessage:
      "Hi Niraj, I'd like to discuss an AI Chatbot or automation for my business.",
  },
  {
    id: "custom-web-apps",
    number: "03",
    title: "Custom Web Apps",
    forWho:
      "Startups, agencies, and regional businesses needing internal tools, customer dashboards, or booking portals.",
    description:
      "Full-stack reactive web applications with user authentication, database architecture, payment gateway integration, and administrative controls. Built on modern Next.js App Router, TypeScript, and serverless backends.",
    deliverables: [
      "Role-based authentication (Google OAuth, phone OTP, email magic links)",
      "Relational or document database design (PostgreSQL / Supabase / MongoDB)",
      "Payment gateway integration (UPI, Razorpay, or Stripe)",
      "Internal admin dashboard for managing bookings, orders, and leads",
      "Automated transactional emails and WhatsApp status notifications",
    ],
    timeline: "2 – 4 weeks",
    startingPrice: "₹24,999",
    ctaMessage:
      "Hi Niraj, I have a custom web app or SaaS project I'd like to build.",
  },
];
