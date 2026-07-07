"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, Target, Activity, Layers } from "lucide-react";
import { SITE } from "@/lib/data";

const floatCards = [
  { icon: TrendingUp, label: "Win Rate", value: "72%", pos: "top-6 -left-6 md:-left-10" },
  { icon: Target, label: "Risk / Reward", value: "1:3 Fixed", pos: "top-1/3 -right-6 md:-right-12" },
  { icon: Activity, label: "Active Trades", value: "5 Open", pos: "bottom-16 -left-8 md:-left-14" },
  { icon: Layers, label: "Smart Money Concepts", value: "Confirmed", pos: "bottom-2 right-2 md:right-6" },
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grad-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/logo.png"
              alt="Falcon Crypto Signals"
              width={64}
              height={64}
              className="rounded-2xl shadow-glow"
              priority
            />
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse" />
              Live desk monitoring 12 symbols, 24/7
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
            Trade Smarter with{" "}
            <span className="text-gradient">Institutional Crypto Signals</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed">
            Professional crypto futures signals powered by Smart Money Concepts,
            liquidity analysis, market structure, and institutional order flow —
            with a fixed 2% risk on every trade.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href={SITE.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-grad-teal-cyan text-bg-primary font-semibold px-7 py-3.5 rounded-full text-center hover:shadow-glow transition-shadow"
            >
              Start Free Trial
            </a>
            <a
              href="#performance"
              className="glass font-semibold px-7 py-3.5 rounded-full text-center hover:bg-white/[0.08] transition-colors"
            >
              View Live Performance
            </a>
          </div>

          <p className="mt-5 text-xs text-text-muted">
            No card required for the free trial · 4,200+ traders already inside
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto max-w-md lg:max-w-none"
        >
          <div className="glass rounded-2xl p-5 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-text-muted font-mono">ETH/USDT · LONG</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-state-success/15 text-state-success font-mono">
                CONFIRMED
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4 font-mono text-sm">
              <div>
                <p className="text-text-muted text-[11px]">Entry</p>
                <p className="text-white font-semibold">3,214.50</p>
              </div>
              <div>
                <p className="text-text-muted text-[11px]">Stop Loss</p>
                <p className="text-state-danger font-semibold">3,150.21</p>
              </div>
              <div>
                <p className="text-text-muted text-[11px]">Take Profit</p>
                <p className="text-state-success font-semibold">3,407.37</p>
              </div>
            </div>
            <div className="h-28 rounded-lg bg-white/[0.03] flex items-end gap-1 px-3 pb-2 overflow-hidden">
              {[40, 55, 48, 62, 58, 74, 68, 80, 76, 92, 85, 98].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-accent-teal/40 to-accent-cyan"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {floatCards.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
              className={`hidden md:flex absolute ${c.pos} glass rounded-xl px-4 py-3 items-center gap-3 shadow-card`}
            >
              <c.icon size={18} className="text-accent-teal shrink-0" />
              <div>
                <p className="text-[11px] text-text-muted leading-none mb-1">{c.label}</p>
                <p className="text-sm font-semibold leading-none">{c.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
