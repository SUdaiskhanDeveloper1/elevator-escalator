import Link from 'next/link';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { telLink, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/data/site.config';

/** Bottom action bar on mobile: Call · WhatsApp · Quote. Hidden on lg+. */
export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-3">
        <a href={telLink()} className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-medium text-brand-800">
          <Phone className="h-5 w-5" aria-hidden />
          Call
        </a>
        <a
          href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 border-x border-line py-2.5 text-xs font-medium text-brand-800"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          WhatsApp
        </a>
        <Link href="/contact#quote" className="flex flex-col items-center gap-0.5 bg-accent py-2.5 text-xs font-semibold text-brand-900">
          <FileText className="h-5 w-5" aria-hidden />
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
