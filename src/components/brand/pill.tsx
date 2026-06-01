import { cn } from "@/lib/utils";

/**
 * Pill, small uppercase tag. Used for certifications, "yes/no" markers,
 * and offer chips. Color carries meaning, never decoration.
 */
export function Pill({
  className,
  tone = "neutral",
  ...props
}: React.ComponentProps<"span"> & {
  tone?: "green" | "neutral" | "yes" | "no" | "berry";
}) {
  const tones = {
    green: "bg-green text-white",
    yes: "bg-green text-white",
    neutral: "bg-bone-2 text-ink-2 border border-hair",
    no: "bg-surface text-warn border border-[#dcc7c3]",
    berry: "bg-berry text-white",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.13em]",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
