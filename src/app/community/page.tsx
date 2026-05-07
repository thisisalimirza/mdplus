import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { COMMUNITIES } from "@/data/communities";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Inside MDplus: a 2,500+ member Slack of physicians and med students with sub-communities for every domain.",
};

const HIGHLIGHTS = [
  {
    title: "2,500+ member Slack",
    body: "The center of gravity. One place for chat, mentorship, peer reviews, and warm introductions.",
  },
  {
    title: "Sub-communities for every domain",
    body: "Consulting, Data + AI, VC, Policy, Blockchain — each with their own channel, leaders, and resources.",
  },
  {
    title: "Member directory",
    body: "Find peers and mentors by specialty, training stage, and area of interest. (Members only.)",
  },
  {
    title: "Regional + virtual meetups",
    body: "Regional Community Directors host local events. Virtual events run regularly in the Slack.",
  },
] as const;

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title={
          <>
            Pick your lane.{" "}
            <span className="text-denim-600">Or several.</span>
          </>
        }
        description={
          <>
            The MDplus Slack is the gravitational center: 2,500+ physicians
            and med students working at the cross-section of medicine and
            innovation. Inside it, sub-communities give you a home for
            whichever lane is yours — most members are in more than one.
          </>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/join"
            className="inline-flex items-center justify-center rounded-md bg-denim-500 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
          >
            Join free →
          </Link>
        </div>
      </PageHero>

      {/* ── Highlights ─────────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              What&apos;s inside
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
              The community in four parts.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.title}
                className="rounded-lg border border-neutral-200 bg-neutral-0 p-6"
              >
                <h3 className="font-display text-lg font-bold text-rhino-700">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sub-communities ─────────────────────────────────── */}
      <section
        id="meetups"
        className="bg-neutral-50 py-20 md:py-28"
      >
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              Sub-communities
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
              Five places to land.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Each sub-community has its own Slack channel, leaders, and
              shared resources. Click in to see what each is about.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COMMUNITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/community/${c.slug}`}
                className="group block rounded-lg border border-neutral-200 bg-neutral-0 p-6 transition-all hover:-translate-y-0.5 hover:border-denim-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-rhino-700 group-hover:text-denim-700">
                    {c.name}
                  </h3>
                  {c.memberCount && (
                    <span className="rounded-pill bg-yellow-50 px-2.5 py-0.5 text-xs font-semibold text-yellow-700">
                      {c.memberCount}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {c.tagline}
                </p>
                <p className="mt-4 text-xs font-medium text-neutral-500">
                  #{c.slackChannel}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ─────────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="rounded-xl border border-rhino-100 bg-rhino-700 p-10 text-white md:p-16">
            <h2 className="font-display text-2xl font-bold leading-tight md:text-4xl">
              Ready to look inside?
            </h2>
            <p className="mt-4 max-w-xl text-rhino-100/90">
              Free Slack membership. Stay if it&apos;s for you. We don&apos;t
              charge for the community itself — never have, never will.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/join"
                className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-6 py-3.5 text-base font-semibold text-rhino-900 shadow-sm transition-colors hover:bg-yellow-400"
              >
                Join free →
              </Link>
              <Link
                href="/membership"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                See Premium
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
