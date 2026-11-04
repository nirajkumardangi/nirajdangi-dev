# Wave 2 Solution Unlocking & Concept Demo Build Queue

In strict adherence to our **Engineering Honesty Rule**, no solution page in Wave 1.5 or Wave 2 may be published as an indexable URL until a verified client deployment or an open-source concept benchmark is built and documented.

---

## 1. Wave 1.5: Solution #4 — SaaS Products

### Gate Requirement to Publish
- **Status**: Wave 1.5 (Hold until one case study is published).
- **Target Concept / Case Study**: Complete architectural write-up of `DevTinder` or `WriteNova` with production authentication, subscription billing, and database indexing metrics.
- **Verification Checklist Before Publishing `/solutions/saas-development`**:
  - [ ] Production case study added to `src/data/projects.ts` with status `"Concept"` or `"Live"`.
  - [ ] Documented stack: Next.js App Router, Supabase/PostgreSQL, Stripe/LemonSqueezy, Tailwind CSS.
  - [ ] Switch `isPublished: true` in `src/data/solutions.ts`.
  - [ ] Remove temporary redirect from `src/data/redirects.json`.

---

## 2. Wave 2: Solution #3 — Education & E-Learning

### Gate Requirement to Publish
- **Target Concept Benchmark**: **Apex Prep LMS** (Coaching Institute Portal for Ranchi).
- **Scope & Required Features**:
  1. Course catalog with syllabus download.
  2. Interactive timed MCQ practice test interface (15 sample questions with instant scorecard).
  3. Batch schedule announcement board with notice ticker.
  4. WhatsApp admission inquiry dispatch.
- **Verification Checklist Before Publishing `/solutions/education-elearning-websites`**:
  - [ ] Working demo code committed to repository.
  - [ ] Case study added to `src/data/projects.ts` with status `"Concept"`.
  - [ ] Set `isPublished: true` in `src/data/solutions.ts`.
  - [ ] Remove redirect from `src/data/redirects.json`.

---

## 3. Wave 2: Solution #5 — Real Estate & Property Portals

### Gate Requirement to Publish
- **Target Concept Benchmark**: **RanchiHomes** (RERA-Compliant Property Listing Portal).
- **Scope & Required Features**:
  1. Property listing cards with price per sq.ft., locality filter (Bariatu, Morabadi, Kanke, Ashok Nagar).
  2. Mandatory RERA Registration Number badge placeholder (`[JH-RERA-XXXXX]`) on all sample listings.
  3. Mortgage / Home Loan EMI calculator component.
  4. WhatsApp property inquiry dispatch.
- **Verification Checklist Before Publishing `/solutions/real-estate-websites`**:
  - [ ] Property listing UI and interactive EMI calculator built.
  - [ ] Case study added to `src/data/projects.ts` with status `"Concept"`.
  - [ ] Set `isPublished: true` in `src/data/solutions.ts`.
  - [ ] Remove redirect from `src/data/redirects.json`.

---

## 4. Wave 2: Solution #7 — Travel, Tourism & Hospitality

### Gate Requirement to Publish
- **Target Concept Benchmark**: **WildTrail Jharkhand** (Eco-Tourism & Resort Booking Portal).
- **Scope & Required Features**:
  1. Destination packages (Betla National Park, Netarhat Hills, Patratu Valley, Hundru Falls).
  2. Day-by-day itinerary view with route map integration.
  3. Date picker and room occupancy calculator.
  4. WhatsApp customized booking request generator.
- **Verification Checklist Before Publishing `/solutions/travel-tourism-websites`**:
  - [ ] Itinerary booking interface built and verified.
  - [ ] Case study added to `src/data/projects.ts` with status `"Concept"`.
  - [ ] Set `isPublished: true` in `src/data/solutions.ts`.
  - [ ] Remove redirect from `src/data/redirects.json`.

