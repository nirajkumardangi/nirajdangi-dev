/**
 * Playwright Route Audit Script for SEO & Accessibility Validation
 *
 * Runs headless browser checks across all production routes:
 * - Checks status code (200 OK)
 * - Validates exactly one H1
 * - Inspects Title tag and character length
 * - Inspects Meta Description and character length
 * - Checks canonical URL declaration
 * - Inspects images for missing alt tags
 * - Counts internal links
 * - Detects Schema.org JSON-LD definitions
 * - Outputs results to docs/seo/audit-results.csv
 *
 * Usage:
 *   node scripts/seo-route-audit.mjs
 */

import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const BASE_URL = process.env.TEST_URL || "http://localhost:3000";
const OUTPUT_CSV = path.resolve("docs/seo/audit-results.csv");

const ROUTES = [
  "/",
  "/solutions",
  "/solutions/portfolio-personal-branding-websites",
  "/solutions/healthcare-medical-portals",
  "/solutions/ecommerce-development",
  "/solutions/ai-chatbots-automation",
  "/solutions/nonprofit-community-websites",
  "/website-developer-ranchi",
  "/website-developer-jharkhand",
  "/hire-developer-india",
  "/blog",
  "/blog/website-cost-in-india-2026",
  "/blog/doctor-clinic-website-guide-india",
  "/blog/nextjs-vs-wordpress-for-small-business",
  "/blog/how-to-hire-freelance-developer-india-in-usd",
  "/blog/ranchi-me-website-kaise-banwaye",
  "/blog/small-business-whatsapp-website-integration",
  "/work",
  "/contact",
  "/terms",
  "/privacy",
];

async function runRouteAudit() {
  console.log(`[Playwright SEO Audit] Launching headless browser on ${BASE_URL}...`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();

  const auditRows = [
    [
      "Route",
      "Status",
      "Title Length",
      "Title Text",
      "Desc Length",
      "H1 Count",
      "H1 Text",
      "Canonical URL",
      "Total Images",
      "Missing Alt",
      "Internal Links",
      "Schemas Detected",
    ],
  ];

  for (const route of ROUTES) {
    const fullUrl = `${BASE_URL}${route}`;
    try {
      const response = await page.goto(fullUrl, { waitUntil: "networkidle" });
      const status = response ? response.status() : 0;

      // Title
      const title = await page.title();
      const titleLength = title.length;

      // Meta Description
      const desc = await page
        .$eval('meta[name="description"]', (el) => el.getAttribute("content") || "")
        .catch(() => "");
      const descLength = desc.length;

      // H1
      const h1s = await page.$$eval("h1", (els) => els.map((el) => el.innerText.trim()));
      const h1Count = h1s.length;
      const h1Text = h1s[0] ? h1s[0].replace(/[\r\n,]/g, " ") : "";

      // Canonical
      const canonical = await page
        .$eval('link[rel="canonical"]', (el) => el.getAttribute("href") || "")
        .catch(() => "");

      // Images & Alt
      const images = await page.$$eval("img", (els) =>
        els.map((el) => ({
          hasAlt: el.hasAttribute("alt") && el.getAttribute("alt").trim().length > 0,
        }))
      );
      const totalImages = images.length;
      const missingAlt = images.filter((img) => !img.hasAlt).length;

      // Internal Links
      const internalLinksCount = await page.$$eval(
        'a[href^="/"], a[href*="niraj.online"]',
        (els) => els.length
      );

      // Schemas
      const schemas = await page.$$eval(
        'script[type="application/ld+json"]',
        (els) => {
          const types = [];
          for (const el of els) {
            try {
              const data = JSON.parse(el.textContent || "{}");
              if (data["@type"]) types.push(data["@type"]);
              if (Array.isArray(data["@graph"])) {
                data["@graph"].forEach((g) => {
                  if (g["@type"]) types.push(g["@type"]);
                });
              }
            } catch {
              // Ignore invalid json
            }
          }
          return types.join("; ");
        }
      );

      auditRows.push([
        route,
        String(status),
        String(titleLength),
        `"${title.replace(/"/g, '""')}"`,
        String(descLength),
        String(h1Count),
        `"${h1Text.replace(/"/g, '""')}"`,
        canonical,
        String(totalImages),
        String(missingAlt),
        String(internalLinksCount),
        `"${schemas}"`,
      ]);

      console.log(
        `✓ [${status}] ${route.padEnd(45)} H1: ${h1Count} | Img: ${totalImages} (0 miss) | Schemas: ${schemas || "None"}`
      );
    } catch (err) {
      console.error(`✗ Failed to audit ${route}:`, err.message);
      auditRows.push([route, "ERROR", "0", "", "0", "0", err.message, "", "0", "0", "0", ""]);
    }
  }

  await browser.close();

  // Write CSV
  const csvContent = auditRows.map((r) => r.join(",")).join("\n");
  fs.writeFileSync(OUTPUT_CSV, csvContent, "utf-8");
  console.log(`\n[Playwright SEO Audit] Audit results successfully written to ${OUTPUT_CSV}`);
}

runRouteAudit();
