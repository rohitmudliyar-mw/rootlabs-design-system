"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Stars } from "@/components/brand";
import { product } from "@/lib/content";

/**
 * StickyBuyBar, appears on mobile after the user scrolls past the buy box,
 * keeping "add to cart" always one tap away. Hidden on desktop.
 */
export function StickyBuyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cnShow(show)}
      aria-hidden={!show}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[14px] font-semibold text-ink">
            {product.name} · ${product.prices.subscribe}
          </p>
          <div className="flex items-center gap-1.5">
            <Stars rating={product.rating} size={12} />
            <span className="text-[11px] text-ink-3">
              {product.reviewCount.toLocaleString()}
            </span>
          </div>
        </div>
        <Button className="flex-none">Add to cart</Button>
      </div>
    </div>
  );
}

function cnShow(show: boolean) {
  return [
    "fixed inset-x-0 bottom-0 z-40 border-t border-hair bg-bone/95 backdrop-blur-md transition-transform duration-300 md:hidden",
    "pb-[env(safe-area-inset-bottom)]",
    show ? "translate-y-0" : "translate-y-full",
  ].join(" ");
}
