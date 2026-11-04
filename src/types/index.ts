// Central type definitions for niraj.online v2

export type ProjectStatus = "Live" | "Concept";

export type ProjectVertical =
  | "Doctor"
  | "Wedding"
  | "Event"
  | "Photographer"
  | "Artist"
  | "Coaching"
  | "Service"
  | "AI"
  | "SaaS"
  | "Personal";

export interface Project {
  slug: string;
  title: string;
  name?: string;
  vertical: ProjectVertical;
  status: ProjectStatus;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  role: string;
  timeline?: string;
  liveUrl?: string;
  repoUrl?: string;
  images: {
    desktop: string;
    mobile?: string;
  };
  results: string[];
  featured: boolean;
}

export interface Service {
  id: string;
  number: string; // "01", "02", "03"
  title: string;
  forWho: string;
  description: string;
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  ctaMessage: string;
}

export interface ProcessStep {
  step: string; // "01", "02", "03", "04"
  title: string;
  timeframe: string;
  description: string;
  deliverables: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: string;
  targetAudience: string;
  features: string[];
  ctaLabel: string;
  highlighted: boolean;
}

export interface PricingAddon {
  title: string;
  price: string;
  description: string;
}

export interface MaintenancePlan {
  title: string;
  price: string;
  period: string;
  features: string[];
}

export interface ComparisonRow {
  feature: string;
  starter: boolean | string;
  standard: boolean | string;
  premium: boolean | string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface AboutData {
  name: string;
  headline: string;
  bio: string[];
  education: {
    degree: string;
    institution: string;
    location: string;
    focus: string;
  };
  principles: {
    title: string;
    description: string;
  }[];
  skillGroups: {
    category: string;
    skills: string[];
  }[];
  responsePromise: string;
  location: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  business: string;
  location: string;
  verified: boolean;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  owner: {
    name: string;
    location: string;
    whatsapp: string;
    email: string;
    github: string;
    linkedin: string;
  };
  ogImage: string;
}
