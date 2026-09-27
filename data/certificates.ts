import type { Certificate } from '@/lib/types';

/**
 * SAMPLE / PLACEHOLDER downloads & certificates. The referenced PDF files do
 * not ship with this build — they are illustrative entries so the downloads
 * page renders. Add the client's real documents to /public/downloads and
 * update the `file` paths. Never publish fabricated certifications.
 */

export const certificates: Certificate[] = [
  {
    id: 'c-iso9001',
    title: 'ISO 9001 Quality Management (sample)',
    category: 'Certificate',
    language: 'English',
    file: '/downloads/certificates/iso-9001.pdf',
    fileType: 'PDF',
    fileSize: '420 KB',
    issuedAt: '2024-02-01',
    description: 'Quality management system certificate. Sample placeholder — replace with the client’s real certificate.',
  },
  {
    id: 'c-iso14001',
    title: 'ISO 14001 Environmental Management (sample)',
    category: 'Certificate',
    language: 'English',
    file: '/downloads/certificates/iso-14001.pdf',
    fileType: 'PDF',
    fileSize: '410 KB',
    issuedAt: '2024-02-01',
    description: 'Environmental management system certificate. Sample placeholder.',
  },
  {
    id: 'c-ce',
    title: 'CE Marking Declaration (sample)',
    category: 'Compliance',
    language: 'English',
    file: '/downloads/certificates/ce-marking.pdf',
    fileType: 'PDF',
    fileSize: '360 KB',
    issuedAt: '2023-11-15',
    description: 'CE marking declaration of conformity. Sample placeholder.',
  },
  {
    id: 'b-company',
    title: 'Ascendix Company Profile',
    category: 'Brochure',
    language: 'English',
    file: '/downloads/brochures/company-profile.pdf',
    fileType: 'PDF',
    fileSize: '3.2 MB',
    issuedAt: '2025-01-10',
    description: 'Overview of the company, capabilities and international reach. Sample placeholder.',
  },
  {
    id: 'b-passenger',
    title: 'Passenger Elevator Range — Brochure',
    category: 'Brochure',
    language: 'English',
    file: '/downloads/brochures/ax-500-passenger.pdf',
    fileType: 'PDF',
    fileSize: '2.1 MB',
    issuedAt: '2025-01-10',
    description: 'Technical brochure for the AX-500 passenger elevator range. Sample placeholder.',
  },
  {
    id: 'cat-escalator',
    title: 'Escalator & Walkway Technical Catalog',
    category: 'Catalog',
    language: 'English',
    file: '/downloads/catalogs/escalators-walkways.pdf',
    fileType: 'PDF',
    fileSize: '4.8 MB',
    issuedAt: '2024-12-01',
    description: 'Full technical catalog for escalators and moving walkways. Sample placeholder.',
  },
  {
    id: 'g-install',
    title: 'Installation & Site Preparation Guide',
    category: 'Guide',
    language: 'English',
    file: '/downloads/guides/installation-guide.pdf',
    fileType: 'PDF',
    fileSize: '1.6 MB',
    issuedAt: '2024-09-20',
    description: 'Site preparation and installation guidance for main contractors. Sample placeholder.',
  },
  {
    id: 'b-company-ar',
    title: 'ملف الشركة (Company Profile — Arabic)',
    category: 'Brochure',
    language: 'Arabic',
    file: '/downloads/brochures/company-profile-ar.pdf',
    fileType: 'PDF',
    fileSize: '3.3 MB',
    issuedAt: '2025-01-10',
    description: 'Arabic-language company profile. Sample placeholder.',
  },
];

export const certificateCategories = () =>
  Array.from(new Set(certificates.map((c) => c.category))).sort();

export const certificateLanguages = () =>
  Array.from(new Set(certificates.map((c) => c.language))).sort();
