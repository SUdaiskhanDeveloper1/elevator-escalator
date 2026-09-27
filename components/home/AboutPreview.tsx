import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site.config';

const highlights = [
  'Engineered to EN 81 and EN 115 safety standards',
  'ISO 9001 & ISO 14001 aligned management systems',
  'In-house engineering and dedicated R&D laboratory',
  'Every unit inspected before handover',
];

export function AboutPreview() {
  return (
    <section id="profile" className="section">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-line shadow-card">
          <Image
            src="/images/about/factory.webp"
            alt="Ascendix engineering and manufacturing"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="About Ascendix"
            title="Two decades of vertical-transport engineering"
          />
          <div className="prose-body mt-4 space-y-4">
            <p>
              {siteConfig.name} designs, manufactures and services elevators, escalators and moving
              walkways for buildings of every scale. Since {siteConfig.foundedYear}, we have supported
              developers, architects and contractors with dependable equipment and a complete service system.
            </p>
            <p>
              Our approach pairs proven engineering with responsive local support — from the first
              consultation through installation, commissioning and long-term maintenance — helping our
              customers keep people moving safely and efficiently.
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-700" aria-hidden />
                {h}
              </li>
            ))}
          </ul>
          <Button href="/about" variant="primary" size="lg" className="mt-8">
            Discover Our Company
          </Button>
        </div>
      </Container>
    </section>
  );
}
