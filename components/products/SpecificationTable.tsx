import type { SpecRow } from '@/lib/types';

/** Responsive specification table — scrolls horizontally on very small screens. */
export function SpecificationTable({ rows }: { rows: SpecRow[] }) {
  return (
    <div className="overflow-x-auto rounded-card border border-line">
      <table className="w-full min-w-[360px] border-collapse text-sm">
        <caption className="sr-only">Technical specifications</caption>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-surface'}>
              <th scope="row" className="w-1/2 border-b border-line px-4 py-3 text-left font-medium text-ink">
                {row.label}
              </th>
              <td className="border-b border-line px-4 py-3 text-muted">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
