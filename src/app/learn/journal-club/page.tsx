import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { journalClubListQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { JournalClubListItem } from "@/sanity/lib/types";

export const metadata: Metadata = {
  title: "Journal Club",
  description:
    "Recurring deep-dives into the latest data and AI papers in medicine, with annotated reading guides and member discussion threads.",
};

export const revalidate = 60;

const NOTION_ARCHIVE_URL =
  "https://vanilla-emmental-550.notion.site/1cd8bdd2e2a34976a2fd4fcc01dbdd07?v=90466d91ab9b4d95b46c7c9e18e0c4b0";

export default async function JournalClubPage() {
  const entries: JournalClubListItem[] = isSanityConfigured
    ? await client.fetch(journalClubListQuery)
    : [];

  return (
    <>
      <PageHero
        eyebrow="Journal Club"
        title="Read papers together. Make sense of them faster."
        description="Recurring deep-dives into the latest data and AI papers in medicine, with annotated reading guides and member discussion threads."
      />

      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          {entries.length === 0 ? (
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-8 py-20 text-center">
              <span className="inline-flex size-12 items-center justify-center rounded-md bg-denim-50 text-denim-600">
                <BookOpen className="size-6" aria-hidden />
              </span>
              <h2 className="mt-4 font-display text-xl font-bold text-rhino-700">
                First session coming soon
              </h2>
              <p className="mt-3 text-neutral-500">
                Discussion notes and reading guides will appear here after each session.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {entries.map((entry) => (
                <Link
                  key={entry._id}
                  href={`/learn/journal-club/${entry.slug?.current}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-neutral-0 transition-all hover:-translate-y-0.5 hover:border-denim-300 hover:shadow-md"
                >
                  {!!entry.coverImage?.asset ? (
                    <div className="relative h-44 overflow-hidden bg-neutral-100">
                      <Image
                        src={urlFor(entry.coverImage).width(600).height(352).url()}
                        alt={entry.coverImage.alt ?? entry.title ?? ""}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex h-44 items-center justify-center bg-denim-50">
                      <BookOpen className="size-8 text-denim-300" aria-hidden />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6">
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

                    <h2 className="mt-2 font-display text-xl font-bold leading-snug text-rhino-700 group-hover:text-denim-700">
                      {entry.title}
                    </h2>

                    {entry.paperTitle && (
                      <p className="mt-1 text-xs text-neutral-500 line-clamp-1">
                        Paper: {entry.paperTitle}
                      </p>
                    )}

                    {entry.summary && (
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 line-clamp-3">
                        {entry.summary}
                      </p>
                    )}

                    {entry.keyTakeaways && entry.keyTakeaways.length > 0 && (
                      <ul className="mt-4 space-y-1">
                        {entry.keyTakeaways.slice(0, 2).map((t, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-neutral-600">
                            <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-yellow-400" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Archive */}
          <div className="mt-16 rounded-xl border border-neutral-200 bg-neutral-50 p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-rhino-500">
                  Legacy Archive
                </p>
                <h2 className="mt-1 font-display text-xl font-bold text-rhino-700">
                  AI in Medicine Journal Club — Past Sessions
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Browse past paper discussions focused on AI, data science, and clinical innovation from previous Journal Club seasons.
                </p>
              </div>
              <a
                href={NOTION_ARCHIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-md border border-neutral-300 bg-neutral-0 px-5 py-2.5 text-sm font-semibold text-rhino-700 transition-colors hover:border-denim-300 hover:text-denim-700"
              >
                View archive
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
