import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-paper/10 bg-panel p-6 transition-all duration-300 hover:border-violet/40 hover:shadow-xl hover:shadow-violet/10",
        className,
      )}
      {...props}
    />
  );
}
