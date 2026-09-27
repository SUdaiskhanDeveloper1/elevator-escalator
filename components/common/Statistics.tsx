'use client';

import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { stats } from '@/data/company';

/** Counter that animates once on viewport entry; respects reduced-motion. */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !done.current) {
            done.current = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(eased * value));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}

export function Statistics() {
  return (
    <section className="border-y border-line bg-surface">
      <Container className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-3 lg:grid-cols-5 lg:py-14">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-4xl font-bold tracking-tight text-brand-700 sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm font-medium text-muted">{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
