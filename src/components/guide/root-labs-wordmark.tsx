/**
 * RootLabsWordmark — the documentation-site mark for the Root Labs design
 * system. (The AshwaMag product logo lives in components/brand/logo.tsx and is
 * used on the example pages.)
 */
export function RootLabsWordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className="grid size-8 place-items-center rounded-[9px] bg-green font-serif text-[18px] font-medium text-white"
        aria-hidden
      >
        R
      </span>
      <span className="font-serif text-[20px] font-[460] tracking-[-0.01em] text-ink">
        Root Labs
      </span>
    </span>
  );
}
