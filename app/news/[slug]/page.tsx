import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, User } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/data/site.config';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/common/CTASection';
import { NewsCard } from '@/components/common/NewsCard';
import { ShareButtons } from '@/components/common/ShareButtons';
import { articles, getArticleBySlug, getRelatedArticles } from '@/data/news';
import { formatDate } from '@/lib/utils';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return buildMetadata({ title: 'News', description: 'News article.' });
  return buildMetadata({
    title: article.seo.title,
    description: article.seo.description,
    path: `/news/${article.slug}`,
    image: article.featuredImage,
    type: 'article',
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 3);
  const url = new URL(`/news/${article.slug}`, siteConfig.url).toString();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: new URL(article.featuredImage, siteConfig.url).toString(),
    datePublished: article.publishedAt,
    author: { '@type': 'Organization', name: article.author },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.legalName,
      logo: { '@type': 'ImageObject', url: new URL(siteConfig.logo, siteConfig.url).toString() },
    },
    mainEntityOfPage: url,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <PageHero
        eyebrow={article.category}
        title={article.title}
        image={article.featuredImage}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'News', href: '/news' },
          { name: article.title, href: `/news/${article.slug}` },
        ]}
      />

      <article className="section">
        <Container className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" aria-hidden /> {formatDate(article.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" aria-hidden /> {article.author}
            </span>
          </div>

          <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-card border border-line bg-brand-50">
            <Image src={article.featuredImage} alt={article.title} fill sizes="(max-width:768px) 100vw, 768px" className="object-cover" priority />
          </div>

          <div className="prose-body mt-8 space-y-5 text-base leading-relaxed">
            {article.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <ShareButtons url={url} title={article.title} />
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="section bg-surface">
          <Container>
            <SectionHeading eyebrow="Keep Reading" title="Related articles" />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((a) => (
                <NewsCard key={a.id} article={a} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection title="Have a question for our engineers?" />
      <div className="sr-only">
        <Link href="/news">Back to all news</Link>
      </div>
    </>
  );
}
