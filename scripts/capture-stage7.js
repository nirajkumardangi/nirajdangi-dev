const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

async function runStage7Captures() {
  const artDir = "C:\\Users\\niraj\\.gemini\\antigravity\\brain\\ca86d1aa-cefc-40f3-b8da-c367a326362d";
  const pubDir = path.join(__dirname, "..", "public", "screenshots");
  fs.mkdirSync(pubDir, { recursive: true });

  console.log("=== STAGE 7 PLAYWRIGHT CAPTURE START ===");

  const browser = await chromium.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
  });

  // Helper to save screenshot both in artDir and pubDir
  async function saveScreenshot(page, filename, options = {}) {
    const artPath = path.join(artDir, filename);
    await page.screenshot({ path: artPath, ...options });
    fs.copyFileSync(artPath, path.join(pubDir, filename));
    console.log(`Saved ${filename}`);
  }

  // 1. Desktop 1440x900 - Light Mode
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);

  // 1.1 Hero Light
  await saveScreenshot(page, "stage7-hero-light-1440.png");

  // 1.2 Services Light
  const servicesEl = await page.$("#services");
  if (servicesEl) {
    await servicesEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await saveScreenshot(page, "stage7-services-light-1440.png");
  }

  // 1.3 Pricing Light
  const pricingEl = await page.$("#pricing");
  if (pricingEl) {
    await pricingEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await saveScreenshot(page, "stage7-pricing-light-1440.png");
  }

  // 1.4 Contact Page Light
  await page.goto("http://localhost:3000/contact", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await saveScreenshot(page, "stage7-contact-light-1440.png");

  // 1.5 Custom 404 Page
  await page.goto("http://localhost:3000/not-found-test-page-404", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await saveScreenshot(page, "stage7-404-1440.png");

  // 2. Desktop 1440x900 - Dark Mode Toggle
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  // Click theme toggle button in navbar
  const themeToggle = await page.$("button[aria-label*='Switch to dark mode']");
  if (themeToggle) {
    await themeToggle.click();
    await page.waitForTimeout(400);
  } else {
    // In case system theme is already dark or button is switch to light
    await page.evaluate(() => document.documentElement.classList.add("dark"));
    await page.waitForTimeout(300);
  }

  // 2.1 Hero Dark
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await saveScreenshot(page, "stage7-hero-dark-1440.png");

  // 2.2 Services Dark
  const servicesElDark = await page.$("#services");
  if (servicesElDark) {
    await servicesElDark.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await saveScreenshot(page, "stage7-services-dark-1440.png");
  }

  // 2.3 Pricing Dark
  const pricingElDark = await page.$("#pricing");
  if (pricingElDark) {
    await pricingElDark.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await saveScreenshot(page, "stage7-pricing-dark-1440.png");
  }

  // 2.4 Contact Page Dark
  await page.goto("http://localhost:3000/contact", { waitUntil: "networkidle" });
  await page.evaluate(() => document.documentElement.classList.add("dark"));
  await page.waitForTimeout(500);
  await saveScreenshot(page, "stage7-contact-dark-1440.png");

  await page.close();

  // 3. OpenGraph Image Capture
  const ogPage = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await ogPage.goto("http://localhost:3000/opengraph-image", { waitUntil: "networkidle" });
  await ogPage.waitForTimeout(500);
  await saveScreenshot(ogPage, "stage7-opengraph-image.png");
  await ogPage.close();

  // 4. Mobile 390x844 in Dark Mode
  const mobileDark = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobileDark.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await mobileDark.evaluate(() => document.documentElement.classList.add("dark"));
  await mobileDark.waitForTimeout(500);
  await saveScreenshot(mobileDark, "stage7-mobile-390-dark.png");

  // Verify overflow
  const hasOverflow = await mobileDark.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  console.log("Mobile Dark Mode 390px Horizontal Overflow:", hasOverflow);
  await mobileDark.close();

  await browser.close();
  console.log("=== STAGE 7 ALL CAPTURES COMPLETE ===");
}

runStage7Captures().catch((err) => {
  console.error("Stage 7 capture error:", err);
  process.exit(1);
});

