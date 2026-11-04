import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getPublishedSolutions } from "@/data/solutions";
import { getPublishedBlogPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Real data release timestamp for current stable release
  const releaseDate = "2026-11-04T00:00:00Z";

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/website-developer-ranchi`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/website-developer-jharkhand`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hire-developer-india`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: releaseDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: releaseDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: releaseDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic published solution pages (Strictly Wave 1; Wave 2 solutions are filtered out)
  const publishedSolutions = getPublishedSolutions();
  const solutionRoutes: MetadataRoute.Sitemap = publishedSolutions.map((s) => ({
    url: `${baseUrl}/solutions/${s.slug}`,
    lastModified: s.lastModified || releaseDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic published blog posts
  const publishedPosts = getPublishedBlogPosts();
  const blogRoutes: MetadataRoute.Sitemap = publishedPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: p.updatedAt || releaseDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Dynamic project case studies
  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: releaseDate,
    changeFrequency: "monthly",
    priority: p.featured ? 0.8 : 0.6,
  }));

  return [
    ...staticRoutes,
    ...solutionRoutes,
    ...blogRoutes,
    ...projectRoutes,
  ];
}
