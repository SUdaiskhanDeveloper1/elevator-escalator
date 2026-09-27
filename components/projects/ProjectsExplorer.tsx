'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import type { Project } from '@/lib/types';
import { ProjectCard } from './ProjectCard';
import { EmptyState } from '@/components/ui/States';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface Props {
  projects: Project[];
  countries: string[];
  buildingTypes: string[];
  years: number[];
  initialBuilding?: string;
}

export function ProjectsExplorer({ projects, countries, buildingTypes, years, initialBuilding = 'all' }: Props) {
  const [country, setCountry] = useState('all');
  const [building, setBuilding] = useState(initialBuilding);
  const [year, setYear] = useState('all');
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(6);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (country !== 'all' && p.country !== country) return false;
      if (building !== 'all' && p.buildingType !== building) return false;
      if (year !== 'all' && String(p.year) !== year) return false;
      if (q && !(`${p.name} ${p.city} ${p.country} ${p.productType}`.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [projects, country, building, year, query]);

  const reset = () => {
    setCountry('all');
    setBuilding('all');
    setYear('all');
    setQuery('');
    setVisible(6);
  };

  return (
    <div>
      {/* Controls */}
      <div className="rounded-card border border-line bg-white p-4 shadow-card sm:p-5">
        <div className="grid gap-3 md:grid-cols-4">
          <label className="relative md:col-span-1">
            <span className="sr-only">Search projects</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setVisible(6); }}
              placeholder="Search projects…"
              className="h-11 w-full rounded-md border border-line pl-9 pr-3 text-sm outline-none focus:border-brand-600"
            />
          </label>
          <Select label="Country" value={country} onChange={(v) => { setCountry(v); setVisible(6); }} options={countries} />
          <Select
            label="Building type"
            value={building}
            onChange={(v) => { setBuilding(v); setVisible(6); }}
            options={buildingTypes}
            capitalize
          />
          <Select label="Year" value={year} onChange={(v) => { setYear(v); setVisible(6); }} options={years.map(String)} />
        </div>
      </div>

      <div className="mb-6 mt-6 flex items-center justify-between">
        <p className="text-sm text-muted">
          <span className="font-semibold text-ink">{filtered.length}</span> project{filtered.length !== 1 ? 's' : ''} found
        </p>
        <button type="button" onClick={reset} className="text-sm font-medium text-brand-700 underline underline-offset-4">
          Reset
        </button>
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No projects match your filters" action={<Button onClick={reset}>Reset filters</Button>} />
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, visible).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          {visible < filtered.length && (
            <div className="mt-10 text-center">
              <Button variant="outline" size="lg" onClick={() => setVisible((v) => v + 6)}>
                Load More
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
  capitalize,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  capitalize?: boolean;
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn('h-11 w-full rounded-md border border-line bg-white px-3 text-sm outline-none focus:border-brand-600', capitalize && 'capitalize')}
      >
        <option value="all">{label}: All</option>
        {options.map((o) => (
          <option key={o} value={o} className={cn(capitalize && 'capitalize')}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
