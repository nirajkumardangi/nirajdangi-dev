const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

async function runTestsAndCaptures() {
  const artDir = "C:\\Users\\niraj\\.gemini\\antigravity\\brain\\ca86d1aa-cefc-40f3-b8da-c367a326362d";
  const pubDir = path.join(__dirname, "..", "public", "screenshots");
  fs.mkdirSync(pubDir, { recursive: true });

  console.log("=== 1. API FUNCTIONAL TESTS ===");

  // Test 1: Valid submission
  const validRes = await fetch("http://localhost:3000/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": "192.168.1.10" },
    body: JSON.stringify({
      name: "Dr. Rajesh Kumar",
      whatsapp: "+91 98351 23456",
      email: "dr.rajesh@example.com",
      businessType: "doctor",
      service: "website",
      budget: "standard",
      message: "Need a modern clinic website with OPD timings, location map, and direct WhatsApp booking.",
    }),
  });
  const validData = await validRes.json();
  console.log("Test 1 (Valid Payload): Status =", validRes.status, validData);

  // Test 2: Honeypot spam bot check
  const botRes = await fetch("http://localhost:3000/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": "192.168.1.11" },
    body: JSON.stringify({
      name: "Spam Bot",
      whatsapp: "+91 99999 99999",
      businessType: "other",
      service: "website",
      budget: "starter",
      message: "Buy cheap backlinks now at our spam link http://spam.xyz",
      company_website: "http://bot-spammer.com", // Honeypot filled!
    }),
  });
  const botData = await botRes.json();
  console.log("Test 2 (Honeypot Trap): Status =", botRes.status, botData);

  // Test 3: Validation failure
  const invalidRes = await fetch("http://localhost:3000/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": "192.168.1.12" },
    body: JSON.stringify({
      name: "A", // too short
      whatsapp: "123", // invalid
      businessType: "",
      service: "",
      budget: "",
      message: "hi", // too short
    }),
  });
  const invalidData = await invalidRes.json();
  console.log("Test 3 (Validation Failure): Status =", invalidRes.status, invalidData.error);

  // Test 4: Rate limit test
  console.log("Test 4: Running Rate Limit Check (6 rapid requests from same IP)...");
  let rateLimited = false;
  for (let i = 0; i < 7; i++) {
    const rlRes = await fetch("http://localhost:3000/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-forwarded-for": "192.168.1.99" },
      body: JSON.stringify({
        name: "Rate Tester",
        whatsapp: "+91 98765 43210",
        businessType: "startup",
        service: "webapp",
        budget: "premium",
        message: "Testing rate limit threshold for lead capture endpoint.",
      }),
    });
    if (rlRes.status === 429) {
      rateLimited = true;
      const rlData = await rlRes.json();
      console.log(`Request #${i + 1} blocked by Rate Limiter: Status = 429, Message:`, rlData.error);
      break;
    }
  }
  console.log("Rate limiter active & blocking excess requests:", rateLimited);

  console.log("\n=== 2. PLAYWRIGHT UI CAPTURES ===");

  const browser = await chromium.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
  });

  // 1. Desktop 1440x900 /contact page
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktop.goto("http://localhost:3000/contact", { waitUntil: "networkidle" });
  await desktop.waitForTimeout(600);

  const contactDesktopPath = path.join(artDir, "stage6-contact-1440.png");
  await desktop.screenshot({ path: contactDesktopPath });
  fs.copyFileSync(contactDesktopPath, path.join(pubDir, "stage6-contact-1440.png"));
  console.log("Saved stage6-contact-1440.png");

  // Fill form on Desktop and submit
  await desktop.fill("#name", "Dr. Anita Sen");
  await desktop.fill("#whatsapp", "+91 94311 55667");
  await desktop.fill("#email", "anita.sen@ranchiclinic.org");
  await desktop.selectOption("#businessType", "doctor");
  await desktop.selectOption("#service", "website");
  await desktop.selectOption("#budget", "standard");
  await desktop.fill("#message", "We need a clean 5-page clinic website for our cardiology practice in Lalpur, Ranchi. Need OPD timings, WhatsApp consultation button, and Google Maps location.");
  
  await desktop.waitForTimeout(400);
  await desktop.click("button[type='submit']");

  // Wait for success screen
  await desktop.waitForSelector("text=ENQUIRY RECEIVED", { timeout: 5000 });
  await desktop.waitForTimeout(500);

  const successDesktopPath = path.join(artDir, "stage6-contact-success-1440.png");
  await desktop.screenshot({ path: successDesktopPath });
  fs.copyFileSync(successDesktopPath, path.join(pubDir, "stage6-contact-success-1440.png"));
  console.log("Saved stage6-contact-success-1440.png");

  // 2. Desktop 1440x900 Homepage CTA with QuickEnquiry
  await desktop.goto("http://localhost:3000/#contact", { waitUntil: "networkidle" });
  const ctaEl = await desktop.$("#contact");
  if (ctaEl) await ctaEl.scrollIntoViewIfNeeded();
  await desktop.waitForTimeout(600);

  const ctaDesktopPath = path.join(artDir, "stage6-cta-quick-enquiry-1440.png");
  await desktop.screenshot({ path: ctaDesktopPath });
  fs.copyFileSync(ctaDesktopPath, path.join(pubDir, "stage6-cta-quick-enquiry-1440.png"));
  console.log("Saved stage6-cta-quick-enquiry-1440.png");

  await desktop.close();

  // 3. Mobile 390x844 (iPhone 14)
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto("http://localhost:3000/contact", { waitUntil: "networkidle" });
  await mobile.waitForTimeout(600);

  const mobileFormPath = path.join(artDir, "stage6-mobile-390-contact-form.png");
  await mobile.screenshot({ path: mobileFormPath });
  fs.copyFileSync(mobileFormPath, path.join(pubDir, "stage6-mobile-390-contact-form.png"));
  console.log("Saved stage6-mobile-390-contact-form.png");

  // Scroll to direct contact on mobile
  await mobile.evaluate(() => window.scrollBy(0, 750));
  await mobile.waitForTimeout(500);
  const mobileDirectPath = path.join(artDir, "stage6-mobile-390-contact-direct.png");
  await mobile.screenshot({ path: mobileDirectPath });
  fs.copyFileSync(mobileDirectPath, path.join(pubDir, "stage6-mobile-390-contact-direct.png"));
  console.log("Saved stage6-mobile-390-contact-direct.png");

  // Check 390px overflow
  const overflow390 = await mobile.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  console.log("Mobile 390px Horizontal Overflow:", overflow390);

  await mobile.close();

  // 4. Mobile 360px & 320px Overflow Verification
  for (const w of [360, 320]) {
    const p = await browser.newPage({ viewport: { width: w, height: 740 } });
    await p.goto("http://localhost:3000/contact", { waitUntil: "networkidle" });
    await p.waitForTimeout(500);

    const hasOverflow = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    const scrollWidth = await p.evaluate(() => document.documentElement.scrollWidth);
    console.log(`Viewport ${w}px -> scrollWidth: ${scrollWidth}, hasOverflow: ${hasOverflow}`);

    if (w === 360) {
      const p360Path = path.join(artDir, "stage6-mobile-360-contact.png");
      await p.screenshot({ path: p360Path });
      fs.copyFileSync(p360Path, path.join(pubDir, "stage6-mobile-360-contact.png"));
    }

    await p.close();
  }

  await browser.close();
  console.log("=== STAGE 6 ALL TESTS AND CAPTURES COMPLETE ===");
}

runTestsAndCaptures().catch((err) => {
  console.error("Test error:", err);
  process.exit(1);
});

