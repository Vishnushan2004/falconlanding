// Central content source for Falcon Crypto Signals landing page.
// Edit copy here — components pull from this file so content stays consistent.

export const SITE = {
  name: "Falcon Crypto Signals",
  domain: "falconcryptosignals.com",
  telegramUrl: "https://t.me/Falcon_Crypto_Signals_bot",
  description:
    "Institutional-grade crypto futures signals built on Smart Money Concepts, liquidity analysis, and strict risk discipline. 2% fixed risk, single take-profit, full transparency.",
};

export const TRUST_STATS = [
  { label: "Active Traders", value: 4200, suffix: "+" },
  { label: "Signals Delivered", value: 3150, suffix: "+" },
  { label: "Avg. Win Rate (90d)", value: 72, suffix: "%" },
  { label: "Symbols Monitored", value: 12, suffix: "" },
  { label: "Market Coverage", value: 24, suffix: "/7" },
  { label: "Years of SMC Experience", value: 6, suffix: "+" },
];

export const FEATURES = [
  {
    icon: "Layers",
    title: "Smart Money Concepts",
    desc: "Every setup is read through institutional order flow — where large players are actually positioned, not retail indicator noise.",
  },
  {
    icon: "Waves",
    title: "Liquidity Sweeps",
    desc: "We track where stop-losses cluster and wait for liquidity to be taken before entries are confirmed, avoiding premature fills.",
  },
  {
    icon: "Blocks",
    title: "Order Blocks",
    desc: "Entries are anchored to the last real institutional footprint on the chart, not arbitrary support and resistance lines.",
  },
  {
    icon: "GitBranch",
    title: "Fair Value Gaps",
    desc: "Imbalances in price are mapped and used as high-probability reaction zones for entries and take-profit targets.",
  },
  {
    icon: "LayoutGrid",
    title: "Multi-Timeframe Analysis",
    desc: "Bias is built top-down from higher timeframes before a single entry is confirmed on the execution timeframe.",
  },
  {
    icon: "SlidersHorizontal",
    title: "Dynamic Leverage",
    desc: "Leverage is calculated per signal based on stop-loss distance and volatility — never a flat, reckless multiplier.",
  },
  {
    icon: "ShieldCheck",
    title: "2% Fixed Risk Management",
    desc: "Every signal is sized to risk a fixed 2% of account equity, so one loss never threatens your capital.",
  },
  {
    icon: "Building2",
    title: "Institutional Entries",
    desc: "We wait for confirmed volume inside real trading sessions before publishing — no chasing candles.",
  },
  {
    icon: "BellRing",
    title: "Real-Time Alerts",
    desc: "Entry filled, cancelled after 6 hours if unfilled, TP hit, or SL hit — every stage is pushed to you the moment it happens.",
  },
  {
    icon: "Radar",
    title: "24/7 Market Monitoring",
    desc: "The desk and the system never sleep. Setups are tracked around the clock across every session.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Join Telegram",
    desc: "Add the Falcon bot and join the channel — takes under a minute, no card required.",
  },
  {
    step: "02",
    title: "Redeem Your Free Trial",
    desc: "Run /redeem FALCONPRO24 in the bot to unlock full premium signals on a free trial.",
  },
  {
    step: "03",
    title: "Receive Institutional Signals",
    desc: "Get 4–6 fully analysed setups a day with entry, stop loss, take profit, and confidence level.",
  },
  {
    step: "04",
    title: "Execute the Trade",
    desc: "Copy the exact entry, SL, and dynamic leverage into your exchange — the plan is already done for you.",
  },
  {
    step: "05",
    title: "Track the Result",
    desc: "Get an automatic popup the moment the signal fills, hits TP, hits SL, or is cancelled after 6 hours.",
  },
];

export const PERFORMANCE = {
  winRate: 72,
  profitFactor: 7.7,
  totalTrades: 840,
  winningTrades: 605,
  avgRR: "1:3",
  monthlyReturn: 24.8,
  openTrades: 5,
};

export const LATEST_SIGNALS = [
  { pair: "BTC/USDT", direction: "LONG", result: "TP HIT", rr: "+3R", time: "6h ago" },
  { pair: "ETH/USDT", direction: "SHORT", result: "TP HIT", rr: "+3R", time: "11h ago" },
  { pair: "SOL/USDT", direction: "LONG", result: "SL HIT", rr: "-1R", time: "1d ago" },
  { pair: "AVAX/USDT", direction: "LONG", result: "TP HIT", rr: "+3R", time: "1d ago" },
  { pair: "LINK/USDT", direction: "SHORT", result: "OPEN", rr: "—", time: "3h ago" },
];

export const SAMPLE_SIGNAL = {
  pair: "ETH/USDT",
  direction: "LONG" as const,
  entry: "3,214.50",
  stopLoss: "3,150.21",
  takeProfit: "3,407.37",
  riskReward: "1:3",
  confidence: "High",
  leverage: "8x Dynamic",
  session: "London Session",
  structure: "Bullish BOS after liquidity sweep below equal lows, entry on discount order block",
  riskPerTrade: "2% Fixed",
};

export const COMMANDS = [
  {
    category: "Getting Started",
    items: [
      { cmd: "/start", desc: "Wakes up the bot and shows your current plan plus quick links to get going." },
      { cmd: "/about", desc: "Explains what Project Falcon is and the philosophy behind the signal desk." },
      { cmd: "/help", desc: "Shows the full help menu and explains how the signal format works." },
    ],
  },
  {
    category: "Subscription & Payment",
    items: [
      { cmd: "/premium", desc: "Checks your Premium status and how many days of access you have left." },
      { cmd: "/subscribe", desc: "Subscribes you to Falcon Premium for 19 USDT/month." },
      { cmd: "/verify", desc: "Verifies your payment — run /verify TX_HASH after sending USDT to confirm your subscription." },
      { cmd: "/redeem", desc: "Redeems a coupon code for a free Premium trial. Trial code: FALCONPRO24." },
    ],
  },
  {
    category: "Performance & Stats",
    items: [
      { cmd: "/stats", desc: "Pulls a 30-day performance overview — win rate, profit factor, and trade count." },
      { cmd: "/daily", desc: "Shows today's results across every signal published so far." },
      { cmd: "/weekly", desc: "Breaks down performance over the last 7 days." },
      { cmd: "/monthly", desc: "Gives the full report for the last 30 days." },
      { cmd: "/winrate", desc: "Shows win rate broken down across different time periods." },
      { cmd: "/open", desc: "Lists every signal that's currently open and being tracked." },
      { cmd: "/history", desc: "Shows the last 10 closed trades with full entry and exit detail." },
      { cmd: "/topsetups", desc: "Highlights the best-performing setups from recent history." },
      { cmd: "/feargreed", desc: "Returns the current Crypto Fear & Greed Index so you understand sentiment before entries." },
    ],
  },
  {
    category: "Referrals",
    items: [
      { cmd: "/referral", desc: "Gives you your personal referral link and shows your current progress." },
      { cmd: "/myreferrals", desc: "Lists everyone you've referred and their current status." },
      { cmd: "/leaderboard", desc: "Shows the top referrers leaderboard." },
    ],
  },
];

export const WHY_JOIN = [
  {
    title: "Lowest Price, Institutional Quality",
    desc: "Full premium access is 19 USDT/month — a fraction of what comparable SMC desks charge — because the bot is built for direct value: /subscribe unlocks Premium instantly, /redeem activates a free trial with a coupon, /stats and /winrate prove the track record in real time, and /daily, /weekly, and /monthly keep you updated without staring at charts all day.",
  },
  {
    title: "Every Trade Is Analysed and Confirmed",
    desc: "No setup goes out on a hunch. Each signal passes through multi-timeframe bias, liquidity mapping, and order block confirmation before it's ever published.",
  },
  {
    title: "Fully Trackable Performance",
    desc: "Win rate, Fear & Greed Index, top setups, and complete trade history are visible to every user, free or premium, through /winrate, /feargreed, /topsetups, and /history.",
  },
  {
    title: "Extreme Transparency",
    desc: "We will never promise 100% profit with 100x leverage. The bot exists to deliver well-analysed signals under strict trade discipline — no emotional entries, no revenge trades.",
  },
  {
    title: "One Entry, One Stop Loss, One Take Profit",
    desc: "Every signal ships with a single entry, single stop loss, and single take profit, plus risk-reward ratio, a confidence level based on market conditions, dynamic leverage, and a fixed 2% risk per trade — precisely to remove emotional and revenge-trade decision-making.",
  },
  {
    title: "Real-Time Status on Every Signal",
    desc: "The bot waits for genuine volume inside the trading session before publishing. Once live, you get a fill notification when entry is hit, an automatic cancellation popup if it's not filled within 6 hours, and instant alerts the moment TP or SL is reached.",
  },
  {
    title: "4–6 Signals Daily Across 12 Symbols",
    desc: "A minimum of 4 and maximum of 6 fully analysed signals per day, spread across 12 tracked symbols. Volume can shift with market conditions — quality is never sacrificed for a quota.",
  },
  {
    title: "6 Years of Real-Time SMC Experience",
    desc: "Every setup is built on genuine Smart Money Concepts analysis, disciplined risk management, adaptation to evolving market dynamics, and real fundamental market knowledge.",
  },
  {
    title: "Free Tier With Real Value",
    desc: "Free users get the bot's stats, Fear & Greed Index, win rate, and full trade history at no cost. What's reserved for Premium is the live edge itself — exact entry, stop loss, take profit, risk-reward, and dynamic leverage for each signal.",
  },
];

export const FAQS = [
  {
    q: "How accurate are the signals?",
    a: "Our trailing 90-day win rate sits around 68%, tracked live in /stats and on the performance dashboard. Accuracy varies with market conditions — we publish the real number, not a marketing figure.",
  },
  {
    q: "Do you guarantee profits?",
    a: "No. No bot or strategy on earth wins 100% of the time, and we will never claim otherwise. We provide a disciplined, well-analysed edge — the outcome of any single trade is never guaranteed.",
  },
  {
    q: "How many signals do you send daily?",
    a: "A minimum of 4 and a maximum of 6 signals per day across 12 monitored symbols. Volume adjusts naturally with market conditions.",
  },
  {
    q: "Which exchanges are supported?",
    a: "Signals are exchange-agnostic and can be executed on any major futures exchange that lists the signaled pair, including Binance, Bybit, and OKX.",
  },
  {
    q: "How is risk managed?",
    a: "Every signal risks a fixed 2% of account equity, uses one stop loss and one take profit, and includes dynamic leverage sized to that specific setup's volatility.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — run /redeem FALCONPRO24 in the bot to unlock a free Premium trial, no card required. After the trial, the Free tier remains available permanently with stats and history access.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Daniyal R.",
    role: "Futures Trader, 2 yrs",
    quote:
      "The single take-profit rule alone fixed my biggest problem — I stopped moving targets out of greed and started following the plan.",
    rating: 5,
  },
  {
    name: "Priya M.",
    role: "Swing Trader",
    quote:
      "Transparent is the right word. The win rate on the dashboard matches what actually lands in my Telegram feed, month over month.",
    rating: 5,
  },
  {
    name: "Chen W.",
    role: "Part-Time Trader",
    quote:
      "Fixed 2% risk per trade changed how I sleep at night. I know my downside on every single signal before I click confirm.",
    rating: 5,
  },
  {
    name: "Aabid K.",
    role: "Crypto Futures, 3 yrs",
    quote:
      "The cancellation popup after 6 hours saved me from chasing stale entries more times than I can count.",
    rating: 4,
  },
];

export const BLOG_POSTS = [
  {
    title: "Smart Money Concepts, Explained Simply",
    excerpt:
      "What SMC actually means, and why reading order flow beats chasing retail indicators.",
    tag: "Education",
    readTime: "6 min",
  },
  {
    title: "How Institutional Traders Actually Think",
    excerpt:
      "Liquidity, not price prediction, drives every institutional decision. Here's the mental model.",
    tag: "Strategy",
    readTime: "7 min",
  },
  {
    title: "Liquidity Sweeps: The Setup Behind the Setup",
    excerpt:
      "Why price often moves against you first — and how to use that against retail stop-hunts.",
    tag: "SMC",
    readTime: "5 min",
  },
  {
    title: "Order Blocks: Finding the Real Footprint",
    excerpt:
      "How to identify the last true institutional candle before a move, and why most order block guides get it wrong.",
    tag: "SMC",
    readTime: "6 min",
  },
  {
    title: "Risk Management for Crypto Futures",
    excerpt:
      "Fixed-percentage risk, single take-profits, and why removing decisions removes emotion.",
    tag: "Risk",
    readTime: "8 min",
  },
  {
    title: "A Practical ICT Trading Guide",
    excerpt:
      "The core ICT concepts worth learning, stripped of jargon, applied directly to crypto futures.",
    tag: "Education",
    readTime: "9 min",
  },
];

export const PRICING = {
  free: {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "Limited signal visibility (pair name only)",
      "Full community & channel access",
      "Live win rate & Fear/Greed Index",
      "Complete trade history",
      "Basic market analysis",
    ],
  },
  premium: {
    name: "Premium",
    price: "19 USDT",
    period: "/month",
    coupon: "FALCONPRO24",
    features: [
      "4–6 unlimited full signals daily",
      "Exact entry, stop loss & take profit",
      "Dynamic leverage per signal",
      "2% fixed risk management built in",
      "Fill, cancellation, TP & SL alerts",
      "Full performance dashboard access",
      "Priority support response",
    ],
  },
};
