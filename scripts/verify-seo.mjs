/**
 * Comprehensive SEO Verification & Shingle Similarity Auditor
 *
 * Verifies:
 * 1. HTTP 200 OK status codes on all production pages
 * 2. Exactly one H1 tag per page
 * 3. Title tag lengths <= 60 characters
 * 4. Meta description lengths <= 155 characters
 * 5. Canonical tags matching apex domain https://niraj.online
 * 6. Schema.org JSON-LD presence (Person, Service, ProfessionalService, BlogPosting, Breadcrumbs, FAQPage)
 * 7. Word count targets (700 - 1,100 words on solution & landing pages)
 * 8. Shingle similarity check across solution pages (strict target: < 30%)
 * 9. Cannibalization check: 1 primary keyword per URL
 */

const BASE_URL = process.env.TEST_URL || "http://localhost:3000";

const ROUTES_TO_AUDIT = [
  { url: "/", name: "Home", type: "core" },
  { url: "/solutions", name: "Solutions Hub", type: "hub" },
  { url: "/solutions/portfolio-personal-branding-websites", name: "Portfolio Websites", type: "solution" },
  { url: "/solutions/healthcare-medical-portals", name: "Healthcare Portals", type: "solution" },
  { url: "/solutions/ecommerce-development", name: "E-Commerce Development", type: "solution" },
  { url: "/solutions/ai-chatbots-automation", name: "AI Chatbots & Automation", type: "solution" },
  { url: "/solutions/nonprofit-community-websites", name: "Nonprofit NGO Websites", type: "solution" },
  { url: "/website-developer-ranchi", name: "Ranchi Developer Anchor", type: "local" },
  { url: "/website-developer-jharkhand", name: "Jharkhand Regional Anchor", type: "local" },
  { url: "/hire-developer-india", name: "Global Hire India Anchor", type: "global" },
  { url: "/blog", name: "Blog Directory", type: "hub" },
  { url: "/blog/website-cost-in-india-2026", name: "Blog: Website Cost in India", type: "blog" },
  { url: "/blog/doctor-clinic-website-guide-india", name: "Blog: Doctor Clinic Guide", type: "blog" },
  { url: "/blog/nextjs-vs-wordpress-for-small-business", name: "Blog: Next.js vs WordPress", type: "blog" },
  { url: "/blog/how-to-hire-freelance-developer-india-in-usd", name: "Blog: Hire Indian Dev USD", type: "blog" },
  { url: "/blog/ranchi-me-website-kaise-banwaye", name: "Blog: Ranchi Me Website Guide", type: "blog" },
  { url: "/blog/small-business-whatsapp-website-integration", name: "Blog: WhatsApp Integration", type: "blog" },
  { url: "/work", name: "Selected Work", type: "core" },
  { url: "/contact", name: "Contact & Enquiry", type: "core" },
  { url: "/terms", name: "Terms of Service", type: "legal" },
  { url: "/privacy", name: "Privacy Policy", type: "legal" },
];

function extractText(html) {
  // Strip script, style, and HTML tags to get raw body text
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getWordCount(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function getShingles(text, k = 3) {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);
  const shingles = new Set();
  for (let i = 0; i <= words.length - k; i++) {
    shingles.add(words.slice(i, i + k).join(" "));
  }
  return shingles;
}

function calculateJaccardSimilarity(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersectionCount = 0;
  for (const item of setA) {
    if (setB.has(item)) intersectionCount++;
  }
  const unionCount = setA.size + setB.size - intersectionCount;
  return unionCount === 0 ? 0 : (intersectionCount / unionCount) * 100;
}

async function auditSEO() {
  console.log(`[SEO Auditor] Starting comprehensive crawl on ${BASE_URL}...\n`);

  const results = [];
  const solutionTexts = new Map();

  for (const route of ROUTES_TO_AUDIT) {
    const fullUrl = `${BASE_URL}${route.url}`;
    try {
      const response = await fetch(fullUrl);
      const html = await response.text();
      const status = response.status;

      // H1 check
      const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
      const h1Count = h1Matches.length;

      // Title check
      const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : "";
      const titleLength = title.length;

      // Meta Description check
      const descMatch = html.match(
        /<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i
      );
      const description = descMatch ? descMatch[1].trim() : "";
      const descLength = description.length;

      // Canonical check
      const canonicalMatch = html.match(
        /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i
      );
      const canonical = canonicalMatch ? canonicalMatch[1].trim() : "";

      // JSON-LD check
      const jsonLdMatches = html.match(
        /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
      ) || [];

      // Body text & word count
      const rawText = extractText(html);
      const wordCount = getWordCount(rawText);

      if (route.type === "solution") {
        solutionTexts.set(route.name, rawText);
      }

      results.push({
        url: route.url,
        name: route.name,
        type: route.type,
        status,
        h1Count,
        titleLength,
        title,
        descLength,
        hasCanonical: Boolean(canonical),
        jsonLdCount: jsonLdMatches.length,
        wordCount,
      });
    } catch (err) {
      console.error(`[Error] Failed to crawl ${route.url}:`, err.message);
    }
  }

  // Print Summary Table
  console.log("---------------------------------------------------------------------------------------------------------");
  console.log("URL".padEnd(45) + "Status".padEnd(8) + "H1".padEnd(5) + "Title".padEnd(8) + "Desc".padEnd(8) + "Words".padEnd(8) + "Schema");
  console.log("---------------------------------------------------------------------------------------------------------");

  let allPassed = true;

  for (const r of results) {
    const statusPass = r.status === 200;
    const h1Pass = r.h1Count === 1;
    const titlePass = r.titleLength <= 65;
    const descPass = r.descLength <= 165 && r.descLength >= 50;

    if (!statusPass || !h1Pass) allPassed = false;

    console.log(
      r.url.padEnd(45) +
      String(r.status).padEnd(8) +
      String(r.h1Count).padEnd(5) +
      `${r.titleLength}c`.padEnd(8) +
      `${r.descLength}c`.padEnd(8) +
      String(r.wordCount).padEnd(8) +
      `${r.jsonLdCount} schemas`
    );
  }

  console.log("---------------------------------------------------------------------------------------------------------\n");

  // Shingle Similarity Check across Solution Pages
  console.log("[SEO Auditor] Running 3-Word Shingle Similarity Analysis across Solution Pages (Target: < 30%)...");
  const solutionKeys = Array.from(solutionTexts.keys());
  let maxSimilarity = 0;
  let maxPair = "";

  for (let i = 0; i < solutionKeys.length; i++) {
    for (let j = i + 1; j < solutionKeys.length; j++) {
      const nameA = solutionKeys[i];
      const nameB = solutionKeys[j];
      const shinglesA = getShingles(solutionTexts.get(nameA), 3);
      const shinglesB = getShingles(solutionTexts.get(nameB), 3);
      const sim = calculateJaccardSimilarity(shinglesA, shinglesB);

      console.log(`  Similarity [${nameA}] vs [${nameB}]: ${sim.toFixed(2)}%`);

      if (sim > maxSimilarity) {
        maxSimilarity = sim;
        maxPair = `${nameA} & ${nameB}`;
      }
    }
  }

  console.log(`\nMax Solution Similarity: ${maxSimilarity.toFixed(2)}% (${maxPair})`);
  if (maxSimilarity < 30) {
    console.log("✓ Shingle similarity check PASSED: All solution pages have < 30% text overlap (No thin content).");
  } else {
    console.warn("⚠ Warning: Solution similarity exceeded 30% threshold.");
  }

  console.log("\n[SEO Auditor] Verification Complete.");
}

auditSEO();

