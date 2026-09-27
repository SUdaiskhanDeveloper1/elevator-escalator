import Link from 'next/link';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { footerNav, legalNav } from '@/data/navigation';
import {
  siteConfig,
  telLink,
  mailtoLink,
  whatsappLink,
  DEFAULT_WHATSAPP_MESSAGE,
} from '@/data/site.config';
import { Logo } from './Logo';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  const a = siteConfig.contact.address;
  const year = 2025; // static to avoid hydration drift; update annually or wire to build date

  return (
    <footer className="bg-brand-900 text-white/75">
      <Container className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4 lg:grid-cols-12 lg:gap-8 lg:py-16">
        {/* Brand + description */}
        <div className="col-span-2 lg:col-span-4">
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{siteConfig.shortDescription}</p>
          <SocialLinks className="mt-5 text-white/60" iconClassName="h-5 w-5" />
        </div>

        {/* Link groups */}
        {Object.values(footerNav).map((group) => (
          <nav key={group.heading} aria-label={group.heading} className="lg:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">{group.heading}</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Contact */}
        <div className="col-span-2 lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              <span>
                {a.line1}, {a.line2}
                <br />
                {a.city}, {a.country}
              </span>
            </li>
            <li>
              <a href={telLink()} className="flex items-center gap-2 transition-colors hover:text-accent">
                <Phone className="h-4 w-4 text-accent" aria-hidden />
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={mailtoLink(siteConfig.contact.salesEmail)} className="flex items-center gap-2 transition-colors hover:text-accent">
                <Mail className="h-4 w-4 text-accent" aria-hidden />
                {siteConfig.contact.salesEmail}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <MessageCircle className="h-4 w-4 text-accent" aria-hidden />
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <ul className="flex items-center gap-5">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
