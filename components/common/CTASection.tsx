import { Phone, FileText, MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { telLink, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/data/site.config';

interface Props {
  title?: string;
  description?: string;
}

/** High-visibility conversion banner used after key sections / page ends. */
export function CTASection({
  title = 'Planning a New Elevator or Escalator Project?',
  description = 'Talk to our engineers about the right vertical-transport solution for your building — from specification to installation and after-sales support.',
}: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.4) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />
      <Container className="relative flex flex-col items-center gap-6 py-16 text-center lg:py-20">
        <h2 className="max-w-3xl text-fluid-h2 text-white">{title}</h2>
        <p className="measure text-base leading-relaxed text-white/80 sm:text-lg">{description}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact#quote" variant="accent" size="lg">
            <FileText className="h-5 w-5" aria-hidden /> Send Specifications
          </Button>
          <Button href={telLink()} variant="light" size="lg">
            <Phone className="h-5 w-5" aria-hidden /> Talk to an Engineer
          </Button>
          <Button
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            variant="outline"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            className="border-white/40 text-white hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5" aria-hidden /> WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
