import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://falconcryptosignals.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Falcon Crypto Signals — Institutional Crypto Futures Signals",
    template: "%s | Falcon Crypto Signals",
  },
  description:
    "Institutional-grade crypto futures signals powered by Smart Money Concepts, liquidity analysis, and disciplined 2% fixed risk management. Free trial on Telegram.",
  keywords: [
    "crypto signals",
    "crypto futures signals",
    "smart money concepts",
    "SMC trading",
    "telegram crypto signals",
    "liquidity sweeps",
    "order blocks",
    "crypto trading bot",
  ],
  authors: [{ name: "Falcon Crypto Signals" }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Falcon Crypto Signals — Institutional Crypto Futures Signals",
    description:
      "Institutional-grade crypto futures signals built on Smart Money Concepts and strict risk discipline. Start a free trial on Telegram.",
    siteName: "Falcon Crypto Signals",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Falcon Crypto Signals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Falcon Crypto Signals — Institutional Crypto Futures Signals",
    description:
      "Smart Money Concepts crypto futures signals with 2% fixed risk management. Free trial on Telegram.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Falcon Crypto Signals",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Institutional-grade crypto futures signal service powered by Smart Money Concepts and disciplined risk management.",
    sameAs: ["https://t.me/Falcon_Crypto_Signals_bot"],
  };

  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased bg-bg-primary text-text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
