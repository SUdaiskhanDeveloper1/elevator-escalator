import { NextResponse } from 'next/server';
import { inquirySchema } from '@/lib/schema';
import { siteConfig } from '@/data/site.config';

/**
 * Inquiry submission endpoint.
 *
 * Security:
 *  - Server-side validation with the same Zod schema used on the client.
 *  - Honeypot field (`companyWebsite`) must be empty.
 *  - Optional Cloudflare Turnstile verification when keys are configured.
 *  - SMTP credentials are read from env on the server only — never exposed
 *    to the browser.
 *
 * Delivery:
 *  - Emails the sales inbox via nodemailer when SMTP is configured.
 *  - If SMTP is not configured (e.g. local dev), the inquiry is logged and a
 *    success response is returned so the UX can be tested end-to-end.
 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.errors[0]?.message ?? 'Validation failed.';
    return NextResponse.json({ ok: false, error: first }, { status: 422 });
  }

  const data = parsed.data;

  // Honeypot — bots tend to fill hidden fields.
  if (data.companyWebsite && data.companyWebsite.length > 0) {
    // Pretend success to avoid signalling the trap.
    return NextResponse.json({ ok: true });
  }

  // Optional Turnstile verification.
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    if (!data.turnstileToken) {
      return NextResponse.json({ ok: false, error: 'Please complete the anti-spam check.' }, { status: 400 });
    }
    try {
      const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ secret: turnstileSecret, response: data.turnstileToken }),
      });
      const result = (await verify.json()) as { success: boolean };
      if (!result.success) {
        return NextResponse.json({ ok: false, error: 'Anti-spam verification failed.' }, { status: 400 });
      }
    } catch {
      return NextResponse.json({ ok: false, error: 'Could not verify anti-spam check.' }, { status: 502 });
    }
  }

  const recipient = process.env.INQUIRY_RECIPIENT_EMAIL || siteConfig.contact.salesEmail;
  const summary = [
    `New inquiry from the ${siteConfig.name} website`,
    '',
    `Name:            ${data.name}`,
    `Company:         ${data.company || '—'}`,
    `Email:           ${data.email}`,
    `Phone/WhatsApp:  ${data.phone}`,
    `Country:         ${data.country}`,
    `Product:         ${data.productInterest}`,
    `Selected product:${data.selectedProduct || '—'}`,
    `Project type:    ${data.projectType || '—'}`,
    `Floors/stops:    ${data.stops || '—'}`,
    `Quantity:        ${data.quantity || '—'}`,
    `Source page:     ${data.sourcePage || '—'}`,
    '',
    'Message:',
    data.message,
  ].join('\n');

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM } = process.env;

  if (SMTP_HOST && SMTP_USER && SMTP_PASSWORD) {
    try {
      // Dynamic import keeps nodemailer out of any client bundle.
      const nodemailer = (await import('nodemailer')).default;
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT) || 587,
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
      });
      await transporter.sendMail({
        from: SMTP_FROM || `Website <no-reply@${new URL(siteConfig.url).hostname}>`,
        to: recipient,
        replyTo: data.email,
        subject: `Website inquiry — ${data.productInterest} (${data.country})`,
        text: summary,
      });
    } catch (err) {
      console.error('[inquiry] email send failed:', err);
      return NextResponse.json(
        { ok: false, error: 'We could not send your inquiry right now. Please email us directly or try again shortly.' },
        { status: 502 },
      );
    }
  } else {
    // No SMTP configured — log so local/dev submissions are still observable.
    console.info('[inquiry] SMTP not configured; inquiry received:\n' + summary);
  }

  // TODO: optionally persist to a database / CMS here (see Inquiry data model).

  return NextResponse.json({ ok: true });
}
