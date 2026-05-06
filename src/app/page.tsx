"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowRight,
  Shield,
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
} from "lucide-react";

/* ─────────────────────────────────────────────
   Animation Utilities
───────────────────────────────────────────── */
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
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const StaggerItem = ({
  children,
  index = 0,
  className = "",
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const ProgressLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="relative h-[2px] w-full mb-10 overflow-hidden rounded-full bg-zinc-800/50">
      <motion.div
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 via-blue-400 to-violet-500"
        initial={{ width: "0%" }}
        animate={isInView ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden bg-[#0A0A0A]">
      {/* Grain */}
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04] bg-[#0A0A0A]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-base tracking-tight text-white flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <Rocket className="w-3.5 h-3.5 text-white" />
            </div>
            One Product AI
          </div>
          <div className="flex items-center gap-6">
            <a href="#engine" className="text-sm text-zinc-400 hover:text-white transition-colors hidden sm:block">How it works</a>
            <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors hidden sm:block">Pricing</a>
            <a href="#pricing" className="text-sm font-semibold bg-white text-black px-5 py-2 rounded-full hover:bg-zinc-200 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ══════════════════════════════════════
            1. HERO
        ══════════════════════════════════════ */}
        <motion.section ref={heroRef} style={{ opacity: heroOpacity, scale: heroScale }} className="relative pt-36 pb-32 px-6 overflow-hidden min-h-[92vh] flex items-center">
          <motion.div
            className="pointer-events-none absolute top-[15%] left-[8%] w-[550px] h-[550px] rounded-full bg-blue-600/[0.06] blur-[140px]"
            animate={{ x: [0, 4, -3, 0], y: [0, -3, 4, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-[15%] right-[8%] w-[450px] h-[450px] rounded-full bg-violet-600/[0.04] blur-[120px]"
            animate={{ x: [0, -3, 4, 0], y: [0, 4, -3, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="max-w-4xl mx-auto text-center relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-[4.2rem] font-bold tracking-tight leading-[1.08] mb-8">
                <span className="block text-white">Stop Chasing Ideas.</span>
                <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-transparent mt-1">Launch ONE Product in 14 Days.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-4 font-medium"
            >
              With AI as your execution coach — not your distraction.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-base text-zinc-400 max-w-xl mx-auto mb-4 leading-relaxed"
            >
              A structured 3&#8209;phase launch system with built&#8209;in validation, daily prompts, and a clear roadmap.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-sm text-zinc-500 max-w-md mx-auto mb-12"
            >
              Not a course. Not a SaaS tool.<br />
              A focused execution engine for beginners who want to finish.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.75 }} className="flex flex-col items-center gap-4">
              <a href="#pricing" className="cta-pulse group inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-2xl hover:shadow-blue-600/20 text-base">
                Start Your 14&#8209;Day Build
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <p className="text-xs text-zinc-600">14&#8209;day money&#8209;back guarantee. No income promises.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════
            2. REALITY CHECK
        ══════════════════════════════════════ */}
        <section className="py-28 px-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-600/[0.03] blur-[120px] rounded-full" />
          <div className="max-w-3xl mx-auto relative text-center">
            <FadeIn>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-12">
                {[
                  { num: "47", label: "unfinished ideas" },
                  { num: "3", label: "abandoned courses" },
                  { num: "0", label: "launched products" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{item.num}</div>
                    <div className="text-xs text-zinc-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl md:text-2xl text-zinc-300 font-medium mb-4">
                It&apos;s not that you lack ideas.
              </p>
              <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 font-bold">
                You lack structure.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            3. THE ONE PRODUCT LAUNCH ENGINE™
        ══════════════════════════════════════ */}
        <section className="py-28 px-6 relative" id="engine">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/[0.03] blur-[130px] rounded-full" />
          <div className="max-w-6xl mx-auto relative">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-5 text-center">Our Proprietary System</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-center">
                The One Product Launch Engine™
              </h2>
              <p className="text-lg text-zinc-400 text-center max-w-xl mx-auto mb-14">
                A structured execution system designed to force progress.
              </p>
            </FadeIn>

            <ProgressLine />

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { phase: "Phase 1", days: "Days 1–2", title: "Product Profile™", tagline: "Clarity before action.", icon: <Target className="w-6 h-6 text-blue-400" /> },
                { phase: "Phase 2", days: "Days 3–4", title: "Market Proof Score™", tagline: "Demand before effort.", icon: <TrendingUp className="w-6 h-6 text-blue-400" /> },
                { phase: "Phase 3", days: "Days 5–14", title: "Build & Launch", tagline: "Execution before perfection.", icon: <Rocket className="w-6 h-6 text-blue-400" /> },
              ].map((item, i) => (
                <StaggerItem key={i} index={i}>
                  <div className="relative h-full p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 group hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-200">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-xs uppercase tracking-widest text-blue-400 font-medium">{item.phase}</span>
                      <span className="text-xs text-zinc-600">{item.days}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-zinc-800/60 border border-zinc-700/40 flex items-center justify-center mb-5 group-hover:border-blue-500/20 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-zinc-400 text-sm">{item.tagline}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>

            <FadeIn delay={0.3}>
              <div className="mt-14 text-center">
                <p className="text-2xl md:text-3xl text-white font-medium">This is execution. <span className="text-zinc-600">Not inspiration.</span></p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            4. VISUAL TIMELINE
        ══════════════════════════════════════ */}
        <section className="py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-14 text-center">Your 14&#8209;Day Map</h2>
            </FadeIn>
            <div className="space-y-3">
              {[
                { days: "Day 1–2", task: "Clarity", desc: "Define your product and audience" },
                { days: "Day 3–4", task: "Validation", desc: "Verify real demand before building" },
                { days: "Day 5–9", task: "Build", desc: "Create your product with AI prompts" },
                { days: "Day 10–12", task: "Packaging", desc: "Landing page, emails, checkout" },
                { days: "Day 13–14", task: "Launch", desc: "Go live and announce" },
              ].map((item, i) => (
                <StaggerItem key={i} index={i}>
                  <div className="flex items-center gap-6 p-5 rounded-xl border border-zinc-800/40 bg-zinc-900/20 hover:border-blue-500/20 transition-colors">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-sm font-mono text-blue-400 font-medium">{item.days}</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-white font-medium">{item.task}</span>
                      <span className="text-zinc-500 text-sm ml-3">{item.desc}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
            <FadeIn delay={0.2}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>~17 focused hours total</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span>~1–2 hours per day</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            5. SEE DAY 1 IN ACTION
        ══════════════════════════════════════ */}
        <section className="py-28 px-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-blue-600/[0.03] blur-[100px] rounded-full" />
          <div className="max-w-3xl mx-auto relative">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-5 text-center">Preview</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-center">See Day 1 in Action</h2>
              <p className="text-zinc-400 text-center mb-12 max-w-lg mx-auto">15 minutes. 3 questions. Your first product direction — generated by AI.</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 overflow-hidden">
                {/* Terminal-style header */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-zinc-800/40 bg-zinc-900/50">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <span className="text-xs text-zinc-600 ml-3 font-mono">day-1-session.ai</span>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <MessageSquare className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-zinc-500 text-xs mb-1">AI Coach</p>
                        <p className="text-zinc-300 text-sm leading-relaxed">Answer 3 questions about your skills, interests, and available time. I&apos;ll generate 5 product directions tailored to you.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 pl-8">
                      <div className="w-full space-y-2">
                        <div className="p-3 rounded-lg bg-zinc-800/40 border border-zinc-700/30">
                          <p className="text-xs text-zinc-500 mb-1">Q1</p>
                          <p className="text-zinc-300 text-sm">What do people ask you for help with?</p>
                        </div>
                        <div className="p-3 rounded-lg bg-zinc-800/40 border border-zinc-700/30">
                          <p className="text-xs text-zinc-500 mb-1">Q2</p>
                          <p className="text-zinc-300 text-sm">What can you do for 1 hour without getting bored?</p>
                        </div>
                        <div className="p-3 rounded-lg bg-zinc-800/40 border border-zinc-700/30">
                          <p className="text-xs text-zinc-500 mb-1">Q3</p>
                          <p className="text-zinc-300 text-sm">Who would pay to solve a problem you understand?</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Zap className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-zinc-500 text-xs mb-1">Output</p>
                        <p className="text-zinc-300 text-sm">5 structured product directions → pick one → move to Day 2.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            6. AI EXECUTION COACH
        ══════════════════════════════════════ */}
        <section className="py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-14 text-center">Meet Your AI Execution Coach</h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              <StaggerItem index={0}>
                <div className="p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 h-full hover:border-blue-500/20 transition-colors duration-200">
                  <h3 className="font-bold text-sm mb-6 text-green-400 uppercase tracking-wide">It does:</h3>
                  <ul className="space-y-4">
                    {[
                      "Breaks tasks into daily steps",
                      "Enforces validation before building",
                      "Redirects distraction back to focus",
                      "Simplifies when you feel overwhelmed",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
              <StaggerItem index={1}>
                <div className="p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 h-full hover:border-blue-500/20 transition-colors duration-200">
                  <h3 className="font-bold text-sm mb-6 text-red-400 uppercase tracking-wide">It does NOT:</h3>
                  <ul className="space-y-4">
                    {[
                      "Promise income or sales",
                      "Do the work for you",
                      "Let you skip phases",
                      "Go off-topic or entertain tangents",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            </div>
            <FadeIn delay={0.15}>
              <p className="text-center text-zinc-500 text-sm mt-8">Tone: Calm. Direct. Structured.</p>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            7. WHAT YOU BUILD IN 14 DAYS
        ══════════════════════════════════════ */}
        <section className="py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-14 text-center">What You Build in 14 Days</h2>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { icon: <BookOpen className="w-6 h-6" />, label: "Digital product" },
                { icon: <Globe className="w-6 h-6" />, label: "Live landing page" },
                { icon: <Mail className="w-6 h-6" />, label: "Email sequence" },
                { icon: <BarChart3 className="w-6 h-6" />, label: "Validation proof" },
                { icon: <Package className="w-6 h-6" />, label: "Launch checklist" },
              ].map((item, i) => (
                <StaggerItem key={i} index={i}>
                  <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-zinc-800/40 bg-zinc-900/20 hover:border-blue-500/20 transition-colors text-center">
                    <div className="text-blue-400">{item.icon}</div>
                    <span className="text-zinc-300 text-sm font-medium">{item.label}</span>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            8. WHAT'S INCLUDED
        ══════════════════════════════════════ */}
        <section className="py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-14 text-center">What&apos;s Included</h2>
            </FadeIn>
            <div className="space-y-3 mb-10">
              {[
                "14-Day Roadmap",
                "Product Profile™ Framework",
                "Market Proof Score™ Rubric",
                "50+ AI Prompts",
                "Landing Page Template",
                "Email Templates",
                "Launch Checklist",
                "Lifetime Updates",
              ].map((item, i) => (
                <StaggerItem key={i} index={i}>
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800/40 bg-zinc-900/20 hover:border-blue-500/20 hover:-translate-y-0.5 transition-all duration-200">
                    <div className="w-7 h-7 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <span className="text-zinc-200 text-sm font-medium">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </div>
            <FadeIn delay={0.1}>
              <div className="text-center p-5 rounded-xl border border-zinc-800/30 bg-zinc-900/10">
                <p className="text-zinc-400 text-sm">Works with your own AI (ChatGPT, Claude, Gemini). <span className="text-zinc-500">No subscription required.</span></p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            9. BONUSES
        ══════════════════════════════════════ */}
        <section className="py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-5 text-center">Included Free</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-14 text-center">Bonus Resources</h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "SEO Starter Guide",
                "Facebook Ads Starter Blueprint",
                "Legal Templates Pack",
                "30-Day Content Calendar",
                "5 Niche Quick-Start Tracks",
              ].map((item, i) => (
                <StaggerItem key={i} index={i}>
                  <div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/40 bg-zinc-900/20">
                    <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-zinc-300 text-sm">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            10. WHY $49
        ══════════════════════════════════════ */}
        <section className="py-28 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Why $49?</h2>
              <div className="text-zinc-400 text-base leading-relaxed space-y-4">
                <p>We chose accessibility over high margins.</p>
                <p>This is a system, not coaching. You execute independently using your own AI tools.</p>
                <p className="text-zinc-300 font-medium">$49 removes price as an excuse. Your only barrier is commitment.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            11. TRUST LAYER
        ══════════════════════════════════════ */}
        <section className="py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="p-10 rounded-2xl border border-zinc-800/60 bg-zinc-900/20">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-14 h-14 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 font-bold text-sm">BM</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">BM Digital LLC</h3>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-zinc-400">
                      <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-400" />US-registered company</div>
                      <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-400" />No affiliations</div>
                      <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-400" />No hidden upsells</div>
                      <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-400" />Real refund policy</div>
                      <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-400" />Real support email</div>
                      <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-400" />Transparent pricing</div>
                    </div>
                    <p className="text-zinc-500 text-sm mt-5">Contact: <a href="mailto:hello@oneproductai.com" className="text-blue-400 hover:text-blue-300 transition-colors">hello@oneproductai.com</a></p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PRICING
        ══════════════════════════════════════ */}
        <section id="pricing" className="py-28 px-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-blue-600/[0.04] blur-[120px] rounded-full" />
          <div className="max-w-lg mx-auto relative">
            <FadeIn>
              <div className="relative rounded-2xl border border-blue-500/20 bg-gradient-to-b from-zinc-900 to-zinc-950 p-10 overflow-hidden text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

                <div className="mb-8">
                  <span className="text-6xl md:text-7xl font-bold text-white">$49</span>
                  <p className="text-zinc-400 mt-3 text-sm">One&#8209;time payment. Lifetime access. No subscription.</p>
                </div>

                <div className="text-left space-y-2.5 mb-10">
                  {[
                    "Full 14-Day Launch System",
                    "Product Profile™ + Market Proof Score™",
                    "50+ AI Prompts (copy-paste ready)",
                    "Templates (landing page, emails, legal)",
                    "Bonus pack (SEO, Ads, Content)",
                    "Lifetime updates",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>

                <a href="#" className="cta-pulse group block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/20 text-base">
                  Start Your 14&#8209;Day Build
                  <ArrowRight className="inline w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <p className="mt-5 text-xs text-zinc-600">14&#8209;day money&#8209;back guarantee. No questions.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            12. FAQ
        ══════════════════════════════════════ */}
        <section className="py-28 px-6">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">FAQ</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-1">
                {[
                  { q: "Is this a course?", a: "No. It's a structured execution system. You get daily tasks, AI prompts, and validation checkpoints. You don't move forward until each phase is complete." },
                  { q: "Do I need ChatGPT Plus?", a: "No. Works with any AI — free ChatGPT, Claude, Gemini. You use your own tools. We don't sell AI access." },
                  { q: "Do you guarantee sales?", a: "No. We guarantee a launched product if you follow the system. Sales depend on your niche, effort, and market. We make zero income claims." },
                  { q: "What counts as \"launch\"?", a: "A digital product publicly available online (Gumroad, Shopify, Etsy) with a live landing page. Not an idea. Not a draft. Live and available for purchase." },
                ].map((item, i) => (
                  <details key={i} className="group border-b border-white/10 py-5">
                    <summary className="cursor-pointer flex justify-between items-center text-white font-medium text-[15px] list-none [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <ChevronDown className="w-4 h-4 text-zinc-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                    </summary>
                    <p className="mt-4 text-zinc-400 text-sm leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            13. FINAL CLOSE
        ══════════════════════════════════════ */}
        <section className="py-28 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">In 14 days, you&apos;ll either:</h2>
              <div className="space-y-4 mb-10">
                <p className="text-zinc-300 text-lg">Have a product live online</p>
                <p className="text-zinc-600 text-sm">or</p>
                <p className="text-zinc-300 text-lg">Have your money back</p>
              </div>
              <p className="text-zinc-500 mb-10">Either way, you stop guessing.</p>
              <a href="#pricing" className="cta-pulse group inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-2xl hover:shadow-blue-600/20 text-base">
                Start Your 14&#8209;Day Build
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-800/40 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <p>&copy; 2026 BM Digital LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@oneproductai.com" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
