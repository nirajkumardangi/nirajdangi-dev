# niraj.online v2 — Stage 0: Content Plan

> **Status:** Awaiting project URLs from Niraj before Stage 1 can begin.  
> All `[PLACEHOLDER]` markers must be filled before any copy goes live.  
> No invented testimonials, metrics, or client names appear anywhere in this document.

---

## 1. Project Inventory

> **Instructions for Niraj:** Fill in every `[PLACEHOLDER]` cell. Add rows for any
> projects not listed. Mark status honestly — only genuinely deployed, public-facing
> client or personal products get "Live". Everything else is "Concept".

| # | Name | URL | Vertical | Status | What it demonstrates | Strongest 3 features | Screenshot status |
|---|------|-----|----------|--------|----------------------|----------------------|-------------------|
| 1 | AI Knowledge Assistant | [PLACEHOLDER – GitHub/live URL] | AI / RAG | Concept | Local-first RAG pipeline with Ollama, ChromaDB, semantic search | (1) Zero-cloud privacy architecture (2) PDF/DOCX ingestion + citation (3) Custom chat UI with source highlighting | Manual capture needed |
| 2 | [PLACEHOLDER – Project name] | [PLACEHOLDER] | Doctor / Clinic | [Live / Concept] | Medical practice website built for enquiry conversion | [PLACEHOLDER] | [PLACEHOLDER] |
| 3 | [PLACEHOLDER – Project name] | [PLACEHOLDER] | Wedding / Event | [Live / Concept] | Emotional, visual-first brand site for wedding planners | [PLACEHOLDER] | [PLACEHOLDER] |
| 4 | [PLACEHOLDER – Project name] | [PLACEHOLDER] | Artist / Photographer | [Live / Concept] | Portfolio / gallery site for a creative professional | [PLACEHOLDER] | [PLACEHOLDER] |
| 5 | [PLACEHOLDER – Project name] | [PLACEHOLDER] | Coaching / Education | [Live / Concept] | Lead-capture site for a coaching institute | [PLACEHOLDER] | [PLACEHOLDER] |
| 6 | [PLACEHOLDER – Project name] | [PLACEHOLDER] | Service (RO/AC/Local) | [Live / Concept] | Local service business site with WhatsApp CTA | [PLACEHOLDER] | [PLACEHOLDER] |
| 7 | [PLACEHOLDER – Project name] | [PLACEHOLDER] | AI Chatbot / Automation | [Live / Concept] | Embeddable AI chatbot for a business | [PLACEHOLDER] | [PLACEHOLDER] |
| 8 | niraj.online v1 | niraj.online | Personal Portfolio | Live | Existing portfolio — will be replaced by v2 | [PLACEHOLDER] | Auto (Playwright) |

> **Badge rules enforced:** "Live" = publicly deployed, real client or own product.
> "Concept" = demo, personal experiment, or spec work. Badge is non-negotiable in UI.

---

## 2. Recommended Featured Set

### Recommended: 5–6 Featured Projects

The audience (Ranchi doctors, event brands, creators, service businesses) needs to
**see themselves** in the work immediately. The selection must therefore cover the
widest range of verticals with the highest visual diversity.

| Slot | Project | Vertical | Why it earns a feature slot |
|------|---------|----------|-----------------------------|
| F-1 | [PLACEHOLDER – Doctor/Clinic site] | Doctor | Highest-intent vertical for Ranchi. Clinics are actively looking. Establishes trust with conservative audience. |
| F-2 | [PLACEHOLDER – Wedding/Event site] | Wedding / Event | Emotionally resonant, visually striking. Great thumbnail magnet. |
| F-3 | [PLACEHOLDER – Photographer/Artist] | Creative | Proves visual taste to international/agency clients. |
| F-4 | AI Knowledge Assistant | AI / RAG | Differentiator — no other Ranchi freelancer shows AI work. Appeals to startup/agency segment. |
| F-5 | [PLACEHOLDER – Coaching or Local Service] | Education / Service | Broad relatability for small business owners. |
| F-6 | [PLACEHOLDER – Chatbot/Automation] | AI Automation | Secondary offer proof. Keep brief — link to separate case study. |

### "More Experiments" (grid, smaller cards)
Everything else: Age Calculator, DevTinder-style experiments, GitHub-only projects.
These show range without cluttering the main narrative.

**Justification:** The primary audience does not understand tech stacks — they respond
to recognising their own business type in the work. Five verticals across six cards
achieves this. The AI slot is kept to one because it may feel distant to local
Ranchi clients; it speaks directly to the secondary (startup/international) audience.

---

## 3. Homepage Wireframe (Text)

> One section = one message. No section tries to do two jobs.

```
┌─────────────────────────────────────────────────────────────────┐
│  NAV                                                             │
│  Logo (niraj.)          Work  Services  Process  Pricing        │
│                                                      [Chat →]   │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1 — HERO
Message:    "You build it. I make sure people find and trust it."
Headline:   Websites that get your clinic, studio or brand enquiries.
Sub:        Custom-built for doctors, creators and event businesses
            in Ranchi — and clients worldwide.
Visual:     Faint 1px grid bg. Rotating device frames (mobile +
            desktop) showing 2–3 project screenshots. No stock photos.
CTA:        [WhatsApp Niraj →]  (primary, indigo)
            [See the work ↓]  (ghost, secondary)
Alt H1 A:   "Your website should be working while you sleep."
Alt H1 B:   "Precision-built websites for doctors, creators & brands."
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 2 — TRUST STRIP / SOCIAL PROOF
Message:    "Real businesses, real verticals."
Visual:     Horizontal scroll of vertical labels (not logos):
            DOCTOR  ·  WEDDING  ·  PHOTOGRAPHER  ·  COACHING  ·
            EVENT  ·  AI CHATBOT
            (These are category labels, NOT invented client names)
No CTA.     Transition element only.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 3 — FEATURED WORK
Message:    "Work that speaks for itself."
Eyebrow:    SELECTED PROJECTS
Headline:   Built for the businesses that need enquiries most.
Visual:     5–6 cards in a masonry-ish grid. Each card:
            — Device frame screenshot (mobile or desktop)
            — Project name + vertical tag
            — Live / Concept badge
            — One-sentence "what problem it solves"
            — [View project →] link
CTA (section): [See all work →]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 4 — SERVICES
Message:    "Here's what I build — and why it's different."
Eyebrow:    WHAT I DO
Headline:   Three things. Done properly.
Cards (3):
  ┌────────────────────────────────────┐
  │ 01 — WEBSITE DESIGN & BUILD        │
  │ Fast, mobile-first sites for       │
  │ doctors, studios, event brands.    │
  │ Built on Next.js. Yours forever.   │
  └────────────────────────────────────┘
  ┌────────────────────────────────────┐
  │ 02 — AI CHATBOTS                   │
  │ A bot trained on your clinic,      │
  │ service, or brand. Answers common  │
  │ questions. Captures enquiries.     │
  └────────────────────────────────────┘
  ┌────────────────────────────────────┐
  │ 03 — AUTOMATION                    │
  │ Booking forms, WhatsApp alerts,    │
  │ follow-up sequences. Less manual   │
  │ work, more consistent service.     │
  └────────────────────────────────────┘
CTA: [WhatsApp to discuss your project →]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 5 — PROCESS
Message:    "It's simple and predictable — no technical jargon."
Eyebrow:    HOW IT WORKS
Headline:   From first message to live site in 3 steps.
Steps (numbered, horizontal on desktop / stacked on mobile):
  1. BRIEF — You tell me what you do, who you serve,
              and what a good enquiry looks like.
  2. BUILD — I design and build. You see it before it goes live.
              One round of revisions included.
  3. LAUNCH — Goes live. You get the files and admin access.
              Support available after.
No CTA. (The process section builds confidence, not action.)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 6 — DARK SHOWCASE (#0A0A0F)
Message:    "AI is a real part of what I build, not a buzzword."
Eyebrow:    AI + AUTOMATION
Headline:   Smarter tools for your business.
Visual:     Single large device frame showing AI chatbot or RAG
            demo — dark background makes it pop.
Sub:        A chatbot trained on your services. Answers at 2 AM.
            Routes enquiries to WhatsApp. No monthly SaaS fee.
CTA: [See how it works →]  (links to AI project case study)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 7 — PRICING TEASER
Message:    "Transparent enough to build trust, vague enough to need a call."
Eyebrow:    PRICING
Headline:   Clear prices. No surprises.
Tiers (3 columns, card layout):
  ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
  │ STARTER          │ │ STUDIO  ★ POPULAR │ │ GROWTH           │
  │ Single-page site │ │ 4–6 page site     │ │ Site + AI bot    │
  │ WhatsApp CTA     │ │ + contact form    │ │ + automation     │
  │ Mobile-first     │ │ + WhatsApp        │ │ + monthly care   │
  │                  │ │ + 1 revision      │ │                  │
  │ From ₹[X]        │ │ From ₹[X]         │ │ From ₹[X]        │
  └──────────────────┘ └──────────────────┘ └──────────────────┘
  [PLACEHOLDER – fill in actual prices]
  Fine print: "Prices in INR. International clients quoted in USD."
CTA: [WhatsApp to get a custom quote →]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 8 — FAQ
Message:    "Remove the last objection before the CTA."
Eyebrow:    QUESTIONS
Headline:   Things people usually ask.
(See copy deck §6 for full FAQ copy)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 9 — FINAL CTA
Message:    "One action. No friction."
Eyebrow:    READY TO START?
Headline:   Let's talk about your project.
Sub:        Takes 2 minutes. No commitment.
CTA (primary):   [WhatsApp Niraj →]  (green, full WhatsApp number)
CTA (secondary): [Send a message →]  (opens contact form modal)
Visual:     Niraj's photo or avatar [PLACEHOLDER – real photo needed]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FOOTER
Links: Work · Services · Process · Pricing · GitHub · LinkedIn
Legal: © 2025 Niraj Kumar Dangi · Ranchi, Jharkhand
No cookie banner unless analytics added.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 4. Copy Deck

### §1 — Hero

**Eyebrow (mono, uppercase):** `FREELANCE WEB DESIGNER · RANCHI`

**H1 (primary — under 12 words):**
> Websites that get your clinic, studio or brand enquiries.

**H1 Alternative A (12 words, benefit-led):**
> Your website should be working for you, even while you sleep.

**H1 Alternative B (10 words, punchy):**
> Precision-built websites for doctors, creators and event brands.

**Supporting line (body, max 2 sentences):**
> Custom-designed and built for businesses in Ranchi and beyond.
> Fast on mobile. Clear to your customers. Yours to keep.

**CTA primary:** `WhatsApp Niraj →`
**CTA secondary:** `See the work ↓`

---

### §2 — Vertical Showcase Strip

No copy. Visual labels only: `DOCTOR · WEDDING · PHOTOGRAPHER · COACHING · EVENT · AI CHATBOT`

---

### §3 — Featured Work

**Eyebrow:** `SELECTED PROJECTS`

**Headline:** Built for businesses that need enquiries most.

**Sub:** Every project solves a real problem. Live work is marked live. Everything else says so.

*(Individual project one-liners — fill per project once URLs confirmed)*

| Project slot | One-liner [PLACEHOLDER] |
|---|---|
| F-1 Doctor | [PLACEHOLDER – e.g. "Appointment enquiries up — before we even touched SEO."] |
| F-2 Wedding | [PLACEHOLDER] |
| F-3 Photographer | [PLACEHOLDER] |
| F-4 AI RAG | A local AI that answers questions from your own documents — privately, without sending data to the cloud. |
| F-5 Coaching/Service | [PLACEHOLDER] |
| F-6 Chatbot | [PLACEHOLDER] |

---

### §4 — Services

**Eyebrow:** `WHAT I DO`

**Headline:** Three things. Done properly.

**Service 1 — Website Design & Build**
> A fast, mobile-first website built to get you enquiries.
> Not a template — designed around your business, your customers, and your city.
> Built on Next.js. You own every file on day one.

**Service 2 — AI Chatbots**
> A chat assistant trained on your services, FAQs, and pricing.
> Available on your website 24/7. Routes serious enquiries to WhatsApp.
> No monthly SaaS fee. No data leaving your control.

**Service 3 — Automation**
> Booking forms that notify you on WhatsApp. Follow-up messages that send themselves.
> Small automations that save hours every week — built specifically for your workflow.

---

### §5 — Process

**Eyebrow:** `HOW IT WORKS`

**Headline:** From first message to live site. Three steps.

**Step 1 — Brief**
> You tell me what you do, who your customers are, and what a good enquiry looks like.
> No technical knowledge needed. 30-minute call or voice note — your choice.

**Step 2 — Build**
> I design and build. You see it in a staging link before anything goes live.
> One revision round is included. No surprise charges.

**Step 3 — Launch**
> Goes live on your domain. You get admin access and all source files.
> I stay available for questions after launch.

---

### §6 — FAQ

**Eyebrow:** `QUESTIONS`

**Headline:** Things people usually ask.

| Question | Answer |
|----------|--------|
| How long does a website take? | A single-page site takes 5–7 working days. A multi-page site with a contact form takes 10–14 days. Complex projects are quoted individually. |
| Do I need to understand tech? | No. You tell me about your business in plain language. I handle everything technical. |
| Will it work on mobile phones? | Yes — mobile is designed first, desktop second. It will work on the cheapest Android phones on a 4G connection. |
| Do you work with businesses outside Ranchi? | Yes. I work with clients across India and internationally. Everything can be done over WhatsApp and video call. |
| What do I get at the end? | The live website, admin access, and all source code. You are not locked into any monthly platform fee (unless you choose hosting that charges one). |
| Can you add a chatbot to an existing site? | Yes, as a standalone service. Send a WhatsApp message with a link to your current site and I'll confirm if it's compatible. |
| Do you offer ongoing support? | Yes. The Growth plan includes monthly maintenance. Ad-hoc support is available hourly for Starter and Studio clients. |
| What are your payment terms? | 50% upfront, 50% on launch. All prices in INR; international clients quoted in USD. |

---

### §7 — Pricing Teaser

**Eyebrow:** `PRICING`

**Headline:** Clear prices. No surprises.

**Sub:** Every project is different. These are starting points — message me for a quote tailored to your business.

| Tier | What's included | Starting price |
|------|----------------|----------------|
| Starter | Single-page site, WhatsApp CTA, mobile-first, fast load | ₹[PLACEHOLDER] |
| Studio *(most popular)* | 4–6 pages, contact form, WhatsApp integration, 1 revision round | ₹[PLACEHOLDER] |
| Growth | Studio + AI chatbot + automation + 3 months of support | ₹[PLACEHOLDER] |

**Fine print:** Prices in INR. International clients quoted in USD.
Hosting not included (I recommend Vercel free tier for most projects).

---

### §8 — Final CTA

**Eyebrow:** `READY TO START?`

**Headline:** Let's talk about your project.

**Sub:** Takes 2 minutes to describe what you need. No commitment on the first call.

**CTA primary:** `WhatsApp Niraj →`  
*(links to: `https://wa.me/91[PLACEHOLDER_NUMBER]?text=Hi%20Niraj%2C%20I%27d%20like%20to%20discuss%20a%20project.`)*

**CTA secondary:** `Send a message →` *(opens contact form)*

---

## 5. Screenshot Capture Plan

### 5a — Playwright Script

> Save as `scripts/capture-screenshots.ts`
> Run with: `npx tsx scripts/capture-screenshots.ts`
> Requires: `npm install -D playwright tsx`
> Output: `/public/work/{slug}/desktop.png` and `/public/work/{slug}/mobile.png`

```typescript
// scripts/capture-screenshots.ts
// Automated screenshot capture for niraj.online v2 work section.
// Fill PROJECTS array with real slugs and URLs before running.
// Status: NOT VERIFIED — requires Playwright and live URLs to test.

import { chromium } from "playwright";
import path from "path";
import fs from "fs";

const DESKTOP = { width: 1440, height: 900 };
const MOBILE  = { width: 390,  height: 844 };

// ─── FILL THESE IN ────────────────────────────────────────────────────────────
const PROJECTS: { slug: string; url: string }[] = [
  // { slug: "dr-sharma-clinic",   url: "https://PLACEHOLDER.com" },
  // { slug: "wedding-planner",    url: "https://PLACEHOLDER.com" },
  // { slug: "photographer-rk",    url: "https://PLACEHOLDER.com" },
  // { slug: "ai-knowledge-asst",  url: "https://PLACEHOLDER.com" },
  // { slug: "coaching-ranchi",    url: "https://PLACEHOLDER.com" },
  // { slug: "chatbot-demo",       url: "https://PLACEHOLDER.com" },
  { slug: "niraj-online-v1",     url: "https://niraj.online" },
];
// ──────────────────────────────────────────────────────────────────────────────

async function capture() {
  const browser = await chromium.launch();

  for (const project of PROJECTS) {
    const dir = path.join(process.cwd(), "public", "work", project.slug);
    fs.mkdirSync(dir, { recursive: true });

    for (const [label, viewport] of [
      ["desktop", DESKTOP],
      ["mobile",  MOBILE],
    ] as const) {
      const ctx  = await browser.newContext({ viewport });
      const page = await ctx.newPage();

      console.log(`Capturing ${project.slug} @ ${label} (${viewport.width}×${viewport.height})…`);

      await page.goto(project.url, { waitUntil: "networkidle", timeout: 30_000 });

      // Wait for fonts and images to settle
      await page.waitForTimeout(1500);

      // Scroll to trigger lazy-load
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(500);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(300);

      const outPath = path.join(dir, `${label}.png`);
      await page.screenshot({ path: outPath, fullPage: false });
      console.log(`  ✓ Saved → ${outPath}`);

      await ctx.close();
    }
  }

  await browser.close();
  console.log("\nAll screenshots complete.");
}

capture().catch((err) => {
  console.error("Screenshot capture failed:", err);
  process.exit(1);
});
```

### 5b — Manual Capture List

The following cannot be automated (require login, are behind auth, or are not publicly deployed):

| Item | Reason | Instructions |
|------|--------|-------------|
| Any project behind a login | Playwright cannot authenticate | Open in browser, F11 fullscreen, screenshot at 1440px; then DevTools → 390px mobile, screenshot |
| Local `localhost` builds (concept projects) | Not publicly deployed | Run dev server locally, use same manual method above |
| WhatsApp chat screenshots (if used as social proof) | Requires your phone | Screenshot on device, export to `/public/work/{slug}/chat.png` |
| Your portrait photo | Personal | High-res, neutral background, square crop preferred. Save as `/public/images/niraj.jpg` |
| Any project that uses video/animation | Static screenshots miss motion | Record a 5–10 second `.mp4` using Loom/OBS; save to `/public/work/{slug}/demo.mp4` |

### 5c — Screenshot Naming Convention

```
/public/
  images/
    niraj.jpg          ← your portrait [PLACEHOLDER – real photo]
    og-image.png       ← 1200×630 open graph image (generate in Stage 3)
  work/
    {slug}/
      desktop.png      ← 1440×900 above-fold
      mobile.png       ← 390×844 above-fold
      demo.mp4         ← optional, motion-heavy projects only
```

---

## 6. Questions Before Stage 1

The following must be answered before writing a single line of UI code.

### Critical (blocks Stage 1)

| # | Question | Why it matters |
|---|----------|----------------|
| Q1 | **What are the actual project URLs?** Please list every project you want shown, with its URL and whether it's Live or Concept. | The entire work section depends on this. Without URLs, screenshots are impossible and project cards are all placeholder. |
| Q2 | **What is your WhatsApp number?** (Full international format: +91XXXXXXXXXX) | Used in every CTA link. Cannot be a placeholder at launch. |
| Q3 | **What are your actual pricing tiers?** (INR amounts for Starter / Studio / Growth) | Pricing section is live copy, not placeholder. Invented numbers are not allowed. |
| Q4 | **Do you have a professional photo of yourself?** | The final CTA section and About (if added) need a real photo. |
| Q5 | **Is the domain niraj.online already pointing to Vercel, or will DNS need changing?** | Affects deployment config and environment variables. |

### Important (can be answered during Stage 1–2)

| # | Question | Why it matters |
|---|----------|----------------|
| Q6 | **Should there be a separate `/work` page** (all projects grid) **or just the homepage work section?** | Routing and page count decision. |
| Q7 | **Is there an `/about` page or is the about content folded into the homepage?** | Affects nav and information architecture. |
| Q8 | **Do you want a contact form with Resend, or WhatsApp-only?** | Form requires Resend API key and env vars. |
| Q9 | **Any projects you want hidden from the public but available via a secret `/preview` link?** | Requires a simple token-gated route. |
| Q10 | **Are the AI Knowledge Assistant and any other GitHub projects ready to show, or still private?** | Affects whether we link to GitHub or a live deploy. |
| Q11 | **Do you want a blog / notes section now or in a later phase?** | Adds content modelling complexity if yes. |
| Q12 | **Any brand constraint I haven't seen?** (existing logo, colours used in social media, any "don't use X" rules) | Prevents late-stage rework. |

---

## Appendix A — Design System Quick Reference (for Stage 1)

| Token | Value |
|-------|-------|
| Background | `#FAFAF9` |
| Surface | `#FFFFFF` |
| Ink | `#0B0B0F` |
| Muted | `#5C5C66` |
| Accent | `#5B5BD6` (indigo) |
| WhatsApp | `#25D366` |
| Dark section bg | `#0A0A0F` |
| Border | `rgba(10,10,20,0.08)` |
| Radius (card) | `20px` |
| Radius (control) | `12px` |
| Font UI/body | Geist Sans |
| Font label | Geist Mono |
| Font accent word | Instrument Serif italic |
| H1 size | `clamp(2.5rem, 7vw, 5rem)` |
| H1 tracking | `-0.04em` |
| H1 leading | `1.02` |
| H2 size | `clamp(1.75rem, 4vw, 3rem)` |
| Body size | `16–18px` |
| Body max width | `65ch` |
| Motion duration | `400ms` |
| Motion easing | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Fade-up distance | `12px` |
| Stagger | `60ms` |

---

*Document version: Stage 0 draft · 2025-11-04 · Awaiting Niraj's input on Q1–Q5 before Stage 1 begins.*

