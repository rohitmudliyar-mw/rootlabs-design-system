import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Stars, a rating display. Defaults to the brand green fill.
 * Renders partial fill via a clipped overlay.
 */
export function Stars({
  rating = 5,
  size = 16,
  className,
}: {
  rating?: number;
  size?: number;
  className?: string;
}) {
  const clamped = Math.max(0, Math.min(5, rating));
  return (
    <div
      className={cn("inline-flex items-center", className)}
      role="img"
      aria-label={`${clamped} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, clamped - i));
        return (
          <span
            key={i}
            className="relative inline-block"
            style={{ width: size, height: size }}
          >
            <Star
              size={size}
              className="absolute inset-0 text-hair"
              fill="currentColor"
              strokeWidth={0}
            />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star
                size={size}
                className="text-green"
                fill="currentColor"
                strokeWidth={0}
              />
            </span>
          </span>
        );
      })}
    </div>
  );
}
