import { motion } from "framer-motion";
import { IconMessageChatbot, IconSparkles } from "@tabler/icons-react";

export function HeroMockup() {
  return (
    <div className="relative mx-auto mt-16 h-[380px] max-w-2xl sm:h-[440px]">
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -4 }}
        animate={{ opacity: 1, y: [0, -14, 0], rotate: -3 }}
        transition={{
          opacity: { duration: 0.7, delay: 0.4 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
          rotate: { duration: 0.7, delay: 0.4 },
        }}
        className="absolute left-1/2 top-0 w-full max-w-xl -translate-x-1/2 overflow-hidden rounded-2xl border border-paper/10 bg-panel shadow-2xl"
      >
        <div className="flex items-center gap-1.5 border-b border-paper/10 bg-void px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-3 flex-1 rounded-md bg-panel px-3 py-1 text-xs text-muted">
            app.snaptix.ai/dashboard
          </span>
        </div>
        <div className="grid grid-cols-4 gap-4 p-6">
          <div className="col-span-1 space-y-3">
            <div className="h-2.5 w-full rounded bg-signal/20" />
            <div className="h-2.5 w-3/4 rounded bg-paper/10" />
            <div className="h-2.5 w-full rounded bg-paper/10" />
            <div className="h-2.5 w-2/3 rounded bg-paper/10" />
          </div>
          <div className="col-span-3 space-y-4">
            <div className="flex gap-3">
              <div className="h-20 flex-1 rounded-xl bg-signal/10" />
              <div className="h-20 flex-1 rounded-xl bg-beacon/10" />
              <div className="h-20 flex-1 rounded-xl bg-paper/5" />
            </div>
            <div className="h-28 rounded-xl bg-void" />
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
        className="absolute -bottom-6 right-0 w-48 overflow-hidden rounded-[2rem] border-[6px] border-beacon bg-panel shadow-2xl sm:w-56"
      >
        <div className="flex items-center justify-between px-4 pt-3 text-[10px] text-muted">
          <span>9:41</span>
          <span>●●●</span>
        </div>
        <div className="space-y-3 p-4">
          <div className="flex items-center gap-2 text-signal">
            <IconMessageChatbot size={18} />
            <span className="text-xs font-medium text-paper normal-case">Snaptix AI</span>
          </div>
          <div className="ml-auto w-3/4 rounded-xl rounded-tr-sm bg-signal px-3 py-2 text-[11px] text-white normal-case">
            Can you summarize this report?
          </div>
          <div className="flex w-4/5 items-start gap-1.5 rounded-xl rounded-tl-sm bg-void px-3 py-2 text-[11px] text-paper normal-case">
            <IconSparkles size={14} className="mt-0.5 shrink-0 text-beacon" />
            Here's the key takeaway…
          </div>
        </div>
      </motion.div>
    </div>
  );
}
