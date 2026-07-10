import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-paper/15 bg-panel px-3 py-1 text-xs uppercase tracking-[0.15em] text-muted",
        className,
      )}
      {...props}
    />
  );
}
