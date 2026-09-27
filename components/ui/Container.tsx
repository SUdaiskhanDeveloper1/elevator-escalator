import { cn } from '@/lib/utils';

/** Consistent max-width + horizontal padding wrapper used across sections. */
export function Container({
  className,
  children,
  as: Tag = 'div',
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return (
    <Tag className={cn('mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8', className)}>
      {children}
    </Tag>
  );
}
