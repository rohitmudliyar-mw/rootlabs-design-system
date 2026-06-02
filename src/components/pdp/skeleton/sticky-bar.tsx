"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Stars } from "@/components/brand";
import { packs, product } from "@/lib/content";
import { usePackIndex } from "./pack-store";
import { addItem } from "./cart-store";

/**
 * StickyBar, the mobile sticky add-to-cart bar. Mirrors the selected pack from
 * the BuyPanel (via the shared pack store) so the price stays in sync. Appears
 * after scrolling past the buy panel; hidden on desktop.
 */
export function StickyBar() {
  const [show, setShow] = useState(false);
  const i = usePackIndex();
  const active = packs[i];

  // Show only once the main "Add to cart" button has scrolled above the
  // viewport, so the bar never duplicates a CTA that is already on screen.
  useEffect(() => {
    const el = document.getElementById("buy-cta");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setShow(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={[
        "fixed inset-x-0 bottom-0 z-40 border-t border-hair bg-bone/95 backdrop-blur-md transition-transform duration-300 md:hidden",
        "pb-[env(safe-area-inset-bottom)]",
        show ? "translate-y-0" : "translate-y-full",
      ].join(" ")}
      aria-hidden={!show}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[14px] font-semibold text-ink">
            {product.name} · {active.name} · ${active.sub}
          </p>
          <div className="flex items-center gap-1.5">
            <Stars rating={product.rating} size={12} />
            <span className="text-[11px] text-ink-3">
              {product.reviewCount.toLocaleString()}
            </span>
          </div>
        </div>
        <Button className="flex-none" onClick={() => addItem("subscribe", i)}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
