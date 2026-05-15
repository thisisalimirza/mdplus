import type { Metadata } from "next";
import {
  Brain,
  Zap,
  ClipboardCheck,
  Layers,
  Rocket,
  ArrowDown,
  Users,
  Mic,
  LayoutGrid,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

export const metadata: Metadata = {
  title: "The AI-Native Physician",
  description:
    "A professional transformation for physicians who want to shape how AI changes healthcare — not be shaped by it.",
  robots: { index: false, follow: false },
};

/* ── Data ──────────────────────────────────────────────────────── */

const PROBLEMS: { title: string; body: string }[] = [
  {
    title: "The tasks are being automated.",
    body: "Reading imaging. Predicting deterioration. Drafting notes. The skills that took years to develop are being encoded into models — and deployed without your input.",
  },
  {
    title: "The algorithms don't know your patients.",
    body: "But hospital systems are starting to treat them like they do. When an AI recommendation conflicts with your clinical judgment, who wins? Right now, that question has no good answer.",
  },
  {
    title: "The conversation is happening without you.",
    body: "Health systems, payers, and tech companies are making decisions about AI in medicine every day. Most physicians are not in the room. The ones who are, are changing everything.",
  },
];

const SCENARIOS: {
  situation: string;
  before: string;
  after: string;
}[] = [
  {
    situation: "Your hospital announces it's piloting an AI sepsis predictor.",
    before:
      "You get an email about it. You don't know how to evaluate whether it's safe for your patient population, so you sign off or stay quiet.",
    after:
      "You request the validation dataset. You check whether the model was trained on patients who look like yours. You write a two-page evaluation memo. Your department chair forwards it to the CMO.",
  },
  {
    situation: "A vendor is demoing their clinical AI tool to your department.",
    before:
      "You watch and don't know what to ask beyond whether the interface looks good.",
    after:
      "You ask about training data provenance, external validation cohort, subgroup performance by demographic, FDA pathway status, and EHR integration approach. The founder takes notes.",
  },
  {
    situation:
      "Your CMO asks you to \"weigh in\" on the AI strategy for your division.",
    before:
      "You give a thoughtful clinical perspective, but feel out of your depth on the technical and regulatory dimensions.",
    after:
      "You come with a framework. You lead the vendor evaluation process. You write the governance policy. You become the person the system builds around.",
  },
  {
    situation:
      "A resident asks you how to prepare for an AI-transformed specialty.",
    before:
      "You give a vague answer about \"staying curious\" and \"keeping up with the literature.\"",
    after:
      "You have a concrete answer: the skills to build, the career paths opening up, and the playbook for getting there. You forward them this course.",
  },
];

const MODULES: {
  icon: LucideIcon;
  num: string;
  title: string;
  summary: string;
  learns: string[];
  deliverable: string;
  deliverableDetail: string;
}[] = [
  {
    icon: Brain,
    num: "01",
    title: "Mental Models for AI in Medicine",
    summary: "Strategic clarity. Cuts the hype. Ends the anxiety.",
    learns: [
      "What LLMs, computer vision models, and predictive systems actually do — and where they fail in ways that matter clinically",
      "Which parts of medicine AI will change first, which are defensible, and where physicians become more valuable, not less",
      "How to read the AI landscape in your specialty and identify the moves worth making now",
    ],
    deliverable: "Your specialty's AI landscape map",
    deliverableDetail:
      "A structured analysis of where AI is already here in your field, where it's arriving in the next 3 years, and where human judgment stays irreplaceable. Something you can present to colleagues, administrators, or a board.",
  },
  {
    icon: Zap,
    num: "02",
    title: "Physician Productivity Systems",
    summary: "Immediate ROI. This module pays for itself in week one.",
    learns: [
      "Build AI-enhanced workflows for your highest-volume tasks: notes, inbox, research synthesis, patient education, referral summaries, prior auth",
      "Design a personal productivity stack tailored to your specialty and workflow — not generic advice, but your specific setup",
      "Identify which 20% of your administrative load AI can absorb immediately, and implement the first system before the module ends",
    ],
    deliverable: "Your personal AI productivity stack",
    deliverableDetail:
      "A documented, running set of AI workflows that save you 3–5 hours per week. Not a list of tools — a working system integrated into how you actually practice.",
  },
  {
    icon: ClipboardCheck,
    num: "03",
    title: "Clinical AI Evaluation",
    summary: "Become a sophisticated operator, not a passive consumer.",
    learns: [
      "Evaluate AI tools and vendors with clinical rigor: validation methodology, subgroup performance, implementation failure points, FDA classification, EMR integration realities",
      "Identify the difference between a tool that performs well on a benchmark and one that will actually work in your patient population",
      "Write an evaluation memo that holds up in a procurement meeting, a committee review, or a malpractice inquiry",
    ],
    deliverable: "A reusable clinical AI evaluation protocol",
    deliverableDetail:
      "A structured process — criteria, red flags, scoring framework — your department or institution can use for every AI tool it considers. The protocol that makes you the go-to evaluator.",
  },
  {
    icon: Layers,
    num: "04",
    title: "Building Lightweight AI Systems",
    summary: "The module that separates this from every other course.",
    learns: [
      "Build no-code clinical AI systems: patient education pipelines, referral triage automations, research assistants, clinical knowledge bases, onboarding tools",
      "Work with GPTs, agents, retrieval systems, and workflow orchestration tools — without writing code",
      "Understand APIs and system design conceptually: enough to direct engineers, evaluate technical proposals, and speak the language of a founding team",
    ],
    deliverable: "A working clinical AI system",
    deliverableDetail:
      "An automation, custom GPT, or clinical workflow tool that does real work — something you can demo, deploy, and show as proof that you build, not just talk.",
  },
  {
    icon: Rocket,
    num: "05",
    title: "Career & Business Leverage",
    summary:
      "The income streams, titles, and paths most physicians don't know exist.",
    learns: [
      "Map the roles being created right now: AI medical officer, clinical advisor, innovation fellow, startup co-founder, CMIO, medical director at a digital health company",
      "Build your positioning as the AI physician in your department, specialty, and field — and develop the visible presence others reach out to",
      "Identify your first concrete opportunity: the consulting engagement, the committee seat, the advising role, the product you're going to build",
    ],
    deliverable: "Your physician-AI positioning strategy + 90-day action plan",
    deliverableDetail:
      "A specific plan for your next move — with named target roles, companies, or projects; a positioning statement; and a week-by-week roadmap for the next 90 days.",
  },
];

const FORMAT_ITEMS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: LayoutGrid,
    title: "5 applied modules, built for busy physicians",
    body: "Self-paced content designed for focused 45-minute sessions. No 3-hour lecture blocks. Each module ends with a deliverable you build, not a quiz you take.",
  },
  {
    icon: Users,
    title: "A cohort of ambitious physicians",
    body: "You move through the program with a small group organized by specialty and career stage. The people you meet here tend to become the people you build with later.",
  },
  {
    icon: Mic,
    title: "Live office hours and physician founder talks",
    body: "Regular sessions with MDplus instructors and physicians who've already made the transition — into startups, advisory roles, clinical informatics, and innovation leadership.",
  },
  {
    icon: Shield,
    title: "Project showcases and proof-of-work",
    body: "Cohort demo days where you show what you built. Public artifacts you can share with employers, collaborators, and the MDplus network. The credential that actually opens doors.",
  },
];

const UPSIDE_ITEMS: { category: string; examples: string[] }[] = [
  {
    category: "Inside your institution",
    examples: [
      "Lead the AI oversight committee or governance process",
      "Become the department's clinical AI evaluator — the one procurement can't move without",
      "Take on an innovation fellowship that accelerates your promotion track",
    ],
  },
  {
    category: "In the industry",
    examples: [
      "Advise AI startups building clinical tools — paid engagements, equity, or both",
      "Serve as a medical director or CMO at a digital health company",
      "Join a VC firm's clinical advisory network as a physician expert",
    ],
  },
  {
    category: "On your own",
    examples: [
      "Build a clinical AI tool, workflow, or product — and bring it to patients or sell it to institutions",
      "Build a content or consulting presence as the AI physician in your specialty",
      "Co-found a health AI company from the inside track, with MDplus as your network",
    ],
  },
];

const WHO: { eyebrow: string; title: string; body: string }[] = [
  {
    eyebrow: "Residents",
    title: "The window is widest right now.",
    body: "You're still building your identity. Adding AI-native to how you practice — before you hit the attending track — gives you a compounding advantage your classmates won't have. The physicians leading the next decade built this fluency in training.",
  },
  {
    eyebrow: "Attendings",
    title: "You're already being asked.",
    body: "Your health system is evaluating AI tools. Your department chair wants physician input. A startup founder cold-emailed you. This program gives you the framework to turn those moments from uncomfortable to career-defining.",
  },
  {
    eyebrow: "Academic & administrative physicians",
    title: "You have the standing. Now get the vocabulary.",
    body: "You're in the room. What you need is the technical fluency to match your institutional authority — so your position on AI is defensible, your vendor evaluations are credible, and your leadership is genuine.",
  },
];

/* ── Page ──────────────────────────────────────────────────────── */

export default function AiCoursePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────
          Dark, dramatic. Sets the identity promise immediately.      */}
      <section className="relative overflow-hidden bg-rhino-900">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(29,123,189,0.15),_transparent_60%)]"
        />

        <div className="relative mx-auto max-w-(--container-max) px-6 pt-24 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-yellow-400">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-yellow-400"
              />
              MDplus · Private Preview · Founding Cohort
            </span>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
              Become the{" "}
              <span className="text-yellow-400">AI-native</span>
              <br />
              physician.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-rhino-200 md:text-xl">
              Not the doctor who tried ChatGPT. The one who understands AI
              deeply enough to{" "}
              <strong className="font-semibold text-white">implement</strong>{" "}
              it,{" "}
              <strong className="font-semibold text-white">evaluate</strong>{" "}
              it,{" "}
              <strong className="font-semibold text-white">build</strong> with
              it, and{" "}
              <strong className="font-semibold text-white">lead</strong> teams
              through it.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-500 px-7 py-3.5 text-base font-semibold text-rhino-900 shadow-md transition-colors hover:bg-yellow-400"
              >
                Join the waitlist
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                See the curriculum
                <ArrowDown className="size-4" aria-hidden />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-rhino-400">
              <span>5 modules</span>
              <span aria-hidden className="hidden sm:inline">·</span>
              <span>5 concrete deliverables</span>
              <span aria-hidden className="hidden sm:inline">·</span>
              <span>Cohort-based · Live sessions</span>
              <span aria-hidden className="hidden sm:inline">·</span>
              <span>Physicians only</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Positioning strip ────────────────────────────────────
          White, clean, typographic. Walls off commoditized territory
          immediately before the problem lands.                       */}
      <section className="bg-neutral-0 py-16 md:py-20">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="grid gap-px overflow-hidden rounded-xl border border-neutral-200 md:grid-cols-3">
            {[
              {
                not: "Prompt engineering for doctors",
                is: "Deep enough fluency to evaluate, build, and lead — not just use.",
              },
              {
                not: '"The future of AI in medicine"',
                is: "No lectures on what's coming. Practical systems you ship this week.",
              },
              {
                not: "A productivity hack collection",
                is: "Professional leverage: new income, new roles, new standing.",
              },
            ].map((item) => (
              <div
                key={item.not}
                className="bg-neutral-0 px-7 py-6 md:px-8 md:py-7"
              >
                <p className="flex items-start gap-2 text-sm text-neutral-400">
                  <span aria-hidden className="mt-0.5 text-base leading-none">
                    ✕
                  </span>
                  <span>Not: {item.not}</span>
                </p>
                <p className="mt-3 flex items-start gap-2 font-display text-base font-semibold leading-snug text-rhino-700">
                  <span
                    aria-hidden
                    className="mt-0.5 text-base leading-none text-yellow-500"
                  >
                    ✓
                  </span>
                  <span>{item.is}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Problem ──────────────────────────────────────────
          Light gray. Honest, not alarmist.                           */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              The conversation you&apos;re not having
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              AI isn&apos;t coming for the easy parts of medicine.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              The algorithms are getting better at reading imaging, predicting
              sepsis, and drafting notes. The question isn&apos;t whether AI
              will change your practice — it already is. The question is{" "}
              <strong className="font-semibold text-rhino-700">
                who decides how.
              </strong>
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROBLEMS.map((p, i) => (
              <article
                key={p.title}
                className="relative rounded-xl border border-neutral-200 bg-neutral-0 p-7"
              >
                <span className="font-display text-4xl font-bold text-neutral-100 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-rhino-700">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Monday looks like ───────────────────────────────
          Dark. Before/after. The transformation made visceral.       */}
      <section className="bg-rhino-800 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
              The transformation
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
              What Monday looks like after this course.
            </h2>
            <p className="mt-6 text-lg text-rhino-200">
              Not hypothetical. These are the exact situations physicians in
              every specialty are already navigating — with or without the
              training to handle them.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {SCENARIOS.map((s) => (
              <article
                key={s.situation}
                className="rounded-xl border border-white/10 bg-white/5 p-7"
              >
                <p className="font-display text-base font-semibold leading-snug text-white">
                  {s.situation}
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex gap-3">
                    <span className="mt-0.5 shrink-0 rounded-md bg-rhino-700 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-rhino-400">
                      Before
                    </span>
                    <p className="text-sm leading-relaxed text-rhino-300">
                      {s.before}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-0.5 shrink-0 rounded-md bg-yellow-500/20 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-yellow-400">
                      After
                    </span>
                    <p className="text-sm leading-relaxed text-rhino-100">
                      {s.after}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bridge to curriculum */}
          <div className="mt-12 max-w-2xl rounded-xl border border-white/10 bg-white/5 px-7 py-5">
            <p className="text-base font-medium leading-relaxed text-rhino-200">
              The gap between Before and After isn&apos;t talent. It&apos;s
              fluency — and the structure to build it. That&apos;s what the
              five modules below are designed to give you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Curriculum ───────────────────────────────────────────
          White. The "how." Each module is a deliverable.             */}
      <section id="curriculum" className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              The curriculum
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              Five modules. Each one changes something real.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Built for clinicians, not engineers. Every module ends with a
              deliverable you build and keep — not a quiz you pass and forget.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            {MODULES.map((mod) => {
              const Icon = mod.icon;
              return (
                <article
                  key={mod.num}
                  className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-0"
                >
                  <div className="p-7 md:p-8">
                    <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                      {/* Icon + number */}
                      <div className="flex shrink-0 items-center gap-4 md:w-20 md:flex-col md:gap-3 md:text-center">
                        <span className="inline-flex size-12 items-center justify-center rounded-xl bg-yellow-500 text-rhino-900">
                          <Icon className="size-6" aria-hidden />
                        </span>
                        <span className="font-display text-3xl font-bold text-neutral-200 select-none">
                          {mod.num}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-widest text-denim-600">
                          {mod.summary}
                        </p>
                        <h3 className="mt-2 font-display text-xl font-bold text-rhino-700 md:text-2xl">
                          {mod.title}
                        </h3>
                        <ul className="mt-5 space-y-2.5">
                          {mod.learns.map((l) => (
                            <li
                              key={l}
                              className="flex items-start gap-3 text-sm leading-relaxed text-neutral-600"
                            >
                              <span
                                aria-hidden
                                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-denim-400"
                              />
                              {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Deliverable — yellow accent footer */}
                  <div className="border-t border-yellow-100 bg-yellow-50 px-7 py-4 md:px-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
                      You&apos;ll build
                    </p>
                    <p className="mt-1 font-display text-base font-bold text-rhino-700">
                      {mod.deliverable}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                      {mod.deliverableDetail}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── You'll know you've made it ───────────────────────────
          Yellow. The destination — not a checklist. Aspirational.    */}
      <section className="bg-yellow-50 py-20 md:py-24">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-700">
              The destination
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              You&apos;ll know you&apos;ve made the transition when…
            </h2>
            <p className="mt-5 text-lg text-neutral-600">
              Not when you finish the program. When these things are actually
              true of your practice and your career.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "You're the first person your department calls when an AI vendor wants a demo.",
              "You've saved 3–5 hours a week with AI, and you can show exactly how, step by step.",
              "You've built something that runs without you: an automation, a workflow, a clinical AI system.",
              "You can brief a startup team, a hospital board, or an investment committee on AI in medicine — and they listen.",
              "You're advising a company, serving on an AI committee, or running an innovation initiative.",
              "Your residents ask you what to do about AI. You have a real answer.",
            ].map((marker) => (
              <div
                key={marker}
                className="flex items-start gap-4 rounded-xl border border-yellow-200 bg-neutral-0 px-6 py-5"
              >
                <span
                  aria-hidden
                  className="mt-0.5 size-5 shrink-0 rounded-full bg-yellow-500 text-rhino-900 flex items-center justify-center text-xs font-bold"
                >
                  →
                </span>
                <p className="text-base leading-relaxed text-rhino-700">
                  {marker}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Format ───────────────────────────────────────────
          Denim. Positions the program as a guild, not a MOOC.        */}
      <section className="bg-denim-800 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
              The format
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
              A guild. Not a MOOC.
            </h2>
            <p className="mt-6 text-lg text-denim-100/90">
              Most online courses are designed to be consumed. This one is
              designed to be completed — by a cohort of physicians who are
              serious about the transformation, not just curious about AI.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {FORMAT_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-7"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-yellow-500/20 text-yellow-400">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-denim-100/80">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 px-7 py-5">
            <p className="text-sm leading-relaxed text-denim-100">
              <strong className="font-semibold text-white">
                The MDplus network is the moat.
              </strong>{" "}
              5,000+ physicians and med students building at the intersection
              of medicine and technology. Founding cohort members get permanent
              access to the AI-Native Physician alumni community — the group
              chats, the deal flow, the job posts, and the founder
              introductions that don&apos;t happen anywhere else.
            </p>
          </div>
        </div>
      </section>

      {/* ── Career & Income Upside ───────────────────────────────
          White. Concrete paths. Physicians buy leverage.             */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              Career &amp; income upside
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              What this actually opens up.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Physicians don&apos;t buy information. They buy leverage — the
              ability to do things they couldn&apos;t do before, get into rooms
              they couldn&apos;t access, and build things that didn&apos;t
              exist. Here&apos;s what that looks like concretely.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {UPSIDE_ITEMS.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-neutral-200 bg-neutral-0 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  {group.category}
                </p>
                <ul className="mt-5 space-y-3">
                  {group.examples.map((ex) => (
                    <li
                      key={ex}
                      className="flex items-start gap-3 text-sm leading-relaxed text-neutral-700"
                    >
                      <span
                        aria-hidden
                        className="mt-0.5 size-5 shrink-0 rounded-full bg-yellow-500 text-rhino-900 flex items-center justify-center text-xs font-bold"
                      >
                        →
                      </span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-2xl rounded-xl border-l-4 border-denim-500 bg-denim-50 px-7 py-5">
            <p className="text-base font-medium leading-relaxed text-denim-800">
              The physicians capturing these opportunities right now are not
              smarter than you. They built the fluency earlier. That gap is
              still closeable — but it won&apos;t be forever.
            </p>
          </div>
        </div>
      </section>

      {/* ── Who It's For ─────────────────────────────────────────
          Neutral-50. Softer — earned after the intensity above.      */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              Who this is for
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              Physicians who want to operate on the frontier.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {WHO.map((w) => (
              <article
                key={w.eyebrow}
                className="rounded-xl border border-neutral-200 bg-neutral-0 p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-denim-600">
                  {w.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug text-rhino-700">
                  {w.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {w.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-neutral-200 bg-neutral-0 px-7 py-5">
            <p className="text-sm text-neutral-500">
              <strong className="font-semibold text-rhino-700">
                Not right for you if:
              </strong>{" "}
              You want passive content to watch or a certificate to collect.
              This program is structured around doing — building real systems,
              producing real deliverables, and making concrete career moves. If
              you&apos;re not ready to put in the work, the timing isn&apos;t
              right yet.
            </p>
          </div>
        </div>
      </section>

      {/* ── Waitlist / CTA ───────────────────────────────────────
          Dark again. Urgency. Close.                                 */}
      <section id="waitlist" className="bg-rhino-900 py-24 md:py-32">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-yellow-400">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-yellow-400"
              />
              Founding cohort · Limited seats
            </span>

            <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              The physicians shaping this
              <br />
              <span className="text-yellow-400">
                started exactly where you are.
              </span>
            </h2>

            <p className="mt-6 text-lg text-rhino-200">
              The gap between physicians leading AI in medicine and everyone
              else isn&apos;t talent. It&apos;s fluency — and the network to
              act on it. The founding cohort builds both.
            </p>

            <ul className="my-8 space-y-2.5">
              {[
                "5 applied modules with a concrete deliverable from each",
                "Live cohort sessions, office hours, and project showcases",
                "Physician founder talks from doctors who've already made the transition",
                "Permanent access to the MDplus AI-Native Physician alumni community",
                "MDplus founding member credential, recognized across our partner network",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-rhino-200"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 size-5 shrink-0 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center text-xs font-bold"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mb-6 flex flex-wrap items-baseline gap-3">
              <span className="font-display text-4xl font-bold text-white">
                $249
              </span>
              <span className="text-base text-rhino-400 line-through">
                $499
              </span>
              <span className="rounded-full bg-yellow-500/15 px-3 py-0.5 text-xs font-semibold text-yellow-400">
                Founding cohort price
              </span>
            </div>

            <WaitlistForm />

            <p className="mt-5 text-xs text-rhino-500">
              No payment required to join the waitlist. We&apos;ll reach out
              with enrollment details when the founding cohort opens.
              Unsubscribe anytime.
            </p>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-rhino-500">
                Built by MDplus
              </p>
              <p className="mt-2 text-sm text-rhino-400">
                MDplus is a 501(c)(3) non-profit and the leading community for
                physicians building in technology — 5,000+ members, backed by
                Anthropic, a16z Bio+Health, McKinsey, and Bain. The AI-Native
                Physician program is the next step in that mission.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
