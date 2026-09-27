import { Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import { siteConfig } from '@/data/site.config';
import { cn } from '@/lib/utils';

const ICONS = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
} as const;

/** Renders social icons for whichever links are configured. */
export function SocialLinks({ className, iconClassName }: { className?: string; iconClassName?: string }) {
  const entries = Object.entries(siteConfig.social).filter(([, url]) => Boolean(url)) as [
    keyof typeof ICONS,
    string,
  ][];

  if (entries.length === 0) return null;

  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {entries.map(([key, url]) => {
        const Icon = ICONS[key];
        if (!Icon) return null;
        return (
          <li key={key}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${siteConfig.name} on ${key}`}
              className="inline-flex transition-colors hover:text-accent"
            >
              <Icon className={cn('h-4 w-4', iconClassName)} aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
