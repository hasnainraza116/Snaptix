import { Link } from "react-router-dom";
import { IconArrowRight, IconMessageChatbot, IconSparkles, IconDeviceMobile } from "@tabler/icons-react";
import { Badge } from "../ui/Badge";
import { ScrollReveal } from "../animations/ScrollReveal";
import { posts } from "../../lib/blog";

const icons = { "AI Chatbots": IconMessageChatbot, "Generative AI": IconSparkles, "Product Strategy": IconDeviceMobile };
const gradients = [
  "from-signal to-violet",
  "from-violet to-coral",
  "from-coral to-amber",
];

export function Blog() {
  return (
    <section className="px-6 lg:px-10 py-28 border-t border-paper/10">
      <div className="mx-auto max-w-[1440px]">
        <ScrollReveal className="max-w-xl mb-16">
          <Badge>Insights</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold normal-case">
            Notes from the build
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => {
            const Icon = icons[post.tag as keyof typeof icons] ?? IconSparkles;
            return (
              <ScrollReveal key={post.id} delay={i * 0.08}>
                <Link to="/blog" className="group block">
                  <div
                    className={`flex aspect-video items-center justify-center rounded-3xl bg-gradient-to-br ${gradients[i % gradients.length]} transition-transform duration-300 group-hover:scale-[1.02]`}
                  >
                    <Icon size={40} className="text-white/90" />
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted normal-case">
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold normal-case font-sans text-paper group-hover:text-signal transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{post.excerpt}</p>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.2} className="mt-14 flex items-center gap-4">
          <span className="text-sm font-medium text-paper normal-case">See all insights</span>
          <Link
            to="/blog"
            aria-label="See all insights"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-signal via-violet to-coral text-white transition-transform hover:scale-105"
          >
            <IconArrowRight size={20} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
