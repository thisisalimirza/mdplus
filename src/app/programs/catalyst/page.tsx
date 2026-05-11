import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  ArrowRight,
  Users,
  Compass,
  Hammer,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";

const CATALYST_URL = "https://catalyst.mdplus.community";

export const metadata: Metadata = {
  title: "Catalyst",
  description:
    "Catalyst is the MDplus flagship cohort program for physicians and med students serious about taking on real work in healthcare innovation.",
};

const SPONSORS = [
  "Anthropic",
  "OpenEvidence",
  "a16z Bio + Health",
  "AlleyCorp",
  "Chamber Cardio",
  "Thalamus",
  "Fabric",
  "Scrub Capital",
] as const;

const PILLARS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Users,
    title: "Cohort, not a course",
    body: "You go through Catalyst with peers, not alone. The people in your cohort are part of the value; many MDplus alumni cite their Catalyst cohort as the most generative cohort of their career.",
  },
  {
    icon: Compass,
    title: "Mentorship from people who've done it",
    body: "Mentors are physicians and operators inside the partner organizations: companies actively building in healthcare innovation, not industry analysts.",
  },
  {
    icon: Hammer,
    title: "Real projects, real deadlines",
    body: "Catalyst is structured around shipping something concrete by the end. The work, not the watching, is the point.",
  },
  {
    icon: Trophy,
    title: "Backed by the field",
    body: "Sponsored by leading firms across AI, biotech, healthcare-AI, and venture: the same partners that shape what's actually getting built in the field today.",
  },
];

const WHO: { eyebrow: string; title: string; body: string }[] = [
  {
    eyebrow: "Med students",
    title: "Curious about non-clinical paths.",
    body: "If you've been wondering whether tech, AI, biotech, or VC is for you, Catalyst is the structured first step that doesn't require leaving medicine to find out.",
  },
  {
    eyebrow: "Residents",
    title: "Building on the side.",
    body: "If you're already working on a side project (a startup idea, a research direction, a tool), Catalyst gives you a cohort of peers and mentors to make it real instead of theoretical.",
  },
  {
    eyebrow: "Physicians",
    title: "Crossing into industry.",
    body: "If you're considering a transition from clinical to industry, Catalyst is the cohort to do that thinking with, alongside people on the same path and people who've already crossed.",
  },
];

export default function CatalystPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs · Catalyst"
        title={
          <>
            Our flagship cohort program for{" "}
            <span className="text-denim-600">physician-innovators.</span>
          </>
        }
        description={
          <>
            Catalyst is a structured cohort experience for medical students,
            residents, and physicians serious about taking on real work in
            healthcare innovation, backed by leading partners and led by
            operators who&apos;ve done it.
          </>
        }
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={CATALYST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-denim-500 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
          >
            Visit Catalyst
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
          <Link
            href="/join"
            className="inline-flex items-center justify-center rounded-md border border-rhino-200 bg-neutral-0 px-6 py-3.5 text-base font-semibold text-rhino-700 transition-colors hover:border-rhino-300 hover:bg-neutral-50"
          >
            Join MDplus first
          </Link>
        </div>
        <p className="mt-6 text-sm text-neutral-500">
          The full program lives at{" "}
          <span className="font-mono text-rhino-700">
            catalyst.mdplus.community
          </span>
          , a separate platform we run for cohort members.
        </p>
      </PageHero>

      {/* ── What Catalyst is ───────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              What it is
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              The fastest serious path from curious to building.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Most physicians and med students who want to do something
              outside clinical work get stuck in research mode for years.
              Catalyst is the structured alternative: a cohort, mentors, and
              a deadline.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.title}
                  className="rounded-lg border border-neutral-200 bg-neutral-0 p-8"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-md bg-yellow-500 text-rhino-900">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-rhino-700">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-600">
                    {p.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Sponsors ───────────────────────────────────────── */}
      <section className="bg-rhino-700 py-20 md:py-24">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-500">
              Backed by
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
              The companies actually building healthcare&apos;s future.
            </h2>
            <p className="mt-6 text-lg text-rhino-100/90">
              Catalyst is sponsored by leading firms across AI, biotech,
              healthcare AI, and venture: the same names that show up in
              MDplus members&apos; trajectories.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {SPONSORS.map((sponsor) => (
              <li
                key={sponsor}
                className="rounded-lg border border-white/15 bg-white/5 px-5 py-4 text-center font-display text-base font-semibold text-white"
              >
                {sponsor}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Who it's for ───────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              Who it&apos;s for
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              Three kinds of people, one cohort.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {WHO.map((w) => (
              <article
                key={w.eyebrow}
                className="rounded-lg border border-neutral-200 bg-neutral-0 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
                  {w.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold leading-tight text-rhino-700">
                  {w.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {w.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-yellow-50 py-24 md:py-28">
        <div className="relative mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl md:mx-auto md:text-center">
            <h2 className="font-display text-3xl font-bold leading-tight text-rhino-700 md:text-5xl">
              See the program.{" "}
              <span className="text-denim-600">Apply when ready.</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              The full Catalyst experience (application, cohort schedule,
              mentor list) lives on the dedicated subdomain.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 md:justify-center">
              <a
                href={CATALYST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-denim-500 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
              >
                Visit Catalyst
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-1 rounded-md border border-rhino-200 bg-neutral-0 px-6 py-3.5 text-base font-semibold text-rhino-700 transition-colors hover:border-rhino-300"
              >
                See all programs
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
