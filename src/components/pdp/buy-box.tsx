"use client";

import { useState } from "react";
import { Check, Minus, Plus, ShieldCheck } from "lucide-react";

import { Stars, Pill } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { product, benefits } from "@/lib/content";

const plans = [
  {
    id: "subscribe",
    label: "Subscribe & save",
    price: product.prices.subscribe,
    note: "Delivered every 30 days · cancel anytime",
    badge: "Save 20%",
  },
  {
    id: "one-time",
    label: "One-time purchase",
    price: product.prices.oneTime,
    note: "Single 30-day bottle",
    badge: null,
  },
];

export function BuyBox() {
  const [plan, setPlan] = useState("subscribe");
  const [qty, setQty] = useState(1);
  const active = plans.find((p) => p.id === plan)!;

  return (
    <div>
      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-green">
        {product.tagline}
      </p>
      <h1 className="mt-3 font-serif text-[clamp(30px,7vw,44px)] font-[400] leading-[1.04] tracking-[-0.01em] text-ink">
        {product.name}
      </h1>

      <div className="mt-4 flex items-center gap-3">
        <Stars rating={product.rating} size={18} />
        <a href="#reviews" className="text-[14px] text-ink-2 hover:text-green">
          {product.rating} · {product.reviewCount.toLocaleString()} reviews
        </a>
      </div>

      {/* Benefits */}
      <ul className="mt-6 space-y-2.5">
        {benefits.map((b) => (
          <li key={b} className="flex gap-2.5 text-[15.5px] text-ink-2">
            <Check className="mt-0.5 size-4 flex-none text-green" />
            {b}
          </li>
        ))}
      </ul>

      {/* Plan selector */}
      <RadioGroup
        value={plan}
        onValueChange={(v) => setPlan(v as string)}
        className="mt-7 gap-3"
      >
        {plans.map((p) => (
          <label
            key={p.id}
            className={cn(
              "flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors",
              plan === p.id
                ? "border-green bg-green-mist"
                : "border-hair bg-surface hover:border-ink-3/40"
            )}
          >
            <RadioGroupItem value={p.id} className="mt-1" />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[15.5px] font-semibold text-ink">
                  {p.label}
                </span>
                <span className="text-[15.5px] font-semibold text-ink">
                  ${p.price}
                </span>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-[13px] text-ink-3">{p.note}</span>
                {p.badge && (
                  <Pill tone="green" className="px-2 py-0.5 text-[10px]">
                    {p.badge}
                  </Pill>
                )}
              </div>
            </div>
          </label>
        ))}
      </RadioGroup>

      {/* Quantity + add to cart */}
      <div className="mt-6 flex items-stretch gap-3">
        <div className="flex items-center rounded-full border border-hair bg-surface">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="grid size-11 place-items-center rounded-full text-ink-2 hover:text-green disabled:opacity-40"
            disabled={qty <= 1}
            aria-label="Decrease quantity"
          >
            <Minus className="size-4" />
          </button>
          <span className="w-8 text-center text-[15px] font-semibold tabular-nums text-ink">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            className="grid size-11 place-items-center rounded-full text-ink-2 hover:text-green"
            aria-label="Increase quantity"
          >
            <Plus className="size-4" />
          </button>
        </div>

        <Button size="lg" className="flex-1">
          Add to cart — ${active.price * qty}
        </Button>
      </div>

      <p className="mt-4 flex items-center justify-center gap-2 text-[13px] text-ink-3">
        <ShieldCheck className="size-4 text-green" />
        90-night money-back guarantee
      </p>
    </div>
  );
}
