const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

async function run() {
  const artDir = "C:\\Users\\niraj\\.gemini\\antigravity\\brain\\ca86d1aa-cefc-40f3-b8da-c367a326362d";
  const pubDir = path.join(__dirname, "..", "public", "screenshots");
  fs.mkdirSync(pubDir, { recursive: true });

  const browser = await chromium.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
  });

  console.log("=== STAGE 5 PLAYWRIGHT CAPTURE START ===");

  // 1. Desktop 1440x900
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);

  // Helper function to capture section screenshot
  async function captureSection(selector, filename) {
    const el = await page.$(selector);
    if (el) {
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      const artPath = path.join(artDir, filename);
      await page.screenshot({ path: artPath });
      fs.copyFileSync(artPath, path.join(pubDir, filename));
      console.log(`Captured ${filename}`);
    } else {
      console.warn(`Selector ${selector} not found for ${filename}`);
    }
  }

  // 1.1 Services
  await captureSection("#services", "stage5-services-1440.png");

  // 1.2 Process
  await captureSection("#process", "stage5-process-1440.png");

  // 1.3 Pricing Cards
  await captureSection("#pricing", "stage5-pricing-cards-1440.png");

  // 1.4 Pricing Comparison Table (scroll a bit inside #pricing)
  await page.evaluate(() => {
    const tableHeading = Array.from(document.querySelectorAll("h3")).find(h => h.textContent.includes("Plan Comparison"));
    if (tableHeading) {
      tableHeading.scrollIntoView({ block: "start", behavior: "instant" });
      window.scrollBy(0, -100);
    }
  });
  await page.waitForTimeout(500);
  const pTablePath = path.join(artDir, "stage5-pricing-table-1440.png");
  await page.screenshot({ path: pTablePath });
  fs.copyFileSync(pTablePath, path.join(pubDir, "stage5-pricing-table-1440.png"));
  console.log("Captured stage5-pricing-table-1440.png");

  // 1.5 About Section
  await captureSection("#about", "stage5-about-1440.png");

  // 1.6 FAQ Section
  await captureSection("#faq", "stage5-faq-1440.png");

  // 1.7 CTA Section
  await captureSection("#contact", "stage5-cta-1440.png");

  await page.close();

  // 2. Mobile 390x844 (iPhone 14)
  const mobilePage = await browser.newPage({
    viewport: { width: 390, height: 844 },
  });
  await mobilePage.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await mobilePage.waitForTimeout(800);

  async function captureMobileSection(selector, filename) {
    const el = await mobilePage.$(selector);
    if (el) {
      await el.scrollIntoViewIfNeeded();
      await mobilePage.waitForTimeout(500);
      const artPath = path.join(artDir, filename);
      await mobilePage.screenshot({ path: artPath });
      fs.copyFileSync(artPath, path.join(pubDir, filename));
      console.log(`Captured mobile ${filename}`);
    }
  }

  await captureMobileSection("#services", "stage5-mobile-390-services.png");
  await captureMobileSection("#pricing", "stage5-mobile-390-pricing.png");

  // Mobile Table View
  await mobilePage.evaluate(() => {
    const tableHeading = Array.from(document.querySelectorAll("h3")).find(h => h.textContent.includes("Plan Comparison"));
    if (tableHeading) {
      tableHeading.scrollIntoView({ block: "start", behavior: "instant" });
      window.scrollBy(0, -80);
    }
  });
  await mobilePage.waitForTimeout(500);
  const mTablePath = path.join(artDir, "stage5-mobile-390-table.png");
  await mobilePage.screenshot({ path: mTablePath });
  fs.copyFileSync(mTablePath, path.join(pubDir, "stage5-mobile-390-table.png"));
  console.log("Captured stage5-mobile-390-table.png");

  await captureMobileSection("#faq", "stage5-mobile-390-faq.png");
  await captureMobileSection("#contact", "stage5-mobile-390-cta.png");

  // Check overflow at 390px
  const overflow390 = await mobilePage.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log("390px Horizontal Overflow:", overflow390);

  await mobilePage.close();

  // 3. Mobile 360px & 320px Overflow & Integrity Check
  for (const width of [360, 320]) {
    const testPage = await browser.newPage({
      viewport: { width, height: 740 },
    });
    await testPage.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await testPage.waitForTimeout(600);

    const hasOverflow = await testPage.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    const scrollWidth = await testPage.evaluate(() => document.documentElement.scrollWidth);
    const innerWidth = await testPage.evaluate(() => window.innerWidth);

    console.log(`Viewport ${width}px -> scrollWidth: ${scrollWidth}, innerWidth: ${innerWidth}, hasOverflow: ${hasOverflow}`);

    if (width === 360) {
      const p360Path = path.join(artDir, "stage5-mobile-360-pricing.png");
      const pricingEl = await testPage.$("#pricing");
      if (pricingEl) await pricingEl.scrollIntoViewIfNeeded();
      await testPage.screenshot({ path: p360Path });
      fs.copyFileSync(p360Path, path.join(pubDir, "stage5-mobile-360-pricing.png"));
    }

    await testPage.close();
  }

  await browser.close();
  console.log("=== STAGE 5 PLAYWRIGHT CAPTURE FINISHED ===");
}

run().catch((err) => {
  console.error("Playwright capture error:", err);
  process.exit(1);
});

