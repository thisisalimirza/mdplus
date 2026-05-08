import Link from "next/link";
import type { Metadata } from "next";
import {
  Mic,
  Sparkles,
  Compass,
  ArrowUpRight,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "The MD+ Podcast — conversations with physician-founders, healthcare investors, and trainees navigating non-traditional paths. Hosted by Geoff Bocobo, MD.",
};

// Replace with the real Spotify show ID once we have it.
// Format: https://open.spotify.com/embed/show/<SHOW_ID>
// Until then, we link out to the host's profile / Buzzsprout.
const SPOTIFY_URL = "https://open.spotify.com/";
const BUZZSPROUT_URL = "https://buzzsprout.com/";

const SERIES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Mic,
    title: "Founder Stories",
    body: "Long-form conversations with physician-founders building healthcare companies. Where the idea came from, where it got hard, what they wish they'd known earlier.",
  },
  {
    icon: Sparkles,
    title: "Fireside Chats",
    body: "Shorter conversations with operators, investors, and clinical leaders shaping healthcare's edge. Recent guests have included the Roon co-founders.",
  },
  {
    icon: Compass,
    title: "Trainee Decision Points",
    body: "Interviews focused on the hard career-stage decisions: residency vs. industry, clinical vs. research, founding vs. joining. The detail most podcasts skip.",
  },
];

export default function PodcastPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn · The MD+ Podcast"
        title={
          <>
            Conversations with{" "}
            <span className="text-denim-600">physician-innovators.</span>
          </>
        }
        description={
          <>
            The MD+ Podcast is an audio series featuring physician-founders,
            healthcare investors, and trainees navigating non-traditional
            paths. Hosted by{" "}
            <span className="font-semibold text-rhino-700">
              Geoff Bocobo, MD
            </span>
            . Launched June 2023; available on Spotify and Buzzsprout.
          </>
        }
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={SPOTIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-denim-500 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
          >
            Listen on Spotify
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
          <a
            href={BUZZSPROUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-rhino-200 bg-neutral-0 px-6 py-3.5 text-base font-semibold text-rhino-700 transition-colors hover:border-rhino-300 hover:bg-neutral-50"
          >
            Listen on Buzzsprout
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </PageHero>

      {/* ── Three series ───────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              Three series
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              One podcast. Three formats.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              The show rotates between three formats so it stays useful at any
              career stage — whether you&apos;re curious, building, or already
              shipping.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SERIES.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  className="rounded-lg border border-neutral-200 bg-neutral-0 p-8"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-md bg-denim-50 text-denim-600">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-rhino-700">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-600">
                    {s.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Host card ──────────────────────────────────────── */}
      <section className="bg-yellow-50 py-20 md:py-24">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="grid gap-10 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
                Host
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-rhino-700 md:text-3xl">
                Geoff Bocobo, MD
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
                Geoff has been the podcast&apos;s host since launch in June
                2023. Previously Director of Medical Devices at MDplus during
                the org&apos;s 2021–2023 era — the long view on what&apos;s
                changed in healthcare innovation, and a deep network of
                physician-builders to draw on for guests.
              </p>
            </div>
            <div className="md:justify-self-end">
              <a
                href={SPOTIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-rhino-700 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-rhino-600"
              >
                Subscribe
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
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
              The conversations don&apos;t stop at the episode.
            </h2>
            <p className="mt-6 text-lg text-rhino-100/90">
              Most guests are members of the MDplus community. The Slack is
              where the follow-up questions, intros, and side-conversations
              actually happen.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 md:justify-center">
              <Link
                href="/join"
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-yellow-500 px-6 py-3.5 text-base font-semibold text-rhino-900 shadow-sm transition-colors hover:bg-yellow-400"
              >
                Join the community
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/learn/newsletter"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Just send the newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
