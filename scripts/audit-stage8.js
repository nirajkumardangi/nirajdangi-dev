const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

async function runStage8Audit() {
  const artDir = "C:\\Users\\niraj\\.gemini\\antigravity\\brain\\ca86d1aa-cefc-40f3-b8da-c367a326362d";
  const pubDir = path.join(__dirname, "..", "public", "screenshots");
  fs.mkdirSync(pubDir, { recursive: true });

  console.log("==================================================");
  console.log("       STAGE 8: SEO & PERFORMANCE AUDIT           ");
  console.log("==================================================");

  // 1. Robots.txt and Sitemap.xml verification via fetch
  console.log("\n--- 1. SEO INFRASTRUCTURE CHECK ---");
  const robotsRes = await fetch("http://localhost:3000/robots.txt");
  const robotsText = await robotsRes.text();
  console.log(`[robots.txt] Status: ${robotsRes.status}`);
  console.log(`[robots.txt] Contains sitemap: ${robotsText.includes("sitemap.xml")}`);
  console.log(`[robots.txt] Content preview:\n${robotsText.trim()}`);

  const sitemapRes = await fetch("http://localhost:3000/sitemap.xml");
  const sitemapText = await sitemapRes.text();
  console.log(`\n[sitemap.xml] Status: ${sitemapRes.status}`);
  console.log(`[sitemap.xml] Contains homepage: ${sitemapText.includes("https://niraj.online")}`);
  console.log(`[sitemap.xml] Contains /work: ${sitemapText.includes("https://niraj.online/work")}`);
  console.log(`[sitemap.xml] Contains /contact: ${sitemapText.includes("https://niraj.online/contact")}`);
  console.log(`[sitemap.xml] Contains /privacy: ${sitemapText.includes("https://niraj.online/privacy")}`);
  console.log(`[sitemap.xml] Contains rovala-in: ${sitemapText.includes("https://niraj.online/work/rovala-in")}`);

  // Launch Playwright for browser-level accessibility, DOM and rendering checks
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
  });

  console.log("\n--- 2. ACCESSIBILITY & HEADING AUDIT (H1 count, Landmarks) ---");
  const auditPages = [
    { url: "http://localhost:3000/", name: "Home" },
    { url: "http://localhost:3000/work", name: "Work Index" },
    { url: "http://localhost:3000/work/rovala-in", name: "Rovala Case Study" },
    { url: "http://localhost:3000/contact", name: "Contact Page" },
    { url: "http://localhost:3000/privacy", name: "Privacy Page" },
  ];

  for (const p of auditPages) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(p.url, { waitUntil: "networkidle" });

    // H1 count
    const h1Count = await page.locator("h1").count();
    const h1Text = h1Count > 0 ? (await page.locator("h1").first().innerText()).replace(/\n/g, " ") : "NONE";

    // Landmarks
    const hasHeader = (await page.locator("header").count()) > 0;
    const hasMain = (await page.locator("main").count()) > 0;
    const hasFooter = (await page.locator("footer").count()) > 0;

    // Canonical
    const canonical = await page.evaluate(() => {
      const el = document.querySelector("link[rel='canonical']");
      return el ? el.getAttribute("href") : "MISSING";
    });

    // Meta description
    const metaDesc = await page.evaluate(() => {
      const el = document.querySelector("meta[name='description']");
      return el ? el.getAttribute("content") : "MISSING";
    });

    // JSON-LD scripts
    const jsonLdCount = await page.locator("script[type='application/ld+json']").count();

    console.log(`[Page: ${p.name}]`);
    console.log(`  - H1 count: ${h1Count} (Title: "${h1Text.slice(0, 50)}...")`);
    console.log(`  - Landmarks: header=${hasHeader}, main=${hasMain}, footer=${hasFooter}`);
    console.log(`  - Canonical: ${canonical}`);
    console.log(`  - Meta Description: "${metaDesc.slice(0, 60)}..."`);
    console.log(`  - JSON-LD Schemas found: ${jsonLdCount}`);

    await page.close();
  }

  // 3. Performance & CWV Real Numbers Check (Mobile 390x844 Emulation)
  console.log("\n--- 3. PERFORMANCE & CORE WEB VITALS AUDIT ---");
  const mobile = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });

  const startTime = Date.now();
  await mobile.goto("http://localhost:3000", { waitUntil: "networkidle" });
  const loadDuration = Date.now() - startTime;

  // Measure CLS and Navigation Timing via PerformanceObserver
  const metrics = await mobile.evaluate(async () => {
    return new Promise((resolve) => {
      let clsScore = 0;
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsScore += entry.value;
            }
          }
        });
        observer.observe({ type: "layout-shift", buffered: true });
      } catch (e) {
        // unsupported observer
      }

      // Check navigation timing
      const navEntry = performance.getEntriesByType("navigation")[0] || {};
      const domContentLoaded = navEntry.domContentLoadedEventEnd || 0;
      const responseEnd = navEntry.responseEnd || 0;

      setTimeout(() => {
        resolve({
          clsScore,
          domContentLoaded: Math.round(domContentLoaded),
          ttfb: Math.round(responseEnd),
        });
      }, 500);
    });
  });

  console.log(`[Mobile Performance] Total Network Idle: ${loadDuration}ms`);
  console.log(`[Mobile Performance] DOMContentLoaded: ${metrics.domContentLoaded}ms`);
  console.log(`[Mobile Performance] TTFB: ${metrics.ttfb}ms`);
  console.log(`[Mobile Performance] Cumulative Layout Shift (CLS): ${metrics.clsScore.toFixed(4)}`);

  // Check 200% Zoom / Text scale on Mobile & Desktop
  console.log("\n--- 4. 200% BROWSER ZOOM & OVERFLOW CHECK ---");
  const zoomPage = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await zoomPage.goto("http://localhost:3000", { waitUntil: "networkidle" });

  // Emulate 200% page zoom
  await zoomPage.evaluate(() => {
    document.body.style.zoom = "200%";
  });
  await zoomPage.waitForTimeout(400);

  const zoomOverflow = await zoomPage.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log(`[200% Desktop Zoom] Horizontal Overflow: ${zoomOverflow}`);
  await zoomPage.close();

  // 5. Visual Captures for Stage 8 Artifact
  console.log("\n--- 5. VISUAL CAPTURES ---");
  // 5.1 Privacy Page
  const privPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await privPage.goto("http://localhost:3000/privacy", { waitUntil: "networkidle" });
  const privPath = path.join(artDir, "stage8-privacy-1440.png");
  await privPage.screenshot({ path: privPath });
  fs.copyFileSync(privPath, path.join(pubDir, "stage8-privacy-1440.png"));
  console.log("Saved stage8-privacy-1440.png");
  await privPage.close();

  // 5.2 Dynamic Project OpenGraph Image (/work/rovala-in/opengraph-image)
  const ogPage = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await ogPage.goto("http://localhost:3000/work/rovala-in/opengraph-image", { waitUntil: "networkidle" });
  const ogPath = path.join(artDir, "stage8-project-og-1200.png");
  await ogPage.screenshot({ path: ogPath });
  fs.copyFileSync(ogPath, path.join(pubDir, "stage8-project-og-1200.png"));
  console.log("Saved stage8-project-og-1200.png");
  await ogPage.close();

  await mobile.close();
  await browser.close();

  console.log("\n=== STAGE 8 AUDIT COMPLETE ===");
}

runStage8Audit().catch((err) => {
  console.error("Stage 8 audit error:", err);
  process.exit(1);
});

