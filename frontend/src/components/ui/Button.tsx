import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  primary: "bg-signal text-white hover:bg-signal/90",
  secondary: "bg-beacon text-white hover:bg-beacon/90",
  ghost: "border border-paper/20 text-paper hover:border-signal/60 hover:text-signal",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
