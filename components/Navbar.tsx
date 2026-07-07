"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/data";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Performance", href: "#performance" },
  { label: "Why Falcon", href: "#why-join" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 12);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/logo-icon.png"
            alt="Falcon Crypto Signals"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="font-bold text-lg tracking-tight">Falcon</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-secondary hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={SITE.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
          >
            Telegram
          </a>
          <a
            href="#pricing"
            className="bg-grad-teal-cyan text-bg-primary text-sm font-semibold px-5 py-2.5 rounded-full hover:shadow-glow transition-shadow"
          >
            Start Free Trial
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass px-6 pb-6 pt-2 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-text-secondary hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="bg-grad-teal-cyan text-bg-primary text-sm font-semibold px-5 py-3 rounded-full text-center"
          >
            Start Free Trial
          </a>
        </div>
      )}
    </header>
  );
}
