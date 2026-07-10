import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { HeroMockup } from "./HeroMockup";

interface Particle {
  x: number;
  size: number;
  duration: number;
  delay: number;
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 24 }, () => ({
      x: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 5,
    })),
  );

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-32 px-6">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_20%,transparent_70%)]" />

      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle absolute rounded-full bg-signal/40"
            style={{
              left: `${p.x}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge>AI products that work</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-5xl md:text-7xl font-black leading-[0.95]"
        >
          We build <span className="text-signal">AI products</span>
          <br />
          that actually work
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-muted max-w-2xl mx-auto font-sans normal-case"
        >
          Chatbots, generative AI applications, web apps, and intelligent systems —
          designed and shipped by engineers who build production AI, not demos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Button variant="primary" onClick={() => scrollToSection("contact")}>
            Start a project
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("services")}>
            What we do
          </Button>
        </motion.div>

        <HeroMockup />
      </div>
    </section>
  );
}
