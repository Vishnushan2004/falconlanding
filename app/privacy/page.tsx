import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Falcon Crypto Signals collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-36 pb-24 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold tracking-tight mb-3">Privacy Policy</h1>
        <p className="text-text-muted text-sm mb-12">Last updated: July 2026</p>

        <div className="space-y-10 text-text-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Who we are</h2>
            <p>
              Falcon Crypto Signals ("Falcon," "we," "us") operates a Telegram bot and channel
              that delivers crypto futures market analysis and trade setups, along with this
              website. This policy explains what information we collect through the bot and
              website, and how it's used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Information we collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="text-white font-medium">Telegram account data.</span> When you
                start the bot, Telegram provides us your Telegram user ID, username, and first
                name, as made available through the Telegram Bot API.
              </li>
              <li>
                <span className="text-white font-medium">Subscription and payment data.</span>{" "}
                When you use /subscribe or /verify, we record the transaction hash you submit, the
                subscription tier, and the start/expiry dates of your Premium access. We do not
                collect your private keys, exchange login credentials, or full wallet contents —
                only the transaction reference needed to confirm payment.
              </li>
              <li>
                <span className="text-white font-medium">Usage data.</span> Command usage (e.g.
                which commands you run and when) is logged to operate features like /stats,
                /history, /referral, and /leaderboard.
              </li>
              <li>
                <span className="text-white font-medium">Website analytics.</span> Standard,
                privacy-respecting analytics (page views, referrers, device type) may be collected
                when you browse this website.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How we use your information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To operate bot features: signal delivery, alerts, stats, referrals, and access control.</li>
              <li>To verify payments and manage your Premium subscription status.</li>
              <li>To improve the accuracy and reliability of the service.</li>
              <li>To communicate important updates about the bot or your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. What we don't do</h2>
            <p>
              We do not sell your personal data to third parties. We do not request or store
              exchange account passwords, API keys, or wallet seed phrases — Falcon never needs
              these to operate, and any message claiming otherwise is not from us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data retention</h2>
            <p>
              Subscription and transaction records are kept for as long as needed for accounting
              and dispute-resolution purposes. Usage logs are retained only as long as needed to
              provide the stats and history features described above.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Your choices</h2>
            <p>
              You can stop using the bot and channel at any time by leaving them in Telegram. You
              may request deletion of your account data by contacting us through the official
              Telegram bot support channel, subject to any records we're required to retain for
              legal or accounting reasons.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Changes to this policy</h2>
            <p>
              We may update this policy as the bot's features evolve. Material changes will be
              announced in the Telegram channel.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Contact</h2>
            <p>
              Questions about this policy can be directed to us through the official Telegram bot.
            </p>
          </section>

          <p className="text-xs text-text-muted pt-6 border-t border-border">
            This document is a general-purpose template and is not a substitute for legal advice.
            We recommend having it reviewed by a lawyer familiar with your jurisdiction before
            relying on it in production.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
