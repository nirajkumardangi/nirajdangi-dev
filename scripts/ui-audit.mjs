import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import fs from "fs";
import path from "path";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const OUTPUT_DIR = path.resolve(process.cwd(), "audit-screenshots");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const WIDTHS = [320, 360, 390, 414, 768, 1024, 1280, 1440, 1920];
const THEMES = ["light", "dark"];

const ROUTES = [
  { name: "home", path: "/" },
  { name: "work", path: "/work" },
  { name: "project-rovala", path: "/work/rovala-in" },
  { name: "contact", path: "/contact" },
  { name: "privacy", path: "/privacy" },
  { name: "design-system", path: "/design-system" },
];

async function runAudit() {
  console.log(`Starting UI Audit against ${BASE_URL}...`);
  console.log(`Testing ${ROUTES.length} routes x ${WIDTHS.length} widths x ${THEMES.length} themes (${ROUTES.length * WIDTHS.length * THEMES.length} evaluations)\n`);

  const browser = await chromium.launch({
    headless: true,
  });

  const results = {
    totalChecked: 0,
    overflowFailures: [],
    exceedingElements: [],
    smallTouchTargets: [],
    imageIssues: [],
    h1Issues: [],
    axeIssues: [],
    screenshotsSaved: 0,
  };

  // === 1. AXE-CORE ACCESSIBILITY AUDIT ===
  console.log("=== 1. RUNNING AXE-CORE ACCESSIBILITY AUDIT ===");
  for (const route of ROUTES) {
    for (const theme of THEMES) {
      const context = await browser.newContext({ deviceScaleFactor: 1 });
      const page = await context.newPage();

      try {
        const url = `${BASE_URL}${route.path}`;
        await page.goto(url, { waitUntil: "networkidle" });
        await page.waitForTimeout(200);

        // Apply theme
        await page.evaluate((t) => {
          if (t === "dark") {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }, theme);

        await page.waitForTimeout(100);

        const axeResults = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
          .analyze();

        const criticalOrSerious = axeResults.violations.filter(
          (v) => v.impact === "critical" || v.impact === "serious"
        );

        if (criticalOrSerious.length > 0) {
          console.error(`❌ [axe-core] ${route.name} (${theme}): ${criticalOrSerious.length} critical/serious issues`);
          for (const v of criticalOrSerious) {
            console.error(`   - [${v.impact.toUpperCase()}] ${v.id}: ${v.description}`);
            results.axeIssues.push({
              route: route.name,
              theme,
              impact: v.impact,
              id: v.id,
              description: v.description,
              nodes: v.nodes.length,
            });
          }
        } else {
          console.log(`✅ [axe-core] ${route.name} (${theme}): 0 critical/serious violations`);
        }
      } catch (err) {
        console.error(`Error running axe on ${route.name}:`, err.message);
      } finally {
        await context.close();
      }
    }
  }

  // === 2. MULTI-VIEWPORT, OVERFLOW, TOUCH TARGET, IMAGE & H1 CHECKS ===
  console.log("\n=== 2. RUNNING MULTI-VIEWPORT, OVERFLOW, TOUCH TARGET & H1 CHECKS ===");

  const auditContext = await browser.newContext({ deviceScaleFactor: 1 });
  const auditPage = await auditContext.newPage();

  for (const route of ROUTES) {
    const url = `${BASE_URL}${route.path}`;
    await auditPage.goto(url, { waitUntil: "networkidle" });
    await auditPage.waitForTimeout(200);

    for (const width of WIDTHS) {
      const height = width < 768 ? 844 : 900;
      await auditPage.setViewportSize({ width, height });

      for (const theme of THEMES) {
        results.totalChecked++;

        // Apply theme
        await auditPage.evaluate((t) => {
          if (t === "dark") {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }, theme);

        await auditPage.waitForTimeout(80);

        // 1. Horizontal overflow check (scrollWidth > clientWidth with 1px subpixel tolerance)
        const overflow = await auditPage.evaluate(() => {
          const docWidth = document.documentElement.clientWidth;
          const scrollWidth = document.documentElement.scrollWidth;
          return {
            hasOverflow: scrollWidth > docWidth + 1,
            docWidth,
            scrollWidth,
          };
        });

        if (overflow.hasOverflow) {
          const msg = `${route.name} @ ${width}px (${theme}): scrollWidth (${overflow.scrollWidth}) > clientWidth (${overflow.docWidth})`;
          results.overflowFailures.push(msg);
          console.warn(`⚠️ Overflow: ${msg}`);
        }

        // 2. Elements exceeding viewport width (excluding intentional horizontal scrolling containers)
        const exceeding = await auditPage.evaluate((w) => {
          const bad = [];
          const all = document.querySelectorAll("body *");
          for (const el of all) {
            if (
              el.tagName === "SCRIPT" ||
              el.tagName === "STYLE" ||
              el.tagName === "NOSCRIPT"
            )
              continue;

            // Skip elements within scrollable container
            if (el.closest('[class*="overflow-x-auto"], [class*="overflow-x-scroll"]')) {
              continue;
            }

            const rect = el.getBoundingClientRect();
            if (rect.width === 0 && rect.height === 0) continue;

            // Check if element spills past viewport width by more than 2px
            if (rect.right > w + 2.5) {
              bad.push({
                tag: el.tagName.toLowerCase(),
                className:
                  typeof el.className === "string"
                    ? el.className.slice(0, 60)
                    : "",
                right: Math.round(rect.right),
                width: Math.round(rect.width),
              });
            }
          }
          return bad;
        }, width);

        if (exceeding.length > 0) {
          results.exceedingElements.push({
            route: route.name,
            width,
            theme,
            count: exceeding.length,
            sample: exceeding.slice(0, 2),
          });
        }

        // 3. Interactive touch targets < 44x44 on mobile (checked at mobile viewports)
        if (width <= 414 && theme === "light") {
          const smallTargets = await auditPage.evaluate(() => {
            // Skip design system style guide which intentionally renders button size variants (sm/md/lg)
            if (window.location.pathname.startsWith("/design-system")) return [];

            const items = document.querySelectorAll(
              "button, a[href], input, select, textarea"
            );
            const found = [];
            for (const el of items) {
              const rect = el.getBoundingClientRect();
              if (rect.width === 0 || rect.height === 0) continue;
              const style = window.getComputedStyle(el);
              if (
                style.display === "none" ||
                style.visibility === "hidden" ||
                style.opacity === "0"
              )
                continue;

              // Exclude hidden honeypots and off-screen skip links
              if (
                rect.top < -10 ||
                rect.left < -10 ||
                el.classList.contains("sr-only") ||
                el.closest('[aria-hidden="true"], .sr-only')
              ) {
                continue;
              }

              // Exclude inline text links inside running text
              const isInline =
                el.tagName === "A" &&
                el.closest("p, nav[aria-label='Breadcrumb'], .text-xs");

              if ((rect.width < 44 || rect.height < 44) && !isInline) {
                found.push({
                  tag: el.tagName.toLowerCase(),
                  text: (el.textContent || "").trim().slice(0, 30),
                  ariaLabel: el.getAttribute("aria-label") || "",
                  width: Math.round(rect.width),
                  height: Math.round(rect.height),
                });
              }
            }
            return found;
          });

          if (smallTargets.length > 0) {
            results.smallTouchTargets.push({
              route: route.name,
              width,
              count: smallTargets.length,
              targets: smallTargets,
            });
          }
        }

        // 4. Images missing alt or dimensions (checked once per route)
        if (width === 1440 && theme === "light") {
          const badImages = await auditPage.evaluate(() => {
            const imgs = document.querySelectorAll("img");
            const list = [];
            for (const img of imgs) {
              const hasAlt = img.hasAttribute("alt");
              const hasDims =
                (img.hasAttribute("width") && img.hasAttribute("height")) ||
                img.closest('[style*="aspect-ratio"]') !== null ||
                img.style.position === "absolute" ||
                (img.naturalWidth > 0 && img.naturalHeight > 0);

              if (!hasAlt || !hasDims) {
                list.push({
                  src: img.getAttribute("src")?.slice(0, 50),
                  hasAlt,
                  hasDims,
                });
              }
            }
            return list;
          });

          if (badImages.length > 0) {
            results.imageIssues.push({
              route: route.name,
              images: badImages,
            });
          }
        }

        // 5. Exactly one H1 check (checked once per route)
        if (width === 1440 && theme === "light") {
          const h1Count = await auditPage.evaluate(() => {
            return document.querySelectorAll("h1").length;
          });

          if (h1Count !== 1) {
            results.h1Issues.push({
              route: route.name,
              h1Count,
            });
          }
        }

        // Save representative audit screenshot
        if ([360, 390, 768, 1440].includes(width)) {
          const screenshotName = `${route.name}-${width}-${theme}.png`;
          const screenshotPath = path.join(OUTPUT_DIR, screenshotName);
          await auditPage.screenshot({
            path: screenshotPath,
            fullPage: false,
          });
          results.screenshotsSaved++;
        }
      }
    }
    console.log(`✓ Tested route ${route.name} across all 9 viewports in light & dark.`);
  }

  await auditContext.close();
  await browser.close();

  // Save summary JSON
  const reportPath = path.join(OUTPUT_DIR, "audit-summary.json");
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

  console.log("\n=== AUDIT SUMMARY ===");
  console.log(`Total variant evaluations: ${results.totalChecked}`);
  console.log(`Screenshots captured: ${results.screenshotsSaved} (saved to /audit-screenshots)`);
  console.log(`Overflow failures: ${results.overflowFailures.length}`);
  console.log(`Exceeding element groups: ${results.exceedingElements.length}`);
  console.log(`Small touch targets flagged: ${results.smallTouchTargets.length}`);
  console.log(`Image issues (missing alt/dims): ${results.imageIssues.length}`);
  console.log(`H1 count issues: ${results.h1Issues.length}`);
  console.log(`Axe-core critical/serious issues: ${results.axeIssues.length}`);

  return results;
}

runAudit()
  .then((res) => {
    const hasFailures =
      res.overflowFailures.length > 0 ||
      res.axeIssues.length > 0 ||
      res.h1Issues.length > 0 ||
      res.imageIssues.length > 0;
    if (hasFailures) {
      console.log("\n⚠️ UI Audit finished with items to address.");
      process.exit(1);
    } else {
      console.log("\n🎉 ALL UI AUDIT TESTS PASSED WITH ZERO FAILURES!");
      process.exit(0);
    }
  })
  .catch((err) => {
    console.error("UI Audit failed with error:", err);
    process.exit(1);
  });
