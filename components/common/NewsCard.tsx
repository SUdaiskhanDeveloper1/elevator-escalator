import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Article } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';

export function NewsCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-card border border-line bg-white shadow-card transition-shadow hover:shadow-card-hover">
      <Link href={`/news/${article.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-brand-50">
        <Image
          src={article.featuredImage}
          alt={article.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-muted">
          <Badge variant="accent">{article.category}</Badge>
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </div>
        <h3 className="mt-3 text-lg font-semibold">
          <Link href={`/news/${article.slug}`} className="transition-colors hover:text-brand-700">
            {article.title}
          </Link>
        </h3>
        <p className="prose-body mt-2 line-clamp-2 text-sm">{article.excerpt}</p>
        <Link href={`/news/${article.slug}`} className="link-underline mt-4 text-sm">
          Read Article <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
