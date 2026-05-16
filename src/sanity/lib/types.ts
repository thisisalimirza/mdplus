export type PostListItem = {
  _id: string;
  title: string | null;
  slug: { current: string | null } | null;
  publishedAt: string | null;
  excerpt: string | null;
  category: string | null;
  coverImage: {
    asset: unknown;
    alt: string | null;
    hotspot: unknown;
    crop: unknown;
  } | null;
  author: {
    name: string | null;
    credentials: string | null;
    photo: { asset: unknown } | null;
  } | null;
};

export type PostDetail = PostListItem & {
  author: {
    name: string | null;
    credentials: string | null;
    role: string | null;
    bio: string | null;
    photo: { asset: unknown } | null;
  } | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[] | null;
};

export type SanityPublication = {
  _id: string;
  title: string | null;
  authors: string | null;
  venue: string | null;
  publishedAt: string | null;
  category: string | null;
  abstract: string | null;
  externalUrl: string | null;
  doi: string | null;
};

export type JournalClubListItem = {
  _id: string;
  title: string | null;
  slug: { current: string | null } | null;
  discussionDate: string | null;
  paperTitle: string | null;
  paperAuthors: string | null;
  paperUrl: string | null;
  coverImage: {
    asset: unknown;
    alt: string | null;
    hotspot: unknown;
    crop: unknown;
  } | null;
  summary: string | null;
  keyTakeaways: string[] | null;
  facilitator: {
    name: string | null;
    credentials: string | null;
    photo: { asset: unknown } | null;
  } | null;
};

export type EventListItem = {
  _id: string;
  title: string | null;
  slug: { current: string | null } | null;
  eventType: string | null;
  status: string | null;
  startDate: string | null;
  endDate?: string | null;
  location: string | null;
  coverImage: { asset: unknown; alt: string | null; hotspot: unknown; crop: unknown } | null;
  summary: string | null;
  registrationUrl: string | null;
};

export type EventDetail = EventListItem & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[] | null;
};

export type PodcastEpisodeListItem = {
  _id: string;
  title: string | null;
  slug: { current: string | null } | null;
  episodeNumber: number | null;
  series: string | null;
  guest: string | null;
  guestTitle: string | null;
  guestPhoto: { asset: unknown } | null;
  publishedAt: string | null;
  duration: string | null;
  coverImage: { asset: unknown; alt: string | null; hotspot: unknown; crop: unknown } | null;
  summary: string | null;
  spotifyUrl: string | null;
  buzzsproutUrl: string | null;
  applePodcastsUrl: string | null;
};

export type PodcastEpisodeDetail = PodcastEpisodeListItem & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[] | null;
};

export type JournalClubDetail = JournalClubListItem & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[] | null;
  facilitator: {
    name: string | null;
    credentials: string | null;
    role: string | null;
    photo: { asset: unknown } | null;
  } | null;
};
