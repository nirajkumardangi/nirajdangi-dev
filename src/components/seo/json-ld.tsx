import { siteConfig } from "@/data/site";

export function GlobalJsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.owner.name,
    jobTitle: "Freelance Software Engineer & Web Developer",
    url: siteConfig.url,
    sameAs: [siteConfig.owner.github, siteConfig.owner.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ranchi",
      addressRegion: "Jharkhand",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Ranchi University",
      award: "Master of Computer Applications (MCA)",
    },
    knowsAbout: [
      "Next.js Development",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "AI Chatbots & RAG",
      "Local Business SEO",
      "Websites for Doctors and Clinics",
      "Websites for Wedding and Event Brands",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#business`,
    name: `${siteConfig.owner.name} — Web Development & AI Automation`,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    image: `${siteConfig.url}/opengraph-image`,
    description:
      "Websites for doctors, creators and event brands in Ranchi and beyond, designed to get enquiries. Secondary offer: AI chatbots and automation.",
    telephone: siteConfig.owner.whatsapp,
    email: siteConfig.owner.email,
    priceRange: "₹₹ (from ₹4,999)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ranchi",
      addressRegion: "Jharkhand",
      postalCode: "834001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.3441,
      longitude: 85.3096,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Ranchi, Jharkhand",
      },
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "Country",
        name: "Worldwide (Remote)",
      },
    ],
    serviceArea: "Ranchi, Jharkhand, India & Global",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Website Development",
          description: "Mobile-first websites designed for clinics, studios, and local services to generate WhatsApp enquiries.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Chatbots & Lead Automation",
          description: "Custom conversational AI assistants trained on clinic SOPs, PDFs, and website FAQs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Application Engineering",
          description: "Tailored Next.js full-stack web applications with authentication and database architecture.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}

