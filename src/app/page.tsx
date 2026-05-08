import Link from "next/link";
import Image from "next/image";
import {
  Users,
  GraduationCap,
  Calendar,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { RotatingHeadline } from "@/components/marketing/RotatingHeadline";
import { COMMUNITY_ICON } from "@/lib/community-icons";

const LOGOS = [
  { src: "/logos/Harvard_University_logo.svg.png", alt: "Harvard University" },
  { src: "/logos/Stanford_Cardinal_logo.svg", alt: "Stanford" },
  { src: "/logos/McKinsey_&_Company-Logo.wine.png", alt: "McKinsey & Company" },
  { src: "/logos/Bain-logo-1.webp", alt: "Bain & Company" },
  { src: "/logos/A16z-Emblem.png", alt: "Andreessen Horowitz" },
] as const;

const COMMUNITIES = [
  {
    slug: "consulting",
    name: "Consulting",
    blurb:
      "Mentorship and case prep for med students, residents, and physicians moving into management consulting.",
    members: "200+",
  },
  {
    slug: "data",
    name: "Data + AI",
    blurb:
      "Hands-on tutorials in ML, RAG, and CNNs through a clinical lens. Plus the Journal Club.",
    members: "Active",
  },
  {
    slug: "vc",
    name: "Venture Capital",
    blurb:
      "Fellowship pipelines, investor introductions, and the resources to actually break into healthtech VC.",
    members: "Active",
  },
  {
    slug: "policy",
    name: "Health Policy",
    blurb:
      "Op-ed writing groups, expert speakers, and a podcast segment translating policy into plain English.",
    members: "Active",
  },
  {
    slug: "blockchain",
    name: "Blockchain / DeSci",
    blurb:
      "Decentralized science applied to medicine — from data ownership to publishing reform.",
    members: "Active",
  },
] as const;

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
      "A 2,500+ member Slack of physicians and med students. Sub-channels for every domain. Real conversations, not feeds.",
    href: "/community",
    cta: "See what's inside",
  },
  {
    icon: GraduationCap,
    title: "Skills",
    description:
      "A library of guides, courses, and expert mini-courses on the things you actually need to learn — from case prep to RAG to investor decks.",
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

export default function Home() {
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
            data, AI, and entrepreneurship —{" "}
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
            Free forever. We&apos;ll never spam you. 2,500+ members already in.
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
            {LOGOS.map((logo) => (
              <li key={logo.alt} className="relative h-10 w-full max-w-[140px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="140px"
                  className="object-contain opacity-60 transition-opacity duration-200 hover:opacity-100"
                  style={{ objectPosition: "center" }}
                />
              </li>
            ))}
          </ul>
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
              get involved — alongside 2,500+ peers and mentors who&apos;ve
              already done it.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3 Pillars ─────────────────────────────────────────── */}
      <section className="bg-neutral-50 py-24 md:py-32">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              What&apos;s inside
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-5xl">
              Three layers, one community.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Whether you&apos;re here to learn, connect, or build — there&apos;s
              a starting point for you.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="group flex flex-col rounded-lg border border-neutral-200 bg-neutral-0 p-8 transition-all hover:border-denim-200 hover:shadow-md"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-lg bg-denim-50 text-denim-600">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-rhino-700">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-neutral-600">
                    {pillar.description}
                  </p>
                  <Link
                    href={pillar.href}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-denim-600 transition-all group-hover:gap-2 hover:text-denim-700"
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
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-10 items-center justify-center rounded-md bg-rhino-50 text-rhino-700 group-hover:bg-denim-50 group-hover:text-denim-600">
                        {Icon && <Icon className="size-5" aria-hidden />}
                      </span>
                      <h3 className="font-display text-xl font-bold text-rhino-700 group-hover:text-denim-700">
                        {c.name}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-pill bg-yellow-50 px-2.5 py-0.5 text-xs font-semibold text-yellow-700">
                      {c.members}
                    </span>
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
              <Link
                href="/learn/newsletter"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Just send the newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
