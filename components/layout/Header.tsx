'use client';

import { useEffect, useState } from 'react';
import { Search, Menu } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { TopContactBar } from './TopContactBar';
import { Logo } from './Logo';
import { DesktopNav } from './DesktopNav';
import { MobileNavigation } from './MobileNavigation';
import { SearchDialog } from './SearchDialog';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <TopContactBar />
      <div
        className={cn(
          'border-b bg-white/95 backdrop-blur transition-shadow',
          scrolled ? 'border-line shadow-header' : 'border-transparent',
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
          <Logo />

          <DesktopNav />

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-brand-800 transition-colors hover:bg-brand-50"
            >
              <Search className="h-5 w-5" aria-hidden />
            </button>
            <Button href="/contact#quote" variant="accent" size="md" className="hidden sm:inline-flex">
              Get a Quote
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-brand-800 transition-colors hover:bg-brand-50 lg:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden />
            </button>
          </div>
        </Container>
      </div>

      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} onOpenSearch={() => setSearchOpen(true)} />
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
