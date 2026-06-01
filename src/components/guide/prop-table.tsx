export type PropRow = {
  prop: string;
  type: string;
  default?: string;
  desc: string;
};

/**
 * PropTable, renders a component's props as a reference table.
 * Scrolls horizontally on small screens so the dense columns stay readable.
 */
export function PropTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-hair">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr className="bg-bone-2/60">
            {["Prop", "Type", "Default", "Description"].map((h) => (
              <th
                key={h}
                className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-ink-3"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.prop} className="border-t border-hair align-top">
              <td className="px-4 py-3">
                <code className="font-mono text-[13px] font-semibold text-ink">
                  {r.prop}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="font-mono text-[12.5px] text-berry">
                  {r.type}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="font-mono text-[12.5px] text-ink-3">
                  {r.default ?? "–"}
                </code>
              </td>
              <td className="px-4 py-3 text-[14px] leading-[1.5] text-ink-2">
                {r.desc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
