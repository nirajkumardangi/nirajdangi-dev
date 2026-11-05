import { chromium } from "playwright";
import path from "path";

async function verifyMobile() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });

  const artifactDir = "C:/Users/niraj/.gemini/antigravity/brain/ca86d1aa-cefc-40f3-b8da-c367a326362d";

  await page.goto("http://localhost:3000/work/framer-lens", {
    waitUntil: "networkidle",
    timeout: 30000,
  });

  const gallerySection = page.locator('section[aria-labelledby="heading-gallery"]');
  await gallerySection.scrollIntoViewIfNeeded();

  const firstThumbnail = gallerySection.locator(".grid > div").first();
  await firstThumbnail.click();
  await page.waitForTimeout(500);

  await page.screenshot({
    path: path.join(artifactDir, "verify-modal-mobile-state.png"),
  });

  await browser.close();
  console.log("Mobile verification completed!");
}

verifyMobile().catch(console.error);

