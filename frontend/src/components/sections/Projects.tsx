import { useEffect, useState } from "react";
import { Badge } from "../ui/Badge";
import { ScrollReveal } from "../animations/ScrollReveal";
import api from "../../lib/api";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

const palette = ["#3282EB", "#122E52", "#5A9EF0", "#0B1E37"];

function ProjectMockup({ color, seed }: { color: string; seed: number }) {
  const widths = ["w-2/3", "w-1/2", "w-3/4", "w-1/3"];
  return (
    <div className="mx-auto w-full max-w-sm translate-y-6 overflow-hidden rounded-t-2xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
      <div className="flex items-center gap-1.5 bg-white px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
      </div>
      <div className="space-y-3 bg-white p-5">
        <div className={`h-3 rounded bg-paper/10 ${widths[seed % widths.length]}`} />
        <div className={`h-3 rounded bg-paper/10 ${widths[(seed + 1) % widths.length]}`} />
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="h-14 rounded-lg" style={{ backgroundColor: `${color}22` }} />
          <div className="h-14 rounded-lg bg-beacon/10" />
          <div className="h-14 rounded-lg bg-paper/5" />
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    api
      .get<{ projects: Project[] }>("/api/projects")
      .then((res) => {
        if (!cancelled) {
          setProjects(res.data.projects);
          setStatus("ready");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="work" className="relative overflow-hidden px-6 lg:px-10 py-28 border-t border-paper/10">
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #122e52, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1440px]">
        <ScrollReveal className="max-w-xl mb-16">
          <Badge>Selected work</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold normal-case">
            Products we've shipped
          </h2>
        </ScrollReveal>

        {status === "error" && (
          <p className="text-sm text-muted">
            Couldn't load projects right now — check back shortly.
          </p>
        )}

        {status === "loading" && (
          <p className="text-sm text-muted">Loading projects…</p>
        )}

        {status === "ready" && (
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.06} className="group">
                <div
                  className="overflow-hidden rounded-3xl px-8 pt-14 sm:px-12"
                  style={{ backgroundColor: palette[i % palette.length] }}
                >
                  <ProjectMockup color={palette[i % palette.length]} seed={i} />
                </div>

                <div className="mt-5">
                  <h3 className="text-2xl font-bold normal-case font-sans text-paper">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-signal/10 text-signal border border-signal/20">
                      {project.category}
                    </span>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-panel text-muted border border-paper/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
