import {
  IconMessageChatbot,
  IconDeviceMobile,
  IconPalette,
  IconBug,
  IconRobot,
  IconLanguage,
  IconCode,
  IconSparkles,
} from "@tabler/icons-react";
import { Badge } from "../ui/Badge";
import { ScrollReveal } from "../animations/ScrollReveal";

const panels = [
  { icon: IconMessageChatbot, label: "AI Chatbots", from: "#3282EB", to: "#7C3AED" },
  { icon: IconSparkles, label: "Generative AI", from: "#7C3AED", to: "#FB7185" },
  { icon: IconCode, label: "Web Development", from: "#FB7185", to: "#F59E0B" },
  { icon: IconDeviceMobile, label: "Mobile Apps", from: "#F59E0B", to: "#3282EB" },
  { icon: IconPalette, label: "UX/UI Design", from: "#122E52", to: "#7C3AED" },
  { icon: IconBug, label: "Software Testing", from: "#3282EB", to: "#FB7185" },
  { icon: IconRobot, label: "Reinforcement Learning", from: "#7C3AED", to: "#122E52" },
  { icon: IconLanguage, label: "NLP Solutions", from: "#FB7185", to: "#7C3AED" },
];

function Panel({ icon: Icon, label, from, to }: (typeof panels)[number]) {
  return (
    <div
      className="flex h-64 w-80 shrink-0 flex-col items-center justify-center gap-4 rounded-4xl shadow-xl transition-transform duration-300 hover:scale-[1.03]"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <Icon size={52} className="text-white/90" />
      <span className="text-sm font-medium uppercase tracking-wide text-white normal-case">
        {label}
      </span>
    </div>
  );
}

export function Gallery() {
  const track = [...panels, ...panels];

  return (
    <section className="py-28 border-t border-paper/10 overflow-hidden">
      <div className="px-6">
        <ScrollReveal className="mx-auto max-w-xl mb-12 text-center">
          <Badge>What we build</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold normal-case">
            Every product line, one team
          </h2>
        </ScrollReveal>
      </div>

      <div className="marquee-track flex w-max gap-6 px-6">
        {track.map((panel, i) => (
          <Panel key={i} {...panel} />
        ))}
      </div>
    </section>
  );
}
