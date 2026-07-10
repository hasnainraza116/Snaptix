import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-violet/20 bg-gradient-to-r from-signal/10 via-violet/10 to-coral/10 px-3 py-1 text-xs uppercase tracking-[0.15em] text-violet",
        className,
      )}
      {...props}
    />
  );
}
