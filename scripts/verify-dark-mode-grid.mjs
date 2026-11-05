import { chromium } from "playwright";
import path from "path";

async function verifyDarkModeGrid() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  const artifactDir = "C:/Users/niraj/.gemini/antigravity/brain/ca86d1aa-cefc-40f3-b8da-c367a326362d";

  console.log("Navigating to homepage in light mode...");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(1000);

  // 1. Capture Light Mode Hero
  console.log("Capturing Light Mode Hero...");
  await page.screenshot({
    path: path.join(artifactDir, "verify-hero-light-mode.png"),
    clip: { x: 0, y: 0, width: 1440, height: 750 },
  });

  // 2. Switch to Dark Mode via DOM or Theme Toggle
  console.log("Activating Dark Mode...");
  await page.evaluate(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  });
  await page.waitForTimeout(500);

  // Capture Dark Mode Hero resting state (before mouse move)
  console.log("Capturing Dark Mode Hero Resting (no mouse)...");
  await page.screenshot({
    path: path.join(artifactDir, "verify-hero-dark-mode-resting.png"),
    clip: { x: 0, y: 0, width: 1440, height: 750 },
  });

  // 3. Move mouse to Hero headline area (x: 480, y: 280)
  console.log("Moving mouse to (480, 280) to trigger glowing grid spotlight...");
  await page.mouse.move(480, 280);
  await page.waitForTimeout(500);

  console.log("Capturing Dark Mode Hero with Glowing Grid Spotlight at (480, 280)...");
  await page.screenshot({
    path: path.join(artifactDir, "verify-hero-dark-mode-glowing-grid-1.png"),
    clip: { x: 0, y: 0, width: 1440, height: 750 },
  });

  // 4. Move mouse to right side over device frame / headline (x: 950, y: 340)
  console.log("Moving mouse to (950, 340)...");
  await page.mouse.move(950, 340);
  await page.waitForTimeout(500);

  console.log("Capturing Dark Mode Hero with Glowing Grid Spotlight at (950, 340)...");
  await page.screenshot({
    path: path.join(artifactDir, "verify-hero-dark-mode-glowing-grid-2.png"),
    clip: { x: 0, y: 0, width: 1440, height: 750 },
  });

  await browser.close();
  console.log("All screenshots captured successfully!");
}

verifyDarkModeGrid().catch(console.error);
