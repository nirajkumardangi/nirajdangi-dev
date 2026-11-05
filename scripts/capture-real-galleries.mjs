import { chromium } from "playwright";
import sharp from "sharp";
import fs from "fs";
import path from "path";

async function captureRealGalleries() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 810 },
    deviceScaleFactor: 2,
  });

  console.log("=== CAPTURING FRAMER-LENS ===");
  await page.goto("https://framer-lens.netlify.app/", {
    waitUntil: "networkidle",
    timeout: 45000,
  });
  await page.waitForTimeout(3000);

  // 1. Framer Lens Hero (at top)
  console.log("Capturing framer-lens 01 Hero...");
  const framerHeroBuffer = await page.screenshot();

  // 2. Framer Lens Featured Projects Masonry (scroll to 1350)
  console.log("Capturing framer-lens 02 Masonry...");
  await page.evaluate(() => window.scrollTo(0, 1350));
  await page.waitForTimeout(2000);
  const framerMasonryBuffer = await page.screenshot();

  // 3. Framer Lens Philosophy & Gear (scroll to 3500)
  console.log("Capturing framer-lens 03 Philosophy & Gear...");
  await page.evaluate(() => window.scrollTo(0, 3500));
  await page.waitForTimeout(2000);
  const framerPhilosophyBuffer = await page.screenshot();

  const framerDir = path.resolve("public/work/framer-lens/gallery");
  if (!fs.existsSync(framerDir)) fs.mkdirSync(framerDir, { recursive: true });

  await sharp(framerHeroBuffer)
    .resize(1440, 810, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(path.join(framerDir, "01-visual-storytelling-hero.webp"));

  await sharp(framerMasonryBuffer)
    .resize(1440, 810, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(path.join(framerDir, "02-featured-projects-masonry.webp"));

  await sharp(framerPhilosophyBuffer)
    .resize(1440, 810, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(path.join(framerDir, "03-experience-philosophy.webp"));

  console.log("framer-lens saved successfully!");

  console.log("=== CAPTURING FEEDAID ===");
  await page.goto("https://feedaid.netlify.app/", {
    waitUntil: "networkidle",
    timeout: 45000,
  });
  await page.waitForTimeout(3000);

  // 1. FeedAid Hero (at top)
  console.log("Capturing feedaid 01 Hero...");
  const feedaidHeroBuffer = await page.screenshot();

  // 2. FeedAid Impact & Process (scroll to 1050)
  console.log("Capturing feedaid 02 Impact & Process...");
  await page.evaluate(() => window.scrollTo(0, 1050));
  await page.waitForTimeout(2000);
  const feedaidProcessBuffer = await page.screenshot();

  // 3. FeedAid Why Choose FeedAid / Education (scroll to 2260)
  console.log("Capturing feedaid 03 Why Donate Food...");
  await page.evaluate(() => window.scrollTo(0, 2260));
  await page.waitForTimeout(2000);
  const feedaidWhyDonateBuffer = await page.screenshot();

  const feedaidDir = path.resolve("public/work/feedaid/gallery");
  if (!fs.existsSync(feedaidDir)) fs.mkdirSync(feedaidDir, { recursive: true });

  await sharp(feedaidHeroBuffer)
    .resize(1440, 810, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(path.join(feedaidDir, "01-share-your-meal-hero.webp"));

  await sharp(feedaidProcessBuffer)
    .resize(1440, 810, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(path.join(feedaidDir, "02-impact-and-process.webp"));

  await sharp(feedaidWhyDonateBuffer)
    .resize(1440, 810, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(path.join(feedaidDir, "03-why-donate-food.webp"));

  console.log("feedaid saved successfully!");

  await browser.close();
}

captureRealGalleries().catch(console.error);
