import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  MessagesSquare,
  Layers,
  UserSearch,
  MapPin,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { PhotoHero } from "@/components/marketing/PhotoHero";
import { EventPhotoStrip } from "@/components/marketing/EventPhotoStrip";
import { COMMUNITIES } from "@/data/communities";
import { CommunityCard } from "@/components/site/CommunityCard";
import { HERO_COLLAGE, MEETUP_PHOTOS } from "@/data/event-photos";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { recentEventsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { EventListItem } from "@/sanity/lib/types";
import { formatEventDate } from "@/lib/events";

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
    body: "Consulting, Data + AI, VC, Policy, Blockchain. Each has its own channel, leaders, and resources.",
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

export const revalidate = 60;

export default async function CommunityPage() {
  const recentEvents: EventListItem[] = isSanityConfigured
    ? await client.fetch(recentEventsQuery)
    : [];
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
            yours. Most members are in more than one.
          </>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="https://app.mdplus.community/apply"
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
            {COMMUNITIES.map((c, i) => (
              <CommunityCard key={c.slug} community={c} index={i} showMeta />
            ))}
          </div>
        </div>
      </section>

      {/* ── Events ─────────────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
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
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-denim-600 hover:text-denim-800"
            >
              See all events
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

          {recentEvents.length > 0 ? (
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recentEvents.map((event) => (
                <Link
                  key={event._id}
                  href={`/events/${event.slug?.current}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-neutral-0 transition-all hover:-translate-y-0.5 hover:border-denim-300 hover:shadow-md"
                >
                  {!!event.coverImage?.asset ? (
                    <div className="relative aspect-square overflow-hidden bg-neutral-100">
                      <Image
                        src={urlFor(event.coverImage).width(800).auto("format").url()}
                        alt={event.coverImage.alt ?? event.title ?? ""}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  ) : (
                    <div className="flex h-40 items-center justify-center bg-denim-50">
                      <Calendar className="size-7 text-denim-300" aria-hidden />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    {event.startDate && (
                      <time className="text-xs font-semibold uppercase tracking-widest text-denim-600" dateTime={event.startDate}>
                        {formatEventDate(event.startDate)}
                      </time>
                    )}
                    <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-rhino-700 group-hover:text-denim-700">
                      {event.title}
                    </h3>
                    {event.location && (
                      <p className="mt-1 flex items-center gap-1 text-sm text-neutral-500">
                        <MapPin className="size-3.5 shrink-0" aria-hidden />
                        {event.location}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-12">
              <EventPhotoStrip photos={MEETUP_PHOTOS.slice(0, 4)} />
            </div>
          )}
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
              charge for the community itself. Never have, never will.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://app.mdplus.community/apply"
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
