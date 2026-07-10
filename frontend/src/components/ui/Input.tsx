import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/cn";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-2xl border border-paper/15 bg-void px-4 py-2.5 text-paper placeholder:text-muted focus:outline-none focus:border-violet transition-colors",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
