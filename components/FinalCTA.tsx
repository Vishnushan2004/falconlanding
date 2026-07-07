"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { SITE, PRICING } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-10 md:p-16 text-center overflow-hidden glass"
        >
          <div className="absolute inset-0 bg-grad-radial-glow pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">
              Ready to Trade Like Institutions?
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">
              Start your free trial today with code FALCONPRO24 — full premium signal access, no card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href={SITE.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-grad-teal-cyan text-bg-primary font-semibold px-8 py-4 rounded-full hover:shadow-glow transition-shadow"
              >
                Start Your Free Trial
              </a>
              <a
                href={SITE.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass font-semibold px-8 py-4 rounded-full hover:bg-white/[0.08] transition-colors"
              >
                <Send size={16} /> Open Telegram
              </a>
            </div>
            <p className="text-xs text-text-muted font-mono">
              Use code <span className="text-accent-gold">{PRICING.premium.coupon}</span> for your first month of Premium
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
