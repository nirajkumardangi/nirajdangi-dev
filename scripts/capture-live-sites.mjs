import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const SITES = [
  {
    id: "rovala-in",
    url: "https://rovala.in/",
    name: "Rovala.in",
  },
  {
    id: "framer-lens",
    url: "https://framer-lens.netlify.app/",
    name: "Framer-Lens",
  },
  {
    id: "feedaid",
    url: "https://feedaid.netlify.app/",
    name: "FeedAid",
  },
  {
    id: "niraj-online",
    url: "https://www.niraj.online/",
    name: "Niraj Online Portfolio",
  },
];

const OUT_DIR = path.resolve("public/work/live-captures");
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function run() {
  const browser = await chromium.launch({ headless: true });

  for (const site of SITES) {
    console.log(`\nVisiting: ${site.name} (${site.url})...`);
    try {
      // Desktop capture
      const desktopCtx = await browser.newContext({
        viewport: { width: 1440, height: 900 },
        deviceScaleFactor: 2,
      });
      const dPage = await desktopCtx.newPage();
      await dPage.goto(site.url, { waitUntil: "networkidle", timeout: 30000 });
      await dPage.waitForTimeout(2000); // Allow fonts & animations to settle

      const title = await dPage.title();
      console.log(`  Title: ${title}`);

      const desktopFile = path.join(OUT_DIR, `${site.id}-desktop.png`);
      await dPage.screenshot({ path: desktopFile, fullPage: false });
      console.log(`  Saved desktop screenshot: ${desktopFile}`);
      await desktopCtx.close();

      // Mobile capture
      const mobileCtx = await browser.newContext({
        viewport: { width: 390, height: 844 },
        deviceScaleFactor: 2,
        isMobile: true,
      });
      const mPage = await mobileCtx.newPage();
      await mPage.goto(site.url, { waitUntil: "networkidle", timeout: 30000 });
      await mPage.waitForTimeout(2000);

      const mobileFile = path.join(OUT_DIR, `${site.id}-mobile.png`);
      await mPage.screenshot({ path: mobileFile, fullPage: false });
      console.log(`  Saved mobile screenshot: ${mobileFile}`);
      await mobileCtx.close();
    } catch (err) {
      console.error(`  Error capturing ${site.url}:`, err.message);
    }
  }

  await browser.close();
  console.log("\nDone capturing live sites!");
}

run();

