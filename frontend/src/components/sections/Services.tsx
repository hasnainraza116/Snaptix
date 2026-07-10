import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { TiltCard } from "../ui/TiltCard";
import { ScrollReveal } from "../animations/ScrollReveal";
import { AuroraBackground } from "../animations/AuroraBackground";
import { services } from "../../lib/content";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden px-6 lg:px-10 py-28">
      <AuroraBackground tone="violet" />

      <div className="relative mx-auto max-w-[1440px]">
        <ScrollReveal className="max-w-xl mb-16">
          <Badge>What we do</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold normal-case">
            End-to-end AI, built for production
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.05}>
              <TiltCard>
                <Card className="h-full">
                  <h3 className="text-lg font-semibold normal-case font-sans text-paper">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-void text-muted border border-paper/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
