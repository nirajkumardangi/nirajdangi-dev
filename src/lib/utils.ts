import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/data/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Builds a WhatsApp deep-link with a pre-filled message */
export function whatsappLink(message: string = DEFAULT_WA_MESSAGE): string {
  const number = siteConfig.owner.whatsapp.replace(/\D/g, "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

/** Builds a phone tel: link */
export function phoneLink(): string {
  const number = siteConfig.owner.whatsapp.replace(/[^\d+]/g, "");
  return `tel:${number}`;
}

export const DEFAULT_WA_MESSAGE =
  "Hi Niraj, I'd like to discuss a project.";

export const QUOTE_WA_MESSAGE =
  "Hi Niraj, I'd like to get a free quote for a website.";
