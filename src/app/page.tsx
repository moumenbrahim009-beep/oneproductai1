"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Check,
  X,
  Rocket,
  Target,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Utilities
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
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

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
            1. HERO
        ══════════════════════════════════════ */}
        <motion.section ref={heroRef} style={{ opacity: heroOpacity, scale: heroScale }} className="relative pt-32 pb-40 px-6 overflow-hidden min-h-[95vh] flex items-center">
          <div className="pointer-events-none absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.07] blur-[120px]" />
          <div className="pointer-events-none absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-violet-600/[0.05] blur-[100px]" />

          <div className="max-w-5xl mx-auto text-center relative z-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              <span className="block text-white">Launch Your First Digital Product</span>
              <span className="block text-white">in 14 Days —</span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-transparent mt-2">With AI as Your Personal Execution Coach.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-6 leading-relaxed"
            >
              A structured 3&#8209;phase launch system with built&#8209;in validation, ready&#8209;to&#8209;use AI prompts, and a clear daily roadmap.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm text-zinc-500 max-w-xl mx-auto mb-12 leading-relaxed"
            >
              Not a course. Not a SaaS tool.<br />
              A focused execution system designed for beginners who want to launch something real.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="flex flex-col items-center gap-4">
              <a href="#pricing" className="group inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-600/20 text-base">
                Start Your 14&#8209;Day Build
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <p className="text-xs text-zinc-600">14&#8209;day money&#8209;back guarantee. No income promises.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════
            2. PROBLEM
        ══════════════════════════════════════ */}
        <section className="py-32 px-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/[0.03] blur-[120px] rounded-full" />
          <div className="max-w-3xl mx-auto relative text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 leading-[1.15]">
                You don&apos;t have an idea problem.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">You have a finishing problem.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="text-zinc-400 text-lg leading-relaxed space-y-4 max-w-xl mx-auto text-left">
                <p>You&apos;ve watched the videos.</p>
                <p>Saved the prompts.</p>
                <p>Started five ideas.</p>
                <p>Finished none.</p>
                <p className="pt-4 text-zinc-300 font-medium">The issue isn&apos;t information.<br />It&apos;s execution.<br />And execution requires structure.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            3. THE SHIFT
        ══════════════════════════════════════ */}
        <section className="py-32 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">
                This isn&apos;t another course.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="text-zinc-400 text-lg leading-relaxed space-y-4 max-w-xl mx-auto">
                <p>Most products teach concepts.<br />Then leave you alone.</p>
                <p className="text-zinc-300 font-medium">One Product AI walks you step&#8209;by&#8209;step until your product is live.</p>
                <p>You don&apos;t move forward until each phase is complete.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            4. THE ONE PRODUCT LAUNCH ENGINE™
        ══════════════════════════════════════ */}
        <section className="py-32 px-6 relative" id="how-it-works">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/[0.04] blur-[120px] rounded-full" />
          <div className="max-w-6xl mx-auto relative">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-5 text-center">Our Proprietary System</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-center">
                The One Product Launch Engine™
              </h2>
              <p className="text-lg text-zinc-400 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
                A structured 3&#8209;phase execution system designed to take beginners from idea to live product in 14 days.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { phase: "Phase 1", days: "Days 1-2", title: "Product Profile™", desc: "Define who you want to help and the specific problem you'll solve. Clear. Simple. Focused.", icon: <Target className="w-6 h-6 text-blue-400" /> },
                { phase: "Phase 2", days: "Days 3-4", title: "Market Proof Score™", desc: "Before you build anything, you verify real demand signals. If the idea is weak — you adjust. No guessing. No gambling.", icon: <TrendingUp className="w-6 h-6 text-violet-400" /> },
                { phase: "Phase 3", days: "Days 5-14", title: "Build & Launch", desc: "You follow daily steps using AI prompts and templates. By Day 14, your product is publicly available online.", icon: <Rocket className="w-6 h-6 text-blue-400" /> },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.12}>
                  <div className="relative h-full p-8 rounded-3xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm overflow-hidden group hover:border-zinc-700/80 transition-all duration-300">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs uppercase tracking-widest text-blue-400 font-medium">{item.phase}</span>
                        <span className="text-xs text-zinc-600">{item.days}</span>
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center mb-5">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.3}>
              <div className="mt-16 text-center">
                <p className="text-2xl md:text-3xl text-white font-medium">This is execution. <span className="text-zinc-600">Not inspiration.</span></p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            5. WHAT YOU ACTUALLY GET
        ══════════════════════════════════════ */}
        <section className="py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-14 text-center">What you actually get</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-4 mb-12">
                {[
                  "14-Day Roadmap",
                  "Product Profile™ framework",
                  "Market Proof Score™ validation system",
                  "50+ ready-to-use AI prompts",
                  "Landing page & email templates",
                  "Launch checklist",
                  "Lifetime updates",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800/40 bg-zinc-900/30 hover:border-zinc-700/60 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-zinc-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center p-6 rounded-2xl border border-zinc-800/40 bg-zinc-900/20">
                <p className="text-zinc-400">You use your own AI (ChatGPT, Claude, Gemini).<br /><span className="text-zinc-500">No subscriptions required.</span></p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            6. WHAT HAPPENS AFTER 14 DAYS?
        ══════════════════════════════════════ */}
        <section className="py-32 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">What happens after 14 days?</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30">
                  <h3 className="text-lg font-bold text-white mb-6">You keep:</h3>
                  <ul className="space-y-3 text-left">
                    {["All prompts", "All templates", "All frameworks", "Lifetime updates"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30">
                  <h3 className="text-lg font-bold text-white mb-6">The only thing that ends:</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Daily guided structure.</p>
                  <p className="text-zinc-300 font-medium mt-6 text-sm">You&apos;ll already have launched.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            7. WHO THIS IS FOR
        ══════════════════════════════════════ */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-14 text-center">Who this is for</h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              <FadeIn delay={0.1}>
                <div className="p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 h-full">
                  <h3 className="font-bold text-sm mb-6 text-green-400 uppercase tracking-wide">This is for you if:</h3>
                  <ul className="space-y-4">
                    {[
                      "Complete beginners",
                      "9-to-5 employees with 1-2 hours per day",
                      "Overthinkers who need structure",
                      "People who want to launch ONE thing",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* 8. WHO THIS IS NOT FOR */}
              <FadeIn delay={0.2}>
                <div className="p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 h-full">
                  <h3 className="font-bold text-sm mb-6 text-red-400 uppercase tracking-wide">This is not for you if:</h3>
                  <ul className="space-y-4">
                    {[
                      "You're looking for \"easy money\"",
                      "You want done-for-you work",
                      "You won't follow steps",
                      "You expect income guarantees",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-400 text-sm">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            9. GUARANTEE
        ══════════════════════════════════════ */}
        <section className="py-32 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="p-12 rounded-3xl border border-zinc-800/60 bg-zinc-900/30 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                <Shield className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Launch your product in 14 days<br />or get your money back.
                </h2>
                <p className="text-zinc-500 text-lg">No questions.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            10. PRICING
        ══════════════════════════════════════ */}
        <section id="pricing" className="py-32 px-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/[0.05] blur-[120px] rounded-full" />
          <div className="max-w-lg mx-auto relative">
            <FadeIn>
              <div className="relative rounded-3xl border border-blue-500/20 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 p-10 overflow-hidden text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-20 bg-blue-600/[0.06] blur-2xl" />

                <div className="mb-8 relative">
                  <span className="text-7xl md:text-8xl font-bold text-white">$147</span>
                  <p className="text-zinc-400 mt-3">One&#8209;time payment. Lifetime access.</p>
                </div>

                <div className="text-left space-y-3 mb-10">
                  {[
                    "Full 14-Day Launch System",
                    "Product Profile™ framework",
                    "Market Proof Score™ validation",
                    "50+ AI prompts (copy-paste ready)",
                    "Landing page & email templates",
                    "Launch checklist",
                    "Lifetime updates",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>

                <a href="#" className="group block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-2xl transition-all hover:shadow-xl hover:shadow-blue-600/20 hover:scale-[1.01] text-base">
                  Start Your 14&#8209;Day Build
                  <ArrowRight className="inline w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <div className="mt-6 space-y-1 text-xs text-zinc-600">
                  <p>No subscription. No hidden upsells.</p>
                  <p>14&#8209;day money&#8209;back guarantee.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            11. FAQ
        ══════════════════════════════════════ */}
        <section className="py-32 px-6">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Questions</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-2">
                <details className="group border-b border-white/10 py-5">
                  <summary className="cursor-pointer flex justify-between items-center text-white font-medium text-[15px]">
                    Is this a course?
                    <ChevronDown className="w-4 h-4 text-zinc-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-4 text-zinc-400 text-sm leading-relaxed">No. It&apos;s a structured execution system. Courses teach concepts and leave you alone. One Product AI gives you one task per day, AI prompts to execute it, and a validation checkpoint before you build. You don&apos;t move forward until each phase is complete.</p>
                </details>
                <details className="group border-b border-white/10 py-5">
                  <summary className="cursor-pointer flex justify-between items-center text-white font-medium text-[15px]">
                    Do I need ChatGPT Plus?
                    <ChevronDown className="w-4 h-4 text-zinc-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-4 text-zinc-400 text-sm leading-relaxed">No. The prompts work with any AI tool — free ChatGPT, Claude, Gemini, or any other model. You use your own AI. We don&apos;t sell subscriptions or AI access. We recommend free tools first.</p>
                </details>
                <details className="group border-b border-white/10 py-5">
                  <summary className="cursor-pointer flex justify-between items-center text-white font-medium text-[15px]">
                    Do you guarantee sales?
                    <ChevronDown className="w-4 h-4 text-zinc-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-4 text-zinc-400 text-sm leading-relaxed">No. We guarantee you&apos;ll have a launched product if you follow the system. Sales depend on your niche, effort, and market. We make no income claims. Our guarantee is: launch in 14 days or get your money back.</p>
                </details>
                <details className="group border-b border-white/10 py-5">
                  <summary className="cursor-pointer flex justify-between items-center text-white font-medium text-[15px]">
                    What counts as &ldquo;launch&rdquo;?
                    <ChevronDown className="w-4 h-4 text-zinc-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-4 text-zinc-400 text-sm leading-relaxed">A digital product publicly available online (Gumroad, Shopify, Etsy, etc.) with a live landing page. That&apos;s our definition. Not &ldquo;I have an idea.&rdquo; Not &ldquo;I started writing.&rdquo; Live. Public. Available for purchase.</p>
                </details>
              </div>
            </FadeIn>
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
                      Questions? <a href="mailto:hello@oneproductai.com" className="text-blue-400 hover:text-blue-300 transition-colors">hello@oneproductai.com</a>
                    </p>
                  </div>
                </div>
              </div>
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
