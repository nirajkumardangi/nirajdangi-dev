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

  // 1. Desktop 1440x900 (Shell view)
  const desktopPage = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  await desktopPage.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await desktopPage.waitForTimeout(600);

  const dPath = path.join(artDir, "stage2-shell-1440.png");
  await desktopPage.screenshot({ path: dPath, fullPage: false });
  fs.copyFileSync(dPath, path.join(pubDir, "stage2-shell-1440.png"));
  console.log("Desktop 1440 saved:", dPath);

  // Also full-page desktop to verify footer & floating button
  const dFullPath = path.join(artDir, "stage2-shell-1440-full.png");
  await desktopPage.screenshot({ path: dFullPath, fullPage: true });
  fs.copyFileSync(dFullPath, path.join(pubDir, "stage2-shell-1440-full.png"));
  console.log("Desktop 1440 full saved:", dFullPath);
  await desktopPage.close();

  // 2. Mobile 390x844 (Menu Closed)
  const mobilePage = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  await mobilePage.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await mobilePage.waitForTimeout(600);

  const mClosedPath = path.join(artDir, "stage2-mobile-390-closed.png");
  await mobilePage.screenshot({ path: mClosedPath, fullPage: false });
  fs.copyFileSync(mClosedPath, path.join(pubDir, "stage2-mobile-390-closed.png"));
  console.log("Mobile 390 closed saved:", mClosedPath);

  // 3. Mobile 390x844 (Menu Open)
  const menuButton = await mobilePage.$('button[aria-label="Open main menu"]');
  if (menuButton) {
    await menuButton.click();
    await mobilePage.waitForTimeout(500);
  }

  const mOpenPath = path.join(artDir, "stage2-mobile-390-open.png");
  await mobilePage.screenshot({ path: mOpenPath, fullPage: false });
  fs.copyFileSync(mOpenPath, path.join(pubDir, "stage2-mobile-390-open.png"));
  console.log("Mobile 390 open saved:", mOpenPath);
  await mobilePage.close();

  // 4. Mobile 320x640 (Minimum width verification)
  const minPage = await browser.newPage({
    viewport: { width: 320, height: 640 },
    isMobile: true,
    hasTouch: true,
  });
  await minPage.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await minPage.waitForTimeout(400);

  // Check horizontal overflow
  const hasOverflow = await minPage.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  console.log("Has horizontal overflow at 320px:", hasOverflow);

  const m320Path = path.join(artDir, "stage2-mobile-320.png");
  await minPage.screenshot({ path: m320Path, fullPage: false });
  fs.copyFileSync(m320Path, path.join(pubDir, "stage2-mobile-320.png"));
  console.log("Mobile 320 saved:", m320Path);
  await minPage.close();

  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
