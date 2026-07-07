"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Signature moment: on a visitor's first session, a falcon silhouette
 * swoops in from the top corner and "lands" into the logo mark before
 * the page reveals itself. Runs once per session (sessionStorage), respects
 * prefers-reduced-motion, and never blocks interaction for more than ~1.4s.
 */
export default function FalconIntro() {
  const [show, setShow] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("falcon-intro-seen");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!seen && !prefersReduced) {
      setShow(true);
      sessionStorage.setItem("falcon-intro-seen", "1");
      const t = setTimeout(() => setShow(false), 1500);
      return () => clearTimeout(t);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!show) setReady(true);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div className="animate-falcon-swoop">
            <img
              src="/logo-icon.png"
              alt="Falcon Crypto Signals"
              width={112}
              height={112}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-glow"
            />
          </motion.div>
          <motion.p
            className="absolute bottom-[38%] text-text-muted text-sm tracking-[0.3em] uppercase font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            Falcon Crypto Signals
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
