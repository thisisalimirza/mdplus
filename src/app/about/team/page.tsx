import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Avatar } from "@/components/marketing/Avatar";
import { PastYearsSection } from "@/components/marketing/PastYearsSection";
import {
  CHAIRS,
  VPS,
  FOUNDERS,
  PAST_YEARS,
  CURRENT_YEAR,
  DIRECTOR_VERTICALS,
  directorsByVertical,
  type CurrentMember,
  type Founder,
} from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the 2026–27 MDplus executive team — co-chairs, VPs, and directors spanning AI & data science, venture capital, health policy, consulting, biotech, medical devices, and alumni engagement.",
};

// ── Card components ──────────────────────────────────────────────────────────

function CoChairCard({ member }: { member: CurrentMember }) {
  return (
    <article className="rounded-xl border border-yellow-200 bg-yellow-50 p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <Avatar name={member.name} src={member.imageSrc} size="xl" className="shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-xl font-bold text-rhino-700">
              {member.name}
            </h3>
            <span className="rounded-full bg-yellow-300/60 px-2.5 py-0.5 text-xs font-semibold text-yellow-800">
              Co-Chair
            </span>
          </div>
          {member.school && (
            <p className="mt-1 text-sm text-neutral-500">{member.school}</p>
          )}
          {member.bio && (
            <p className="mt-4 text-sm leading-relaxed text-neutral-700">
              {member.bio}
            </p>
          )}
          {member.plus && (
            <blockquote className="mt-5 border-l-2 border-yellow-400 pl-4">
              <p className="text-sm text-neutral-600">
                <span className="font-semibold text-yellow-700">My plus: </span>
                {member.plus}
              </p>
            </blockquote>
          )}
        </div>
      </div>
    </article>
  );
}

function VpCard({ member }: { member: CurrentMember }) {
  return (
    <article className="flex gap-4 rounded-lg border border-neutral-200 bg-neutral-0 p-5 transition-shadow hover:shadow-sm">
      <Avatar name={member.name} src={member.imageSrc} size="lg" className="shrink-0" />
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-base font-bold text-rhino-700">
          {member.name}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-denim-600">{member.role}</p>
        {member.school && (
          <p className="mt-0.5 text-xs text-neutral-400">{member.school}</p>
        )}
        {member.bio && (
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            {member.bio}
          </p>
        )}
      </div>
    </article>
  );
}

function DirectorCard({ member }: { member: CurrentMember }) {
  return (
    <article className="flex gap-4 rounded-lg border border-neutral-200 bg-neutral-0 p-5 transition-shadow hover:shadow-sm">
      <Avatar name={member.name} src={member.imageSrc} size="md" className="shrink-0" />
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-sm font-bold text-rhino-700">
          {member.name}
        </h3>
        {member.school && (
          <p className="mt-0.5 text-xs text-neutral-400">{member.school}</p>
        )}
        {member.bio && (
          <p className="mt-2 text-xs leading-relaxed text-neutral-600">
            {member.bio}
          </p>
        )}
      </div>
    </article>
  );
}

function FounderCard({ member }: { member: Founder }) {
  return (
    <article className="flex gap-5 rounded-lg border border-neutral-200 bg-neutral-0 p-6 transition-shadow hover:shadow-sm">
      <Avatar name={member.name} size="lg" className="shrink-0" />
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-base font-bold text-rhino-700">
          {member.name}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-denim-600">{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">{member.bio}</p>
      </div>
    </article>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function TeamPage() {
  const totalCurrent = CHAIRS.length + VPS.length + DIRECTOR_VERTICALS.reduce(
    (sum, v) => sum + directorsByVertical(v).length,
    0,
  );

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

          {/* Section header */}
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
                Current leadership · {CURRENT_YEAR}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
                Who&apos;s steering MDplus today.
              </h2>
            </div>
            <p className="text-sm text-neutral-400">
              {totalCurrent} members · {DIRECTOR_VERTICALS.length} verticals
            </p>
          </div>

          {/* ── Co-Chairs ──────────────────────────────────────── */}
          <div className="mt-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Co-Chairs
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {CHAIRS.map((m) => (
                <CoChairCard key={m.name} member={m} />
              ))}
            </div>
          </div>

          {/* ── Vice Presidents ────────────────────────────────── */}
          <div className="mt-14">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Vice Presidents
            </p>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {VPS.map((m) => (
                <VpCard key={m.name} member={m} />
              ))}
            </div>
          </div>

          {/* ── Directors by vertical ──────────────────────────── */}
          <div className="mt-14">
            <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Directors
            </p>
            <div className="space-y-10">
              {DIRECTOR_VERTICALS.map((vertical) => {
                const members = directorsByVertical(vertical);
                if (!members.length) return null;
                return (
                  <div key={vertical}>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="font-display text-sm font-semibold text-rhino-600">
                        {vertical}
                      </span>
                      <div className="h-px flex-1 bg-neutral-100" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {members.map((m) => (
                        <DirectorCard key={m.name} member={m} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Past leadership (accordion — client component) ─────── */}
      <PastYearsSection years={PAST_YEARS} />

      {/* ── Founders ─────────────────────────────────────────────── */}
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
              MDplus began with a Slack workspace on August 27, 2019 and a
              first meetup of around 20–30 non-traditional medical students in
              New York City on October 2, 2019.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {FOUNDERS.map((m) => (
              <FounderCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Join the team CTA ─────────────────────────────────────── */}
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
