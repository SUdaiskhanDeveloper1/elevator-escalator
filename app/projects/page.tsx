import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/common/CTASection';
import { ProjectsExplorer } from '@/components/projects/ProjectsExplorer';
import {
  projects,
  projectCountries,
  projectBuildingTypes,
  projectYears,
} from '@/data/projects';

export const metadata: Metadata = buildMetadata({
  title: 'Projects',
  description:
    'Explore completed elevator, escalator and moving-walkway projects across residential, commercial, healthcare, industrial and transport buildings.',
  path: '/projects',
  keywords: ['elevator projects', 'escalator projects', 'case studies', 'vertical transportation projects'],
});

const VALID_BUILDINGS = projectBuildingTypes();

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ building?: string }>;
}) {
  const { building } = await searchParams;
  const initialBuilding = building && VALID_BUILDINGS.includes(building) ? building : 'all';

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Delivered where reliability matters"
        description="A selection of completed installations across the region — filter by country, application, product type or year."
        image="/images/projects/grand-mall.webp"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Projects', href: '/projects' },
        ]}
      />
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Case Studies"
            title="Our project portfolio"
            description="Sample project references created to demonstrate the projects module. Replace with your organisation's approved case studies before launch."
          />
          <div className="mt-10">
            <ProjectsExplorer
              projects={projects}
              countries={projectCountries()}
              buildingTypes={VALID_BUILDINGS}
              years={projectYears()}
              initialBuilding={initialBuilding}
            />
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
