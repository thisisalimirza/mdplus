import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Mic } from "lucide-react";
import {
  getPodcastEpisodeBySlug,
  getPodcastEpisodes,
} from "@/lib/podcast";
import { sanitizePodcastHtml } from "@/lib/sanitize-html";

export const revalidate = 3600;

export async function generateStaticParams() {
  const episodes = await getPodcastEpisodes();
  return episodes.map((ep) => ({ slug: ep.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ep = await getPodcastEpisodeBySlug(slug);
  if (!ep) return {};
  return {
    title: ep.title,
    description: ep.summary || undefined,
    openGraph: ep.coverImageUrl
      ? { images: [{ url: ep.coverImageUrl }] }
      : undefined,
  };
}

export default async function PodcastEpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ep = await getPodcastEpisodeBySlug(slug);
  if (!ep) notFound();

  const listenLinks = [
    { label: "Listen on Spotify", url: ep.spotifyUrl },
    { label: "Apple Podcasts", url: ep.applePodcastsUrl },
    { label: "Buzzsprout", url: ep.buzzsproutUrl },
  ].filter((l): l is { label: string; url: string } => Boolean(l.url));

  const showNotesHtml = sanitizePodcastHtml(ep.descriptionHtml);

  return (
    <article className="bg-neutral-0">
      {ep.coverImageUrl && (
        <div className="relative h-72 w-full overflow-hidden bg-neutral-100 md:h-96">
          <Image
            src={ep.coverImageUrl}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
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

        <div className="flex flex-wrap items-center gap-3">
          {ep.episodeNumber != null && (
            <span className="text-sm font-semibold text-neutral-400">
              Ep. {ep.episodeNumber}
            </span>
          )}
          {ep.durationLabel && (
            <span className="text-sm text-neutral-400">{ep.durationLabel}</span>
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
          <p className="mt-5 text-xl leading-relaxed text-neutral-600">
            {ep.summary}
          </p>
        )}

        {ep.guest && (
          <div className="mt-8 flex items-center gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-5">
            <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-neutral-200">
              <span className="flex h-full items-center justify-center">
                <Mic className="size-6 text-neutral-400" aria-hidden />
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Guest
              </p>
              <p className="font-semibold text-rhino-700">{ep.guest}</p>
            </div>
          </div>
        )}

        {listenLinks.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {listenLinks.map((l) => (
              <a
                key={l.label}
                href={l.url}
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

        {ep.audioUrl && (
          <div className="mt-8">
            <audio controls preload="none" className="w-full" src={ep.audioUrl}>
              <a href={ep.audioUrl}>Download episode audio</a>
            </audio>
          </div>
        )}

        {showNotesHtml && (
          <div className="mt-10 border-t border-neutral-100 pt-10">
            <h2 className="mb-6 font-display text-xl font-bold text-rhino-700">
              Show notes
            </h2>
            <div
              className="prose prose-neutral max-w-none text-base leading-relaxed text-neutral-700 [&_a]:text-denim-600 [&_a]:underline [&_li]:my-1 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5"
              dangerouslySetInnerHTML={{ __html: showNotesHtml }}
            />
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
