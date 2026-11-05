import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function verify() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  const artifactDir = "C:/Users/niraj/.gemini/antigravity/brain/ca86d1aa-cefc-40f3-b8da-c367a326362d";

  console.log("Navigating to local site /work/framer-lens...");
  await page.goto("http://localhost:3000/work/framer-lens", {
    waitUntil: "networkidle",
    timeout: 30000,
  });

  // Scroll to gallery section
  const gallerySection = page.locator('section[aria-labelledby="heading-gallery"]');
  await gallerySection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  // Take screenshot of framer-lens gallery section
  console.log("Saving framer-lens gallery artifact...");
  await page.screenshot({
    path: path.join(artifactDir, "verify-framer-lens-gallery.png"),
  });

  // Click the first screenshot thumbnail to open Lightbox Modal
  console.log("Opening Lightbox Modal...");
  const firstThumbnail = gallerySection.locator(".grid > div").first();
  await firstThumbnail.click();
  await page.waitForTimeout(500);

  // Verify modal is open
  const modal = page.locator('div[role="dialog"]');
  const isModalVisible = await modal.isVisible();
  console.log("Modal visible:", isModalVisible);

  // Check Close button
  const closeButton = modal.locator('button[aria-label*="Close modal viewer"]');
  const isCloseBtnVisible = await closeButton.isVisible();
  console.log("Close button visible:", isCloseBtnVisible);

  // Take screenshot of modal open state
  console.log("Saving modal open artifact...");
  await page.screenshot({
    path: path.join(artifactDir, "verify-modal-open-state.png"),
  });

  // Click empty backdrop (at top padding, x: 200, y: 50)
  console.log("Testing backdrop click dismissal...");
  await page.mouse.click(200, 50);
  await page.waitForTimeout(500);

  const isModalClosedAfterBackdrop = !(await modal.isVisible());
  console.log("Modal closed after clicking backdrop:", isModalClosedAfterBackdrop);

  // Test FeedAid gallery
  console.log("Navigating to /work/feedaid...");
  await page.goto("http://localhost:3000/work/feedaid", {
    waitUntil: "networkidle",
    timeout: 30000,
  });

  const feedaidGallery = page.locator('section[aria-labelledby="heading-gallery"]');
  await feedaidGallery.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  console.log("Saving feedaid gallery artifact...");
  await page.screenshot({
    path: path.join(artifactDir, "verify-feedaid-gallery.png"),
  });

  await browser.close();
  console.log("Verification completed successfully!");
}

verify().catch(console.error);
