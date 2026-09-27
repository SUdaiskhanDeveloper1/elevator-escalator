'use client';

import { useState } from 'react';
import { Linkedin, Facebook, Link2, Check } from 'lucide-react';

/** Social sharing controls for articles. */
export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const enc = encodeURIComponent;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  const links = [
    { label: 'Share on LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`, Icon: Linkedin },
    { label: 'Share on Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`, Icon: Facebook },
    { label: 'Share on X', href: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`, Icon: XIcon },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-muted">Share</span>
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-brand-700 transition-colors hover:bg-brand-50"
        >
          <Icon className="h-4 w-4" aria-hidden />
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        aria-label="Copy link"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-brand-700 transition-colors hover:bg-brand-50"
      >
        {copied ? <Check className="h-4 w-4 text-green-600" aria-hidden /> : <Link2 className="h-4 w-4" aria-hidden />}
      </button>
    </div>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}
