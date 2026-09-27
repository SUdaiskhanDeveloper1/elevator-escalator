import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MapPin, Calendar, Building2, Boxes, Layers3, Quote } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/common/CTASection';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects, getProjectBySlug } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return buildMetadata({ title: 'Project', description: 'Project case study.' });
  return buildMetadata({
    title: project.seo.title,
    description: project.seo.description,
    path: `/projects/${project.slug}`,
    image: project.featuredImage,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug && (p.buildingType === project.buildingType || p.country === project.country))
    .slice(0, 3);

  const facts = [
    { icon: MapPin, label: 'Location', value: `${project.city}, ${project.country}` },
    { icon: Calendar, label: 'Completed', value: String(project.year) },
    { icon: Building2, label: 'Building type', value: project.buildingType },
    { icon: Layers3, label: 'Product', value: project.productType },
    { icon: Boxes, label: 'Units installed', value: String(project.units) },
  ];

  return (
    <>
      <PageHero
        eyebrow="Project Case Study"
        title={project.name}
        description={project.summary}
        image={project.featuredImage}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Projects', href: '/projects' },
          { name: project.name, href: `/projects/${project.slug}` },
        ]}
      />

      <section className="section">
        <Container className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-14">
          <div>
            <ProjectGallery images={project.images} alt={project.name} />

            <div className="mt-10 space-y-8">
              <div>
                <SectionHeading eyebrow="Scope" title="Project scope" as="h2" />
                <p className="prose-body mt-3">{project.scope}</p>
              </div>
              <div>
                <SectionHeading eyebrow="The Challenge" title="What the project required" as="h2" />
                <p className="prose-body mt-3">{project.challenge}</p>
              </div>
              <div>
                <SectionHeading eyebrow="The Solution" title="What we delivered" as="h2" />
                <p className="prose-body mt-3">{project.solution}</p>
              </div>

              {project.testimonial && (
                <blockquote className="rounded-card border-l-4 border-accent bg-surface p-6">
                  <Quote className="h-8 w-8 text-accent" aria-hidden />
                  <p className="mt-3 text-lg font-medium text-ink">“{project.testimonial.quote}”</p>
                  <footer className="mt-3 text-sm text-muted">
                    — {project.testimonial.author}, {project.testimonial.role}
                  </footer>
                </blockquote>
              )}
            </div>
          </div>

          {/* Facts sidebar */}
          <aside>
            <div className="sticky top-28 rounded-card border border-line bg-white p-6 shadow-card">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Project details</h2>
              <dl className="mt-4 space-y-4">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-start gap-3">
                    <f.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent-700" aria-hidden />
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-muted">{f.label}</dt>
                      <dd className="text-sm font-medium capitalize text-ink">{f.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="section bg-surface">
          <Container>
            <SectionHeading eyebrow="More Work" title="Related projects" />
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection title="Have a similar project in mind?" />
    </>
  );
}
