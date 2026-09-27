'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

/** Back-to-top control that appears after scrolling down. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={cn(
        'fixed bottom-[140px] right-4 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-brand-800 shadow-card transition-all hover:bg-brand-50 sm:bottom-24',
        visible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden />
    </button>
  );
}
