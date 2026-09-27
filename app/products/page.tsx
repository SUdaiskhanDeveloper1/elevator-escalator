import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { CTASection } from '@/components/common/CTASection';
import { ProductCatalog } from '@/components/products/ProductCatalog';
import { products } from '@/data/products';
import type { ProductFamily } from '@/lib/types';

export const metadata: Metadata = buildMetadata({
  title: 'Products',
  description:
    'Browse our full range of elevators, escalators and moving walkways — passenger, hospital, cargo, panoramic, home lifts and more.',
  path: '/products',
  keywords: ['elevator products', 'escalator products', 'passenger elevator', 'cargo elevator', 'moving walkway'],
});

type Family = 'all' | ProductFamily;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ family?: string }>;
}) {
  const { family } = await searchParams;
  const initialFamily = (['elevator', 'escalator', 'moving-walkway'].includes(family ?? '')
    ? family
    : 'all') as Family;

  return (
    <>
      <PageHero
        eyebrow="Product Catalog"
        title="Elevators, Escalators & Moving Walkways"
        description="Explore our range of vertical-transport systems, engineered to international safety standards for buildings of every scale."
        image="/images/categories/elevators.webp"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Products', href: '/products' },
        ]}
      />
      <section className="section">
        <Container>
          <ProductCatalog products={products} initialFamily={initialFamily} />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
