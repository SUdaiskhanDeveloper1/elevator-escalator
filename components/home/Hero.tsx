'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, FileText, Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site.config';
import { cn } from '@/lib/utils';

interface Slide {
  image: string;
  eyebrow: string;
  title: string;
  text: string;
}

const slides: Slide[] = [
  {
    image: '/images/hero/hero-1.webp',
    eyebrow: 'Elevators · Escalators · Moving Walkways',
    title: 'Engineered Vertical Mobility for Modern Buildings',
    text: 'Reliable elevator and escalator systems designed for safety, efficiency, comfort and long-term performance.',
  },
  {
    image: '/images/hero/hero-2.webp',
    eyebrow: 'From Consultation to Commissioning',
    title: 'A Complete Sales & Service System',
    text: 'End-to-end support — engineering, manufacturing, installation guidance and responsive after-sales care.',
  },
  {
    image: '/images/hero/hero-3.webp',
    eyebrow: `Serving projects across ${siteConfig.serviceAreaCountries}+ countries`,
    title: 'Trusted by Developers, Architects & Contractors',
    text: 'Vertical-transport solutions for commercial, residential, healthcare, industrial and transport projects.',
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!playing || prefersReduced) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing]);

  const go = (i: number) => setIndex((i + slides.length) % slides.length);

  return (
    <section className="relative isolate overflow-hidden bg-brand-900" aria-roledescription="carousel" aria-label="Highlights">
      {/* Slides (images stacked; text swaps). Fixed min-height prevents layout shift. */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <Image
            key={s.image}
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={cn('object-cover transition-opacity duration-700', i === index ? 'opacity-45' : 'opacity-0')}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/85 to-brand-900/30" aria-hidden />
      </div>

      <Container className="relative flex min-h-[560px] flex-col justify-center py-20 lg:min-h-[640px]">
        <div className="max-w-2xl" aria-live="polite">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{slides[index].eyebrow}</p>
          <h1 className="text-fluid-h1 text-white">{slides[index].title}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{slides[index].text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/products" variant="accent" size="lg">
              Explore Products <ArrowRight className="h-5 w-5" aria-hidden />
            </Button>
            <Button href="/contact#quote" variant="light" size="lg">
              <FileText className="h-5 w-5" aria-hidden /> Request a Quote
            </Button>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}`}
                onClick={() => go(i)}
                className={cn('h-1.5 rounded-full transition-all', i === index ? 'w-8 bg-accent' : 'w-4 bg-white/40 hover:bg-white/70')}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
          >
            {playing ? <Pause className="h-4 w-4" aria-hidden /> : <Play className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </Container>
    </section>
  );
}
