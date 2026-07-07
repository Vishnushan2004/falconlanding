"use client";

import { motion } from "framer-motion";
import { COMMANDS } from "@/lib/data";

export default function CommandsExplained() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-accent-teal text-sm font-mono uppercase tracking-widest mb-3">
            Inside the Bot
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Every command, and what it actually does
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            No hidden functions. This is the full command list, grouped by what it's for.
          </p>
        </div>

        <div className="space-y-8">
          {COMMANDS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: gi * 0.06 }}
            >
              <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-3">
                {group.category}
              </p>
              <div className="glass rounded-2xl divide-y divide-border overflow-hidden">
                {group.items.map((c) => (
                  <div
                    key={c.cmd}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 py-4 hover:bg-white/[0.03] transition-colors"
                  >
                    <code className="font-mono text-accent-teal text-sm sm:w-36 shrink-0">
                      {c.cmd}
                    </code>
                    <p className="text-text-secondary text-sm">{c.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
