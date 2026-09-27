import { PackageOpen, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

/** Shown when a filtered list returns no results. */
export function EmptyState({
  title = 'No results found',
  description = 'Try adjusting your filters or search terms.',
  action,
}: {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-card border border-dashed border-line bg-surface px-6 py-16 text-center">
      <PackageOpen className="h-10 w-10 text-brand-600" aria-hidden />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="prose-body mt-1 max-w-sm">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

/** Inline error message with a status role for screen readers. */
export function ErrorMessage({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      role="alert"
      className={cn(
        'flex items-start gap-2 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800',
        className,
      )}
    >
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <span>{children}</span>
    </div>
  );
}

/** Simple content skeleton for loading states. */
export function LoadingSkeleton({ className }: { className?: string }) {
  return <div className={cn('animate-pulse rounded-md bg-line/70', className)} aria-hidden />;
}

export function CardSkeleton() {
  return (
    <div className="overflow-hidden rounded-card border border-line">
      <LoadingSkeleton className="aspect-[4/3] w-full rounded-none" />
      <div className="space-y-3 p-5">
        <LoadingSkeleton className="h-3 w-20" />
        <LoadingSkeleton className="h-5 w-3/4" />
        <LoadingSkeleton className="h-4 w-full" />
        <LoadingSkeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}
