'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Faq } from '@/data/company';
import { cn } from '@/lib/utils';

/** Accessible FAQ accordion. Emits FAQPage JSON-LD for the provided items. */
export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <div className="divide-y divide-line rounded-card border border-line bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium text-ink">{f.question}</span>
                <ChevronDown className={cn('h-5 w-5 shrink-0 text-brand-700 transition-transform', isOpen && 'rotate-180')} aria-hidden />
              </button>
            </h3>
            <div className={cn('grid transition-all duration-200', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
              <div className="overflow-hidden">
                <p className="prose-body px-5 pb-5 text-sm">{f.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
