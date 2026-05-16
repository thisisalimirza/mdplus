import { defineQuery } from "next-sanity";

export const postsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    category,
    coverImage { asset, alt, hotspot, crop },
    author-> { name, credentials, photo }
  }
`);

export const postsByCategoryQuery = defineQuery(`
  *[_type == "post" && defined(slug.current) && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    category,
    coverImage { asset, alt, hotspot, crop },
    author-> { name, credentials, photo }
  }
`);

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    category,
    coverImage { asset, alt, hotspot, crop },
    author-> { name, credentials, role, bio, photo },
    body
  }
`);

export const postSlugsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] { "slug": slug.current }
`);

export const publicationsQuery = defineQuery(`
  *[_type == "publication"] | order(publishedAt desc) {
    _id,
    title,
    authors,
    venue,
    publishedAt,
    category,
    abstract,
    externalUrl,
    doi
  }
`);

export const journalClubListQuery = defineQuery(`
  *[_type == "journalClub" && defined(slug.current)] | order(discussionDate desc) {
    _id,
    title,
    slug,
    discussionDate,
    paperTitle,
    paperAuthors,
    paperUrl,
    coverImage { asset, alt, hotspot, crop },
    summary,
    keyTakeaways,
    facilitator-> { name, credentials, photo }
  }
`);

export const journalClubBySlugQuery = defineQuery(`
  *[_type == "journalClub" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    discussionDate,
    paperTitle,
    paperAuthors,
    paperUrl,
    coverImage { asset, alt, hotspot, crop },
    summary,
    keyTakeaways,
    body,
    facilitator-> { name, credentials, role, photo }
  }
`);

export const journalClubSlugsQuery = defineQuery(`
  *[_type == "journalClub" && defined(slug.current)] { "slug": slug.current }
`);

export const podcastEpisodesQuery = defineQuery(`
  *[_type == "podcastEpisode" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    episodeNumber,
    series,
    guest,
    guestTitle,
    guestPhoto,
    publishedAt,
    duration,
    coverImage { asset, alt, hotspot, crop },
    summary,
    spotifyUrl,
    buzzsproutUrl,
    applePodcastsUrl
  }
`);

export const podcastEpisodeBySlugQuery = defineQuery(`
  *[_type == "podcastEpisode" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    episodeNumber,
    series,
    guest,
    guestTitle,
    guestPhoto,
    publishedAt,
    duration,
    coverImage { asset, alt, hotspot, crop },
    summary,
    spotifyUrl,
    buzzsproutUrl,
    applePodcastsUrl,
    body
  }
`);

export const podcastEpisodeSlugsQuery = defineQuery(`
  *[_type == "podcastEpisode" && defined(slug.current)] { "slug": slug.current }
`);

export const eventsQuery = defineQuery(`
  *[_type == "event" && defined(slug.current)] | order(startDate desc) {
    _id,
    title,
    slug,
    eventType,
    status,
    startDate,
    endDate,
    location,
    coverImage { asset, alt, hotspot, crop },
    summary,
    registrationUrl
  }
`);

export const recentEventsQuery = defineQuery(`
  *[_type == "event" && defined(slug.current)] | order(startDate desc) [0...3] {
    _id,
    title,
    slug,
    eventType,
    status,
    startDate,
    location,
    coverImage { asset, alt, hotspot, crop },
    summary,
    registrationUrl
  }
`);

export const eventBySlugQuery = defineQuery(`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    eventType,
    status,
    startDate,
    endDate,
    location,
    coverImage { asset, alt, hotspot, crop },
    summary,
    registrationUrl,
    body
  }
`);

export const eventSlugsQuery = defineQuery(`
  *[_type == "event" && defined(slug.current)] { "slug": slug.current }
`);

export const homepageRecentPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) [0...4] {
    _id, title, "slug": slug.current, publishedAt, excerpt, category,
    "authorName": author->name,
    coverImage { asset, alt, hotspot, crop }
  }
`);

export const homepageRecentPodcastQuery = defineQuery(`
  *[_type == "podcastEpisode" && defined(slug.current)] | order(publishedAt desc) [0...3] {
    _id, title, "slug": slug.current, publishedAt, guest, guestTitle, summary, episodeNumber,
    coverImage { asset, alt, hotspot, crop }
  }
`);

export const homepageRecentEventQuery = defineQuery(`
  *[_type == "event" && defined(slug.current) && status == "past"] | order(startDate desc) [0...3] {
    _id, title, "slug": slug.current, startDate, location, eventType, summary,
    coverImage { asset, alt, hotspot, crop }
  }
`);

export const archivePostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id, title, "slug": slug.current, publishedAt, excerpt, category,
    "author": author->name
  }
`);

export const archivePublicationsQuery = defineQuery(`
  *[_type == "publication"] | order(publishedAt desc) {
    _id, title, publishedAt, abstract, venue, authors, category, externalUrl
  }
`);

export const archiveJournalClubQuery = defineQuery(`
  *[_type == "journalClub" && defined(slug.current)] | order(discussionDate desc) {
    _id, title, "slug": slug.current, discussionDate, paperTitle, summary
  }
`);

export const archivePodcastQuery = defineQuery(`
  *[_type == "podcastEpisode" && defined(slug.current)] | order(publishedAt desc) {
    _id, title, "slug": slug.current, publishedAt, guest, guestTitle, summary, episodeNumber
  }
`);

export const archiveEventsQuery = defineQuery(`
  *[_type == "event" && defined(slug.current)] | order(startDate desc) {
    _id, title, "slug": slug.current, startDate, location, summary, eventType, status
  }
`);
