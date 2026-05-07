"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowRight,
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
  Shield,
  Briefcase,
  GraduationCap,
  Users,
  Trophy,
  Palette,
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

const AnimatedBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="relative h-2 rounded-full bg-zinc-800 overflow-hidden">
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full bg-blue-500"
        initial={{ width: "0%" }}
        animate={isInView ? { width: "5%" } : { width: "0%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
};

/* ─────────────────────────────────────────────
   Email Capture
───────────────────────────────────────────── */
const EmailCapture = ({ className = "" }: { className?: string }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    if (typeof window !== "undefined") {
      const existing = JSON.parse(localStorage.getItem("waitlist_emails") || "[]");
      localStorage.setItem("waitlist_emails", JSON.stringify([...existing, email]));
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-green-400 font-medium text-sm">You&apos;re on the list! We&apos;ll notify you at launch.</p>
        <p className="text-white/30 text-xs mt-2">Launching Summer 2026</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col items-center gap-3 ${className}`}>
      <p className="text-xs text-blue-400 font-medium tracking-[0.15em] uppercase">Launching Summer 2026</p>
      <div className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
        />
        <button
          type="submit"
          className="px-5 py-3 bg-[#2563EB] hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] text-white font-medium rounded-xl text-sm transition-all duration-200 whitespace-nowrap"
        >
          Get notified at launch
        </button>
      </div>
      <p className="text-xs text-white/30">No spam. Just the launch announcement.</p>
    </form>
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
    <div className="relative min-h-screen font-sans overflow-x-hidden bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
      {/* Grain */}
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04] bg-[#0A0A0A]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-medium text-base tracking-tight text-white flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#2563EB] flex items-center justify-center">
              <Rocket className="w-3.5 h-3.5 text-white" />
            </div>
            One Product AI
          </div>
          <div className="flex items-center gap-6">
            <a href="#engine" className="text-sm text-white/50 hover:text-white transition-colors hidden sm:block">How it works</a>
            <a href="#pricing" className="text-sm text-white/50 hover:text-white transition-colors hidden sm:block">Pricing</a>
            <a href="#waitlist" className="text-sm font-medium bg-white text-black px-5 py-2 rounded-xl hover:bg-zinc-200 transition-colors">
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ══════════════════════════════════════
            1. HERO
        ══════════════════════════════════════ */}
        <motion.section id="waitlist" ref={heroRef} style={{ opacity: heroOpacity, scale: heroScale }} className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[88vh] flex items-center">
          <motion.div
            className="pointer-events-none absolute top-[15%] left-[8%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.05] blur-[140px]"
            animate={{ x: [0, 4, -3, 0], y: [0, -3, 4, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-[15%] right-[8%] w-[400px] h-[400px] rounded-full bg-violet-600/[0.03] blur-[120px]"
            animate={{ x: [0, -3, 4, 0], y: [0, 4, -3, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="max-w-4xl mx-auto text-center relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-medium tracking-tight leading-[1.12] mb-8">
                <span className="block text-white">Stop Chasing Ideas.</span>
                <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-transparent mt-1">Launch ONE Product in 14 Days.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-4 font-medium"
            >
              With AI as your execution coach — not your distraction.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-sm text-white/40 max-w-xl mx-auto mb-4 leading-relaxed"
            >
              Launching Summer 2026. Join the early access list.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-xs text-white/30 max-w-md mx-auto mb-12"
            >
              Not a course. Not a SaaS tool. A focused execution engine for beginners who want to finish.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.75 }}>
              <EmailCapture />
            </motion.div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════
            2. REALITY CHECK
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 relative border-t border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/[0.02] blur-[120px] rounded-full" />
          <div className="max-w-3xl mx-auto relative text-center">
            <FadeIn>
              <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-10">
                {[
                  { num: "47", label: "unfinished ideas" },
                  { num: "3", label: "abandoned courses" },
                  { num: "0", label: "launched products" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-medium text-white mb-1">{item.num}</div>
                    <div className="text-xs text-white/40">{item.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-white/60 mb-3">It&apos;s not that you lack ideas.</p>
              <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 font-medium">You lack structure.</p>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            3. THE ONE PRODUCT LAUNCH ENGINE™
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 relative border-t border-white/5" id="engine">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/[0.02] blur-[130px] rounded-full" />
          <div className="max-w-5xl mx-auto relative">
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.2em] text-blue-400 uppercase mb-4 text-center">Our Proprietary System</p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-center">
                The One Product Launch Engine™
              </h2>
              <p className="text-base text-white/50 text-center max-w-xl mx-auto mb-12">
                A structured execution system designed to force progress.
              </p>
            </FadeIn>

            <ProgressLine />

            <div className="grid md:grid-cols-3 gap-5">
              {[
                { phase: "Phase 1", days: "Days 1–2", title: "Product Profile™", tagline: "Clarity before action.", icon: <Target className="w-5 h-5 text-blue-400" /> },
                { phase: "Phase 2", days: "Days 3–4", title: "Market Proof Score™", tagline: "Demand before effort.", icon: <TrendingUp className="w-5 h-5 text-blue-400" /> },
                { phase: "Phase 3", days: "Days 5–14", title: "Build & Launch", tagline: "Execution before perfection.", icon: <Rocket className="w-5 h-5 text-blue-400" /> },
              ].map((item, i) => (
                <StaggerItem key={i} index={i}>
                  <div className="relative h-full p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] group hover:border-blue-500/30 hover:-translate-y-[3px] hover:shadow-lg hover:shadow-black/20 transition-all duration-200">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-xs uppercase tracking-widest text-blue-400 font-medium">{item.phase}</span>
                      <span className="text-xs text-white/30">{item.days}</span>
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4 group-hover:border-blue-500/20 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-medium mb-2 text-white">{item.title}</h3>
                    <p className="text-white/50 text-sm">{item.tagline}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>

            <FadeIn delay={0.3}>
              <div className="mt-12 text-center">
                <p className="text-xl md:text-2xl text-white font-medium">This is execution. <span className="text-white/30">Not inspiration.</span></p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            4. VISUAL TIMELINE
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 text-center">Your 14&#8209;Day Map</h2>
            </FadeIn>
            <div className="space-y-2">
              {[
                { days: "Day 1–2", task: "Clarity", desc: "Define your product and audience" },
                { days: "Day 3–4", task: "Validation", desc: "Verify real demand before building" },
                { days: "Day 5–9", task: "Build", desc: "Create your product with AI prompts" },
                { days: "Day 10–12", task: "Packaging", desc: "Landing page, emails, checkout" },
                { days: "Day 13–14", task: "Launch", desc: "Go live and announce" },
              ].map((item, i) => (
                <StaggerItem key={i} index={i}>
                  <div className="flex items-center gap-5 p-4 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:border-blue-500/20 hover:-translate-y-[3px] hover:shadow-lg hover:shadow-black/20 transition-all duration-200">
                    <div className="w-20 flex-shrink-0">
                      <span className="text-xs font-mono text-blue-400 font-medium">{item.days}</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-white font-medium text-sm">{item.task}</span>
                      <span className="text-white/40 text-sm ml-3">{item.desc}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
            <FadeIn delay={0.2}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/40">
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
        <section className="py-16 px-6 relative border-t border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-blue-600/[0.02] blur-[100px] rounded-full" />
          <div className="max-w-3xl mx-auto relative">
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.2em] text-blue-400 uppercase mb-4 text-center">Preview</p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-center">See Day 1 in Action</h2>
              <p className="text-white/50 text-center mb-10 max-w-lg mx-auto text-sm">15 minutes. 3 questions. Your first product direction — generated by AI.</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.04] bg-white/[0.01]">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="text-xs text-white/30 ml-3 font-mono">day-1-session.ai</span>
                </div>
                <div className="p-7 space-y-5">
                  <div className="flex gap-3">
                    <MessageSquare className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/30 text-xs mb-1">AI Coach</p>
                      <p className="text-white/60 text-sm leading-relaxed">Answer 3 questions about your skills, interests, and available time. I&apos;ll generate 5 product directions tailored to you.</p>
                    </div>
                  </div>
                  <div className="pl-7 space-y-2">
                    {[
                      { n: "Q1", q: "What do people ask you for help with?" },
                      { n: "Q2", q: "What can you do for 1 hour without getting bored?" },
                      { n: "Q3", q: "Who would pay to solve a problem you understand?" },
                    ].map((item, i) => (
                      <div key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.04]">
                        <p className="text-xs text-white/30 mb-0.5">{item.n}</p>
                        <p className="text-white/60 text-sm">{item.q}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-1">
                    <Zap className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/30 text-xs mb-1">Output</p>
                      <p className="text-white/60 text-sm">5 structured product directions → pick one → move to Day 2.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            BUILDING IN PUBLIC
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.2em] text-blue-400 uppercase mb-4 text-center">Transparency</p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-center">Building in Public</h2>
              <p className="text-white/50 text-center mb-12 text-sm">No hype. Here&apos;s exactly where we are.</p>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Landing Page",
                  status: "Live",
                  statusClass: "text-green-400 bg-green-400/10 border-green-400/20",
                  desc: "You're reading it right now.",
                  icon: <Globe className="w-5 h-5 text-blue-400" />,
                },
                {
                  title: "AI Coach",
                  status: "In Progress",
                  statusClass: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
                  desc: "Prompt library and daily system in development.",
                  icon: <Zap className="w-5 h-5 text-blue-400" />,
                },
                {
                  title: "Launch",
                  status: "Summer 2026",
                  statusClass: "text-blue-400 bg-blue-400/10 border-blue-400/20",
                  desc: "Full product releases Summer 2026.",
                  icon: <Rocket className="w-5 h-5 text-blue-400" />,
                },
              ].map((item, i) => (
                <StaggerItem key={i} index={i}>
                  <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-blue-500/30 hover:-translate-y-[3px] hover:shadow-lg hover:shadow-black/20 transition-all duration-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${item.statusClass}`}>{item.status}</span>
                    </div>
                    <h3 className="text-white font-medium mb-2">{item.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            6. AI EXECUTION COACH
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 text-center">Meet Your AI Execution Coach</h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-5">
              <StaggerItem index={0}>
                <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] h-full hover:border-blue-500/30 hover:-translate-y-[3px] hover:shadow-lg hover:shadow-black/20 transition-all duration-200">
                  <h3 className="font-medium text-xs mb-5 text-green-400 uppercase tracking-wide">It does:</h3>
                  <ul className="space-y-3">
                    {[
                      "Breaks tasks into daily steps",
                      "Enforces validation before building",
                      "Redirects distraction back to focus",
                      "Simplifies when you feel overwhelmed",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                        <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
              <StaggerItem index={1}>
                <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] h-full hover:border-blue-500/30 hover:-translate-y-[3px] hover:shadow-lg hover:shadow-black/20 transition-all duration-200">
                  <h3 className="font-medium text-xs mb-5 text-red-400 uppercase tracking-wide">It does NOT:</h3>
                  <ul className="space-y-3">
                    {[
                      "Promise income or sales",
                      "Do the work for you",
                      "Let you skip phases",
                      "Go off-topic or entertain tangents",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/40 text-sm">
                        <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            </div>
            <FadeIn delay={0.15}>
              <p className="text-center text-white/30 text-xs mt-6">Tone: Calm. Direct. Structured.</p>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            7. WHAT YOU BUILD IN 14 DAYS
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 text-center">What You Build in 14 Days</h2>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { icon: <BookOpen className="w-5 h-5" />, label: "Digital product" },
                { icon: <Globe className="w-5 h-5" />, label: "Live landing page" },
                { icon: <Mail className="w-5 h-5" />, label: "Email sequence" },
                { icon: <BarChart3 className="w-5 h-5" />, label: "Validation proof" },
                { icon: <Package className="w-5 h-5" />, label: "Launch checklist" },
              ].map((item, i) => (
                <StaggerItem key={i} index={i}>
                  <div className="flex flex-col items-center gap-3 p-5 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:border-blue-500/20 hover:-translate-y-[3px] hover:shadow-lg hover:shadow-black/20 transition-all duration-200 text-center">
                    <div className="text-blue-400">{item.icon}</div>
                    <span className="text-white/60 text-xs font-medium">{item.label}</span>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PERSONAS
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-center">Who This Is For</h2>
              <p className="text-white/50 text-center mb-12 text-sm max-w-lg mx-auto">
                One Product AI is built for people who have a skill and want to turn it into income — without being a developer or marketer.
              </p>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { icon: <Briefcase className="w-5 h-5" />, title: "Employee", desc: "Monetize your expertise outside your 9–5" },
                { icon: <GraduationCap className="w-5 h-5" />, title: "Teacher", desc: "Turn your curriculum into a digital product" },
                { icon: <Users className="w-5 h-5" />, title: "Parent", desc: "Build income on a flexible schedule" },
                { icon: <Trophy className="w-5 h-5" />, title: "Coach", desc: "Package your methods and sell at scale" },
                { icon: <Palette className="w-5 h-5" />, title: "Creative", desc: "Productize your craft or creative skill" },
              ].map((item, i) => (
                <StaggerItem key={i} index={i}>
                  <div className="flex flex-col items-center gap-3 p-5 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:border-blue-500/20 hover:-translate-y-[3px] hover:shadow-lg hover:shadow-black/20 transition-all duration-200 text-center h-full">
                    <div className="text-blue-400">{item.icon}</div>
                    <span className="text-white font-medium text-sm">{item.title}</span>
                    <span className="text-white/40 text-xs leading-relaxed">{item.desc}</span>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            8. WHAT'S INCLUDED
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 text-center">What&apos;s Included</h2>
            </FadeIn>
            <div className="space-y-2 mb-8">
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
                  <div className="flex items-center gap-3 p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:border-blue-500/20 hover:-translate-y-[3px] transition-all duration-200">
                    <div className="w-6 h-6 rounded-md bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-white/70 text-sm font-medium">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </div>
            <FadeIn delay={0.1}>
              <p className="text-center text-white/40 text-sm">Works with your own AI (ChatGPT, Claude, Gemini). <span className="text-white/25">No subscription required.</span></p>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            9. BONUSES
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.2em] text-blue-400 uppercase mb-4 text-center">Included Free</p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 text-center">Bonus Resources</h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "SEO Starter Guide",
                "Facebook Ads Starter Blueprint",
                "Legal Templates Pack",
                "30-Day Content Calendar",
                "5 Niche Quick-Start Tracks",
              ].map((item, i) => (
                <StaggerItem key={i} index={i}>
                  <div className="flex items-center gap-3 p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.02]">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-white/60 text-sm">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            COMPARISON
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-center">How We Compare</h2>
              <p className="text-white/50 text-center mb-12 text-sm">Not everything that looks like a solution is one.</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="overflow-x-auto rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-4 px-5 text-white/30 font-normal text-xs">Feature</th>
                      <th className="py-4 px-4 text-white/30 font-normal text-xs text-center">Free AI</th>
                      <th className="py-4 px-4 text-white/30 font-normal text-xs text-center">Courses</th>
                      <th className="py-4 px-4 text-white/30 font-normal text-xs text-center">Communities</th>
                      <th className="py-4 px-4 text-blue-400 font-medium text-xs text-center">One Product AI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Structured roadmap", free: false, courses: true, communities: false, us: true },
                      { feature: "Built-in validation", free: false, courses: false, communities: false, us: true },
                      { feature: "AI prompts included", free: false, courses: false, communities: false, us: true },
                      { feature: "14-day deadline", free: false, courses: false, communities: false, us: true },
                      { feature: "One-time payment", free: true, courses: true, communities: false, us: true },
                      { feature: "Beginner friendly", free: false, courses: true, communities: true, us: true },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.01] transition-colors">
                        <td className="py-3.5 px-5 text-white/60">{row.feature}</td>
                        <td className="py-3.5 px-4 text-center">{row.free ? <Check className="w-4 h-4 text-green-400 mx-auto" /> : <X className="w-4 h-4 text-white/20 mx-auto" />}</td>
                        <td className="py-3.5 px-4 text-center">{row.courses ? <Check className="w-4 h-4 text-green-400 mx-auto" /> : <X className="w-4 h-4 text-white/20 mx-auto" />}</td>
                        <td className="py-3.5 px-4 text-center">{row.communities ? <Check className="w-4 h-4 text-green-400 mx-auto" /> : <X className="w-4 h-4 text-white/20 mx-auto" />}</td>
                        <td className="py-3.5 px-4 text-center">{row.us ? <Check className="w-4 h-4 text-blue-400 mx-auto" /> : <X className="w-4 h-4 text-white/20 mx-auto" />}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            10. WHY $49
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">Why $49?</h2>
              <div className="text-white/50 text-sm leading-relaxed space-y-3 max-w-lg mx-auto">
                <p>We chose accessibility over high margins.</p>
                <p>This is a system, not coaching. You execute independently using your own AI tools.</p>
                <p className="text-white/70 font-medium">$49 removes price as an excuse. Your only barrier is commitment.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            11. TRUST LAYER
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-blue-500/20 transition-colors duration-200">
                <div className="flex flex-col md:flex-row gap-7 items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/15 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 font-bold text-xs">BM</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-4">BM Digital LLC</h3>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/40">
                      {["US-registered company", "No affiliations", "No hidden upsells", "Real refund policy", "Real support email", "Transparent pricing"].map((item, i) => (
                        <div key={i} className="flex items-center gap-2"><Check className="w-3 h-3 text-blue-400" />{item}</div>
                      ))}
                    </div>
                    <p className="text-white/30 text-sm mt-4">Contact: <a href="mailto:hello@oneproductai.com" className="text-blue-400 hover:text-blue-300 transition-colors">hello@oneproductai.com</a></p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PRICING
        ══════════════════════════════════════ */}
        <section id="pricing" className="py-16 px-6 relative border-t border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-blue-600/[0.03] blur-[120px] rounded-full" />
          <div className="max-w-md mx-auto relative">
            <FadeIn>
              <div className="relative rounded-2xl border border-blue-500/15 bg-gradient-to-b from-white/[0.03] to-transparent p-9 overflow-hidden text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

                <div className="mb-7">
                  <span className="text-5xl md:text-6xl font-medium text-white">$49</span>
                  <p className="text-white/40 mt-2 text-sm">One&#8209;time payment. Lifetime access. No subscription.</p>
                </div>

                <div className="text-left space-y-2 mb-8">
                  {[
                    "Full 14-Day Launch System",
                    "Product Profile™ + Market Proof Score™",
                    "50+ AI Prompts (copy-paste ready)",
                    "Templates (landing page, emails, legal)",
                    "Bonus pack (SEO, Ads, Content)",
                    "Lifetime updates",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm">
                      <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span className="text-white/60">{item}</span>
                    </div>
                  ))}
                </div>

                <EmailCapture />

                <p className="mt-4 text-xs text-white/25">14&#8209;day money&#8209;back guarantee. No questions.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            12. FAQ
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-medium tracking-tight mb-10 text-center">FAQ</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-0">
                {[
                  { q: "Is this a course?", a: "No. It's a structured execution system. You get daily tasks, AI prompts, and validation checkpoints. You don't move forward until each phase is complete." },
                  { q: "Do I need ChatGPT Plus?", a: "No. Works with any AI — free ChatGPT, Claude, Gemini. You use your own tools. We don't sell AI access." },
                  { q: "Do you guarantee sales?", a: "No. We guarantee a launched product if you follow the system. Sales depend on your niche, effort, and market. We make zero income claims." },
                  { q: "What counts as \"launch\"?", a: "A digital product publicly available online (Gumroad, Shopify, Etsy) with a live landing page. Not an idea. Not a draft. Live and available for purchase." },
                  { q: "Do I need to pick a niche before I buy?", a: "No. Day 1 is specifically designed to help you find and validate your niche. You only need a general skill or interest — the system helps you narrow it into a viable product direction." },
                  { q: "I'm a complete beginner. Can I do this?", a: "Yes. The system is built for people who have never launched a product before. Every step is broken down with AI prompts that guide you. No coding, no design skills, no marketing background required." },
                  { q: "What if I don't finish in 14 days?", a: "You keep lifetime access. The 14-day structure is a constraint to force momentum — not a deadline that expires. That said, the system is designed to be completed in 14 days at 1–2 hours per day." },
                  { q: "When does the product launch?", a: "Summer 2026. Join the waitlist at the top of this page to be notified the moment it goes live. Early access members will be first in." },
                ].map((item, i) => (
                  <details key={i} className="group border-b border-white/[0.06] py-4">
                    <summary className="cursor-pointer flex justify-between items-center text-white/80 font-medium text-sm list-none [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <ChevronDown className="w-4 h-4 text-white/30 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                    </summary>
                    <p className="mt-3 text-white/40 text-sm leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            13. FINAL CLOSE
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">In 14 days, you&apos;ll either:</h2>
              <div className="space-y-3 mb-10">
                <p className="text-white/60 text-base">Have a product live online</p>
                <p className="text-white/20 text-xs">or</p>
                <p className="text-white/60 text-base">Have your money back</p>
              </div>
              <p className="text-white/30 text-sm mb-10">Either way, you stop guessing.</p>
              <EmailCapture />
            </FadeIn>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.04] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
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
