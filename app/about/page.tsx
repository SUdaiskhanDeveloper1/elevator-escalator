import type { Metadata } from 'next';
import Image from 'next/image';
import { Target, Eye, CheckCircle2 } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/common/FeatureCard';
import { Statistics } from '@/components/common/Statistics';
import { CTASection } from '@/components/common/CTASection';
import { FaqAccordion } from '@/components/common/FaqAccordion';
import { siteConfig } from '@/data/site.config';
import { valueProps, processSteps, timeline, coreValues, faqs } from '@/data/company';

export const metadata: Metadata = buildMetadata({
  title: 'About Us',
  description:
    'Learn about Ascendix — our engineering capability, quality assurance, international reach and complete sales & service system for elevators and escalators.',
  path: '/about',
  keywords: ['about elevator manufacturer', 'elevator company', 'vertical transportation company'],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ascendix"
        title="Engineering vertical mobility, built to last"
        description="Two decades of designing, manufacturing and servicing elevators, escalators and moving walkways for buildings of every scale."
        image="/images/about/factory.webp"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'About Us', href: '/about' },
        ]}
      />

      {/* Profile */}
      <section id="profile" className="section">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-line shadow-card">
            <Image src="/images/about/factory.webp" alt="Ascendix manufacturing" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Company Profile" title="Who we are" />
            <div className="prose-body mt-4 space-y-4">
              <p>
                {siteConfig.name} is a manufacturer of elevators, escalators and moving walkways serving
                {' '}{siteConfig.primaryMarket} and international markets. Since {siteConfig.foundedYear}, we have
                delivered dependable vertical-transport systems for residential, commercial, healthcare,
                industrial and transport buildings.
              </p>
              <p>
                Our strength is a complete sales and service system: experienced engineers, quality-controlled
                manufacturing, installation support and a responsive after-sales network — so our customers get
                equipment that performs and support they can rely on.
              </p>
              <p className="text-sm italic text-muted">
                Note: this profile uses original sample content created for this build. Replace with the client&apos;s
                verified company information before launch.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section bg-surface">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-card border border-line bg-white p-8 shadow-card">
              <Target className="h-8 w-8 text-accent-700" aria-hidden />
              <h2 className="mt-4 text-fluid-h3">Our Mission</h2>
              <p className="prose-body mt-2">
                To move people safely and efficiently by delivering reliable, standards-compliant
                vertical-transport systems backed by responsive, lifelong service.
              </p>
            </div>
            <div className="rounded-card border border-line bg-white p-8 shadow-card">
              <Eye className="h-8 w-8 text-accent-700" aria-hidden />
              <h2 className="mt-4 text-fluid-h3">Our Vision</h2>
              <p className="prose-body mt-2">
                To be the vertical-transport partner of choice across our markets — recognised for engineering
                integrity, safety and dependable customer partnership.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <SectionHeading eyebrow="Core Values" title="What guides our work" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((v) => (
                <div key={v.title} className="rounded-card border border-line bg-white p-6 shadow-card">
                  <CheckCircle2 className="h-6 w-6 text-accent-700" aria-hidden />
                  <h3 className="mt-3 font-semibold">{v.title}</h3>
                  <p className="prose-body mt-1 text-sm">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section">
        <Container>
          <SectionHeading eyebrow="Our Journey" title="Milestones" />
          <ol className="mt-10 space-y-8 border-l-2 border-line pl-6">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-white bg-accent" aria-hidden />
                <p className="text-sm font-bold text-brand-700">{t.year}</p>
                <h3 className="mt-0.5 text-lg font-semibold">{t.title}</h3>
                <p className="prose-body mt-1 text-sm">{t.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Statistics />

      {/* Why choose us */}
      <section id="why-us" className="section">
        <Container>
          <SectionHeading eyebrow="Why Choose Us" title="Capability across the project lifecycle" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valueProps.map((v) => (
              <FeatureCard key={v.title} icon={v.icon} title={v.title} description={v.description} />
            ))}
          </div>
        </Container>
      </section>

      {/* Sales & service process */}
      <section id="process" className="section bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Sales & Service System"
            title="How we work with you"
            description="A structured, transparent process from first consultation through commissioning and long-term after-sales support."
          />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s) => (
              <li key={s.step} className="rounded-card border border-line bg-white p-5 shadow-card">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                  {s.step}
                </span>
                <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
                <p className="prose-body mt-1 text-sm">{s.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" align="center" className="mx-auto" />
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
