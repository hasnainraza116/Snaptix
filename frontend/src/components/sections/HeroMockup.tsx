import { motion } from "framer-motion";
import { IconMessageChatbot, IconSparkles } from "@tabler/icons-react";

export function HeroMockup() {
  return (
    <div className="relative mx-auto mt-16 h-[440px] max-w-3xl sm:h-[520px]">
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -4 }}
        animate={{ opacity: 1, y: [0, -14, 0], rotate: -3 }}
        transition={{
          opacity: { duration: 0.7, delay: 0.4 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
          rotate: { duration: 0.7, delay: 0.4 },
        }}
        className="absolute left-1/2 top-0 w-full max-w-2xl -translate-x-1/2 overflow-hidden rounded-4xl border border-paper/10 bg-panel shadow-2xl shadow-violet/20"
      >
        <div className="flex items-center gap-1.5 border-b border-paper/10 bg-gradient-to-r from-signal via-violet to-coral px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
          <span className="ml-3 flex-1 rounded-md bg-white/15 px-3 py-1 text-xs text-white">
            app.snaptix.ai/dashboard
          </span>
        </div>
        <div className="grid grid-cols-4 gap-4 p-7">
          <div className="col-span-1 space-y-3">
            <div className="h-2.5 w-full rounded-full bg-signal/30" />
            <div className="h-2.5 w-3/4 rounded-full bg-violet/20" />
            <div className="h-2.5 w-full rounded-full bg-coral/20" />
            <div className="h-2.5 w-2/3 rounded-full bg-paper/10" />
          </div>
          <div className="col-span-3 space-y-4">
            <div className="flex gap-3">
              <div className="h-24 flex-1 rounded-2xl bg-gradient-to-br from-signal/20 to-violet/10" />
              <div className="h-24 flex-1 rounded-2xl bg-gradient-to-br from-violet/20 to-coral/10" />
              <div className="h-24 flex-1 rounded-2xl bg-gradient-to-br from-coral/20 to-amber/10" />
            </div>
            <div className="h-32 rounded-2xl bg-void" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 6 }}
        animate={{ opacity: 1, y: [0, -18, 0], rotate: 4 }}
        transition={{
          opacity: { duration: 0.7, delay: 0.7 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          rotate: { duration: 0.7, delay: 0.7 },
        }}
        className="absolute -bottom-6 right-0 w-56 overflow-hidden rounded-[2.5rem] border-[6px] border-violet bg-panel shadow-2xl shadow-coral/20 sm:w-64"
      >
        <div className="flex items-center justify-between px-4 pt-3 text-[10px] text-muted">
          <span>9:41</span>
          <span>●●●</span>
        </div>
        <div className="space-y-3 p-4">
          <div className="flex items-center gap-2 text-violet">
            <IconMessageChatbot size={18} />
            <span className="text-xs font-medium text-paper normal-case">Snaptix AI</span>
          </div>
          <div className="ml-auto w-3/4 rounded-2xl rounded-tr-sm bg-gradient-to-r from-signal to-violet px-3 py-2 text-[11px] text-white normal-case">
            Can you summarize this report?
          </div>
          <div className="flex w-4/5 items-start gap-1.5 rounded-2xl rounded-tl-sm bg-void px-3 py-2 text-[11px] text-paper normal-case">
            <IconSparkles size={14} className="mt-0.5 shrink-0 text-coral" />
            Here's the key takeaway…
          </div>
        </div>
      </motion.div>
    </div>
  );
}
