import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Sparkles,
  Calendar,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { getBlogPostBySlug, getPublishedBlogPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const published = getPublishedBlogPosts();
  return published.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post || !post.isPublished) {
    return {
      title: "Article Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const metaTitle = `${post.title.slice(0, 50)}... | niraj.online`;
  const metaDescription = post.excerpt.slice(0, 155);

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [post.primaryKeyword],
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: metaDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [siteConfig.owner.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post || !post.isPublished) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    author: {
      "@type": "Person",
      name: siteConfig.owner.name,
      url: siteConfig.url,
      sameAs: [siteConfig.owner.github, siteConfig.owner.linkedin],
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.owner.name,
      url: siteConfig.url,
    },
  };

  const waArticleMsg = `Hi Niraj, I read your article "${post.title}" on niraj.online and wanted to ask a question.`;

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Container>
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: post.title.slice(0, 30) + "..." },
          ]}
          className="mb-8"
        />

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-ink transition-colors min-h-[36px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to All Articles
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-3xl mx-auto">
          <header className="mb-10 pb-8 border-b border-[var(--color-border)]">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted mb-4">
              <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Updated November 2026
              </span>
            </div>

            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.15] mb-6">
              {post.title}
            </h1>

            <p className="text-muted text-lg md:text-xl leading-relaxed text-pretty">
              {post.tagline}
            </p>
          </header>

          {/* GEO & AI Executive Takeaways Box */}
          <div className="mb-12 p-6 sm:p-7 rounded-xl border border-accent/30 bg-accent/[0.03] dark:bg-accent/[0.06]">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-accent">
                Key Takeaways (Summary)
              </span>
            </div>
            <p className="text-ink font-sans text-base leading-relaxed text-pretty">
              {post.excerpt}
            </p>
          </div>

          {/* Article Sections */}
          <div className="flex flex-col gap-12 font-sans text-ink leading-relaxed">
            {post.sections.map((sec, idx) => (
              <section key={idx} className="flex flex-col gap-4">
                <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-ink pt-2">
                  {sec.heading}
                </h2>

                {sec.paragraphs.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-muted text-base sm:text-lg leading-relaxed text-pretty"
                  >
                    {para}
                  </p>
                ))}

                {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                  <ul className="flex flex-col gap-3 my-2">
                    {sec.bulletPoints.map((bp, bIdx) => (
                      <li
                        key={bIdx}
                        className="p-4 rounded-md border border-[var(--color-border)] bg-surface text-sm sm:text-base text-muted leading-relaxed flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                        <span className="text-ink/90">{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 rounded-xl bg-surface border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-bold font-sans text-accent text-lg shrink-0">
                ND
              </div>
              <div>
                <span className="font-sans text-base font-bold text-ink block">
                  Niraj Kumar Dangi
                </span>
                <span className="text-xs font-mono text-muted block">
                  MCA Graduate · Full-Stack Web Architect · Ranchi
                </span>
              </div>
            </div>

            <a
              href={whatsappLink(waArticleMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2 px-3 rounded-md bg-[#25D366] text-white font-mono text-xs font-medium hover:bg-[#20ba59] transition-colors min-h-[44px]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Discuss on WhatsApp
            </a>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-mono">
            <Link
              href="/blog"
              className="text-muted hover:text-ink transition-colors inline-flex items-center gap-1 min-h-[44px]"
            >
              ← Back to All Articles
            </Link>
            <Link
              href="/solutions"
              className="text-accent hover:underline inline-flex items-center gap-1 min-h-[44px]"
            >
              Explore Solutions Directory →
            </Link>
          </div>
        </article>
      </Container>
    </div>
  );
}
