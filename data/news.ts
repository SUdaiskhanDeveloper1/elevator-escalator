import type { Article } from '@/lib/types';

/**
 * SAMPLE / PLACEHOLDER news articles. All copy below is original sample content
 * created for this build. Replace with the client's real announcements before
 * launch.
 */

export const articles: Article[] = [
  {
    id: 'n-global-expansion',
    slug: 'expanding-service-across-new-markets',
    title: 'Ascendix Expands Service Coverage Across New Markets',
    excerpt:
      'We are growing our regional service network to bring faster installation support and after-sales response to more customers.',
    body: [
      'As part of our ongoing commitment to reliable after-sales support, Ascendix is expanding its regional service network across several new markets. The expansion adds trained field engineers, local spare-parts stock and faster response times for maintenance and modernization work.',
      'For developers and building owners, a denser service network means shorter downtime and more predictable maintenance planning. Our teams work to internationally recognised safety standards and follow structured preventive-maintenance schedules tailored to each building’s usage profile.',
      'This is a sample announcement created to demonstrate the news module. Replace it with your organisation’s real updates before launch.',
    ],
    category: 'Company',
    featuredImage: '/images/news/global-expansion.webp',
    author: 'Ascendix Communications',
    publishedAt: '2025-05-14',
    featured: true,
    seo: {
      title: 'Ascendix Expands Service Coverage Across New Markets',
      description:
        'Ascendix is expanding its regional service network to deliver faster installation support and after-sales response.',
    },
  },
  {
    id: 'n-energy-efficiency',
    slug: 'regenerative-drives-cutting-building-energy-use',
    title: 'How Regenerative Drives Cut Building Energy Use',
    excerpt:
      'Regenerative elevator drives feed braking energy back to the building supply. Here is how that translates into lower running costs.',
    body: [
      'Elevators spend a significant part of their duty cycle braking — for example, when a lightly loaded car travels up or a heavily loaded car travels down. Regenerative drives capture the energy produced during braking and feed it back into the building’s electrical supply instead of dissipating it as heat.',
      'Combined with efficient gearless permanent-magnet motors, LED cabin lighting and standby modes, regenerative operation can meaningfully reduce an elevator’s energy consumption over its service life, supporting green-building targets.',
      'This is a sample educational article created to demonstrate the news module. Figures should be validated for each project before being quoted to customers.',
    ],
    category: 'Technology',
    featuredImage: '/images/news/energy-efficiency.webp',
    author: 'Ascendix Engineering',
    publishedAt: '2025-03-02',
    seo: {
      title: 'How Regenerative Drives Cut Building Energy Use',
      description:
        'An overview of how regenerative elevator drives capture braking energy and reduce building running costs.',
    },
  },
  {
    id: 'n-safety-standards',
    slug: 'understanding-en81-elevator-safety-standards',
    title: 'Understanding EN 81 Elevator Safety Standards',
    excerpt:
      'A plain-language introduction to the EN 81-20/50 standards and what they mean for elevator safety and compliance.',
    body: [
      'The EN 81 series sets out safety requirements for the construction and installation of lifts. EN 81-20 covers design and installation requirements, while EN 81-50 defines the design rules, calculations and testing of lift components.',
      'For building owners and specifiers, choosing equipment engineered to these standards helps ensure consistent safety features — such as protective devices, door systems and emergency provisions — and supports smoother inspection and compliance.',
      'This is a sample educational article created to demonstrate the news module. Always confirm the applicable standards and local regulations for your jurisdiction.',
    ],
    category: 'Compliance',
    featuredImage: '/images/news/safety-standards.webp',
    author: 'Ascendix Quality',
    publishedAt: '2025-01-20',
    seo: {
      title: 'Understanding EN 81 Elevator Safety Standards',
      description:
        'A plain-language introduction to EN 81-20/50 elevator safety standards and what they mean for compliance.',
    },
  },
  {
    id: 'n-rd-lab',
    slug: 'new-research-and-development-laboratory',
    title: 'Ascendix Opens New Research & Development Laboratory',
    excerpt:
      'Our new R&D laboratory focuses on ride quality, drive efficiency and predictive-maintenance technology.',
    body: [
      'Ascendix has opened a new research and development laboratory dedicated to improving ride comfort, drive efficiency and connected maintenance. The facility supports testing of control algorithms, vibration analysis and component durability.',
      'A key focus is predictive maintenance: using operating data to anticipate service needs before they cause downtime, helping building owners keep equipment available and safe.',
      'This is a sample announcement created to demonstrate the news module. Replace it with your organisation’s real updates before launch.',
    ],
    category: 'Innovation',
    featuredImage: '/images/news/rd-lab.webp',
    author: 'Ascendix Communications',
    publishedAt: '2024-11-08',
    seo: {
      title: 'Ascendix Opens New Research & Development Laboratory',
      description:
        'A new R&D laboratory focused on ride quality, drive efficiency and predictive-maintenance technology.',
    },
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);

export const getFeaturedArticle = () =>
  articles.find((a) => a.featured) ?? articles[0];

export const getLatestArticles = (count = 3) =>
  [...articles]
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, count);

export const newsCategories = () =>
  Array.from(new Set(articles.map((a) => a.category))).sort();

export const getRelatedArticles = (slug: string, count = 2) =>
  articles.filter((a) => a.slug !== slug).slice(0, count);
