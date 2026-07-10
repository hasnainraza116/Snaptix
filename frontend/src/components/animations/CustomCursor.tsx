import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 30, stiffness: 400, mass: 0.5 });
  const springY = useSpring(cursorY, { damping: 30, stiffness: 400, mass: 0.5 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setIsVisible(true);

    const moveHandler = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);

      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, input, textarea, select, [role='button']"));
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[999] h-3 w-3 rounded-full bg-signal mix-blend-difference"
      style={{ x: springX, y: springY }}
      animate={{ scale: isPointer ? 2.5 : 1 }}
      transition={{ duration: 0.2 }}
    />
  );
}
