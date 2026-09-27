import { cn } from '@/lib/utils';

/** Small spec / category chip. */
export function Badge({
  children,
  variant = 'default',
  className,
}: {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}) {
  const styles = {
    default: 'bg-brand-50 text-brand-700',
    accent: 'bg-accent/15 text-accent-700',
    outline: 'border border-line text-muted',
  }[variant];
  return (
    <span
      className={cn(
        'inline-flex items-center rounded px-2.5 py-1 text-xs font-medium',
        styles,
        className,
      )}
    >
      {children}
    </span>
  );
}
