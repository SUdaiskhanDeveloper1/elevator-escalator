import { Icon } from './Icon';

/** Value-proposition / why-choose-us card with a technical icon. */
export function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="rounded-card border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-700">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="prose-body mt-2 text-sm">{description}</p>
    </div>
  );
}
