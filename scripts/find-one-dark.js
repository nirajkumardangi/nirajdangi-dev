import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

async function findDarkHome() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.evaluate(() => document.documentElement.classList.add("dark"));
  await page.waitForTimeout(200);

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  const issues = results.violations.filter(v => v.impact === "critical" || v.impact === "serious");
  console.log(`Home (dark) issues: ${issues.length}`);
  for (const v of issues) {
    console.log(`[${v.impact}] ${v.id}: ${v.description}`);
    for (const n of v.nodes) {
      console.log(`Selector: ${n.target.join(", ")}`);
      console.log(`HTML: ${n.html}`);
      console.log(`Failure: ${n.failureSummary}`);
    }
  }

  await browser.close();
}

findDarkHome();
