import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const cards = [
  { title: 'Elevators', href: '/products?family=elevator', image: '/images/categories/elevators.webp', text: 'Passenger, hospital, cargo and specialty elevators for every building.' },
  { title: 'Escalators', href: '/escalators', image: '/images/categories/escalators.webp', text: 'Commercial and heavy-duty escalators built for continuous public use.' },
  { title: 'Moving Walkways', href: '/moving-walkways', image: '/images/categories/moving-walkways.webp', text: 'Horizontal and inclined travelators for airports, malls and transit hubs.' },
  { title: 'Home & Villa Elevators', href: '/products/home-elevators', image: '/images/categories/home-elevators.webp', text: 'Compact, quiet residential lifts with refined interiors.' },
];

export function ProductCategories() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="What We Manufacture"
          title="Vertical transport for every environment"
          description="From high-rise passenger elevators to airport travelators, our range covers the full spectrum of vertical and horizontal mobility."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-card border border-line shadow-card transition-shadow hover:shadow-card-hover"
            >
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/40 to-transparent" aria-hidden />
              <div className="relative p-5 text-white">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-white/80">{c.text}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  View Products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
