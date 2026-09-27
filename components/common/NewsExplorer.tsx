'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import type { Article } from '@/lib/types';
import { NewsCard } from './NewsCard';
import { EmptyState } from '@/components/ui/States';
import { cn } from '@/lib/utils';

export function NewsExplorer({ articles, categories }: { articles: Article[]; categories: string[] }) {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(6);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      if (category !== 'all' && a.category !== category) return false;
      if (q && !(`${a.title} ${a.excerpt} ${a.category}`.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [articles, category, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <Chip active={category === 'all'} onClick={() => { setCategory('all'); setVisible(6); }}>
            All
          </Chip>
          {categories.map((c) => (
            <Chip key={c} active={category === c} onClick={() => { setCategory(c); setVisible(6); }}>
              {c}
            </Chip>
          ))}
        </div>
        <label className="relative">
          <span className="sr-only">Search news</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setVisible(6); }}
            placeholder="Search articles…"
            className="h-10 w-full rounded-md border border-line pl-9 pr-3 text-sm outline-none focus:border-brand-600 sm:w-64"
          />
        </label>
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <EmptyState title="No articles found" description="Try a different category or search term." />
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.slice(0, visible).map((a) => (
                <NewsCard key={a.id} article={a} />
              ))}
            </div>
            {visible < filtered.length && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + 6)}
                  className="inline-flex h-12 items-center rounded-md border border-brand-700 px-6 text-sm font-semibold text-brand-700 hover:bg-brand-50"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'rounded-full border px-3.5 py-1.5 text-sm transition-colors',
        active ? 'border-brand-700 bg-brand-700 text-white' : 'border-line text-muted hover:border-brand-600 hover:text-brand-700',
      )}
    >
      {children}
    </button>
  );
}
