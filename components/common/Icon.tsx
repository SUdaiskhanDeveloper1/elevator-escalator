import {
  Award,
  Wrench,
  FlaskConical,
  ShieldCheck,
  Globe2,
  Headset,
  type LucideIcon,
  HelpCircle,
} from 'lucide-react';

/** Maps the icon-name strings used in data files to lucide components. */
const MAP: Record<string, LucideIcon> = {
  Award,
  Wrench,
  FlaskConical,
  ShieldCheck,
  Globe2,
  Headset,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = MAP[name] ?? HelpCircle;
  return <Cmp className={className} aria-hidden />;
}
