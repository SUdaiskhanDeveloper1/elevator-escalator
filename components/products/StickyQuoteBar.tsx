'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { whatsappLink, siteConfig } from '@/data/site.config';
import { cn } from '@/lib/utils';

/**
 * Desktop sticky "Request a Quote" bar that appears once the user scrolls past
 * the hero. Sits above the mobile contact bar space (hidden on mobile where the
 * MobileContactBar already provides the same actions).
 */
export function StickyQuoteBar({ productName }: { productName: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-30 hidden border-t border-line bg-white/95 backdrop-blur transition-transform lg:block',
        visible ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-8 py-3">
        <p className="text-sm">
          <span className="font-semibold text-ink">{productName}</span>
          <span className="text-muted"> — request a tailored quotation from our engineers.</span>
        </p>
        <div className="flex items-center gap-3">
          <a
            href={whatsappLink(`Hello ${siteConfig.name}, I'm interested in the ${productName}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-accent-700"
          >
            <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
          </a>
          <Link
            href="/contact#quote"
            className="inline-flex h-10 items-center rounded-md bg-accent px-5 text-sm font-semibold text-brand-900 hover:bg-accent-600"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
