import { cn } from "@/lib/utils";

/**
 * Eyebrow — the small uppercase label that sits above a headline.
 * Use `tone="green"` for the clinical section marker.
 */
export function Eyebrow({
  className,
  tone = "muted",
  ...props
}: React.ComponentProps<"p"> & { tone?: "muted" | "green" }) {
  return (
    <p
      className={cn(
        "text-[12px] font-semibold uppercase tracking-[0.18em]",
        tone === "green" ? "text-green" : "text-ink-3",
        className
      )}
      {...props}
    />
  );
}

/**
 * SectionNumber — "01 — Strategy" style clinical marker.
 */
export function SectionNumber({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-[12px] font-semibold uppercase tracking-[0.18em] text-green",
        className
      )}
      {...props}
    />
  );
}

/**
 * Display — the big Fraunces hero headline. Keep it large, light, sparing.
 */
export function Display({
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "font-serif font-[380] tracking-[-0.015em]",
        "text-[clamp(40px,11vw,76px)] leading-[0.98]",
        className
      )}
      {...props}
    />
  );
}

/**
 * SectionTitle — the standard Fraunces section headline.
 */
export function SectionTitle({
  className,
  as: Tag = "h2",
  ...props
}: React.ComponentProps<"h2"> & { as?: "h2" | "h3" }) {
  return (
    <Tag
      className={cn(
        "font-serif font-[400] tracking-[-0.01em] text-ink",
        "text-[clamp(28px,6vw,44px)] leading-[1.05]",
        className
      )}
      {...props}
    />
  );
}

/**
 * Lede — the supporting paragraph under a headline.
 */
export function Lede({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "max-w-[56ch] text-[clamp(17px,2.4vw,20px)] leading-[1.6] text-ink-2",
        className
      )}
      {...props}
    />
  );
}

/**
 * Label — uppercase micro-label used inside cards.
 */
export function Label({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ink-3",
        className
      )}
      {...props}
    />
  );
}

/**
 * Highlight — the green marker. Use on exactly ONE phrase at a time.
 * It is a highlighter, never a fill.
 */
export function Highlight({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return <span className={cn("brand-highlight", className)} {...props} />;
}
