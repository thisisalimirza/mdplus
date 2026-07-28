import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Database,
  BookOpen,
  CalendarClock,
  Gavel,
  Trophy,
  HelpCircle,
  Handshake,
  Layers,
  Sparkles,
  Mail,
  Code,
  ExternalLink,
} from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import {
  DATATHON_EDITIONS,
  getDatathonEdition,
  type DatathonLink,
} from "@/data/datathon-editions";

type Params = { year: string };

export function generateStaticParams(): Params[] {
  return DATATHON_EDITIONS.map((e) => ({ year: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { year } = await params;
  const edition = getDatathonEdition(year);
  if (!edition) return {};
  return {
    title: `Datathon ${edition.year} — ${edition.theme}`,
    description: edition.summary,
  };
}

/** Small inline external/internal link with consistent styling. */
function ResourceAnchor({
  link,
  className,
}: {
  link: DatathonLink;
  className?: string;
}) {
  const base =
    className ??
    "inline-flex items-center gap-1 text-sm font-semibold text-denim-600 hover:text-denim-700";
  if (!link.href) {
    return <span className="text-sm font-medium text-rhino-700">{link.label}</span>;
  }
  const external = link.href.startsWith("http");
  return (
    <a
      href={link.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={base}
    >
      {link.label}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  dark,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p
        className={`text-sm font-semibold uppercase tracking-widest ${
          dark ? "text-yellow-500" : "text-denim-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-3xl font-bold leading-tight md:text-4xl ${
          dark ? "text-white" : "text-rhino-700"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

export default async function DatathonEditionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { year } = await params;
  const edition = getDatathonEdition(year);
  if (!edition) notFound();

  const others = DATATHON_EDITIONS.filter((e) => e.slug !== edition.slug);

  return (
    <>
      <PageHero
        eyebrow={`Datathon · ${edition.edition}`}
        title={
          <>
            MD+ {edition.year} Datathon
            {edition.theme && (
              <>
                {" "}
                <span className="text-denim-600">{edition.theme}.</span>
              </>
            )}
          </>
        }
        description={edition.summary}
      >
        {edition.meta && edition.meta.length > 0 && (
          <dl className="flex flex-wrap gap-3">
            {edition.meta.map((pill) => (
              <div
                key={pill.label}
                className="rounded-pill border border-rhino-200 bg-neutral-0/70 px-4 py-2"
              >
                <dt className="text-xs font-semibold uppercase tracking-wider text-rhino-500">
                  {pill.label}
                </dt>
                <dd className="font-display text-sm font-semibold text-rhino-700">
                  {pill.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
        <div className="mt-6">
          <Link
            href="/programs/datathon"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-denim-600 hover:text-denim-700"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to the Datathon overview
          </Link>
        </div>
      </PageHero>

      {/* ── About ──────────────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <SectionHeading eyebrow="About" title={`The ${edition.edition} Datathon.`} />
          <div className="mt-8 grid gap-12 lg:grid-cols-3">
            <div className="space-y-5 text-lg leading-relaxed text-neutral-600 lg:col-span-2">
              {edition.about.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            {edition.highlights && edition.highlights.length > 0 && (
              <div className="space-y-4">
                {edition.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-lg border border-neutral-200 bg-neutral-50 p-5"
                  >
                    <h3 className="font-display text-base font-bold text-rhino-700">
                      {h.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {h.body}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {edition.tracks && edition.tracks.length > 0 && (
            <div className="mt-12">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-denim-600">
                <Layers className="size-4" aria-hidden />
                Competition tracks
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {edition.tracks.map((track) => (
                  <div
                    key={track.label}
                    className="rounded-lg border border-denim-100 bg-denim-50 p-5 font-display text-base font-semibold text-rhino-700"
                  >
                    {track.label}
                  </div>
                ))}
              </div>
            </div>
          )}

          {edition.ruleCallout && (
            <div className="mt-12 rounded-xl border border-yellow-200 bg-yellow-50 p-6 md:p-8">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-yellow-700">
                <Sparkles className="size-4" aria-hidden />
                {edition.ruleCallout.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                {edition.ruleCallout.body}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Datasets ───────────────────────────────────────── */}
      {edition.datasets && edition.datasets.length > 0 && (
        <section className="bg-neutral-50 py-20 md:py-28">
          <div className="mx-auto max-w-(--container-max) px-6">
            <SectionHeading eyebrow="Datasets" title="What teams worked with." />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {edition.datasets.map((ds) => (
                <article
                  key={ds.name}
                  className="rounded-lg border border-neutral-200 bg-neutral-0 p-6"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex size-10 items-center justify-center rounded-md bg-denim-50 text-denim-600">
                      <Database className="size-5" aria-hidden />
                    </span>
                    <h3 className="font-display text-lg font-bold text-rhino-700">
                      {ds.href ? <ResourceAnchor link={{ label: ds.name, href: ds.href }} className="font-display text-lg font-bold text-denim-600 hover:text-denim-700" /> : ds.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {ds.description}
                  </p>
                  {ds.note && (
                    <p className="mt-2 text-xs font-medium text-amber-600">
                      {ds.note}
                    </p>
                  )}
                  {ds.requirements && ds.requirements.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-rhino-500">
                        Usage requirements
                      </p>
                      <ol className="mt-2 list-decimal space-y-1 pl-4 text-sm text-neutral-600 marker:text-neutral-400">
                        {ds.requirements.map((req, idx) => (
                          <li key={idx}>
                            <ResourceAnchor link={req} />
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Tutorials ──────────────────────────────────────── */}
      {edition.tutorials && edition.tutorials.length > 0 && (
        <section className="bg-neutral-0 py-20 md:py-28">
          <div className="mx-auto max-w-(--container-max) px-6">
            <SectionHeading eyebrow="Tutorials" title="Get up to speed." />
            {edition.githubHref && (
              <p className="mt-4">
                <ResourceAnchor
                  link={{ label: "Datathon GitHub repository", href: edition.githubHref }}
                />
              </p>
            )}
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {edition.tutorials.map((tut) => (
                <article
                  key={tut.title}
                  className="rounded-lg border border-neutral-200 bg-neutral-0 p-6"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex size-9 items-center justify-center rounded-md bg-rhino-50 text-rhino-700">
                      <BookOpen className="size-5" aria-hidden />
                    </span>
                    <h3 className="font-display text-base font-bold text-rhino-700">
                      {tut.title}
                    </h3>
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {tut.links.map((link, idx) => (
                      <li key={idx}>
                        <ResourceAnchor link={link} />
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Timeline ───────────────────────────────────────── */}
      {edition.timeline && edition.timeline.length > 0 && (
        <section className="bg-neutral-50 py-20 md:py-28">
          <div className="mx-auto max-w-(--container-max) px-6">
            <SectionHeading eyebrow="Timeline" title="Key dates." />
            <ol className="mt-12 space-y-4">
              {edition.timeline.map((item, idx) => (
                <li
                  key={idx}
                  className="flex flex-col gap-2 rounded-lg border border-neutral-200 bg-neutral-0 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-3">
                    <CalendarClock
                      className="mt-0.5 size-5 shrink-0 text-denim-500"
                      aria-hidden
                    />
                    <div>
                      <p className="font-display text-base font-semibold text-rhino-700">
                        {item.title}
                      </p>
                      {item.description && (
                        <p className="mt-1 text-sm text-neutral-600">
                          {item.description}
                        </p>
                      )}
                      {item.links && item.links.length > 0 && (
                        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                          {item.links.map((link, i) => (
                            <li key={i}>
                              <ResourceAnchor link={link} />
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <span className="shrink-0 whitespace-nowrap rounded-pill bg-rhino-50 px-3 py-1 text-xs font-semibold text-rhino-600 sm:ml-4">
                    {item.date}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ── Events schedule ────────────────────────────────── */}
      {edition.schedule && edition.schedule.length > 0 && (
        <section className="bg-neutral-50 py-20 md:py-28">
          <div className="mx-auto max-w-(--container-max) px-6">
            <SectionHeading eyebrow="Events schedule" title="Workshops, office hours, and pitches." />
            <ol className="mt-12 space-y-4">
              {edition.schedule.map((ev, idx) => (
                <li
                  key={idx}
                  className={`rounded-lg border p-5 ${
                    ev.highlight
                      ? "border-yellow-200 bg-yellow-50"
                      : "border-neutral-200 bg-neutral-0"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-display text-base font-semibold text-rhino-700">
                      {ev.title}
                    </p>
                    <span className="text-xs font-semibold uppercase tracking-wider text-denim-600">
                      {ev.when}
                    </span>
                  </div>
                  {ev.description && (
                    <p className="mt-1 text-sm text-neutral-600">{ev.description}</p>
                  )}
                  {ev.links && ev.links.length > 0 && (
                    <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                      {ev.links.map((link, i) => (
                        <li key={i}>
                          <ResourceAnchor link={link} />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ── Judges ─────────────────────────────────────────── */}
      {edition.judges && edition.judges.length > 0 && (
        <section className="bg-neutral-0 py-20 md:py-28">
          <div className="mx-auto max-w-(--container-max) px-6">
            <SectionHeading eyebrow="Judges" title="Who scored the submissions." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {edition.judges.map((judge) => (
                <article
                  key={judge.name}
                  className="rounded-lg border border-neutral-200 bg-neutral-0 p-6"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex size-9 items-center justify-center rounded-md bg-denim-50 text-denim-600">
                      <Gavel className="size-5" aria-hidden />
                    </span>
                    <h3 className="font-display text-base font-bold text-rhino-700">
                      {judge.href ? (
                        <ResourceAnchor
                          link={{ label: judge.name, href: judge.href }}
                          className="font-display text-base font-bold text-denim-600 hover:text-denim-700"
                        />
                      ) : (
                        judge.name
                      )}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600">
                    {judge.affiliation}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Finalists ──────────────────────────────────────── */}
      {edition.finalists && edition.finalists.length > 0 && (
        <section className="bg-rhino-700 py-20 md:py-24">
          <div className="mx-auto max-w-(--container-max) px-6">
            <SectionHeading eyebrow="Finalists" title="The teams that pitched." dark />
            {edition.prize && (
              <p className="mt-4 max-w-2xl text-lg text-rhino-100/90">
                Finalist teams pitched live for the {edition.prize}.
              </p>
            )}
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {edition.finalists.map((team) => (
                <article
                  key={team.team}
                  className="rounded-lg border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex items-center gap-2">
                    <Trophy className="size-4 text-yellow-500" aria-hidden />
                    <h3 className="font-display text-base font-bold text-yellow-500">
                      {team.team}
                    </h3>
                  </div>
                  <p className="mt-3 font-display text-sm font-semibold text-white">
                    {team.project}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-rhino-100/80">
                    {team.members}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Sponsors ───────────────────────────────────────── */}
      {edition.sponsors && edition.sponsors.length > 0 && (
        <section className="bg-neutral-0 py-20 md:py-28">
          <div className="mx-auto max-w-(--container-max) px-6">
            <SectionHeading eyebrow="Partners + sponsors" title="Backed by serious operators." />
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {edition.sponsors.map((group) => (
                <div key={group.tier}>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-denim-600">
                    <Handshake className="size-4" aria-hidden />
                    {group.tier}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {group.sponsors.map((s) => (
                      <li
                        key={s.label}
                        className="font-display text-lg font-semibold text-rhino-700"
                      >
                        {s.href ? <ResourceAnchor link={s} className="font-display text-lg font-semibold text-denim-600 hover:text-denim-700" /> : s.label}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQs ───────────────────────────────────────────── */}
      {edition.faqs && edition.faqs.length > 0 && (
        <section className="bg-neutral-50 py-20 md:py-28">
          <div className="mx-auto max-w-(--container-max) px-6">
            <SectionHeading eyebrow="FAQs" title="Common questions." />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {edition.faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-lg border border-neutral-200 bg-neutral-0 p-6"
                >
                  <h3 className="flex items-start gap-2 font-display text-base font-bold text-rhino-700">
                    <HelpCircle
                      className="mt-0.5 size-5 shrink-0 text-denim-500"
                      aria-hidden
                    />
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {faq.answer}
                  </p>
                  {faq.links && faq.links.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                      {faq.links.map((link, i) => (
                        <li key={i}>
                          <ResourceAnchor link={link} />
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Resources + contacts ───────────────────────────── */}
      {((edition.resources && edition.resources.length > 0) ||
        (edition.contacts && edition.contacts.length > 0)) && (
        <section className="bg-neutral-0 py-20 md:py-28">
          <div className="mx-auto max-w-(--container-max) px-6">
            <div className="grid gap-10 md:grid-cols-2">
              {edition.resources && edition.resources.length > 0 && (
                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-denim-600">
                    <Code className="size-4" aria-hidden />
                    Resources
                  </p>
                  <ul className="mt-4 space-y-2">
                    {edition.resources.map((r) => (
                      <li key={r.label} className="flex items-center gap-1.5">
                        <ExternalLink
                          className="size-3.5 shrink-0 text-neutral-400"
                          aria-hidden
                        />
                        <ResourceAnchor link={r} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {edition.contacts && edition.contacts.length > 0 && (
                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-denim-600">
                    <Mail className="size-4" aria-hidden />
                    Questions? Reach the organizers
                  </p>
                  <ul className="mt-4 space-y-2">
                    {edition.contacts.map((c) => (
                      <li key={c.label}>
                        <ResourceAnchor link={c} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Other editions + CTA ───────────────────────────── */}
      <section className="relative overflow-hidden bg-yellow-50 py-20 md:py-24">
        <div className="relative mx-auto max-w-(--container-max) px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
                Other editions
              </p>
              <h2 className="mt-4 font-display text-2xl font-bold text-rhino-700 md:text-3xl">
                Explore the Datathon&apos;s history.
              </h2>
            </div>
            <Link
              href="/programs/datathon"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-denim-600 hover:text-denim-700"
            >
              Datathon overview
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((e) => (
              <Link
                key={e.slug}
                href={`/programs/datathon/${e.slug}`}
                className="group block rounded-lg border border-neutral-200 bg-neutral-0 p-6 transition-all hover:border-denim-300 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-pill bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-700">
                    <Trophy className="size-3" aria-hidden />
                    {e.edition}
                  </span>
                  <span className="text-xs text-neutral-500">{e.year}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-rhino-700 group-hover:text-denim-700">
                  {e.theme}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{e.dates}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
