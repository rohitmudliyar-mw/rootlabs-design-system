"use client";

import { ShoppingBag } from "lucide-react";

import { Container, BrandLogo } from "@/components/brand";
import { useCart, setOpen } from "./cart-store";

/**
 * Header, a minimal header: the Root Labs mark and a cart button that opens
 * the cart sheet, with a live item count. No nav.
 */
export function Header() {
  const { items } = useCart();
  const count = items.reduce((n, it) => n + it.qty, 0);

  return (
    <header className="sticky top-0 z-30 border-b border-hair bg-bone/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="/" aria-label="Root Labs home" className="flex items-center">
          <BrandLogo height={28} priority />
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
          className="relative grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-bone-2"
        >
          <ShoppingBag className="size-5" />
          {count > 0 && (
            <span className="absolute right-1 top-1 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-green px-1 text-[10px] font-semibold text-white">
              {count}
            </span>
          )}
        </button>
      </Container>
    </header>
  );
}
