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
  title: 'Escalators',
  description:
    'Commercial and heavy-duty escalators for malls, offices, transit hubs and airports — energy-efficient and engineered to EN 115 safety standards.',
  path: '/escalators',
  keywords: ['escalator manufacturer', 'commercial escalator', 'heavy-duty escalator', 'transit escalator'],
});

const applications = ['Shopping malls', 'Offices', 'Metro & rail stations', 'Airports', 'Stadiums', 'Public buildings'];
const benefits = [
  { title: 'Energy-saving operation', description: 'Sensor-triggered slow and standby modes cut consumption during quiet periods.' },
  { title: 'Comprehensive safety', description: 'Comb-plate switches, skirt brushes and handrail monitoring protect passengers.' },
  { title: 'Durable step band', description: 'Die-cast aluminium steps and reinforced trusses for long service life.' },
  { title: 'Flexible geometry', description: '30° or 35° inclination, multiple step widths and rises to suit any layout.' },
];
const safety = [
  'Comb-plate safety switches',
  'Skirt brushes and skirt switches',
  'Handrail entry guards and speed monitoring',
  'Emergency stop buttons at both ends',
  'Missing-step and over-speed detection',
  'Auxiliary brake (heavy-duty models)',
];

export default function EscalatorsPage() {
  const escalators = getProductsByFamily('escalator');
  const relatedProjects = projects.filter((p) => p.productFamily === 'escalator').slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Escalators"
        title="Escalators for continuous public movement"
        description="Reliable, energy-efficient escalators for retail, commercial and transport environments — from single-storey malls to high-traffic metro interchanges."
        image="/images/categories/escalators.webp"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Escalators', href: '/escalators' },
        ]}
      />

      <section className="section">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Overview" title="Built for high traffic, engineered for safety" />
            <div className="prose-body mt-4 space-y-4">
              <p>
                Our escalators move large volumes of people smoothly and safely throughout the day. Commercial
                models suit malls and offices, while heavy-duty models are engineered for the extended duty cycles
                of airports, stadiums and public-transport hubs.
              </p>
              <p>
                Every unit is engineered to the EN 115 safety standard and offered with energy-saving operation
                modes, glass or stainless balustrades and optional remote diagnostics for faster maintenance.
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
          <SectionHeading eyebrow="Product Models" title="Escalator range" />
          <div className="mt-10">
            <ProductGrid products={escalators} />
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Safety Systems" title="Protection at every point" />
            <ul className="prose-body mt-6 space-y-2.5">
              {safety.map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-700" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
            <p className="prose-body mt-6">
              Indoor, semi-outdoor and outdoor configurations are available, with weather-resistant options for
              exposed locations.
            </p>
          </div>
          <div className="rounded-card border border-line bg-white p-6 shadow-card sm:p-8">
            <h2 className="text-fluid-h3">Request an escalator quotation</h2>
            <p className="prose-body mt-2 text-sm">
              Tell us about your building and traffic profile and we&apos;ll recommend the right model.
            </p>
            <div className="mt-6">
              <QuoteForm sourcePage="escalators" compact />
            </div>
          </div>
        </Container>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section bg-surface">
          <Container>
            <SectionHeading eyebrow="Related Projects" title="Escalators in the field" />
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
