import FalconIntro from "@/components/FalconIntro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import LivePerformance from "@/components/LivePerformance";
import SignalPreview from "@/components/SignalPreview";
import WhyJoin from "@/components/WhyJoin";
import CommandsExplained from "@/components/CommandsExplained";
import MarketMindset from "@/components/MarketMindset";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { TRUST_STATS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <FalconIntro />
      <Navbar />
      <main>
        <Hero />
        <TrustStats stats={TRUST_STATS} />
        <Features />
        <HowItWorks />
        <LivePerformance />
        <SignalPreview />
        <WhyJoin />
        <CommandsExplained />
        <MarketMindset />
        <Pricing />
        <FAQ />
        <Testimonials />
        <Blog />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
