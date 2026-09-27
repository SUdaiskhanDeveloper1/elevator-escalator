import type { Product, ProductCategorySlug, ProductFamily } from '@/lib/types';

/**
 * SAMPLE / PLACEHOLDER product catalog. All copy and specifications below are
 * original sample content created for this build and are illustrative only.
 * Replace with the client's verified product data and real photography before
 * launch (see CONTENT-GUIDE.md).
 */

export interface CategoryMeta {
  slug: ProductCategorySlug;
  label: string;
  family: ProductFamily;
  tagline: string;
  intro: string;
  image: string;
}

export const productCategories: CategoryMeta[] = [
  {
    slug: 'passenger-elevators',
    label: 'Passenger Elevators',
    family: 'elevator',
    tagline: 'Everyday vertical transport, engineered for comfort',
    intro:
      'Smooth, energy-efficient passenger elevators for offices, apartments, hotels and mixed-use towers, with ride quality and control systems tuned for high daily traffic.',
    image: '/images/products/passenger-elevator.webp',
  },
  {
    slug: 'hospital-elevators',
    label: 'Hospital Elevators',
    family: 'elevator',
    tagline: 'Stretcher-ready mobility for healthcare',
    intro:
      'Deep, stable cabins sized for beds, stretchers and medical teams, with precise leveling, antibacterial finishes and quiet operation for sensitive clinical environments.',
    image: '/images/products/hospital-elevator.webp',
  },
  {
    slug: 'cargo-elevators',
    label: 'Cargo Elevators',
    family: 'elevator',
    tagline: 'Heavy-load freight handling',
    intro:
      'Robust freight elevators built for warehouses, factories and logistics facilities, with reinforced cabins, wide door openings and high rated loads.',
    image: '/images/products/cargo-elevator.webp',
  },
  {
    slug: 'panoramic-elevators',
    label: 'Panoramic Elevators',
    family: 'elevator',
    tagline: 'Glass observation cabins',
    intro:
      'Architectural glass cabins that turn vertical transport into a visual feature for malls, hotels and atriums, without compromising safety or ride comfort.',
    image: '/images/products/panoramic-elevator.webp',
  },
  {
    slug: 'home-elevators',
    label: 'Home / Villa Elevators',
    family: 'elevator',
    tagline: 'Compact residential lifts',
    intro:
      'Space-saving home elevators with low pit and headroom requirements, quiet drives and refined interiors designed for villas and private residences.',
    image: '/images/products/home-elevator.webp',
  },
  {
    slug: 'glass-cabin-elevators',
    label: 'Glass Cabin Elevators',
    family: 'elevator',
    tagline: 'Architectural transparency',
    intro:
      'Fully glazed cabins that bring light and openness to lobbies and showrooms, combining laminated safety glass with precision-engineered structures.',
    image: '/images/products/glass-cabin-elevator.webp',
  },
  {
    slug: 'wood-cabin-elevators',
    label: 'Wood Cabin Elevators',
    family: 'elevator',
    tagline: 'Premium interior finishes',
    intro:
      'Warm, hospitality-grade cabins with timber-finish panels and bespoke lighting for hotels, boutiques and premium residences.',
    image: '/images/products/wood-cabin-elevator.webp',
  },
  {
    slug: 'dumbwaiters',
    label: 'Dumbwaiters',
    family: 'elevator',
    tagline: 'Compact goods lifts',
    intro:
      'Small goods lifts for kitchens, restaurants, libraries and hospitals that move documents, meals and supplies quickly between floors.',
    image: '/images/products/dumbwaiter.webp',
  },
  {
    slug: 'commercial-escalators',
    label: 'Commercial Escalators',
    family: 'escalator',
    tagline: 'Malls, transit and offices',
    intro:
      'Reliable escalators for retail and commercial buildings, with energy-saving operation modes and comprehensive safety systems for continuous public use.',
    image: '/images/products/commercial-escalator.webp',
  },
  {
    slug: 'heavy-duty-escalators',
    label: 'Heavy-Duty Escalators',
    family: 'escalator',
    tagline: 'High-traffic public transport',
    intro:
      'Escalators engineered for metros, airports and transit hubs, built for extended duty cycles, high passenger volumes and demanding environments.',
    image: '/images/products/heavy-duty-escalator.webp',
  },
  {
    slug: 'moving-walkways',
    label: 'Moving Walkways',
    family: 'moving-walkway',
    tagline: 'Horizontal and inclined travelators',
    intro:
      'Travelators for airports, malls and exhibition centres that move people and trolleys smoothly across long horizontal or gently inclined distances.',
    image: '/images/products/moving-walkway.webp',
  },
];

export const categoryBySlug = (slug: string) =>
  productCategories.find((c) => c.slug === slug);

const CERTS = ['ISO 9001', 'ISO 14001', 'CE Marking', 'EN 81-20/50'];

export const products: Product[] = [
  {
    id: 'p-ax-500',
    slug: 'ax-500-passenger-elevator',
    name: 'AX-500 Passenger Elevator',
    model: 'AX-500',
    family: 'elevator',
    category: 'passenger-elevators',
    categoryLabel: 'Passenger Elevators',
    shortDescription:
      'Machine-room-less passenger elevator with regenerative drive and smooth, quiet ride quality for mid-rise buildings.',
    fullDescription:
      'The AX-500 is a machine-room-less (MRL) passenger elevator designed for offices, apartments and hotels up to mid-rise heights. A gearless permanent-magnet drive delivers quiet, energy-efficient operation, while the destination-aware control system reduces waiting times during peak traffic. Interiors are fully configurable, from brushed stainless steel to warm timber finishes.',
    featuredImage: '/images/products/passenger-elevator.webp',
    images: [
      '/images/products/passenger-elevator.webp',
      '/images/products/passenger-elevator-2.webp',
      '/images/products/passenger-elevator-3.webp',
    ],
    applications: ['Office towers', 'Residential apartments', 'Hotels', 'Mixed-use developments'],
    features: [
      { title: 'Gearless MRL drive', description: 'Permanent-magnet synchronous motor removes the machine room and lowers energy use.' },
      { title: 'Regenerative operation', description: 'Braking energy is fed back to the building supply, cutting running costs.' },
      { title: 'Smart dispatch', description: 'Destination-based control reduces waiting and travel time in busy buildings.' },
      { title: 'Configurable interiors', description: 'Wide choice of wall finishes, handrails, lighting and flooring.' },
    ],
    specHighlights: ['630–1600 kg', 'Up to 2.5 m/s', 'Up to 40 stops'],
    specifications: [
      { label: 'Product type', value: 'Passenger elevator (MRL)' },
      { label: 'Model', value: 'AX-500' },
      { label: 'Rated load', value: '630 – 1600 kg' },
      { label: 'Passenger capacity', value: '8 – 21 persons' },
      { label: 'Rated speed', value: '1.0 – 2.5 m/s' },
      { label: 'Max travel height', value: 'Up to 120 m' },
      { label: 'Max stops', value: 'Up to 40' },
      { label: 'Drive type', value: 'Gearless permanent-magnet, VVVF' },
      { label: 'Machine room', value: 'Machine-room-less (MRL)' },
      { label: 'Door opening', value: 'Centre / side opening, 800–1100 mm' },
      { label: 'Control system', value: 'Microprocessor, destination dispatch optional' },
      { label: 'Power supply', value: '3-phase 380–415 V, 50/60 Hz' },
      { label: 'Standards', value: 'EN 81-20/50, ISO 25745 energy class A' },
    ],
    options: [
      { group: 'Cabin finishes', items: ['Brushed stainless steel', 'Mirror steel', 'Timber-effect laminate', 'Painted steel'] },
      { group: 'Flooring', items: ['PVC', 'Natural stone', 'Porcelain tile'] },
      { group: 'Doors', items: ['Centre opening', 'Two-panel side opening', 'Glass vision panel'] },
      { group: 'Control panels', items: ['Stainless COP', 'Touchless call', 'Braille & audible announcements'] },
    ],
    safetyFeatures: [
      'Overspeed governor and progressive safety gear',
      'Emergency battery lowering and lighting',
      'Door light curtain with obstruction detection',
      'Automatic rescue device (ARD)',
      'Fireman’s emergency return function',
    ],
    brochure: '/downloads/brochures/ax-500-passenger.pdf',
    certificates: CERTS,
    relatedProducts: ['ax-720-hospital-elevator', 'ax-glass-panoramic-elevator', 'ax-villa-home-elevator'],
    relatedProjects: ['marina-towers', 'harbour-grand-hotel'],
    featured: true,
    seo: {
      title: 'AX-500 Passenger Elevator | MRL Passenger Lift',
      description:
        'Energy-efficient machine-room-less passenger elevator with regenerative drive and smart dispatch for offices, apartments and hotels.',
      keywords: ['passenger elevator', 'MRL elevator', 'passenger lift manufacturer'],
    },
  },
  {
    id: 'p-ax-720',
    slug: 'ax-720-hospital-elevator',
    name: 'AX-720 Hospital Elevator',
    model: 'AX-720',
    family: 'elevator',
    category: 'hospital-elevators',
    categoryLabel: 'Hospital Elevators',
    shortDescription:
      'Deep-cabin bed/stretcher elevator with precise leveling, antibacterial surfaces and whisper-quiet operation for healthcare.',
    fullDescription:
      'The AX-720 is engineered for hospitals, clinics and care facilities where reliability and hygiene are critical. Its deep cabin comfortably accommodates beds, stretchers and accompanying medical staff, while accurate re-leveling ensures a step-free transfer. Antibacterial wall finishes and low-noise operation support sensitive clinical environments.',
    featuredImage: '/images/products/hospital-elevator.webp',
    images: [
      '/images/products/hospital-elevator.webp',
      '/images/products/hospital-elevator-2.webp',
      '/images/products/hospital-elevator-3.webp',
    ],
    applications: ['Hospitals', 'Clinics', 'Care homes', 'Medical laboratories'],
    features: [
      { title: 'Bed & stretcher ready', description: 'Deep 1.5–2.7 m cabins fit hospital beds and clinical teams with ease.' },
      { title: 'Precise leveling', description: 'Closed-loop control provides accurate, step-free floor stops.' },
      { title: 'Hygienic surfaces', description: 'Antibacterial panels and touchless calls reduce cross-contamination.' },
      { title: 'Quiet ride', description: 'Low-noise gearless drive suits wards and patient areas.' },
    ],
    specHighlights: ['1600–2500 kg', 'Up to 1.75 m/s', 'Antibacterial cabin'],
    specifications: [
      { label: 'Product type', value: 'Hospital / bed elevator' },
      { label: 'Model', value: 'AX-720' },
      { label: 'Rated load', value: '1600 – 2500 kg' },
      { label: 'Passenger capacity', value: '21 – 33 persons' },
      { label: 'Rated speed', value: '1.0 – 1.75 m/s' },
      { label: 'Max travel height', value: 'Up to 90 m' },
      { label: 'Max stops', value: 'Up to 30' },
      { label: 'Drive type', value: 'Gearless permanent-magnet, VVVF' },
      { label: 'Machine room', value: 'MRL or machine-room' },
      { label: 'Door opening', value: 'Side opening, 1100–1300 mm' },
      { label: 'Control system', value: 'Microprocessor with priority service' },
      { label: 'Power supply', value: '3-phase 380–415 V, 50/60 Hz' },
      { label: 'Standards', value: 'EN 81-20/50, medical facility guidelines' },
    ],
    options: [
      { group: 'Cabin finishes', items: ['Antibacterial laminate', 'Stainless steel', 'Impact-resistant panels'] },
      { group: 'Flooring', items: ['Antistatic PVC', 'Seamless resin'] },
      { group: 'Doors', items: ['Wide side opening', 'Stainless door frames'] },
      { group: 'Control panels', items: ['Touchless call', 'Priority / emergency service', 'Audible & Braille'] },
    ],
    safetyFeatures: [
      'Accurate re-leveling for step-free transfer',
      'Emergency power lowering and rescue device',
      'Door protection light curtain',
      'Priority and emergency service modes',
      'Fireman’s emergency return',
    ],
    brochure: '/downloads/brochures/ax-720-hospital.pdf',
    certificates: CERTS,
    relatedProducts: ['ax-500-passenger-elevator', 'ax-900-cargo-elevator'],
    relatedProjects: ['central-medical-center'],
    featured: true,
    seo: {
      title: 'AX-720 Hospital Elevator | Bed & Stretcher Lift',
      description:
        'Deep-cabin hospital elevator with precise leveling, antibacterial finishes and quiet operation for hospitals and clinics.',
      keywords: ['hospital elevator', 'bed elevator', 'stretcher lift supplier'],
    },
  },
  {
    id: 'p-ax-900',
    slug: 'ax-900-cargo-elevator',
    name: 'AX-900 Cargo Elevator',
    model: 'AX-900',
    family: 'elevator',
    category: 'cargo-elevators',
    categoryLabel: 'Cargo Elevators',
    shortDescription:
      'Heavy-duty freight elevator with reinforced cabin, wide openings and high rated loads for industrial facilities.',
    fullDescription:
      'The AX-900 freight elevator is built for warehouses, factories and logistics centres that move pallets, trolleys and heavy goods between levels. A reinforced cabin, durable flooring and wide door openings support forklift loading, while robust drives handle demanding duty cycles.',
    featuredImage: '/images/products/cargo-elevator.webp',
    images: [
      '/images/products/cargo-elevator.webp',
      '/images/products/cargo-elevator-2.webp',
      '/images/products/cargo-elevator-3.webp',
    ],
    applications: ['Warehouses', 'Factories', 'Logistics centres', 'Retail back-of-house'],
    features: [
      { title: 'High rated loads', description: 'Configurations from 2000 kg up to 5000 kg for heavy freight.' },
      { title: 'Forklift-ready', description: 'Reinforced floor and sill support forklift and pallet-truck loading.' },
      { title: 'Wide openings', description: 'Large door openings speed up loading and unloading cycles.' },
      { title: 'Durable finishes', description: 'Impact-resistant panels stand up to industrial use.' },
    ],
    specHighlights: ['2000–5000 kg', 'Forklift-ready floor', 'Wide openings'],
    specifications: [
      { label: 'Product type', value: 'Freight / cargo elevator' },
      { label: 'Model', value: 'AX-900' },
      { label: 'Rated load', value: '2000 – 5000 kg' },
      { label: 'Rated speed', value: '0.25 – 1.0 m/s' },
      { label: 'Max travel height', value: 'Up to 60 m' },
      { label: 'Max stops', value: 'Up to 20' },
      { label: 'Drive type', value: 'Geared / gearless VVVF' },
      { label: 'Machine room', value: 'Machine-room or MRL' },
      { label: 'Door opening', value: 'Centre-opening, up to 2000 mm wide' },
      { label: 'Control system', value: 'Microprocessor, loading-mode logic' },
      { label: 'Power supply', value: '3-phase 380–415 V, 50/60 Hz' },
      { label: 'Standards', value: 'EN 81-20/50' },
    ],
    options: [
      { group: 'Cabin finishes', items: ['Chequer-plate steel', 'Painted steel', 'Stainless steel'] },
      { group: 'Flooring', items: ['Steel chequer plate', 'Anti-slip resin'] },
      { group: 'Doors', items: ['Wide centre opening', 'Bi-parting freight doors'] },
      { group: 'Protection', items: ['Bumper rails', 'Reinforced sills'] },
    ],
    safetyFeatures: [
      'Overload detection and indication',
      'Progressive safety gear',
      'Emergency lowering',
      'Robust door interlocks',
      'Anti-nuisance loading logic',
    ],
    brochure: '/downloads/brochures/ax-900-cargo.pdf',
    certificates: CERTS,
    relatedProducts: ['ax-500-passenger-elevator', 'ax-dw-dumbwaiter'],
    relatedProjects: ['national-logistics-hub'],
    featured: true,
    seo: {
      title: 'AX-900 Cargo Elevator | Freight Lift Solutions',
      description:
        'Heavy-duty cargo elevator with reinforced cabin and wide openings for warehouses, factories and logistics facilities.',
      keywords: ['cargo elevator', 'freight elevator', 'goods lift manufacturer'],
    },
  },
  {
    id: 'p-ax-glass',
    slug: 'ax-glass-panoramic-elevator',
    name: 'AX-Glass Panoramic Elevator',
    model: 'AX-Glass',
    family: 'elevator',
    category: 'panoramic-elevators',
    categoryLabel: 'Panoramic Elevators',
    shortDescription:
      'Architectural glass observation elevator that becomes a visual feature in malls, hotels and atriums.',
    fullDescription:
      'The AX-Glass panoramic elevator combines laminated safety glass with a precision structural frame to create a striking observation cabin. Ideal for atriums, shopping malls and hotels, it delivers panoramic views while maintaining the ride comfort and safety of a fully engineered lift.',
    featuredImage: '/images/products/panoramic-elevator.webp',
    images: [
      '/images/products/panoramic-elevator.webp',
      '/images/products/panoramic-elevator-2.webp',
      '/images/products/panoramic-elevator-3.webp',
    ],
    applications: ['Shopping malls', 'Hotels & atriums', 'Showrooms', 'Corporate lobbies'],
    features: [
      { title: 'Panoramic glass cabin', description: 'Laminated safety glass gives unobstructed views on multiple sides.' },
      { title: 'Architectural feature', description: 'A design statement for lobbies, atriums and retail spaces.' },
      { title: 'Comfort engineered', description: 'Smooth acceleration and precise leveling despite the open design.' },
      { title: 'Custom lighting', description: 'Integrated LED accent lighting enhances the cabin at night.' },
    ],
    specHighlights: ['630–1600 kg', 'Laminated glass', 'Panoramic views'],
    specifications: [
      { label: 'Product type', value: 'Panoramic / observation elevator' },
      { label: 'Model', value: 'AX-Glass' },
      { label: 'Rated load', value: '630 – 1600 kg' },
      { label: 'Passenger capacity', value: '8 – 21 persons' },
      { label: 'Rated speed', value: '1.0 – 2.0 m/s' },
      { label: 'Max travel height', value: 'Up to 90 m' },
      { label: 'Cabin shape', value: 'Semi-circular, square or custom' },
      { label: 'Drive type', value: 'Gearless permanent-magnet, VVVF' },
      { label: 'Glazing', value: 'Laminated safety glass' },
      { label: 'Control system', value: 'Microprocessor, destination dispatch optional' },
      { label: 'Power supply', value: '3-phase 380–415 V, 50/60 Hz' },
      { label: 'Standards', value: 'EN 81-20/50' },
    ],
    options: [
      { group: 'Cabin shape', items: ['Semi-circular', 'Square', 'Custom architectural'] },
      { group: 'Frame finishes', items: ['Stainless steel', 'Powder-coated', 'Bronze-tone'] },
      { group: 'Glazing', items: ['Clear laminated', 'Tinted laminated'] },
      { group: 'Lighting', items: ['LED ceiling', 'Accent floor lighting'] },
    ],
    safetyFeatures: [
      'Laminated safety glass',
      'Overspeed governor and safety gear',
      'Emergency battery lowering',
      'Door light curtain',
      'Fireman’s emergency return',
    ],
    brochure: '/downloads/brochures/ax-glass-panoramic.pdf',
    certificates: CERTS,
    relatedProducts: ['ax-500-passenger-elevator', 'ax-wood-cabin-elevator'],
    relatedProjects: ['grand-central-mall', 'harbour-grand-hotel'],
    featured: true,
    seo: {
      title: 'AX-Glass Panoramic Elevator | Observation Lift',
      description:
        'Architectural glass panoramic elevator with laminated safety glass for malls, hotels and atriums.',
      keywords: ['panoramic elevator', 'observation lift', 'glass elevator'],
    },
  },
  {
    id: 'p-ax-villa',
    slug: 'ax-villa-home-elevator',
    name: 'AX-Villa Home Elevator',
    model: 'AX-Villa',
    family: 'elevator',
    category: 'home-elevators',
    categoryLabel: 'Home / Villa Elevators',
    shortDescription:
      'Compact, quiet home elevator with low pit and headroom needs and refined interiors for private residences.',
    fullDescription:
      'The AX-Villa is a compact home elevator designed for villas and private residences. With low pit and headroom requirements and a quiet gearless drive, it integrates neatly into new builds and renovations, while a choice of refined interior finishes complements premium interiors.',
    featuredImage: '/images/products/home-elevator.webp',
    images: [
      '/images/products/home-elevator.webp',
      '/images/products/home-elevator-2.webp',
      '/images/products/home-elevator-3.webp',
    ],
    applications: ['Villas', 'Private residences', 'Duplex apartments', 'Small offices'],
    features: [
      { title: 'Compact footprint', description: 'Low pit and headroom suit renovations and tight spaces.' },
      { title: 'Quiet operation', description: 'Gearless drive keeps noise low for residential comfort.' },
      { title: 'Refined interiors', description: 'Timber, glass and stainless finish options.' },
      { title: 'Energy efficient', description: 'Standby mode and LED lighting reduce running costs.' },
    ],
    specHighlights: ['250–450 kg', 'Low pit / headroom', 'Quiet drive'],
    specifications: [
      { label: 'Product type', value: 'Home / villa elevator' },
      { label: 'Model', value: 'AX-Villa' },
      { label: 'Rated load', value: '250 – 450 kg' },
      { label: 'Passenger capacity', value: '3 – 6 persons' },
      { label: 'Rated speed', value: '0.3 – 1.0 m/s' },
      { label: 'Max travel height', value: 'Up to 18 m' },
      { label: 'Max stops', value: 'Up to 6' },
      { label: 'Drive type', value: 'Gearless / screw-driven options' },
      { label: 'Pit depth', value: 'From 150 mm' },
      { label: 'Door opening', value: 'Automatic or manual swing' },
      { label: 'Power supply', value: '1-phase 220 V or 3-phase' },
      { label: 'Standards', value: 'EN 81-41 / EN 81-20 as applicable' },
    ],
    options: [
      { group: 'Cabin finishes', items: ['Timber-effect', 'Glass', 'Stainless steel'] },
      { group: 'Doors', items: ['Automatic sliding', 'Manual swing'] },
      { group: 'Controls', items: ['Flush COP', 'Home automation integration'] },
      { group: 'Lighting', items: ['LED ceiling', 'Accent lighting'] },
    ],
    safetyFeatures: [
      'Emergency battery lowering',
      'Overload protection',
      'Door safety sensors',
      'Emergency alarm and intercom',
      'Standby power management',
    ],
    brochure: '/downloads/brochures/ax-villa-home.pdf',
    certificates: ['ISO 9001', 'CE Marking', 'EN 81-41'],
    relatedProducts: ['ax-wood-cabin-elevator', 'ax-500-passenger-elevator'],
    relatedProjects: ['riverside-residences'],
    featured: true,
    seo: {
      title: 'AX-Villa Home Elevator | Residential Lift',
      description:
        'Compact, quiet home elevator with low pit/headroom and refined interiors for villas and private residences.',
      keywords: ['home elevator', 'villa lift', 'residential elevator company'],
    },
  },
  {
    id: 'p-ax-wood',
    slug: 'ax-wood-cabin-elevator',
    name: 'AX-Wood Cabin Elevator',
    model: 'AX-Wood',
    family: 'elevator',
    category: 'wood-cabin-elevators',
    categoryLabel: 'Wood Cabin Elevators',
    shortDescription:
      'Hospitality-grade elevator with warm timber-finish cabin and bespoke lighting for hotels and premium residences.',
    fullDescription:
      'The AX-Wood pairs proven lift engineering with a warm, hospitality-grade cabin. Timber-finish panels, custom lighting and premium handrails create an inviting interior for hotels, boutiques and high-end residences, while the underlying drive and controls match our passenger range.',
    featuredImage: '/images/products/wood-cabin-elevator.webp',
    images: [
      '/images/products/wood-cabin-elevator.webp',
      '/images/products/wood-cabin-elevator-2.webp',
      '/images/products/wood-cabin-elevator-3.webp',
    ],
    applications: ['Hotels', 'Boutiques', 'Premium residences', 'Restaurants'],
    features: [
      { title: 'Timber-finish interior', description: 'Warm panels and trims for a hospitality feel.' },
      { title: 'Bespoke lighting', description: 'Layered LED lighting sets the cabin mood.' },
      { title: 'Premium handrails', description: 'Stainless or bronze-tone handrail options.' },
      { title: 'Proven drivetrain', description: 'Shares the reliable gearless drive of our passenger range.' },
    ],
    specHighlights: ['630–1275 kg', 'Timber finish', 'Custom lighting'],
    specifications: [
      { label: 'Product type', value: 'Passenger elevator (premium cabin)' },
      { label: 'Model', value: 'AX-Wood' },
      { label: 'Rated load', value: '630 – 1275 kg' },
      { label: 'Passenger capacity', value: '8 – 17 persons' },
      { label: 'Rated speed', value: '1.0 – 2.0 m/s' },
      { label: 'Max travel height', value: 'Up to 90 m' },
      { label: 'Drive type', value: 'Gearless permanent-magnet, VVVF' },
      { label: 'Machine room', value: 'Machine-room-less (MRL)' },
      { label: 'Door opening', value: 'Centre / side opening' },
      { label: 'Control system', value: 'Microprocessor, destination dispatch optional' },
      { label: 'Power supply', value: '3-phase 380–415 V, 50/60 Hz' },
      { label: 'Standards', value: 'EN 81-20/50' },
    ],
    options: [
      { group: 'Cabin finishes', items: ['Oak-effect', 'Walnut-effect', 'Custom veneer look'] },
      { group: 'Handrails', items: ['Stainless', 'Bronze-tone', 'Timber'] },
      { group: 'Lighting', items: ['Warm LED', 'Cove lighting', 'Spotlights'] },
      { group: 'Flooring', items: ['Stone-effect', 'Carpet inlay'] },
    ],
    safetyFeatures: [
      'Overspeed governor and safety gear',
      'Emergency battery lowering and lighting',
      'Door light curtain',
      'Automatic rescue device',
      'Fireman’s emergency return',
    ],
    brochure: '/downloads/brochures/ax-wood-cabin.pdf',
    certificates: CERTS,
    relatedProducts: ['ax-500-passenger-elevator', 'ax-glass-panoramic-elevator'],
    relatedProjects: ['harbour-grand-hotel'],
    seo: {
      title: 'AX-Wood Cabin Elevator | Premium Interior Lift',
      description:
        'Hospitality-grade elevator with warm timber-finish cabin and bespoke lighting for hotels and premium residences.',
      keywords: ['wood cabin elevator', 'premium elevator interior', 'hotel lift'],
    },
  },
  {
    id: 'p-ax-dw',
    slug: 'ax-dw-dumbwaiter',
    name: 'AX-DW Dumbwaiter',
    model: 'AX-DW',
    family: 'elevator',
    category: 'dumbwaiters',
    categoryLabel: 'Dumbwaiters',
    shortDescription:
      'Compact goods lift that moves meals, documents and supplies quickly and quietly between floors.',
    fullDescription:
      'The AX-DW dumbwaiter is a compact goods lift for restaurants, hotels, hospitals and libraries. It moves trays, documents and supplies efficiently between floors, freeing staff from carrying loads on stairs and improving service speed and safety.',
    featuredImage: '/images/products/dumbwaiter.webp',
    images: [
      '/images/products/dumbwaiter.webp',
      '/images/products/dumbwaiter-2.webp',
      '/images/products/dumbwaiter-3.webp',
    ],
    applications: ['Restaurants & kitchens', 'Hotels', 'Hospitals', 'Libraries & archives'],
    features: [
      { title: 'Space-saving', description: 'Compact shaft fits into service cores and existing buildings.' },
      { title: 'Hygienic stainless cabin', description: 'Easy-clean stainless interior suits food service.' },
      { title: 'Simple controls', description: 'Call-and-send controls at each landing.' },
      { title: 'Quiet & efficient', description: 'Low-noise drive for guest-facing areas.' },
    ],
    specHighlights: ['50–300 kg', 'Stainless cabin', 'Compact shaft'],
    specifications: [
      { label: 'Product type', value: 'Dumbwaiter / goods lift' },
      { label: 'Model', value: 'AX-DW' },
      { label: 'Rated load', value: '50 – 300 kg' },
      { label: 'Rated speed', value: '0.3 – 0.5 m/s' },
      { label: 'Max travel height', value: 'Up to 30 m' },
      { label: 'Max stops', value: 'Up to 10' },
      { label: 'Drive type', value: 'Traction / drum' },
      { label: 'Loading height', value: 'Counter or floor level' },
      { label: 'Door type', value: 'Vertical bi-parting / hinged' },
      { label: 'Control system', value: 'Call-send microprocessor' },
      { label: 'Power supply', value: '1-phase 220 V or 3-phase' },
      { label: 'Standards', value: 'EN 81-3' },
    ],
    options: [
      { group: 'Loading', items: ['Counter height', 'Floor level'] },
      { group: 'Cabin', items: ['Single shelf', 'Multi-shelf'] },
      { group: 'Doors', items: ['Vertical bi-parting', 'Hinged'] },
      { group: 'Finish', items: ['Stainless steel', 'Painted steel'] },
    ],
    safetyFeatures: [
      'Door interlocks at every landing',
      'Overload protection',
      'Emergency stop',
      'Slack-rope safety device',
    ],
    brochure: '/downloads/brochures/ax-dw-dumbwaiter.pdf',
    certificates: ['ISO 9001', 'CE Marking', 'EN 81-3'],
    relatedProducts: ['ax-900-cargo-elevator'],
    relatedProjects: ['harbour-grand-hotel'],
    seo: {
      title: 'AX-DW Dumbwaiter | Compact Goods Lift',
      description:
        'Compact dumbwaiter goods lift for restaurants, hotels, hospitals and libraries.',
      keywords: ['dumbwaiter', 'goods lift', 'service lift'],
    },
  },
  {
    id: 'p-ax-glasscabin',
    slug: 'ax-clear-glass-cabin-elevator',
    name: 'AX-Clear Glass Cabin Elevator',
    model: 'AX-Clear',
    family: 'elevator',
    category: 'glass-cabin-elevators',
    categoryLabel: 'Glass Cabin Elevators',
    shortDescription:
      'Fully glazed cabin that brings light and openness to lobbies, showrooms and retail spaces.',
    fullDescription:
      'The AX-Clear glass cabin elevator uses laminated safety glass on all sides to create a light, open feel in lobbies and showrooms. It is a refined alternative to a panoramic unit where a fully transparent cabin is desired, engineered for the same ride comfort and safety.',
    featuredImage: '/images/products/glass-cabin-elevator.webp',
    images: [
      '/images/products/glass-cabin-elevator.webp',
      '/images/products/glass-cabin-elevator-2.webp',
      '/images/products/glass-cabin-elevator-3.webp',
    ],
    applications: ['Corporate lobbies', 'Showrooms', 'Retail', 'Galleries'],
    features: [
      { title: 'Full glazing', description: 'Laminated safety glass on all cabin faces.' },
      { title: 'Light & open', description: 'Adds transparency and daylight to interiors.' },
      { title: 'Slim structure', description: 'Minimal framing for a clean architectural look.' },
      { title: 'Comfort engineered', description: 'Smooth ride and precise leveling.' },
    ],
    specHighlights: ['630–1275 kg', 'Full glazing', 'Slim frame'],
    specifications: [
      { label: 'Product type', value: 'Glass cabin passenger elevator' },
      { label: 'Model', value: 'AX-Clear' },
      { label: 'Rated load', value: '630 – 1275 kg' },
      { label: 'Passenger capacity', value: '8 – 17 persons' },
      { label: 'Rated speed', value: '1.0 – 1.75 m/s' },
      { label: 'Max travel height', value: 'Up to 60 m' },
      { label: 'Glazing', value: 'Laminated safety glass' },
      { label: 'Drive type', value: 'Gearless permanent-magnet, VVVF' },
      { label: 'Machine room', value: 'MRL' },
      { label: 'Control system', value: 'Microprocessor' },
      { label: 'Power supply', value: '3-phase 380–415 V, 50/60 Hz' },
      { label: 'Standards', value: 'EN 81-20/50' },
    ],
    options: [
      { group: 'Glazing', items: ['Clear laminated', 'Low-iron glass', 'Tinted'] },
      { group: 'Frame finishes', items: ['Stainless', 'Powder-coated'] },
      { group: 'Flooring', items: ['Stone-effect', 'Glass-effect'] },
      { group: 'Lighting', items: ['LED ceiling', 'Edge lighting'] },
    ],
    safetyFeatures: [
      'Laminated safety glass',
      'Overspeed governor and safety gear',
      'Emergency battery lowering',
      'Door light curtain',
      'Fireman’s emergency return',
    ],
    brochure: '/downloads/brochures/ax-clear-glass.pdf',
    certificates: CERTS,
    relatedProducts: ['ax-glass-panoramic-elevator', 'ax-500-passenger-elevator'],
    relatedProjects: ['grand-central-mall'],
    seo: {
      title: 'AX-Clear Glass Cabin Elevator | Transparent Lift',
      description:
        'Fully glazed glass cabin elevator with laminated safety glass for lobbies, showrooms and retail.',
      keywords: ['glass cabin elevator', 'transparent elevator', 'glass lift'],
    },
  },
  {
    id: 'p-ax-esc-c',
    slug: 'ax-esc-c-commercial-escalator',
    name: 'AX-ESC-C Commercial Escalator',
    model: 'AX-ESC-C',
    family: 'escalator',
    category: 'commercial-escalators',
    categoryLabel: 'Commercial Escalators',
    shortDescription:
      'Reliable commercial escalator with energy-saving modes and comprehensive safety systems for retail and offices.',
    fullDescription:
      'The AX-ESC-C commercial escalator is designed for shopping malls, offices and public buildings. Energy-saving operation modes reduce consumption during quiet periods, while a full suite of safety devices protects passengers during continuous daily use.',
    featuredImage: '/images/products/commercial-escalator.webp',
    images: [
      '/images/products/commercial-escalator.webp',
      '/images/products/commercial-escalator-2.webp',
      '/images/products/commercial-escalator-3.webp',
    ],
    applications: ['Shopping malls', 'Offices', 'Public buildings', 'Showrooms'],
    features: [
      { title: 'Energy-saving modes', description: 'Sensor-triggered slow/stop modes cut consumption off-peak.' },
      { title: 'Comprehensive safety', description: 'Skirt brushes, combplate switches and handrail sensors.' },
      { title: 'Durable step band', description: 'Die-cast aluminium steps for long service life.' },
      { title: 'Flexible geometry', description: '30° or 35° inclination and multiple rises.' },
    ],
    specHighlights: ['30° / 35°', '0.5 m/s', 'Energy-saving'],
    specifications: [
      { label: 'Product type', value: 'Commercial escalator' },
      { label: 'Model', value: 'AX-ESC-C' },
      { label: 'Inclination', value: '30° or 35°' },
      { label: 'Rated speed', value: '0.5 m/s' },
      { label: 'Step width', value: '600 / 800 / 1000 mm' },
      { label: 'Rise', value: 'Up to 6 m (standard)' },
      { label: 'Theoretical capacity', value: 'Up to 6750 persons/hour' },
      { label: 'Drive type', value: 'VVVF geared drive' },
      { label: 'Operation modes', value: 'Continuous, sensor start, standby' },
      { label: 'Power supply', value: '3-phase 380–415 V, 50/60 Hz' },
      { label: 'Standards', value: 'EN 115-1' },
    ],
    options: [
      { group: 'Balustrade', items: ['Glass', 'Stainless steel'] },
      { group: 'Step width', items: ['600 mm', '800 mm', '1000 mm'] },
      { group: 'Lighting', items: ['Skirt lighting', 'Comb lighting', 'Handrail lighting'] },
      { group: 'Operation', items: ['Continuous', 'Sensor start/stop', 'Standby'] },
    ],
    safetyFeatures: [
      'Comb-plate safety switches',
      'Skirt brushes and skirt switches',
      'Handrail entry guards',
      'Emergency stop buttons',
      'Missing-step and over-speed detection',
    ],
    brochure: '/downloads/brochures/ax-esc-c-commercial.pdf',
    certificates: ['ISO 9001', 'ISO 14001', 'CE Marking', 'EN 115-1'],
    relatedProducts: ['ax-esc-h-heavy-duty-escalator', 'ax-mw-moving-walkway'],
    relatedProjects: ['grand-central-mall', 'metro-interchange'],
    featured: true,
    seo: {
      title: 'AX-ESC-C Commercial Escalator | Mall & Office Escalator',
      description:
        'Reliable commercial escalator with energy-saving modes and comprehensive safety systems for malls and offices.',
      keywords: ['commercial escalator', 'mall escalator supplier', 'escalator manufacturer'],
    },
  },
  {
    id: 'p-ax-esc-h',
    slug: 'ax-esc-h-heavy-duty-escalator',
    name: 'AX-ESC-H Heavy-Duty Escalator',
    model: 'AX-ESC-H',
    family: 'escalator',
    category: 'heavy-duty-escalators',
    categoryLabel: 'Heavy-Duty Escalators',
    shortDescription:
      'Public-transport escalator engineered for extended duty cycles, high volumes and demanding environments.',
    fullDescription:
      'The AX-ESC-H heavy-duty escalator is built for metro stations, airports and transit hubs. Reinforced components, robust drives and weather-resistant options support continuous operation under high passenger loads, indoors or in semi-outdoor locations.',
    featuredImage: '/images/products/heavy-duty-escalator.webp',
    images: [
      '/images/products/heavy-duty-escalator.webp',
      '/images/products/heavy-duty-escalator-2.webp',
      '/images/products/heavy-duty-escalator-3.webp',
    ],
    applications: ['Metro & rail stations', 'Airports', 'Transit hubs', 'Stadiums'],
    features: [
      { title: 'Extended duty cycle', description: 'Engineered for near-continuous public-transport use.' },
      { title: 'Reinforced structure', description: 'Heavy-gauge truss and components for high loads.' },
      { title: 'Weather-resistant options', description: 'Semi-outdoor and outdoor configurations available.' },
      { title: 'High capacity', description: 'Wide steps handle peak commuter volumes.' },
    ],
    specHighlights: ['Public transport', 'High capacity', 'Outdoor options'],
    specifications: [
      { label: 'Product type', value: 'Heavy-duty escalator' },
      { label: 'Model', value: 'AX-ESC-H' },
      { label: 'Inclination', value: '30°' },
      { label: 'Rated speed', value: '0.5 – 0.65 m/s' },
      { label: 'Step width', value: '800 / 1000 mm' },
      { label: 'Rise', value: 'Up to 12 m' },
      { label: 'Duty', value: 'Public-transport / heavy duty' },
      { label: 'Drive type', value: 'VVVF geared, reinforced' },
      { label: 'Environment', value: 'Indoor / semi-outdoor / outdoor' },
      { label: 'Power supply', value: '3-phase 380–415 V, 50/60 Hz' },
      { label: 'Standards', value: 'EN 115-1, public-transport specs' },
    ],
    options: [
      { group: 'Environment', items: ['Indoor', 'Semi-outdoor', 'Outdoor'] },
      { group: 'Step width', items: ['800 mm', '1000 mm'] },
      { group: 'Balustrade', items: ['Glass', 'Stainless steel'] },
      { group: 'Monitoring', items: ['Remote diagnostics', 'Fault logging'] },
    ],
    safetyFeatures: [
      'Reinforced comb-plate and skirt safety',
      'Handrail speed monitoring',
      'Auxiliary brake',
      'Emergency stop and access controls',
      'Missing-step and over-speed detection',
    ],
    brochure: '/downloads/brochures/ax-esc-h-heavy-duty.pdf',
    certificates: ['ISO 9001', 'ISO 14001', 'CE Marking', 'EN 115-1'],
    relatedProducts: ['ax-esc-c-commercial-escalator', 'ax-mw-moving-walkway'],
    relatedProjects: ['metro-interchange'],
    featured: true,
    seo: {
      title: 'AX-ESC-H Heavy-Duty Escalator | Transit Escalator',
      description:
        'Heavy-duty escalator for metros, airports and transit hubs, built for high volumes and extended duty cycles.',
      keywords: ['heavy-duty escalator', 'transit escalator', 'metro escalator'],
    },
  },
  {
    id: 'p-ax-mw',
    slug: 'ax-mw-moving-walkway',
    name: 'AX-MW Moving Walkway',
    model: 'AX-MW',
    family: 'moving-walkway',
    category: 'moving-walkways',
    categoryLabel: 'Moving Walkways',
    shortDescription:
      'Horizontal and inclined travelator for airports, malls and exhibition centres, moving people and trolleys smoothly.',
    fullDescription:
      'The AX-MW moving walkway (travelator) transports people, luggage and shopping trolleys across long horizontal or gently inclined distances. Pallet and belt-type configurations suit airports, transport interchanges, malls and exhibition centres.',
    featuredImage: '/images/products/moving-walkway.webp',
    images: [
      '/images/products/moving-walkway.webp',
      '/images/products/moving-walkway-2.webp',
      '/images/products/moving-walkway-3.webp',
    ],
    applications: ['Airports', 'Shopping malls', 'Exhibition centres', 'Transport interchanges'],
    features: [
      { title: 'Trolley-friendly', description: 'Inclined pallet type carries shopping and baggage trolleys safely.' },
      { title: 'Long spans', description: 'Modular design supports long horizontal runs.' },
      { title: 'Energy-saving modes', description: 'Sensor-triggered operation reduces off-peak consumption.' },
      { title: 'Comprehensive safety', description: 'Comb, skirt and handrail safety systems.' },
    ],
    specHighlights: ['0° – 12°', '0.5 m/s', 'Trolley-friendly'],
    specifications: [
      { label: 'Product type', value: 'Moving walkway / travelator' },
      { label: 'Model', value: 'AX-MW' },
      { label: 'Inclination', value: '0° (horizontal) to 12° (inclined)' },
      { label: 'Rated speed', value: '0.5 – 0.65 m/s' },
      { label: 'Pallet width', value: '800 / 1000 / 1200 mm' },
      { label: 'Length', value: 'Modular, project-specific' },
      { label: 'Type', value: 'Pallet or belt' },
      { label: 'Drive type', value: 'VVVF geared drive' },
      { label: 'Operation modes', value: 'Continuous, sensor start, standby' },
      { label: 'Power supply', value: '3-phase 380–415 V, 50/60 Hz' },
      { label: 'Standards', value: 'EN 115-1' },
    ],
    options: [
      { group: 'Type', items: ['Horizontal', 'Inclined (trolley)'] },
      { group: 'Pallet width', items: ['800 mm', '1000 mm', '1200 mm'] },
      { group: 'Balustrade', items: ['Glass', 'Stainless steel'] },
      { group: 'Operation', items: ['Continuous', 'Sensor start/stop', 'Standby'] },
    ],
    safetyFeatures: [
      'Comb-plate safety switches',
      'Skirt brushes and switches',
      'Handrail entry guards',
      'Emergency stop buttons',
      'Trolley-lock system (inclined type)',
    ],
    brochure: '/downloads/brochures/ax-mw-moving-walkway.pdf',
    certificates: ['ISO 9001', 'ISO 14001', 'CE Marking', 'EN 115-1'],
    relatedProducts: ['ax-esc-c-commercial-escalator', 'ax-esc-h-heavy-duty-escalator'],
    relatedProjects: ['grand-central-mall', 'metro-interchange'],
    featured: true,
    seo: {
      title: 'AX-MW Moving Walkway | Travelator Solutions',
      description:
        'Horizontal and inclined moving walkways for airports, malls and exhibition centres.',
      keywords: ['moving walkway', 'travelator', 'airport walkway'],
    },
  },
];

/* ------------------------------- accessors ------------------------------- */

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);

export const getProductsByFamily = (family: ProductFamily) =>
  products.filter((p) => p.family === family);

export const getFeaturedProducts = () => products.filter((p) => p.featured);

export const getRelatedProducts = (slugs: string[]) =>
  slugs.map((s) => products.find((p) => p.slug === s)).filter(Boolean) as Product[];
