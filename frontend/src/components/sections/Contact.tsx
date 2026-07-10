import { useState, type FormEvent } from "react";
import { IconArrowDown } from "@tabler/icons-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Select } from "../ui/Select";
import { ScrollReveal } from "../animations/ScrollReveal";
import api from "../../lib/api";

type Status = "idle" | "sending" | "sent" | "error";

const services = [
  "AI Chatbots & Assistants",
  "Generative AI Applications",
  "Web Development",
  "Mobile App Development",
  "UX/UI Design",
  "Software Testing",
  "Reinforcement Learning",
  "NLP Solutions",
  "Other",
];

const budgets = ["< $10k", "$10k – $25k", "$25k – $50k", "$50k+", "Not sure yet"];

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "",
  description: "",
  budget: "",
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await api.post("/api/contact", form);
      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  function scrollToForm() {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <section id="contact" className="px-6 py-28 border-t border-paper/10">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal className="mb-12 flex items-center justify-between gap-6">
          <h2 className="text-4xl md:text-6xl font-bold normal-case">
            Let's build
            <br />
            something
          </h2>
          <button
            onClick={scrollToForm}
            aria-label="Scroll to contact form"
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-signal text-white transition-transform hover:scale-105 md:h-20 md:w-20"
          >
            <IconArrowDown size={28} />
          </button>
        </ScrollReveal>

        <p className="max-w-md -mt-6 mb-12 text-muted normal-case">
          Tell us about your project — we'll get back to you shortly.
        </p>

        <ScrollReveal delay={0.1}>
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="scroll-mt-24 rounded-2xl border border-paper/10 bg-panel p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-muted mb-2 normal-case" htmlFor="name">
                  Name
                </label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-muted mb-2 normal-case" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-muted mb-2 normal-case" htmlFor="company">
                  Company
                </label>
                <Input
                  id="company"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Optional"
                />
              </div>

              <div>
                <label className="block text-sm text-muted mb-2 normal-case" htmlFor="budget">
                  Budget
                </label>
                <Select
                  id="budget"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                >
                  <option value="">Optional</option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm text-muted mb-2 normal-case" htmlFor="service">
                Service
              </label>
              <Select
                id="service"
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <label className="block text-sm text-muted mb-2 normal-case" htmlFor="description">
                Project description
              </label>
              <Textarea
                id="description"
                required
                rows={4}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="What are you looking to build?"
              />
            </div>

            <Button type="submit" disabled={status === "sending"} className="w-full">
              {status === "sending" ? "Sending…" : "Send message"}
            </Button>

            {status === "sent" && (
              <p className="text-sm text-signal text-center normal-case">
                Thanks — we'll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400 text-center normal-case">
                Something went wrong. Please email hasnainraza116@gmail.com directly.
              </p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
