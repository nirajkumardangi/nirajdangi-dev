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

  // 1. Desktop 1440x900: Hero
  const desktopPage = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  await desktopPage.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await desktopPage.waitForTimeout(600);

  const heroDesktopPath = path.join(artDir, "stage3-hero-1440.png");
  await desktopPage.screenshot({ path: heroDesktopPath, fullPage: false });
  fs.copyFileSync(heroDesktopPath, path.join(pubDir, "stage3-hero-1440.png"));
  console.log("Desktop Hero saved:", heroDesktopPath);

  // 2. Desktop 1440x900: Scroll to Verticals Showcase
  const verticalsSection = await desktopPage.$("#verticals");
  if (verticalsSection) {
    await verticalsSection.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(600);
  }

  const vertDesktopPath = path.join(artDir, "stage3-verticals-1440.png");
  await desktopPage.screenshot({ path: vertDesktopPath, fullPage: false });
  fs.copyFileSync(vertDesktopPath, path.join(pubDir, "stage3-verticals-1440.png"));
  console.log("Desktop Verticals (Doctor) saved:", vertDesktopPath);

  // 3. Desktop: Switch tab to Wedding Planners
  const weddingTab = await desktopPage.$("#tab-wedding");
  if (weddingTab) {
    await weddingTab.click();
    await desktopPage.waitForTimeout(500);
  }
  const vertSwitchPath = path.join(artDir, "stage3-verticals-switch-1440.png");
  await desktopPage.screenshot({ path: vertSwitchPath, fullPage: false });
  fs.copyFileSync(vertSwitchPath, path.join(pubDir, "stage3-verticals-switch-1440.png"));
  console.log("Desktop Verticals (Wedding Tab) saved:", vertSwitchPath);

  await desktopPage.close();

  // 4. Mobile 390x844: Hero
  const mobilePage = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  await mobilePage.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await mobilePage.waitForTimeout(600);

  const heroMobilePath = path.join(artDir, "stage3-mobile-390-hero.png");
  await mobilePage.screenshot({ path: heroMobilePath, fullPage: false });
  fs.copyFileSync(heroMobilePath, path.join(pubDir, "stage3-mobile-390-hero.png"));
  console.log("Mobile Hero saved:", heroMobilePath);

  // 5. Mobile 390x844: Verticals Showcase
  const mVerticals = await mobilePage.$("#verticals");
  if (mVerticals) {
    await mVerticals.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(600);
  }

  const vertMobilePath = path.join(artDir, "stage3-mobile-390-verticals.png");
  await mobilePage.screenshot({ path: vertMobilePath, fullPage: false });
  fs.copyFileSync(vertMobilePath, path.join(pubDir, "stage3-mobile-390-verticals.png"));
  console.log("Mobile Verticals saved:", vertMobilePath);

  // Check horizontal overflow at 390px and 360px
  const hasOverflow = await mobilePage.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  console.log("Mobile horizontal overflow:", hasOverflow);

  await mobilePage.close();
  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

