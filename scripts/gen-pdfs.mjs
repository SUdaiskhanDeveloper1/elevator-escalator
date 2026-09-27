/**
 * Generates minimal valid placeholder PDF files for every document referenced
 * in data/certificates.ts and data/products.ts, so download links resolve
 * instead of 404-ing. Replace these with the client's real documents.
 * Run: node scripts/gen-pdfs.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', 'public', 'downloads');

/** Build a tiny, valid single-page PDF containing one line of text. */
function makePdf(title) {
  const text = `${title}  —  SAMPLE / PLACEHOLDER DOCUMENT`;
  const content = `BT /F1 16 Tf 60 760 Td (${text.replace(/([()\\])/g, '\\$1')}) Tj ET`;
  const objects = [];
  objects.push('<< /Type /Catalog /Pages 2 0 R >>');
  objects.push('<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
  objects.push('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>');
  objects.push(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
  objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');

  let pdf = '%PDF-1.4\n';
  const offsets = [];
  objects.forEach((obj, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
  });
  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.forEach((off) => {
    pdf += `${String(off).padStart(10, '0')} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
  return pdf;
}

const files = [
  ['brochures/company-profile.pdf', 'Ascendix Company Profile'],
  ['brochures/company-profile-ar.pdf', 'Ascendix Company Profile (Arabic)'],
  ['brochures/ax-500-passenger.pdf', 'AX-500 Passenger Elevator Brochure'],
  ['brochures/ax-720-hospital.pdf', 'AX-720 Hospital Elevator Brochure'],
  ['brochures/ax-900-cargo.pdf', 'AX-900 Cargo Elevator Brochure'],
  ['brochures/ax-glass-panoramic.pdf', 'AX-Glass Panoramic Elevator Brochure'],
  ['brochures/ax-villa-home.pdf', 'AX-Villa Home Elevator Brochure'],
  ['brochures/ax-wood-cabin.pdf', 'AX-Wood Cabin Elevator Brochure'],
  ['brochures/ax-dw-dumbwaiter.pdf', 'AX-DW Dumbwaiter Brochure'],
  ['brochures/ax-clear-glass.pdf', 'AX-Clear Glass Cabin Elevator Brochure'],
  ['brochures/ax-esc-c-commercial.pdf', 'AX-ESC-C Commercial Escalator Brochure'],
  ['brochures/ax-esc-h-heavy-duty.pdf', 'AX-ESC-H Heavy-Duty Escalator Brochure'],
  ['brochures/ax-mw-moving-walkway.pdf', 'AX-MW Moving Walkway Brochure'],
  ['certificates/iso-9001.pdf', 'ISO 9001 Certificate'],
  ['certificates/iso-14001.pdf', 'ISO 14001 Certificate'],
  ['certificates/ce-marking.pdf', 'CE Marking Declaration'],
  ['catalogs/escalators-walkways.pdf', 'Escalator & Walkway Technical Catalog'],
  ['guides/installation-guide.pdf', 'Installation & Site Preparation Guide'],
];

let count = 0;
for (const [path, title] of files) {
  const out = join(ROOT, path);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, makePdf(title), 'latin1');
  count++;
}
console.log(`Generated ${count} placeholder PDFs into public/downloads`);
