import type { Project } from '@/lib/types';

/**
 * SAMPLE / PLACEHOLDER project references. All projects, clients and quotes
 * below are illustrative content created for this build — they do not describe
 * real installations. Replace with the client's approved case studies before
 * launch, and never publish confidential client details without consent.
 */

export const projects: Project[] = [
  {
    id: 'prj-marina-towers',
    slug: 'marina-towers',
    name: 'Marina Towers Residences',
    country: 'United Arab Emirates',
    city: 'Dubai',
    year: 2024,
    buildingType: 'residential',
    productType: 'Passenger Elevators',
    productFamily: 'elevator',
    units: 12,
    summary:
      'Twelve high-speed passenger elevators serving two 42-storey residential towers with destination dispatch.',
    scope:
      'Supply, installation and commissioning of 12 machine-room-less passenger elevators across two connected residential towers, integrated with a destination-dispatch system in the shared lobby.',
    challenge:
      'Peak morning and evening traffic across 42 storeys required short waiting times without adding shaft count, within a tight architectural core.',
    solution:
      'AX-500 elevators with destination-dispatch grouping reduced average waiting time during peak periods, while regenerative drives lowered the towers’ energy footprint.',
    featuredImage: '/images/projects/marina-towers.webp',
    images: ['/images/projects/marina-towers.webp', '/images/projects/marina-towers-2.webp'],
    testimonial: {
      quote:
        'Ride quality and waiting times exceeded our expectations, and the installation stayed on programme throughout.',
      author: 'Development Director',
      role: 'Residential Developer (sample)',
    },
    featured: true,
    seo: {
      title: 'Marina Towers Residences — Passenger Elevator Project',
      description:
        'Twelve high-speed passenger elevators with destination dispatch for two 42-storey residential towers in Dubai.',
    },
  },
  {
    id: 'prj-central-medical',
    slug: 'central-medical-center',
    name: 'Central Medical Center',
    country: 'Saudi Arabia',
    city: 'Riyadh',
    year: 2023,
    buildingType: 'healthcare',
    productType: 'Hospital Elevators',
    productFamily: 'elevator',
    units: 8,
    summary:
      'Eight bed/stretcher elevators with antibacterial cabins and priority service for a 600-bed hospital.',
    scope:
      'Supply and installation of eight AX-720 hospital elevators, including priority and emergency service modes and antibacterial interiors, across clinical and service cores.',
    challenge:
      'Clinical workflows demanded accurate leveling for step-free bed transfers and hygienic, low-noise cabins near patient wards.',
    solution:
      'AX-720 elevators delivered precise re-leveling, antibacterial finishes and priority service, supporting fast, quiet movement of beds and medical teams.',
    featuredImage: '/images/projects/central-hospital.webp',
    images: ['/images/projects/central-hospital.webp', '/images/projects/central-hospital-2.webp'],
    featured: true,
    seo: {
      title: 'Central Medical Center — Hospital Elevator Project',
      description:
        'Eight bed/stretcher hospital elevators with antibacterial cabins and priority service for a 600-bed hospital in Riyadh.',
    },
  },
  {
    id: 'prj-grand-mall',
    slug: 'grand-central-mall',
    name: 'Grand Central Mall',
    country: 'Qatar',
    city: 'Doha',
    year: 2024,
    buildingType: 'commercial',
    productType: 'Escalators, Panoramic Elevators & Walkways',
    productFamily: 'escalator',
    units: 34,
    summary:
      'A complete vertical-transport package: escalators, panoramic elevators and moving walkways for a flagship mall.',
    scope:
      'Design, supply and installation of 24 commercial escalators, 6 panoramic elevators and 4 moving walkways, coordinated with the mall’s architectural atrium.',
    challenge:
      'High footfall across four retail levels required reliable, energy-efficient transport that complemented a signature glass atrium.',
    solution:
      'Energy-saving escalators and walkways handled peak crowds, while AX-Glass panoramic elevators became a visual centrepiece of the atrium.',
    featuredImage: '/images/projects/grand-mall.webp',
    images: ['/images/projects/grand-mall.webp', '/images/projects/grand-mall-2.webp'],
    testimonial: {
      quote:
        'The escalators and panoramic lifts handle our busiest weekends effortlessly and look superb in the atrium.',
      author: 'Facilities Manager',
      role: 'Retail Operator (sample)',
    },
    featured: true,
    seo: {
      title: 'Grand Central Mall — Escalator & Elevator Project',
      description:
        'Escalators, panoramic elevators and moving walkways for a flagship shopping mall in Doha.',
    },
  },
  {
    id: 'prj-harbour-hotel',
    slug: 'harbour-grand-hotel',
    name: 'Harbour Grand Hotel',
    country: 'Oman',
    city: 'Muscat',
    year: 2023,
    buildingType: 'hospitality',
    productType: 'Wood Cabin & Panoramic Elevators',
    productFamily: 'elevator',
    units: 6,
    summary:
      'Six premium elevators — timber-finish guest lifts and a panoramic lobby elevator — for a five-star hotel.',
    scope:
      'Supply and installation of four AX-Wood guest elevators, one AX-Glass panoramic lobby elevator and one AX-DW dumbwaiter for food service.',
    challenge:
      'The hotel required refined, quiet guest lifts and a signature lobby elevator that matched a premium interior design scheme.',
    solution:
      'Timber-finish cabins with bespoke lighting delivered a hospitality feel, while the panoramic lobby elevator created a memorable arrival experience.',
    featuredImage: '/images/projects/harbour-hotel.webp',
    images: ['/images/projects/harbour-hotel.webp', '/images/projects/harbour-hotel-2.webp'],
    featured: true,
    seo: {
      title: 'Harbour Grand Hotel — Premium Elevator Project',
      description:
        'Timber-finish guest elevators and a panoramic lobby elevator for a five-star hotel in Muscat.',
    },
  },
  {
    id: 'prj-logistics-hub',
    slug: 'national-logistics-hub',
    name: 'National Logistics Hub',
    country: 'United Arab Emirates',
    city: 'Abu Dhabi',
    year: 2022,
    buildingType: 'industrial',
    productType: 'Cargo Elevators',
    productFamily: 'elevator',
    units: 5,
    summary:
      'Five heavy-duty cargo elevators for forklift loading across a large distribution centre.',
    scope:
      'Supply and installation of five AX-900 cargo elevators rated up to 5000 kg, with reinforced floors and wide openings for forklift access.',
    challenge:
      'The distribution centre needed fast, reliable freight movement between mezzanine levels with forklift loading and heavy daily cycles.',
    solution:
      'AX-900 elevators with reinforced cabins and wide centre-opening doors enabled efficient forklift loading and dependable heavy-duty operation.',
    featuredImage: '/images/projects/logistics-hub.webp',
    images: ['/images/projects/logistics-hub.webp', '/images/projects/logistics-hub-2.webp'],
    seo: {
      title: 'National Logistics Hub — Cargo Elevator Project',
      description:
        'Five heavy-duty cargo elevators for forklift loading across a large distribution centre in Abu Dhabi.',
    },
  },
  {
    id: 'prj-metro-interchange',
    slug: 'metro-interchange',
    name: 'City Metro Interchange',
    country: 'Kuwait',
    city: 'Kuwait City',
    year: 2024,
    buildingType: 'transport',
    productType: 'Heavy-Duty Escalators & Walkways',
    productFamily: 'escalator',
    units: 18,
    summary:
      'Heavy-duty escalators and moving walkways for a high-traffic metro interchange station.',
    scope:
      'Supply and installation of 14 AX-ESC-H heavy-duty escalators and 4 AX-MW moving walkways, with remote diagnostics for the operations team.',
    challenge:
      'A busy interchange required transport that could sustain near-continuous operation and peak commuter volumes with minimal downtime.',
    solution:
      'Heavy-duty escalators and walkways with reinforced components and remote diagnostics delivered dependable service and faster maintenance response.',
    featuredImage: '/images/projects/metro-interchange.webp',
    images: ['/images/projects/metro-interchange.webp', '/images/projects/metro-interchange-2.webp'],
    featured: true,
    seo: {
      title: 'City Metro Interchange — Escalator & Walkway Project',
      description:
        'Heavy-duty escalators and moving walkways for a high-traffic metro interchange station in Kuwait City.',
    },
  },
  {
    id: 'prj-riverside',
    slug: 'riverside-residences',
    name: 'Riverside Residences',
    country: 'Bahrain',
    city: 'Manama',
    year: 2023,
    buildingType: 'residential',
    productType: 'Home / Villa Elevators',
    productFamily: 'elevator',
    units: 20,
    summary:
      'Twenty compact home elevators across a gated villa community, each tailored to its residence.',
    scope:
      'Supply and installation of 20 AX-Villa home elevators across a villa development, with finish options selected per residence.',
    challenge:
      'Each villa had limited shaft space and required quiet, refined lifts that suited individual interior schemes.',
    solution:
      'Compact AX-Villa elevators with low pit/headroom requirements and configurable interiors fitted each villa while keeping noise low.',
    featuredImage: '/images/projects/riverside-residences.webp',
    images: ['/images/projects/riverside-residences.webp', '/images/projects/riverside-residences-2.webp'],
    seo: {
      title: 'Riverside Residences — Home Elevator Project',
      description:
        'Twenty compact home elevators across a gated villa community in Manama, tailored per residence.',
    },
  },
  {
    id: 'prj-govt-complex',
    slug: 'government-administrative-complex',
    name: 'Government Administrative Complex',
    country: 'Jordan',
    city: 'Amman',
    year: 2022,
    buildingType: 'government',
    productType: 'Passenger & Cargo Elevators',
    productFamily: 'elevator',
    units: 10,
    summary:
      'A mixed fleet of passenger and service elevators for a multi-building government complex.',
    scope:
      'Supply and installation of eight AX-500 passenger elevators and two AX-900 service elevators across a multi-building administrative complex.',
    challenge:
      'The complex required accessible, reliable transport for staff and visitors alongside service lifts for facilities teams.',
    solution:
      'A coordinated fleet of passenger and service elevators provided accessible public circulation and dependable back-of-house logistics.',
    featuredImage: '/images/projects/govt-complex.webp',
    images: ['/images/projects/govt-complex.webp', '/images/projects/govt-complex-2.webp'],
    seo: {
      title: 'Government Administrative Complex — Elevator Project',
      description:
        'Passenger and service elevators for a multi-building government administrative complex in Amman.',
    },
  },
];

/* ------------------------------- accessors ------------------------------- */

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getRelatedProjects = (slugs: string[]) =>
  slugs.map((s) => projects.find((p) => p.slug === s)).filter(Boolean) as Project[];

export const projectCountries = () =>
  Array.from(new Set(projects.map((p) => p.country))).sort();

export const projectBuildingTypes = () =>
  Array.from(new Set(projects.map((p) => p.buildingType))).sort();

export const projectYears = () =>
  Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a);
