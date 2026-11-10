import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "niraj.",
  tagline: "We Build Websites That Help Your Business Grow.",
  description:
    "Custom-designed and built for businesses in Ranchi and beyond. Fast on mobile. Clear to your customers. Yours to keep.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dev.niraj.online",
  owner: {
    name: "Niraj Kumar Dangi",
    location: "Ranchi, Jharkhand",
    whatsapp: "+918825224435",
    email: "nirajkrdangi@gmail.com",
    github: "https://github.com/nirajkumardangi",
    linkedin: "https://linkedin.com/in/nirajkumardangi",
    instagram: "https://instagram.com/nirajdangi.dev",
  },
  ogImage: "/images/og-image.png",
};
