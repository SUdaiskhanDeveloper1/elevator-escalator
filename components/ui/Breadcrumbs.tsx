import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { breadcrumbJsonLd } from '@/lib/seo';

export interface Crumb {
  name: string;
  href: string;
}

/** Accessible breadcrumb trail with matching BreadcrumbList JSON-LD. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(items.map((i) => ({ name: i.name, url: i.href })))),
        }}
      />
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-1.5 text-white/70">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="font-medium text-white">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.name}
                  </Link>
                )}
                {!last && <ChevronRight className="h-3.5 w-3.5 text-white/50" aria-hidden />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
