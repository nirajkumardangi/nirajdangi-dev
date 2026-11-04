import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { FloatingActions } from "@/components/layout/floating-actions";
import { GlobalJsonLd } from "@/components/seo/json-ld";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF9" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0C12" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.owner.name} — Websites for Doctors, Creators & Event Brands`,
    template: `%s | ${siteConfig.owner.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  keywords: [
    "website developer in Ranchi",
    "website for doctors",
    "wedding planner website India",
    "AI chatbot developer",
    "freelance web developer Ranchi",
    "Next.js developer Jharkhand",
    "clinic website design Ranchi",
    "event brand web design",
  ],
  authors: [{ name: siteConfig.owner.name, url: siteConfig.url }],
  creator: siteConfig.owner.name,
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.owner.name} — Web Design & AI`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Niraj Kumar Dangi Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.owner.name} — Web Design & AI`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <GlobalJsonLd />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(!s&&d)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen relative antialiased">
        {/* Skip to Content accessible link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2.5 focus:bg-ink focus:text-white focus:rounded-md focus:shadow-xl focus:font-mono focus:text-xs focus:tracking-wide focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Skip to content
        </a>

        {/* Global Scroll Progress Hairline */}
        <ScrollProgress />

        {/* Global Navbar */}
        <Navbar />

        {/* Main Content with bottom padding to protect against mobile bottom bar overlap */}
        <main id="main-content" className="flex-1 pb-24 md:pb-0">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Actions: Desktop WhatsApp & Mobile Bottom Bar */}
        <FloatingActions />

        {/* Google Analytics 4 (if NEXT_PUBLIC_GA_ID is provisioned) */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
