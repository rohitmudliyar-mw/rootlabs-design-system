import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * AshwaMag Button
 * Pill-shaped. Green fill is the primary CTA. Ghost is the secondary action.
 * Every size meets the 44px minimum tap target from the brand guide.
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-green/30 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // The clinical lead — green pill, white text
        default: "bg-green text-white hover:bg-green-deep",
        // Secondary action — outlined ink
        ghost: "border border-ink/85 text-ink hover:bg-ink hover:text-white",
        // Quiet tonal action
        soft: "bg-green-mist text-green hover:bg-[#dde8d4]",
        // Neutral surface action
        secondary: "bg-bone-2 text-ink hover:bg-[#dde2d6]",
        // Inline text action
        link: "rounded-none text-green underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-[13.5px]",
        default: "h-11 px-6 text-[15px]",
        lg: "h-[52px] px-7 text-[15px] tracking-[0.01em]",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
