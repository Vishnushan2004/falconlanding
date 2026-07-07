"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { PRICING, SITE } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent-teal text-sm font-mono uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Simple pricing. No hidden tiers.
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Start free. Upgrade when you're ready for the full signal feed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="font-bold text-xl mb-1">{PRICING.free.name}</h3>
            <p className="text-text-muted text-sm mb-6">For traders getting started</p>
            <p className="text-4xl font-extrabold mb-6">
              {PRICING.free.price}
              <span className="text-base font-normal text-text-muted"> /{PRICING.free.period}</span>
            </p>
            <ul className="space-y-3 mb-8">
              {PRICING.free.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <Check size={16} className="text-accent-teal mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={SITE.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center glass font-semibold py-3 rounded-full hover:bg-white/[0.08] transition-colors"
            >
              Join Free
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-2xl p-8 border-2 border-accent-teal/50 bg-gradient-to-b from-accent-teal/[0.08] to-transparent"
          >
            <div className="absolute -top-3.5 left-8 flex items-center gap-1.5 bg-grad-teal-cyan text-bg-primary text-xs font-bold px-3 py-1 rounded-full">
              <Sparkles size={12} /> Most Popular
            </div>
            <h3 className="font-bold text-xl mb-1">{PRICING.premium.name}</h3>
            <p className="text-text-muted text-sm mb-6">Full signal access, unlocked</p>
            <p className="text-4xl font-extrabold mb-1">
              {PRICING.premium.price}
              <span className="text-base font-normal text-text-muted">
                {PRICING.premium.period}
              </span>
            </p>
            <p className="text-xs text-accent-gold font-mono mb-6">
              Use /{PRICING.premium.coupon} to get 7 days Premium for Free! (Limited time offer)
            </p>
            <ul className="space-y-3 mb-8">
              {PRICING.premium.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <Check size={16} className="text-accent-teal mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={SITE.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-grad-teal-cyan text-bg-primary font-semibold py-3 rounded-full hover:shadow-glow transition-shadow"
            >
              Start 7-Day Free Trial
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
