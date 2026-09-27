import { z } from 'zod';

/**
 * Inquiry / Quote form validation schema. Shared by React Hook Form on the
 * client and the API route on the server so validation rules never drift.
 */
export const inquirySchema = z.object({
  name: z.string().min(2, 'Please enter your full name.').max(120),
  company: z.string().max(160).optional().or(z.literal('')),
  email: z.string().email('Please enter a valid email address.'),
  phone: z
    .string()
    .min(6, 'Please enter a valid phone or WhatsApp number.')
    .max(40),
  country: z.string().min(2, 'Please tell us your country.').max(80),
  productInterest: z.string().min(1, 'Please select a product of interest.'),
  projectType: z.string().max(80).optional().or(z.literal('')),
  stops: z.string().max(40).optional().or(z.literal('')),
  quantity: z.string().max(40).optional().or(z.literal('')),
  message: z.string().min(10, 'Please add a few details about your project.').max(4000),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Please accept the privacy policy to continue.' }),
  }),
  selectedProduct: z.string().optional(),
  sourcePage: z.string().optional(),
  // Honeypot — must stay empty. Bots tend to fill every field.
  companyWebsite: z.string().max(0, 'Spam detected.').optional().or(z.literal('')),
  // Optional Turnstile token (validated server-side when configured).
  turnstileToken: z.string().optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export const inquiryDefaults: Partial<InquiryInput> = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  productInterest: '',
  projectType: '',
  stops: '',
  quantity: '',
  message: '',
  companyWebsite: '',
};
