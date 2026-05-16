import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import {
  archivePostsQuery,
  archivePublicationsQuery,
  archiveJournalClubQuery,
  archivePodcastQuery,
  archiveEventsQuery,
} from "@/sanity/lib/queries";
import { ArchiveSearch, type ArchiveItem } from "@/components/archive/ArchiveSearch";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "Every article, publication, journal club session, podcast episode, and event from MDplus — searchable in one place.",
};

export const revalidate = 60;

const CATEGORY_LABELS: Record<string, string> = {
  "medicine-ai": "Medicine & AI",
  career: "Career",
  technology: "Technology",
  research: "Research",
  community: "Community",
  opinion: "Opinion",
};

export default async function ArchivePage() {
  if (!isSanityConfigured) {
    return (
      <>
        <PageHero
          eyebrow="Archive"
          title="Everything we've published."
          description="Articles, publications, journal club sessions, podcast episodes, and events — all in one searchable place."
        />
        <section className="bg-neutral-0 py-20">
          <div className="mx-auto max-w-(--container-max) px-6 text-center">
            <p className="text-neutral-500">Content will appear here once Sanity is configured.</p>
          </div>
        </section>
      </>
    );
  }

  const [posts, publications, journalClub, podcast, events] = await Promise.all([
    client.fetch(archivePostsQuery),
    client.fetch(archivePublicationsQuery),
    client.fetch(archiveJournalClubQuery),
    client.fetch(archivePodcastQuery),
    client.fetch(archiveEventsQuery),
  ]);

  const items: ArchiveItem[] = [
    // Articles
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...posts.map((p: any): ArchiveItem => ({
      id: p._id,
      type: "article",
      title: p.title ?? "",
      date: p.publishedAt,
      summary: p.excerpt,
      href: `/learn/articles/${p.slug}`,
      badge: p.category ? CATEGORY_LABELS[p.category] ?? p.category : null,
      meta: p.author ? `by ${p.author}` : null,
    })),

    // Publications
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...publications.map((p: any): ArchiveItem => ({
      id: p._id,
      type: "publication",
      title: p.title ?? "",
      date: p.publishedAt,
      summary: p.abstract,
      href: p.externalUrl ?? "/learn/publications",
      badge: p.venue,
      meta: p.authors,
    })),

    // Journal Club
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...journalClub.map((j: any): ArchiveItem => ({
      id: j._id,
      type: "journal-club",
      title: j.title ?? "",
      date: j.discussionDate,
      summary: j.summary,
      href: `/learn/journal-club/${j.slug}`,
      badge: null,
      meta: j.paperTitle ? `Paper: ${j.paperTitle}` : null,
    })),

    // Podcast
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...podcast.map((e: any): ArchiveItem => ({
      id: e._id,
      type: "podcast",
      title: e.title ?? "",
      date: e.publishedAt,
      summary: e.summary,
      href: `/learn/podcast/${e.slug}`,
      badge: e.episodeNumber ? `Ep. ${e.episodeNumber}` : null,
      meta: e.guest ? `${e.guest}${e.guestTitle ? ` · ${e.guestTitle}` : ""}` : null,
    })),

    // Events
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...events.map((e: any): ArchiveItem => ({
      id: e._id,
      type: "event",
      title: e.title ?? "",
      date: e.startDate,
      summary: e.summary,
      href: `/events/${e.slug}`,
      badge: e.status === "upcoming" ? "Upcoming" : null,
      meta: e.location,
    })),
  ].sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <>
      <PageHero
        eyebrow="Archive"
        title="Everything we've published."
        description="Articles, publications, journal club sessions, podcast episodes, and events — all in one searchable place."
      />

      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <ArchiveSearch items={items} />
        </div>
      </section>
    </>
  );
}
