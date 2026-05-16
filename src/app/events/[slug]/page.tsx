import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, ExternalLink } from "lucide-react";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { eventBySlugQuery, eventSlugsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";
import type { EventDetail } from "@/sanity/lib/types";

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

function formatDate(iso: string, includeTime = false) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    ...(includeTime ? { hour: "numeric", minute: "2-digit" } : {}),
  });
}

export async function generateStaticParams() {
  if (!isSanityConfigured) return [];
  const slugs = await client.fetch(eventSlugsQuery);
  return slugs.map((s: { slug: string | null }) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isSanityConfigured) return {};
  const event: EventDetail | null = await client.fetch(eventBySlugQuery, { slug });
  if (!event) return {};
  return {
    title: event.title ?? undefined,
    description: event.summary ?? undefined,
    openGraph: event.coverImage?.asset
      ? { images: [urlFor(event.coverImage).width(1200).height(630).url()] }
      : undefined,
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isSanityConfigured) notFound();
  const event: EventDetail | null = await client.fetch(eventBySlugQuery, { slug });
  if (!event) notFound();

  const isPast = event.status === "past";

  return (
    <article className="bg-neutral-0">
      {!!event.coverImage?.asset && (
        <div className="relative h-72 w-full overflow-hidden bg-neutral-100 md:h-96">
          <Image
            src={urlFor(event.coverImage).width(1400).height(600).url()}
            alt={event.coverImage.alt ?? event.title ?? ""}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Link
          href="/events"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-denim-600 hover:text-denim-800"
        >
          <ArrowLeft className="size-4" aria-hidden />
          All events
        </Link>

        {/* Status + type badges */}
        <div className="flex flex-wrap items-center gap-2">
          {isPast && (
            <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-500">
              Past event
            </span>
          )}
          {event.eventType && (
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${TYPE_STYLES[event.eventType] ?? "bg-neutral-100 text-neutral-600"}`}>
              {TYPE_LABELS[event.eventType] ?? event.eventType}
            </span>
          )}
        </div>

        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-rhino-700 md:text-5xl">
          {event.title}
        </h1>

        {event.summary && (
          <p className="mt-5 text-xl leading-relaxed text-neutral-600">{event.summary}</p>
        )}

        {/* Event details card */}
        <div className="mt-8 grid gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-6 sm:grid-cols-2">
          {event.startDate && (
            <div className="flex items-start gap-3">
              <Calendar className="mt-0.5 size-4 shrink-0 text-denim-500" aria-hidden />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Date</p>
                <p className="mt-1 text-sm font-medium text-neutral-700">{formatDate(event.startDate, true)}</p>
                {event.endDate && (
                  <p className="text-sm text-neutral-500">→ {formatDate(event.endDate, true)}</p>
                )}
              </div>
            </div>
          )}
          {event.location && (
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-denim-500" aria-hidden />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Location</p>
                <p className="mt-1 text-sm font-medium text-neutral-700">{event.location}</p>
              </div>
            </div>
          )}
        </div>

        {/* Registration CTA */}
        {!isPast && event.registrationUrl && (
          <div className="mt-8">
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-denim-500 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
            >
              Register for this event
              <ExternalLink className="size-4" aria-hidden />
            </a>
          </div>
        )}

        {/* Body */}
        {event.body && (
          <div className="mt-10 border-t border-neutral-100 pt-10">
            <PortableTextRenderer value={event.body} />
          </div>
        )}

        <div className="mt-16 border-t border-neutral-100 pt-8">
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-denim-600 hover:text-denim-800"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to all events
          </Link>
        </div>
      </div>
    </article>
  );
}
