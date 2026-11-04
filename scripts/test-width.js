import { chromium } from "playwright";

async function check() {
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.setViewportSize({ width: 768, height: 900 });
  await p.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  
  const bad = await p.evaluate(() => {
    const results = [];
    const elements = document.querySelectorAll("body *");
    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      if (rect.right > 768.1) {
        results.push({
          tag: el.tagName,
          id: el.id,
          class: typeof el.className === "string" ? el.className.slice(0, 80) : "",
          rect: { left: rect.left, right: rect.right, width: rect.width },
        });
      }
    }
    return results;
  });

  console.log("Elements > 768px:", JSON.stringify(bad, null, 2));
  await b.close();
}

check();
