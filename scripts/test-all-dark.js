import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

async function testAllDark() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const routes = ["/", "/work", "/work/rovala-in", "/contact", "/privacy"];
  for (const r of routes) {
    await page.goto(`http://localhost:3000${r}`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.documentElement.classList.add("dark"));
    await page.waitForTimeout(200);

    const res = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const bad = res.violations.filter(v => v.impact === "critical" || v.impact === "serious");
    console.log(`Route ${r} (dark): ${bad.length} critical/serious issues`);
    if (bad.length > 0) {
      for (const v of bad) {
        console.log(`  - [${v.impact}] ${v.id}: ${v.description}`);
        for (const n of v.nodes) {
          console.log(`    Selector: ${n.target.join(", ")}`);
        }
      }
    }
  }

  await browser.close();
}

testAllDark();

