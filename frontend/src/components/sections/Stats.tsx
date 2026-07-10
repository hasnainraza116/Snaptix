import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Counter } from "../ui/Counter";
import { stats } from "../../lib/content";

export function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 lg:px-10 py-24 border-t border-paper/10 bg-panel/40"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #122e52, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1440px] grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16, rotateX: -20 }}
            animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{ perspective: 800 }}
            className="rounded-2xl border border-paper/10 bg-void/40 px-4 py-8 backdrop-blur-sm"
          >
            <div className="font-display text-4xl md:text-5xl text-beacon">
              <Counter to={stat.value} suffix={stat.suffix} active={inView} />
            </div>
            <p className="mt-2 text-sm text-muted normal-case">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
