/**
 * IndexNow Submission Script
 * Submits updated URLs to Bing, Yandex, and other search engines supporting IndexNow.
 *
 * Usage:
 *   node scripts/indexnow.mjs [url1 url2 ...]
 *
 * Requirements:
 *   - INDEXNOW_KEY environment variable or a static key file in /public/<key>.txt
 */

const HOST = "niraj.online";
const KEY = process.env.INDEXNOW_KEY || "4f9d6c8b1a3e5f7a9d2c4e6b8a1f3e5d";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Default list of high-priority URLs to submit
const DEFAULT_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/solutions`,
  `https://${HOST}/solutions/portfolio-personal-branding-websites`,
  `https://${HOST}/solutions/healthcare-medical-portals`,
  `https://${HOST}/solutions/ecommerce-development`,
  `https://${HOST}/solutions/ai-chatbots-automation`,
  `https://${HOST}/solutions/nonprofit-community-websites`,
  `https://${HOST}/website-developer-ranchi`,
  `https://${HOST}/website-developer-jharkhand`,
  `https://${HOST}/hire-developer-india`,
  `https://${HOST}/contact`,
  `https://${HOST}/terms`,
  `https://${HOST}/privacy`,
];

async function submitIndexNow(urls) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  console.log(`[IndexNow] Preparing submission for ${urls.length} URLs on host: ${HOST}`);
  console.log(`[IndexNow] URLs: \n${urls.map((u) => `  - ${u}`).join("\n")}`);

  try {
    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`[IndexNow] Success! Response status: ${response.status}`);
    } else {
      console.warn(
        `[IndexNow] Received non-200 status (${response.status}): ${response.statusText}`
      );
      const text = await response.text();
      if (text) console.warn(`[IndexNow] Response body: ${text}`);
    }
  } catch (error) {
    console.error("[IndexNow] Network or submission error:", error.message);
  }
}

const customUrls = process.argv.slice(2);
const urlsToSubmit = customUrls.length > 0 ? customUrls : DEFAULT_URLS;

submitIndexNow(urlsToSubmit);

