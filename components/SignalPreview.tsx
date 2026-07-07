"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import { SAMPLE_SIGNAL } from "@/lib/data";

const LINES = [
  { label: "Pair & Direction", key: "pair", note: "The exact symbol and whether it's a long or short — no ambiguity." },
  { label: "Entry", key: "entry", note: "The single confirmed entry price, already accounting for session volume." },
  { label: "Stop Loss", key: "stopLoss", note: "One stop loss, sized to the setup's structure — never moved once posted." },
  { label: "Take Profit", key: "takeProfit", note: "One take profit target, so there's no emotional decision on when to exit." },
  { label: "Risk / Reward", key: "riskReward", note: "The reward you're being offered for the risk you're taking, calculated up front." },
  { label: "Confidence", key: "confidence", note: "How strongly current market structure and conditions support this setup." },
  { label: "Dynamic Leverage", key: "leverage", note: "Leverage sized to this trade's stop distance — not a flat number applied to everything." },
  { label: "Session", key: "session", note: "Which trading session the volume and setup formed in." },
  { label: "Market Structure", key: "structure", note: "The actual SMC reasoning behind the entry, in plain language." },
];

export default function SignalPreview() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <p className="text-accent-teal text-sm font-mono uppercase tracking-widest mb-3">
            Signal Anatomy
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Every line of a signal, explained
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            This is a real sample of what lands in your Telegram — here's exactly what each field means and why it's there.
          </p>

          <div className="space-y-4">
            {LINES.map((l, i) => (
              <motion.div
                key={l.key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.04 }}
                className="flex gap-3"
              >
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-teal shrink-0" />
                <p className="text-sm text-text-secondary">
                  <span className="text-white font-semibold">{l.label}</span> — {l.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-5 shadow-card sticky top-28"
        >
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
            <div className="w-8 h-8 rounded-full bg-grad-teal-cyan flex items-center justify-center">
              <Send size={14} className="text-bg-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-none">Falcon Crypto Signals</p>
              <p className="text-[11px] text-text-muted mt-0.5">Premium Channel</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="font-mono font-bold text-lg">{SAMPLE_SIGNAL.pair}</span>
            <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-state-success/15 text-state-success font-mono">
              <ArrowUpRight size={12} /> {SAMPLE_SIGNAL.direction}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 font-mono text-sm mb-4">
            <div>
              <p className="text-text-muted text-[11px]">Entry</p>
              <p className="font-semibold">{SAMPLE_SIGNAL.entry}</p>
            </div>
            <div>
              <p className="text-text-muted text-[11px]">Stop Loss</p>
              <p className="font-semibold text-state-danger">{SAMPLE_SIGNAL.stopLoss}</p>
            </div>
            <div>
              <p className="text-text-muted text-[11px]">Take Profit</p>
              <p className="font-semibold text-state-success">{SAMPLE_SIGNAL.takeProfit}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 font-mono text-sm mb-4">
            <div>
              <p className="text-text-muted text-[11px]">Risk / Reward</p>
              <p className="font-semibold">{SAMPLE_SIGNAL.riskReward}</p>
            </div>
            <div>
              <p className="text-text-muted text-[11px]">Confidence</p>
              <p className="font-semibold text-accent-gold">{SAMPLE_SIGNAL.confidence}</p>
            </div>
            <div>
              <p className="text-text-muted text-[11px]">Leverage</p>
              <p className="font-semibold">{SAMPLE_SIGNAL.leverage}</p>
            </div>
            <div>
              <p className="text-text-muted text-[11px]">Session</p>
              <p className="font-semibold">{SAMPLE_SIGNAL.session}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-text-muted text-[11px] mb-1">Market Structure</p>
            <p className="text-sm text-text-secondary leading-relaxed">{SAMPLE_SIGNAL.structure}</p>
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] text-text-muted font-mono">
            <span>Fixed Risk: {SAMPLE_SIGNAL.riskPerTrade}</span>
            <span>Sample data</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
