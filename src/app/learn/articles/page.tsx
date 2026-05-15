import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/marketing/PageHero";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { postsQuery, postsByCategoryQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { PostListItem } from "@/sanity/lib/types";

export const metadata: Metadata = { title: "Articles" };

export const revalidate = 60;

const CATEGORIES: { value: string; label: string }[] = [
  { value: "medicine-ai", label: "Medicine & AI" },
  { value: "career", label: "Career" },
  { value: "technology", label: "Technology" },
  { value: "research", label: "Research" },
  { value: "community", label: "Community" },
  { value: "opinion", label: "Opinion" },
];

const CATEGORY_LABEL: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.value, c.label])
);

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = CATEGORIES.find((c) => c.value === category)?.value ?? null;

  const posts: PostListItem[] = isSanityConfigured
    ? await client.fetch(
        activeCategory ? postsByCategoryQuery : postsQuery,
        activeCategory ? { category: activeCategory } : {}
      )
    : [];

  return (
    <>
      <PageHero
        eyebrow="Articles"
        title="Long-form essays on medicine and what's next."
        description="Member-authored writing on AI, careers, technology, and the future of medicine."
      />

      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">

          {/* Category filters */}
          <div className="mb-10 flex flex-wrap gap-2">
            <Link
              href="/learn/articles"
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                !activeCategory
                  ? "bg-rhino-700 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              All
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.value}
                href={`/learn/articles?category=${cat.value}`}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                  activeCategory === cat.value
                    ? "bg-rhino-700 text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {posts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-neutral-500">
                {activeCategory
                  ? `No articles in ${CATEGORY_LABEL[activeCategory]} yet.`
                  : "No articles published yet. Check back soon."}
              </p>
              {activeCategory && (
                <Link
                  href="/learn/articles"
                  className="mt-4 inline-block text-sm font-semibold text-denim-600 hover:text-denim-800"
                >
                  View all articles
                </Link>
              )}
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/learn/articles/${post.slug?.current}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-neutral-0 transition-all hover:-translate-y-0.5 hover:border-denim-300 hover:shadow-md"
                >
                  {post.coverImage?.asset ? (
                    <div className="relative h-48 overflow-hidden bg-neutral-100">
                      <Image
                        src={urlFor(post.coverImage).width(600).height(384).url()}
                        alt={post.coverImage.alt ?? post.title ?? ""}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-denim-50" />
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      {post.category && (
                        <span className="rounded-full bg-denim-50 px-2.5 py-0.5 text-xs font-semibold text-denim-700">
                          {CATEGORY_LABEL[post.category] ?? post.category}
                        </span>
                      )}
                      {post.publishedAt && (
                        <time className="text-xs text-neutral-400" dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      )}
                    </div>

                    <h2 className="mt-3 font-display text-xl font-bold leading-snug text-rhino-700 group-hover:text-denim-700">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}

                    {post.author && (
                      <div className="mt-4 flex items-center gap-2">
                        {!!post.author.photo?.asset && (
                          <div className="relative size-7 overflow-hidden rounded-full bg-neutral-200">
                            <Image
                              src={urlFor(post.author.photo).width(56).height(56).url()}
                              alt={post.author.name ?? ""}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <span className="text-sm font-medium text-neutral-700">
                          {post.author.name}
                          {post.author.credentials && (
                            <span className="font-normal text-neutral-500">
                              {", "}
                              {post.author.credentials}
                            </span>
                          )}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
