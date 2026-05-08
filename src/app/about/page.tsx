import Link from "next/link";
import type { Metadata } from "next";
import {
  Users,
  History as HistoryIcon,
  HeartHandshake,
  Building2,
  Mail,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { PhotoHero } from "@/components/marketing/PhotoHero";
import { EventPhotoStrip } from "@/components/marketing/EventPhotoStrip";
import { HERO_COLLAGE, MEETUP_PHOTOS } from "@/data/event-photos";

export const metadata: Metadata = { title: "About" };

const SECTIONS: {
  icon: LucideIcon;
  href: string;
  title: string;
  body: string;
}[] = [
  {
    icon: Users,
    href: "/about/team",
    title: "Team",
    body: "The folks running the place — current leadership and past directors.",
  },
  {
    icon: HistoryIcon,
    href: "/about/history",
    title: "History",
    body: "Where MDplus came from and how it became a 5,000+ member community.",
  },
  {
    icon: HeartHandshake,
    href: "/about/donate",
    title: "Donate",
    body: "We're a 501(c)3 non-profit. Donations help us run programs and stay free.",
  },
  {
    icon: Building2,
    href: "/partners",
    title: "For Partners",
    body: "Sponsor, hire, or partner — three audiences, three different pitches.",
  },
  {
    icon: Mail,
    href: "/contact",
    title: "Contact",
    body: "Get in touch with the team — partnerships, press, general inquiries.",
  },
  {
    icon: Shield,
    href: "/guidelines",
    title: "Guidelines",
    body: "How we behave in the Slack and across the community.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PhotoHero
        eyebrow="About"
        imageSrc={HERO_COLLAGE.src}
        imageAlt={HERO_COLLAGE.alt}
        title={
          <>
            A 501(c)3 non-profit,{" "}
            <span className="text-yellow-500">built by physicians.</span>
          </>
        }
        description="MDplus exists to make the path from medicine into healthcare innovation, data, AI, and entrepreneurship easier and less lonely. Everything we do ladders up to that."
      />

      {/* ── In numbers ─────────────────────────────────────── */}
      <section className="border-b border-neutral-100 bg-neutral-0 py-12 md:py-16">
        <div className="mx-auto max-w-(--container-max) px-6">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { stat: "5,000+", label: "members" },
              { stat: "120+", label: "medical schools" },
              { stat: "8", label: "active verticals" },
              { stat: "14", label: "regional chapters" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="font-display text-3xl font-bold text-rhino-700 md:text-4xl">
                  {item.stat}
                </dt>
                <dd className="mt-1 text-sm text-neutral-500">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Sections grid ──────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              About MDplus
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
              Everything in one place.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SECTIONS.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group block rounded-lg border border-neutral-200 bg-neutral-0 p-6 transition-all hover:-translate-y-0.5 hover:border-denim-300 hover:shadow-md"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-md bg-rhino-50 text-rhino-700 group-hover:bg-denim-50 group-hover:text-denim-600">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h2 className="mt-4 font-display text-xl font-bold text-rhino-700 group-hover:text-denim-700">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {s.body}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Event photo strip ──────────────────────────────── */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              The community
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
              Real members. Real meetups.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              MDplus started in Slack and grew into regional chapters,
              conference dinners, and a quarterly cadence of in-person events.
              The Slack is the always-on layer; the dinners and meetups are
              where it gets personal.
            </p>
          </div>
          <div className="mt-12">
            <EventPhotoStrip photos={MEETUP_PHOTOS.slice(0, 8)} />
          </div>
        </div>
      </section>
    </>
  );
}
