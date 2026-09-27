import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { CTASection } from '@/components/common/CTASection';
import { NewsExplorer } from '@/components/common/NewsExplorer';
import { articles, getFeaturedArticle, newsCategories } from '@/data/news';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = buildMetadata({
  title: 'News & Insights',
  description:
    'News, announcements and technical insights from Ascendix on elevators, escalators, safety standards and vertical-transport technology.',
  path: '/news',
  keywords: ['elevator news', 'escalator technology', 'vertical transportation insights'],
});

export default function NewsPage() {
  const featured = getFeaturedArticle();
  const rest = articles.filter((a) => a.slug !== featured.slug);

  return (
    <>
      <PageHero
        eyebrow="News & Insights"
        title="What's new at Ascendix"
        description="Announcements, technology insights and guidance on elevators, escalators and vertical-transport safety."
        image="/images/news/global-expansion.webp"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'News', href: '/news' },
        ]}
      />

      {/* Featured article */}
      <section className="section">
        <Container>
          <article className="grid items-center gap-8 overflow-hidden rounded-card border border-line bg-white shadow-card lg:grid-cols-2">
            <Link href={`/news/${featured.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-brand-50 lg:h-full">
              <Image
                src={featured.featuredImage}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </Link>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 text-xs text-muted">
                <Badge variant="accent">Featured · {featured.category}</Badge>
                <time dateTime={featured.publishedAt}>{formatDate(featured.publishedAt)}</time>
              </div>
              <h2 className="mt-3 text-fluid-h3">
                <Link href={`/news/${featured.slug}`} className="transition-colors hover:text-brand-700">
                  {featured.title}
                </Link>
              </h2>
              <p className="prose-body mt-3">{featured.excerpt}</p>
              <Link href={`/news/${featured.slug}`} className="link-underline mt-5">
                Read Article <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>
        </Container>
      </section>

      {/* All articles */}
      <section className="section bg-surface pt-0">
        <Container>
          <SectionHeading eyebrow="All Articles" title="Browse the archive" className="mb-8" />
          <NewsExplorer articles={rest.length ? rest : articles} categories={newsCategories()} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
