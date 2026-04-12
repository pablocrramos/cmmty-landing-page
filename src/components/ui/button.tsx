"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-clip-padding font-heading text-sm font-medium uppercase tracking-tight whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-dark active:bg-primary-dark",
        alternate:
          "border-primary bg-transparent text-primary hover:border-primary-dark hover:text-primary-dark hover:shadow-[inset_0_0_0_1px_var(--color-primary-dark)]",
        "outline-light":
          "border-white/20 bg-transparent text-white hover:border-white/40 hover:text-white hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]",
        soft: "bg-secondary text-secondary-foreground hover:bg-primary-muted hover:text-white",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 gap-1.5 px-4 text-[0.875rem]",
        sm: "h-10 gap-1.5 px-3 text-[0.875rem]",
        lg: "h-10 gap-1.5 px-3 text-[1.5rem]",
        icon: "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  nativeButton,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      nativeButton={nativeButton ?? !props.render}
      {...props}
    />
  );
}

export { Button, buttonVariants };
