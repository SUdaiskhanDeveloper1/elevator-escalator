import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site.config';

export const metadata: Metadata = buildMetadata({
  title: 'Terms & Conditions',
  description: `Terms and conditions for using the ${siteConfig.name} website.`,
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Terms & Conditions', href: '/terms' },
        ]}
      />
      <section className="section">
        <Container className="max-w-3xl">
          <div className="prose-body space-y-6 text-base leading-relaxed">
            <p className="rounded-md bg-surface p-4 text-sm italic">
              This is a sample set of terms provided as a starting point. Have it reviewed by qualified legal
              counsel and adapted to the client&apos;s jurisdiction before launch.
            </p>
            <div>
              <h2 className="text-fluid-h3">1. Use of this website</h2>
              <p className="mt-2">
                The content on this website is provided for general information about {siteConfig.name}&apos;s products
                and services. Product specifications are indicative and may change; final specifications are
                confirmed in writing as part of a formal quotation.
              </p>
            </div>
            <div>
              <h2 className="text-fluid-h3">2. Intellectual property</h2>
              <p className="mt-2">
                All original text, graphics and design on this website are the property of {siteConfig.legalName}
                and may not be reproduced without permission.
              </p>
            </div>
            <div>
              <h2 className="text-fluid-h3">3. No warranty</h2>
              <p className="mt-2">
                While we aim to keep information accurate and current, the website is provided on an “as is” basis
                without warranties of any kind. Nothing on this site constitutes a binding offer.
              </p>
            </div>
            <div>
              <h2 className="text-fluid-h3">4. Governing law</h2>
              <p className="mt-2">
                These terms are governed by the laws of the jurisdiction in which {siteConfig.legalName} is
                established, unless otherwise agreed in writing.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
