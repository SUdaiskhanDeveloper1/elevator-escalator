import { MessageCircle } from 'lucide-react';
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/data/site.config';

/**
 * Floating WhatsApp button. Sits above the mobile contact bar so it never
 * overlaps it (extra bottom offset on small screens).
 */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-[76px] right-4 z-30 inline-flex h-13 items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-card transition-transform hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:bottom-6"
    >
      <MessageCircle className="h-5 w-5" aria-hidden />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
