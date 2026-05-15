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
  FileText,
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
      'Your CMO asks you to "weigh in" on the AI strategy for your division.',
    before:
      "You give a thoughtful clinical perspective, but feel out of your depth on the technical and regulatory dimensions.",
    after:
      "You come with a framework. You lead the vendor evaluation process. You write the governance policy. You become the person the system builds around.",
  },
  {
    situation: "A resident asks you how to prepare for an AI-transformed specialty.",
    before: 'You give a vague answer about "staying curious" and "keeping up with the literature."',
    after:
      "You have a concrete answer: the skills to build, the career paths opening up, and the playbook for getting there. You forward them this course.",
  },
];

const MODULES: {
  icon: LucideIcon;
  num: string;
  title: string;
  learns: string[];
  deliverable: string;
}[] = [
  {
    icon: Cpu,
    num: "01",
    title: "AI Foundations for Clinicians",
    learns: [
      "Explain what LLMs, computer vision models, and predictive algorithms actually do — and reliably don't do — in clinical settings",
      "Distinguish marketing claims from technical reality when a vendor says their model is '97% accurate'",
    ],
    deliverable: "A one-page AI explainer for your department colleagues",
  },
  {
    icon: FlaskConical,
    num: "02",
    title: "Evaluating AI Research",
    learns: [
      "Read an AI study the way you read an RCT: identify the population, endpoints, and validity threats",
      "Spot overfitted models, misleading AUROCs, and retrospective benchmarks that don't predict bedside performance",
    ],
    deliverable:
      "A written critique of a real published AI study using the course framework",
  },
  {
    icon: Activity,
    num: "03",
    title: "Clinical Decision Support: Opportunities & Risks",
    learns: [
      "Identify where AI genuinely reduces cognitive load vs. where it introduces new failure modes physicians haven't encountered before",
      "Document your clinical reasoning when you override an algorithmic recommendation — and why that documentation matters legally",
    ],
    deliverable:
      "A 10-point clinical evaluation checklist for any AI tool entering your workflow",
  },
  {
    icon: Shield,
    num: "04",
    title: "The Regulatory & Policy Landscape",
    learns: [
      "Explain the FDA's Software as Medical Device (SaMD) pathway — and what it means when a tool isn't cleared",
      "Understand where liability sits when an AI-assisted decision leads to patient harm",
    ],
    deliverable:
      "A regulatory classification matrix for AI tools relevant to your specialty",
  },
  {
    icon: Code2,
    num: "05",
    title: "Working with Engineers & Product Teams",
    learns: [
      "Translate a clinical need into a product requirement an engineering team can actually execute on",
      "Run a productive 60-minute requirements session with a technical team — without a translation layer in between",
    ],
    deliverable:
      "A clinical requirements document for a tool you'd want to build or improve",
  },
  {
    icon: Building2,
    num: "06",
    title: "Leading AI Adoption Inside Health Systems",
    learns: [
      "Build the business case for — or against — an AI rollout, in the language your CMO and CFO respond to",
      "Design a structured pilot evaluation protocol your institution can replicate for every new AI vendor",
    ],
    deliverable:
      "An AI governance proposal ready to bring to your department chief or committee",
  },
  {
    icon: TrendingUp,
    num: "07",
    title: "New Careers in Physician-AI Leadership",
    learns: [
      "Map the career paths being created right now: CMIO, AI medical officer, clinical advisor, startup co-founder",
      "Identify which of your existing credentials and clinical experience are direct competitive advantages in each path",
    ],
    deliverable:
      "A repositioned professional profile: updated bio, LinkedIn summary, and elevator pitch for physician-AI roles",
  },
  {
    icon: Compass,
    num: "08",
    title: "Your Personal AI Strategy",
    learns: [
      "Assess your current position relative to where the field is heading, and identify your highest-leverage first moves",
      "Build a 90-day action plan specific to your role, specialty, and institution — not a generic template",
    ],
    deliverable:
      "Your completed 90-day plan with specific milestones, target roles or projects, and accountability checkpoints",
  },
];

const SKILLS: string[] = [
  "Read an AI research paper and identify the three most common ways results are overstated before they reach the bedside",
  "Run a vendor evaluation meeting and ask the questions that expose an overfit or poorly validated model",
  "Write a clinical requirements brief that an engineering team can execute on without a translator in the room",
  "Draft an AI adoption policy — or a pushback memo — for your department or governance committee",
  "Explain the FDA SaMD pathway and its implications to hospital administration, confidently and accurately",
  "Know when to override an AI recommendation, how to document your reasoning, and why that paper trail matters",
  "Build a structured AI pilot protocol your institution can reuse for every new vendor evaluation",
  "Position yourself for physician-AI leadership roles — including ones your institution doesn't have a title for yet",
];

const WHO: { eyebrow: string; title: string; body: string }[] = [
  {
    eyebrow: "Residents",
    title: "You feel it before anyone talks about it.",
    body: "The tools are being piloted in your program. You wonder what your specialty looks like in ten years. This course gives you the language, the framework, and the career playbook — before you hit the attending track, while the window is widest.",
  },
  {
    eyebrow: "Attendings",
    title: "You're already navigating it.",
    body: "Your health system is evaluating AI tools. Your department chair wants a physician voice in the room. You've been asked to \"weigh in\" on something you've never been formally trained to evaluate. This course changes that.",
  },
  {
    eyebrow: "Academic & administrative physicians",
    title: "You're in the room. Now lead it.",
    body: "You have institutional influence. What you need is the technical fluency to match it — so when AI policy decisions land on your desk, your position is defensible, your evaluation is credible, and your voice carries.",
  },
];

const DELIVERABLES: { icon: LucideIcon; label: string }[] = [
  { icon: FileText, label: "AI explainer for your department" },
  { icon: FlaskConical, label: "Published AI study critique" },
  { icon: Activity, label: "Clinical evaluation checklist" },
  { icon: Shield, label: "Regulatory classification matrix" },
  { icon: Code2, label: "Clinical requirements document" },
  { icon: Building2, label: "AI governance proposal" },
  { icon: TrendingUp, label: "Repositioned professional profile" },
  { icon: Compass, label: "Your 90-day action plan" },
];

/* ── Page ──────────────────────────────────────────────────────── */

export default function AiCoursePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
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
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(29,123,189,0.18),_transparent_55%)]"
        />

        <div className="relative mx-auto max-w-(--container-max) px-6 pt-24 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-yellow-400">
              <span aria-hidden className="size-1.5 rounded-full bg-yellow-400" />
              MDplus · Private Preview
            </span>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
              Get in the{" "}
              <span className="text-yellow-400">front seat.</span>
              <br />
              Grab the wheel.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-rhino-200 md:text-xl">
              AI is reshaping medicine. The doctors who define what comes next
              are the ones who understand the technology well enough to lead it
              — not just survive it. This is an 8-module course that takes you
              from clinician-observer to physician-AI leader, with a concrete
              deliverable from every module.
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
              <span>8 modules</span>
              <span aria-hidden className="hidden sm:inline">·</span>
              <span>8 tangible deliverables</span>
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

      {/* ── What Changes: Scenarios ──────────────────────────── */}
      <section className="bg-rhino-800 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
              What changes
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
              Here&apos;s what Monday looks like after this course.
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

                <div className="mt-5 space-y-3">
                  <div className="flex gap-3">
                    <span className="mt-0.5 shrink-0 rounded-md bg-rhino-600 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-rhino-300">
                      Before
                    </span>
                    <p className="text-sm leading-relaxed text-rhino-300">
                      {s.before}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-0.5 shrink-0 rounded-md bg-yellow-500/20 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-yellow-400">
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
              Eight modules. Eight deliverables.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Every module ends with something you can use — not just
              something you know. Built for clinicians, not engineers or MBA
              students.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {MODULES.map((mod) => {
              const Icon = mod.icon;
              return (
                <article
                  key={mod.num}
                  className="flex flex-col rounded-xl border border-neutral-200 bg-neutral-0 overflow-hidden transition-shadow hover:shadow-md"
                >
                  {/* Card body */}
                  <div className="flex gap-5 p-6 pb-5">
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
                      <ul className="mt-3 space-y-1.5">
                        {mod.learns.map((l) => (
                          <li
                            key={l}
                            className="flex items-start gap-2 text-sm leading-relaxed text-neutral-600"
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
                  {/* Deliverable footer */}
                  <div className="mt-auto flex items-start gap-2.5 border-t border-neutral-100 bg-yellow-50 px-6 py-3.5">
                    <FileText
                      className="mt-0.5 size-3.5 shrink-0 text-yellow-700"
                      aria-hidden
                    />
                    <p className="text-xs font-semibold text-yellow-800">
                      <span className="text-yellow-700 font-normal">
                        You&apos;ll produce:{" "}
                      </span>
                      {mod.deliverable}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Deliverables summary strip */}
          <div className="mt-12 rounded-xl border border-neutral-200 bg-neutral-50 px-7 py-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              You walk away with all 8 deliverables
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
              {DELIVERABLES.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.label}
                    className="flex items-center gap-2.5 rounded-lg border border-neutral-200 bg-neutral-0 px-4 py-3"
                  >
                    <Icon
                      className="size-4 shrink-0 text-denim-500"
                      aria-hidden
                    />
                    <span className="text-xs font-medium leading-tight text-neutral-700">
                      {d.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills You'll Have ───────────────────────────────── */}
      <section className="bg-denim-900 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
              The specific skills
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
              What you&apos;ll be able to do that you can&apos;t do now.
            </h2>
            <p className="mt-6 text-lg text-denim-200">
              Not vague competencies. Specific capabilities — the kind a
              colleague with ten years in health tech would recognize
              immediately.
            </p>
          </div>

          <ul className="mt-12 grid gap-3 md:grid-cols-2">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/4 px-5 py-4"
              >
                <span
                  aria-hidden
                  className="mt-1 size-5 shrink-0 rounded-full bg-yellow-500 text-rhino-900 flex items-center justify-center text-xs font-bold"
                >
                  ✓
                </span>
                <span className="text-sm leading-relaxed text-denim-100">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
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

          <div className="mt-10 rounded-xl border border-neutral-200 bg-neutral-0 px-7 py-5">
            <p className="text-sm text-neutral-500">
              <strong className="font-semibold text-rhino-700">
                Not right for you if:
              </strong>{" "}
              You&apos;re a non-physician working in health tech. This course is
              built around the clinical perspective — the training, the
              institutional dynamics, and the career calculus of physicians.
              We&apos;ll build offerings for adjacent roles soon.
            </p>
          </div>
        </div>
      </section>

      {/* ── Waitlist / CTA ───────────────────────────────────── */}
      <section id="waitlist" className="bg-rhino-900 py-24 md:py-32">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-yellow-400">
              <span aria-hidden className="size-1.5 rounded-full bg-yellow-400" />
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
              No payment required to join the waitlist. We&apos;ll reach out
              with early access details when enrollment opens. Unsubscribe
              anytime.
            </p>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-rhino-500">
                Built by MDplus
              </p>
              <p className="mt-2 text-sm text-rhino-400">
                MDplus is a 501(c)(3) non-profit community of 5,000+ physicians
                and medical students building at the intersection of medicine and
                technology. Partners include Anthropic, a16z Bio+Health,
                McKinsey, and Bain.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
