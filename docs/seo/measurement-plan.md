# SEO & Generative Search Measurement Plan

This document establishes the official tracking framework for **niraj.online**. 

> **Hard Constraint**: In compliance with strict engineering integrity standards, **zero search volumes, rankings, or traffic figures are fabricated**. All metrics must be populated directly from verified free analytics tools using the protocols below.

---

## 1. Verified Free Toolset & Setup Protocol

| Tool | Access URL | Free Tier Requirements | Primary Purpose |
| :--- | :--- | :--- | :--- |
| **Google Search Console (GSC)** | `search.google.com/search-console` | Domain DNS Verification via TXT record | Real impressions, clicks, click-through rate (CTR), average position, index coverage, Core Web Vitals. |
| **Google Keyword Planner** | `ads.google.com` | Switch to "Expert Mode"; no campaign spend required | Actual monthly search volume ranges and regional competition for India/Jharkhand. |
| **Google Trends** | `trends.google.com` | No login required | Relative regional interest trends in Jharkhand vs. India for key terms. |
| **Bing Webmaster Tools** | `bing.com/webmasters` | Connect via Google Search Console integration | Bing search & Copilot AI indexing status, crawl diagnostics, IndexNow submission logs. |
| **Google Analytics 4 (GA4)** | `analytics.google.com` | Free | Session conversion rates for `whatsapp_click`, `form_submit`, and `call_click`. |

---

## 2. Primary Keyword Rank & Index Tracking Table

Track positions monthly in Google Search Console:

| URL | Target Primary Query | GSC Impressions (30d) | GSC Clicks (30d) | Avg Position | Verification Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | `web developer ranchi` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | NOT VERIFIED |
| `/solutions` | `custom web development solutions` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | NOT VERIFIED |
| `/solutions/ecommerce-development` | `custom ecommerce website developer` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | NOT VERIFIED |
| `/solutions/healthcare-medical-portals` | `doctor clinic website developer india` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | NOT VERIFIED |
| `/solutions/ai-chatbots-automation` | `custom ai chatbot developer for business`| `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | NOT VERIFIED |
| `/solutions/portfolio-personal-branding-websites` | `portfolio website developer india` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | NOT VERIFIED |
| `/solutions/nonprofit-community-websites` | `ngo website developer india` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | NOT VERIFIED |
| `/website-developer-ranchi` | `website developer in ranchi` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | NOT VERIFIED |
| `/website-developer-jharkhand` | `website developer in jharkhand` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | NOT VERIFIED |
| `/hire-developer-india` | `hire nextjs developer india` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | `[FILL FROM TOOL]` | NOT VERIFIED |

---

## 3. Conversion Event Tracking (GA4)

All interactive conversion points trigger standard GA4 events defined in `src/lib/analytics.ts`:

1. **`whatsapp_click`**:
   - Trigger: Tapping any WhatsApp button.
   - Parameters: `placement` (`hero`, `header`, `footer`, `solution_sidebar`, `pricing_card`), `solution_category` (e.g. `Healthcare`, `E-Commerce`).
2. **`form_submit`**:
   - Trigger: Successful submission of the enquiry form on `/contact` or `<QuickEnquiry>`.
   - Parameters: `service_requested`, `budget_tier`.
3. **`phone_click`**:
   - Trigger: Tapping phone or direct contact call link.

---

## 4. Weekly Audit Protocol (15-Minute Cadence)

Every Monday at 10:00 AM IST:
1. **Google Search Console**:
   - Check **Coverage / Pages**: Verify 0 pages with 5xx or unhandled 404 errors.
   - Check **Sitemaps**: Confirm `https://niraj.online/sitemap.xml` shows "Success".
   - Check **Queries**: Identify queries where the site ranks in positions 8–20 with high impressions; optimize headings or add FAQs to improve CTR.
2. **Bing Webmaster Tools**:
   - Run URL inspection on newly published blog posts or case studies.
   - Confirm IndexNow submissions processed successfully.
3. **Perplexity & AI Visibility Audit**:
   - Run prompt: `Who are reliable freelance Next.js developers in Ranchi, Jharkhand?`
   - Run prompt: `How much does a doctor clinic website cost in India?`
   - Record if `niraj.online` or `Niraj Kumar Dangi` is cited as a source.

