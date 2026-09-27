import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site.config';
import { products, productCategories } from '@/data/products';
import { projects } from '@/data/projects';
import { articles } from '@/data/news';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, '');
  const now = new Date('2025-06-01');

  const staticRoutes = [
    '',
    '/products',
    '/escalators',
    '/moving-walkways',
    '/projects',
    '/about',
    '/downloads',
    '/news',
    '/contact',
    '/privacy',
    '/terms',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const categoryRoutes = productCategories
    .filter((c) => c.family === 'elevator' || c.family === 'escalator')
    .map((c) => ({
      url: `${base}/products/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  const newsRoutes = articles.map((a) => ({
    url: `${base}/news/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...projectRoutes, ...newsRoutes];
}
