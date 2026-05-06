"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  BookOpen,
  Bot,
  Brain,
  CheckCircle2,
  Clock,
  FileText,
  Gift,
  LifeBuoy,
  MessageSquare,
  Shield,
  Sparkles,
  TrendingUp,
  Zap,
  Rocket,
  Target,
  Wrench,
  Megaphone,
  Flag,
  Send,
  X,
  Check,
  AlertCircle,
  Users,
  Briefcase,
  GraduationCap,
  Home as HomeIcon,
  Palette,
  HeartHandshake,
  ArrowRight,
  Play,
  ChevronDown,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Utilities
───────────────────────────────────────────── */
const FadeIn = ({
  children,
  delay = 0,
  className = "",
  y = 30,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const timer = setInterval(() => {
      start += Math.ceil(end / 50);
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, value]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const DAYS = [
  { day: 1, time: "15 min", title: "Quick Win", desc: "10 ideas, pick one", phase: "build" },
  { day: 2, time: "45 min", title: "Project Brain", desc: "Map your product", phase: "build" },
  { day: 3, time: "60 min", title: "Market Proof Score™", desc: "Validate with real people", phase: "build" },
  { day: 4, time: "30 min", title: "Go/No-Go Gate", desc: "Data-driven decision", phase: "build" },
  { day: 5, time: "90 min", title: "Generate Content", desc: "AI-assisted draft", phase: "build" },
  { day: 6, time: "75 min", title: "Polish Content", desc: "Refine & edit", phase: "build" },
  { day: 7, time: "60 min", title: "Design Cover", desc: "Visual identity", phase: "build" },
  { day: 8, time: "45 min", title: "Pricing Decision", desc: "Market-based price", phase: "launch" },
  { day: 9, time: "60 min", title: "Sales Description", desc: "Copy that converts", phase: "launch" },
  { day: 10, time: "75 min", title: "Build Listing", desc: "Platform setup", phase: "launch" },
  { day: 11, time: "60 min", title: "Social Posts", desc: "Launch content", phase: "launch" },
  { day: 12, time: "45 min", title: "Email Network", desc: "Warm audience", phase: "launch" },
  { day: 13, time: "30 min", title: "Final Review", desc: "Quality check", phase: "launch" },
  { day: 14, time: "30 min", title: "LAUNCH!", desc: "Go live", phase: "launch" },
];

const WHAT_YOU_GET = [
  { icon: <Bot className="w-5 h-5" />, title: "OneAI Coach", desc: "Your personal AI business coach. Trained on the full system. Available 24/7.", color: "blue" },
  { icon: <Brain className="w-5 h-5" />, title: "14-Day Notion Portal", desc: "One task per day. Zero decisions. Just follow the path.", color: "violet" },
  { icon: <BookOpen className="w-5 h-5" />, title: "Master Guide", desc: "The complete playbook. 40+ pages of strategy you'll actually use.", color: "blue" },
  { icon: <Sparkles className="w-5 h-5" />, title: "50 AI Prompts", desc: "Copy-paste prompts for research, writing, sales, and launch.", color: "violet" },
  { icon: <FileText className="w-5 h-5" />, title: "AI User Manual", desc: "How to use AI like a pro. Any model, any platform.", color: "blue" },
  { icon: <Brain className="w-5 h-5" />, title: "Project Brain Template", desc: "Your second brain. Pre-wired for product creation.", color: "violet" },
  { icon: <LifeBuoy className="w-5 h-5" />, title: "Common Mistakes Guide", desc: "11 things that kill launches. Avoid them all.", color: "blue" },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Traffic Bonus Pack", desc: "Facebook Ads + Google Ads + SEO. Step-by-step.", color: "violet" },
  { icon: <Gift className="w-5 h-5" />, title: "Bonus Vault", desc: "Templates, swipe files, resources. Growing monthly.", color: "blue" },
  { icon: <Shield className="w-5 h-5" />, title: "Lifetime Access", desc: "Works forever. Any AI tool. Evergreen prompts.", color: "violet" },
];

const FAQS = [
  { q: "Will this work for my niche?", a: "Yes. The system is niche-agnostic. Whether you sell Notion templates, PDF guides, prompt packs, or mini-courses \u2014 the 14-day structure works the same. Your AI Coach helps you choose the right product for your skills." },
  { q: "I\u2019m a complete beginner. Can I do this?", a: "Built for you specifically. We assume zero audience, zero email list, zero experience. Day 1 is 15 minutes. The AI Coach answers every question. You need a computer, internet, and commitment. That\u2019s it." },
  { q: "What happens when AI tools change?", a: "The prompts focus on thinking frameworks, not specific features. They work with ChatGPT, Claude, Gemini, or whatever comes next. No updates needed \u2014 the system adapts automatically." },
  { q: "Why only $49? Is this legit?", a: "We believe the $997-course model is broken. It sells hope, not results. $49 removes price as an excuse. Our success metric isn\u2019t revenue \u2014 it\u2019s your launched product." },
  { q: "Who\u2019s behind this?", a: "BM Digital LLC, a US-registered company. Zero affiliations with any AI platform. We don\u2019t get paid to recommend tools. Our only incentive is your success. Contact: hello@oneproductai.com" },
  { q: "What if I don\u2019t finish in 14 days?", a: "Everything stays yours forever. The AI Coach, portal, guides \u2014 all lifetime access. 14 days is the recommended pace, but go at yours. Results vary based on effort and niche." },
];

const COMPARISON = [
  { feature: "Personal AI Coach", free: false, courses: false, communities: "partial", ours: true },
  { feature: "Personalized daily tasks", free: false, courses: false, communities: "partial", ours: true },
  { feature: "14-day launch system", free: false, courses: "partial", communities: false, ours: true },
  { feature: "One-time payment", free: true, courses: "partial", communities: false, ours: true },
  { feature: "Notion workspace", free: false, courses: "partial", communities: false, ours: true },
  { feature: "Validation before building", free: false, courses: false, communities: false, ours: true },
];

const BUILD_IN_PUBLIC = [
  { label: "MAY 4, 2026", title: "Day 1: Foundation", body: "Domain secured. LLC formed. First commits pushed.", highlighted: true },
  { label: "COMING SOON", title: "First product launch", body: "We\u2019ll use the system to launch our own product first.", highlighted: false },
  { label: "COMING SOON", title: "Real customer stories", body: "Once we have real launches, you\u2019ll see them here.", highlighted: false },
];

/* ─────────────────────────────────────────────
   Components
───────────────────────────────────────────── */
function FaqItem({ faq, index, openFaq, setOpenFaq }: { faq: { q: string; a: string }; index: number; openFaq: number | null; setOpenFaq: (i: number | null) => void }) {
  const isOpen = openFaq === index;
  return (
    <div className="border border-zinc-800/80 rounded-2xl overflow-hidden bg-zinc-900/40 backdrop-blur transition-all hover:border-zinc-700">
      <button className="w-full px-7 py-5 flex items-center justify-between text-left font-medium hover:bg-zinc-800/30 transition-colors gap-4" onClick={() => setOpenFaq(isOpen ? null : index)}>
        <span className="text-zinc-100 text-[15px]">{faq.q}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
          <ChevronDown className="w-4 h-4 text-zinc-500" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <div className="px-7 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/60 pt-4">{faq.a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CompCell({ value }: { value: boolean | string }) {
  if (value === true) return <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-green-400" /></div>;
  if (value === false) return <div className="w-6 h-6 rounded-full bg-zinc-800/60 flex items-center justify-center mx-auto"><X className="w-3.5 h-3.5 text-zinc-600" /></div>;
  return <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto"><AlertCircle className="w-3.5 h-3.5 text-yellow-500" /></div>;
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const handleWaitlist = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setEmailStatus("error"); return; }
    setEmailStatus("loading");
    const existing = JSON.parse(localStorage.getItem("waitlist_emails") || "[]");
    existing.push({ email, timestamp: new Date().toISOString() });
    localStorage.setItem("waitlist_emails", JSON.stringify(existing));
    console.log("[Waitlist] New signup:", email);
    setTimeout(() => setEmailStatus("success"), 800);
  }, [email]);

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden bg-[#050507]">
      {/* Ambient grain */}
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.025]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04] bg-[#050507]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-base tracking-tight text-white flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <Rocket className="w-3.5 h-3.5 text-white" />
            </div>
            One Product AI
          </div>
          <div className="flex items-center gap-6">
            <a href="#how-it-works" className="text-sm text-zinc-400 hover:text-white transition-colors hidden sm:block">How it works</a>
            <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors hidden sm:block">Pricing</a>
            <a href="#pricing" className="text-sm font-semibold bg-white text-black px-5 py-2 rounded-full hover:bg-zinc-200 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ══════════════════════════════════════
            HERO — "Launch your digital product with AI in 14 days"
        ══════════════════════════════════════ */}
        <motion.section ref={heroRef} style={{ opacity: heroOpacity, scale: heroScale }} className="relative pt-32 pb-40 px-6 overflow-hidden min-h-[95vh] flex items-center">
          {/* Ambient orbs */}
          <div className="pointer-events-none absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.07] blur-[120px]" />
          <div className="pointer-events-none absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-violet-600/[0.05] blur-[100px]" />
          <div className="pointer-events-none absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-blue-400/[0.03] blur-[80px]" />

          <div className="max-w-5xl mx-auto text-center relative z-20">
            {/* Eyebrow */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-zinc-700/60 bg-zinc-900/60 text-xs font-medium text-zinc-300 mb-12 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                8.4 million Americans are building side hustles
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
            >
              <span className="block text-white">Launch your first</span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">digital product</span>
              <span className="block text-white">with AI in 14 days</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Not a course. Not a community. A <span className="text-white font-medium">14-day guided launch system</span> that
              takes you from idea to launched product. Day 1 is 15 minutes.
            </motion.p>

            {/* CTA Group */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a href="#pricing" className="group inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-600/20 text-base">
                Start Your 14-Day Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#how-it-works" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors px-4 py-3 rounded-xl hover:bg-zinc-800/50">
                <Play className="w-4 h-4" />
                See how it works
              </a>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-sm text-zinc-600">
              $49 one-time · No subscription · 14-day guarantee
            </motion.p>

            {/* Trust strip */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-16 flex items-center justify-center gap-8 text-xs text-zinc-600">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> US-registered LLC</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Zero AI affiliations</span>
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> Works with any AI tool</span>
            </motion.div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════
            STATS
        ══════════════════════════════════════ */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/[0.02] to-transparent" />
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {[
              { num: 8, suffix: ".4M", prefix: "", label: "Americans with side hustles", source: "Bureau of Labor Statistics, 2026" },
              { num: 891, suffix: "", prefix: "$", label: "Average monthly side income", source: "Bankrate Survey, 2024" },
              { num: 62, suffix: "%", prefix: "", label: "Quit within 30 days", source: "Industry research data" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center py-10 px-6 rounded-3xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm overflow-hidden group hover:border-zinc-700/80 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent tabular-nums mb-4">
                    <AnimatedCounter value={s.num} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <div className="text-sm text-zinc-300 font-medium mb-2">{s.label}</div>
                  <div className="text-[11px] text-zinc-600">{s.source}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
            14-DAY MAP
        ══════════════════════════════════════ */}
        <section className="py-32 px-6 relative" id="how-it-works">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-5 text-center">
                Your 14-Day Roadmap
              </p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5 text-center">
                Every day has <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">one clear task</span>
              </h2>
              <p className="text-zinc-400 text-center mb-6 max-w-xl mx-auto text-lg">
                No decisions. No overwhelm. Just follow the system.
              </p>
              <p className="text-center text-sm text-zinc-600 mb-16">
                Total commitment: <span className="text-zinc-300 font-medium">~14 hours over 14 days</span>
              </p>
            </FadeIn>

            {/* Week 1 */}
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-blue-600/40 to-transparent" />
                <span className="text-xs font-bold text-blue-400 uppercase tracking-[0.15em] whitespace-nowrap">Week 1 — Build Your Product</span>
                <div className="h-px flex-1 bg-gradient-to-l from-blue-600/40 to-transparent" />
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-12">
              {DAYS.slice(0, 7).map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative p-5 rounded-2xl border border-zinc-800/70 bg-zinc-900/50 text-center overflow-hidden hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 mb-3 mx-auto group-hover:bg-blue-600/20 group-hover:border-blue-500/40 transition-all">
                      <span className="text-sm font-bold text-blue-400">{d.day}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-2 text-zinc-500">
                      <Clock className="w-3 h-3" />
                      <span className="text-[11px] font-medium">{d.time}</span>
                    </div>
                    <p className="text-sm font-bold text-white mb-1 leading-tight">{d.title}</p>
                    <p className="text-[11px] text-zinc-500">{d.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Progress indicator */}
            <FadeIn>
              <div className="relative h-2 rounded-full bg-zinc-800/60 mb-12 mx-8 overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-600 via-violet-500 to-blue-400"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ backgroundSize: "200% 100%", animation: "shimmer 3s infinite linear" }} />
                </div>
              </div>
            </FadeIn>

            {/* Week 2 */}
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-violet-600/40 to-transparent" />
                <span className="text-xs font-bold text-violet-400 uppercase tracking-[0.15em] whitespace-nowrap">Week 2 — Launch & Sell</span>
                <div className="h-px flex-1 bg-gradient-to-l from-violet-600/40 to-transparent" />
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {DAYS.slice(7).map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i + 7) * 0.05 }}
                  className={`group relative p-5 rounded-2xl border text-center overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-default ${
                    d.day === 14
                      ? "border-blue-500/50 bg-gradient-to-b from-blue-600/15 via-violet-600/5 to-zinc-900 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20"
                      : "border-zinc-800/70 bg-zinc-900/50 hover:border-violet-500/30"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {d.day === 14 && <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-blue-500/20 blur-2xl" />}
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl border mb-3 mx-auto transition-all ${
                      d.day === 14
                        ? "bg-blue-600/20 border-blue-400/40 group-hover:bg-blue-600/30"
                        : "bg-violet-600/10 border-violet-500/20 group-hover:bg-violet-600/20 group-hover:border-violet-500/40"
                    }`}>
                      <span className={`text-sm font-bold ${d.day === 14 ? "text-blue-300" : "text-violet-400"}`}>{d.day}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-2 text-zinc-500">
                      <Clock className="w-3 h-3" />
                      <span className="text-[11px] font-medium">{d.time}</span>
                    </div>
                    <p className={`text-sm font-bold mb-1 leading-tight ${d.day === 14 ? "text-blue-200" : "text-white"}`}>{d.title}</p>
                    <p className="text-[11px] text-zinc-500">{d.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PROBLEM — "Why 62% quit"
        ══════════════════════════════════════ */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/[0.03] blur-[120px] rounded-full" />
          <div className="max-w-4xl mx-auto relative">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase mb-5 text-center">The Problem No One Talks About</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-center leading-[1.1]">
                You have <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">47 unfinished projects</span>
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-5 mb-16">
              {[
                { num: "62%", title: "Day 3 Abandonment", desc: "Buy course. Open 200 pages. Feel overwhelmed. Refund. We fixed this: Day 1 is 15 minutes." },
                { num: "12+", title: "The Course Graveyard", desc: "Courses bought and never finished. You don\u2019t need more information. You need a system that moves you forward." },
                { num: "0", title: "Products Launched", desc: "Ideas aren\u2019t the problem. Execution is. Our AI Coach catches you when you stop moving." },
              ].map((card, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="h-full p-7 rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm relative overflow-hidden group hover:border-zinc-700 transition-all duration-300">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-3xl font-bold bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent">{card.num}</span>
                    <h3 className="font-bold text-base mt-4 mb-3">{card.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <blockquote className="max-w-2xl mx-auto text-center">
                <div className="inline-block px-6 py-4 rounded-2xl border border-blue-500/20 bg-blue-600/[0.04]">
                  <p className="text-white font-medium text-lg leading-relaxed italic">
                    &ldquo;62% of creators quit before earning a dollar. Not because the idea was bad. Because they ran out of structure.&rdquo;
                  </p>
                </div>
              </blockquote>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SOLUTION
        ══════════════════════════════════════ */}
        <section className="py-32 px-6 relative">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/[0.04] blur-[100px] rounded-full" />
          <div className="max-w-6xl mx-auto relative">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <FadeIn>
                  <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-5">The System</p>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
                    One task per day.<br /><span className="text-zinc-500">One AI coach by your side.</span>
                  </h2>
                </FadeIn>
                <div className="space-y-6">
                  {[
                    { icon: <Brain className="w-5 h-5 text-blue-400" />, text: "Open your Notion portal. One task for today. Not 47 videos. Not a 90-page workbook. One task." },
                    { icon: <Bot className="w-5 h-5 text-violet-400" />, text: "Get stuck? Ask your AI Coach. It knows exactly where you are in the 14-day journey. No generic answers." },
                    { icon: <Rocket className="w-5 h-5 text-blue-400" />, text: "By Day 7, your product is built. By Day 14, it\u2019s live and selling. That\u2019s the whole thing." },
                  ].map((item, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                      <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-zinc-900/60 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <p className="text-zinc-300 leading-relaxed pt-2">{item.text}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>

              {/* Visual: Fake app preview */}
              <FadeIn delay={0.2} className="hidden md:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-b from-blue-600/10 to-violet-600/5 rounded-3xl blur-xl" />
                  <div className="relative rounded-2xl border border-zinc-700/60 bg-zinc-900/80 backdrop-blur-sm overflow-hidden shadow-2xl">
                    {/* Fake window bar */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/60 bg-zinc-900/60">
                      <div className="w-3 h-3 rounded-full bg-zinc-700" />
                      <div className="w-3 h-3 rounded-full bg-zinc-700" />
                      <div className="w-3 h-3 rounded-full bg-zinc-700" />
                      <div className="ml-4 text-[11px] text-zinc-500 font-mono">OneAI Coach</div>
                    </div>
                    {/* Fake chat */}
                    <div className="p-5 space-y-4">
                      <div className="flex gap-3 items-start">
                        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"><Bot className="w-3.5 h-3.5 text-white" /></div>
                        <div className="bg-zinc-800/80 rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
                          <p className="text-sm text-zinc-300">Welcome to Day 1! 👋 Let&apos;s find your product idea in 15 minutes. What&apos;s a skill people always ask you for help with?</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start justify-end">
                        <div className="bg-blue-600/20 border border-blue-500/20 rounded-2xl rounded-tr-md px-4 py-3 max-w-[75%]">
                          <p className="text-sm text-blue-200">I&apos;m pretty good at organizing Notion workspaces...</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"><Bot className="w-3.5 h-3.5 text-white" /></div>
                        <div className="bg-zinc-800/80 rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
                          <p className="text-sm text-zinc-300">Perfect. Notion templates are a proven market. Let&apos;s validate this on Day 3. For now, write down 3 specific Notion problems you&apos;ve solved for others.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start justify-end">
                        <div className="border border-zinc-700 rounded-2xl rounded-tr-md px-4 py-3 max-w-[75%] flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                          <p className="text-sm text-zinc-500 italic">typing...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            UNIQUE MECHANISM — "The One Product Launch Engine™"
        ══════════════════════════════════════ */}
        <section className="py-32 px-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/[0.04] blur-[120px] rounded-full" />
          <div className="max-w-5xl mx-auto relative">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase mb-5 text-center">The Secret</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5 text-center leading-[1.1]">
                The One Product<br /><span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Launch Engine™</span>
              </h2>
              <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto text-lg">
                Most systems skip straight to building. We don&apos;t. You validate <span className="text-white font-medium">before</span> you build. That&apos;s why our users finish.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Product Profile™",
                  desc: "Define exactly what you're building, who it's for, and why they'll pay. No guessing. No 'I think this might work.' Data.",
                  icon: <Target className="w-6 h-6 text-violet-400" />,
                  color: "violet",
                },
                {
                  step: "02",
                  title: "Market Proof Score™",
                  desc: "Talk to real people. Score demand on a 1-10 scale. Only products scoring 7+ move forward. The rest get killed early — saving you weeks.",
                  icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
                  color: "blue",
                },
                {
                  step: "03",
                  title: "Build Phase",
                  desc: "Only after validation passes. AI helps you create, polish, and launch in 10 days. No wasted effort on products nobody wants.",
                  icon: <Rocket className="w-6 h-6 text-violet-400" />,
                  color: "violet",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.12}>
                  <div className="relative h-full p-8 rounded-3xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm overflow-hidden group hover:border-zinc-700/80 transition-all duration-300">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className={`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      item.color === "violet" ? "bg-violet-600/10" : "bg-blue-600/10"
                    }`} />
                    <div className="relative">
                      <span className="text-xs font-bold text-zinc-600 tracking-widest">STEP {item.step}</span>
                      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mt-4 mb-5 transition-all duration-300 ${
                        item.color === "violet"
                          ? "bg-violet-600/10 border-violet-500/20 group-hover:bg-violet-600/20 group-hover:border-violet-500/40"
                          : "bg-blue-600/10 border-blue-500/20 group-hover:bg-blue-600/20 group-hover:border-blue-500/40"
                      }`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.3}>
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-zinc-800/60 bg-zinc-900/40 text-sm text-zinc-400">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>No product moves past Day 4 without a validated Market Proof Score™</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            NICHES — "Built for your background"
        ══════════════════════════════════════ */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-5 text-center">For Everyone</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-center">
                Works for <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">any background</span>
              </h2>
              <p className="text-zinc-400 text-center mb-16 max-w-lg mx-auto">The system adapts to you. Results vary based on niche and effort.</p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { icon: <Briefcase className="w-6 h-6 text-blue-400" />, title: "9-to-5 Employee", desc: "Launch a productivity template you wish your job had", gradient: "from-blue-600/10 to-transparent" },
                { icon: <GraduationCap className="w-6 h-6 text-violet-400" />, title: "Teacher", desc: "Turn your lesson plans into sellable printables", gradient: "from-violet-600/10 to-transparent" },
                { icon: <HomeIcon className="w-6 h-6 text-blue-400" />, title: "Parent", desc: "Build a Notion template solving your daily chaos", gradient: "from-blue-600/10 to-transparent" },
                { icon: <HeartHandshake className="w-6 h-6 text-violet-400" />, title: "Coach", desc: "Productize your knowledge into a digital download", gradient: "from-violet-600/10 to-transparent" },
                { icon: <Palette className="w-6 h-6 text-blue-400" />, title: "Creative", desc: "Sell the creative system you already use daily", gradient: "from-blue-600/10 to-transparent" },
              ].map((card, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div className="niche-card relative p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/40 h-full text-center overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-b ${card.gradient} opacity-0 group-hover:opacity-100`} />
                    <div className="relative">
                      <div className="niche-icon w-14 h-14 rounded-2xl bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                        {card.icon}
                      </div>
                      <h3 className="font-bold text-sm mb-2">{card.title}</h3>
                      <p className="text-zinc-500 text-xs leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            WHAT YOU GET
        ══════════════════════════════════════ */}
        <section className="py-32 px-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/[0.03] blur-[120px] rounded-full" />
          <div className="max-w-5xl mx-auto relative">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-5 text-center">Everything Included</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-center">
                10 tools. <span className="text-zinc-500">One price.</span>
              </h2>
              <p className="text-zinc-400 text-center mb-16 max-w-lg mx-auto">No upsells. No &ldquo;pro tier.&rdquo; Everything ships together.</p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-4">
              {WHAT_YOU_GET.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group flex gap-4 p-5 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700/60 transition-all duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${
                    item.color === "blue"
                      ? "bg-blue-600/10 border-blue-500/20 text-blue-400 group-hover:bg-blue-600/20 group-hover:border-blue-500/40"
                      : "bg-violet-600/10 border-violet-500/20 text-violet-400 group-hover:bg-violet-600/20 group-hover:border-violet-500/40"
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white mb-1">{item.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            COMPARISON
        ══════════════════════════════════════ */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-5 text-center">Why Us</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-center">
                $49 beats $497
              </h2>
              <p className="text-zinc-400 text-center mb-16 max-w-lg mx-auto">One AI Coach + daily system outperforms expensive alternatives.</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="overflow-x-auto rounded-2xl border border-zinc-800/60 bg-zinc-900/30 backdrop-blur-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800/60">
                      <th className="text-left py-4 px-5 text-zinc-400 font-medium">Feature</th>
                      <th className="text-center py-4 px-4 text-zinc-500 font-medium">Free AI</th>
                      <th className="text-center py-4 px-4 text-zinc-500 font-medium">$497 Courses</th>
                      <th className="text-center py-4 px-4 text-zinc-500 font-medium">Communities</th>
                      <th className="text-center py-4 px-4 text-blue-400 font-bold bg-blue-600/[0.04] border-l border-blue-500/10">One Product AI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row, i) => (
                      <tr key={i} className="border-b border-zinc-800/40 hover:bg-zinc-800/20 transition-colors">
                        <td className="py-4 px-5 text-zinc-300">{row.feature}</td>
                        <td className="py-4 px-4"><CompCell value={row.free} /></td>
                        <td className="py-4 px-4"><CompCell value={row.courses} /></td>
                        <td className="py-4 px-4"><CompCell value={row.communities} /></td>
                        <td className="py-4 px-4 bg-blue-600/[0.04] border-l border-blue-500/10"><CompCell value={row.ours} /></td>
                      </tr>
                    ))}
                    <tr className="hover:bg-zinc-800/20 transition-colors">
                      <td className="py-4 px-5 text-zinc-300 font-bold">Price</td>
                      <td className="py-4 px-4 text-center text-zinc-500">$0</td>
                      <td className="py-4 px-4 text-center text-zinc-500">$497+</td>
                      <td className="py-4 px-4 text-center text-zinc-500">$99/mo</td>
                      <td className="py-4 px-4 text-center font-bold text-blue-400 bg-blue-600/[0.04] border-l border-blue-500/10">$49</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-zinc-600 text-sm mt-6 text-center">We built One Product AI because nothing else combines all of these at this price.</p>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            BUILDING IN PUBLIC
        ══════════════════════════════════════ */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-5 text-center">Transparency</p>
              <h2 className="text-4xl font-bold tracking-tight mb-5 text-center">No fake testimonials.</h2>
              <p className="text-zinc-400 text-center mb-14 max-w-lg mx-auto">Real progress, documented publicly as it happens.</p>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-5">
              {BUILD_IN_PUBLIC.map((item, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className={`p-7 rounded-2xl border h-full ${item.highlighted ? "border-blue-500/30 bg-blue-600/[0.04]" : "border-zinc-800/50 bg-zinc-900/30 opacity-50"}`}>
                    <span className={`text-[11px] font-bold tracking-widest ${item.highlighted ? "text-blue-400" : "text-zinc-600"}`}>{item.label}</span>
                    <h3 className="font-bold text-base mt-4 mb-2">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            INDEPENDENCE
        ══════════════════════════════════════ */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-5 text-center">Trust</p>
              <h2 className="text-4xl font-bold tracking-tight mb-14 text-center">Zero affiliations. Zero hidden agenda.</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="p-7 rounded-2xl border border-zinc-800/60 bg-zinc-900/30">
                  <h3 className="font-bold text-sm mb-5 text-zinc-400 uppercase tracking-wide">We don&apos;t</h3>
                  <ul className="space-y-3">
                    {["Partner with OpenAI", "Partner with Anthropic", "Partner with Google", "Use affiliate links", "Earn commissions", "Upsell you later", "Lock you into subscriptions"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-400"><X className="w-4 h-4 text-red-400/80 flex-shrink-0" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-7 rounded-2xl border border-blue-500/20 bg-blue-600/[0.03]">
                  <h3 className="font-bold text-sm mb-5 text-blue-400 uppercase tracking-wide">We do</h3>
                  <ul className="space-y-3">
                    {["Work with ANY AI (your choice)", "One payment, lifetime access", "Recommend only what works", "Offer honest refund policy", "Update based on real feedback", "Earn money only from product sales", "Focus 100% on your result"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-300"><Check className="w-4 h-4 text-green-400/80 flex-shrink-0" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PRICING
        ══════════════════════════════════════ */}
        <section id="pricing" className="py-32 px-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/[0.05] blur-[120px] rounded-full" />
          <div className="max-w-lg mx-auto relative">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-5 text-center">Simple Pricing</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">
                One price. Everything.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="relative rounded-3xl border border-blue-500/20 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 p-10 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-20 bg-blue-600/[0.06] blur-2xl" />

                <div className="text-center mb-10 relative">
                  <span className="text-7xl md:text-8xl font-bold text-white">$49</span>
                  <p className="text-zinc-400 mt-3">One-time payment. Lifetime access.</p>
                </div>

                <ul className="space-y-3.5 mb-10">
                  {[
                    "Custom AI Coach (24/7, trained on the system)",
                    "Private 14-day Notion portal",
                    "50+ AI prompts (copy-paste ready)",
                    "Project Brain template",
                    "Master Guide (40+ pages)",
                    "AI User Manual",
                    "Traffic Bonus: Facebook + Google + SEO",
                    "Lifetime access to all materials",
                    "14-day money-back guarantee",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      <CheckCircle2 className="w-4.5 h-4.5 text-blue-400 flex-shrink-0" />
                      <span className="text-zinc-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <a href="#" className="group block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4.5 rounded-2xl transition-all hover:shadow-xl hover:shadow-blue-600/20 hover:scale-[1.01] text-base">
                  Start Your 14-Day Journey
                  <ArrowRight className="inline w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <p className="text-center text-xs text-zinc-600 mt-4">Secure checkout · Instant access · No subscription</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            GUARANTEE
        ══════════════════════════════════════ */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-5 text-center">Risk-Free</p>
              <h2 className="text-4xl font-bold tracking-tight mb-5 text-center">14-day money-back guarantee</h2>
              <p className="text-zinc-400 text-center mb-14 max-w-lg mx-auto">Two paths. Both honest. Both work.</p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-5">
              <FadeIn>
                <div className="h-full p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-6"><Shield className="w-6 h-6 text-blue-400" /></div>
                  <h3 className="font-bold text-lg mb-3">Quick Path (48 hours)</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">No questions asked. Email hello@oneproductai.com within 48 hours. Full refund in 24 hours.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="h-full p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30">
                  <div className="w-12 h-12 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center mb-6"><Shield className="w-6 h-6 text-violet-400" /></div>
                  <h3 className="font-bold text-lg mb-3">Full Trial (Day 3-14)</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Try the system. Show us your progress. If it didn&apos;t work, we refund 100%. Just email what didn&apos;t click.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FAQ
        ══════════════════════════════════════ */}
        <section className="py-32 px-6">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-5 text-center">FAQ</p>
              <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Honest answers.</h2>
            </FadeIn>
            <div className="space-y-3">
              {FAQS.map((faq, i) => <FaqItem key={i} faq={faq} index={i} openFaq={openFaq} setOpenFaq={setOpenFaq} />)}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            ABOUT
        ══════════════════════════════════════ */}
        <section className="py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="p-10 rounded-3xl border border-zinc-800/60 bg-zinc-900/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 font-bold text-sm">BM</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-1">BM Digital LLC</h2>
                    <p className="text-zinc-500 text-sm mb-5">US-registered company · Zero affiliations</p>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                      We built One Product AI after watching too many good ideas die in Notion pages. The pattern was always the same: too many options, not enough structure. So we built the system we wish we&apos;d had.
                    </p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Questions? <a href="mailto:hello@oneproductai.com" className="text-blue-400 hover:text-blue-300 transition-colors">hello@oneproductai.com</a>. We read everything.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            WAITLIST / FINAL CTA
        ══════════════════════════════════════ */}
        <section className="relative py-40 px-6 overflow-hidden">
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px]" style={{ background: "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.06) 40%, transparent 70%)" }} />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <FadeIn>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.08]">
                Your 47th project<br />
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">can be different.</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                This system doesn&apos;t let you stop. Doesn&apos;t let you feel lost. Every day has one task. Your AI coach keeps you moving. After Day 14, everything stays with you — forever.
              </p>

              {emailStatus === "success" ? (
                <div className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-green-500/30 bg-green-600/[0.05] text-green-400 font-medium">
                  <CheckCircle2 className="w-5 h-5" />
                  You&apos;re on the list! We&apos;ll notify you at launch.
                </div>
              ) : (
                <form onSubmit={handleWaitlist} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailStatus("idle"); }}
                    className={`flex-1 px-5 py-4 rounded-2xl bg-zinc-900/60 border text-sm text-white placeholder-zinc-600 outline-none transition-all backdrop-blur-sm ${
                      emailStatus === "error" ? "border-red-500/50" : "border-zinc-700/60 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
                    }`}
                  />
                  <button
                    type="submit"
                    disabled={emailStatus === "loading"}
                    className="bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold px-7 py-4 rounded-2xl transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-600/20 text-sm whitespace-nowrap"
                  >
                    {emailStatus === "loading" ? "Joining..." : "Notify Me"}
                  </button>
                </form>
              )}
              {emailStatus === "error" && <p className="text-red-400 text-xs mt-3">Please enter a valid email.</p>}

              <p className="text-xs text-zinc-600 mt-6">$49 one-time · No spam · Unsubscribe anytime</p>
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
