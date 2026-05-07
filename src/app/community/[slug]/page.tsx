import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/marketing/PageHero";
import { COMMUNITIES, getCommunity } from "@/data/communities";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return COMMUNITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const community = getCommunity(slug);
  if (!community) return {};
  return {
    title: community.name,
    description: community.tagline,
  };
}

export default async function CommunityDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const community = getCommunity(slug);
  if (!community) notFound();

  const others = COMMUNITIES.filter((c) => c.slug !== community.slug);

  return (
    <>
      <PageHero
        eyebrow={`Community · #${community.slackChannel}`}
        title={community.name}
        description={community.tagline}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/join"
            className="inline-flex items-center justify-center rounded-md bg-denim-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
          >
            Join MDplus →
          </Link>
          <span className="text-sm text-neutral-600">
            then look for{" "}
            <code className="rounded bg-rhino-50 px-1.5 py-0.5 font-mono text-rhino-700">
              #{community.slackChannel}
            </code>
          </span>
        </div>
      </PageHero>

      {/* ── Description + Leaders ──────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
                About
              </p>
              <div className="mt-4 space-y-5 text-lg leading-relaxed text-neutral-600 md:text-xl">
                <p>{community.description}</p>
              </div>
            </div>
            <aside className="md:pt-9">
              {community.leaders && community.leaders.length > 0 && (
                <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-rhino-500">
                    Leadership
                  </p>
                  <ul className="mt-4 space-y-3">
                    {community.leaders.map((leader) => (
                      <li key={leader.name}>
                        <p className="font-display text-base font-semibold text-rhino-700">
                          {leader.name}
                        </p>
                        <p className="text-sm text-neutral-600">
                          {leader.role}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {community.representativeAt &&
                community.representativeAt.length > 0 && (
                  <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-rhino-500">
                      Members are at
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {community.representativeAt.map((org) => (
                        <li
                          key={org}
                          className="rounded-pill bg-neutral-0 px-3 py-1 text-xs font-medium text-rhino-600 ring-1 ring-neutral-200"
                        >
                          {org}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </aside>
          </div>
        </div>
      </section>

      {/* ── Resources ──────────────────────────────────────── */}
      {community.resources && community.resources.length > 0 && (
        <section className="bg-neutral-50 py-20 md:py-28">
          <div className="mx-auto max-w-(--container-max) px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
                Resources
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
                Where to start.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {community.resources.map((group) => (
                <article
                  key={group.title}
                  className="rounded-lg border border-neutral-200 bg-neutral-0 p-6"
                >
                  <h3 className="font-display text-lg font-bold text-rhino-700">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item, idx) => (
                      <li key={idx}>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-denim-600 hover:text-denim-700"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-rhino-700">
                            {item.label}
                          </span>
                        )}
                        {item.note && (
                          <p className="mt-0.5 text-xs text-neutral-500">
                            {item.note}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Other communities + CTA ─────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
                Other communities
              </p>
              <h2 className="mt-4 font-display text-2xl font-bold text-rhino-700 md:text-3xl">
                Most members are in more than one.
              </h2>
            </div>
            <Link
              href="/community"
              className="text-sm font-semibold text-denim-600 hover:text-denim-700"
            >
              See all →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/community/${c.slug}`}
                className="group block rounded-lg border border-neutral-200 bg-neutral-0 p-5 transition-all hover:border-denim-300 hover:shadow-sm"
              >
                <h3 className="font-display text-base font-semibold text-rhino-700 group-hover:text-denim-700">
                  {c.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                  {c.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
