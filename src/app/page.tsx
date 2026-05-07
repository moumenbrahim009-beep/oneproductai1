"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Check,
  X,
  Rocket,
  Target,
  TrendingUp,
  ChevronDown,
  BookOpen,
  Globe,
  Mail,
  BarChart3,
  Package,
  Zap,
  Clock,
  MessageSquare,
  Briefcase,
  GraduationCap,
  Users,
  Trophy,
  Palette,
} from "lucide-react";

/* ─── Stagger variants ─── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

/* ─── FadeIn (single elements) ─── */
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
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Progress bar ─── */
const ProgressLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="relative h-px w-full mb-10 overflow-hidden bg-white/[0.06]">
      <motion.div
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 via-blue-400 to-violet-500"
        initial={{ width: "0%" }}
        animate={inView ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
};

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
        <p className="text-green-400 font-medium text-sm">You&apos;re on the list.</p>
        <p className="text-white/30 text-xs mt-1.5">We&apos;ll notify you when we launch — Summer 2026.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`flex flex-col items-center gap-3 ${className}`}>
      <p className="text-[11px] font-medium tracking-[0.18em] text-blue-400 uppercase">Launching Summer 2026</p>
      <div className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="px-5 py-3 bg-[#2563EB] hover:bg-blue-500 text-white font-medium rounded-xl text-sm transition-colors duration-200 whitespace-nowrap hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]"
        >
          Get notified at launch
        </motion.button>
      </div>
      <p className="text-[11px] text-white/25">No spam. One email at launch.</p>
    </form>
  );
};

/* ─── Divider ─── */
const Divider = () => <div className="border-t border-white/[0.05]" />;

/* ════════════════════════════════════════
   PAGE
════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden bg-[#0A0A0A] text-white">
      {/* Noise */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* ── Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.04] bg-[#0A0A0A]/85 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium tracking-tight">
            <div className="w-6 h-6 rounded-md bg-[#2563EB] flex items-center justify-center">
              <Rocket className="w-3 h-3 text-white" />
            </div>
            One Product AI
          </div>
          <div className="flex items-center gap-5">
            <a href="#engine" className="text-xs text-white/40 hover:text-white/70 transition-colors hidden sm:block">How it works</a>
            <a href="#pricing" className="text-xs text-white/40 hover:text-white/70 transition-colors hidden sm:block">Pricing</a>
            <motion.a
              href="#waitlist"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="text-xs font-medium bg-white text-black px-4 py-2 rounded-lg hover:bg-zinc-100 transition-colors"
            >
              Join Waitlist
            </motion.a>
          </div>
        </div>
      </nav>

      <main>

        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <motion.section
          id="waitlist"
          ref={heroRef}
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative pt-36 pb-28 px-6 min-h-[90vh] flex items-center overflow-hidden"
        >
          {/* Breathing glow */}
          <motion.div
            className="pointer-events-none absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/[0.06] blur-[160px]"
            animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.05, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Violet accent */}
          <div className="pointer-events-none absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full bg-violet-600/[0.03] blur-[130px]" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.07] bg-white/[0.03] text-[11px] text-white/40 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Early access · Summer 2026
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-medium tracking-tight leading-[1.1] mb-6">
                <span className="block text-white">Stop chasing ideas.</span>
                <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mt-1">
                  Launch one product in 14 days.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base text-white/50 max-w-xl mx-auto mb-3 leading-relaxed"
            >
              A structured 3-phase execution system with built-in validation, daily AI prompts, and a clear roadmap. Not a course. Not a tool. A system that forces you to finish.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-white/30 mb-12"
            >
              Launching Summer 2026. Join the early access list.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <EmailCapture />
            </motion.div>
          </div>
        </motion.section>

        <Divider />

        {/* ════════════════════════════════════════
            PROBLEM
        ════════════════════════════════════════ */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <div className="grid grid-cols-3 gap-6 max-w-xs mx-auto mb-10">
                {[
                  { n: "47", l: "unfinished ideas" },
                  { n: "3",  l: "abandoned courses" },
                  { n: "0",  l: "launched products" },
                ].map((x, i) => (
                  <div key={i}>
                    <div className="text-3xl font-medium text-white mb-1">{x.n}</div>
                    <div className="text-[11px] text-white/35">{x.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-lg text-white/50 mb-2">You don&apos;t have an idea problem.</p>
              <p className="text-lg font-medium bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                You have a structure problem.
              </p>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            THE ENGINE
        ════════════════════════════════════════ */}
        <section id="engine" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-12">
              <p className="text-[11px] font-medium tracking-[0.2em] text-blue-400 uppercase mb-3">Proprietary System</p>
              <h2 className="text-3xl md:text-[2.25rem] font-medium tracking-tight mb-3">
                The One Product Launch Engine™
              </h2>
              <p className="text-white/40 text-sm max-w-md mx-auto">Three phases. Clear gates. No skipping.</p>
            </FadeIn>

            <ProgressLine />

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="grid md:grid-cols-3 gap-4"
            >
              {[
                { phase: "Phase 1", days: "Days 1–2", title: "Product Profile™",     sub: "Clarity before action.",     icon: <Target    className="w-4 h-4 text-blue-400" /> },
                { phase: "Phase 2", days: "Days 3–4", title: "Market Proof Score™", sub: "Demand before effort.",      icon: <TrendingUp className="w-4 h-4 text-blue-400" /> },
                { phase: "Phase 3", days: "Days 5–14", title: "Build & Launch",      sub: "Execution before perfection.", icon: <Rocket  className="w-4 h-4 text-blue-400" /> },
              ].map((c, i) => (
                <motion.div key={i} variants={item}>
                  <div className="h-full p-6 rounded-2xl border border-white/[0.06] bg-white/[0.015] hover:border-blue-500/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-200">
                    <div className="flex items-center gap-2.5 mb-5">
                      <span className="text-[10px] uppercase tracking-widest text-blue-400 font-medium">{c.phase}</span>
                      <span className="text-[10px] text-white/25">{c.days}</span>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4">
                      {c.icon}
                    </div>
                    <h3 className="text-base font-medium mb-1.5 text-white">{c.title}</h3>
                    <p className="text-white/40 text-sm">{c.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            TIMELINE
        ════════════════════════════════════════ */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <FadeIn className="text-center mb-10">
              <h2 className="text-3xl md:text-[2.25rem] font-medium tracking-tight">Your 14&#8209;Day Map</h2>
            </FadeIn>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-1.5"
            >
              {[
                { days: "Day 1–2",   task: "Clarity",    desc: "Define your product and target audience" },
                { days: "Day 3–4",   task: "Validation", desc: "Verify real demand before building anything" },
                { days: "Day 5–9",   task: "Build",      desc: "Create your product using AI prompts" },
                { days: "Day 10–12", task: "Packaging",  desc: "Landing page, email sequence, checkout" },
                { days: "Day 13–14", task: "Launch",     desc: "Go live and make your first announcement" },
              ].map((r, i) => (
                <motion.div key={i} variants={item}>
                  <div className="flex items-center gap-5 px-5 py-3.5 rounded-xl border border-white/[0.04] bg-white/[0.015] hover:border-blue-500/20 hover:-translate-y-0.5 transition-all duration-200">
                    <span className="w-20 flex-shrink-0 text-xs font-mono text-blue-400">{r.days}</span>
                    <span className="text-sm font-medium text-white w-24 flex-shrink-0">{r.task}</span>
                    <span className="text-sm text-white/35">{r.desc}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <FadeIn delay={0.2}>
              <div className="mt-7 flex flex-wrap justify-center gap-6 text-xs text-white/35">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-blue-400" />~17 hours total</span>
                <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-blue-400" />1–2 hours per day</span>
              </div>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            DAY 1 PREVIEW
        ════════════════════════════════════════ */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <FadeIn className="text-center mb-10">
              <p className="text-[11px] font-medium tracking-[0.2em] text-blue-400 uppercase mb-3">Live Preview</p>
              <h2 className="text-3xl md:text-[2.25rem] font-medium tracking-tight mb-3">See Day 1 in Action</h2>
              <p className="text-white/40 text-sm">15 minutes. 3 questions. Your first product direction.</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden">
                <div className="flex items-center gap-1.5 px-5 py-3 border-b border-white/[0.04] bg-white/[0.01]">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <span className="text-[11px] text-white/25 ml-3 font-mono">day-1-session.ai</span>
                </div>
                <div className="p-6 space-y-5">
                  <div className="flex gap-3">
                    <MessageSquare className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/25 text-[11px] mb-1">AI Coach</p>
                      <p className="text-white/55 text-sm leading-relaxed">
                        Answer 3 questions about your skills, interests, and available time. I&apos;ll generate 5 product directions tailored specifically to you.
                      </p>
                    </div>
                  </div>
                  <div className="pl-7 space-y-1.5">
                    {[
                      { n: "Q1", q: "What do people ask you for help with?" },
                      { n: "Q2", q: "What can you do for 1 hour without getting bored?" },
                      { n: "Q3", q: "Who would pay to solve a problem you understand?" },
                    ].map((q, i) => (
                      <div key={i} className="px-4 py-3 rounded-xl bg-white/[0.025] border border-white/[0.04]">
                        <p className="text-[10px] text-white/25 mb-0.5">{q.n}</p>
                        <p className="text-white/55 text-sm">{q.q}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Zap className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/25 text-[11px] mb-1">Output</p>
                      <p className="text-white/55 text-sm">5 product directions → pick one → move to Day 2.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            BUILDING IN PUBLIC
        ════════════════════════════════════════ */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-10">
              <p className="text-[11px] font-medium tracking-[0.2em] text-blue-400 uppercase mb-3">Transparency</p>
              <h2 className="text-3xl md:text-[2.25rem] font-medium tracking-tight mb-3">Building in Public</h2>
              <p className="text-white/40 text-sm">No launch-day surprises. Here&apos;s exactly where we are.</p>
            </FadeIn>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="grid md:grid-cols-3 gap-4"
            >
              {[
                {
                  title: "Landing Page",
                  status: "Live",
                  sc: "text-green-400 bg-green-400/8 border-green-400/15",
                  desc: "You're reading it right now.",
                  icon: <Globe className="w-4 h-4 text-blue-400" />,
                },
                {
                  title: "AI Coach",
                  status: "In Progress",
                  sc: "text-yellow-400 bg-yellow-400/8 border-yellow-400/15",
                  desc: "Prompt library and daily system in development.",
                  icon: <Zap className="w-4 h-4 text-blue-400" />,
                },
                {
                  title: "Launch",
                  status: "Summer 2026",
                  sc: "text-blue-400 bg-blue-400/8 border-blue-400/15",
                  desc: "Full product releases Summer 2026.",
                  icon: <Rocket className="w-4 h-4 text-blue-400" />,
                },
              ].map((c, i) => (
                <motion.div key={i} variants={item}>
                  <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.015] hover:border-blue-500/25 hover:-translate-y-1 transition-all duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                        {c.icon}
                      </div>
                      <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${c.sc}`}>{c.status}</span>
                    </div>
                    <p className="text-white font-medium text-sm mb-1.5">{c.title}</p>
                    <p className="text-white/35 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            AI COACH
        ════════════════════════════════════════ */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-10">
              <h2 className="text-3xl md:text-[2.25rem] font-medium tracking-tight">Your AI Execution Coach</h2>
            </FadeIn>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="grid md:grid-cols-2 gap-4"
            >
              <motion.div variants={item}>
                <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.015] h-full hover:border-green-500/15 transition-colors duration-200">
                  <p className="text-[11px] font-medium text-green-400 uppercase tracking-widest mb-5">It does</p>
                  <ul className="space-y-3">
                    {[
                      "Breaks every task into daily, actionable steps",
                      "Enforces validation before you build anything",
                      "Redirects you when you drift off-focus",
                      "Simplifies decisions when you feel overwhelmed",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/55 text-sm">
                        <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />{t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div variants={item}>
                <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.015] h-full hover:border-red-500/10 transition-colors duration-200">
                  <p className="text-[11px] font-medium text-red-400 uppercase tracking-widest mb-5">It does not</p>
                  <ul className="space-y-3">
                    {[
                      "Promise income or make revenue projections",
                      "Do the work for you",
                      "Allow phase-skipping",
                      "Entertain off-topic rabbit holes",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/35 text-sm">
                        <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />{t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
            <FadeIn delay={0.15}>
              <p className="text-center text-white/25 text-xs mt-5">Tone: Calm. Direct. Structured.</p>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            WHAT YOU BUILD
        ════════════════════════════════════════ */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-10">
              <h2 className="text-3xl md:text-[2.25rem] font-medium tracking-tight">What You Build in 14 Days</h2>
            </FadeIn>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-2 md:grid-cols-5 gap-3"
            >
              {[
                { icon: <BookOpen className="w-5 h-5" />, label: "Digital product" },
                { icon: <Globe    className="w-5 h-5" />, label: "Live landing page" },
                { icon: <Mail     className="w-5 h-5" />, label: "Email sequence" },
                { icon: <BarChart3 className="w-5 h-5" />, label: "Validation proof" },
                { icon: <Package  className="w-5 h-5" />, label: "Launch checklist" },
              ].map((c, i) => (
                <motion.div key={i} variants={item}>
                  <div className="flex flex-col items-center gap-3 p-5 rounded-xl border border-white/[0.04] bg-white/[0.015] hover:border-blue-500/20 hover:-translate-y-0.5 transition-all duration-200 text-center">
                    <span className="text-blue-400">{c.icon}</span>
                    <span className="text-white/55 text-xs font-medium">{c.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            PERSONAS
        ════════════════════════════════════════ */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-10">
              <h2 className="text-3xl md:text-[2.25rem] font-medium tracking-tight mb-3">Who This Is For</h2>
              <p className="text-white/40 text-sm max-w-md mx-auto">
                You have a skill. This system turns it into a product — no coding, no marketing background required.
              </p>
            </FadeIn>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-2 md:grid-cols-5 gap-3"
            >
              {[
                { icon: <Briefcase     className="w-5 h-5" />, title: "Employee", desc: "Monetize expertise outside your 9–5" },
                { icon: <GraduationCap className="w-5 h-5" />, title: "Teacher",  desc: "Package your knowledge as a digital product" },
                { icon: <Users         className="w-5 h-5" />, title: "Parent",   desc: "Build income around a flexible schedule" },
                { icon: <Trophy        className="w-5 h-5" />, title: "Coach",    desc: "Scale your methods beyond 1-on-1 sessions" },
                { icon: <Palette       className="w-5 h-5" />, title: "Creative", desc: "Productize your craft and sell it online" },
              ].map((c, i) => (
                <motion.div key={i} variants={item}>
                  <div className="flex flex-col items-center gap-3 p-5 rounded-xl border border-white/[0.04] bg-white/[0.015] hover:border-blue-500/20 hover:-translate-y-0.5 transition-all duration-200 text-center h-full">
                    <span className="text-blue-400">{c.icon}</span>
                    <span className="text-white font-medium text-sm">{c.title}</span>
                    <span className="text-white/35 text-xs leading-relaxed">{c.desc}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            WHAT'S INCLUDED
        ════════════════════════════════════════ */}
        <section className="py-20 px-6">
          <div className="max-w-xl mx-auto">
            <FadeIn className="text-center mb-10">
              <h2 className="text-3xl md:text-[2.25rem] font-medium tracking-tight">What&apos;s Included</h2>
            </FadeIn>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-1.5 mb-7"
            >
              {[
                "14-Day Roadmap",
                "Product Profile™ Framework",
                "Market Proof Score™ Rubric",
                "50+ AI Prompts (copy-paste ready)",
                "Landing Page Template",
                "Email Sequence Templates",
                "Launch Checklist",
                "Lifetime Updates",
              ].map((t, i) => (
                <motion.div key={i} variants={item}>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.04] bg-white/[0.015] hover:border-blue-500/15 transition-colors duration-200">
                    <div className="w-5 h-5 rounded-md bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-white/65 text-sm">{t}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <FadeIn delay={0.1}>
              <p className="text-center text-white/30 text-xs">
                Works with free ChatGPT, Claude, or Gemini. No additional subscriptions required.
              </p>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            BONUSES
        ════════════════════════════════════════ */}
        <section className="py-20 px-6">
          <div className="max-w-xl mx-auto">
            <FadeIn className="text-center mb-10">
              <p className="text-[11px] font-medium tracking-[0.2em] text-blue-400 uppercase mb-3">Included Free</p>
              <h2 className="text-3xl md:text-[2.25rem] font-medium tracking-tight">Bonus Resources</h2>
            </FadeIn>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="grid sm:grid-cols-2 gap-2.5"
            >
              {[
                "SEO Starter Guide",
                "Facebook Ads Starter Blueprint",
                "Legal Templates Pack",
                "30-Day Content Calendar",
                "5 Niche Quick-Start Tracks",
              ].map((t, i) => (
                <motion.div key={i} variants={item}>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.04] bg-white/[0.015]">
                    <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-white/55 text-sm">{t}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            COMPARISON
        ════════════════════════════════════════ */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-10">
              <h2 className="text-3xl md:text-[2.25rem] font-medium tracking-tight mb-3">How We Compare</h2>
              <p className="text-white/40 text-sm">Not everything that looks like a solution actually is.</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="overflow-x-auto rounded-2xl border border-white/[0.06] bg-white/[0.015]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-4 px-5 text-white/25 font-normal text-xs w-[36%]">Feature</th>
                      <th className="py-4 px-3 text-white/25 font-normal text-xs text-center">Free AI</th>
                      <th className="py-4 px-3 text-white/25 font-normal text-xs text-center">Courses</th>
                      <th className="py-4 px-3 text-white/25 font-normal text-xs text-center">Communities</th>
                      <th className="py-4 px-3 text-blue-400 font-medium text-xs text-center">One Product AI</th>
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
                      <tr key={i} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.01] transition-colors">
                        <td className="py-3.5 px-5 text-white/50 text-xs">{r.f}</td>
                        {[r.free, r.course, r.comm, r.us].map((v, j) => (
                          <td key={j} className="py-3.5 px-3 text-center">
                            {v
                              ? <Check className={`w-3.5 h-3.5 mx-auto ${j === 3 ? "text-blue-400" : "text-green-400"}`} />
                              : <X className="w-3.5 h-3.5 mx-auto text-white/15" />
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
            WHY $49
        ════════════════════════════════════════ */}
        <section className="py-20 px-6">
          <div className="max-w-xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-[2.25rem] font-medium tracking-tight mb-7">Why $49?</h2>
              <div className="space-y-3 text-sm text-white/45 leading-relaxed">
                <p>We chose accessibility over margins.</p>
                <p>This is a system, not coaching. You execute independently using AI you already have access to.</p>
                <p className="text-white/65 font-medium">$49 removes price as an excuse. Your only remaining barrier is commitment.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            TRUST
        ════════════════════════════════════════ */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.015]">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/15 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 font-bold text-xs">BM</span>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white mb-4">BM Digital LLC</h3>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-white/35">
                      {["US-registered company", "No affiliations", "No hidden upsells", "Real refund policy", "Real support email", "Transparent pricing"].map((t, i) => (
                        <span key={i} className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-blue-400 flex-shrink-0" />{t}
                        </span>
                      ))}
                    </div>
                    <p className="text-white/25 text-xs mt-4">
                      Contact: <a href="mailto:hello@oneproductai.com" className="text-blue-400 hover:text-blue-300 transition-colors">hello@oneproductai.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            PRICING
        ════════════════════════════════════════ */}
        <section id="pricing" className="py-20 px-6 relative">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-blue-600/[0.025] blur-[120px] rounded-full" />
          <div className="max-w-sm mx-auto relative">
            <FadeIn>
              <div className="rounded-2xl border border-blue-500/15 bg-gradient-to-b from-white/[0.025] to-transparent p-8 text-center overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
                <div className="mb-7">
                  <p className="text-[11px] font-medium tracking-[0.18em] text-blue-400 uppercase mb-4">One-Time Price</p>
                  <span className="text-6xl font-medium text-white">$49</span>
                  <p className="text-white/35 text-sm mt-2">Lifetime access. No subscription.</p>
                </div>
                <div className="text-left space-y-2 mb-8">
                  {[
                    "Full 14-Day Launch System",
                    "Product Profile™ + Market Proof Score™",
                    "50+ AI Prompts (copy-paste ready)",
                    "Templates — landing page, emails, legal",
                    "Bonus pack — SEO, Ads, Content Calendar",
                    "Lifetime updates",
                  ].map((t, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm">
                      <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span className="text-white/55">{t}</span>
                    </div>
                  ))}
                </div>
                <EmailCapture />
                <p className="mt-5 text-[11px] text-white/20">14&#8209;day money&#8209;back guarantee. No questions asked.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            FAQ
        ════════════════════════════════════════ */}
        <section className="py-20 px-6">
          <div className="max-w-xl mx-auto">
            <FadeIn className="text-center mb-10">
              <h2 className="text-3xl md:text-[2.25rem] font-medium tracking-tight">FAQ</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                {[
                  { q: "Is this a course?",                      a: "No. It's a structured execution system. You get daily tasks, AI prompts, and validation checkpoints. You don't move forward until each phase is complete." },
                  { q: "Do I need ChatGPT Plus?",                a: "No. Works with any AI — free ChatGPT, Claude, Gemini. You use your own tools. We don't sell AI access." },
                  { q: "Do you guarantee sales?",                a: "No. We guarantee a launched product if you follow the system. Sales depend on your niche, effort, and market. We make zero income claims." },
                  { q: "What counts as \"launch\"?",             a: "A digital product publicly available for purchase — Gumroad, Shopify, Etsy, or similar. A live landing page. Not an idea. Not a draft." },
                  { q: "Do I need to pick a niche first?",       a: "No. Day 1 is specifically designed to help you find and validate your niche. You only need a general skill or area of interest." },
                  { q: "I'm a complete beginner. Can I do this?", a: "Yes. The system is built for people who have never launched a product. Every step has AI prompts that guide you through it. No technical skills required." },
                  { q: "What if I don't finish in 14 days?",     a: "You keep lifetime access. The 14-day structure is a constraint to force momentum — not an expiring deadline. Designed for 1–2 hours per day." },
                  { q: "When does the product launch?",          a: "Summer 2026. Join the waitlist at the top of this page to be notified the moment it goes live. Early access members are first in." },
                ].map((faq, i) => (
                  <details key={i} className="group border-b border-white/[0.05] py-4 first:border-t first:border-white/[0.05]">
                    <summary className="cursor-pointer flex justify-between items-center text-white/70 font-medium text-sm list-none [&::-webkit-details-marker]:hidden select-none">
                      {faq.q}
                      <ChevronDown className="w-4 h-4 text-white/25 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                    </summary>
                    <p className="mt-3 text-white/35 text-sm leading-relaxed pr-8">{faq.a}</p>
                  </details>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════
            CLOSE
        ════════════════════════════════════════ */}
        <section className="py-24 px-6">
          <div className="max-w-xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-[2.25rem] font-medium tracking-tight mb-8">
                In 14 days, you&apos;ll either:
              </h2>
              <div className="space-y-2 mb-10">
                <p className="text-white/55 text-base">Have a product live online.</p>
                <p className="text-white/20 text-xs py-1">or</p>
                <p className="text-white/55 text-base">Have your money back.</p>
              </div>
              <p className="text-white/25 text-sm mb-10">Either way, you stop wondering what could have been.</p>
              <EmailCapture />
            </FadeIn>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.04] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/25">
          <p>&copy; 2026 BM Digital LLC. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="mailto:hello@oneproductai.com" className="hover:text-white/60 transition-colors">Contact</a>
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
