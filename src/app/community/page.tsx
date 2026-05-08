import Link from "next/link";
import type { Metadata } from "next";
import {
  MessagesSquare,
  Layers,
  UserSearch,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { PhotoHero } from "@/components/marketing/PhotoHero";
import { EventPhotoStrip } from "@/components/marketing/EventPhotoStrip";
import { COMMUNITIES } from "@/data/communities";
import { COMMUNITY_ICON } from "@/lib/community-icons";
import { HERO_COLLAGE, MEETUP_PHOTOS } from "@/data/event-photos";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Inside MDplus: a 5,000+ member Slack of physicians and med students with sub-communities for every domain.",
};

const HIGHLIGHTS = [
  {
    icon: MessagesSquare,
    title: "5,000+ member Slack",
    body: "The center of gravity. One place for chat, mentorship, peer reviews, and warm introductions.",
  },
  {
    icon: Layers,
    title: "Sub-communities for every domain",
    body: "Consulting, Data + AI, VC, Policy, Blockchain — each with their own channel, leaders, and resources.",
  },
  {
    icon: UserSearch,
    title: "Member directory",
    body: "Find peers and mentors by specialty, training stage, and area of interest. (Members only.)",
  },
  {
    icon: MapPin,
    title: "Regional + virtual meetups",
    body: "Regional Community Directors host local events. Virtual events run regularly in the Slack.",
  },
] as const;

export default function CommunityPage() {
  return (
    <>
      <PhotoHero
        eyebrow="Community"
        imageSrc={HERO_COLLAGE.src}
        imageAlt={HERO_COLLAGE.alt}
        title={
          <>
            Pick your lane.{" "}
            <span className="text-yellow-500">Or several.</span>
          </>
        }
        description={
          <>
            The MDplus Slack is the gravitational center: 5,000+ physicians
            and med students at the cross-section of medicine and innovation.
            Inside, sub-communities give you a home for whichever lane is
            yours — most members are in more than one.
          </>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/join"
            className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-6 py-3.5 text-base font-semibold text-rhino-900 shadow-sm transition-colors hover:bg-yellow-400"
          >
            Join free →
          </Link>
        </div>
      </PhotoHero>

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
            {HIGHLIGHTS.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className="flex gap-4 rounded-lg border border-neutral-200 bg-neutral-0 p-6"
                >
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-yellow-100 text-yellow-700">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-rhino-700">
                      {h.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {h.body}
                    </p>
                  </div>
                </div>
              );
            })}
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
            {COMMUNITIES.map((c) => {
              const Icon = COMMUNITY_ICON[c.slug];
              return (
                <Link
                  key={c.slug}
                  href={`/community/${c.slug}`}
                  className="group block rounded-lg border border-neutral-200 bg-neutral-0 p-6 transition-all hover:-translate-y-0.5 hover:border-denim-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-10 items-center justify-center rounded-md bg-rhino-50 text-rhino-700 group-hover:bg-denim-50 group-hover:text-denim-600">
                        {Icon && <Icon className="size-5" aria-hidden />}
                      </span>
                      <h3 className="font-display text-xl font-bold text-rhino-700 group-hover:text-denim-700">
                        {c.name}
                      </h3>
                    </div>
                    {c.memberCount && (
                      <span className="shrink-0 rounded-pill bg-yellow-50 px-2.5 py-0.5 text-xs font-semibold text-yellow-700">
                        {c.memberCount}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {c.tagline}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-neutral-500">
                    <span className="text-neutral-400">#</span>
                    {c.slackChannel}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Event photo strip ───────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              In real life, too
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
              We actually meet up.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Slack is the always-on layer. Regional dinners, conference
              meetups, and city chapters are how members find each other in
              person. Hosted by Regional Community Directors.
            </p>
          </div>
          <div className="mt-12">
            <EventPhotoStrip photos={MEETUP_PHOTOS.slice(0, 4)} />
          </div>
        </div>
      </section>

      {/* ── Closing CTA ─────────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="rounded-xl border border-rhino-100 bg-rhino-700 p-10 text-white md:p-16">
            <h2 className="font-display text-2xl font-bold leading-tight text-white md:text-4xl">
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
