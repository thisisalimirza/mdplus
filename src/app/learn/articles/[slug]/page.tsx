import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";

export const revalidate = 60;

export async function generateStaticParams() {
  if (!isSanityConfigured) return [];
  const slugs = await client.fetch(postSlugsQuery);
  return slugs.map((s: { slug: string | null }) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isSanityConfigured) return {};
  const post = await client.fetch(postBySlugQuery, { slug });
  if (!post) return {};
  return {
    title: post.title ?? undefined,
    description: post.excerpt ?? undefined,
    openGraph: post.coverImage?.asset
      ? { images: [urlFor(post.coverImage).width(1200).height(630).url()] }
      : undefined,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isSanityConfigured) notFound();
  const post = await client.fetch(postBySlugQuery, { slug });

  if (!post) notFound();

  return (
    <article className="bg-neutral-0">
      {/* Cover image */}
      {post.coverImage?.asset && (
        <div className="relative h-72 w-full overflow-hidden bg-neutral-100 md:h-96">
          <Image
            src={urlFor(post.coverImage).width(1400).height(600).url()}
            alt={post.coverImage.alt ?? post.title ?? ""}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        {/* Back link */}
        <Link
          href="/learn/articles"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-denim-600 hover:text-denim-800"
        >
          <ArrowLeft className="size-4" aria-hidden />
          All articles
        </Link>

        {/* Meta */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          {post.category && (
            <span className="rounded-full bg-denim-50 px-3 py-1 text-xs font-semibold text-denim-700">
              {post.category.replace(/-/g, " & ").replace(/\b\w/g, (c: string) => c.toUpperCase())}
            </span>
          )}
          {post.publishedAt && (
            <time className="text-sm text-neutral-400" dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          )}
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-rhino-700 md:text-5xl">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="mt-5 text-xl leading-relaxed text-neutral-600">{post.excerpt}</p>
        )}

        {/* Author */}
        {post.author && (
          <div className="mt-8 flex items-center gap-3 border-t border-neutral-100 pt-6">
            {post.author.photo?.asset && (
              <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-neutral-200">
                <Image
                  src={urlFor(post.author.photo).width(96).height(96).url()}
                  alt={post.author.name ?? ""}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <p className="font-semibold text-neutral-800">
                {post.author.name}
                {post.author.credentials && (
                  <span className="font-normal text-neutral-500">, {post.author.credentials}</span>
                )}
              </p>
              {post.author.role && (
                <p className="text-sm text-neutral-500">{post.author.role}</p>
              )}
            </div>
          </div>
        )}

        {/* Body */}
        {post.body && (
          <div className="mt-10 border-t border-neutral-100 pt-10">
            <PortableTextRenderer value={post.body} />
          </div>
        )}

        {/* Footer nav */}
        <div className="mt-16 border-t border-neutral-100 pt-8">
          <Link
            href="/learn/articles"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-denim-600 hover:text-denim-800"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
}
