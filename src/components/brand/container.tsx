import { cn } from "@/lib/utils";

/**
 * Container — centers content and applies the brand gutter.
 * size controls the max reading width.
 */
export function Container({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & {
  size?: "prose" | "default" | "wide";
}) {
  const max = {
    prose: "max-w-[760px]",
    default: "max-w-[1120px]",
    wide: "max-w-[1280px]",
  }[size];

  return (
    <div
      className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", max, className)}
      {...props}
    />
  );
}

/**
 * Section — a vertical block with consistent rhythm.
 * tone sets the background surface.
 */
export function Section({
  className,
  tone = "bone",
  divider = false,
  ...props
}: React.ComponentProps<"section"> & {
  tone?: "bone" | "surface" | "recessed" | "mist" | "ink";
  divider?: boolean;
}) {
  const tones = {
    bone: "bg-bone text-ink",
    surface: "bg-surface text-ink",
    recessed: "bg-bone-2 text-ink",
    mist: "bg-green-mist text-ink",
    ink: "bg-ink text-[#eef1ea]",
  };

  return (
    <section
      className={cn(
        "py-16 sm:py-20 lg:py-28",
        tones[tone],
        divider && "border-t border-hair",
        className
      )}
      {...props}
    />
  );
}
