import { cn } from '@/lib/utils';

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

/** Consistent section header: uppercase eyebrow + strong architectural title. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  as: Heading = 'h2',
}: Props) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Heading
        className={cn(
          Heading === 'h1' ? 'text-fluid-h1' : 'text-fluid-h2',
        )}
      >
        {title}
      </Heading>
      {description && <p className="prose-body mt-4">{description}</p>}
    </div>
  );
}
