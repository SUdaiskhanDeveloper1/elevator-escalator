'use client';

import { useEffect, useState } from 'react';
import { X, MessageSquareText } from 'lucide-react';
import { QuoteForm } from '@/components/common/QuoteForm';

/**
 * "Request Information" modal that pre-fills the selected product into the
 * inquiry form. Trigger button + dialog in one client component.
 */
export function ProductInquiryModal({ productName }: { productName: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-brand-700 px-5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
      >
        <MessageSquareText className="h-4 w-4" aria-hidden />
        Request Information
      </button>

      {open && (
        <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label={`Request information about ${productName}`}>
          <div className="absolute inset-0 bg-brand-900/50" onClick={() => setOpen(false)} />
          <div className="absolute inset-x-0 top-0 mx-auto mt-[6vh] flex max-h-[88vh] w-[min(94vw,620px)] flex-col overflow-hidden rounded-card border border-line bg-white shadow-card">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 className="text-lg font-semibold">Request Information</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted hover:bg-brand-50"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <div className="overflow-y-auto p-5">
              <QuoteForm selectedProduct={productName} sourcePage={`product-modal:${productName}`} compact />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
