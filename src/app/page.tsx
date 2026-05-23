import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Calendar,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Trophy,
  Mail,
  Mic,
  FileText,
  MapPin,
  Lightbulb,
  Rocket,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { RotatingHeadline } from "@/components/marketing/RotatingHeadline";
import { NewsletterSignup } from "@/components/marketing/NewsletterSignup";
import { COMMUNITIES as ALL_COMMUNITIES } from "@/data/communities";
import { CommunityCard } from "@/components/site/CommunityCard";
import { Reveal } from "@/components/site/Reveal";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
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
const COMMUNITIES = ALL_COMMUNITIES.slice(0, 6);


const WHY_FEATURES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Users,
    title: "Curated Community",
    description: "Connect with driven physicians across disciplines and career stages.",
  },
  {
    icon: Lightbulb,
    title: "Share & Learn",
    description: "Exchange ideas, resources, and insights in a safe, high-signal space.",
  },
  {
    icon: Rocket,
    title: "Build & Create",
    description: "Collaborate on projects that solve real problems in healthcare.",
  },
  {
    icon: Globe,
    title: "Make an Impact",
    description: "Advance the future of medicine through technology, leadership, and policy.",
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

export default async function Home() {
  const [recentPosts, recentPodcast, recentEvents] = isSanityConfigured
    ? await Promise.all([
        client.fetch(homepageRecentPostsQuery),
        client.fetch(homepageRecentPodcastQuery),
        client.fetch(homepageRecentEventQuery),
      ])
    : [[], [], []];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const contentWall: any[] = [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...recentPosts.map((p: any) => ({ ...p, _kind: "article", _date: p.publishedAt })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...recentPodcast.map((e: any) => ({ ...e, _kind: "podcast", _date: e.publishedAt })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...recentEvents.map((e: any) => ({ ...e, _kind: "event", _date: e.startDate })),
  ].sort((a, b) => {
    if (!a._date) return 1;
    if (!b._date) return -1;
    return new Date(b._date).getTime() - new Date(a._date).getTime();
  });
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-yellow-50">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(29,123,189,0.08),_transparent_60%)]"
        />
        <div className="relative mx-auto max-w-(--container-max) px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <p
            className="mb-6 inline-flex items-center gap-2 rounded-pill border border-rhino-100 bg-neutral-0 px-3 py-1 text-xs font-medium text-rhino-600 shadow-xs"
            style={{ animation: "fade-up 0.6s cubic-bezier(0.2,0.8,0.2,1) both", animationDelay: "0ms" }}
          >
            <span className="size-1.5 rounded-full bg-yellow-500" />
            For physicians and med students who want more
          </p>

          <div style={{ animation: "fade-up 0.6s cubic-bezier(0.2,0.8,0.2,1) both", animationDelay: "80ms" }}>
            <RotatingHeadline />
          </div>

          <p
            className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl"
            style={{ animation: "fade-up 0.6s cubic-bezier(0.2,0.8,0.2,1) both", animationDelay: "220ms" }}
          >
            The community for physicians and med students building in tech,
            data, AI, and entrepreneurship,{" "}
            <span className="font-semibold text-rhino-700">
              without figuring it out alone.
            </span>
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-3"
            style={{ animation: "fade-up 0.6s cubic-bezier(0.2,0.8,0.2,1) both", animationDelay: "360ms" }}
          >
            <Link
              href="https://app.mdplus.community/apply"
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

          <p
            className="mt-6 text-sm text-neutral-500"
            style={{ animation: "fade-up 0.6s cubic-bezier(0.2,0.8,0.2,1) both", animationDelay: "460ms" }}
          >
            Free forever. We&apos;ll never spam you. 5,000+ members already in.
          </p>
        </div>
      </section>

      {/* ── Social proof bar ─────────────────────────────────── */}
      <section className="border-t border-neutral-100 bg-neutral-0 py-12">
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

      {/* Diagonal cut: light → dark */}
      <div aria-hidden className="bg-rhino-900">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: "80px" }}
        >
          <polygon points="0,0 1440,0 0,80" style={{ fill: "var(--color-neutral-0)" }} />
        </svg>
      </div>

      {/* ── Photo collage — "Building together" ──────────────── */}
      <section className="bg-rhino-900 py-16 md:py-24">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Text */}
            <Reveal>
              <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                Building together.<br />
                Learning together.<br />
                <span className="relative inline-block">
                  Leading together.
                  <span
                    className="absolute -bottom-2 left-0 h-0.5 w-3/4 bg-rhino-500"
                    aria-hidden
                  />
                </span>
              </h2>
              <p className="mt-10 text-lg text-white/50 max-w-sm">
                5,000+ physicians and med students — residents, attendings, and
                researchers — building the future of healthcare together.
              </p>
            </Reveal>

            {/* Photo mosaic */}
            <Reveal delay={160} className="grid h-72 grid-cols-3 grid-rows-2 gap-2 md:h-96">
              {/* Large — left 2 cols, full height */}
              <div className="col-span-2 row-span-2 relative overflow-hidden rounded-xl">
                <Image
                  src="/event-photos/IMG_7167.jpg"
                  alt="MDplus members at a community event"
                  fill
                  className="object-cover grayscale"
                  sizes="(min-width: 1024px) 35vw, 55vw"
                />
              </div>
              {/* Top-right — with denim overlay */}
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/event-photos/IMG_7168.jpg"
                  alt="MDplus members"
                  fill
                  className="object-cover grayscale"
                  sizes="(min-width: 1024px) 18vw, 30vw"
                />
                <div className="absolute inset-0 bg-denim-700/55" aria-hidden />
              </div>
              {/* Bottom-right */}
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/event-photos/IMG_7170.jpg"
                  alt="MDplus community gathering"
                  fill
                  className="object-cover grayscale"
                  sizes="(min-width: 1024px) 18vw, 30vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Why MD+? — 4 feature cards ───────────────────────── */}
      <section className="border-t border-white/10 bg-rhino-800 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <Reveal className="mb-16 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-rhino-400">
                Why MD+?
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
                A community designed for physician builders.
              </h2>
            </div>
            <div className="md:pt-14">
              <p className="text-lg text-white/50">
                We bring together curious minds to share knowledge, build
                meaningful projects, and create lasting impact in healthcare.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <Reveal key={feat.title} delay={i * 90}>
                  <div className="group relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-rhino-400/40 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-black/40">
                    <div className="inline-flex size-12 items-center justify-center rounded-full bg-rhino-600/60 transition-colors duration-300 group-hover:bg-rhino-500/80">
                      <Icon className="size-5 text-rhino-200" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-white">
                      {feat.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">
                      {feat.description}
                    </p>
                    <span
                      aria-hidden
                      className="absolute right-5 bottom-4 font-display text-5xl font-bold text-white/[0.05]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonial + offsite strip ───────────────────────── */}
      <section className="border-t border-white/5 bg-rhino-900 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Quote */}
            <Reveal>
              <p
                aria-hidden
                className="font-display text-8xl font-bold leading-none text-rhino-700/80"
              >
                &ldquo;
              </p>
              <blockquote className="-mt-6 text-xl font-medium leading-relaxed text-white md:text-2xl">
                The energy, humility, and drive in this community is unlike
                anything I&apos;ve experienced in medicine.
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="inline-flex size-10 items-center justify-center rounded-full bg-rhino-600 text-sm font-semibold text-rhino-200">
                  AP
                </div>
                <div>
                  <p className="font-semibold text-white">Arjun P.</p>
                  <p className="text-sm text-white/40">MD+ Member</p>
                </div>
              </div>
            </Reveal>

            {/* Photo */}
            <Reveal delay={180} className="relative h-72 overflow-hidden rounded-2xl md:h-80">
              <Image
                src="/event-photos/IMG_7171.jpg"
                alt="MDplus members at an event"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-rhino-900/20" aria-hidden />
            </Reveal>
          </div>

          {/* Offsite photo strip */}
          <div className="mt-20">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-rhino-400">
                Moments from our offsite
              </p>
            </Reveal>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                "/event-photos/IMG_7172.jpg",
                "/event-photos/IMG_7173.jpg",
                "/event-photos/IMG_4221.JPG",
                "/event-photos/IMG_7169.jpg",
              ].map((src, i) => (
                <Reveal
                  key={src}
                  delay={i * 80}
                  y={16}
                  className="relative aspect-square overflow-hidden rounded-xl"
                >
                  <Image
                    src={src}
                    alt="MDplus offsite moment"
                    fill
                    className="object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105"
                    sizes="(min-width: 640px) 25vw, 50vw"
                  />
                </Reveal>
              ))}
            </div>
            <Reveal delay={320}>
              <p className="mt-8 text-center font-script text-3xl text-white/60">
                Real conversations. Real connections. Real impact.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Diagonal cut: dark → light */}
      <div aria-hidden className="bg-neutral-0">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: "80px" }}
        >
          <polygon points="0,0 1440,0 1440,80" style={{ fill: "var(--color-rhino-900)" }} />
        </svg>
      </div>

      {/* ── Flagship programs ────────────────────────────────── */}
      <section className="bg-neutral-0 pt-12 pb-24 md:pt-16 md:pb-32">
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
            {/* Catalyst — dark card */}
            <article className="flex flex-col rounded-xl bg-rhino-900 p-8 transition-shadow hover:shadow-xl md:p-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex size-12 items-center justify-center rounded-md bg-yellow-500 text-rhino-900">
                  <Zap className="size-6" aria-hidden />
                </span>
                <span className="rounded-pill bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-yellow-400">
                  Live · cohort
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-white md:text-3xl">
                Catalyst
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-white/65">
                Our flagship cohort program for physician-innovators. Built
                with mentors and structured deadlines so the work actually
                ships.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-sm">
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/40">
                    Sponsors
                  </span>
                  <span className="mt-0.5 block font-display font-bold text-white">
                    8 named partners
                  </span>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/40">
                    Format
                  </span>
                  <span className="mt-0.5 block font-display font-bold text-white">
                    Cohort + mentors
                  </span>
                </li>
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href="/programs/catalyst"
                  className="inline-flex items-center justify-center gap-1.5 rounded-md bg-yellow-500 px-5 py-3 text-sm font-semibold text-rhino-900 shadow-sm transition-colors hover:bg-yellow-400"
                >
                  See Catalyst
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <a
                  href="https://catalyst.mdplus.community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-white/50 transition-colors hover:text-white"
                >
                  catalyst.mdplus.community
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
              </div>
            </article>

            {/* Datathon — white card */}
            <article className="flex flex-col rounded-xl border-2 border-yellow-400 bg-neutral-0 p-8 transition-shadow hover:shadow-md md:p-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex size-12 items-center justify-center rounded-md bg-rhino-900 text-yellow-400">
                  <Trophy className="size-6" aria-hidden />
                </span>
                <span className="rounded-pill bg-rhino-900/10 px-2.5 py-0.5 text-xs font-semibold text-rhino-700">
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
              <ul className="mt-6 grid grid-cols-3 gap-x-4 gap-y-3 border-t border-yellow-200 pt-5 text-sm">
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-rhino-400">
                    Editions
                  </span>
                  <span className="mt-0.5 block font-display font-bold text-rhino-700">
                    4
                  </span>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-rhino-400">
                    2025 size
                  </span>
                  <span className="mt-0.5 block font-display font-bold text-rhino-700">
                    ~300
                  </span>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-rhino-400">
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
                  className="inline-flex items-center justify-center gap-1.5 rounded-md bg-rhino-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-rhino-700"
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
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
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
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COMMUNITIES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 70}>
                <CommunityCard community={c} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent content wall ──────────────────────────────── */}
      {contentWall.length > 0 && (
        <section className="bg-rhino-900 py-16 md:py-20">
          <div className="mx-auto max-w-(--container-max) px-6">

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
                  Recently from MDplus
                </p>
                <h2 className="mt-1.5 font-display text-2xl font-bold text-white md:text-3xl">
                  Always something happening.
                </h2>
              </div>
              <Link
                href="/archive"
                className="inline-flex items-center gap-1 text-sm font-semibold text-white/40 transition-colors hover:text-white"
              >
                Full archive
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>

            {/* Masonry wall */}
            <div className="mt-8 columns-1 gap-3 sm:columns-2 lg:columns-3">
              {contentWall.map((item) => {
                const isArticle = item._kind === "article";
                const isPodcast = item._kind === "podcast";
                const isEvent   = item._kind === "event";

                const href = isArticle
                  ? `/learn/articles/${item.slug}`
                  : isPodcast
                  ? `/learn/podcast/${item.slug}`
                  : `/events/${item.slug}`;

                const dateStr = item._date
                  ? new Date(item._date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                  : null;

                const imgUrl = item.coverImage?.asset
                  ? urlFor(item.coverImage).width(800).height(420).fit("crop").auto("format").url()
                  : null;

                return (
                  <Link
                    key={item._id}
                    href={href}
                    className="group mb-3 block break-inside-avoid overflow-hidden rounded-xl border border-white/8 bg-white/[0.04] transition-all hover:border-white/15 hover:bg-white/[0.07]"
                  >
                    {/* Cover image */}
                    {imgUrl && (
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image
                          src={imgUrl}
                          alt={item.coverImage?.alt ?? item.title ?? ""}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                        {/* gradient so badge stays readable over any photo */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden />
                      </div>
                    )}

                    <div className="p-4">
                      {/* Type badge */}
                      <div className="flex items-center gap-1.5">
                        {isArticle && (
                          <>
                            <FileText className="size-3 text-denim-400" aria-hidden />
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-denim-400">Article</span>
                            {item.category && (
                              <span className="ml-1 text-[10px] text-white/30">{CATEGORY_LABELS[item.category] ?? item.category}</span>
                            )}
                          </>
                        )}
                        {isPodcast && (
                          <>
                            <Mic className="size-3 text-sky-400" aria-hidden />
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-sky-400">Podcast</span>
                            {item.episodeNumber && (
                              <span className="ml-1 text-[10px] text-white/30">Ep. {item.episodeNumber}</span>
                            )}
                          </>
                        )}
                        {isEvent && (
                          <>
                            <Calendar className="size-3 text-yellow-400" aria-hidden />
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-yellow-400">Event</span>
                          </>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="mt-2 text-sm font-semibold leading-snug text-white/90 line-clamp-3 group-hover:text-white">
                        {item.title}
                      </h3>

                      {/* Meta line */}
                      {isArticle && item.authorName && (
                        <p className="mt-1.5 text-xs text-white/40">{item.authorName}</p>
                      )}
                      {isPodcast && item.guest && (
                        <p className="mt-1.5 text-xs text-white/40 line-clamp-1">
                          {item.guest}{item.guestTitle ? ` · ${item.guestTitle}` : ""}
                        </p>
                      )}
                      {isEvent && item.location && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs text-white/40">
                          <MapPin className="size-3 shrink-0" aria-hidden />
                          {item.location}
                        </p>
                      )}

                      {/* Date + arrow */}
                      <div className="mt-3 flex items-center justify-between">
                        {dateStr && (
                          <time className="text-[10px] text-white/25" dateTime={item._date}>{dateStr}</time>
                        )}
                        <ArrowRight className="size-3 text-white/20 transition-all group-hover:translate-x-0.5 group-hover:text-white/50 ml-auto" aria-hidden />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-rhino-900 py-28 md:py-40">
        {/* Photo background at low opacity for texture */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image
            src="/event-photos/mdpluscollage.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.10]"
            sizes="100vw"
          />
          {/* Dark overlay to keep contrast */}
          <div className="absolute inset-0 bg-rhino-900/60" />
        </div>
        {/* Centered golden glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,203,33,0.14),_transparent_60%)]"
        />
        <div className="relative mx-auto max-w-(--container-max) px-6 text-center">
          <Reveal>
            <h2 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl">
              <span className="block">You&apos;re a doctor.</span>
              <span className="block">You want more.</span>
              <span className="block text-yellow-400">We&apos;re the bridge.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 text-lg text-rhino-100/75 md:text-xl">
              Free Slack membership. Take a look around. Stay if it&apos;s for you.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="https://app.mdplus.community/apply"
                className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-10 py-4 text-base font-semibold text-rhino-900 shadow-lg transition hover:bg-yellow-400 hover:scale-[1.03] active:scale-[0.98]"
              >
                Join free →
              </Link>
              <p className="text-sm text-rhino-300/70">
                5,000+ physicians &amp; med students already in
              </p>
            </div>
          </Reveal>
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
              href="https://app.mdplus.community/apply"
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
