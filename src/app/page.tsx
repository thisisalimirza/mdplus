import Link from "next/link";
import Image from "next/image";
import {
  Users,
  GraduationCap,
  Calendar,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Trophy,
  Mail,
  Mic,
  FileText,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { RotatingHeadline } from "@/components/marketing/RotatingHeadline";
import { NewsletterSignup } from "@/components/marketing/NewsletterSignup";
import { COMMUNITY_ICON } from "@/lib/community-icons";
import { COMMUNITIES as ALL_COMMUNITIES } from "@/data/communities";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import {
  homepageRecentPostsQuery,
  homepageRecentPodcastQuery,
  homepageRecentEventQuery,
} from "@/sanity/lib/queries";

const LOGOS = [
  { src: "/logos/Harvard_University_logo.svg.png", alt: "Harvard University" },
  { src: "/logos/Stanford_Cardinal_logo.svg", alt: "Stanford" },
  {
    src: "/logos/McKinsey_&_Company-Logo.wine.png",
    alt: "McKinsey & Company",
    // The .wine.png file has heavy transparent padding around the mark,
    // so it renders visually smaller than peer logos at the same box size.
    // Scale it up so it carries the same visual weight as Harvard/Bain/etc.
    scale: "scale-150",
  },
  { src: "/logos/Bain-logo-1.webp", alt: "Bain & Company" },
  { src: "/logos/A16z-Emblem.png", alt: "Andreessen Horowitz" },
] as const;

// Pull homepage cards directly from the canonical communities data so we
// don't have to maintain two lists. Show the top 6 (by appearance order
// in the data file) so the grid stays balanced as the org grows.
const COMMUNITIES = ALL_COMMUNITIES.slice(0, 6).map((c) => ({
  slug: c.slug,
  name: c.name,
  blurb: c.tagline,
}));

const PILLARS: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta: string;
}[] = [
  {
    icon: Users,
    title: "Community",
    description:
      "A 5,000+ member Slack of physicians and med students. Sub-channels for every domain. Real conversations, not feeds.",
    href: "/community",
    cta: "See what's inside",
  },
  {
    icon: GraduationCap,
    title: "Skills",
    description:
      "A library of guides, courses, and expert mini-courses on the things you actually need to learn, from case prep to RAG to investor decks.",
    href: "/skills",
    cta: "Browse Skills",
  },
  {
    icon: Calendar,
    title: "Programs",
    description:
      "Catalyst, datathons, and Journal Club. Built so you can learn by shipping alongside peers, not just reading about it.",
    href: "/programs",
    cta: "Explore programs",
  },
];

export const revalidate = 60;

const CATEGORY_LABELS: Record<string, string> = {
  "medicine-ai": "Medicine & AI",
  career: "Career",
  technology: "Technology",
  research: "Research",
  community: "Community",
  opinion: "Opinion",
};

const EVENT_TYPE_STYLES: Record<string, string> = {
  "in-person": "bg-yellow-50 text-yellow-700",
  virtual: "bg-denim-50 text-denim-700",
  hybrid: "bg-rhino-50 text-rhino-700",
};

export default async function Home() {
  const [recentPosts, recentPodcast, recentEvents] = isSanityConfigured
    ? await Promise.all([
        client.fetch(homepageRecentPostsQuery),
        client.fetch(homepageRecentPodcastQuery),
        client.fetch(homepageRecentEventQuery),
      ])
    : [[], [], []];
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-yellow-50">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(29,123,189,0.08),_transparent_60%)]"
        />
        <div className="relative mx-auto max-w-(--container-max) px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <p className="mb-6 inline-flex items-center gap-2 rounded-pill border border-rhino-100 bg-neutral-0 px-3 py-1 text-xs font-medium text-rhino-600 shadow-xs">
            <span className="size-1.5 rounded-full bg-yellow-500" />
            For physicians and med students who want more
          </p>

          <RotatingHeadline />

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
            The community for physicians and med students building in tech,
            data, AI, and entrepreneurship,{" "}
            <span className="font-semibold text-rhino-700">
              without figuring it out alone.
            </span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-md bg-denim-500 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-denim-600 active:bg-denim-700"
            >
              Join free →
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center justify-center rounded-md border border-rhino-200 bg-neutral-0 px-6 py-3.5 text-base font-semibold text-rhino-700 transition-colors hover:border-rhino-300 hover:bg-neutral-50"
            >
              See what's inside
            </Link>
          </div>

          <p className="mt-6 text-sm text-neutral-500">
            Free forever. We&apos;ll never spam you. 5,000+ members already in.
          </p>
        </div>
      </section>

      {/* ── Social proof bar ─────────────────────────────────── */}
      <section className="border-y border-neutral-100 bg-neutral-0 py-12">
        <div className="mx-auto max-w-(--container-max) px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Members at top medical schools, residencies, and firms
          </p>
          <ul className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
            {LOGOS.map((logo) => {
              const scale = "scale" in logo ? logo.scale : undefined;
              return (
                <li
                  key={logo.alt}
                  className="relative h-10 w-full max-w-[140px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="140px"
                    className={`object-contain opacity-60 transition-opacity duration-200 hover:opacity-100 ${scale ?? ""}`}
                    style={{ objectPosition: "center" }}
                  />
                </li>
              );
            })}
          </ul>
          <p className="mt-10 text-center text-sm text-neutral-500">
            Backed by{" "}
            <span className="font-semibold text-rhino-700">Anthropic</span>,{" "}
            <span className="font-semibold text-rhino-700">a16z Bio+Health</span>,{" "}
            <span className="font-semibold text-rhino-700">OpenEvidence</span>,{" "}
            <span className="font-semibold text-rhino-700">Thalamus</span>,{" "}
            <span className="font-semibold text-rhino-700">Doximity</span>,{" "}
            <span className="font-semibold text-rhino-700">AMSA</span>, and others.
          </p>
        </div>
      </section>

      {/* ── The problem (the framing) ────────────────────────── */}
      <section className="bg-neutral-0 py-24 md:py-32">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              The problem
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-5xl">
              Tech, data, AI, entrepreneurship in medicine is{" "}
              <span className="relative inline-block">
                <span className="relative z-10">overwhelming</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-yellow-300/70 md:h-4"
                />
              </span>
              .
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600 md:text-xl">
              There&apos;s no obvious place to start. The advice is scattered,
              the people are siloed, and the path looks intimidating from the
              outside. So most physicians and med students who are curious
              never start at all.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600 md:text-xl">
              <span className="font-semibold text-rhino-700">
                MDplus is that place to start.
              </span>{" "}
              We&apos;re the easiest, most accessible, fun, and seamless way to
              get involved, alongside 5,000+ peers and mentors who&apos;ve
              already done it.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3 Pillars ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Member collage background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/event-photos/mdpluscollage.jpg')" }}
          aria-hidden
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-rhino-900/80" aria-hidden />

        <div className="relative mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
              What&apos;s inside
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-5xl">
              Three layers, one community.
            </h2>
            <p className="mt-6 text-lg text-white/70">
              Whether you&apos;re here to learn, connect, or build, there&apos;s
              a starting point for you.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="group flex flex-col rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-lg bg-yellow-400/20 text-yellow-400">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-white/65">
                    {pillar.description}
                  </p>
                  <Link
                    href={pillar.href}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-yellow-400 transition-all group-hover:gap-2 hover:text-yellow-300"
                  >
                    {pillar.cta}
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Flagship programs ────────────────────────────────── */}
      <section className="bg-yellow-50 py-24 md:py-32">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-700">
              Flagship programs
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-5xl">
              Where the work actually happens.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Two programs that turn lurking into doing. One a cohort, one a
              competition. Both are how members go from interested to
              involved.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* Catalyst */}
            <article className="flex flex-col rounded-xl border border-rhino-100 bg-neutral-0 p-8 transition-shadow hover:shadow-md md:p-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex size-12 items-center justify-center rounded-md bg-yellow-500 text-rhino-900">
                  <Zap className="size-6" aria-hidden />
                </span>
                <span className="rounded-pill bg-denim-50 px-2.5 py-0.5 text-xs font-semibold text-denim-700">
                  Live · cohort
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-rhino-700 md:text-3xl">
                Catalyst
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-neutral-600">
                Our flagship cohort program for physician-innovators. Built
                with mentors and structured deadlines so the work actually
                ships.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-neutral-100 pt-5 text-sm">
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-rhino-500">
                    Sponsors
                  </span>
                  <span className="mt-0.5 block font-display font-bold text-rhino-700">
                    8 named partners
                  </span>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-rhino-500">
                    Format
                  </span>
                  <span className="mt-0.5 block font-display font-bold text-rhino-700">
                    Cohort + mentors
                  </span>
                </li>
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href="/programs/catalyst"
                  className="inline-flex items-center justify-center gap-1.5 rounded-md bg-denim-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
                >
                  See Catalyst
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <a
                  href="https://catalyst.mdplus.community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-denim-600 hover:text-denim-700"
                >
                  catalyst.mdplus.community
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
              </div>
            </article>

            {/* Datathon */}
            <article className="flex flex-col rounded-xl border border-rhino-100 bg-neutral-0 p-8 transition-shadow hover:shadow-md md:p-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex size-12 items-center justify-center rounded-md bg-yellow-500 text-rhino-900">
                  <Trophy className="size-6" aria-hidden />
                </span>
                <span className="rounded-pill bg-denim-50 px-2.5 py-0.5 text-xs font-semibold text-denim-700">
                  Annual
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-rhino-700 md:text-3xl">
                The MD+ Datathon
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-neutral-600">
                A month-long competition on real clinical datasets, now in
                its 4th year. The model is published in JMIR Medical
                Education.
              </p>
              <ul className="mt-6 grid grid-cols-3 gap-x-4 gap-y-3 border-t border-neutral-100 pt-5 text-sm">
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-rhino-500">
                    Editions
                  </span>
                  <span className="mt-0.5 block font-display font-bold text-rhino-700">
                    4
                  </span>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-rhino-500">
                    2025 size
                  </span>
                  <span className="mt-0.5 block font-display font-bold text-rhino-700">
                    ~300
                  </span>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-rhino-500">
                    Published
                  </span>
                  <span className="mt-0.5 block font-display font-bold text-rhino-700">
                    JMIR
                  </span>
                </li>
              </ul>
              <div className="mt-7">
                <Link
                  href="/programs/datathon"
                  className="inline-flex items-center justify-center gap-1.5 rounded-md bg-denim-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
                >
                  See the Datathon
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Communities teaser ───────────────────────────────── */}
      <section className="bg-neutral-0 py-24 md:py-32">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
                Sub-communities
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-5xl">
                Pick your lane.
              </h2>
              <p className="mt-6 text-lg text-neutral-600">
                Each community has its own Slack channel, leaders, and
                resources. Most members join more than one.
              </p>
            </div>
            <Link
              href="/community"
              className="inline-flex items-center text-sm font-semibold text-denim-600 hover:text-denim-700"
            >
              View all communities →
            </Link>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COMMUNITIES.map((c) => {
              const Icon = COMMUNITY_ICON[c.slug];
              return (
                <Link
                  key={c.slug}
                  href={`/community/${c.slug}`}
                  className="group block rounded-lg border border-neutral-200 bg-neutral-0 p-6 transition-all hover:-translate-y-0.5 hover:border-denim-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-md bg-rhino-50 text-rhino-700 group-hover:bg-denim-50 group-hover:text-denim-600">
                      {Icon && <Icon className="size-5" aria-hidden />}
                    </span>
                    <h3 className="font-display text-xl font-bold text-rhino-700 group-hover:text-denim-700">
                      {c.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {c.blurb}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Recent content ───────────────────────────────────── */}
      {(recentPosts.length > 0 || recentPodcast.length > 0 || recentEvents.length > 0) && (
        <section className="bg-neutral-0 py-24 md:py-32">
          <div className="mx-auto max-w-(--container-max) px-6">

            {/* Header */}
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
                  Recently from MDplus
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
                  Always something happening.
                </h2>
              </div>
              <Link
                href="/archive"
                className="inline-flex items-center gap-1 text-sm font-semibold text-denim-600 hover:text-denim-700"
              >
                Full archive
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>

            {/* Bento grid */}
            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">

              {/* ── Featured article — dark, spans left 2 cols and both rows ── */}
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {recentPosts.map((post: any) => (
                <Link
                  key={post._id}
                  href={`/learn/articles/${post.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-rhino-900 p-8 transition-all hover:-translate-y-0.5 hover:shadow-xl md:col-span-2 md:row-span-2 md:p-10"
                >
                  {/* Radial glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(29,123,189,0.25),_transparent_60%)]"
                  />
                  {/* Yellow accent line */}
                  <div aria-hidden className="absolute top-0 left-0 h-1 w-16 rounded-full bg-yellow-500" />

                  <div className="relative flex flex-col flex-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex size-7 items-center justify-center rounded-md bg-denim-500/30 text-denim-300">
                        <FileText className="size-3.5" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-denim-400">
                        Article
                      </span>
                      {post.category && (
                        <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/60">
                          {CATEGORY_LABELS[post.category] ?? post.category}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-bold leading-snug text-white group-hover:text-denim-200 md:text-3xl">
                      {post.title}
                    </h3>

                    {post.excerpt && (
                      <p className="mt-4 flex-1 text-base leading-relaxed text-rhino-200/80 line-clamp-4">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                      <div>
                        {post.authorName && (
                          <p className="text-sm font-semibold text-white/80">{post.authorName}</p>
                        )}
                        {post.publishedAt && (
                          <time className="text-xs text-white/40" dateTime={post.publishedAt}>
                            {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                          </time>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-denim-400 transition-all group-hover:gap-2">
                        Read
                        <ArrowRight className="size-4" aria-hidden />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}

              {/* ── Podcast — denim, compact ── */}
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {recentPodcast.map((ep: any) => (
                <Link
                  key={ep._id}
                  href={`/learn/podcast/${ep.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-denim-600 p-7 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.06),_transparent_60%)]"
                  />
                  <div className="relative flex flex-col flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex size-7 items-center justify-center rounded-md bg-white/15 text-white">
                          <Mic className="size-3.5" aria-hidden />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-widest text-denim-200">
                          Podcast
                        </span>
                      </div>
                      {ep.episodeNumber && (
                        <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-semibold text-white/70">
                          Ep. {ep.episodeNumber}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold leading-snug text-white group-hover:text-denim-100">
                      {ep.title}
                    </h3>

                    {ep.guest && (
                      <p className="mt-2 text-sm font-semibold text-denim-200">
                        {ep.guest}
                        {ep.guestTitle && (
                          <span className="block font-normal text-denim-300/70 text-xs mt-0.5 line-clamp-1">{ep.guestTitle}</span>
                        )}
                      </p>
                    )}

                    <div className="mt-auto pt-5 flex items-center justify-between border-t border-white/10">
                      {ep.publishedAt && (
                        <time className="text-xs text-white/40" dateTime={ep.publishedAt}>
                          {new Date(ep.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </time>
                      )}
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/60 transition-all group-hover:gap-2 group-hover:text-white">
                        Listen <ArrowRight className="size-3.5" aria-hidden />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}

              {/* ── Event — yellow accent, compact ── */}
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {recentEvents.map((event: any) => (
                <Link
                  key={event._id}
                  href={`/events/${event.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-yellow-200 bg-yellow-50 p-7 transition-all hover:-translate-y-0.5 hover:border-yellow-300 hover:shadow-xl"
                >
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex size-7 items-center justify-center rounded-md bg-yellow-400/30 text-yellow-700">
                        <Calendar className="size-3.5" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
                        Event recap
                      </span>
                    </div>

                    {event.startDate && (
                      <p className="mt-4 font-display text-4xl font-bold leading-none text-rhino-700">
                        {new Date(event.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        <span className="block text-sm font-normal text-neutral-500 mt-1">
                          {new Date(event.startDate).getFullYear()}
                        </span>
                      </p>
                    )}

                    <h3 className="mt-3 font-display text-lg font-bold leading-snug text-rhino-700 group-hover:text-denim-700">
                      {event.title}
                    </h3>

                    {event.location && (
                      <p className="mt-2 flex items-center gap-1 text-sm text-neutral-500">
                        <MapPin className="size-3.5 shrink-0" aria-hidden />
                        {event.location}
                      </p>
                    )}

                    <div className="mt-auto pt-5 border-t border-yellow-200">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-yellow-700 transition-all group-hover:gap-2">
                        Read recap <ArrowRight className="size-3.5" aria-hidden />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}

            </div>
          </div>
        </section>
      )}

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-rhino-700 py-24 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,203,33,0.18),_transparent_55%)]"
        />
        <div className="relative mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl md:mx-auto md:text-center">
            <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-5xl">
              You&apos;re a doctor. You want more.{" "}
              <span className="text-yellow-500">We&apos;re the bridge.</span>
            </h2>
            <p className="mt-6 text-lg text-rhino-100/90">
              Free Slack membership. Take a look around. Stay if it&apos;s for
              you.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 md:justify-center">
              <Link
                href="/join"
                className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-6 py-3.5 text-base font-semibold text-rhino-900 shadow-sm transition-colors hover:bg-yellow-400"
              >
                Join free →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Alternative paths (newsletter + podcast) ─────────── */}
      <section className="bg-yellow-50 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-700">
              Not ready yet?
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              Two lower-commitment ways to stay close.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              The community is the deepest layer, but it&apos;s not the only
              one. If you&apos;d rather just stay in the loop for now, both of
              these are free and there&apos;s no Slack invite involved.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Newsletter card with embedded signup */}
            <article className="flex flex-col rounded-xl border border-rhino-100 bg-neutral-0 p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-12 items-center justify-center rounded-md bg-denim-500 text-white">
                  <Mail className="size-6" aria-hidden />
                </span>
                <span className="rounded-pill bg-denim-50 px-2.5 py-0.5 text-xs font-semibold text-denim-700">
                  Weekly · 5 min read
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-rhino-700 md:text-3xl">
                The MDplus Newsletter
              </h3>
              <p className="mt-3 text-base leading-relaxed text-neutral-600">
                A signal-only Sunday briefing for physician-innovators.
                Founder spotlights, AI in clinical practice, career moves,
                healthtech deals. Five minutes. Zero spam.
              </p>
              <div className="mt-6">
                <NewsletterSignup />
              </div>
              <Link
                href="/learn/newsletter"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-denim-600 hover:text-denim-700"
              >
                See sample issues + topics
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </article>

            {/* Podcast card */}
            <article className="flex flex-col rounded-xl border border-rhino-100 bg-neutral-0 p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-12 items-center justify-center rounded-md bg-rhino-700 text-white">
                  <Mic className="size-6" aria-hidden />
                </span>
                <span className="rounded-pill bg-rhino-50 px-2.5 py-0.5 text-xs font-semibold text-rhino-700">
                  Audio · 3 series
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-rhino-700 md:text-3xl">
                The MD+ Podcast
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-neutral-600">
                Conversations with physician-founders, healthcare investors,
                and trainees navigating non-traditional paths. Hosted by{" "}
                <span className="font-semibold text-rhino-700">
                  Geoff Bocobo, MD
                </span>
                . No commitment beyond clicking play.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="https://open.spotify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-md bg-rhino-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-rhino-600"
                >
                  Listen on Spotify
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
                <Link
                  href="/learn/podcast"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-denim-600 hover:text-denim-700"
                >
                  Podcast page
                  <ArrowRight className="size-3.5" aria-hidden />
                </Link>
              </div>
            </article>
          </div>

          <p className="mt-10 text-center text-sm text-neutral-500">
            Changed your mind?{" "}
            <Link
              href="/join"
              className="font-semibold text-denim-600 hover:text-denim-700"
            >
              The Slack is right here.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
