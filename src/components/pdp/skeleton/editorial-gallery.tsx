"use client";

import { useState } from "react";
import Image from "next/image";

import { Stars } from "@/components/brand";
import { galleryImages, product } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * EditorialGallery, the hero image gallery. A clean white frame with a couple
 * of floating proof chips, then an 8-up thumbnail grid. Light and neutral, no
 * color wash, so the product photography leads.
 */
export function EditorialGallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="min-w-0">
      <div className="relative rounded-[24px] border border-hair bg-surface p-3 sm:p-4">
        <div className="relative aspect-square overflow-hidden rounded-[18px] bg-bone">
          <Image
            src={galleryImages[active].src}
            alt={galleryImages[active].alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <span className="absolute left-5 top-5 rounded-full bg-surface/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-green shadow-sm ring-1 ring-hair backdrop-blur">
          Doctor-formulated
        </span>

        <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-surface/95 px-3 py-1.5 shadow-sm ring-1 ring-hair backdrop-blur">
          <Stars rating={product.rating} size={13} />
          <span className="text-[12px] font-semibold text-ink">
            {product.rating}
          </span>
        </div>
      </div>

      <div className="mt-3 flex snap-x gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {galleryImages.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View ${s.alt}`}
            aria-pressed={active === i}
            className={cn(
              "relative aspect-square w-[68px] flex-none snap-start overflow-hidden rounded-lg border-2 bg-bone transition-colors sm:w-[80px]",
              active === i
                ? "border-green"
                : "border-transparent hover:border-hair"
            )}
          >
            <Image src={s.src} alt="" fill sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
