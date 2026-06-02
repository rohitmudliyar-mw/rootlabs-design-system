"use client";

import { useSyncExternalStore } from "react";

/**
 * Tiny cart store shared by the buy panel, sticky bar, and cart sheet.
 * Single product, so a line is identified by (mode, packIndex).
 */
export type Mode = "subscribe" | "once";
export type CartItem = { mode: Mode; packIndex: number; qty: number };

const EMPTY: { items: CartItem[]; open: boolean } = { items: [], open: false };
let state = EMPTY;
const listeners = new Set<() => void>();

function set(next: Partial<typeof state>) {
  state = { ...state, ...next };
  listeners.forEach((l) => l());
}

export function addItem(mode: Mode, packIndex: number) {
  const existing = state.items.find(
    (it) => it.mode === mode && it.packIndex === packIndex
  );
  const items = existing
    ? state.items.map((it) =>
        it === existing ? { ...it, qty: it.qty + 1 } : it
      )
    : [...state.items, { mode, packIndex, qty: 1 }];
  set({ items, open: true });
}

export function setQty(mode: Mode, packIndex: number, qty: number) {
  const items =
    qty <= 0
      ? state.items.filter(
          (it) => !(it.mode === mode && it.packIndex === packIndex)
        )
      : state.items.map((it) =>
          it.mode === mode && it.packIndex === packIndex ? { ...it, qty } : it
        );
  set({ items });
}

export function setOpen(open: boolean) {
  set({ open });
}

export function useCart() {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => state,
    () => EMPTY
  );
}
