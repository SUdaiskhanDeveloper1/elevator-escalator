import type { Product } from '@/lib/types';
import { ProductCard } from './ProductCard';
import { EmptyState } from '@/components/ui/States';

/** Responsive product grid with an empty state fallback. */
export function ProductGrid({ products, emptyAction }: { products: Product[]; emptyAction?: React.ReactNode }) {
  if (products.length === 0) {
    return <EmptyState action={emptyAction} />;
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
