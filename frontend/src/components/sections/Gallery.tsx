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
  { icon: IconMessageChatbot, label: "AI Chatbots", from: "#3282EB", to: "#5A9EF0" },
  { icon: IconSparkles, label: "Generative AI", from: "#122E52", to: "#3282EB" },
  { icon: IconCode, label: "Web Development", from: "#5A9EF0", to: "#122E52" },
  { icon: IconDeviceMobile, label: "Mobile Apps", from: "#3282EB", to: "#0B1E37" },
  { icon: IconPalette, label: "UX/UI Design", from: "#0B1E37", to: "#5A9EF0" },
  { icon: IconBug, label: "Software Testing", from: "#122E52", to: "#5A9EF0" },
  { icon: IconRobot, label: "Reinforcement Learning", from: "#3282EB", to: "#122E52" },
  { icon: IconLanguage, label: "NLP Solutions", from: "#5A9EF0", to: "#3282EB" },
];

function Panel({ icon: Icon, label, from, to }: (typeof panels)[number]) {
  return (
    <div
      className="flex h-56 w-72 shrink-0 flex-col items-center justify-center gap-4 rounded-3xl shadow-lg"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <Icon size={48} className="text-white/90" />
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
