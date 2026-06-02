"use client";

import { Stars, Pill } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { packs, product } from "@/lib/content";
import { cn } from "@/lib/utils";
import { usePackIndex, setPackIndex } from "./pack-store";
import { addItem } from "./cart-store";
import { UsageReveal } from "./usage-reveal";
import { CertificateDialog } from "./certificate-dialog";

/**
 * BuyPanel, the reference-style buy box. Low cognitive load: pick a pack on a
 * 3-point slider, then one primary action (Add to cart, subscription) with a
 * quiet one-time secondary. No plan toggle, no pack-card grid.
 */
const STOPS = ["0%", "50%", "100%"];

export function BuyPanel() {
  const i = usePackIndex();
  const active = packs[i];

  return (
    <div>
      {/* Name + italic category, certificate on the right */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h1 className="font-serif text-[clamp(34px,9vw,52px)] font-[400] leading-[1.0] tracking-[-0.015em] text-ink">
            {product.name}
          </h1>
          <p className="mt-1 font-serif text-[clamp(18px,4.5vw,22px)] italic text-ink-3">
            for {product.category.toLowerCase()}
          </p>
        </div>
        <div className="mt-1.5 flex-none">
          <CertificateDialog />
        </div>
      </div>

      {/* Stat badge + blend label, above a rule */}
      <div className="mt-4 flex items-center gap-3.5 border-t-2 border-ink pt-4">
        <span className="grid size-[72px] flex-none place-items-center rounded-full border-2 border-dotted border-ink/30 text-center leading-none">
          <span className="font-serif text-[22px] leading-none text-ink">12g</span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink-3">
            fibre
          </span>
        </span>
        <p className="text-[13px] font-semibold uppercase leading-[1.4] tracking-[0.1em] text-ink-2">
          {product.featureCallout}
        </p>
      </div>

      {/* Description */}
      <p className="mt-4 max-w-[46ch] text-[15px] font-medium leading-[1.45] text-ink sm:text-[16px]">
        {product.overview}
      </p>

      {/* Choose your pack, 3-point slider */}
      <div className="mt-6">
        <div className="flex min-h-[26px] items-center justify-between">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ink-3">
            Choose your pack
          </span>
          {active.badge && (
            <Pill tone={active.badge === "Best value" ? "berry" : "green"} className="text-[10px]">
              {active.badge}
            </Pill>
          )}
        </div>

        {/* track + static stops + one sliding thumb + draggable range */}
        <div className="relative mx-2.5 mt-5 h-6">
          {/* visual track */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-hair">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-green transition-[width] duration-200 ease-out"
              style={{ width: STOPS[i] }}
            />
          </div>
          {/* static stop dots, never resize */}
          {packs.map((_, idx) => (
            <span
              key={idx}
              style={{ left: STOPS[idx] }}
              className={cn(
                "pointer-events-none absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full",
                idx <= i ? "bg-green" : "bg-hair"
              )}
            />
          ))}
          {/* single thumb that slides between stops */}
          <span
            style={{ left: STOPS[i] }}
            className="pointer-events-none absolute top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green ring-[3px] ring-surface shadow-[0_0_0_2px_var(--color-green)] transition-[left] duration-200 ease-out"
          />
          {/* native range handles click, drag, and keyboard */}
          <input
            type="range"
            min={0}
            max={2}
            step={1}
            value={i}
            onChange={(e) => setPackIndex(Number(e.target.value))}
            aria-label="Choose your pack"
            aria-valuetext={`${active.name}, ${active.supply}`}
            className="absolute inset-0 m-0 h-full w-full cursor-pointer appearance-none bg-transparent focus:outline-none [&::-moz-range-thumb]:size-6 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-transparent [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-transparent"
          />
        </div>

        {/* labels, quick-jump tap targets */}
        <div className="mt-3 grid grid-cols-3">
          {packs.map((p, idx) => (
            <button
              key={p.name}
              type="button"
              onClick={() => setPackIndex(idx)}
              className={cn(
                "flex min-h-11 flex-col py-1 text-left",
                idx === 1 && "items-center text-center",
                idx === 2 && "items-end text-right"
              )}
            >
              <span
                className={cn(
                  "text-[14px] font-semibold",
                  idx === i ? "text-ink" : "text-ink-3"
                )}
              >
                {p.name}
              </span>
              <span className="text-[12px] text-ink-3">{p.supply}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price for the selected pack, sale + struck regular */}
      <div className="mt-5 flex items-baseline gap-3">
        <span className="font-serif text-[36px] leading-none text-ink">
          ${active.sub}
        </span>
        <span className="text-[20px] text-ink-3 line-through">
          ${active.sub + active.save}
        </span>
      </div>
      <p className="mt-1.5 text-[13px] text-ink-3">
        ${active.perPack}/pack · {active.supply} · free shipping
      </p>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-3">
        <Stars rating={product.rating} size={18} />
        <a href="#reviews" className="text-[14px] text-ink-2 hover:text-green">
          {product.rating} · {product.reviewCount.toLocaleString()} reviews
        </a>
      </div>

      {/* Primary action */}
      <Button
        id="buy-cta"
        size="lg"
        className="mt-5 w-full"
        onClick={() => addItem("subscribe", i)}
      >
        Add to cart
      </Button>

      {/* Subscription note, points up to the button */}
      <div className="relative mt-3 rounded-xl bg-green-hl px-4 py-3">
        <span
          aria-hidden
          className="absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rotate-45 bg-green-hl"
        />
        <p className="text-pretty text-[13.5px] leading-[1.5] text-ink">
          <span className="font-semibold">Make it a habit.</span> Save 20% on
          every order, cancel anytime.
        </p>
      </div>

      {/* Secondary action */}
      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={() => addItem("once", i)}
          className="text-[14px] font-semibold text-ink underline decoration-hair decoration-2 underline-offset-4 hover:decoration-ink"
        >
          Buy once for ${active.once}
        </button>
      </div>

      {/* How to use, reveal */}
      <UsageReveal />
    </div>
  );
}
