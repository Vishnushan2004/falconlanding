import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of Falcon Crypto Signals.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="pt-36 pb-24 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold tracking-tight mb-3">Terms of Service</h1>
        <p className="text-text-muted text-sm mb-12">Last updated: July 2026</p>

        <div className="space-y-10 text-text-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of terms</h2>
            <p>
              By joining the Falcon Crypto Signals Telegram bot or channel, or using this website,
              you agree to these Terms of Service. If you don't agree, please don't use the
              service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Not financial advice</h2>
            <p>
              Falcon Crypto Signals provides market analysis, trade setups, and educational
              content for informational purposes only. Nothing published by the bot, channel, or
              this website constitutes financial, investment, tax, or legal advice, and it should
              not be treated as a recommendation to buy, sell, or hold any asset. You are solely
              responsible for your own trading decisions — please do your own research (DYOR).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. No guarantee of profit</h2>
            <p>
              No signal service, trading bot, or strategy can guarantee profits or a specific win
              rate. Historical or displayed performance (including win rate, profit factor, and
              past trade results) does not guarantee future results. Crypto futures trading,
              especially with leverage, carries a high risk of loss, including the potential loss
              of more than your initial deposit. Only trade with capital you can afford to lose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Subscriptions and payment</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Premium access is billed at 19 USDT/month via the /subscribe command. Payment is
                made in USDT and confirmed on-chain using the /verify TX_HASH command.
              </li>
              <li>
                Because payments are made via cryptocurrency and are irreversible on-chain, all
                subscription payments are final and non-refundable once verified, except where
                required by applicable law.
              </li>
              <li>
                Free trial access obtained via /redeem is limited to one redemption per user per
                coupon code and may be withdrawn or modified at our discretion.
              </li>
              <li>
                Subscriptions do not auto-renew via on-chain payment; you'll need to run
                /subscribe again before your access expires to maintain uninterrupted Premium
                access.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Referral program</h2>
            <p>
              The referral program (/referral, /myreferrals, /leaderboard) is provided at our
              discretion. We reserve the right to adjust referral rewards, disqualify fraudulent
              referrals, or modify the program at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Acceptable use</h2>
            <p>
              You agree not to resell, redistribute, or republish Premium signal content outside
              your own personal use, attempt to abuse the referral or coupon system, or use the
              bot for any unlawful purpose. We reserve the right to suspend or terminate access for
              violations of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, Falcon Crypto Signals and its operators are
              not liable for any trading losses, missed opportunities, or damages arising from
              your use of the bot, channel, or website, including losses resulting from delayed,
              missed, or inaccurate signals, notifications, or data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Changes to the service</h2>
            <p>
              We may modify, suspend, or discontinue any part of the bot, pricing, or features at
              any time. Material changes will be announced in the Telegram channel.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Contact</h2>
            <p>Questions about these terms can be directed to us through the official Telegram bot.</p>
          </section>

          <p className="text-xs text-text-muted pt-6 border-t border-border">
            This document is a general-purpose template and is not a substitute for legal advice.
            We recommend having it reviewed by a lawyer familiar with your jurisdiction, and with
            applicable financial-services regulations, before relying on it in production.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
