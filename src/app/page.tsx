"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

/* ─── Variants ─── */
const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.75, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

/* ─── Line ─── */
const L = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.p variants={fade} className={className}>
    {children}
  </motion.p>
);

/* ─── Spacer ─── */
const Sp = ({ size = "h-6" }: { size?: string }) => (
  <div className={size} aria-hidden />
);

/* ─── In-screen rule ─── */
const Rule = () => (
  <div className="w-6 h-px bg-white/[0.08] mx-auto my-8" aria-hidden />
);

/* ─── Between-screen divider ─── */
const Divider = () => (
  <div className="flex justify-center px-6">
    <div className="w-full max-w-4xl border-t border-white/10" />
  </div>
);

/* ─── Screen ─── */
const Screen = ({
  id = "",
  bg = "bg-[#09090f]",
  num = "",
  children,
}: {
  id?: string;
  bg?: string;
  num?: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className={`relative min-h-screen flex flex-col items-center justify-center px-6 py-20 ${bg}`}
  >
    {num && (
      <span className="absolute top-7 left-6 sm:left-8 font-mono text-[10px] text-white/18 tracking-[0.3em] select-none">
        {num}
      </span>
    )}
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="w-full max-w-2xl text-center"
    >
      {children}
    </motion.div>
  </section>
);

/* ─── Email capture ─── */
const EmailCapture = () => {
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
      <div className="text-center">
        <p className="text-sm text-green-400 font-medium">You&apos;re on the list.</p>
        <p className="text-xs text-white/25 mt-1">We&apos;ll notify you at launch — Summer 2026.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col items-center gap-3 w-full">
      <div className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
        />
        <button
          type="submit"
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
        >
          Enter Early Access
        </button>
      </div>
      <p className="text-[11px] text-white/20">Launching Summer 2026.</p>
    </form>
  );
};

/* ════════════════════════════════════════
   PAGE
════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090f] text-white font-sans">

      {/* Noise */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.018]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* ── Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.04] bg-[#09090f]/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-5 h-[54px] flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium">
            <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center">
              <Rocket className="w-3 h-3 text-white" />
            </div>
            <span className="text-white/75">One Product AI</span>
          </div>
          <a
            href="#access"
            className="text-xs font-medium bg-white/90 text-black px-3.5 py-1.5 rounded-lg hover:bg-white transition-colors"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      <main>

        {/* ════════ 01 ════════ */}
        <Screen id="top" bg="bg-[#09090f]" num="01">
          <L className="text-3xl sm:text-4xl font-medium text-white/85 leading-tight">
            Most people never ship.
          </L>
          <Sp size="h-8" />
          <L className="text-lg sm:text-xl text-white/35">They plan.</L>
          <L className="text-lg sm:text-xl text-white/35">They research.</L>
          <L className="text-lg sm:text-xl text-white/35">They restart.</L>
          <Sp size="h-5" />
          <L className="text-lg sm:text-xl text-white/18">Nothing ships.</L>
        </Screen>

        <Divider />

        {/* ════════ 02 ════════ */}
        <Screen bg="bg-[#0e1014]" num="02">
          <L className="text-lg sm:text-xl text-white/38">Not because they lack intelligence.</L>
          <L className="text-lg sm:text-xl text-white/38">Not because they lack ambition.</L>
          <Sp size="h-8" />
          <L className="text-2xl sm:text-3xl font-medium text-white/80 leading-snug">
            Because they build without structure.
          </L>
          <Sp size="h-8" />
          <L className="text-base text-white/22">Random effort.</L>
          <L className="text-base text-white/22">Random ideas.</L>
          <L className="text-base text-white/22">Random outcomes.</L>
        </Screen>

        <Divider />

        {/* ════════ 03 ════════ */}
        <Screen bg="bg-[#11141a]" num="03">
          <L className="text-lg sm:text-xl text-white/35">We don&apos;t sell motivation.</L>
          <L className="text-lg sm:text-xl text-white/35">We don&apos;t sell shortcuts.</L>
          <L className="text-lg sm:text-xl text-white/35">We don&apos;t sell passive income fantasies.</L>
          <Sp size="h-8" />
          <L className="text-2xl sm:text-3xl font-medium text-white/85">
            We build constraint systems.
          </L>
        </Screen>

        <Divider />

        {/* ════════ 04 ════════ */}
        <Screen bg="bg-[#0e1014]" num="04">
          <L className="text-2xl sm:text-3xl font-medium text-white/45 leading-snug">One product.</L>
          <L className="text-2xl sm:text-3xl font-medium text-white/60 leading-snug">Fourteen days.</L>
          <L className="text-2xl sm:text-3xl font-medium text-white/75 leading-snug">No skipping.</L>
          <Sp size="h-6" />
          <L className="text-5xl sm:text-6xl font-medium text-white/90">Ship.</L>
        </Screen>

        <Divider />

        {/* ════════ 05 ════════ */}
        <Screen bg="bg-[#11141a]" num="05">
          <L className="text-lg sm:text-xl text-white/50">Clarity before building.</L>
          <L className="text-lg sm:text-xl text-white/50">Demand before effort.</L>
          <L className="text-lg sm:text-xl text-white/50">Structure before action.</L>
          <Sp size="h-8" />
          <L className="text-2xl sm:text-3xl font-medium text-white/85">This is architecture.</L>
          <Sp size="h-2" />
          <L className="text-xl sm:text-2xl text-white/28">Not inspiration.</L>
        </Screen>

        <Divider />

        {/* ════════ 06 ════════ */}
        <Screen bg="bg-[#0e1014]" num="06">
          <L className="text-xl sm:text-2xl text-white/38">You don&apos;t enter a course.</L>
          <L className="text-2xl sm:text-3xl font-medium text-white/80">You enter a system.</L>
          <Sp size="h-10" />
          <L className="font-mono text-sm sm:text-base text-white/38">AI Assistant → answers.</L>
          <L className="font-mono text-sm sm:text-base text-white/38">AI Coach → enforces.</L>
          <L className="font-mono text-sm sm:text-base text-white/55">Launch Engine™ → structures.</L>
        </Screen>

        <Divider />

        {/* ════════ 07 ════════ */}
        <Screen bg="bg-[#11141a]" num="07">
          <L className="text-xl sm:text-2xl text-white/38">This is not philosophy.</L>
          <L className="text-2xl sm:text-3xl font-medium text-white/80">It&apos;s a system.</L>
          <Rule />
          <L className="text-sm sm:text-base text-white/50">14-Day Roadmap</L>
          <L className="text-sm sm:text-base text-white/50">Product Profile™ Framework</L>
          <L className="text-sm sm:text-base text-white/50">Market Proof Score™ Rubric</L>
          <L className="text-sm sm:text-base text-white/50">50+ AI Prompts — copy-paste ready</L>
          <L className="text-sm sm:text-base text-white/50">Templates — page, emails, legal</L>
          <L className="text-sm sm:text-base text-white/50">Lifetime Updates</L>
          <Rule />
          <L className="text-xs sm:text-sm text-white/22">Works with any free AI tool.</L>
          <L className="text-xs sm:text-sm text-white/22">No subscription required.</L>
        </Screen>

        <Divider />

        {/* ════════ 08 ════════ */}
        <Screen bg="bg-[#0e1014]" num="08">
          <L className="text-lg sm:text-xl text-white/38">
            Let&apos;s say you&apos;re a 9&#8209;to&#8209;5 employee.
          </L>
          <Sp size="h-10" />
          <L className="font-mono text-base sm:text-lg text-white/50">Day 1 → Define.</L>
          <L className="font-mono text-base sm:text-lg text-white/50">Day 3 → Validate.</L>
          <L className="font-mono text-base sm:text-lg text-white/65">Day 14 → Live.</L>
          <Sp size="h-8" />
          <L className="text-base text-white/22">Not viral.</L>
          <L className="text-base text-white/22">Not magical.</L>
          <Sp size="h-2" />
          <L className="text-xl sm:text-2xl font-medium text-white/75">Real.</L>
        </Screen>

        <Divider />

        {/* ════════ 09 ════════ */}
        <Screen bg="bg-[#11141a]" num="09">
          <L className="text-2xl sm:text-3xl font-medium text-white/80">Not for everyone.</L>
          <Sp size="h-10" />
          <L className="text-base text-white/28">If you want results without effort — not for you.</L>
          <L className="text-base text-white/28">If you want done&#8209;for&#8209;you — not for you.</L>
          <L className="text-base text-white/28">If you want viral shortcuts — not for you.</L>
          <L className="text-base text-white/28">If you want motivation, not structure — not for you.</L>
          <Sp size="h-10" />
          <L className="text-base text-white/60">If you want to ship one real product — enter.</L>
          <L className="text-base text-white/60">If you want to validate before you build — enter.</L>
          <L className="text-base text-white/60">If you want to stop restarting — enter.</L>
        </Screen>

        <Divider />

        {/* ════════ 10 — ACCESS ════════ */}
        <section
          id="access"
          className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#0e1014]"
        >
          <span className="absolute top-7 left-6 sm:left-8 font-mono text-[10px] text-white/18 tracking-[0.3em] select-none">
            10
          </span>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%]"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.06), transparent 70%)",
            }}
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full max-w-2xl text-center relative z-10"
          >
            <L className="text-3xl sm:text-4xl font-medium text-white/80">Access.</L>
            <Sp size="h-3" />
            <L className="text-5xl sm:text-6xl font-medium text-white">$49.</L>
            <Sp size="h-5" />
            <L className="text-xs sm:text-sm text-white/35 max-w-xs mx-auto leading-relaxed">
              Early access locks in the $49 price before public release.
            </L>
            <Sp size="h-6" />
            <L className="text-base text-white/30">One time.</L>
            <L className="text-base text-white/30">No subscription.</L>
            <L className="text-base text-white/30">No upsells.</L>
            <Sp size="h-10" />
            <motion.div variants={fade} className="flex justify-center">
              <EmailCapture />
            </motion.div>
          </motion.div>
        </section>

        <Divider />

        {/* ════════ 11 — AUTHORITY ════════ */}
        <Screen bg="bg-[#11141a]" num="11">
          <L className="font-mono text-[10px] tracking-[0.3em] text-white/18 uppercase">
            Authority
          </L>
          <Sp size="h-8" />
          <L className="text-lg sm:text-xl text-white/55">BM Digital LLC.</L>
          <L className="text-base text-white/32">US&#8209;registered.</L>
          <L className="text-base text-white/32">Independent.</L>
          <L className="text-base text-white/32">No affiliations.</L>
          <L className="text-base text-white/32">No affiliate funnels.</L>
          <Sp size="h-8" />
          <motion.p variants={fade}>
            <a
              href="mailto:hello@oneproductai.com"
              className="font-mono text-xs text-blue-400/50 hover:text-blue-300 transition-colors"
            >
              hello@oneproductai.com
            </a>
          </motion.p>
        </Screen>

        <Divider />

        {/* ════════ 12 — DECISION ════════ */}
        <Screen id="decide" bg="bg-[#0e1014]" num="12">
          <L className="text-xl sm:text-2xl text-white/50">You&apos;ve read this far.</L>
          <Sp size="h-4" />
          <L className="text-2xl sm:text-3xl font-medium text-white/78 leading-snug">
            You already know if this is for you.
          </L>
          <Sp size="h-10" />
          <L className="text-sm text-white/22">No pressure.</L>
          <L className="text-sm text-white/22">No countdown.</L>
          <L className="text-sm text-white/22">No urgency.</L>
          <Sp size="h-10" />
          <motion.div variants={fade} className="flex justify-center">
            <EmailCapture />
          </motion.div>
        </Screen>

      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.04] py-6 px-5 bg-[#09090f]">
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
