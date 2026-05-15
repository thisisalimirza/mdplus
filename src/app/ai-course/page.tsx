import type { Metadata } from "next";
import {
  Cpu,
  FlaskConical,
  Activity,
  Shield,
  Code2,
  Building2,
  TrendingUp,
  Compass,
  ArrowDown,
  type LucideIcon,
} from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

export const metadata: Metadata = {
  title: "AI Leadership for Physicians",
  description:
    "Stop watching AI reshape medicine from the back seat. This course turns doctors and residents into the people leading that conversation.",
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

const PILLARS: { title: string; body: string }[] = [
  {
    title: "Understand it — really.",
    body: "Not the press release version. Not the hype cycle version. Know what large language models and predictive algorithms actually do, where they reliably fail, and how to read AI studies the way you read clinical trials.",
  },
  {
    title: "Shape what gets built.",
    body: "Become the clinical voice in the room when AI tools are designed, evaluated, or procured. Your input changes what gets shipped. Engineers and product teams are desperate for physicians who know how to talk to them.",
  },
  {
    title: "Lead the conversation.",
    body: "Own the narrative in your department, your health system, your specialty. That's what physician-AI leadership looks like — and it's a role most institutions don't yet have anyone filling.",
  },
];

const MODULES: { icon: LucideIcon; num: string; title: string; body: string }[] =
  [
    {
      icon: Cpu,
      num: "01",
      title: "AI Foundations for Clinicians",
      body: "Strip away the jargon. Understand what machine learning, large language models, and computer vision actually do in clinical contexts — and where they fail in ways that matter.",
    },
    {
      icon: FlaskConical,
      num: "02",
      title: "Evaluating AI Research",
      body: "Read AI studies the way you read clinical trials. Identify overfitted models, misleading AUROCs, and benchmarks that dissolve at the bedside.",
    },
    {
      icon: Activity,
      num: "03",
      title: "Clinical Decision Support: Opportunities & Risks",
      body: "Where AI genuinely helps clinicians, where it introduces new failure modes, and how to advocate for your patients when an algorithm disagrees with your judgment.",
    },
    {
      icon: Shield,
      num: "04",
      title: "The Regulatory & Policy Landscape",
      body: "FDA approval pathways for software as medical device, EHR integration standards, and liability in AI-assisted care. The institutional forces that will shape how AI lands in your specialty.",
    },
    {
      icon: Code2,
      num: "05",
      title: "Working with Engineers & Product Teams",
      body: "How to translate clinical needs into product requirements. Bridge the gap between the bedside and the whiteboard. Become the physician that product teams actually want in the room.",
    },
    {
      icon: Building2,
      num: "06",
      title: "Leading AI Adoption Inside Health Systems",
      body: "How to champion or challenge AI rollouts in your department. Build the business case. Manage institutional resistance. Own the evaluation process before someone else does.",
    },
    {
      icon: TrendingUp,
      num: "07",
      title: "New Careers in Physician-AI Leadership",
      body: "CMIO, AI medical officer, clinical advisor, startup co-founder. The career paths being invented right now — and how to position yourself for them while still in residency or practice.",
    },
    {
      icon: Compass,
      num: "08",
      title: "Your Personal AI Strategy",
      body: "Build your 90-day plan. Define your angle. Leave with a concrete roadmap for becoming the physician-AI leader in your department, specialty, or organization.",
    },
  ];

const WHO: { eyebrow: string; title: string; body: string }[] = [
  {
    eyebrow: "Residents",
    title: "You feel it before anyone talks about it.",
    body: "You see the tools being piloted in your program. You wonder what your specialty looks like in ten years. This course gives you the language, the framework, and the career playbook — before you hit the attending track.",
  },
  {
    eyebrow: "Attendings",
    title: "You're already navigating it.",
    body: "Your health system is evaluating AI tools. Your department chair wants a physician voice. You've been asked to \"weigh in\" on something you've never been trained to evaluate. This course changes that.",
  },
  {
    eyebrow: "Academic & administrative physicians",
    title: "You're in the room. Now lead it.",
    body: "You have institutional influence. What you need is the technical fluency to pair with it — so when AI policy decisions are made, your voice carries weight and your position is defensible.",
  },
];

/* ── Page ──────────────────────────────────────────────────────── */

export default function AiCoursePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-rhino-900">
        {/* Subtle grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(29,123,189,0.18),_transparent_55%)]"
        />

        <div className="relative mx-auto max-w-(--container-max) px-6 pt-24 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-3xl">
            {/* Eyebrow badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-yellow-400">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-yellow-400"
              />
              MDplus · Private Preview
            </span>

            {/* Headline */}
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
              Get in the{" "}
              <span className="text-yellow-400">front seat.</span>
              <br />
              Grab the wheel.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-rhino-200 md:text-xl">
              AI is reshaping medicine whether you&apos;re ready or not. The
              doctors who will define what comes next aren&apos;t the ones
              watching it happen — they&apos;re the ones learning to{" "}
              <em>lead</em> it. This course is your on-ramp.
            </p>

            {/* CTAs */}
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

            {/* Meta row */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-rhino-400">
              <span>8 modules</span>
              <span aria-hidden className="hidden sm:inline">·</span>
              <span>Physicians only</span>
              <span aria-hidden className="hidden sm:inline">·</span>
              <span>Self-paced + live sessions</span>
              <span aria-hidden className="hidden sm:inline">·</span>
              <span>Founding cohort: limited seats</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ──────────────────────────────────────── */}
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

          <div className="mt-12 max-w-2xl rounded-xl border-l-4 border-denim-500 bg-denim-50 px-7 py-5">
            <p className="text-base font-medium leading-relaxed text-denim-800">
              The answer isn&apos;t to ignore it. It&apos;s to become the
              doctor who knows enough — and has the standing — to lead.
            </p>
          </div>
        </div>
      </section>

      {/* ── Transformation ───────────────────────────────────── */}
      <section className="bg-denim-800 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
              What changes when you lead
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
              From passenger to navigator.
            </h2>
            <p className="mt-6 text-lg text-denim-100/90">
              This isn&apos;t a course about surviving the AI transition.
              It&apos;s a course about being the physician who shapes it — for
              your patients, your department, and your specialty.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <article
                key={pillar.title}
                className="rounded-xl border border-white/10 bg-white/5 p-7"
              >
                <span className="font-display text-3xl font-bold text-yellow-500/40 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-denim-100/80">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curriculum ───────────────────────────────────────── */}
      <section id="curriculum" className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              The curriculum
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              Eight modules. One transformation.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Built specifically for clinicians — not engineers, not MBA
              students. Every module is designed to be actionable the week
              you finish it.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {MODULES.map((mod) => {
              const Icon = mod.icon;
              return (
                <article
                  key={mod.num}
                  className="flex gap-5 rounded-xl border border-neutral-200 bg-neutral-0 p-6 transition-shadow hover:shadow-md"
                >
                  <div className="mt-0.5 shrink-0">
                    <span className="inline-flex size-11 items-center justify-center rounded-lg bg-yellow-500 text-rhino-900">
                      <Icon className="size-5" aria-hidden />
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                      Module {mod.num}
                    </p>
                    <h3 className="mt-1 font-display text-base font-bold text-rhino-700">
                      {mod.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {mod.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Who It's For ─────────────────────────────────────── */}
      <section className="bg-yellow-50 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-700">
              Who this is for
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              If you&apos;ve felt the ground shifting, this is for you.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {WHO.map((w) => (
              <article
                key={w.eyebrow}
                className="rounded-xl border border-yellow-200 bg-neutral-0 p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
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

          {/* Explicit exclusion */}
          <div className="mt-10 rounded-xl border border-neutral-200 bg-neutral-0 px-7 py-5">
            <p className="text-sm text-neutral-500">
              <strong className="font-semibold text-rhino-700">
                Not right for you if:
              </strong>{" "}
              You&apos;re a non-physician working in health tech. This course
              is designed specifically around the clinical perspective — the
              training, the institutional context, and the career calculus of
              physicians. We&apos;ll build offerings for adjacent roles soon.
            </p>
          </div>
        </div>
      </section>

      {/* ── What You'll Walk Away With ───────────────────────── */}
      <section className="bg-rhino-700 py-20 md:py-24">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
                The outcomes
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
                Leave with more than knowledge.
              </h2>
              <p className="mt-6 text-lg text-rhino-100/90">
                Information alone doesn&apos;t change careers. This course is
                structured around tangible deliverables — so you finish with
                work product, not just a certificate.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "A personal AI strategy document you can act on within 90 days",
                "A clinical evaluation framework for AI tools at your institution",
                "The vocabulary to speak credibly with engineers, executives, and policymakers",
                "A cohort of peers on the same path — and the MDplus network behind them",
                "A verified credential from MDplus, recognized by our partner network",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-5 py-4"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 size-5 shrink-0 rounded-full bg-yellow-500 text-rhino-900 flex items-center justify-center text-xs font-bold"
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-rhino-100">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Waitlist / CTA ───────────────────────────────────── */}
      <section id="waitlist" className="bg-rhino-900 py-24 md:py-32">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="mx-auto max-w-2xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-yellow-400">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-yellow-400"
              />
              Early access · Founding cohort
            </span>

            <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Stop watching. <br />
              <span className="text-yellow-400">Start leading.</span>
            </h2>

            <p className="mt-6 text-lg text-rhino-200">
              The founding cohort is limited. Early access members get the
              lowest price this program will ever be offered at — and direct
              access to the MDplus physician network that built it.
            </p>

            {/* Pricing */}
            <div className="my-8 flex flex-wrap items-baseline gap-3">
              <span className="font-display text-4xl font-bold text-white">
                $249
              </span>
              <span className="text-base text-rhino-400 line-through">
                $499
              </span>
              <span className="rounded-full bg-yellow-500/15 px-3 py-0.5 text-xs font-semibold text-yellow-400">
                Founding member price
              </span>
            </div>

            <WaitlistForm />

            <p className="mt-5 text-xs text-rhino-500">
              No payment required to join the waitlist. We&apos;ll send early
              access details when enrollment opens. Unsubscribe anytime.
            </p>

            {/* Trust marks */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-rhino-500">
                Built by MDplus
              </p>
              <p className="mt-2 text-sm text-rhino-400">
                MDplus is a 501(c)(3) non-profit community of 5,000+ physicians
                and medical students building at the intersection of medicine
                and technology. Partners include Anthropic, a16z Bio+Health,
                McKinsey, and Bain.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
