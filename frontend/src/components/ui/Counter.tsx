import { useEffect, useState } from "react";
import { animate } from "framer-motion";

interface CounterProps {
  to: number;
  from?: number;
  duration?: number;
  suffix?: string;
  active: boolean;
}

export function Counter({ to, from = 0, duration = 1.5, suffix = "", active }: CounterProps) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!active) return;
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [active, from, to, duration]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}
