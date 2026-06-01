"use client";

import { useState } from "react";

import { ProductVisual } from "@/components/brand";
import { cn } from "@/lib/utils";

const shots = [
  { label: "Front of bottle", tone: "mist" as const },
  { label: "The gummy, macro", tone: "berry" as const },
  { label: "Supplement facts", tone: "bone" as const },
  { label: "In context", tone: "mist" as const },
];

export function ProductGallery() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <ProductVisual
        ratio="square"
        tone={shots[active].tone}
        label={shots[active].label}
      />
      <div className="mt-3 grid grid-cols-4 gap-3">
        {shots.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View ${s.label}`}
            aria-pressed={active === i}
            className={cn(
              "overflow-hidden rounded-lg border-2 transition-colors",
              active === i ? "border-green" : "border-transparent"
            )}
          >
            <ProductVisual
              ratio="square"
              tone={s.tone}
              label=""
              className="rounded-md border-0"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
