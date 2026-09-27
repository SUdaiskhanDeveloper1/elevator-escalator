import { Phone, Mail, MessageCircle } from 'lucide-react';
import { siteConfig, telLink, mailtoLink, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/data/site.config';
import { Container } from '@/components/ui/Container';
import { LanguageSelector } from './LanguageSelector';
import { SocialLinks } from './SocialLinks';

/** Top utility bar — contact shortcuts, language, socials. Hidden on mobile. */
export function TopContactBar() {
  return (
    <div className="hidden bg-brand-900 text-white/85 lg:block">
      <Container className="flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <a href={telLink()} className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {siteConfig.contact.phoneDisplay}
          </a>
          <a href={mailtoLink(siteConfig.contact.email)} className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
            <Mail className="h-3.5 w-3.5" aria-hidden />
            {siteConfig.contact.email}
          </a>
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden />
            WhatsApp
          </a>
        </div>
        <div className="flex items-center gap-4">
          <SocialLinks className="text-white/70" />
          <span className="h-4 w-px bg-white/20" aria-hidden />
          <LanguageSelector />
        </div>
      </Container>
    </div>
  );
}
