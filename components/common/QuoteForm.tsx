'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, CheckCircle2, Send } from 'lucide-react';
import { inquirySchema, inquiryDefaults, type InquiryInput } from '@/lib/schema';
import { products } from '@/data/products';
import { ErrorMessage } from '@/components/ui/States';
import { cn } from '@/lib/utils';

const PROJECT_TYPES = ['New building', 'Modernization / retrofit', 'Distribution / resale', 'Maintenance contract', 'Other'];

interface Props {
  /** Pre-select a product (used by the product inquiry modal). */
  selectedProduct?: string;
  sourcePage?: string;
  /** Compact hides the optional fields for tighter placements (e.g. modal). */
  compact?: boolean;
  className?: string;
}

export function QuoteForm({ selectedProduct, sourcePage = 'quote-form', compact = false, className }: Props) {
  const [submitState, setSubmitState] = useState<'idle' | 'error'>('idle');
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      ...inquiryDefaults,
      productInterest: selectedProduct ?? '',
      selectedProduct,
      sourcePage,
      consent: false as unknown as true,
    },
  });

  const onSubmit = async (data: InquiryInput) => {
    setServerError(null);
    setSubmitState('idle');
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Something went wrong. Please try again.');
      }
      setSubmitted(true);
      reset();
    } catch (err) {
      setSubmitState('error');
      setServerError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={cn('flex flex-col items-center rounded-card border border-green-200 bg-green-50 p-8 text-center', className)}
      >
        <CheckCircle2 className="h-12 w-12 text-green-600" aria-hidden />
        <h3 className="mt-4 text-xl font-semibold text-green-900">Thank you — your inquiry has been sent.</h3>
        <p className="mt-2 max-w-md text-sm text-green-800">
          Our team will review your requirements and respond within one business day. For urgent enquiries, reach us on WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm font-semibold text-green-800 underline underline-offset-4"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={cn('space-y-4', className)}>
      {selectedProduct && (
        <p className="rounded-md bg-brand-50 px-3 py-2 text-sm text-brand-800">
          Inquiry about: <span className="font-semibold">{selectedProduct}</span>
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" required error={errors.name?.message}>
          <input type="text" autoComplete="name" {...register('name')} className={inputCls(!!errors.name)} />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <input type="text" autoComplete="organization" {...register('company')} className={inputCls(!!errors.company)} />
        </Field>
        <Field label="Email" required error={errors.email?.message}>
          <input type="email" autoComplete="email" {...register('email')} className={inputCls(!!errors.email)} />
        </Field>
        <Field label="Phone / WhatsApp" required error={errors.phone?.message}>
          <input type="tel" autoComplete="tel" {...register('phone')} className={inputCls(!!errors.phone)} />
        </Field>
        <Field label="Country" required error={errors.country?.message}>
          <input type="text" autoComplete="country-name" {...register('country')} className={inputCls(!!errors.country)} />
        </Field>
        <Field label="Product interest" required error={errors.productInterest?.message}>
          <select {...register('productInterest')} className={inputCls(!!errors.productInterest)}>
            <option value="">Select a product…</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Not sure / need advice">Not sure / need advice</option>
          </select>
        </Field>

        {!compact && (
          <>
            <Field label="Project type" error={errors.projectType?.message}>
              <select {...register('projectType')} className={inputCls(!!errors.projectType)}>
                <option value="">Select…</option>
                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Floors / stops" error={errors.stops?.message}>
              <input type="text" inputMode="numeric" placeholder="e.g. 12" {...register('stops')} className={inputCls(!!errors.stops)} />
            </Field>
            <Field label="Estimated quantity" error={errors.quantity?.message}>
              <input type="text" inputMode="numeric" placeholder="e.g. 4 units" {...register('quantity')} className={inputCls(!!errors.quantity)} />
            </Field>
          </>
        )}
      </div>

      <Field label="Message / project details" required error={errors.message?.message}>
        <textarea rows={compact ? 3 : 4} {...register('message')} className={textareaCls(!!errors.message)} />
      </Field>

      {/* Honeypot — visually hidden, must stay empty */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden" tabIndex={-1}>
        <label>
          Company website
          <input type="text" tabIndex={-1} autoComplete="off" {...register('companyWebsite')} />
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" {...register('consent')} className="mt-0.5 h-4 w-4 rounded border-line text-brand-700 focus:ring-accent" />
        <span>
          I agree that my details may be used to respond to my inquiry, in line with the{' '}
          <a href="/privacy" className="font-medium text-brand-700 underline underline-offset-2">
            privacy policy
          </a>
          . <span className="text-red-600">*</span>
        </span>
      </label>
      {errors.consent && <p className="text-sm text-red-600">{errors.consent.message}</p>}

      {submitState === 'error' && serverError && <ErrorMessage>{serverError}</ErrorMessage>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-6 text-base font-semibold text-brand-900 transition-colors hover:bg-accent-600 focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden /> Send Inquiry
          </>
        )}
      </button>
      <p className="text-center text-xs text-muted">
        We typically respond within one business day. Your details are never shared.
      </p>
    </form>
  );
}

const baseInput =
  'w-full rounded-md border bg-white px-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20';

function inputCls(hasError: boolean) {
  return cn('h-11', baseInput, hasError ? 'border-red-400' : 'border-line');
}

function textareaCls(hasError: boolean) {
  return cn('py-2.5', baseInput, hasError ? 'border-red-400' : 'border-line');
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">
        {label} {required && <span className="text-red-600">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
