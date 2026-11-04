import type { NextConfig } from "next";
import redirectsData from "./src/data/redirects.json";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  /* Enforce consistent URL formatting without trailing slashes */
  trailingSlash: false,
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // 1. Permanent 301 www to apex domain canonical redirect
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.niraj.online",
          },
        ],
        destination: "https://niraj.online/:path*",
        permanent: true,
      },
      // 2. Structural & Legacy path redirects mapped from redirects.json
      ...redirectsData.map((item) => ({
        source: item.source,
        destination: item.destination,
        permanent: item.permanent,
      })),
    ];
  },
};

export default nextConfig;
