import { type SelectHTMLAttributes, forwardRef } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { cn } from "../../lib/cn";

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "w-full appearance-none rounded-lg border border-paper/15 bg-void px-4 py-2.5 pr-10 text-paper focus:outline-none focus:border-signal transition-colors",
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <IconChevronDown
          size={16}
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted"
        />
      </div>
    );
  },
);

Select.displayName = "Select";
