import Link from "next/link";
import type { Metadata } from "next";
import {
  Brain,
  Briefcase,
  TrendingUp,
  FlaskConical,
  GraduationCap,
  Video,
  FileText,
  Database,
  BookOpen,
  Wrench,
  Layers,
  Sparkles,
  Mail,
  Lock,
  ArrowUpRight,
  ArrowRight,
  Calculator,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import {
  SKILLS,
  CATEGORIES,
  SKILLS_LIBRARY_URL,
  type SkillTier,
  type SkillCategory,
  type SkillFormat,
} from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Hands-on courses, guides, and databases for physicians and med students moving into healthcare innovation, data, AI, consulting, and venture capital.",
};

const CATEGORY_ICON: Record<SkillCategory, LucideIcon> = {
  "data-ai": Brain,
  consulting: Briefcase,
  vc: TrendingUp,
  research: FlaskConical,
  career: GraduationCap,
};

const FORMAT_ICON: Record<SkillFormat, LucideIcon> = {
  module: GraduationCap,
  course: Video,
  guide: FileText,
  database: Database,
  workshop: Wrench,
  playbook: BookOpen,
};

const TIER_LABEL: Record<SkillTier, string> = {
  free: "Free",
  "email-gated": "Free with email",
  paid: "Paid · or free for Premium",
};

const TIER_STYLES: Record<SkillTier, string> = {
  free: "bg-neutral-100 text-neutral-600",
  "email-gated": "bg-denim-50 text-denim-700",
  paid: "bg-yellow-100 text-yellow-800",
};

const TIER_ICON: Record<SkillTier, LucideIcon> = {
  free: Sparkles,
  "email-gated": Mail,
  paid: Lock,
};

const HOW_IT_WORKS = [
  {
    icon: Sparkles,
    title: "Free, forever",
    body: "Most foundational guides, the Colab modules, and the core databases stay free for everyone, community member or not.",
  },
  {
    icon: Mail,
    title: "Email for the deeper stuff",
    body: "Some workshops and recordings are gated by an email signup. We use it to send a short follow-up, not to spam you.",
  },
  {
    icon: Lock,
    title: "Paid for the courses",
    body: "Expert-built mini-courses are paid à la carte, or included free with a Premium MDplus membership ($99/year).",
  },
] as const;

export default function SkillsPage() {
  const featured = SKILLS.filter((s) => s.featured);
  const byCategory = (cat: SkillCategory) =>
    SKILLS.filter((s) => s.category === cat);

  return (
    <>
      <PageHero
        eyebrow="Skills Library"
        title={
          <>
            The library for{" "}
            <span className="text-denim-600">physician-innovators.</span>
          </>
        }
        description={
          <>
            Hands-on courses, guides, databases, and expert mini-courses on
            the things you actually need to learn, from RAG to case prep to
            investor decks. Built by physicians and med students for
            physicians and med students.
          </>
        }
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={SKILLS_LIBRARY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-denim-500 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
          >
            Browse the library
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
          <Link
            href="/membership"
            className="inline-flex items-center justify-center rounded-md border border-rhino-200 bg-neutral-0 px-6 py-3.5 text-base font-semibold text-rhino-700 transition-colors hover:border-rhino-300 hover:bg-neutral-50"
          >
            See Premium membership
          </Link>
        </div>
        <p className="mt-6 text-sm text-neutral-500">
          The library lives at{" "}
          <span className="font-mono text-rhino-700">skills.mdplus.community</span>
          , a separate platform we run alongside the main site.
        </p>
      </PageHero>

      {/* ── Categories overview ────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              Five tracks
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
              Pick the track. Then pick the depth.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              The library is organized into five tracks that map directly to
              the sub-communities. Most members work in two or three at once.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {CATEGORIES.map((cat) => {
              const Icon = CATEGORY_ICON[cat.slug];
              return (
                <article
                  key={cat.slug}
                  className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-neutral-0 p-5 transition-all hover:border-denim-300 hover:shadow-sm"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-md bg-denim-50 text-denim-600">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-rhino-700">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {cat.blurb}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured ───────────────────────────────────────── */}
      <section className="bg-yellow-50 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-yellow-700">
                Featured
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
                Where most members start.
              </h2>
            </div>
            <a
              href={SKILLS_LIBRARY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-denim-600 hover:text-denim-700"
            >
              See all in the library
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featured.map((skill) => {
              const CatIcon = CATEGORY_ICON[skill.category];
              const TierIcon = TIER_ICON[skill.tier];
              return (
                <article
                  key={skill.slug}
                  className="flex flex-col rounded-lg border border-neutral-200 bg-neutral-0 p-6 transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-10 items-center justify-center rounded-md bg-rhino-50 text-rhino-700">
                      <CatIcon className="size-5" aria-hidden />
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-pill px-2.5 py-0.5 text-xs font-semibold ${TIER_STYLES[skill.tier]}`}
                    >
                      <TierIcon className="size-3" aria-hidden />
                      {TIER_LABEL[skill.tier]}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-rhino-700">
                    {skill.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                    {skill.description}
                  </p>
                  {skill.duration && (
                    <p className="mt-4 text-xs text-neutral-500">
                      {skill.duration}
                    </p>
                  )}
                  <a
                    href={skill.href ?? SKILLS_LIBRARY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-denim-600 hover:text-denim-700"
                  >
                    Open in library
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Full catalog by category ───────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              The catalog
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
              Everything we&apos;ve put together so far.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              A snapshot. The library updates continuously, with new modules,
              workshops, and expert-led courses added every month.
            </p>
          </div>

          <div className="mt-14 space-y-14">
            {CATEGORIES.map((cat) => {
              const items = byCategory(cat.slug);
              if (items.length === 0) return null;
              const CatIcon = CATEGORY_ICON[cat.slug];
              return (
                <div key={cat.slug}>
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-8 items-center justify-center rounded-md bg-denim-50 text-denim-600">
                        <CatIcon className="size-4" aria-hidden />
                      </span>
                      <h3 className="font-display text-xl font-bold text-rhino-700">
                        {cat.name}
                      </h3>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-neutral-500">
                      {items.length} {items.length === 1 ? "item" : "items"}
                    </span>
                  </div>
                  <ul className="mt-6 grid gap-4 md:grid-cols-2">
                    {items.map((skill) => {
                      const FormatIcon = FORMAT_ICON[skill.format];
                      const TierIcon = TIER_ICON[skill.tier];
                      return (
                        <li key={skill.slug}>
                          <a
                            href={skill.href ?? SKILLS_LIBRARY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex gap-4 rounded-lg border border-neutral-200 bg-neutral-0 p-5 transition-all hover:border-denim-300 hover:shadow-sm"
                          >
                            <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-neutral-50 text-rhino-600 group-hover:bg-denim-50 group-hover:text-denim-600">
                              <FormatIcon
                                className="size-4"
                                aria-hidden
                              />
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-3">
                                <h4 className="font-display text-base font-semibold text-rhino-700 group-hover:text-denim-700">
                                  {skill.title}
                                </h4>
                                <span
                                  className={`inline-flex shrink-0 items-center gap-1 rounded-pill px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${TIER_STYLES[skill.tier]}`}
                                >
                                  <TierIcon
                                    className="size-2.5"
                                    aria-hidden
                                  />
                                  {TIER_LABEL[skill.tier]}
                                </span>
                              </div>
                              <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                                {skill.description}
                              </p>
                              <p className="mt-2 flex items-center gap-1.5 text-xs text-neutral-500">
                                <Layers
                                  className="size-3"
                                  aria-hidden
                                />
                                <span className="capitalize">
                                  {skill.format}
                                </span>
                                {skill.duration ? (
                                  <span>· {skill.duration}</span>
                                ) : null}
                              </p>
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How free / paid works ──────────────────────────── */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              How it works
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
              Most of it is free. The deep work is paid.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {HOW_IT_WORKS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-neutral-200 bg-neutral-0 p-8"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-md bg-yellow-500 text-rhino-900">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-rhino-700">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-12 rounded-xl border border-yellow-200 bg-yellow-50 p-8 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex max-w-xl gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-md bg-yellow-500 text-rhino-900">
                  <Calculator className="size-6" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
                    Math check
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-rhino-700 md:text-2xl">
                    One paid course usually costs more than a year of Premium.
                  </h3>
                  <p className="mt-3 text-sm text-neutral-600">
                    Premium ($99/year) unlocks every paid course in the
                    library plus priority Catalyst access. If you&apos;d take
                    more than one course in 12 months, the math is obvious.
                  </p>
                </div>
              </div>
              <Link
                href="/membership"
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-rhino-700 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-rhino-600"
              >
                See Premium
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-rhino-700 py-24 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,203,33,0.18),_transparent_55%)]"
        />
        <div className="relative mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl md:mx-auto md:text-center">
            <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-5xl">
              Open the library.{" "}
              <span className="text-yellow-500">See what&apos;s inside.</span>
            </h2>
            <p className="mt-6 text-lg text-rhino-100/90">
              Most of it is free, no signup. Premium and paid courses are
              clearly marked.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 md:justify-center">
              <a
                href={SKILLS_LIBRARY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-yellow-500 px-6 py-3.5 text-base font-semibold text-rhino-900 shadow-sm transition-colors hover:bg-yellow-400"
              >
                Browse the library
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
              <Link
                href="/membership"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Become a Premium member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
