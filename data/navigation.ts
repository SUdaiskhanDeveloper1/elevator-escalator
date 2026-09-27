/** Navigation model — drives both desktop mega-menu and mobile nav. */

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  columns?: { heading: string; items: NavChild[] }[];
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Elevators',
    href: '/products?family=elevator',
    columns: [
      {
        heading: 'By Application',
        items: [
          { label: 'Passenger Elevators', href: '/products/passenger-elevators', description: 'Comfortable, efficient vertical transport' },
          { label: 'Hospital Elevators', href: '/products/hospital-elevators', description: 'Stretcher-ready medical mobility' },
          { label: 'Cargo Elevators', href: '/products/cargo-elevators', description: 'Heavy-load freight handling' },
          { label: 'Home / Villa Elevators', href: '/products/home-elevators', description: 'Compact residential lifts' },
        ],
      },
      {
        heading: 'By Design',
        items: [
          { label: 'Panoramic Elevators', href: '/products/panoramic-elevators', description: 'Glass observation cabins' },
          { label: 'Glass Cabin Elevators', href: '/products/glass-cabin-elevators', description: 'Architectural transparency' },
          { label: 'Wood Cabin Elevators', href: '/products/wood-cabin-elevators', description: 'Premium interior finishes' },
          { label: 'Dumbwaiters', href: '/products/dumbwaiters', description: 'Compact goods lifts' },
        ],
      },
    ],
  },
  {
    label: 'Escalators',
    href: '/escalators',
    children: [
      { label: 'Commercial Escalators', href: '/products/commercial-escalators', description: 'Malls, transit and offices' },
      { label: 'Heavy-Duty Escalators', href: '/products/heavy-duty-escalators', description: 'High-traffic public transport' },
      { label: 'Moving Walkways', href: '/moving-walkways', description: 'Horizontal and inclined travelators' },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    children: [
      { label: 'All Projects', href: '/projects' },
      { label: 'By Country', href: '/projects?group=country' },
      { label: 'By Application', href: '/projects?group=building' },
      { label: 'By Product Type', href: '/projects?group=product' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Company Profile', href: '/about#profile' },
      { label: 'Why Choose Us', href: '/about#why-us' },
      { label: 'Sales & Service System', href: '/about#process' },
      { label: 'Certificates & Downloads', href: '/downloads' },
      { label: 'News', href: '/news' },
    ],
  },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

/** Footer link groups. */
export const footerNav = {
  products: {
    heading: 'Products',
    links: [
      { label: 'Passenger Elevators', href: '/products/passenger-elevators' },
      { label: 'Hospital Elevators', href: '/products/hospital-elevators' },
      { label: 'Cargo Elevators', href: '/products/cargo-elevators' },
      { label: 'Home Elevators', href: '/products/home-elevators' },
      { label: 'Escalators', href: '/escalators' },
      { label: 'Moving Walkways', href: '/moving-walkways' },
    ],
  },
  company: {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Why Choose Us', href: '/about#why-us' },
      { label: 'Sales & Service', href: '/about#process' },
      { label: 'News', href: '/news' },
      { label: 'Downloads', href: '/downloads' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  projects: {
    heading: 'Projects',
    links: [
      { label: 'All Projects', href: '/projects' },
      { label: 'Commercial', href: '/projects?building=commercial' },
      { label: 'Healthcare', href: '/projects?building=healthcare' },
      { label: 'Hospitality', href: '/projects?building=hospitality' },
      { label: 'Residential', href: '/projects?building=residential' },
    ],
  },
};

export const legalNav = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Sitemap', href: '/sitemap.xml' },
];
