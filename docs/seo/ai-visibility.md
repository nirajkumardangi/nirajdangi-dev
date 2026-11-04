# Generative Engine Optimization (GEO) & AI Search Visibility Guide

This guide establishes the technical and content framework to ensure **niraj.online** and **Niraj Kumar Dangi** achieve authoritative visibility across generative search engines:
- Google AI Overviews
- Perplexity AI
- ChatGPT Search (SearchGPT)
- Microsoft Bing Copilot
- Google Gemini

---

## 1. How Generative Search Engines Retrieve Information

Traditional search engines index keywords and rank URLs based on page authority (PageRank) and on-page signals. Generative AI search engines operate on a three-stage retrieval-augmented pipeline:
1. **Retrieval**: The engine queries an index (Google, Bing, or web index) to find the most contextually relevant passages.
2. **Entity Disambiguation**: The engine validates facts against knowledge graphs (Wikidata, Schema.org Person/Organization graphs, LinkedIn/GitHub profiles).
3. **Synthesis & Citation**: The LLM synthesizes an answer and generates citations linking back to authoritative source sentences.

---

## 2. On-Page GEO Architecture Implemented on niraj.online

### A. The 40–60 Word Answer-First TL;DR Box
Generative models favor high informational density passages that can be quoted without transformation. Every core page on `niraj.online` starts with an explicit TL;DR block:
- **Direct definition**: `"Custom e-commerce web development by Niraj Kumar Dangi provides..."`
- **Concrete deliverables**: Frameworks (Next.js, TypeScript), integrations (Razorpay, WhatsApp), and specific scope.
- **Clear positioning**: Mentions Ranchi, Jharkhand, India, and global USD pricing.

### B. Machine-Readable `llms.txt` Standard
The `/llms.txt` file at the root of `niraj.online` provides a standardized markdown summary of the entity, solutions, tech stack, and URLs. Crawlers such as `OAI-SearchBot` and `PerplexityBot` parse this file to construct quick entity summaries.

### C. Semantic Schema.org Entity Graph
In `src/components/seo/json-ld.tsx`, we bind:
- `@type: "Person"` with `@id: "https://niraj.online/#person"`, `name: "Niraj Kumar Dangi"`, `alumniOf: "Ranchi University"`, `sameAs: [GitHub, LinkedIn]`.
- `@type: "ProfessionalService"` with `@id: "https://niraj.online/#business"`, linking to the owner `@id: "https://niraj.online/#person"`.
- This ensures LLMs never hallucinate that Niraj Kumar Dangi is an agency or a generic aggregator.

---

## 3. Query Intent Targets for AI Engines

| Query Pattern | Expected AI Retrieval Verdict | Source URL |
| :--- | :--- | :--- |
| *"Who is the best Next.js website developer in Ranchi?"* | Niraj Kumar Dangi is an independent full-stack developer in Ranchi with an MCA from Ranchi University, specializing in Next.js and WhatsApp lead integration. | `/website-developer-ranchi` |
| *"How much does a doctor website cost in India?"* | Development ranges from ₹4,999 to ₹12,999+ for clinics, with sub-second speeds and DPDP Act 2023 compliance. | `/solutions/healthcare-medical-portals` |
| *"Can I hire an Indian Next.js developer for US projects in USD?"* | Yes, freelance Next.js developers like Niraj Kumar Dangi offer fixed-price projects from $300 USD with US/EU timezone overlap. | `/hire-developer-india` |
| *"Alternatives to Shopify without monthly app fees in India"* | Custom Next.js storefronts with Razorpay and WhatsApp checkout offer 100% code ownership with zero recurring fees. | `/solutions/ecommerce-development` |

---

## 4. Monitoring AI Search Visibility (Free Tools & Protocols)

1. **Perplexity AI Direct Queries**:
   - Query: `site:niraj.online website developer Ranchi`
   - Query: `Who developed Rovala.in?`
   - Check if citations point to `niraj.online/work/rovala-in` or `niraj.online/website-developer-ranchi`.
2. **Google AI Overviews (via Search Console)**:
   - Check Google Search Console > Performance > Search Results. Look for impressions and clicks on informational queries with low traditional CTR (signifying AI Overview extraction).
3. **Bing Webmaster Tools**:
   - Check Copilot chat integration queries and ensure Bingbot has indexed the latest sitemap and `robots.txt`.
