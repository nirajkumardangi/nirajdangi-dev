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

  // Desktop: 1440x900 viewport, capture full page
  const desktopPage = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  await desktopPage.goto("http://localhost:3000/design-system", {
    waitUntil: "networkidle",
  });
  await desktopPage.waitForTimeout(1000);

  const desktopPathArt = path.join(artDir, "design-system-1440.png");
  const desktopPathPub = path.join(pubDir, "design-system-1440.png");
  await desktopPage.screenshot({ path: desktopPathArt, fullPage: true });
  fs.copyFileSync(desktopPathArt, desktopPathPub);
  console.log("Desktop screenshot saved:", desktopPathArt);
  await desktopPage.close();

  // Mobile: 390x844 viewport, capture full page
  const mobilePage = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  await mobilePage.goto("http://localhost:3000/design-system", {
    waitUntil: "networkidle",
  });
  await mobilePage.waitForTimeout(1000);

  const mobilePathArt = path.join(artDir, "design-system-390.png");
  const mobilePathPub = path.join(pubDir, "design-system-390.png");
  await mobilePage.screenshot({ path: mobilePathArt, fullPage: true });
  fs.copyFileSync(mobilePathArt, mobilePathPub);
  console.log("Mobile screenshot saved:", mobilePathArt);
  await mobilePage.close();

  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

