import { chromium } from "playwright";
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import fs from "fs";
import path from "path";

const ROUTES = [
  { name: "home", url: "http://localhost:3000/" },
  { name: "work", url: "http://localhost:3000/work" },
  { name: "contact", url: "http://localhost:3000/contact" },
  { name: "pricing", url: "http://localhost:3000/#pricing" },
];

async function runAudits() {
  const chromePath = chromium.executablePath();
  console.log(`Using Chrome at: ${chromePath}`);

  // Launch headless Chrome
  const chrome = await chromeLauncher.launch({
    chromePath,
    chromeFlags: ["--headless=new", "--no-sandbox", "--disable-gpu"],
  });

  const results = [];

  for (const route of ROUTES) {
    console.log(`\nAuditing ${route.name} (${route.url}) with Lighthouse Mobile...`);

    const runnerResult = await lighthouse(
      route.url,
      {
        port: chrome.port,
        output: "json",
        logLevel: "error",
        formFactor: "mobile",
        screenEmulation: {
          mobile: true,
          width: 390,
          height: 844,
          deviceScaleFactor: 3,
          disabled: false,
        },
        throttlingMethod: "simulate",
      },
      undefined
    );

    const cats = runnerResult.lhr.categories;
    const scores = {
      route: route.name,
      url: route.url,
      performance: Math.round((cats.performance?.score || 0) * 100),
      accessibility: Math.round((cats.accessibility?.score || 0) * 100),
      bestPractices: Math.round((cats["best-practices"]?.score || 0) * 100),
      seo: Math.round((cats.seo?.score || 0) * 100),
    };

    console.log(
      `📊 [${route.name.toUpperCase()}] Perf: ${scores.performance} | A11y: ${scores.accessibility} | Best Practices: ${scores.bestPractices} | SEO: ${scores.seo}`
    );
    results.push(scores);
  }

  await chrome.kill();

  const outPath = path.join(process.cwd(), "audit-screenshots", "lighthouse-summary.json");
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  console.log(`\nLighthouse audit results saved to: ${outPath}`);
}

runAudits().catch((err) => {
  console.error("Lighthouse error:", err);
  process.exit(1);
});

