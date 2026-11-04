import type { AboutData } from "@/types";

export const aboutData: AboutData = {
  name: "Niraj Kumar Dangi",
  headline:
    "An independent engineer based in Ranchi, building websites and applied AI that earn enquiries.",
  location: "Ranchi, Jharkhand, India",
  bio: [
    "I design and engineer websites for doctors, creators, wedding brands, and local service companies in Ranchi, as well as remote startups worldwide.",
    "Most small business websites fail not because of bad code, but because they are designed for developers instead of customers. I focus on clarity over cleverness: clean typography, 4G mobile speed, instant WhatsApp triggers, and transparent pricing.",
    "I hold a Master of Computer Applications (MCA) degree and build with modern tools like Next.js, TypeScript, Tailwind, FastAPI, and local AI pipelines. When you work with me, there are no account managers, no junior handoffs, and zero template markups. You work directly with the builder.",
  ],
  education: {
    degree: "Master of Computer Applications (MCA)",
    institution: "Ranchi University / Affiliated Institute",
    location: "Ranchi, Jharkhand",
    focus:
      "Software Engineering, Distributed Systems & Applied Artificial Intelligence",
  },
  principles: [
    {
      title: "Clarity beats cleverness",
      description:
        "Your customers are not software engineers. If they cannot understand your fee, your OPD timing, or how to contact you within 5 seconds, the website failed.",
    },
    {
      title: "You own every single file",
      description:
        "No monthly proprietary platform lock-in. You receive full GitHub repository access, deployment credentials, and clean source code on day one.",
    },
    {
      title: "Real timelines, no fake promises",
      description:
        "A 5-page site takes 10 to 14 days when done properly. I will never promise a 24-hour turnaround on a custom project just to win a deposit.",
    },
    {
      title: "Direct communication only",
      description:
        "No ticketing systems or bureaucratic agency layers. You message me directly on WhatsApp and get updates directly from the person writing your code.",
    },
  ],
  skillGroups: [
    {
      category: "Frontend & Architecture",
      skills: [
        "Next.js (App Router)",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Motion / Framer Motion",
        "Web Vitals (LCP/CLS/INP)",
      ],
    },
    {
      category: "AI, RAG & Backend",
      skills: [
        "Local LLMs (Ollama)",
        "Vector Databases (ChromaDB)",
        "FastAPI / Python",
        "Node.js / Express",
        "Retrieval-Augmented Generation (RAG)",
        "LangChain / LlamaIndex",
      ],
    },
    {
      category: "Databases & Deployment",
      skills: [
        "PostgreSQL / Supabase",
        "MongoDB",
        "Vercel / Cloudflare Edge",
        "Stripe / Razorpay API",
        "Resend Email API",
        "Git & CI/CD Pipelines",
      ],
    },
  ],
  responsePromise:
    "I reply to every genuine project message within 24 hours (usually under 2 hours on business days via WhatsApp).",
};

