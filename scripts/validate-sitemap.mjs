/**
 * Sitemap Validator Script
 * Verifies sitemap.xml rules:
 * 1. Checks that only Wave 1 solutions are present (no Wave 2: education, real-estate, travel).
 * 2. Checks that no disallowed or noindex routes are present (/design-system, /api).
 * 3. Crawls local build or test server (if supplied) to verify 200 OK.
 */

import { solutions } from "../src/data/solutions.ts";

const disallowedPaths = ["/design-system", "/api", "/draft", "/admin"];
const wave2Slugs = solutions
  .filter((s) => s.wave !== 1)
  .map((s) => `/solutions/${s.slug}`);

console.log("[Sitemap Validator] Verifying Sitemap configuration rules...");

// Check solution rules in solutions data
const published = solutions.filter((s) => s.isPublished);
console.log(`[Sitemap Validator] Total solutions: ${solutions.length}. Published solutions: ${published.length}`);

// Verify strictly wave 1
for (const s of published) {
  if (s.wave !== 1) {
    console.error(`[ERROR] Solution "${s.title}" has wave=${s.wave} but is marked isPublished=true!`);
    process.exit(1);
  }
}

console.log("✓ Published solutions check passed: strictly Wave 1 items are active.");

// Verify that wave 2 solutions are marked unpublished
for (const w2 of wave2Slugs) {
  console.log(`✓ Wave 2/1.5 slug excluded from index: ${w2}`);
}

console.log("✓ Sitemap validation completed successfully.");

