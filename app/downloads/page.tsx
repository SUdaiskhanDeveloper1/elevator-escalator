import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/common/CTASection';
import { DownloadsExplorer } from '@/components/common/DownloadsExplorer';
import { certificates, certificateCategories, certificateLanguages } from '@/data/certificates';

export const metadata: Metadata = buildMetadata({
  title: 'Certificates & Downloads',
  description:
    'Download Ascendix product brochures, technical catalogs, company profile, certificates and compliance documents.',
  path: '/downloads',
  keywords: ['elevator brochures', 'escalator catalog', 'certificates', 'company profile download'],
});

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Certificates & Downloads"
        description="Product brochures, technical catalogs, certificates and compliance documents — filter by category and language."
        image="/images/about/factory.webp"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Downloads', href: '/downloads' },
        ]}
      />
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Document Library"
            title="Find the right document"
            description="Sample document entries created to demonstrate the downloads module. Add the client's real files to /public/downloads before launch."
          />
          <div className="mt-10">
            <DownloadsExplorer
              items={certificates}
              categories={certificateCategories()}
              languages={certificateLanguages()}
            />
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
