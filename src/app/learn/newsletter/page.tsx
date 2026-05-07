import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { NewsletterSignup } from "@/components/marketing/NewsletterSignup";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "A weekly briefing for physicians and med students building beyond the OR. Free, signal-only, every Sunday morning.",
};

const TOPICS = [
  {
    title: "Founder spotlights",
    body: "Interviews with physician-founders — what they're building, where they got stuck, what they wish they'd known.",
  },
  {
    title: "AI in clinical practice",
    body: "The tools that are actually shipping inside hospitals, not just the press releases. Vetted by clinicians.",
  },
  {
    title: "Career moves",
    body: "Notable people leaving clinical roles for industry — and the smaller, quieter moves that signal where the field is going.",
  },
  {
    title: "Funding + deals",
    body: "Healthtech rounds, IPOs, and quiet acquisitions, with one-line takes on what they mean for clinicians.",
  },
  {
    title: "From the community",
    body: "Highlights from the MDplus Slack — best threads, member wins, and questions the community is wrestling with.",
  },
] as const;

const PROMISES = [
  { label: "Every Sunday morning", body: "On your phone before you reach for it." },
  { label: "5-minute read", body: "Not a 40-paragraph essay. Sized to fit between cases." },
  { label: "Signal only", body: "No fluff, no sponsored cross-promo, no LinkedIn-style takes." },
  { label: "Always free", body: "And you can unsubscribe in one click. We'd rather lose you than spam you." },
] as const;

const SAMPLE_ISSUES = [
  {
    label: "Issue 01",
    date: "Coming soon",
    title: "Why every physician should know what RAG is by 2027.",
    teaser:
      "And what to actually do about it. Plus: a Stanford MD-MBA's path into Andreessen, and 3 datathons closing this month.",
  },
  {
    label: "Issue 02",
    date: "Coming soon",
    title: "The quiet rise of clinician-led healthtech accelerators.",
    teaser:
      "Six new programs that didn't exist 18 months ago. Where they're getting funded, who's getting in, and how to apply.",
  },
  {
    label: "Issue 03",
    date: "Coming soon",
    title: "Inside Catalyst: what 12 weeks of building looks like.",
    teaser:
      "Three current cohort members on what they're shipping, what they wasted time on, and what surprised them.",
  },
] as const;

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="The MDplus Newsletter"
        title={
          <>
            The weekly briefing for physician-builders.{" "}
            <span className="text-denim-600">In your inbox.</span>
          </>
        }
        description={
          <>
            A short, signal-only Sunday read for physicians and med students
            building beyond the OR. Founder spotlights, AI in clinical
            practice, career moves, healthtech deals — and what they all mean
            for you.
          </>
        }
      >
        <div className="max-w-md">
          <NewsletterSignup />
        </div>
        <p className="mt-4 text-sm text-neutral-500">
          Free. Unsubscribe in one click. We&apos;ll never share your email.
        </p>
      </PageHero>

      {/* ── Topics ─────────────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              What&apos;s inside
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
              Five threads. One short read.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Every issue covers a rotating mix from these five threads. Some
              weeks lean heavier on one — depends on what&apos;s actually
              happening.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((topic) => (
              <article
                key={topic.title}
                className="rounded-lg border border-neutral-200 bg-neutral-0 p-6"
              >
                <h3 className="font-display text-lg font-bold text-rhino-700">
                  {topic.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {topic.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sample issues preview ──────────────────────────── */}
      <section className="bg-yellow-50 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-700">
              Issue previews
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
              What the first issues will look like.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              We&apos;re finalizing the launch lineup. Subscribe and Issue
              01 will land in your inbox the moment we ship it.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {SAMPLE_ISSUES.map((issue) => (
              <article
                key={issue.label}
                className="flex flex-col rounded-lg border border-rhino-100 bg-neutral-0 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-rhino-500">
                    {issue.label}
                  </span>
                  <span className="text-xs text-neutral-500">
                    {issue.date}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-rhino-700">
                  {issue.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                  {issue.teaser}
                </p>
                <p className="mt-5 text-xs text-neutral-400">~5 min read</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── The promises ───────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              The promises
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
              Four rules we won&apos;t break.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PROMISES.map((p) => (
              <div
                key={p.label}
                className="flex gap-4 rounded-lg border border-neutral-200 bg-neutral-0 p-6"
              >
                <span
                  aria-hidden
                  className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-rhino-900"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 7.5l3 3 6-7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-rhino-700">
                    {p.label}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why it's different ─────────────────────────────── */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
                Why this one
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
                Not industry analysts. Physicians.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
              <p>
                Most healthtech writing is done by people who&apos;ve never
                rounded. Most clinical writing ignores what&apos;s changing
                around medicine. We sit in the middle.
              </p>
              <p>
                The newsletter is curated by working physicians and senior med
                students inside the MDplus community — people who can tell
                whether a tool actually helps at the bedside, whether a deal
                signals a real shift, and whether a career move is worth
                paying attention to.
              </p>
              <p className="text-rhino-700">
                <span className="font-semibold">Want the real-time version?</span>{" "}
                The Slack community is where these conversations happen all
                week. The newsletter is the curated weekly summary.
              </p>
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
              Five minutes a week.{" "}
              <span className="text-yellow-500">Worth it.</span>
            </h2>
            <p className="mt-6 text-lg text-rhino-100/90">
              Subscribe and we&apos;ll send Issue 01 the day it launches.
            </p>
            <div className="mt-10 md:mx-auto md:max-w-md">
              <NewsletterSignup variant="dark" />
            </div>
            <p className="mt-6 text-sm text-rhino-100/70">
              Want the real-time version too?{" "}
              <Link
                href="/join"
                className="text-yellow-500 underline-offset-4 hover:underline"
              >
                Join the Slack community
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
