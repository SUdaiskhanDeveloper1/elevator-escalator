import { FileText, Download, ExternalLink } from 'lucide-react';
import type { Certificate } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';

/** Download / certificate row card. Opens the document in a new tab. */
export function CertificateCard({ item }: { item: Certificate }) {
  return (
    <article className="flex items-start gap-4 rounded-card border border-line bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-700">
        <FileText className="h-6 w-6" aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">{item.category}</Badge>
          <Badge variant="outline">{item.language}</Badge>
        </div>
        <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
        <p className="prose-body mt-1 text-sm">{item.description}</p>
        <p className="mt-2 text-xs text-muted">
          {item.fileType} · {item.fileSize} · Issued {formatDate(item.issuedAt)}
        </p>
        <a
          href={item.file}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline mt-3 text-sm"
          aria-label={`Download ${item.title} (${item.fileType}, ${item.fileSize}, opens in a new tab)`}
        >
          <Download className="h-4 w-4" aria-hidden />
          Download
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      </div>
    </article>
  );
}
