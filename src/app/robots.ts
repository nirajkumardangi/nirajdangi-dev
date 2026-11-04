import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

  return {
    rules: [
      // 1. General search crawlers (Default fallback)
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",            // Private API endpoints (lead capture, webhook handlers)
          "/design-system",   // Review-only component sandbox
          "/*?*",             // Block query parameter variants to prevent crawl budget waste & duplicate content
        ],
      },
      // 2. Google Search Primary Web Crawler
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/design-system", "/*?*"],
      },
      // 3. Microsoft Bing Web Crawler (also feeds Bing Copilot, Yahoo & DuckDuckGo)
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/design-system", "/*?*"],
      },
      // 4. OpenAI Search Retrieval Bot (used by ChatGPT Search for real-time citations & search answers)
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/api/", "/design-system"],
      },
      // 5. ChatGPT Live User Retrieval (triggered when a ChatGPT user clicks or inspects a live web reference)
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/api/", "/design-system"],
      },
      // 6. Perplexity Search Retrieval Engine (indexes pages for Perplexity AI conversational citations)
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/", "/design-system"],
      },
      // 7. Perplexity User Actions (live user search queries on perplexity.ai)
      {
        userAgent: "Perplexity-User",
        allow: "/",
        disallow: ["/api/", "/design-system"],
      },
      // NOTE ON FOUNDATIONAL MODEL TRAINING BOTS (GPTBot & Google-Extended):
      // Training bots scrape text to train core model weights rather than providing search citations.
      // Retrieval bots (OAI-SearchBot, PerplexityBot) are explicitly allowed above to guarantee citations.
      // To configure GPTBot and Google-Extended training permissions, review with site owner.
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
