"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { howToUse } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * UsageReveal, a compact "how to use" disclosure for the buy panel. Reuses the
 * shared howToUse steps. A bullet + left rail (like the reference) that opens
 * with a smooth grid-rows reveal animation.
 */
export function UsageReveal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6 border-t border-hair pt-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 text-left"
      >
        <span className="flex-1 font-serif text-[19px] text-ink">How to use</span>
        <ChevronDown
          className={cn(
            "size-5 flex-none text-ink-3 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <ul className="ml-1 mt-4 space-y-4 border-l-2 border-green/25 pl-5">
            {howToUse.map((step) => (
              <li key={step.title}>
                <div className="text-[15px] font-semibold text-ink">
                  {step.title}
                </div>
                <div className="mt-0.5 text-[14px] leading-[1.5] text-ink-2">
                  {step.body}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
