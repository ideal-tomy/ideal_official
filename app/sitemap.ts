import type { MetadataRoute } from 'next'
import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import { getPublishedCases, getCaseHref } from '@/data/cases'
import { industryArticles, themeArticles } from '@/data/articles'
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://ideal.example.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/lab`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
  ]

  const demoRoutes: MetadataRoute.Sitemap = capabilities
    .filter((c) => c.status === 'ready')
    .map((c) => ({
      url: `${baseUrl}${c.href}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  const caseRoutes: MetadataRoute.Sitemap = getPublishedCases().map((c) => ({
    url: `${baseUrl}${getCaseHref(c.slug)}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const articleRoutes: MetadataRoute.Sitemap = industryArticles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const themeArticleRoutes: MetadataRoute.Sitemap = themeArticles.map((article) => ({
    url: `${baseUrl}/articles/t/${article.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.72,
  }))

  return [
    ...staticRoutes,
    ...demoRoutes,
    ...caseRoutes,
    ...articleRoutes,
    ...themeArticleRoutes,
  ]
}
