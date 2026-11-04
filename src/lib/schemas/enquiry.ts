import { z } from "zod";

export const BUSINESS_TYPES = [
  { value: "doctor", label: "Doctor / Clinic / Healthcare" },
  { value: "artist", label: "Artist / Creator / Photographer" },
  { value: "events", label: "Wedding Planner / Event Organiser" },
  { value: "services", label: "Local Service (RO / AC / Coaching)" },
  { value: "startup", label: "Startup / Agency / SaaS" },
  { value: "other", label: "Other Business" },
] as const;

export const SERVICE_OPTIONS = [
  { value: "website", label: "Business Website (from ₹4,999)" },
  { value: "ai-bot", label: "AI Chatbot & Automation (from ₹14,999)" },
  { value: "webapp", label: "Custom Web Application (from ₹29,999)" },
  { value: "care", label: "Maintenance & Monthly Care (from ₹999/mo)" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "starter", label: "Starter (₹4,999 – ₹12,999)" },
  { value: "standard", label: "Standard (₹12,999 – ₹24,999)" },
  { value: "premium", label: "Premium (₹24,999+)" },
  { value: "discuss", label: "Not sure / Discuss with Niraj" },
] as const;

// Phone number regex: accepts optional +, spaces, dashes, parentheses, with at least 10 digits
const phoneRegex = /^(\+?\d{1,4}[\s-]?)?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}$/;

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters)")
    .max(80, "Name is too long (maximum 80 characters)"),
  whatsapp: z
    .string()
    .trim()
    .min(10, "Please enter a valid WhatsApp or phone number (minimum 10 digits)")
    .regex(phoneRegex, "Please enter a valid phone number format"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  businessType: z.string().min(1, "Please select your business type"),
  service: z.string().min(1, "Please select the service you are interested in"),
  budget: z.string().min(1, "Please select an estimated budget"),
  message: z
    .string()
    .trim()
    .min(10, "Please share a few details about what you need (at least 10 characters)")
    .max(1000, "Message cannot exceed 1000 characters"),
  // Honeypot field: invisible to real users, populated by spam bots
  company_website: z.string().optional(),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

export const quickEnquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name"),
  whatsapp: z
    .string()
    .trim()
    .min(10, "Please enter a valid WhatsApp number")
    .regex(phoneRegex, "Please enter a valid phone number"),
  service: z.string().optional(),
  message: z.string().trim().optional(),
  company_website: z.string().optional(),
});

export type QuickEnquiryFormData = z.infer<typeof quickEnquirySchema>;

