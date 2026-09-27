'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { mainNav, type NavItem } from '@/data/navigation';
import { cn } from '@/lib/utils';

/** Desktop primary navigation with hover/focus mega-menus and keyboard support. */
export function DesktopNav() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(i);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenIndex(null), 120);
  };

  const isActive = (item: NavItem) => {
    const base = item.href.split('?')[0];
    if (base === '/') return pathname === '/';
    return pathname === base || pathname.startsWith(base + '/');
  };

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {mainNav.map((item, i) => {
          const hasMenu = Boolean(item.children || item.columns);
          const active = isActive(item);
          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => hasMenu && open(i)}
              onMouseLeave={scheduleClose}
              onFocus={() => hasMenu && open(i)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) scheduleClose();
              }}
            >
              {hasMenu ? (
                <button
                  type="button"
                  aria-expanded={openIndex === i}
                  aria-haspopup="true"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setOpenIndex(null);
                  }}
                  className={cn(
                    'inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    active ? 'text-brand-700' : 'text-ink hover:text-brand-700',
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn('h-3.5 w-3.5 transition-transform', openIndex === i && 'rotate-180')}
                    aria-hidden
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    active ? 'text-brand-700' : 'text-ink hover:text-brand-700',
                  )}
                >
                  {item.label}
                </Link>
              )}
              {active && <span className="absolute inset-x-3 -bottom-px h-0.5 bg-accent" aria-hidden />}

              {hasMenu && openIndex === i && (
                <MegaPanel item={item} onNavigate={() => setOpenIndex(null)} />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function MegaPanel({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const wide = Boolean(item.columns);
  return (
    <div
      className={cn(
        'absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3',
        wide ? 'w-[640px]' : 'w-72',
      )}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onNavigate();
      }}
    >
      <div className="overflow-hidden rounded-card border border-line bg-white p-2 shadow-card">
        {wide ? (
          <div className="grid grid-cols-2 gap-2">
            {item.columns!.map((col) => (
              <div key={col.heading} className="p-2">
                <p className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {col.heading}
                </p>
                <ul>
                  {col.items.map((child) => (
                    <MenuLink key={child.href} {...child} onNavigate={onNavigate} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul>
            {item.children!.map((child) => (
              <MenuLink key={child.href} {...child} onNavigate={onNavigate} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function MenuLink({
  label,
  href,
  description,
  onNavigate,
}: {
  label: string;
  href: string;
  description?: string;
  onNavigate: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onNavigate}
        className="block rounded-md px-3 py-2.5 transition-colors hover:bg-brand-50"
      >
        <span className="block text-sm font-medium text-ink">{label}</span>
        {description && <span className="mt-0.5 block text-xs text-muted">{description}</span>}
      </Link>
    </li>
  );
}
