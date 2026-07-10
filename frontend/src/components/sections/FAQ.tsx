import * as Accordion from "@radix-ui/react-accordion";
import { IconPlus } from "@tabler/icons-react";
import { Badge } from "../ui/Badge";
import { ScrollReveal } from "../animations/ScrollReveal";
import { faqs } from "../../lib/faq";

export function FAQ() {
  return (
    <section className="px-6 py-28 border-t border-paper/10">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal className="max-w-xl mb-12">
          <Badge>FAQ</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold normal-case">
            Questions, answered
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion.Root type="single" collapsible className="divide-y divide-paper/10 border-y border-paper/10">
            {faqs.map((item) => (
              <Accordion.Item key={item.question} value={item.question}>
                <Accordion.Trigger className="group flex w-full items-center justify-between py-5 text-left text-base font-medium text-paper normal-case">
                  {item.question}
                  <IconPlus
                    size={18}
                    className="shrink-0 text-violet transition-transform duration-300 group-data-[state=open]:rotate-45"
                  />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden text-sm text-muted leading-relaxed data-[state=open]:pb-5 data-[state=open]:animate-[accordion-down_0.25s_ease-out] data-[state=closed]:animate-[accordion-up_0.25s_ease-out]">
                  {item.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </ScrollReveal>
      </div>
    </section>
  );
}
