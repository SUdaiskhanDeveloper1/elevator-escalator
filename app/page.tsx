import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Hero } from '@/components/home/Hero';
import { ProductCategories } from '@/components/home/ProductCategories';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { AboutPreview } from '@/components/home/AboutPreview';
import { Statistics } from '@/components/common/Statistics';
import { CTASection } from '@/components/common/CTASection';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { NewsCard } from '@/components/common/NewsCard';
import { QuoteForm } from '@/components/common/QuoteForm';
import { getFeaturedProducts } from '@/data/products';
import { getFeaturedProjects } from '@/data/projects';
import { getLatestArticles } from '@/data/news';
import { siteConfig } from '@/data/site.config';

export const metadata: Metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.longDescription,
  path: '/',
  keywords: ['elevator manufacturer', 'escalator manufacturer', 'moving walkways', 'passenger elevator', 'vertical transportation'],
});

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 6);
  const featuredProjects = getFeaturedProjects().slice(0, 3);
  const latestNews = getLatestArticles(3);

  return (
    <>
      <Hero />
      <ProductCategories />

      {/* Featured products */}
      <section className="section bg-surface">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Featured Products" title="Selected models from our range" />
            <Button href="/products" variant="outline">
              View All Products <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
          <div className="mt-10">
            <ProductGrid products={featuredProducts} />
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <Statistics />
      <AboutPreview />

      {/* Featured projects */}
      <section className="section bg-surface">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Featured Projects" title="Delivered around the region" />
            <Button href="/projects" variant="outline">
              All Projects <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Quote / contact section */}
      <section id="quote" className="section">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Get a Quote"
              title="Tell us about your project"
              description="Share your requirements and our engineers will prepare a tailored proposal. Prefer to talk? Call us or message us on WhatsApp."
            />
            <ul className="prose-body mt-6 space-y-3">
              <li>• Fast response — typically within one business day</li>
              <li>• Technical assessment by experienced engineers</li>
              <li>• Clear specifications, drawings and transparent pricing</li>
              <li>• Support through installation and after-sales service</li>
            </ul>
          </div>
          <div className="rounded-card border border-line bg-white p-6 shadow-card sm:p-8">
            <QuoteForm sourcePage="home-quote" />
          </div>
        </Container>
      </section>

      {/* Latest news */}
      <section className="section bg-surface">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Latest News" title="Insights & announcements" />
            <Link href="/news" className="link-underline">
              All News <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latestNews.map((a) => (
              <NewsCard key={a.id} article={a} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
