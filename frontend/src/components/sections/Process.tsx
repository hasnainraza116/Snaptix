import { Badge } from "../ui/Badge";
import { ScrollReveal } from "../animations/ScrollReveal";
import { AuroraBackground } from "../animations/AuroraBackground";
import { process } from "../../lib/content";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden px-6 lg:px-10 py-28 border-t border-paper/10">
      <AuroraBackground tone="warm" />
      <div className="relative mx-auto max-w-[1440px]">
        <ScrollReveal className="max-w-xl mb-16">
          <Badge>How we work</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold normal-case">
            From idea to production
          </h2>
        </ScrollReveal>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent lg:block" />

          {process.map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 0.08}>
              <div className="relative">
                <span
                  className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-signal via-violet to-coral font-display text-lg text-white shadow-[0_0_20px_-4px_rgba(124,58,237,0.5)]"
                >
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold normal-case font-sans text-paper">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
