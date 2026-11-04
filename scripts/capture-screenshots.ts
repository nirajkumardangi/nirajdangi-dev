import { chromium } from "playwright";
import path from "path";
import fs from "fs";

const DESKTOP = { width: 1440, height: 900 };
const MOBILE = { width: 390, height: 844 };

// Project list for automated screenshots
const PROJECTS: { slug: string; url: string }[] = [
  // { slug: "ai-knowledge-assistant", url: "https://..." },
  { slug: "niraj-online-v1", url: "https://niraj.online" },
];

async function capture() {
  const browser = await chromium.launch();

  for (const project of PROJECTS) {
    const dir = path.join(process.cwd(), "public", "work", project.slug);
    fs.mkdirSync(dir, { recursive: true });

    for (const [label, viewport] of [
      ["desktop", DESKTOP],
      ["mobile", MOBILE],
    ] as const) {
      const ctx = await browser.newContext({ viewport });
      const page = await ctx.newPage();

      console.log(`Capturing ${project.slug} @ ${label} (${viewport.width}x${viewport.height})...`);

      await page.goto(project.url, { waitUntil: "networkidle", timeout: 30000 });
      await page.waitForTimeout(1500);

      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(500);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(300);

      const outPath = path.join(dir, `${label}.png`);
      await page.screenshot({ path: outPath, fullPage: false });
      console.log(`  Saved -> ${outPath}`);

      await ctx.close();
    }
  }

  await browser.close();
  console.log("\nAll screenshots complete.");
}

capture().catch((err) => {
  console.error("Screenshot capture failed:", err);
  process.exit(1);
});

