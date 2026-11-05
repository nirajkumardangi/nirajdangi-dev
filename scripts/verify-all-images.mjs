import fs from "fs";
import path from "path";
import sharp from "sharp";

const content = fs.readFileSync("src/data/projects.ts", "utf8");
const regex = /src:\s*["']([^"']+)["']/g;
let match;
const srcs = new Set();
while ((match = regex.exec(content)) !== null) {
  if (match[1].startsWith("/work/")) {
    srcs.add(match[1]);
  }
}

async function checkAll() {
  console.log("Total gallery & preview images referenced:", srcs.size);
  let issues = 0;
  for (const src of srcs) {
    const filePath = path.join("public", src.replace(/^\//, ""));
    if (!fs.existsSync(filePath)) {
      console.error("MISSING FILE:", filePath);
      issues++;
      continue;
    }
    const stat = fs.statSync(filePath);
    if (filePath.endsWith(".svg")) continue;
    const imgStat = await sharp(filePath).stats();
    const isBlank = imgStat.channels.every((c) => c.mean > 250 || c.mean < 2);
    if (isBlank || stat.size < 4000) {
      console.warn(
        "POSSIBLE BLANK/CORRUPT:",
        filePath,
        "size:",
        stat.size,
        "means:",
        imgStat.channels.map((c) => Math.round(c.mean))
      );
      issues++;
    }
  }
  console.log("All images check completed. Issues found:", issues);
}
checkAll().catch(console.error);

