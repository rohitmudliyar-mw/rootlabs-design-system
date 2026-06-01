"use client";

import { useState } from "react";
import Image from "next/image";

import { ImageFrame } from "@/components/brand";
import { productImages } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ProductGallery() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <ImageFrame
        src={productImages[active].src}
        alt={productImages[active].alt}
        ratio="square"
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      <div className="mt-3 grid grid-cols-3 gap-3">
        {productImages.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View ${s.alt}`}
            aria-pressed={active === i}
            className={cn(
              "relative aspect-square overflow-hidden rounded-lg border-2 bg-bone-2 transition-colors",
              active === i ? "border-green" : "border-transparent hover:border-hair"
            )}
          >
            <Image
              src={s.src}
              alt=""
              fill
              sizes="120px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
