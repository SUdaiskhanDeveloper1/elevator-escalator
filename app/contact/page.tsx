import type { Metadata } from 'next';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { QuoteForm } from '@/components/common/QuoteForm';
import { FaqAccordion } from '@/components/common/FaqAccordion';
import { SocialLinks } from '@/components/layout/SocialLinks';
import {
  siteConfig,
  telLink,
  mailtoLink,
  whatsappLink,
  DEFAULT_WHATSAPP_MESSAGE,
} from '@/data/site.config';
import { faqs } from '@/data/company';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Contact Ascendix for elevator and escalator enquiries. Call, email or message us on WhatsApp, or send your project specifications for a tailored quote.',
  path: '/contact',
  keywords: ['contact elevator company', 'elevator quote', 'escalator enquiry'],
});

export default function ContactPage() {
  const a = siteConfig.contact.address;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.contact.mapEmbedQuery)}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Reach our team by phone, email or WhatsApp — or send your specifications and we'll prepare a tailored quotation."
        image="/images/hero/hero-2.webp"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/contact' },
        ]}
      />

      <section className="section">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Contact details */}
          <div>
            <SectionHeading eyebrow="Get in Touch" title="Contact details" />
            <p className="prose-body mt-3">{siteConfig.legalName}</p>

            <ul className="mt-6 space-y-5">
              <ContactRow icon={MapPin} label="Address">
                {a.line1}, {a.line2}
                <br />
                {a.city}, {a.region} {a.postalCode}
                <br />
                {a.country}
              </ContactRow>
              <ContactRow icon={Phone} label="Phone">
                <a href={telLink()} className="hover:text-brand-700">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </ContactRow>
              <ContactRow icon={MessageCircle} label="WhatsApp">
                <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="hover:text-brand-700">
                  Chat with our team
                </a>
              </ContactRow>
              <ContactRow icon={Mail} label="Email">
                <a href={mailtoLink()} className="hover:text-brand-700">
                  {siteConfig.contact.salesEmail}
                </a>
              </ContactRow>
              <ContactRow icon={Clock} label="Office hours">
                {siteConfig.contact.officeHours}
              </ContactRow>
            </ul>

            <div className="mt-8">
              <p className="text-sm font-semibold text-ink">Follow us</p>
              <SocialLinks className="mt-3 text-brand-700" iconClassName="h-5 w-5" />
            </div>
          </div>

          {/* Form */}
          <div id="quote" className="scroll-mt-28 rounded-card border border-line bg-white p-6 shadow-card sm:p-8">
            <SectionHeading eyebrow="Request a Quote" title="Send us your requirements" as="h2" />
            <div className="mt-6">
              <QuoteForm sourcePage="contact" />
            </div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section aria-label="Our location">
        <div className="relative h-[360px] w-full border-y border-line bg-brand-50 sm:h-[420px]">
          <iframe
            title={`Map showing ${siteConfig.name} location`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
        </div>
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
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-700">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
        <p className="mt-0.5 text-sm text-ink">{children}</p>
      </div>
    </li>
  );
}
