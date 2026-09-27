import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { siteConfig, mailtoLink } from '@/data/site.config';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: `How ${siteConfig.name} collects, uses and protects personal data submitted through this website.`,
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Privacy Policy', href: '/privacy' },
        ]}
      />
      <section className="section">
        <Container className="max-w-3xl">
          <div className="prose-body space-y-6 text-base leading-relaxed">
            <p className="rounded-md bg-surface p-4 text-sm italic">
              This is a sample privacy policy provided as a starting point. Have it reviewed by qualified legal
              counsel and adapted to the client&apos;s jurisdiction and data-processing practices before launch.
            </p>

            <div>
              <h2 className="text-fluid-h3">1. Information we collect</h2>
              <p className="mt-2">
                When you submit an inquiry or quote request, we collect the details you provide — such as your name,
                company, email, phone number, country and message. We may also collect basic, anonymised analytics
                about how the website is used.
              </p>
            </div>
            <div>
              <h2 className="text-fluid-h3">2. How we use your information</h2>
              <p className="mt-2">
                We use your information solely to respond to your inquiry, prepare quotations, and provide the
                products and services you request. We do not sell your personal data.
              </p>
            </div>
            <div>
              <h2 className="text-fluid-h3">3. Data retention</h2>
              <p className="mt-2">
                We retain inquiry information only as long as necessary to serve your request and to meet legal or
                business record-keeping obligations.
              </p>
            </div>
            <div>
              <h2 className="text-fluid-h3">4. Your rights</h2>
              <p className="mt-2">
                You may request access to, correction of, or deletion of the personal data we hold about you. To
                exercise these rights, contact us at{' '}
                <a href={mailtoLink(siteConfig.contact.email)} className="font-medium text-brand-700 underline underline-offset-2">
                  {siteConfig.contact.email}
                </a>.
              </p>
            </div>
            <div>
              <h2 className="text-fluid-h3">5. Contact</h2>
              <p className="mt-2">
                Questions about this policy can be sent to {siteConfig.legalName},{' '}
                {siteConfig.contact.address.city}, {siteConfig.contact.address.country}.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
