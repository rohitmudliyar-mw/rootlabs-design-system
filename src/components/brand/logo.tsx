import { cn } from "@/lib/utils";

/**
 * Logo — the AshwaMag wordmark with the Root Labs endorsement.
 * "Mag" carries the berry product cue. Two colorways: default and dark.
 */
export function Logo({
  className,
  colorway = "default",
  showMark = true,
  showEndorsement = true,
}: {
  className?: string;
  colorway?: "default" | "dark";
  showMark?: boolean;
  showEndorsement?: boolean;
}) {
  const dark = colorway === "dark";
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {showMark && (
        <span
          className="grid size-8 flex-none place-items-center rounded-[9px] bg-green font-serif text-[18px] font-medium text-white"
          aria-hidden
        >
          A
        </span>
      )}
      <span className="leading-none">
        <span
          className={cn(
            "font-serif text-[20px] font-[460] tracking-[-0.01em]",
            dark ? "text-white" : "text-ink"
          )}
        >
          Ashwa
          <span className={dark ? "text-white" : "text-berry"}>Mag</span>
        </span>
        {showEndorsement && (
          <span
            className={cn(
              "mt-0.5 block text-[9px] uppercase tracking-[0.22em]",
              dark ? "text-[#aeb6a8]" : "text-ink-3"
            )}
          >
            By Root Labs
          </span>
        )}
      </span>
    </div>
  );
}
