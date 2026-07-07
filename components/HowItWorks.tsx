"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent-teal text-sm font-mono uppercase tracking-widest mb-3">
            The Flight Path
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            From Telegram join to tracked result
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent -translate-x-1/2" />
          <div className="space-y-10 md:space-y-0">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`md:grid md:grid-cols-2 md:gap-10 md:py-8 items-center ${
                  i % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className={`glass rounded-2xl p-6 ${i % 2 === 1 ? "md:ml-8" : "md:mr-8"}`}>
                    <span className="font-mono text-accent-teal text-sm">{step.step}</span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{step.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
