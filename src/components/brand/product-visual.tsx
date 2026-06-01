import { cn } from "@/lib/utils";

/**
 * ProductVisual — a clearly-marked placeholder for real product photography.
 * The brand guide forbids AI/stock imagery, so this stands in until a real
 * shoot exists. Swap it for an <Image> when you have approved photos.
 */
export function ProductVisual({
  className,
  label = "Product photo",
  tone = "mist",
  ratio = "square",
}: {
  className?: string;
  label?: string;
  tone?: "mist" | "bone" | "berry";
  ratio?: "square" | "portrait" | "wide";
}) {
  const tones = {
    mist: "from-green-mist to-bone-2",
    bone: "from-bone to-bone-2",
    berry: "from-berry-mist to-bone-2",
  };
  const ratios = {
    square: "aspect-square",
    portrait: "aspect-[4/5]",
    wide: "aspect-[16/10]",
  };
  return (
    <div
      className={cn(
        "relative grid place-items-center overflow-hidden rounded-xl border border-hair bg-gradient-to-br",
        tones[tone],
        ratios[ratio],
        className
      )}
    >
      {/* The gummy, represented abstractly */}
      <div className="relative">
        <div className="size-24 rounded-full bg-berry/85 shadow-[0_8px_30px_rgba(124,45,67,0.25)] sm:size-28" />
        <div className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/15" />
      </div>
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-surface/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-3 backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}
