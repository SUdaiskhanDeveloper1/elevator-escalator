/**
 * SAMPLE / PLACEHOLDER company content: statistics, value propositions, the
 * sales & service process, history timeline and FAQs. All figures are
 * illustrative sample data — verify and replace before launch.
 */

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 20, suffix: '+', label: 'Years of experience' },
  { value: 1200, suffix: '+', label: 'Completed projects' },
  { value: 38, suffix: '+', label: 'Export markets' },
  { value: 100, suffix: '%', label: 'Units safety-inspected' },
  { value: 24, suffix: '/7', label: 'Customer support' },
];

export interface ValueProp {
  icon: string; // lucide-react icon name
  title: string;
  description: string;
}

export const valueProps: ValueProp[] = [
  {
    icon: 'Award',
    title: 'Industry Experience',
    description:
      'Two decades of designing and delivering vertical-transport systems across residential, commercial and industrial projects.',
  },
  {
    icon: 'Wrench',
    title: 'Complete Sales & Service System',
    description:
      'A structured process from consultation and engineering through installation, commissioning and long-term maintenance.',
  },
  {
    icon: 'FlaskConical',
    title: 'Engineering & R&D',
    description:
      'In-house engineering and a dedicated R&D laboratory focused on ride quality, efficiency and predictive maintenance.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Quality & Safety Control',
    description:
      'Every unit is engineered to recognised safety standards and inspected before handover, with full documentation.',
  },
  {
    icon: 'Globe2',
    title: 'International Project Support',
    description:
      'Export experience and multilingual support for developers, contractors and distributors across many markets.',
  },
  {
    icon: 'Headset',
    title: 'Responsive After-Sales Service',
    description:
      'A growing regional service network with trained engineers, spare-parts stock and 24/7 support.',
  },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { step: 1, title: 'Requirement Consultation', description: 'We understand your building, traffic profile and design goals.' },
  { step: 2, title: 'Technical Assessment', description: 'Our engineers assess shaft, load, speed and code requirements.' },
  { step: 3, title: 'Proposal & Quotation', description: 'You receive a clear specification, drawings and transparent pricing.' },
  { step: 4, title: 'Engineering Confirmation', description: 'Final layouts, finishes and interfaces are confirmed and documented.' },
  { step: 5, title: 'Production & Inspection', description: 'Units are manufactured to specification and inspected before dispatch.' },
  { step: 6, title: 'Delivery', description: 'Coordinated logistics deliver equipment to site on programme.' },
  { step: 7, title: 'Installation Guidance', description: 'We support your contractor with installation and site coordination.' },
  { step: 8, title: 'Commissioning & After-Sales', description: 'Testing, handover, training and ongoing maintenance support.' },
];

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  { year: '2004', title: 'Founded', description: 'Ascendix is established to manufacture reliable vertical-transport systems.' },
  { year: '2009', title: 'Escalator range launched', description: 'Commercial escalators and moving walkways added to the portfolio.' },
  { year: '2014', title: 'International expansion', description: 'Exports begin across the Middle East, Africa and South Asia.' },
  { year: '2019', title: 'MRL & regenerative drives', description: 'Machine-room-less passenger elevators with regenerative drives introduced.' },
  { year: '2024', title: 'R&D laboratory', description: 'New R&D facility focused on ride quality and predictive maintenance opens.' },
];

export const coreValues = [
  { title: 'Safety First', description: 'Safety is engineered into every product and process, without compromise.' },
  { title: 'Engineering Integrity', description: 'We build durable, standards-compliant systems designed to last.' },
  { title: 'Customer Partnership', description: 'We support customers from first consultation through the equipment’s life.' },
  { title: 'Continuous Improvement', description: 'We invest in R&D to keep improving efficiency, comfort and reliability.' },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'Which markets does Ascendix serve?',
    answer:
      'Ascendix supports projects across the Middle East, Africa and South Asia, and works with distributors and importers in additional markets. Contact our team to confirm coverage for your location.',
  },
  {
    question: 'Can you supply equipment for both new builds and modernizations?',
    answer:
      'Yes. We supply complete systems for new buildings and offer modernization solutions to upgrade the drives, controls, cabins and safety systems of existing equipment.',
  },
  {
    question: 'Do your products meet international safety standards?',
    answer:
      'Our elevators are engineered to the EN 81-20/50 series and our escalators and walkways to EN 115-1, with quality and environmental management aligned to ISO 9001 and ISO 14001. Confirm the exact standards required for your jurisdiction with our team.',
  },
  {
    question: 'How do I request a quotation?',
    answer:
      'Use the “Get a Quote” form on any page, contact us on WhatsApp, or email our sales team. Share your building type, number of stops, load and speed requirements, and we will prepare a proposal.',
  },
  {
    question: 'Do you provide installation and after-sales maintenance?',
    answer:
      'Yes. We provide installation guidance, commissioning, operator training and structured preventive-maintenance programmes through our regional service network.',
  },
  {
    question: 'What information do you need to prepare an accurate proposal?',
    answer:
      'Helpful details include building type, number of stops/floors, travel height, required load and speed, shaft dimensions if available, and any architectural drawings or finish preferences.',
  },
];
