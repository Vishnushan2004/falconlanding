"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { FEATURES } from "@/lib/data";
import type { LucideIcon } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-accent-teal text-sm font-mono uppercase tracking-widest mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Built like a trading desk, not a signal group
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Every feature exists to remove guesswork from the moment a setup enters your feed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => {
            const Icon = (Icons as unknown as Record<string, LucideIcon>)[f.icon];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="glass rounded-2xl p-6 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-grad-teal-cyan/10 flex items-center justify-center mb-4">
                  {Icon && <Icon size={22} className="text-accent-teal" />}
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
