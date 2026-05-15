import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/marketing/PageHero";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { PostListItem } from "@/sanity/lib/types";

export const metadata: Metadata = { title: "Articles" };

export const revalidate = 60;

const CATEGORY_LABELS: Record<string, string> = {
  "medicine-ai": "Medicine & AI",
  career: "Career",
  technology: "Technology",
  research: "Research",
  community: "Community",
  opinion: "Opinion",
};

export default async function ArticlesPage() {
  const posts: PostListItem[] = await client.fetch(postsQuery);

  return (
    <>
      <PageHero
        eyebrow="Articles"
        title="Long-form essays on medicine and what's next."
        description="Member-authored writing on AI, careers, technology, and the future of medicine."
      />

      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          {posts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-neutral-500">No articles published yet. Check back soon.</p>
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
                          {CATEGORY_LABELS[post.category] ?? post.category}
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
