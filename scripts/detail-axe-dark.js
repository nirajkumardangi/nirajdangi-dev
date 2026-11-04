import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

async function detailAxeDark() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.evaluate(() => {
    document.documentElement.classList.add("dark");
  });
  await page.waitForTimeout(300);
  
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  console.log("=== DARK MODE VIOLATIONS ===");
  for (const v of results.violations) {
    if (v.impact === "critical" || v.impact === "serious") {
      console.log(`\nRule: [${v.impact.toUpperCase()}] ${v.id} - ${v.description}`);
      for (const node of v.nodes) {
        console.log(`  Selector: ${node.target.join(", ")}`);
        console.log(`  HTML: ${node.html}`);
        console.log(`  Failure: ${node.failureSummary}\n`);
      }
    }
  }

  await browser.close();
}

detailAxeDark();

