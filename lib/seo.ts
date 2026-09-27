import type { Metadata } from 'next';
import { siteConfig } from '@/data/site.config';

interface BuildMetadataArgs {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: 'website' | 'article';
}

/** Compose consistent, per-page metadata (title, canonical, OG, Twitter). */
export function buildMetadata({
  title,
  description,
  path = '/',
  image = siteConfig.ogImage,
  keywords,
  type = 'website',
}: BuildMetadataArgs): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  // Compose the full title here and mark it `absolute` so the root layout's
  // title template ("%s | Ascendix") is not applied on top (which would
  // double the brand suffix).
  const fullTitle =
    title === siteConfig.name
      ? `${siteConfig.name} — ${siteConfig.tagline}`
      : `${title} | ${siteConfig.name}`;

  return {
    title: { absolute: fullTitle },
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        siteConfig.locales.map((l) => [l.hreflang, url]),
      ),
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type,
      images: [{ url: new URL(image, siteConfig.url).toString(), width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [new URL(image, siteConfig.url).toString()],
    },
  };
}

/** Organization structured data (JSON-LD). */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: new URL(siteConfig.logo, siteConfig.url).toString(),
    description: siteConfig.shortDescription,
    foundingDate: String(siteConfig.foundedYear),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'sales',
      email: siteConfig.contact.salesEmail,
      areaServed: siteConfig.primaryMarket,
      availableLanguage: siteConfig.locales.map((l) => l.label),
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

/** LocalBusiness structured data (JSON-LD). */
export function localBusinessJsonLd() {
  const a = siteConfig.contact.address;
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.legalName,
    image: new URL(siteConfig.ogImage, siteConfig.url).toString(),
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.salesEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${a.line1}, ${a.line2}`,
      addressLocality: a.city,
      addressRegion: a.region,
      postalCode: a.postalCode,
      addressCountry: a.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.contact.geo.lat,
      longitude: siteConfig.contact.geo.lng,
    },
    openingHours: 'Su-Th 08:00-18:00',
  };
}

/** BreadcrumbList structured data (JSON-LD). */
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.url, siteConfig.url).toString(),
    })),
  };
}
