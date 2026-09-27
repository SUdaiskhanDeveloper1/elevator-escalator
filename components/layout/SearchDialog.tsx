'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { Search, X, Box, Building2 } from 'lucide-react';
import { products } from '@/data/products';
import { projects } from '@/data/projects';
import { articles } from '@/data/news';

interface Result {
  type: 'Product' | 'Project' | 'News';
  title: string;
  subtitle: string;
  href: string;
}

const INDEX: Result[] = [
  ...products.map((p) => ({ type: 'Product' as const, title: p.name, subtitle: p.categoryLabel, href: `/products/${p.slug}` })),
  ...projects.map((p) => ({ type: 'Project' as const, title: p.name, subtitle: `${p.city}, ${p.country}`, href: `/projects/${p.slug}` })),
  ...articles.map((a) => ({ type: 'News' as const, title: a.title, subtitle: a.category, href: `/news/${a.slug}` })),
];

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 30);
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return INDEX.filter(
      (r) => r.title.toLowerCase().includes(q) || r.subtitle.toLowerCase().includes(q) || r.type.toLowerCase().includes(q),
    ).slice(0, 8);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Search">
      <div className="absolute inset-0 bg-brand-900/50" onClick={onClose} />
      <div className="absolute inset-x-0 top-0 mx-auto mt-[8vh] w-[min(92vw,640px)] overflow-hidden rounded-card border border-line bg-white shadow-card">
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search className="h-5 w-5 text-muted" aria-hidden />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, projects, news…"
            aria-label="Search"
            className="h-14 flex-1 bg-transparent text-base outline-none placeholder:text-muted"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted hover:bg-brand-50"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-2" aria-live="polite">
          {query.trim() === '' ? (
            <p className="px-3 py-6 text-center text-sm text-muted">
              Start typing to search our catalog and projects.
            </p>
          ) : results.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-muted">
              No matches for “{query}”. Try a different term.
            </p>
          ) : (
            <ul>
              {results.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    onClick={onClose}
                    className="flex items-center gap-3 rounded-md px-3 py-3 hover:bg-brand-50"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                      {r.type === 'Project' ? <Building2 className="h-4 w-4" aria-hidden /> : <Box className="h-4 w-4" aria-hidden />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-ink">{r.title}</span>
                      <span className="block truncate text-xs text-muted">{r.type} · {r.subtitle}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
