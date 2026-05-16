import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Mic } from "lucide-react";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { podcastEpisodeBySlugQuery, podcastEpisodeSlugsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";
import type { PodcastEpisodeDetail } from "@/sanity/lib/types";

export const revalidate = 60;

const SERIES_LABELS: Record<string, string> = {
  "founder-stories": "Founder Stories",
  "fireside-chats": "Fireside Chats",
  "trainee-decision-points": "Trainee Decision Points",
};

export async function generateStaticParams() {
  if (!isSanityConfigured) return [];
  const slugs = await client.fetch(podcastEpisodeSlugsQuery);
  return slugs.map((s: { slug: string | null }) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isSanityConfigured) return {};
  const ep: PodcastEpisodeDetail | null = await client.fetch(podcastEpisodeBySlugQuery, { slug });
  if (!ep) return {};
  return {
    title: ep.title ?? undefined,
    description: ep.summary ?? undefined,
    openGraph: ep.coverImage?.asset
      ? { images: [urlFor(ep.coverImage).width(1200).height(630).url()] }
      : undefined,
  };
}

export default async function PodcastEpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isSanityConfigured) notFound();
  const ep: PodcastEpisodeDetail | null = await client.fetch(podcastEpisodeBySlugQuery, { slug });
  if (!ep) notFound();

  const listenLinks = [
    { label: "Listen on Spotify", url: ep.spotifyUrl },
    { label: "Listen on Buzzsprout", url: ep.buzzsproutUrl },
    { label: "Apple Podcasts", url: ep.applePodcastsUrl },
  ].filter((l) => l.url);

  return (
    <article className="bg-neutral-0">
      {/* Cover */}
      {!!ep.coverImage?.asset && (
        <div className="relative h-72 w-full overflow-hidden bg-neutral-100 md:h-96">
          <Image
            src={urlFor(ep.coverImage).width(1400).height(600).url()}
            alt={ep.coverImage.alt ?? ep.title ?? ""}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Link
          href="/learn/podcast"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-denim-600 hover:text-denim-800"
        >
          <ArrowLeft className="size-4" aria-hidden />
          All episodes
        </Link>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3">
          {ep.episodeNumber && (
            <span className="text-sm font-semibold text-neutral-400">
              Ep. {ep.episodeNumber}
            </span>
          )}
          {ep.series && (
            <span className="rounded-full bg-denim-50 px-3 py-1 text-xs font-semibold text-denim-700">
              {SERIES_LABELS[ep.series] ?? ep.series}
            </span>
          )}
          {ep.duration && (
            <span className="text-sm text-neutral-400">{ep.duration}</span>
          )}
          {ep.publishedAt && (
            <time className="text-sm text-neutral-400" dateTime={ep.publishedAt}>
              {new Date(ep.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          )}
        </div>

        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-rhino-700 md:text-5xl">
          {ep.title}
        </h1>

        {ep.summary && (
          <p className="mt-5 text-xl leading-relaxed text-neutral-600">{ep.summary}</p>
        )}

        {/* Guest card */}
        {ep.guest && (
          <div className="mt-8 flex items-center gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-5">
            <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-neutral-200">
              {!!ep.guestPhoto?.asset ? (
                <Image
                  src={urlFor(ep.guestPhoto).width(112).height(112).url()}
                  alt={ep.guest}
                  fill
                  className="object-cover"
                />
              ) : (
                <span className="flex h-full items-center justify-center">
                  <Mic className="size-6 text-neutral-400" aria-hidden />
                </span>
              )}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Guest
              </p>
              <p className="font-semibold text-rhino-700">{ep.guest}</p>
              {ep.guestTitle && (
                <p className="text-sm text-neutral-500">{ep.guestTitle}</p>
              )}
            </div>
          </div>
        )}

        {/* Listen links */}
        {listenLinks.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {listenLinks.map((l) => (
              <a
                key={l.url}
                href={l.url!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-denim-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-denim-600"
              >
                {l.label}
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            ))}
          </div>
        )}

        {/* Show notes */}
        {ep.body && (
          <div className="mt-10 border-t border-neutral-100 pt-10">
            <h2 className="mb-6 font-display text-xl font-bold text-rhino-700">
              Show notes
            </h2>
            <PortableTextRenderer value={ep.body} />
          </div>
        )}

        <div className="mt-16 border-t border-neutral-100 pt-8">
          <Link
            href="/learn/podcast"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-denim-600 hover:text-denim-800"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to all episodes
          </Link>
        </div>
      </div>
    </article>
  );
}
