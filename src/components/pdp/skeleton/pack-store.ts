"use client";

import { useSyncExternalStore } from "react";

/**
 * Tiny shared store for the selected pack index, so the BuyPanel slider and
 * the sticky buy bar stay in sync without prop drilling or a context wrapper.
 * Defaults to the 2-Pack (index 1).
 */
let index = 1;
const listeners = new Set<() => void>();

export function setPackIndex(i: number) {
  index = i;
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function usePackIndex() {
  return useSyncExternalStore(
    subscribe,
    () => index,
    () => 1
  );
}
