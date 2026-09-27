import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, Download, ArrowRight, Layers } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, whatsappLink } from '@/data/site.config';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/common/CTASection';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { SpecificationTable } from '@/components/products/SpecificationTable';
import { ProductInquiryModal } from '@/components/products/ProductInquiryModal';
import { ProductGallery } from '@/components/products/ProductGallery';
import { StickyQuoteBar } from '@/components/products/StickyQuoteBar';
import { ProductGrid } from '@/components/products/ProductGrid';
import {
  products,
  getProductBySlug,
  getProductsByCategory,
  getRelatedProducts,
  categoryBySlug,
} from '@/data/products';
import { getRelatedProjects } from '@/data/projects';

export function generateStaticParams() {
  const productSlugs = products.map((p) => ({ slug: p.slug }));
  const categorySlugs = [
    'passenger-elevators',
    'hospital-elevators',
    'cargo-elevators',
    'panoramic-elevators',
    'home-elevators',
    'glass-cabin-elevators',
    'wood-cabin-elevators',
    'dumbwaiters',
    'commercial-escalators',
    'heavy-duty-escalators',
  ].map((slug) => ({ slug }));
  return [...productSlugs, ...categorySlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (product) {
    return buildMetadata({
      title: product.seo.title,
      description: product.seo.description,
      path: `/products/${product.slug}`,
      image: product.featuredImage,
      keywords: product.seo.keywords,
    });
  }
  const category = categoryBySlug(slug);
  if (category) {
    return buildMetadata({
      title: `${category.label} — ${category.tagline}`,
      description: category.intro,
      path: `/products/${category.slug}`,
      image: category.image,
    });
  }
  return buildMetadata({ title: 'Products', description: siteConfig.shortDescription, path: '/products' });
}

export default async function ProductOrCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (product) return <ProductDetail slug={slug} />;

  const category = categoryBySlug(slug);
  if (category) return <CategoryListing slug={slug} />;

  notFound();
}

/* --------------------------- Category listing ---------------------------- */

function CategoryListing({ slug }: { slug: string }) {
  const category = categoryBySlug(slug)!;
  const items = getProductsByCategory(slug);
  return (
    <>
      <PageHero
        eyebrow={category.family === 'elevator' ? 'Elevators' : category.family === 'escalator' ? 'Escalators' : 'Moving Walkways'}
        title={category.label}
        description={category.intro}
        image={category.image}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Products', href: '/products' },
          { name: category.label, href: `/products/${category.slug}` },
        ]}
      />
      <section className="section">
        <Container>
          <SectionHeading eyebrow={category.tagline} title={`${category.label} range`} />
          <div className="mt-10">
            <ProductGrid
              products={items}
              emptyAction={<Button href="/products">Browse all products</Button>}
            />
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}

/* ----------------------------- Product detail ---------------------------- */

function ProductDetail({ slug }: { slug: string }) {
  const product = getProductBySlug(slug)!;
  const related = getRelatedProducts(product.relatedProducts);
  const relatedProjects = getRelatedProjects(product.relatedProjects);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    category: product.categoryLabel,
    brand: { '@type': 'Brand', name: siteConfig.name },
    image: new URL(product.featuredImage, siteConfig.url).toString(),
    model: product.model,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <PageHero
        eyebrow={product.categoryLabel}
        title={product.name}
        description={product.shortDescription}
        image={product.featuredImage}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Products', href: '/products' },
          { name: product.categoryLabel, href: `/products/${product.category}` },
          { name: product.name, href: `/products/${product.slug}` },
        ]}
      />

      <section className="section">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Gallery */}
          <div>
            <ProductGallery images={product.images} alt={product.name} />
          </div>

          {/* Overview + actions */}
          <div>
            <div className="flex flex-wrap gap-2">
              {product.specHighlights.map((s) => (
                <Badge key={s} variant="accent">
                  {s}
                </Badge>
              ))}
            </div>
            <h2 className="mt-5 text-fluid-h3">Overview</h2>
            <p className="prose-body mt-3">{product.fullDescription}</p>

            <div className="mt-6 rounded-card border border-line bg-surface p-5">
              <p className="text-sm font-semibold text-ink">Applications</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <li key={a}>
                    <Badge variant="outline">{a}</Badge>
                  </li>
                ))}
              </ul>
            </div>

            <div id="inquire" className="mt-6 space-y-3 scroll-mt-28">
              <Button href="/contact#quote" variant="accent" size="lg" className="w-full">
                Request a Quote
              </Button>
              <ProductInquiryModal productName={product.name} />
              <Button
                href={whatsappLink(`Hello ${siteConfig.name}, I'm interested in the ${product.name} (${product.model}). Please send more information.`)}
                variant="ghost"
                size="md"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask on WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Key benefits */}
      <section className="section bg-surface">
        <Container>
          <SectionHeading eyebrow="Key Benefits" title="Engineered advantages" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {product.features.map((f) => (
              <div key={f.title} className="flex gap-4 rounded-card border border-line bg-white p-5 shadow-card">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-accent-700" aria-hidden />
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="prose-body mt-1 text-sm">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Specifications + options */}
      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Technical" title="Specifications" />
            <div className="mt-6">
              <SpecificationTable rows={product.specifications} />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Configure" title="Options & finishes" />
            <div className="mt-6 space-y-5">
              {product.options.map((opt) => (
                <div key={opt.group}>
                  <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <Layers className="h-4 w-4 text-accent-700" aria-hidden />
                    {opt.group}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {opt.items.map((i) => (
                      <li key={i}>
                        <Badge variant="outline">{i}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                <ShieldCheck className="h-4 w-4 text-accent-700" aria-hidden /> Safety features
              </p>
              <ul className="prose-body mt-2 space-y-1.5 text-sm">
                {product.safetyFeatures.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {product.certificates.map((c) => (
                <Badge key={c} variant="default">
                  {c}
                </Badge>
              ))}
            </div>

            {product.brochure && (
              <a
                href={product.brochure}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-6 text-sm"
                aria-label={`Download the ${product.name} brochure (PDF, opens in a new tab)`}
              >
                <Download className="h-4 w-4" aria-hidden /> Download brochure (PDF)
              </a>
            )}
          </div>
        </Container>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="section bg-surface">
          <Container>
            <SectionHeading eyebrow="Proven in the Field" title="Related projects" />
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <section className="section">
          <Container>
            <div className="flex items-end justify-between">
              <SectionHeading eyebrow="You May Also Consider" title="Related products" />
              <Link href="/products" className="link-underline hidden sm:inline-flex">
                All products <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="mt-8">
              <ProductGrid products={related} />
            </div>
          </Container>
        </section>
      )}

      <CTASection title={`Interested in the ${product.name}?`} />
      <StickyQuoteBar productName={product.name} />
    </>
  );
}
