import { useRef, useState, type FormEvent } from "react";
import { IconMessageCircle, IconX, IconSend } from "@tabler/icons-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const INTRO: Message = {
  role: "assistant",
  content: "Hi! I'm the Snaptix AI. Ask me anything about our services.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INTRO]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  async function handleSend(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || streaming) return;

    setMessages((prev) => [...prev, { role: "user", content: text }, { role: "assistant", content: "" }]);
    setInput("");
    setStreaming(true);

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok || !res.body) throw new Error("Chat request failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const next = [...prev];
          const last = next[next.length - 1];
          next[next.length - 1] = { ...last, content: last.content + chunk };
          return next;
        });
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
      }
    } catch {
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = {
          role: "assistant",
          content: "Sorry, something went wrong. Please email hasnainraza116@gmail.com.",
        };
        return next;
      });
    } finally {
      setStreaming(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-signal text-white shadow-lg transition-colors hover:bg-signal/90"
      >
        {open ? <IconX size={24} /> : <IconMessageCircle size={24} />}
      </button>

      {open && (
        <div className="fixed bottom-24 left-6 z-40 flex h-[28rem] w-80 flex-col overflow-hidden rounded-2xl border border-paper/10 bg-panel shadow-2xl">
          <div className="border-b border-paper/10 px-4 py-3">
            <span className="font-display text-sm uppercase tracking-wide text-paper">
              Snaptix AI
            </span>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm normal-case ${
                  m.role === "user"
                    ? "ml-auto bg-signal text-white"
                    : "bg-void border border-paper/10 text-paper"
                }`}
              >
                {m.content || (streaming && i === messages.length - 1 ? "…" : "")}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-paper/10 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="flex-1 rounded-lg border border-paper/15 bg-void px-3 py-2 text-sm text-paper placeholder:text-muted focus:outline-none focus:border-signal"
            />
            <button
              type="submit"
              disabled={streaming || !input.trim()}
              aria-label="Send"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal text-white transition-opacity disabled:opacity-50"
            >
              <IconSend size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
