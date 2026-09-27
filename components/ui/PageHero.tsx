import Image from 'next/image';
import { Breadcrumbs, type Crumb } from './Breadcrumbs';
import { Container } from './Container';

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  breadcrumbs: Crumb[];
}

/** Inner-page banner: architectural image, overlay, title and breadcrumbs. */
export function PageHero({ eyebrow, title, description, image = '/images/hero/hero-2.webp', breadcrumbs }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/85 to-brand-900/40" aria-hidden />
      <Container className="relative py-14 sm:py-16 lg:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-6 max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="text-fluid-h1 text-white">{title}</h1>
          {description && (
            <p className="measure mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
