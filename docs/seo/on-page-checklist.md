# On-Page Technical SEO Standard & Checklist

This document defines the strict, white-hat on-page optimization standard for all pages on **niraj.online**. Every current and future page must conform to these rules before deployment.

---

## 1. Title Tags & Meta Descriptions

| Element | Constraint | Guidelines & Verification |
| :--- | :--- | :--- |
| **Title Tag** | $\le 60$ characters (580px max) | Must feature Primary Keyword + Unique Value/Entity + Brand suffix (`\| niraj.online` or `\| Niraj Kumar Dangi`). Front-load the core keyword. |
| **Meta Description** | 120–155 characters (990px max) | Active voice, specific value proposition, mention Ranchi/India/Global where relevant, end with an implied or explicit call to action. Never duplicate descriptions across pages. |
| **Canonical Tag** | Exact absolute URL | Every page MUST declare `alternates: { canonical: "https://niraj.online/path" }`. Never point to trailing slashes or subdomains (`www`). |

### Active Title & Description Directory

1. **Home (`/`)**
   - **Title**: `Niraj Kumar Dangi — Web Developer & AI Automation` (52 chars)
   - **Description**: `Websites and AI chatbots for doctors, studios, and local businesses in Ranchi and beyond. Designed for enquiries, built to keep forever.` (137 chars)
2. **Solutions Directory (`/solutions`)**
   - **Title**: `Web & AI Solutions Architecture | niraj.online` (46 chars)
   - **Description**: `Explore 9 specialized web engineering and AI solutions by Niraj Kumar Dangi. Production Next.js, healthcare portals, e-commerce, and custom chatbots.` (151 chars)
3. **E-Commerce (`/solutions/ecommerce-development`)**
   - **Title**: `E-Commerce & Online Store Development | niraj.online` (51 chars)
   - **Description**: `Custom e-commerce web development by Niraj Kumar Dangi provides fast, mobile-first online stores with product catalogs, shopping carts, and Razorpay/Stripe.` (154 chars)
4. **Healthcare Portals (`/solutions/healthcare-medical-portals`)**
   - **Title**: `Healthcare Websites & Clinic Portals | niraj.online` (50 chars)
   - **Description**: `Healthcare web development by Niraj Kumar Dangi builds fast, trustworthy websites for doctors, multi-specialty clinics, and diagnostic labs.` (142 chars)
5. **AI Chatbots & Automation (`/solutions/ai-chatbots-automation`)**
   - **Title**: `AI Chatbots & Workflow Automation | niraj.online` (47 chars)
   - **Description**: `AI chatbot development and workflow automation by Niraj Kumar Dangi connects private knowledge bases, SOPs, and customer FAQs to conversational interfaces.` (155 chars)
6. **Portfolio & Branding (`/solutions/portfolio-personal-branding-websites`)**
   - **Title**: `Portfolio & Personal Branding Websites | niraj.online` (52 chars)
   - **Description**: `Portfolio web development by Niraj Kumar Dangi crafts bespoke personal branding platforms for doctors, photographers, architects, and independent artists.` (155 chars)
7. **Nonprofit & Community (`/solutions/nonprofit-community-websites`)**
   - **Title**: `Nonprofit & Community NGO Websites | niraj.online` (49 chars)
   - **Description**: `Nonprofit web development by Niraj Kumar Dangi builds transparent, high-trust websites for NGOs, charitable trusts, and community foundations.` (143 chars)
8. **Ranchi Local Anchor (`/website-developer-ranchi`)**
   - **Title**: `Website Developer in Ranchi | Niraj Kumar Dangi` (47 chars)
   - **Description**: `Freelance website developer in Ranchi building fast Next.js websites for doctors, retail, and local businesses. 100% code ownership, starting ₹4,999.` (150 chars)
9. **Jharkhand Regional Anchor (`/website-developer-jharkhand`)**
   - **Title**: `Website Developer in Jharkhand | Niraj Kumar Dangi` (50 chars)
   - **Description**: `Freelance web developer serving Jharkhand businesses across Jamshedpur, Dhanbad, Bokaro, and Ranchi. High-performance Next.js websites and custom portals.` (156 chars)
10. **Global / Pan-India Anchor (`/hire-developer-india`)**
    - **Title**: `Hire Freelance Next.js Developer in India | Niraj Kumar Dangi` (60 chars)
    - **Description**: `Hire senior Next.js and TypeScript developer in India. Clean architecture, US/EU timezone overlap, transparent USD pricing from $300. Full code ownership.` (155 chars)

---

## 2. Heading Hierarchy Rules

1. **Exactly One `<h1>`**: Every route must have exactly one top-level `<h1>` representing the unique core topic of the page.
2. **No Skipped Levels**: Never jump from `<h1>` to `<h3>`. Subsections must be `<h2>`, and internal components within those sections must be `<h3>`.
3. **Keyword Naturalness**: H1 and H2 tags should use natural language phrasing rather than comma-separated keywords.

---

## 3. GEO & AEO (Generative Engine Optimization) Box Rule

Every informational, solution, or local page MUST feature a dedicated **Answer-First TL;DR Box** within the top 30% of the viewport:
- **Length**: 40 to 60 words.
- **Tone**: Objective, declarative, high informational density.
- **Content**: Entity name (`Niraj Kumar Dangi`), core deliverable (`custom Next.js web development`), primary differentiator (`zero recurring CMS fees, sub-second mobile speeds`), and clear starting price/scope.
- **Engine Purpose**: Provides Google AI Overviews, Perplexity, and ChatGPT search with extractable quote fragments.

---

## 4. Internal Linking & Anchor Text Standard

- **Descriptive Anchor Text**: Never use vague anchors like "click here", "read more", or "link". Use context-rich anchors such as:
  - `Read the Rovala.in Case Study`
  - `Explore Ranchi Web Services`
  - `View Healthcare Architecture & Deliverables`
- **Breadcrumbs**: Every secondary page must render accessible breadcrumb navigation with matching `BreadcrumbList` schema.
- **Cross-Link Clusters**:
  - Solution pages cross-link to matching case studies in `/work/[slug]`.
  - Regional pages (`/website-developer-ranchi`, `/website-developer-jharkhand`) cross-link to relevant solutions (`/solutions/healthcare-medical-portals`, `/solutions/ecommerce-development`).
  - Footer provides sitewide structured hubs to all core solutions and regions.

---

## 5. Performance, Touch Targets & Accessibility

- **Mobile Viewport**: Minimum font size for body copy is 14px; interactive inputs and button touch targets must be at least $44 \times 44\text{ px}$.
- **Zero CLS (Cumulative Layout Shift)**: Images must use explicit width/height or Next.js `<Image>` component with responsive `sizes` attribute.
- **Color Contrast**: All text must achieve WCAG 2.1 AA ratio ($4.5:1$ for normal text, $3:1$ for large text) across both Light (`#FAFAF9` background) and Dark (`#12121A` background) themes.
