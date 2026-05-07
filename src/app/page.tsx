"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, DollarSign, Bot, Calendar, X } from "lucide-react";

/* ── Fade-in on scroll ── */
const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ── Email capture form (shared between Hero & Final CTA) ── */
const EmailCapture = ({ className = "" }: { className?: string }) => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    if (typeof window !== "undefined") {
      const prev = JSON.parse(localStorage.getItem("waitlist_emails") || "[]");
      localStorage.setItem("waitlist_emails", JSON.stringify([...prev, email.trim()]));
    }
    setDone(true);
  };

  if (done) {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-green-400 font-medium text-base">You&apos;re on the list.</p>
        <p className="text-white/30 text-sm mt-1.5">
          We&apos;ll email you once — when we launch. Summer 2026.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/[0.10] text-white placeholder-white/25 text-sm focus:outline-none focus:border-white/25 transition-colors"
        />
        <button
          type="submit"
          className="cta-pulse px-6 py-3.5 bg-white text-black font-semibold rounded-xl text-sm transition-colors duration-200 hover:bg-zinc-100 whitespace-nowrap"
        >
          Join the waitlist — it&apos;s free
        </button>
      </div>
      <p className="text-[11px] text-white/25">
        Launching Summer 2026 · No spam · One email when we&apos;re live
      </p>
    </form>
  );
};

/* ════════════════════════════════════════
   PAGE
════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">

      {/* Subtle top gradient */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 60%)",
        }}
      />

      <main className="relative z-10">

        {/* ══════════════════════════════
            SECTION 1 — HERO
        ══════════════════════════════ */}
        <section
          id="waitlist"
          className="px-6 pt-24 pb-20 flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs text-white/35 tracking-widest uppercase mb-6"
          >
            For beginners who keep starting but never finishing
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-[2.4rem] sm:text-5xl font-bold tracking-tight leading-[1.08] mb-6"
          >
            You don&apos;t have an idea problem.
            <br />
            <span className="text-white/50">You have a &ldquo;stuck alone&rdquo; problem.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base text-white/40 max-w-lg mx-auto mb-10 leading-relaxed"
          >
            The first AI-guided launch system that walks with you — step by step, day by day —
            until your product is live.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full"
          >
            <EmailCapture />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 text-xs text-white/20"
          >
            Join hundreds already on the list
          </motion.p>
        </section>

        {/* ══════════════════════════════
            SECTION 2 — PAIN
        ══════════════════════════════ */}
        <section className="px-6 py-20 max-w-xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              This is what happens every time
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                step: "01",
                text: "You buy the course. You're excited. Day 1 feels amazing.",
              },
              {
                step: "02",
                text: "Day 4. You hit a wall. You don't know what to do next.",
              },
              {
                step: "03",
                text: "You Google. You watch more videos. You open 12 tabs. You close the laptop.",
              },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="flex gap-5 items-start p-5 rounded-2xl border border-white/[0.05] bg-white/[0.015]">
                  <span className="text-2xl font-bold text-white/10 tabular-nums leading-none mt-0.5">
                    {s.step}
                  </span>
                  <p className="text-white/55 text-base leading-relaxed">{s.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <p className="mt-10 text-center text-white/35 text-sm leading-relaxed">
              88% of people who buy online courses never finish them.
              <br />
              <span className="text-white/60 font-medium">
                Not because they&apos;re lazy. Because they&apos;re alone.
              </span>
            </p>
          </FadeIn>
        </section>

        {/* ══════════════════════════════
            SECTION 3 — WHY EVERYTHING FAILS
        ══════════════════════════════ */}
        <section className="px-6 py-20 max-w-xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              You&apos;ve tried these. They didn&apos;t work.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
              {[
                {
                  what: "Online courses",
                  why: "You're alone. No one checks on you. You quit at Week 2.",
                },
                {
                  what: "YouTube / free content",
                  why: "No structure. 47 tabs. Still confused.",
                },
                {
                  what: "ChatGPT / AI alone",
                  why: "Smart, but no plan. You go in circles.",
                },
                {
                  what: "Coaching",
                  why: "$300/hour. Not built for beginners at $0 income.",
                },
                {
                  what: "Communities",
                  why: "Noise. Everyone's at a different stage. No personal path.",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_1.6fr] border-b border-white/[0.05] last:border-0"
                >
                  <div className="px-5 py-4 text-white/60 text-sm font-medium border-r border-white/[0.05]">
                    {row.what}
                  </div>
                  <div className="px-5 py-4 text-white/30 text-sm flex items-start gap-2">
                    <X className="w-3.5 h-3.5 text-red-400/60 flex-shrink-0 mt-0.5" />
                    {row.why}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="mt-8 text-center text-white/35 text-sm leading-relaxed">
              The problem isn&apos;t information. There&apos;s too much of it.
              <br />
              <span className="text-white/65 font-semibold">
                The problem is: no one walks with you when you get stuck.
              </span>
            </p>
          </FadeIn>
        </section>

        {/* ══════════════════════════════
            SECTION 4 — SOLUTION
        ══════════════════════════════ */}
        <section className="px-6 py-20 max-w-2xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              What if you had a system that wouldn&apos;t let you quit?
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                emoji: "🗓️",
                title: "14 days. Not \"your own pace.\"",
                desc: "A fixed structure. Day 1 to Day 14. No skipping. No drifting.",
              },
              {
                emoji: "🤖",
                title: "AI Coach that knows your step",
                desc: "Not generic ChatGPT. A coach trained on ONE system. Knows where you are. Tells you exactly what to do next.",
              },
              {
                emoji: "🚨",
                title: "Stuck? Ask. Get unstuck. Keep going.",
                desc: "Hit a wall → ask your coach → get a specific answer for YOUR product → move forward. No Googling.",
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] h-full">
                  <div className="text-2xl mb-4">{card.emoji}</div>
                  <h3 className="text-white/85 font-semibold text-sm mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.35}>
            <div className="mt-10 text-center">
              <p className="text-white/55 text-base">
                By Day 14, you have a real digital product live on the internet.
                <br />
                <span className="text-white/80 font-semibold">
                  Not a dream. Not a plan. A product people can buy.
                </span>
              </p>
              <p className="mt-4 text-white/25 text-sm">
                $49. Once. Not monthly. Not $500.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* ══════════════════════════════
            SECTION 5 — STUCK DEMO
        ══════════════════════════════ */}
        <section className="px-6 py-20 max-w-2xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">See the difference</h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Without */}
            <FadeIn delay={0.05}>
              <div className="rounded-2xl border border-red-500/[0.12] bg-red-500/[0.03] p-6 h-full">
                <p className="text-xs font-medium text-red-400/70 uppercase tracking-widest mb-5">
                  ❌ Without One Product AI
                </p>
                <div className="space-y-3 text-sm font-mono">
                  <p className="text-white/50">You: &ldquo;I don&apos;t know what to write on my landing page&rdquo;</p>
                  <p className="text-white/30">Google: 2.4 million results</p>
                  <p className="text-white/30">YouTube: &ldquo;10 BEST landing page tips (47 min video)&rdquo;</p>
                  <p className="text-white/50 italic">You: *closes laptop*</p>
                </div>
              </div>
            </FadeIn>

            {/* With */}
            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-green-500/[0.15] bg-green-500/[0.03] p-6 h-full">
                <p className="text-xs font-medium text-green-400/80 uppercase tracking-widest mb-5">
                  ✅ With One Product AI
                </p>
                <div className="space-y-3 text-sm font-mono">
                  <p className="text-white/50">You: &ldquo;I don&apos;t know what to write on my landing page&rdquo;</p>
                  <p className="text-white/60 leading-relaxed">
                    AI Coach: &ldquo;You&apos;re on Day 10. Your Product Profile says your audience is overwhelmed
                    parents who want a side income. Here&apos;s your headline formula: [Problem] + [Timeframe] +
                    [Outcome]. Try: &apos;Turn 1 hour a day into your first $100 product — in 14 days.&apos;
                    Write 2 more options and I&apos;ll help you pick.&rdquo;
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <p className="mt-6 text-center text-white/25 text-sm">
              Not generic. Not random. Built on YOUR answers from Day 1.
            </p>
          </FadeIn>
        </section>

        {/* ══════════════════════════════
            SECTION 6 — FINAL CTA
        ══════════════════════════════ */}
        <section className="px-6 py-24 max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Stop starting over. Start finishing.
            </h2>
            <p className="text-white/40 text-base mb-10">
              Join the waitlist. Be the first to never get stuck alone again.
            </p>
            <EmailCapture className="mb-10" />

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center flex-wrap text-xs text-white/25">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" /> No spam. One email at launch.
              </span>
              <span className="hidden sm:block text-white/10">·</span>
              <span className="flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5" /> $49 one-time. 14-day money-back guarantee.
              </span>
              <span className="hidden sm:block text-white/10">·</span>
              <span className="flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5" /> Works with free ChatGPT, Claude, or Gemini.
              </span>
              <span className="hidden sm:block text-white/10">·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Launching Summer 2026
              </span>
            </div>
          </FadeIn>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-7 px-6">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/20">
          <p>&copy; 2026 BM Digital LLC. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="mailto:hello@oneproductai.com" className="hover:text-white/45 transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-white/45 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/45 transition-colors">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
