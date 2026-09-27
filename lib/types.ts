/**
 * Shared data models. These mirror the intended CMS schema so the local data
 * files in /data can be migrated to Sanity (or another CMS) without changing
 * component code.
 */

export type ProductCategorySlug =
  | 'passenger-elevators'
  | 'cargo-elevators'
  | 'hospital-elevators'
  | 'panoramic-elevators'
  | 'dumbwaiters'
  | 'home-elevators'
  | 'glass-cabin-elevators'
  | 'wood-cabin-elevators'
  | 'commercial-escalators'
  | 'heavy-duty-escalators'
  | 'moving-walkways';

export type ProductFamily = 'elevator' | 'escalator' | 'moving-walkway';

export interface Seo {
  title: string;
  description: string;
  keywords?: string[];
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface ProductOptionGroup {
  group: string;
  items: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  model: string;
  family: ProductFamily;
  category: ProductCategorySlug;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  featuredImage: string;
  images: string[];
  applications: string[];
  features: { title: string; description: string }[];
  specHighlights: string[];
  specifications: SpecRow[];
  options: ProductOptionGroup[];
  safetyFeatures: string[];
  brochure?: string;
  certificates: string[];
  relatedProducts: string[];
  relatedProjects: string[];
  featured?: boolean;
  seo: Seo;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  country: string;
  city: string;
  year: number;
  buildingType: string;
  productType: string;
  productFamily: ProductFamily;
  units: number;
  summary: string;
  scope: string;
  challenge: string;
  solution: string;
  featuredImage: string;
  images: string[];
  testimonial?: { quote: string; author: string; role: string };
  featured?: boolean;
  seo: Seo;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  featuredImage: string;
  author: string;
  publishedAt: string; // ISO date
  featured?: boolean;
  seo: Seo;
}

export interface Certificate {
  id: string;
  title: string;
  category: 'Certificate' | 'Brochure' | 'Catalog' | 'Compliance' | 'Guide';
  language: string;
  file: string;
  fileType: string;
  fileSize: string;
  issuedAt: string; // ISO date
  description: string;
}

export interface Inquiry {
  id?: string;
  name: string;
  company?: string;
  email: string;
  phone: string;
  country: string;
  productInterest: string;
  projectType?: string;
  stops?: string;
  quantity?: string;
  message: string;
  attachment?: string;
  consent: boolean;
  sourcePage?: string;
  selectedProduct?: string;
  createdAt?: string;
  status?: 'new' | 'contacted' | 'closed';
}
