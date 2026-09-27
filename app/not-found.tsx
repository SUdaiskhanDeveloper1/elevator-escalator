import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="section">
      <Container className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="text-6xl font-bold text-brand-700">404</p>
        <h1 className="mt-4 text-fluid-h2">Page not found</h1>
        <p className="prose-body mt-3 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Explore our products or head back home.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Button href="/products" variant="outline" size="lg">
            Browse Products
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted">
          Or <Link href="/contact" className="font-medium text-brand-700 underline underline-offset-4">contact our team</Link>.
        </p>
      </Container>
    </section>
  );
}
