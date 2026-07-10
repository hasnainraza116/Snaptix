import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-void"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.span
            className="font-display text-2xl uppercase tracking-[0.3em] text-signal"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          >
            Snaptix
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
