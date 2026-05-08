import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PhotoHero } from "@/components/marketing/PhotoHero";
import { HERO_COLLAGE } from "@/data/event-photos";
import { HISTORY, LEADERSHIP_ERAS, GROWTH_NUMBERS } from "@/data/history";

export const metadata: Metadata = {
  title: "History",
  description:
    "From a Slack workspace and a NYC dinner in 2019 to a 5,000+ member community — the MDplus story, year by year.",
};

export default function HistoryPage() {
  return (
    <>
      <PhotoHero
        eyebrow="History · 2019 → today"
        imageSrc={HERO_COLLAGE.src}
        imageAlt={HERO_COLLAGE.alt}
        title={
          <>
            From a NYC dinner{" "}
            <span className="text-yellow-500">to a national community.</span>
          </>
        }
        description="MDplus started with a Slack workspace, a few co-founders, and 20 medical students at a meetup in October 2019. Six years later it's the largest community of physician-innovators in the United States."
      />

      {/* ── Origin paragraph ───────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              The origin
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              How four medical students started a national community.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-600">
              <p>
                In 2019, Sherman Leung — then a medical student at Mount Sinai
                with a Stanford CS background — started organizing informal
                meetups in New York City for medical students who didn&apos;t
                fit the traditional clinical-research mold. People interested
                in tech, business, biotech, policy. People who wanted more.
              </p>
              <p>
                On October 2, 2019, the first MDplus meetup happened in NYC.
                About 20–30 people showed up. The four co-founders — Sherman
                Leung, Sarah Zweifach (NYU MD/MBA), Omar Njie (Mount Sinai),
                and Walter Hsiang (Yale MD/MBA) — were all in the room.
              </p>
              <p>
                In May 2020, MDplus (then called MD++) launched publicly with
                ten founding members and a single Slack workspace. Six years
                and four leadership generations later, that Slack has grown
                into a community of about 5,000 medical students, residents,
                and physicians from 120+ medical schools across the country —
                with eight active verticals, 14 regional chapters, and a
                Datathon model that&apos;s been published in peer-reviewed
                research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────── */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              Timeline
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              The milestones, in order.
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            {HISTORY.map((era) => (
              <div key={era.label} className="mb-16 last:mb-0">
                <div className="mb-8 border-b border-neutral-200 pb-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-rhino-500">
                    {era.range}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-rhino-700 md:text-3xl">
                    {era.label}
                  </h3>
                  <p className="mt-3 text-base text-neutral-600">{era.intro}</p>
                </div>

                <ol className="space-y-6">
                  {era.milestones.map((m, idx) => (
                    <li
                      key={`${era.label}-${idx}`}
                      className="relative grid gap-3 pl-8 md:grid-cols-[140px_1fr] md:gap-6 md:pl-0"
                    >
                      {/* Vertical rail dot */}
                      <span
                        aria-hidden
                        className="absolute left-2 top-2 size-2.5 rounded-full bg-yellow-500 ring-4 ring-yellow-100 md:left-[136px]"
                      />
                      {/* Vertical rail line */}
                      {idx < era.milestones.length - 1 && (
                        <span
                          aria-hidden
                          className="absolute left-3 top-5 h-full w-px bg-neutral-200 md:left-[140px]"
                        />
                      )}

                      <p className="text-sm font-semibold text-denim-600 md:pt-0.5 md:text-right">
                        {m.date}
                      </p>
                      <div>
                        <h4 className="font-display text-lg font-bold text-rhino-700">
                          {m.title}
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                          {m.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership transitions table ───────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              Leadership generations
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              Five generations of co-chairs.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Sherman Leung handed off to Lathan Liou. Lathan handed off to
              Clara Sun. Clara to Steve Stephen. Steve to Arvind Rajan. Each
              transition kept enough institutional memory to make the next
              one possible.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 text-left text-xs font-semibold uppercase tracking-widest text-rhino-500">
                  <th className="py-3 pr-6">Year</th>
                  <th className="py-3 pr-6">Co-chairs</th>
                  <th className="py-3 pr-6">Team size</th>
                  <th className="py-3">Note</th>
                </tr>
              </thead>
              <tbody className="font-display text-sm">
                {LEADERSHIP_ERAS.map((era) => (
                  <tr
                    key={era.years}
                    className="border-b border-neutral-100 last:border-b-0"
                  >
                    <td className="py-4 pr-6 font-semibold text-rhino-700">
                      {era.years}
                    </td>
                    <td className="py-4 pr-6 text-rhino-700">{era.coChairs}</td>
                    <td className="py-4 pr-6 text-neutral-600">
                      {era.teamSize}
                    </td>
                    <td className="py-4 text-sm font-normal text-neutral-600">
                      {era.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Growth numbers ─────────────────────────────────── */}
      <section className="bg-yellow-50 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-700">
              By the numbers
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              Six years of growth.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {GROWTH_NUMBERS.map((g) => (
              <div
                key={g.year}
                className="rounded-lg border border-yellow-200 bg-neutral-0 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
                  {g.year}
                </p>
                <p className="mt-2 font-display text-2xl font-bold text-rhino-700">
                  {g.count}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                  {g.note}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-sm text-neutral-600">
            Membership grew exponentially through 2023 and has since
            stabilized in the 4,000–5,000 range as the organization has
            shifted focus from raw growth to programming quality and
            international reach.
          </p>
        </div>
      </section>

      {/* ── Closing CTA ────────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="rounded-xl border border-rhino-100 bg-rhino-700 p-10 text-white md:p-16">
            <h2 className="font-display text-2xl font-bold leading-tight text-white md:text-4xl">
              You can be part of the next chapter.
            </h2>
            <p className="mt-4 max-w-xl text-rhino-100/90">
              Every leadership generation has been built from active members
              first. If that path interests you, joining the Slack is the
              starting line.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/join"
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-yellow-500 px-6 py-3.5 text-base font-semibold text-rhino-900 shadow-sm transition-colors hover:bg-yellow-400"
              >
                Join free
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/about/team"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Meet the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
