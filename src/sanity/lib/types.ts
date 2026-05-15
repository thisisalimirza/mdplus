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
  body: unknown[] | null;
};
