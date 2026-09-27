'use client';

import { useMemo, useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import type { Product } from '@/lib/types';
import { productCategories } from '@/data/products';
import { ProductGrid } from './ProductGrid';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type FamilyFilter = 'all' | 'elevator' | 'escalator' | 'moving-walkway';

const FAMILIES: { value: FamilyFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'elevator', label: 'Elevators' },
  { value: 'escalator', label: 'Escalators' },
  { value: 'moving-walkway', label: 'Moving Walkways' },
];

const APPLICATIONS = [
  'Office towers',
  'Residential apartments',
  'Hotels',
  'Hospitals',
  'Shopping malls',
  'Warehouses',
  'Airports',
  'Metro & rail stations',
];

interface Props {
  products: Product[];
  initialFamily?: FamilyFilter;
  initialCategory?: string;
  pageSize?: number;
}

export function ProductCatalog({ products, initialFamily = 'all', initialCategory = 'all', pageSize = 9 }: Props) {
  const [family, setFamily] = useState<FamilyFilter>(initialFamily);
  const [category, setCategory] = useState<string>(initialCategory);
  const [application, setApplication] = useState<string>('all');
  const [visible, setVisible] = useState(pageSize);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const categoriesForFamily = useMemo(
    () => productCategories.filter((c) => family === 'all' || c.family === family),
    [family],
  );

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (family !== 'all' && p.family !== family) return false;
      if (category !== 'all' && p.category !== category) return false;
      if (application !== 'all' && !p.applications.some((a) => a.toLowerCase().includes(application.toLowerCase()))) return false;
      return true;
    });
  }, [products, family, category, application]);

  const shown = filtered.slice(0, visible);

  const reset = () => {
    setFamily('all');
    setCategory('all');
    setApplication('all');
    setVisible(pageSize);
  };

  const Filters = (
    <div className="space-y-6">
      <FilterGroup label="Product type">
        <div className="flex flex-wrap gap-2">
          {FAMILIES.map((f) => (
            <FilterChip
              key={f.value}
              active={family === f.value}
              onClick={() => {
                setFamily(f.value);
                setCategory('all');
                setVisible(pageSize);
              }}
            >
              {f.label}
            </FilterChip>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup label="Category">
        <div className="flex flex-wrap gap-2">
          <FilterChip active={category === 'all'} onClick={() => { setCategory('all'); setVisible(pageSize); }}>
            All categories
          </FilterChip>
          {categoriesForFamily.map((c) => (
            <FilterChip key={c.slug} active={category === c.slug} onClick={() => { setCategory(c.slug); setVisible(pageSize); }}>
              {c.label}
            </FilterChip>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup label="Application">
        <select
          value={application}
          onChange={(e) => { setApplication(e.target.value); setVisible(pageSize); }}
          className="h-11 w-full rounded-md border border-line bg-white px-3 text-sm"
        >
          <option value="all">All applications</option>
          {APPLICATIONS.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </FilterGroup>

      <button type="button" onClick={reset} className="text-sm font-medium text-brand-700 underline underline-offset-4">
        Reset filters
      </button>
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-28 rounded-card border border-line bg-white p-5 shadow-card">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">Filter</h2>
          {Filters}
        </div>
      </aside>

      <div>
        {/* Mobile filter trigger + result count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted">
            Showing <span className="font-semibold text-ink">{shown.length}</span> of {filtered.length} products
          </p>
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-medium lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" aria-hidden /> Filters
          </button>
        </div>

        <ProductGrid products={shown} emptyAction={<Button onClick={reset}>Reset filters</Button>} />

        {visible < filtered.length && (
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" onClick={() => setVisible((v) => v + pageSize)}>
              Load More
            </Button>
          </div>
        )}
      </div>

      {/* Mobile filter drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Filters">
          <div className="absolute inset-0 bg-brand-900/50" onClick={() => setDrawerOpen(false)} />
          <div className="absolute inset-y-0 right-0 flex w-[min(88vw,340px)] flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 className="text-base font-semibold">Filters</h2>
              <button type="button" onClick={() => setDrawerOpen(false)} aria-label="Close filters" className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-brand-50">
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5">{Filters}</div>
            <div className="border-t border-line p-4">
              <Button className="w-full" onClick={() => setDrawerOpen(false)}>
                Show {filtered.length} results
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2.5 text-sm font-semibold text-ink">{label}</p>
      {children}
    </div>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'rounded-full border px-3 py-1.5 text-sm transition-colors',
        active ? 'border-brand-700 bg-brand-700 text-white' : 'border-line text-muted hover:border-brand-600 hover:text-brand-700',
      )}
    >
      {children}
    </button>
  );
}
