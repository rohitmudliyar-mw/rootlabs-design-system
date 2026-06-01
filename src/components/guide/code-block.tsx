import { cn } from "@/lib/utils";

/**
 * CodeBlock — a dark, monospace panel for commands and snippets.
 * `label` shows a quiet caption above the block (e.g. "Terminal").
 */
export function CodeBlock({
  children,
  label,
  className,
}: {
  children: React.ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-ink bg-ink", className)}>
      {label && (
        <div className="border-b border-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#aeb6a8]">
          {label}
        </div>
      )}
      <pre className="overflow-x-auto px-4 py-4 text-[13.5px] leading-[1.7] text-[#eef1ea]">
        <code className="font-mono">{children}</code>
      </pre>
    </div>
  );
}
