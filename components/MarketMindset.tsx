"use client";

import { motion } from "framer-motion";
import { Sprout, AlertTriangle } from "lucide-react";

export default function MarketMindset() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-14 h-14 rounded-2xl bg-grad-teal-cyan/10 flex items-center justify-center mx-auto mb-6">
            <Sprout size={26} className="text-accent-teal" />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            No system wins every trade. Consistency is the whole game.
          </h2>

          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            There is no bot, strategy, or trader on earth with a genuine 100% win rate — anyone
            claiming otherwise is selling a story, not a system. What actually compounds into
            profit is discipline applied consistently over time, the same way a bamboo tree
            spends years building roots you can't see before it grows 80 feet in six weeks. Every
            Falcon signal is one small, well-managed step in that direction — not a promise of an
            overnight result.
          </p>

          <div className="mt-10 glass rounded-2xl p-6 text-left flex items-start gap-4 max-w-2xl mx-auto">
            <AlertTriangle size={22} className="text-state-warning shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary leading-relaxed">
              <span className="text-white font-semibold">Do your own research (DYOR).</span>{" "}
              Falcon Crypto Signals provides market analysis and trade setups for informational
              purposes — it is not financial advice. Crypto futures trading carries substantial
              risk of loss, including loss beyond your initial deposit when using leverage. Only
              trade with capital you can afford to lose, and size every position according to your
              own risk tolerance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
