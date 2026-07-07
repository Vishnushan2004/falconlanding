"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { WHY_JOIN } from "@/lib/data";

export default function WhyJoin() {
  return (
    <section id="why-join" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-accent-teal text-sm font-mono uppercase tracking-widest mb-3">
            Why Falcon
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Why you should join Falcon Crypto Signals
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Nine reasons traders choose Falcon over louder, less disciplined signal groups.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {WHY_JOIN.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-accent-teal mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1.5">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
