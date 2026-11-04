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

  // 1. Desktop 1440x900: Homepage Selected Work
  const desktopHome = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  await desktopHome.goto("http://localhost:3000/#work", { waitUntil: "networkidle" });
  await desktopHome.waitForTimeout(600);

  const workSection = await desktopHome.$("#work");
  if (workSection) {
    await workSection.scrollIntoViewIfNeeded();
    await desktopHome.waitForTimeout(500);
  }

  const sWorkDesktopPath = path.join(artDir, "stage4-selected-work-1440.png");
  await desktopHome.screenshot({ path: sWorkDesktopPath, fullPage: false });
  fs.copyFileSync(sWorkDesktopPath, path.join(pubDir, "stage4-selected-work-1440.png"));
  console.log("Desktop Selected Work saved:", sWorkDesktopPath);
  await desktopHome.close();

  // 2. Desktop 1440x900: /work Index Page
  const desktopWork = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  await desktopWork.goto("http://localhost:3000/work", { waitUntil: "networkidle" });
  await desktopWork.waitForTimeout(600);

  const workIndexPath = path.join(artDir, "stage4-work-index-1440.png");
  await desktopWork.screenshot({ path: workIndexPath, fullPage: false });
  fs.copyFileSync(workIndexPath, path.join(pubDir, "stage4-work-index-1440.png"));
  console.log("Desktop Work Index saved:", workIndexPath);
  await desktopWork.close();

  // 3. Desktop 1440x900: /work/rovala-in Case Study Page
  const desktopCS = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  await desktopCS.goto("http://localhost:3000/work/rovala-in", { waitUntil: "networkidle" });
  await desktopCS.waitForTimeout(600);

  const csDesktopPath = path.join(artDir, "stage4-case-study-rovala-1440.png");
  await desktopCS.screenshot({ path: csDesktopPath, fullPage: false });
  fs.copyFileSync(csDesktopPath, path.join(pubDir, "stage4-case-study-rovala-1440.png"));
  console.log("Desktop Case Study saved:", csDesktopPath);

  // Full-page case study
  const csFullDesktopPath = path.join(artDir, "stage4-case-study-full-1440.png");
  await desktopCS.screenshot({ path: csFullDesktopPath, fullPage: true });
  fs.copyFileSync(csFullDesktopPath, path.join(pubDir, "stage4-case-study-full-1440.png"));
  console.log("Desktop Case Study Full saved:", csFullDesktopPath);
  await desktopCS.close();

  // 4. Mobile 390x844: Selected Work on Home
  const mobileHome = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  await mobileHome.goto("http://localhost:3000/#work", { waitUntil: "networkidle" });
  await mobileHome.waitForTimeout(600);

  const mWorkSection = await mobileHome.$("#work");
  if (mWorkSection) {
    await mWorkSection.scrollIntoViewIfNeeded();
    await mobileHome.waitForTimeout(500);
  }

  const sWorkMobilePath = path.join(artDir, "stage4-mobile-390-selected-work.png");
  await mobileHome.screenshot({ path: sWorkMobilePath, fullPage: false });
  fs.copyFileSync(sWorkMobilePath, path.join(pubDir, "stage4-mobile-390-selected-work.png"));
  console.log("Mobile Selected Work saved:", sWorkMobilePath);
  await mobileHome.close();

  // 5. Mobile 390x844: Case Study Page
  const mobileCS = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  await mobileCS.goto("http://localhost:3000/work/rovala-in", { waitUntil: "networkidle" });
  await mobileCS.waitForTimeout(600);

  const csMobilePath = path.join(artDir, "stage4-mobile-390-case-study.png");
  await mobileCS.screenshot({ path: csMobilePath, fullPage: false });
  fs.copyFileSync(csMobilePath, path.join(pubDir, "stage4-mobile-390-case-study.png"));
  console.log("Mobile Case Study saved:", csMobilePath);

  // Check horizontal overflow
  const hasOverflow = await mobileCS.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  console.log("Mobile Case Study horizontal overflow:", hasOverflow);

  await mobileCS.close();
  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

