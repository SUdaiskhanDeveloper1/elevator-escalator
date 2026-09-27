'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown, Search, Phone, MessageCircle } from 'lucide-react';
import { mainNav } from '@/data/navigation';
import { siteConfig, telLink, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/data/site.config';
import { Button } from '@/components/ui/Button';
import { Logo } from './Logo';
import { LanguageSelector } from './LanguageSelector';
import { cn } from '@/lib/utils';

interface Props {
  open: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export function MobileNavigation({ open, onClose, onOpenSearch }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll while open + move focus into the panel.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      closeBtnRef.current?.focus();
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div className={cn('lg:hidden', open ? 'pointer-events-auto' : 'pointer-events-none')} aria-hidden={!open}>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-brand-900/50 transition-opacity duration-200',
          open ? 'opacity-100' : 'opacity-0',
        )}
        onClick={onClose}
      />
      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex w-[min(88vw,380px)] flex-col bg-white shadow-xl transition-transform duration-200',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Logo />
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-brand-800 hover:bg-brand-50"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-0.5">
            {mainNav.map((item) => {
              const children = item.columns ? item.columns.flatMap((c) => c.items) : item.children;
              const hasChildren = Boolean(children && children.length);
              const isOpen = expanded === item.label;
              return (
                <li key={item.label}>
                  {hasChildren ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium text-ink hover:bg-brand-50"
                      >
                        {item.label}
                        <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} aria-hidden />
                      </button>
                      {isOpen && (
                        <ul className="mb-1 ml-3 border-l border-line pl-3">
                          {children!.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className="block rounded-md px-3 py-2.5 text-sm text-muted hover:bg-brand-50 hover:text-brand-700"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-brand-50"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="mt-3 flex w-full items-center gap-2 rounded-md border border-line px-3 py-3 text-sm font-medium text-muted hover:bg-brand-50"
          >
            <Search className="h-4 w-4" aria-hidden />
            Search products & projects
          </button>
        </nav>

        {/* Persistent actions */}
        <div className="border-t border-line p-4">
          <div className="grid grid-cols-2 gap-2">
            <Button href={telLink()} variant="outline" size="md">
              <Phone className="h-4 w-4" aria-hidden /> Call
            </Button>
            <Button
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              variant="outline"
              size="md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
            </Button>
          </div>
          <Button href="/contact#quote" variant="accent" size="lg" className="mt-2 w-full" onClick={onClose}>
            Get a Quote
          </Button>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-muted">{siteConfig.contact.phoneDisplay}</span>
            <LanguageSelector variant="light" />
          </div>
        </div>
      </div>
    </div>
  );
}
