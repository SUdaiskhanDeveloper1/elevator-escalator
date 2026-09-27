'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';

/** Product image gallery with thumbnails and a click-to-zoom lightbox. */
export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const list = images.length ? images : ['/images/products/passenger-elevator.webp'];

  return (
    <div>
      <button
        type="button"
        onClick={() => setZoom(true)}
        className="group relative block aspect-[4/3] w-full overflow-hidden rounded-card border border-line bg-brand-50"
        aria-label="Zoom image"
      >
        <Image
          src={list[active]}
          alt={`${alt} — image ${active + 1} of ${list.length}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover"
        />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-brand-900/70 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
          <ZoomIn className="h-3.5 w-3.5" aria-hidden /> Zoom
        </span>
      </button>

      {list.length > 1 && (
        <div className="mt-3 grid grid-cols-3 gap-3">
          {list.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === active}
              className={cn(
                'relative aspect-[4/3] overflow-hidden rounded-md border-2 bg-brand-50 transition-colors',
                i === active ? 'border-accent' : 'border-transparent hover:border-line',
              )}
            >
              <Image src={img} alt="" fill sizes="200px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {zoom && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-900/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} enlarged`}
          onClick={() => setZoom(false)}
        >
          <div className="relative h-[80vh] w-[90vw] max-w-4xl">
            <Image src={list[active]} alt={`${alt} enlarged`} fill sizes="90vw" className="object-contain" />
          </div>
          <button
            type="button"
            onClick={() => setZoom(false)}
            className="absolute right-5 top-5 rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
