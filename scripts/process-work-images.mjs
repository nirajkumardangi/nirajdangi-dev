import sharp from "sharp";
import fs from "fs";
import path from "path";

const SCRATCH = path.resolve("C:/Users/niraj/.gemini/antigravity/brain/ca86d1aa-cefc-40f3-b8da-c367a326362d/scratch/extracted_screenshots");
const LIVE_CAPTURES = path.resolve("public/work/live-captures");
const WORK_DIR = path.resolve("public/work");

const JOBS = [
  {
    dir: "rovala",
    desktopSrc: path.join(SCRATCH, "rovala-home.png"),
    mobileSrc: path.join(LIVE_CAPTURES, "rovala-in-mobile.png"),
  },
  {
    dir: "framer-lens",
    desktopSrc: path.join(SCRATCH, "photographer.png"),
    mobileSrc: path.join(LIVE_CAPTURES, "framer-lens-mobile.png"),
  },
  {
    dir: "feedaid",
    desktopSrc: path.join(SCRATCH, "feed-aid-home.png"),
    mobileSrc: path.join(LIVE_CAPTURES, "feedaid-mobile.png"),
  },
  {
    dir: "ai-assistant",
    desktopSrc: path.join(SCRATCH, "ai-knowledge-assistant.webp"),
  },
  {
    dir: "doctor",
    desktopSrc: path.join(SCRATCH, "health-care.png"),
  },
  {
    dir: "real-estate",
    desktopSrc: path.join(SCRATCH, "real-estate.png"),
  },
  {
    dir: "product-showcase",
    desktopSrc: path.join(SCRATCH, "product-showcase.png"),
  },
  {
    dir: "portfolio-v1",
    desktopSrc: path.join(SCRATCH, "Screenshot (28).png"),
    mobileSrc: path.join(LIVE_CAPTURES, "niraj-online-mobile.png"),
  },
];

async function processAll() {
  for (const job of JOBS) {
    const targetDir = path.join(WORK_DIR, job.dir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    if (job.desktopSrc && fs.existsSync(job.desktopSrc)) {
      const outDesktop = path.join(targetDir, "desktop.webp");
      await sharp(job.desktopSrc)
        .resize({ width: 1440, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(outDesktop);
      const stat = fs.statSync(outDesktop);
      console.log(`Processed ${job.dir}/desktop.webp: ${(stat.size / 1024).toFixed(1)} KB`);
    }

    if (job.mobileSrc && fs.existsSync(job.mobileSrc)) {
      const outMobile = path.join(targetDir, "mobile.webp");
      await sharp(job.mobileSrc)
        .resize({ width: 780, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(outMobile);
      const stat = fs.statSync(outMobile);
      console.log(`Processed ${job.dir}/mobile.webp: ${(stat.size / 1024).toFixed(1)} KB`);
    }
  }
  console.log("All work images optimized and saved!");
}

processAll().catch(err => {
  console.error("Image processing error:", err);
  process.exit(1);
});

