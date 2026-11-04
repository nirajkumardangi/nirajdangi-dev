# niraj.online (v2)

High-craft portfolio and lead capture system for **Niraj Kumar Dangi** — freelance developer based in Ranchi, Jharkhand.

- **Production URL**: [https://niraj.online](https://niraj.online)
- **Positioning**: "Websites for doctors, creators and event brands, designed to get enquiries."
- **Stack**: Next.js 16.4.5 (App Router, Turbopack, TS), Tailwind CSS v4, Motion, React Hook Form + Zod, Resend.
- **Design System**: "Studio Precision" (Light-first `#FAFAF9`, Indigo `#5B5BD6`, WhatsApp `#25D366` strictly on WhatsApp buttons, dark showcase `#0A0A0F`, soft dark mode).

---

## 🛠️ 1. Setup & Installation

### Prerequisites
- Node.js 20+ (LTS recommended)
- npm 10+

### Installation
```bash
# 1. Clone repository
git clone https://github.com/nirajkumardangi/niraj.online.git
cd niraj.online

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local

# 4. Run local development server (Turbopack)
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 2. Environment Variables

Create `.env.local` in the project root:

```env
# Resend API Key for lead notification emails
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Email address that receives new lead enquiries
CONTACT_EMAIL=niraj@example.com

# Google Analytics 4 Measurement ID (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

> **Note**: If `RESEND_API_KEY` is omitted or placeholder in development, enquiries will log to the console without sending actual emails.

---

## 📁 3. How to Add a New Project

Project data is fully typed and centralized in `src/data/projects.ts`.

1. Open `src/data/projects.ts`.
2. Add a new object to the `projects` array:

```ts
{
  slug: "my-new-client",
  title: "Client Name — Short Specialty",
  tagline: "One clear sentence describing what the project achieved.",
  vertical: "Doctors", // "Doctors" | "Artists" | "Photographers" | "Wedding Planners" | "Event Organisers" | "Local Services" | "Software"
  status: "Live",      // "Live" (for real clients) or "Concept" (for prototypes)
  featured: true,      // Set true to show on homepage Bento grid
  bentoSize: "medium", // "large" | "medium" | "tall" | "standard"
  images: {
    desktop: "/work/my-client-desktop.png",
    mobile: "/work/my-client-mobile.png",
  },
  role: "Full-stack Design & Development",
  timeline: "3 weeks",
  liveUrl: "https://myclient.com", // Optional
  repoUrl: "https://github.com/...", // Optional
  problem: "Two clear sentences explaining what was holding the client back before.",
  solution: "Two sentences explaining how the site solved this problem.",
  features: [
    "One-tap WhatsApp booking integration",
    "Under 1s load time on mobile 4G",
    "Bilingual English / Hindi services page",
  ],
  stack: ["Next.js", "Tailwind CSS", "TypeScript"],
  results: [
    // Rule: ONLY use verified real numbers. If unknown, use:
    { label: "Enquiries", value: "[ADD_REAL_METRIC]" }
  ]
}
```

3. Place desktop/mobile screenshots in `public/work/`.
4. Next.js will automatically:
   - Generate static case study at `/work/my-new-client`
   - Generate social 1200×630 OpenGraph card at `/work/my-new-client/opengraph-image`
   - Add URL to `sitemap.xml`

---

## 💰 4. How to Edit Pricing & Maintenance

Pricing tiers and maintenance options are centralized in `src/data/pricing.ts`.

### Editing Plan Tiers
Open `src/data/pricing.ts` and edit `pricingPlans`:
- `Starter` (₹4,999) — 1–3 pages for local professionals.
- `Standard` (₹12,999) — 5–8 pages, custom CMS/booking, most popular.
- `Premium` (₹24,999+) — Web application, AI chatbot, bespoke custom build.

To update prices or deliverables, modify `price`, `timeline`, or `deliverables` in `pricingPlans`.

### Editing Maintenance Retainers
Edit `maintenanceTiers` in `src/data/pricing.ts`:
- `Basic Care`: ₹999/mo (hosting, updates, monthly check)
- `Growth Care`: ₹2,499/mo (content edits, SEO check, speed audit)
- `Priority Partner`: ₹4,999/mo (same-day edits, feature iterations)

---

## 🔍 5. Verification & Testing Scripts

```bash
# 1. Typecheck
npx tsc --noEmit

# 2. Linting
npm run lint

# 3. Production build
npm run build

# 4. Production start
npm start

# 5. Playwright UI audit across 9 viewports & 2 themes
node scripts/ui-audit.mjs
```

---

## 🏛️ Design Principles ("Studio Precision")
- **Mobile First**: Always designed at 360px first, tested 320px–1920px.
- **Single Accent**: Indigo `#5B5BD6` for focus and highlights; `#25D366` strictly reserved for WhatsApp.
- **Authenticity (Rule 2)**: Non-live projects badged `Concept`; unknown metrics labeled `[ADD_REAL_METRIC]`; testimonials dormant until genuine client quotes exist.
