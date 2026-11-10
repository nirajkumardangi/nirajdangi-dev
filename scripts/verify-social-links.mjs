import { chromium } from "playwright";
import path from "path";

async function verifySocialLinks() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  const artifactDir = "C:/Users/niraj/.gemini/antigravity/brain/ca86d1aa-cefc-40f3-b8da-c367a326362d";

  console.log("Navigating to homepage...");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(1000);

  // 1. Element screenshot of About Section in Light Mode
  const aboutSection = page.locator("#about");
  await aboutSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);

  console.log("Capturing About Section element in Light Mode...");
  await aboutSection.screenshot({
    path: path.join(artifactDir, "verify-about-section-element-light.png"),
  });

  // 2. Element screenshot of Footer in Light Mode
  const footer = page.locator("footer");
  await footer.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);

  console.log("Capturing Footer element in Light Mode...");
  await footer.screenshot({
    path: path.join(artifactDir, "verify-footer-element-light.png"),
  });

  // 3. Switch to Dark Mode
  console.log("Switching to Dark Mode...");
  await page.evaluate(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  });
  await page.waitForTimeout(500);

  // Capture About Section element in Dark Mode
  console.log("Capturing About Section element in Dark Mode...");
  await aboutSection.screenshot({
    path: path.join(artifactDir, "verify-about-section-element-dark.png"),
  });

  // Capture Footer element in Dark Mode
  console.log("Capturing Footer element in Dark Mode...");
  await footer.screenshot({
    path: path.join(artifactDir, "verify-footer-element-dark.png"),
  });

  await browser.close();
  console.log("Element screenshots captured successfully!");
}

verifySocialLinks().catch(console.error);
