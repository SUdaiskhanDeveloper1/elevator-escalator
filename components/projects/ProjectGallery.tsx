'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

/** Image gallery with a large active image and selectable thumbnails. */
export function ProjectGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const list = images.length ? images : ['/images/hero/hero-1.webp'];

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-line bg-brand-50">
        <Image
          src={list[active]}
          alt={`${alt} — image ${active + 1} of ${list.length}`}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover"
          priority
        />
      </div>
      {list.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-6">
          {list.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === active}
              className={cn(
                'relative aspect-square overflow-hidden rounded-md border-2 bg-brand-50 transition-colors',
                i === active ? 'border-accent' : 'border-transparent hover:border-line',
              )}
            >
              <Image src={img} alt="" fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
