import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageSquareText } from 'lucide-react';
import type { Product } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';

/** Catalog product card with spec badges and dual CTA. */
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-card border border-line bg-white shadow-card transition-shadow hover:shadow-card-hover">
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-brand-50">
        <Image
          src={product.featuredImage}
          alt={`${product.name} — ${product.categoryLabel}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-700">{product.categoryLabel}</p>
        <h3 className="mt-1.5 text-lg font-semibold">
          <Link href={`/products/${product.slug}`} className="transition-colors hover:text-brand-700">
            {product.name}
          </Link>
        </h3>
        <p className="prose-body mt-2 line-clamp-2 text-sm">{product.shortDescription}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.specHighlights.map((s) => (
            <Badge key={s} variant="outline">
              {s}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
          <Link
            href={`/products/${product.slug}`}
            className="link-underline text-sm"
          >
            View Details <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href={`/products/${product.slug}#inquire`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-brand-700"
          >
            <MessageSquareText className="h-4 w-4" aria-hidden />
            Inquire
          </Link>
        </div>
      </div>
    </article>
  );
}
