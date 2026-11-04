import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

async function findDS() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto("http://localhost:3000/design-system", { waitUntil: "networkidle" });

  const res = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  const bad = res.violations.filter(v => v.impact === "critical" || v.impact === "serious");
  console.log(`Design System issues: ${bad.length}`);
  for (const v of bad) {
    console.log(`[${v.impact}] ${v.id}: ${v.description}`);
    for (const n of v.nodes) {
      console.log(`Selector: ${n.target.join(", ")}`);
      console.log(`HTML: ${n.html}`);
    }
  }

  await browser.close();
}

findDS();

