import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Avatar } from "@/components/marketing/Avatar";
import { TeamGrid } from "@/components/marketing/TeamGrid";
import { PastYearsSection } from "@/components/marketing/PastYearsSection";
import {
  CURRENT_TEAM,
  FOUNDERS,
  PAST_YEARS,
  CURRENT_YEAR,
  type Founder,
} from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the 2026–27 MDplus executive team — co-chairs, VPs, and directors spanning AI & data science, venture capital, health policy, consulting, biotech, medical devices, and alumni engagement.",
};

function FounderCard({ member }: { member: Founder }) {
  return (
    <article className="flex gap-5 rounded-xl border border-neutral-200 bg-neutral-0 p-6 transition-shadow hover:shadow-sm">
      <Avatar name={member.name} size="lg" className="shrink-0" />
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-base font-bold text-rhino-700">{member.name}</h3>
        <p className="mt-0.5 text-sm font-medium text-denim-600">{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">{member.bio}</p>
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title={
          <>
            The folks{" "}
            <span className="text-denim-600">running the place.</span>
          </>
        }
        description="MDplus is run by a volunteer team of physicians, residents, and medical students — most of them members first. The work is unpaid; the impact is real."
      />

      {/* ── Current leadership ──────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
                Current leadership · {CURRENT_YEAR}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
                Who&apos;s steering MDplus today.
              </h2>
              <p className="mt-4 text-base text-neutral-500">
                Filter by role or vertical. Click any card to read their full profile.
              </p>
            </div>
            <p className="text-sm text-neutral-400">
              {CURRENT_TEAM.length} members
            </p>
          </div>

          <TeamGrid members={CURRENT_TEAM} />
        </div>
      </section>

      {/* ── Past leadership ─────────────────────────────────────── */}
      <PastYearsSection years={PAST_YEARS} />

      {/* ── Founders ────────────────────────────────────────────── */}
      <section className="border-t border-neutral-100 bg-yellow-50 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-700">
              Founders · 2019
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
              The four who started it.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              MDplus began with a Slack workspace on August 27, 2019 and a first
              meetup of around 20–30 non-traditional medical students in New York
              City on October 2, 2019.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {FOUNDERS.map((m) => (
              <FounderCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Join CTA ─────────────────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="rounded-xl border border-neutral-200 bg-yellow-50 p-10 md:p-16">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
                  Want to help run the place?
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-rhino-700 md:text-3xl">
                  We&apos;re always looking for active members to take on
                  director roles.
                </h2>
                <p className="mt-3 text-base text-neutral-600">
                  If you&apos;re an MDplus member who wants to lead a vertical,
                  run a program, or own a piece of the publication, say hi.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-rhino-700 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-rhino-600"
              >
                Get in touch
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
