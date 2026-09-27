'use client';

import { useMemo, useState } from 'react';
import type { Certificate } from '@/lib/types';
import { CertificateCard } from './CertificateCard';
import { EmptyState } from '@/components/ui/States';
import { cn } from '@/lib/utils';

export function DownloadsExplorer({
  items,
  categories,
  languages,
}: {
  items: Certificate[];
  categories: string[];
  languages: string[];
}) {
  const [category, setCategory] = useState('all');
  const [language, setLanguage] = useState('all');

  const filtered = useMemo(
    () =>
      items.filter(
        (i) => (category === 'all' || i.category === category) && (language === 'all' || i.language === language),
      ),
    [items, category, language],
  );

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <Chip active={category === 'all'} onClick={() => setCategory('all')}>
            All types
          </Chip>
          {categories.map((c) => (
            <Chip key={c} active={category === c} onClick={() => setCategory(c)}>
              {c}
            </Chip>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm">
          <span className="text-muted">Language</span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="h-10 rounded-md border border-line bg-white px-3 text-sm outline-none focus:border-brand-600"
          >
            <option value="all">All</option>
            {languages.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <EmptyState title="No documents match your filters" description="Try a different type or language." />
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {filtered.map((item) => (
              <CertificateCard key={item.id} item={item} />
            ))}
          </div>
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
