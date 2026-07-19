import type { MetadataRoute } from "next";
import { COMMUNITIES } from "@/data/communities";
import { getPodcastEpisodes } from "@/lib/podcast";
import { absoluteUrl } from "@/lib/site";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import {
  postSlugsQuery,
  journalClubSlugsQuery,
  eventSlugsQuery,
} from "@/sanity/lib/queries";

const STATIC_ROUTES: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about/team", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about/history", changeFrequency: "yearly", priority: 0.5 },
  { path: "/about/donate", changeFrequency: "yearly", priority: 0.4 },
  { path: "/community", changeFrequency: "weekly", priority: 0.9 },
  { path: "/events", changeFrequency: "weekly", priority: 0.8 },
  { path: "/learn", changeFrequency: "weekly", priority: 0.9 },
  { path: "/learn/articles", changeFrequency: "weekly", priority: 0.8 },
  { path: "/learn/podcast", changeFrequency: "weekly", priority: 0.8 },
  { path: "/learn/newsletter", changeFrequency: "monthly", priority: 0.6 },
  { path: "/learn/journal-club", changeFrequency: "weekly", priority: 0.6 },
  { path: "/learn/publications", changeFrequency: "monthly", priority: 0.6 },
  { path: "/programs", changeFrequency: "monthly", priority: 0.8 },
  { path: "/programs/catalyst", changeFrequency: "monthly", priority: 0.7 },
  { path: "/programs/datathon", changeFrequency: "monthly", priority: 0.7 },
  { path: "/membership", changeFrequency: "monthly", priority: 0.7 },
  { path: "/skills", changeFrequency: "monthly", priority: 0.7 },
  { path: "/partners", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
  { path: "/guidelines", changeFrequency: "yearly", priority: 0.3 },
  { path: "/archive", changeFrequency: "weekly", priority: 0.5 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const communityEntries: MetadataRoute.Sitemap = COMMUNITIES.map((c) => ({
    url: absoluteUrl(`/community/${c.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const podcastEpisodes = await getPodcastEpisodes();
  const podcastEntries: MetadataRoute.Sitemap = podcastEpisodes.map((ep) => ({
    url: absoluteUrl(`/learn/podcast/${ep.slug}`),
    lastModified: ep.publishedAt ? new Date(ep.publishedAt) : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  let sanityEntries: MetadataRoute.Sitemap = [];
  if (isSanityConfigured) {
    const [posts, journalClub, events] = await Promise.all([
      client.fetch(postSlugsQuery),
      client.fetch(journalClubSlugsQuery),
      client.fetch(eventSlugsQuery),
    ]);

    sanityEntries = [
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...posts.map((p: any) => ({
        url: absoluteUrl(`/learn/articles/${p.slug}`),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...journalClub.map((j: any) => ({
        url: absoluteUrl(`/learn/journal-club/${j.slug}`),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...events.map((e: any) => ({
        url: absoluteUrl(`/events/${e.slug}`),
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      })),
    ];
  }

  return [
    ...staticEntries,
    ...communityEntries,
    ...podcastEntries,
    ...sanityEntries,
  ];
}
