import Image from "next/image";
import { Send, Twitter, Github } from "lucide-react";
import { SITE } from "@/lib/data";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Performance", href: "#performance" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo-icon.png" alt="Falcon Crypto Signals" width={32} height={32} className="rounded-full" />
              <span className="font-bold">Falcon</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              {SITE.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-text-muted hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4">Legal</p>
            <ul className="space-y-2.5">
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-text-muted hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4">Connect</p>
            <div className="flex gap-3">
              <a
                href={SITE.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/[0.08] transition-colors"
                aria-label="Telegram"
              >
                <Send size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/[0.08] transition-colors"
                aria-label="X"
              >
                <Twitter size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/[0.08] transition-colors"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />
        <p className="text-xs text-text-muted text-center">
          © {new Date().getFullYear()} Falcon Crypto Signals. Not financial advice. Trade at your own risk. DYOR.
        </p>
      </div>
    </footer>
  );
}
