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
