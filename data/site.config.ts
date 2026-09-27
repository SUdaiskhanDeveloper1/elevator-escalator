/**
 * =====================================================================
 * CENTRALIZED SITE CONFIGURATION
 * =====================================================================
 * This is the single source of truth for all company / contact / brand
 * information. Change values here and they propagate across every page,
 * the header, footer, contact page, structured data and WhatsApp links.
 *
 * NOTE: The company below ("Ascendix") is ORIGINAL SAMPLE/PLACEHOLDER data
 * created for this build. Replace with the client's real information before
 * launch. See CONTENT-GUIDE.md for the full replacement checklist.
 * =====================================================================
 */

export type SocialLinks = {
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
};

export type Locale = {
  code: string;
  label: string;
  hreflang: string;
};

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  foundedYear: number;
  url: string;
  logo: string;
  ogImage: string;
  primaryMarket: string;
  serviceAreaCountries: number;
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string; // digits only, international format, no "+"
    email: string;
    salesEmail: string;
    address: {
      line1: string;
      line2: string;
      city: string;
      region: string;
      postalCode: string;
      country: string;
      countryCode: string;
    };
    mapEmbedQuery: string;
    officeHours: string;
    geo: { lat: number; lng: number };
  };
  brand: {
    primary: string;
    accent: string;
  };
  social: SocialLinks;
  locales: Locale[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: 'Ascendix',
  legalName: 'Ascendix Vertical Transportation FZE',
  tagline: 'Engineered Vertical Mobility for Modern Buildings',
  shortDescription:
    'Manufacturer of premium elevators, escalators and moving walkways for commercial, residential and industrial buildings.',
  longDescription:
    'Ascendix designs, manufactures and services elevators, escalators and moving walkways engineered for safety, efficiency and long-term performance. We support developers, architects and contractors from consultation through installation and after-sales care across international markets.',
  foundedYear: 2004,
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ascendix.example',
  logo: '/images/brand/logo.svg',
  ogImage: '/images/og/og-default.webp',
  primaryMarket: 'Middle East, Africa & South Asia',
  serviceAreaCountries: 38,
  contact: {
    phone: '+971800272634',
    phoneDisplay: '+971 800 ASCENDX',
    whatsapp: '971500000000',
    email: 'info@ascendix.example',
    salesEmail: 'sales@ascendix.example',
    address: {
      line1: 'Jebel Ali Industrial Area 1',
      line2: 'Building VT-14, Unit 6',
      city: 'Dubai',
      region: 'Dubai',
      postalCode: '00000',
      country: 'United Arab Emirates',
      countryCode: 'AE',
    },
    mapEmbedQuery: 'Jebel Ali Industrial Area 1, Dubai, United Arab Emirates',
    officeHours: 'Sun–Thu, 08:00–18:00 GST',
    geo: { lat: 25.0, lng: 55.1 },
  },
  brand: {
    primary: '#123B5D',
    accent: '#D4A83F',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/ascendix-example',
    facebook: 'https://www.facebook.com/ascendix.example',
    instagram: 'https://www.instagram.com/ascendix.example',
    youtube: 'https://www.youtube.com/@ascendix.example',
  },
  locales: [
    { code: 'en', label: 'English', hreflang: 'en' },
    { code: 'ar', label: 'العربية', hreflang: 'ar' },
    { code: 'fr', label: 'Français', hreflang: 'fr' },
  ],
  defaultLocale: 'en',
};

/** Convenience helpers used across components. */
export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const telLink = () => `tel:${siteConfig.contact.phone}`;
export const mailtoLink = (email = siteConfig.contact.salesEmail) => `mailto:${email}`;

export const DEFAULT_WHATSAPP_MESSAGE =
  `Hello ${siteConfig.name}, I would like more information about your elevators and escalators.`;
