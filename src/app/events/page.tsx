import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { eventsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { EventListItem } from "@/sanity/lib/types";
import { formatEventDate, isEventPast } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "In-person meetups, virtual sessions, and community gatherings from MDplus — the community for physicians building in tech and AI.",
};

export const revalidate = 60;

const TYPE_LABELS: Record<string, string> = {
  "in-person": "In-person",
  virtual: "Virtual",
  hybrid: "Hybrid",
};

const TYPE_STYLES: Record<string, string> = {
  "in-person": "bg-yellow-50 text-yellow-700",
  virtual: "bg-denim-50 text-denim-700",
  hybrid: "bg-rhino-50 text-rhino-700",
};

export default async function EventsPage() {
  const events: EventListItem[] = isSanityConfigured
    ? await client.fetch(eventsQuery)
    : [];

  const upcoming = events
    .filter((event) => !isEventPast(event))
    .sort(
      (a, b) =>
        new Date(a.startDate ?? 0).getTime() -
        new Date(b.startDate ?? 0).getTime(),
    );
  const past = events
    .filter((event) => isEventPast(event))
    .sort(
      (a, b) =>
        new Date(b.startDate ?? 0).getTime() -
        new Date(a.startDate ?? 0).getTime(),
    );

  return (
    <>
      {/* Hero hidden — page now opens directly with the events grid */}
      <div className="hidden">
        <PageHero
          eyebrow="Events"
          title="We actually meet up."
          description="In-person dinners, conference meetups, city chapters, and virtual sessions. Find what's next — or browse what you missed."
        >
          <Link
            href="https://app.mdplus.community/apply"
            className="inline-flex items-center gap-1.5 rounded-md bg-denim-500 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
          >
            Join to get invited
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </PageHero>
      </div>

      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6 space-y-20">

          {/* Upcoming */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              Upcoming
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
              What&apos;s next.
            </h2>

            {upcoming.length === 0 ? (
              <p className="mt-8 text-neutral-500">
                No upcoming events scheduled yet. Join the community to be the first to hear.
              </p>
            ) : (
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {upcoming.map((event) => (
                  <EventCard key={event._id} event={event} />
                ))}
              </div>
            )}
          </div>

          {/* Past */}
          {past.length > 0 && (
            <div id="past-events" className="scroll-mt-24">
              <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
                Past events
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
                What we&apos;ve done.
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {past.map((event) => (
                  <EventCard key={event._id} event={event} />
                ))}
              </div>
            </div>
          )}

          {events.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-neutral-500">Events coming soon. Check back shortly.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function EventCard({ event }: { event: EventListItem }) {
  const isPast = isEventPast(event);
  return (
    <Link
      href={`/events/${event.slug?.current}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-neutral-0 transition-all hover:-translate-y-0.5 hover:border-denim-300 hover:shadow-md"
    >
      {!!event.coverImage?.asset ? (
        <div className="relative aspect-square overflow-hidden bg-neutral-100 p-3">
          <Image
            src={urlFor(event.coverImage).width(800).auto("format").url()}
            alt={event.coverImage.alt ?? event.title ?? ""}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className={`object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02] ${isPast ? "grayscale-[30%]" : ""}`}
          />
          {isPast && (
            <span className="absolute top-3 left-3 rounded-full bg-neutral-800/70 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">
              Past
            </span>
          )}
        </div>
      ) : (
        <div className="flex h-44 items-center justify-center bg-denim-50">
          <Calendar className="size-8 text-denim-300" aria-hidden />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          {event.eventType && (
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${TYPE_STYLES[event.eventType] ?? "bg-neutral-100 text-neutral-600"}`}>
              {TYPE_LABELS[event.eventType] ?? event.eventType}
            </span>
          )}
          {event.startDate && (
            <time className="text-xs text-neutral-400" dateTime={event.startDate}>
              {formatEventDate(event.startDate)}
            </time>
          )}
        </div>

        <h3 className="mt-3 font-display text-xl font-bold leading-snug text-rhino-700 group-hover:text-denim-700">
          {event.title}
        </h3>

        {event.location && (
          <p className="mt-1.5 flex items-center gap-1 text-sm text-neutral-500">
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            {event.location}
          </p>
        )}

        {event.summary && (
          <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 line-clamp-2">
            {event.summary}
          </p>
        )}

        {!isPast && event.registrationUrl && (
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-denim-600 group-hover:text-denim-800">
            Register
            <ArrowRight className="size-3.5" aria-hidden />
          </span>
        )}

        {isPast && (
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-neutral-500 group-hover:text-denim-700">
            Read recap
            <ArrowRight className="size-3.5" aria-hidden />
          </span>
        )}
      </div>
    </Link>
  );
}
