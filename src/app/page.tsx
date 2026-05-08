"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  X,
  Rocket,
  Target,
  TrendingUp,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Users,
  Trophy,
  Palette,
} from "lucide-react";

/* ─── Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

/* ─── FadeIn ─── */
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
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Section number ─── */
const Num = ({ n }: { n: string }) => (
  <p className="font-mono text-[10px] text-white/20 tracking-[0.3em] mb-3">{n}</p>
);

/* ─── Divider ─── */
const Divider = () => <div className="border-t border-white/[0.05]" />;

/* ─── Card top highlight ─── */
const CardHighlight = () => (
  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
);

/* ─── Email capture ─── */
const EmailCapture = ({ className = "" }: { className?: string }) => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    if (typeof window !== "undefined") {
      const prev = JSON.parse(localStorage.getItem("waitlist_emails") || "[]");
      localStorage.setItem("waitlist_emails", JSON.stringify([...prev, email]));
    }
    setDone(true);
  };

  if (done) {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-sm text-green-400 font-medium">You&apos;re on the list.</p>
        <p className="text-xs text-white/25 mt-1">We&apos;ll notify you at launch — Summer 2026.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
        />
        <button
          type="submit"
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
        >
          Join waitlist
        </button>
      </div>
      <p className="text-[11px] text-white/20">No spam. One email at launch.</p>
    </form>
  );
};

/* ════════════════════════════════════════
   PAGE
════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090f] text-white font-sans overflow-x-hidden">

      {/* Noise */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.018]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* ── Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.04] bg-[#09090f]/85 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-5 h-[56px] flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium">
            <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center">
              <Rocket className="w-3 h-3 text-white" />
            </div>
            <span className="text-white/80">One Product AI</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#system" className="text-xs text-white/30 hover:text-white/60 transition-colors hidden sm:block">How it works</a>
            <a href="#pricing" className="text-xs text-white/30 hover:text-white/60 transition-colors hidden sm:block">Pricing</a>
            <a
              href="#waitlist"
              className="text-xs font-medium bg-white/90 text-black px-3.5 py-1.5 rounded-lg hover:bg-white transition-colors"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      <main>

        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section id="waitlist" className="pt-32 pb-20 px-5 bg-[#09090f]">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.07] text-[11px] text-white/35 mb-8 font-mono tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Early access · Summer 2026
              </div>

              <h1 className="text-4xl sm:text-[2.75rem] font-medium tracking-tight leading-[1.1] mb-5 text-white/85">
                Stop chasing ideas.<br />
                Launch one product in 14 days.
              </h1>

              <p className="text-sm text-white/35 max-w-lg mx-auto mb-3 leading-relaxed">
                A structured 3-phase execution system with daily AI prompts, built-in validation, and a clear roadmap. Not a course. A system that forces you to finish.
              </p>
              <p className="text-xs text-white/20 mb-10 font-mono tracking-wide">
                Summer 2026 · One-time payment · $49
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <EmailCapture />
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            PROBLEM — even
        ════════════════════════════════════════ */}
        <section className="py-16 px-5 bg-[#0e1014]">
          <div className="max-w-xl mx-auto text-center">
            <FadeIn>
              <div className="grid grid-cols-3 gap-8 mb-10 max-w-xs mx-auto">
                {[
                  { n: "47", l: "unfinished ideas" },
                  { n: "3",  l: "abandoned courses" },
                  { n: "0",  l: "launched products" },
                ].map((x, i) => (
                  <div key={i}>
                    <div className="text-2xl font-medium text-white mb-1">{x.n}</div>
                    <div className="text-[11px] text-white/25">{x.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-base text-white/40 mb-1.5">You don&apos;t have an idea problem.</p>
              <p className="text-base font-medium text-white/70">You have a structure problem.</p>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            01 — THE SYSTEM — odd
        ════════════════════════════════════════ */}
        <section id="system" className="py-16 px-5 bg-[#11141a]">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="mb-8">
              <Num n="01" />
              <h2 className="text-2xl font-medium tracking-tight text-white/85">The One Product Launch Engine™</h2>
              <p className="text-sm text-white/30 mt-1.5">Three phases. Clear gates. No skipping.</p>
            </FadeIn>

            <FadeIn delay={0.05} className="mb-8">
              <div className="h-px w-full bg-white/[0.05] overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500/40"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </FadeIn>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="grid md:grid-cols-3 gap-3"
            >
              {[
                { phase: "Phase 1", days: "Days 1–2",  title: "Product Profile™",    sub: "Clarity before action.",       icon: <Target     className="w-4 h-4 text-blue-400/60" /> },
                { phase: "Phase 2", days: "Days 3–4",  title: "Market Proof Score™", sub: "Demand before effort.",        icon: <TrendingUp className="w-4 h-4 text-blue-400/60" /> },
                { phase: "Phase 3", days: "Days 5–14", title: "Build & Launch",      sub: "Execution before perfection.", icon: <Rocket     className="w-4 h-4 text-blue-400/60" /> },
              ].map((c, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div className="relative overflow-hidden h-full p-5 rounded-xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-white/[0.13] transition-colors duration-200">
                    <CardHighlight />
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-mono text-[10px] text-blue-400/60 tracking-widest">{c.phase}</span>
                      <span className="font-mono text-[10px] text-white/15">{c.days}</span>
                    </div>
                    <div className="mb-3">{c.icon}</div>
                    <h3 className="text-sm font-medium text-white/75 mb-1">{c.title}</h3>
                    <p className="text-xs text-white/25">{c.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            02 — 14-DAY MAP — even
        ════════════════════════════════════════ */}
        <section className="py-16 px-5 bg-[#0e1014]">
          <div className="max-w-2xl mx-auto">
            <FadeIn className="mb-8">
              <Num n="02" />
              <h2 className="text-2xl font-medium tracking-tight text-white/85">Your 14&#8209;Day Map</h2>
              <p className="text-sm text-white/30 mt-1.5">1–2 hours per day. ~17 hours total.</p>
            </FadeIn>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-1"
            >
              {[
                { days: "Day 1–2",   task: "Clarity",    desc: "Define your product and target audience" },
                { days: "Day 3–4",   task: "Validation", desc: "Verify real demand before building" },
                { days: "Day 5–9",   task: "Build",      desc: "Create your product using AI prompts" },
                { days: "Day 10–12", task: "Packaging",  desc: "Landing page, email sequence, checkout" },
                { days: "Day 13–14", task: "Launch",     desc: "Go live and make your first announcement" },
              ].map((r, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div className="flex items-center gap-4 px-4 py-3 rounded-lg border border-white/[0.07] bg-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:bg-white/[0.03] hover:border-white/[0.1] transition-all duration-200">
                    <span className="w-18 flex-shrink-0 font-mono text-[11px] text-blue-400/60">{r.days}</span>
                    <span className="text-sm font-medium text-white/65 w-24 flex-shrink-0">{r.task}</span>
                    <span className="text-sm text-white/25">{r.desc}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            03 — WHAT YOU'LL HAVE — odd
        ════════════════════════════════════════ */}
        <section className="py-16 px-5 bg-[#11141a]">
          <div className="max-w-xl mx-auto">
            <FadeIn className="mb-8">
              <Num n="03" />
              <h2 className="text-2xl font-medium tracking-tight text-white/85">What You&apos;ll Have</h2>
              <p className="text-sm text-white/30 mt-1.5">After 14 days — if you follow the system.</p>
            </FadeIn>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-1"
            >
              {[
                "A finished digital product",
                "A live landing page",
                "A validated niche",
                "A repeatable system",
              ].map((t, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div className="flex items-center gap-3 px-4 py-3.5 rounded-lg border border-white/[0.07] bg-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <Check className="w-3.5 h-3.5 text-blue-400/50 flex-shrink-0" />
                    <span className="text-sm text-white/60">{t}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            04 — AI COACH — even
        ════════════════════════════════════════ */}
        <section className="py-16 px-5 bg-[#0e1014]">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="mb-8">
              <Num n="04" />
              <h2 className="text-2xl font-medium tracking-tight text-white/85">Your AI Execution Coach</h2>
            </FadeIn>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="grid md:grid-cols-2 gap-3"
            >
              <motion.div variants={fadeUp}>
                <div className="relative overflow-hidden p-6 rounded-xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] h-full">
                  <CardHighlight />
                  <p className="font-mono text-[10px] text-green-400/70 tracking-widest mb-5">IT DOES</p>
                  <ul className="space-y-2.5">
                    {[
                      "Break every task into daily, actionable steps",
                      "Enforce validation before you build anything",
                      "Redirect you when you drift off-focus",
                      "Simplify decisions when you feel overwhelmed",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-white/40">
                        <Check className="w-3.5 h-3.5 text-green-400/50 flex-shrink-0 mt-0.5" />{t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="relative overflow-hidden p-6 rounded-xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] h-full">
                  <CardHighlight />
                  <p className="font-mono text-[10px] text-red-400/70 tracking-widest mb-5">IT DOES NOT</p>
                  <ul className="space-y-2.5">
                    {[
                      "Promise income or make revenue projections",
                      "Do the work for you",
                      "Allow phase-skipping",
                      "Entertain off-topic rabbit holes",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-white/30">
                        <X className="w-3.5 h-3.5 text-red-400/50 flex-shrink-0 mt-0.5" />{t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            <FadeIn delay={0.1}>
              <p className="font-mono text-[10px] text-white/15 tracking-[0.25em] mt-5">TONE: CALM. DIRECT. STRUCTURED.</p>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            05 — WHO THIS IS FOR — odd
        ════════════════════════════════════════ */}
        <section className="py-16 px-5 bg-[#11141a]">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="mb-8">
              <Num n="05" />
              <h2 className="text-2xl font-medium tracking-tight text-white/85">Who This Is For</h2>
              <p className="text-sm text-white/30 mt-1.5">You have a skill. This system turns it into a product.</p>
            </FadeIn>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5"
            >
              {[
                { icon: <Briefcase     className="w-4 h-4" />, title: "Employee",  desc: "Monetize expertise outside your 9–5" },
                { icon: <GraduationCap className="w-4 h-4" />, title: "Teacher",   desc: "Package knowledge as a digital product" },
                { icon: <Users         className="w-4 h-4" />, title: "Parent",    desc: "Build income around a flexible schedule" },
                { icon: <Trophy        className="w-4 h-4" />, title: "Coach",     desc: "Scale methods beyond 1-on-1 sessions" },
                { icon: <Palette       className="w-4 h-4" />, title: "Creative",  desc: "Productize your craft and sell it online" },
              ].map((c, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div className="relative overflow-hidden flex flex-col items-center gap-2.5 p-4 rounded-xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] text-center h-full">
                    <CardHighlight />
                    <span className="text-blue-400/50">{c.icon}</span>
                    <span className="text-sm font-medium text-white/60">{c.title}</span>
                    <span className="text-[11px] text-white/25 leading-relaxed">{c.desc}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            06 — WHAT'S INCLUDED — even
        ════════════════════════════════════════ */}
        <section className="py-16 px-5 bg-[#0e1014]">
          <div className="max-w-xl mx-auto">
            <FadeIn className="mb-8">
              <Num n="06" />
              <h2 className="text-2xl font-medium tracking-tight text-white/85">What&apos;s Included</h2>
            </FadeIn>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-1 mb-6"
            >
              {[
                { label: "14-Day Roadmap",               sub: "Day-by-day tasks with clear outcomes" },
                { label: "Product Profile™ Framework",   sub: "Define your product before you build" },
                { label: "Market Proof Score™ Rubric",   sub: "Validate demand before you invest time" },
                { label: "50+ AI Prompts",               sub: "Copy-paste ready. Works with any AI tool." },
                { label: "Templates",                    sub: "Landing page, email sequence, legal" },
                { label: "Bonus Resources",              sub: "SEO, ads, content calendar, niche tracks" },
                { label: "Lifetime Updates",             sub: "All future versions included" },
              ].map((t, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/[0.07] bg-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-white/[0.1] transition-colors duration-200">
                    <Check className="w-3.5 h-3.5 text-blue-400/50 flex-shrink-0" />
                    <span className="text-sm text-white/55 flex-1">{t.label}</span>
                    <span className="text-xs text-white/18 hidden sm:block">{t.sub}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <FadeIn delay={0.1}>
              <p className="text-xs text-white/20 text-center">
                Works with free ChatGPT, Claude, or Gemini. No subscription required.
              </p>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            07 — EARLY ACCESS — odd + focus gradient
        ════════════════════════════════════════ */}
        <section id="pricing" className="py-16 px-5 bg-[#11141a] relative">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%]"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.06), transparent 70%)" }}
          />
          <div className="max-w-sm mx-auto relative">
            <FadeIn>
              <Num n="07" />
              <h2 className="text-2xl font-medium tracking-tight text-white/85 mb-1">Early Access — $49</h2>
              <p className="text-sm text-white/30 mb-8">One-time payment. Lifetime access. No subscription.</p>

              <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] p-6 mb-6">
                <CardHighlight />
                <div className="text-4xl font-medium text-white mb-1">$49</div>
                <p className="text-xs text-white/25 mb-6 font-mono">One-time · No upsells · No AI subscription required</p>

                <div className="space-y-2 mb-6">
                  {[
                    "Full 14-Day Launch System",
                    "Product Profile™ + Market Proof Score™",
                    "50+ AI Prompts (copy-paste ready)",
                    "Templates — page, emails, legal",
                    "Bonus pack — SEO, Ads, Content Calendar",
                    "Lifetime updates",
                  ].map((t, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm">
                      <Check className="w-3.5 h-3.5 text-blue-400/50 flex-shrink-0" />
                      <span className="text-white/45">{t}</span>
                    </div>
                  ))}
                </div>

                <EmailCapture />
                <p className="text-[11px] text-white/15 text-center mt-4">14-day money-back guarantee. No questions asked.</p>
              </div>

              <div className="space-y-2 text-xs text-white/25">
                <p className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-white/15 flex-shrink-0" />
                  One-time payment. No recurring fees.
                </p>
                <p className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-white/15 flex-shrink-0" />
                  Works with the free tier of any AI tool.
                </p>
                <p className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-white/15 flex-shrink-0" />
                  Independent system. No platform dependency.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            COMPARISON — even
        ════════════════════════════════════════ */}
        <section className="py-16 px-5 bg-[#0e1014]">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="mb-8">
              <h2 className="text-2xl font-medium tracking-tight text-white/85 mb-1">How We Compare</h2>
              <p className="text-sm text-white/30">Not everything that looks like a solution actually is.</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="relative overflow-hidden overflow-x-auto rounded-xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <CardHighlight />
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.05]">
                      <th className="text-left py-3.5 px-4 text-white/20 font-normal text-xs w-[35%]">Feature</th>
                      <th className="py-3.5 px-3 text-white/20 font-normal text-xs text-center">Free AI</th>
                      <th className="py-3.5 px-3 text-white/20 font-normal text-xs text-center">Courses</th>
                      <th className="py-3.5 px-3 text-white/20 font-normal text-xs text-center">Communities</th>
                      <th className="py-3.5 px-3 text-blue-400/70 font-medium text-xs text-center">One Product AI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { f: "Structured roadmap",  free: false, course: true,  comm: false, us: true },
                      { f: "Built-in validation", free: false, course: false, comm: false, us: true },
                      { f: "AI prompts included", free: false, course: false, comm: false, us: true },
                      { f: "14-day deadline",     free: false, course: false, comm: false, us: true },
                      { f: "One-time payment",    free: true,  course: true,  comm: false, us: true },
                      { f: "Beginner-friendly",   free: false, course: true,  comm: true,  us: true },
                    ].map((r, i) => (
                      <tr key={i} className="border-b border-white/[0.04] last:border-0">
                        <td className="py-3 px-4 text-white/30 text-xs">{r.f}</td>
                        {[r.free, r.course, r.comm, r.us].map((v, j) => (
                          <td key={j} className="py-3 px-3 text-center">
                            {v
                              ? <Check className={`w-3.5 h-3.5 mx-auto ${j === 3 ? "text-blue-400/60" : "text-white/20"}`} />
                              : <X className="w-3.5 h-3.5 mx-auto text-white/[0.06]" />
                            }
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            08 — AUTHORITY — odd
        ════════════════════════════════════════ */}
        <section className="py-16 px-5 bg-[#11141a]">
          <div className="max-w-xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-10">
                <div className="flex-1 h-px bg-white/[0.05]" />
                <span className="font-mono text-[10px] text-white/15 tracking-[0.3em]">08</span>
                <div className="flex-1 h-px bg-white/[0.05]" />
              </div>

              <div className="grid sm:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-lg font-medium text-white/70 mb-6">System Authority</h2>
                  <div className="space-y-4">
                    {[
                      { label: "Entity",       value: "BM Digital LLC" },
                      { label: "Registration", value: "US-registered company" },
                      { label: "Structure",    value: "Independent. No partnerships. No affiliations." },
                    ].map((r, i) => (
                      <div key={i}>
                        <p className="font-mono text-[10px] text-white/18 tracking-[0.2em] uppercase mb-0.5">{r.label}</p>
                        <p className="text-sm text-white/50">{r.value}</p>
                      </div>
                    ))}
                    <div>
                      <p className="font-mono text-[10px] text-white/18 tracking-[0.2em] uppercase mb-0.5">Contact</p>
                      <a
                        href="mailto:hello@oneproductai.com"
                        className="font-mono text-sm text-blue-400/55 hover:text-blue-300 transition-colors"
                      >
                        hello@oneproductai.com
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[10px] text-white/18 tracking-[0.2em] uppercase mb-5">Verified</p>
                  <div className="space-y-2.5">
                    {[
                      "No hidden upsells",
                      "No income claims",
                      "No affiliate funnels",
                      "Real refund policy",
                      "Real support email",
                      "Transparent pricing",
                    ].map((t, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-white/30">
                        <Check className="w-3 h-3 text-white/15 flex-shrink-0" />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            09 — FAQ — even
        ════════════════════════════════════════ */}
        <section className="py-16 px-5 bg-[#0e1014]">
          <div className="max-w-xl mx-auto">
            <FadeIn className="mb-8">
              <Num n="09" />
              <h2 className="text-2xl font-medium tracking-tight text-white/85">FAQ</h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                {[
                  { q: "Is this a course?",                            a: "No. It's a structured execution system. Daily tasks, AI prompts, and validation checkpoints. You don't advance until each phase is complete." },
                  { q: "Do I need a paid AI subscription?",            a: "No. Works with free ChatGPT, Claude, or Gemini. You use tools you already have." },
                  { q: "Do you guarantee sales?",                      a: "No. We guarantee a launched product if you follow the system. Sales depend on your niche and effort. Zero income claims." },
                  { q: "What counts as a launch?",                     a: "A digital product publicly available for purchase — Gumroad, Shopify, Etsy, or similar. Not an idea. Not a draft." },
                  { q: "I've never launched anything. Can I do this?", a: "Yes. Built for first-time launchers. Every step has AI prompts that guide you through it. No technical background required." },
                  { q: "What if I don't finish in 14 days?",           a: "You keep lifetime access. The 14-day structure forces momentum — it's a constraint, not an expiry. Designed for 1–2 hours per day." },
                  { q: "When does it launch?",                         a: "Summer 2026. Join the waitlist to be notified at launch. Early access members are first in." },
                ].map((faq, i) => (
                  <details key={i} className="group border-b border-white/[0.05] py-4 first:border-t first:border-white/[0.05]">
                    <summary className="cursor-pointer flex justify-between items-center text-white/50 font-medium text-sm list-none [&::-webkit-details-marker]:hidden select-none">
                      {faq.q}
                      <ChevronDown className="w-3.5 h-3.5 text-white/15 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                    </summary>
                    <p className="mt-2.5 text-sm text-white/28 leading-relaxed pr-8">{faq.a}</p>
                  </details>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            CLOSE — odd
        ════════════════════════════════════════ */}
        <section className="py-16 px-5 bg-[#11141a]">
          <div className="max-w-lg mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl font-medium tracking-tight text-white/75 mb-5 leading-snug">
                In 14 days, you&apos;ll either have a product live — or your money back.
              </h2>
              <p className="text-sm text-white/25 mb-8">Either way, you stop wondering what could have been.</p>
              <EmailCapture />
            </FadeIn>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.04] py-8 px-5 bg-[#09090f]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/18">
          <p>&copy; 2026 BM Digital LLC. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="mailto:hello@oneproductai.com" className="hover:text-white/40 transition-colors">Contact</a>
            <a href="#" className="hover:text-white/40 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/40 transition-colors">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
