"use client";

import { motion } from "framer-motion";
import { PERFORMANCE, LATEST_SIGNALS } from "@/lib/data";

const metrics = [
  { label: "Win Rate", value: `${PERFORMANCE.winRate}%` },
  { label: "Profit Factor", value: PERFORMANCE.profitFactor.toString() },
  { label: "Total Trades", value: PERFORMANCE.totalTrades.toString() },
  { label: "Winning Trades", value: PERFORMANCE.winningTrades.toString() },
  { label: "Avg. Risk/Reward", value: PERFORMANCE.avgRR },
  { label: "Monthly Return", value: `${PERFORMANCE.monthlyReturn}%` },
];

const chartPoints = [22, 28, 25, 34, 40, 37, 46, 52, 49, 58, 64, 60, 70, 74, 82];

export default function LivePerformance() {
  const path = chartPoints
    .map((p, i) => `${(i / (chartPoints.length - 1)) * 100},${100 - p}`)
    .join(" ");

  return (
    <section id="performance" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-accent-teal text-sm font-mono uppercase tracking-widest mb-3">
            Live Performance
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Numbers you can verify, not just trust
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Every metric below updates from the same feed users see with /stats and /monthly.
          </p>
        </div>

        <div className="glass rounded-3xl p-6 md:p-10">
          <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
            {metrics.map((m) => (
              <div key={m.label}>
                <p className="text-2xl font-extrabold font-mono text-gradient">{m.value}</p>
                <p className="text-xs text-text-muted mt-1">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-sm text-text-muted mb-3">Equity Curve — Trailing 90 Days</p>
              <div className="h-52 rounded-xl bg-white/[0.03] p-4">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="perfGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00E5A8" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#00E5A8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polyline points={path} fill="none" stroke="#00E5A8" strokeWidth="1.6" />
                  <polygon points={`0,100 ${path} 100,100`} fill="url(#perfGrad)" />
                </svg>
              </div>
            </div>

            <div>
              <p className="text-sm text-text-muted mb-3">Latest Signals</p>
              <div className="space-y-2">
                {LATEST_SIGNALS.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center justify-between text-sm bg-white/[0.03] rounded-lg px-3 py-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          s.direction === "LONG"
                            ? "bg-state-success/15 text-state-success"
                            : "bg-state-danger/15 text-state-danger"
                        }`}
                      >
                        {s.direction}
                      </span>
                      <span className="font-mono text-xs">{s.pair}</span>
                    </div>
                    <span className="text-xs text-text-muted font-mono">{s.rr}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
