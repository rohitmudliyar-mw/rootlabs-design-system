import { cn } from "@/lib/utils";

/**
 * Card, the workhorse surface. 18px radius, single hairline border,
 * almost-invisible shadow. Premium reads as restraint.
 */
export function Card({
  className,
  tone = "surface",
  ...props
}: React.ComponentProps<"div"> & {
  tone?: "surface" | "mist" | "ink" | "berry";
}) {
  const tones = {
    surface: "bg-surface border-hair text-ink",
    mist: "bg-green-mist border-[#d7e2cd] text-ink",
    ink: "bg-ink border-ink text-[#eef1ea]",
    berry: "bg-surface border-berry text-ink",
  };
  return (
    <div
      className={cn(
        "rounded-xl border p-6 sm:p-7",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}

/**
 * Callout, a soft tinted panel for quotes and key statements.
 */
export function Callout({
  className,
  tone = "mist",
  ...props
}: React.ComponentProps<"div"> & { tone?: "mist" | "ink" }) {
  return (
    <div
      className={cn(
        "rounded-xl border p-7 sm:p-9",
        tone === "ink"
          ? "bg-ink border-ink text-[#eef1ea]"
          : "bg-green-mist border-[#d7e2cd] text-ink",
        className
      )}
      {...props}
    />
  );
}
