import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { journalClubBySlugQuery, journalClubSlugsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";
import type { JournalClubDetail } from "@/sanity/lib/types";

export const revalidate = 60;

export async function generateStaticParams() {
  if (!isSanityConfigured) return [];
  const slugs = await client.fetch(journalClubSlugsQuery);
  return slugs.map((s: { slug: string | null }) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isSanityConfigured) return {};
  const entry: JournalClubDetail | null = await client.fetch(journalClubBySlugQuery, { slug });
  if (!entry) return {};
  return {
    title: entry.title ?? undefined,
    description: entry.summary ?? undefined,
  };
}

export default async function JournalClubEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isSanityConfigured) notFound();
  const entry: JournalClubDetail | null = await client.fetch(journalClubBySlugQuery, { slug });
  if (!entry) notFound();

  return (
    <article className="bg-neutral-0">
      {!!entry.coverImage?.asset && (
        <div className="relative h-72 w-full overflow-hidden bg-neutral-100 md:h-96">
          <Image
            src={urlFor(entry.coverImage).width(1400).height(600).url()}
            alt={entry.coverImage.alt ?? entry.title ?? ""}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Link
          href="/learn/journal-club"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-denim-600 hover:text-denim-800"
        >
          <ArrowLeft className="size-4" aria-hidden />
          All sessions
        </Link>

        {entry.discussionDate && (
          <time
            className="text-xs font-semibold uppercase tracking-widest text-denim-600"
            dateTime={entry.discussionDate}
          >
            {new Date(entry.discussionDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        )}

        <h1 className="mt-3 font-display text-4xl font-bold leading-[1.1] tracking-tight text-rhino-700 md:text-5xl">
          {entry.title}
        </h1>

        {entry.summary && (
          <p className="mt-5 text-xl leading-relaxed text-neutral-600">{entry.summary}</p>
        )}

        {/* Paper reference */}
        {entry.paperTitle && (
          <div className="mt-8 rounded-lg border border-denim-100 bg-denim-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-denim-600">
              Paper discussed
            </p>
            <p className="mt-2 font-semibold text-rhino-700">{entry.paperTitle}</p>
            {entry.paperAuthors && (
              <p className="mt-1 text-sm text-neutral-500">{entry.paperAuthors}</p>
            )}
            {entry.paperUrl && (
              <a
                href={entry.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-denim-600 hover:text-denim-800"
              >
                Read the paper
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            )}
          </div>
        )}

        {/* Key takeaways */}
        {entry.keyTakeaways && entry.keyTakeaways.length > 0 && (
          <div className="mt-8 rounded-lg border border-yellow-200 bg-yellow-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
              Key takeaways
            </p>
            <ul className="mt-4 space-y-3">
              {entry.keyTakeaways.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-700">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-yellow-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Facilitator */}
        {entry.facilitator && (
          <div className="mt-8 flex items-center gap-3 border-t border-neutral-100 pt-6">
            {!!entry.facilitator.photo?.asset && (
              <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-neutral-200">
                <Image
                  src={urlFor(entry.facilitator.photo).width(96).height(96).url()}
                  alt={entry.facilitator.name ?? ""}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Facilitated by
              </p>
              <p className="font-semibold text-neutral-800">
                {entry.facilitator.name}
                {entry.facilitator.credentials && (
                  <span className="font-normal text-neutral-500">, {entry.facilitator.credentials}</span>
                )}
              </p>
              {entry.facilitator.role && (
                <p className="text-sm text-neutral-500">{entry.facilitator.role}</p>
              )}
            </div>
          </div>
        )}

        {/* Discussion notes body */}
        {entry.body && (
          <div className="mt-10 border-t border-neutral-100 pt-10">
            <PortableTextRenderer value={entry.body} />
          </div>
        )}

        <div className="mt-16 border-t border-neutral-100 pt-8">
          <Link
            href="/learn/journal-club"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-denim-600 hover:text-denim-800"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to all sessions
          </Link>
        </div>
      </div>
    </article>
  );
}
