'use client';

import { useEffect, useRef, useState } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/data/site.config';
import { cn } from '@/lib/utils';

const STORAGE_KEY = 'ascendix.locale';

/**
 * Language selector. This build ships English content only; the selector
 * demonstrates the multilingual architecture (locale list, remembered
 * preference). Wire to i18n routing (/en, /ar, /fr) when translations exist.
 */
export function LanguageSelector({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(siteConfig.defaultLocale);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved) setCurrent(saved);
  }, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const select = (code: string) => {
    setCurrent(code);
    window.localStorage.setItem(STORAGE_KEY, code);
    setOpen(false);
  };

  const active = siteConfig.locales.find((l) => l.code === current) ?? siteConfig.locales[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          'inline-flex items-center gap-1.5 rounded px-1.5 py-1 text-xs font-medium transition-colors',
          variant === 'dark' ? 'text-white/85 hover:text-white' : 'text-brand-800 hover:text-brand-900',
        )}
      >
        <Globe className="h-3.5 w-3.5" aria-hidden />
        {active.label}
        <ChevronDown className={cn('h-3 w-3 transition-transform', open && 'rotate-180')} aria-hidden />
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 z-50 mt-2 min-w-[150px] rounded-md border border-line bg-white py-1 text-sm shadow-card"
        >
          {siteConfig.locales.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === current}
                onClick={() => select(l.code)}
                className="flex w-full items-center justify-between px-3 py-2 text-left text-ink transition-colors hover:bg-brand-50"
              >
                {l.label}
                {l.code === current && <Check className="h-3.5 w-3.5 text-accent-700" aria-hidden />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
