import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-paper/10 bg-panel p-6 transition-colors hover:border-signal/40",
        className,
      )}
      {...props}
    />
  );
}
