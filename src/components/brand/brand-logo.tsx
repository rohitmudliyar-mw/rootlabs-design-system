import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * BrandLogo, the real Root Labs mark.
 * `surface="light"` uses the green mark (for bone/white backgrounds);
 * `surface="dark"` uses the cream mark (for ink backgrounds).
 */
const ASSETS = {
  light: { src: "/brand/rootlabs-logo.png", w: 500, h: 440 }, // green
  dark: { src: "/brand/rootlabs-logo-light.png", w: 320, h: 281 }, // cream
} as const;

export function BrandLogo({
  surface = "light",
  height = 32,
  priority = false,
  className,
}: {
  surface?: "light" | "dark";
  height?: number;
  priority?: boolean;
  className?: string;
}) {
  const asset = ASSETS[surface];
  const width = Math.round((asset.w / asset.h) * height);
  return (
    <Image
      src={asset.src}
      alt="Root Labs"
      width={width}
      height={height}
      priority={priority}
      className={cn("block", className)}
    />
  );
}
