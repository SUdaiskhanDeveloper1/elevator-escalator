import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';

/** Project case-study card. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-card border border-line bg-white shadow-card transition-shadow hover:shadow-card-hover">
      <Link href={`/projects/${project.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-brand-50">
        <Image
          src={project.featuredImage}
          alt={`${project.name} — ${project.productType} in ${project.city}, ${project.country}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3">
          <Badge variant="accent" className="capitalize shadow-sm">{project.buildingType}</Badge>
        </span>
      </Link>
      <div className="p-5">
        <p className="flex items-center gap-1.5 text-xs font-medium text-muted">
          <MapPin className="h-3.5 w-3.5 text-accent-700" aria-hidden />
          {project.city}, {project.country} · {project.year}
        </p>
        <h3 className="mt-1.5 text-lg font-semibold">
          <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-brand-700">
            {project.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-brand-700">{project.productType}</p>
        <p className="prose-body mt-2 line-clamp-2 text-sm">{project.summary}</p>
        <Link href={`/projects/${project.slug}`} className="link-underline mt-4 text-sm">
          View Case Study <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
