import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * ImageFrame, a fixed-ratio, cover-cropped image in the brand card frame
 * (hairline border, 18px radius). The shared wrapper for product photography.
 */
const RATIOS = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  wide: "aspect-[16/10]",
} as const;

export function ImageFrame({
  src,
  alt,
  ratio = "square",
  priority = false,
  sizes = "100vw",
  className,
}: {
  src: string;
  alt: string;
  ratio?: keyof typeof RATIOS;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-hair bg-bone-2",
        RATIOS[ratio],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
