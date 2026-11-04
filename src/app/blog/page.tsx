import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Calendar,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { getPublishedBlogPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Web Engineering & SEO Blog",
  description:
    "Practical guides on website costs in India, Next.js architecture, doctor clinic web compliance, and WhatsApp lead automation by Niraj Kumar Dangi.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Web Engineering & SEO Blog | niraj.online",
    description:
      "Honest technical guides on web pricing, modern full-stack architecture, and lead generation for Indian and global businesses.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default function BlogDirectoryPage() {
  const posts = getPublishedBlogPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <BreadcrumbJsonLd items={[{ name: "Blog", url: "/blog" }]} />

      <Container>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ name: "Blog" }]} className="mb-8" />

        {/* Hero Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <Eyebrow className="mb-4">ENGINEERING INSIGHTS &amp; GUIDES</Eyebrow>
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.15] mb-6">
            Transparent pricing, architecture &amp;{" "}
            <span className="font-serif italic font-normal text-accent block sm:inline">
              practical guides.
            </span>
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed text-pretty">
            No marketing jargon or agency fluff. Honest breakdowns of web
            development costs in India, healthcare web compliance, Next.js
            performance benchmarks, and WhatsApp conversion engineering.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-14 md:mb-20">
            <div className="p-8 md:p-10 rounded-xl border border-[var(--color-border)] bg-surface hover:border-ink/20 transition-all">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                  {featuredPost.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredPost.readingTime}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  November 2026
                </span>
              </div>

              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-ink hover:text-accent transition-colors mb-4">
                <Link href={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl mb-6">
                {featuredPost.excerpt}
              </p>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 font-mono text-xs font-medium text-ink hover:text-accent transition-colors min-h-[44px]"
              >
                Read Complete Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center justify-between pb-6 border-b border-[var(--color-border)] mb-10">
            <h2 className="font-sans text-xl md:text-2xl font-bold text-ink">
              All Articles &amp; Technical Breakdowns
            </h2>
            <span className="font-mono text-xs text-muted">
              {posts.length} Guides
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {remainingPosts.map((post) => (
              <div
                key={post.slug}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-lg border border-[var(--color-border)] bg-surface hover:border-ink/20 transition-all group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-mono text-muted">
                    <span className="px-2 py-0.5 rounded bg-bg border border-[var(--color-border)] text-ink font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h3 className="font-sans text-lg font-bold text-ink group-hover:text-accent transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-muted text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--color-border)]/60 flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-mono text-xs font-medium text-ink group-hover:text-accent transition-colors inline-flex items-center gap-1 min-h-[44px]"
                  >
                    Read Guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Consultation CTA */}
        <div className="p-8 md:p-12 rounded-xl border border-[var(--color-border)] bg-surface text-center flex flex-col items-center gap-6">
          <Eyebrow>HAVE A QUESTION ABOUT YOUR STACK?</Eyebrow>
          <h2 className="font-sans text-2xl md:text-4xl font-bold tracking-tight text-ink max-w-xl">
            Need an objective opinion on your website architecture?
          </h2>
          <p className="text-muted text-sm md:text-base max-w-lg leading-relaxed">
            Send me a link to your current website or proposed project scope.
            I will share a direct, honest review with zero sales pressure.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-ink text-surface font-medium text-sm hover:bg-accent hover:text-white transition-colors min-h-[44px]"
            >
              Get Technical Feedback
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
