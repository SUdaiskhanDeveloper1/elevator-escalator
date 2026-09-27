import Link from 'next/link';
import { siteConfig } from '@/data/site.config';
import { cn } from '@/lib/utils';

/**
 * Brand wordmark. Rendered as inline SVG (not next/image) so it scales crisply
 * and inherits colour for light/dark placements. Replace with the client's
 * real logo asset when available (see /public/images/brand).
 */
export function Logo({ variant = 'dark', className }: { variant?: 'dark' | 'light'; className?: string }) {
  const fg = variant === 'light' ? '#ffffff' : 'var(--brand-900)';
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn('inline-flex items-center gap-2.5', className)}
    >
      <svg width="34" height="34" viewBox="0 0 48 48" aria-hidden className="shrink-0">
        <g fill="none" stroke={fg} strokeWidth="3" strokeLinejoin="round">
          <path d="M12 38 L24 12 L36 38" />
          <line x1="18" y1="27" x2="30" y2="27" />
        </g>
        <polygon points="24,6 31,15 17,15" fill="var(--accent)" />
      </svg>
      <span
        className="text-xl font-bold tracking-tight"
        style={{ color: fg }}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}
