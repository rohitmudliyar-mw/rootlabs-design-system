"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

const shots = [
  {
    src: "/product/pouch-hero.png",
    alt: "Root Labs Liposomal Magnesium + Ashwagandha gummies pouch",
  },
  {
    src: "/product/gummies-bowl.jpg",
    alt: "Berry gummies falling into a glass bowl",
  },
  {
    src: "/product/lifestyle-man.jpg",
    alt: "A man holding a single Root Labs gummy",
  },
];

export function ProductGallery() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-xl border border-hair bg-bone-2">
        <Image
          src={shots[active].src}
          alt={shots[active].alt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {shots.map((s, i) => (
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
