import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Trophy,
  Users,
  Database,
  BookOpen,
  Award,
  GitMerge,
  Presentation,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";

export const metadata: Metadata = {
  title: "Datathon",
  description:
    "The annual MDplus Datathon — a month-long competition for medical trainees to work on healthcare AI challenges. Now in its 4th year, with research published in JMIR Medical Education.",
};

const PAST_EDITIONS: {
  year: string;
  edition: string;
  theme: string;
  body: string;
  metrics: string;
}[] = [
  {
    year: "Oct–Nov 2025",
    edition: "4th Annual",
    theme: "Empowering Patients Through AI",
    body: "Largest and most internationally represented Datathon to date. Gold sponsors: Doximity, Inflo Health. Event partners: AMSA, ConductScience.",
    metrics: "31 teams · ~300 participants",
  },
  {
    year: "Oct–Nov 2024",
    edition: "3rd Annual",
    theme: "Multiple competition tracks",
    body: "First Datathon with multiple parallel tracks. Final pitch competition held November 18.",
    metrics: "Multi-track format introduced",
  },
  {
    year: "Oct–Nov 2023",
    edition: "2nd Annual",
    theme: "Value-Based Care",
    body: "28 teams using the MIMIC-IV dataset (via Hugging Face). Solidified the Datathon as the org's signature annual event.",
    metrics: "28 teams · 71+ signups",
  },
  {
    year: "January 2022",
    edition: "Inaugural",
    theme: "National Inpatient Sample (NIS)",
    body: "The first MDplus Datathon. Built and led by Lathan Liou (then Director of Data Science) and Katie Link (Director of AI). Established the model that's been published in peer-reviewed research.",
    metrics: "200+ participants",
  },
];

const FORMAT: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Users,
    title: "Kickoff + team formation",
    body: "Members opt in, mix into teams of 3–5, and pick from a slate of curated challenge tracks.",
  },
  {
    icon: BookOpen,
    title: "Workshops",
    body: "Recorded technical sessions cover the dataset, tooling, and clinical context — designed for clinicians without deep ML backgrounds.",
  },
  {
    icon: Database,
    title: "Build phase",
    body: "Teams work for ~3 weeks on real clinical datasets. Mentors from sponsor organizations check in throughout.",
  },
  {
    icon: GitMerge,
    title: "First-round judging",
    body: "Panel of physician-judges and industry reviewers scores submissions on a public 5-criteria rubric.",
  },
  {
    icon: Presentation,
    title: "Finalist presentations",
    body: "Top teams pitch live. Sponsors and the broader MDplus community watch and vote.",
  },
  {
    icon: Award,
    title: "Award ceremony",
    body: "Cash prizes for 1st, 2nd, 3rd plus superlative-category winners. Past winners have published, spun out startups, and joined the orgs that sponsored them.",
  },
];

const RUBRIC = [
  { label: "Problem definition", points: 8 },
  { label: "Impact + outcomes", points: 6 },
  { label: "Practicality + implementation", points: 10 },
  { label: "Team capability", points: 8 },
  { label: "Presentation quality", points: 6 },
];

const SPONSORS_GOLD = ["Doximity", "Inflo Health"];
const SPONSORS_PARTNERS = ["AMSA", "ConductScience"];
const SPONSORS_PAST = ["Scale AI", "RStudio", "Merck", "Flatiron Health"];

export default function DatathonPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs · Datathon"
        title={
          <>
            The annual MDplus Datathon.{" "}
            <span className="text-denim-600">Now in its 4th year.</span>
          </>
        }
        description={
          <>
            A month-long national competition where medical students, residents,
            and physicians work in teams on real healthcare AI challenges. Past
            editions have published in peer-reviewed research and brought
            together hundreds of trainees from across the country and beyond.
          </>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/join"
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-denim-500 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
          >
            Get notified for the 5th
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link
            href="/community/data"
            className="inline-flex items-center justify-center rounded-md border border-rhino-200 bg-neutral-0 px-6 py-3.5 text-base font-semibold text-rhino-700 transition-colors hover:border-rhino-300 hover:bg-neutral-50"
          >
            See the AI & Data community
          </Link>
        </div>
      </PageHero>

      {/* ── Headline numbers ───────────────────────────────── */}
      <section className="border-b border-neutral-100 bg-neutral-0 py-12 md:py-16">
        <div className="mx-auto max-w-(--container-max) px-6">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { stat: "4", label: "annual editions since 2022" },
              { stat: "~300", label: "participants in 2025" },
              { stat: "31", label: "teams in the 4th datathon" },
              { stat: "1", label: "peer-reviewed publication" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="font-display text-3xl font-bold text-rhino-700 md:text-4xl">
                  {item.stat}
                </dt>
                <dd className="mt-1 text-sm text-neutral-500">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Past editions ──────────────────────────────────── */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              Past editions
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              Four years of Datathons.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {PAST_EDITIONS.map((edition) => (
              <article
                key={edition.year}
                className="rounded-lg border border-neutral-200 bg-neutral-0 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-pill bg-yellow-50 px-2.5 py-0.5 text-xs font-semibold text-yellow-700">
                    <Trophy className="size-3" aria-hidden />
                    {edition.edition}
                  </span>
                  <span className="text-xs text-neutral-500">
                    {edition.year}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-rhino-700">
                  {edition.theme}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {edition.body}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-denim-600">
                  {edition.metrics}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Format ─────────────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              The format
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              Three to four weeks. Six phases.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              The same structure has run four years in a row, with refinements
              each cycle. Designed for clinicians who don&apos;t live in
              Jupyter notebooks.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {FORMAT.map((step, idx) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="rounded-lg border border-neutral-200 bg-neutral-0 p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-md bg-denim-50 text-denim-600">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-rhino-500">
                      Phase {idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-rhino-700">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {step.body}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Rubric */}
          <div className="mt-16 rounded-xl border border-yellow-200 bg-yellow-50 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
              Judging rubric
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-rhino-700 md:text-2xl">
              How submissions are scored.
            </h3>
            <p className="mt-3 text-sm text-neutral-600">
              Public 5-criteria rubric, max 38 points. We share it before the
              competition starts so teams know exactly what they&apos;re
              optimizing for.
            </p>
            <ul className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {RUBRIC.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between rounded-md border border-yellow-200 bg-neutral-0 px-4 py-3"
                >
                  <span className="text-sm font-medium text-rhino-700">
                    {row.label}
                  </span>
                  <span className="font-display text-base font-bold text-yellow-700">
                    {row.points} pts
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Sponsors ───────────────────────────────────────── */}
      <section className="bg-rhino-700 py-20 md:py-24">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-500">
              Sponsors + partners
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
              Backed by serious operators.
            </h2>
            <p className="mt-6 text-lg text-rhino-100/90">
              Sponsoring the Datathon is one of the cleanest ways to get in
              front of physician-trainees building in healthcare AI. Reach out
              if your team would like to be part of the 5th.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-500">
                2025 Gold sponsors
              </p>
              <ul className="mt-4 space-y-2">
                {SPONSORS_GOLD.map((s) => (
                  <li
                    key={s}
                    className="font-display text-lg font-semibold text-white"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-500">
                Event partners
              </p>
              <ul className="mt-4 space-y-2">
                {SPONSORS_PARTNERS.map((s) => (
                  <li
                    key={s}
                    className="font-display text-lg font-semibold text-white"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-500">
                Past sponsors
              </p>
              <ul className="mt-4 space-y-2">
                {SPONSORS_PAST.map((s) => (
                  <li
                    key={s}
                    className="font-display text-base font-medium text-rhino-100/90"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/partners"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-500 hover:text-yellow-400"
            >
              Talk to us about sponsorship
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Academic recognition ───────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="rounded-xl border border-denim-100 bg-denim-50 p-10 md:p-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-denim-700">
              Peer-reviewed
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-rhino-700 md:text-3xl">
              The Datathon model is a published medical-education paper.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700">
              <span className="font-semibold text-rhino-700">
                &ldquo;Leveraging Datathons to Teach AI in Undergraduate
                Medical Education.&rdquo;
              </span>{" "}
              Published in <em>JMIR Medical Education</em> in March 2025. The
              first peer-reviewed validation of the MDplus Datathon as a
              model for teaching applied AI to medical trainees.
            </p>
            <Link
              href="/learn/publications"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-denim-700 hover:text-denim-800"
            >
              See all MDplus publications
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-yellow-50 py-24 md:py-28">
        <div className="relative mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl md:mx-auto md:text-center">
            <h2 className="font-display text-3xl font-bold leading-tight text-rhino-700 md:text-5xl">
              The 5th Datathon ships in fall 2026.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Join the community to get the announcement when applications
              open. The AI & Data sub-community is where it&apos;s organized.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 md:justify-center">
              <Link
                href="/join"
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-denim-500 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
              >
                Join free
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/community/data"
                className="inline-flex items-center justify-center rounded-md border border-rhino-200 bg-neutral-0 px-6 py-3.5 text-base font-semibold text-rhino-700 transition-colors hover:border-rhino-300"
              >
                AI & Data community
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
