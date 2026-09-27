import type { Metadata } from 'next';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { CTASection } from '@/components/common/CTASection';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { QuoteForm } from '@/components/common/QuoteForm';
import { getProductsByFamily } from '@/data/products';
import { projects } from '@/data/projects';

export const metadata: Metadata = buildMetadata({
  title: 'Moving Walkways',
  description:
    'Horizontal and inclined moving walkways (travelators) for airports, shopping malls and exhibition centres — engineered to EN 115 safety standards.',
  path: '/moving-walkways',
  keywords: ['moving walkway', 'travelator', 'airport walkway', 'inclined travelator'],
});

const applications = ['Airports', 'Shopping malls', 'Exhibition centres', 'Transport interchanges', 'Large retail'];
const benefits = [
  { title: 'Trolley-friendly', description: 'Inclined pallet type safely carries shopping and baggage trolleys between levels.' },
  { title: 'Long spans', description: 'Modular construction supports long horizontal runs across concourses.' },
  { title: 'Energy-saving modes', description: 'Sensor-triggered operation reduces consumption during quiet periods.' },
  { title: 'Comprehensive safety', description: 'Comb, skirt and handrail safety systems throughout.' },
];
const safety = [
  'Comb-plate safety switches',
  'Skirt brushes and switches',
  'Handrail entry guards',
  'Emergency stop buttons',
  'Trolley-lock system (inclined type)',
  'Over-speed detection',
];

export default function MovingWalkwaysPage() {
  const walkways = getProductsByFamily('moving-walkway');
  const relatedProjects = projects
    .filter((p) => /walkway|escalator/i.test(p.productType))
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Moving Walkways"
        title="Travelators for people, luggage and trolleys"
        description="Horizontal and inclined moving walkways that move people and trolleys smoothly across long distances in airports, malls and exhibition centres."
        image="/images/categories/moving-walkways.webp"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Moving Walkways', href: '/moving-walkways' },
        ]}
      />

      <section className="section">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Overview" title="Smooth horizontal and inclined transport" />
            <div className="prose-body mt-4 space-y-4">
              <p>
                Moving walkways carry people — and their trolleys and luggage — comfortably across long concourses
                or gently between levels. Horizontal travelators suit airports and exhibition halls, while inclined
                pallet-type walkways move shopping trolleys safely in multi-level retail.
              </p>
              <p>
                Engineered to the EN 115 safety standard, our walkways offer glass or stainless balustrades,
                energy-saving operation and pallet widths to match your traffic and layout.
              </p>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold text-ink">Application areas</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {applications.map((a) => (
                  <li key={a}>
                    <Badge variant="outline">{a}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-card border border-line bg-white p-5 shadow-card">
                <CheckCircle2 className="h-6 w-6 text-accent-700" aria-hidden />
                <h3 className="mt-3 font-semibold">{b.title}</h3>
                <p className="prose-body mt-1 text-sm">{b.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-surface">
        <Container>
          <SectionHeading eyebrow="Product Models" title="Moving walkway range" />
          <div className="mt-10">
            <ProductGrid products={walkways} />
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Safety Systems" title="Designed for public use" />
            <ul className="prose-body mt-6 space-y-2.5">
              {safety.map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-700" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
            <p className="prose-body mt-6">
              Indoor and semi-outdoor configurations are available, with pallet widths of 800, 1000 and 1200 mm.
            </p>
          </div>
          <div className="rounded-card border border-line bg-white p-6 shadow-card sm:p-8">
            <h2 className="text-fluid-h3">Request a walkway quotation</h2>
            <p className="prose-body mt-2 text-sm">
              Tell us your span, incline and traffic needs and we&apos;ll recommend a configuration.
            </p>
            <div className="mt-6">
              <QuoteForm sourcePage="moving-walkways" compact />
            </div>
          </div>
        </Container>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section bg-surface">
          <Container>
            <SectionHeading eyebrow="Related Projects" title="Walkways & escalators in the field" />
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
