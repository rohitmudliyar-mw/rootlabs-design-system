"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { packs, product, galleryImages } from "@/lib/content";
import { useCart, setOpen, setQty, type CartItem } from "./cart-store";

const THUMB = galleryImages[0].src;

function unit(it: CartItem) {
  const p = packs[it.packIndex];
  return it.mode === "subscribe" ? p.sub : p.once;
}

function Stepper({ it }: { it: CartItem }) {
  return (
    <div className="flex h-9 flex-none items-center rounded-full border border-hair">
      <button
        type="button"
        onClick={() => setQty(it.mode, it.packIndex, it.qty - 1)}
        className="grid size-9 place-items-center rounded-full text-ink-2 hover:text-green"
        aria-label={it.qty === 1 ? "Remove item" : "Decrease quantity"}
      >
        {it.qty === 1 ? <Trash2 className="size-4" /> : <Minus className="size-4" />}
      </button>
      <span className="w-7 text-center text-[14px] font-semibold tabular-nums text-ink">
        {it.qty}
      </span>
      <button
        type="button"
        onClick={() => setQty(it.mode, it.packIndex, it.qty + 1)}
        className="grid size-9 place-items-center rounded-full text-ink-2 hover:text-green"
        aria-label="Increase quantity"
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
}

function Line({ it }: { it: CartItem }) {
  const p = packs[it.packIndex];
  const total = unit(it) * it.qty;
  const regular = p.once * it.qty;
  const saved = regular - total;

  return (
    <div className="flex gap-3 border-b border-hair py-5 last:border-0">
      <div className="relative size-20 flex-none overflow-hidden rounded-lg bg-bone">
        <Image src={THUMB} alt="" fill sizes="80px" className="object-cover" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="font-serif text-[18px] leading-tight text-ink">
          {product.name}
        </div>
        <div className="font-serif text-[14px] italic text-ink-3">
          {product.category}
        </div>
        <div className="mt-2 text-[13px] text-ink-2">
          {p.name} · {p.supply}
        </div>

        {it.mode === "subscribe" ? (
          <div className="mt-0.5 text-[14px]">
            <span className="text-ink-3 line-through">${regular}</span>{" "}
            <span className="font-semibold text-ink">${total}</span>
            {saved > 0 && (
              <div className="text-[13px] text-green">${saved} savings</div>
            )}
          </div>
        ) : (
          <div className="mt-0.5 text-[14px] font-semibold text-ink">
            ${total}
          </div>
        )}
      </div>

      <Stepper it={it} />
    </div>
  );
}

function GroupHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 pt-6">
      <span className="whitespace-nowrap text-[13px] text-ink-3">{label}</span>
      <span className="h-px flex-1 bg-hair" />
    </div>
  );
}

export function CartSheet() {
  const { items, open } = useCart();

  const subs = items.filter((it) => it.mode === "subscribe");
  const onces = items.filter((it) => it.mode === "once");
  const subtotal = items.reduce((sum, it) => sum + unit(it) * it.qty, 0);
  const freeShip = subs.length > 0;
  const shipping = items.length === 0 ? 0 : freeShip ? 0 : 10.99;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="w-full! gap-0 p-0 sm:max-w-md!">
        <div className="p-5 pb-3">
          <SheetTitle className="font-serif text-[24px] font-[400] text-ink">
            Your cart
          </SheetTitle>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5">
          {items.length === 0 ? (
            <p className="py-16 text-center text-[15px] text-ink-3">
              Your cart is empty.
            </p>
          ) : (
            <>
              {subs.length > 0 && (
                <>
                  <GroupHeader label="Subscribe & save · free shipping" />
                  {subs.map((it) => (
                    <Line key={`s-${it.packIndex}`} it={it} />
                  ))}
                </>
              )}
              {onces.length > 0 && (
                <>
                  <GroupHeader label="One-time purchase" />
                  {onces.map((it) => (
                    <Line key={`o-${it.packIndex}`} it={it} />
                  ))}
                </>
              )}
            </>
          )}
        </div>

        <div className="space-y-3 border-t border-hair p-5">
          <div className="flex items-center justify-between text-[15px]">
            <span className="font-semibold text-ink">Subtotal</span>
            <span className="font-semibold text-ink">${subtotal}</span>
          </div>
          <div className="flex items-center justify-between text-[14px] text-ink-2">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <Button size="lg" className="w-full" disabled={items.length === 0}>
            Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
