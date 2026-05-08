import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, ArrowRight, FileText, Users } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed and academic work from MDplus members and Datathon participants — including the JMIR Medical Education paper on the MDplus Datathon model.",
};

type Publication = {
  title: string;
  authors?: string;
  venue: string;
  date: string;
  body: string;
  href?: string;
  category: "datathon" | "member" | "feature";
};

const PUBLICATIONS: Publication[] = [
  {
    category: "feature",
    title:
      "Leveraging Datathons to Teach AI in Undergraduate Medical Education",
    venue: "JMIR Medical Education",
    date: "March 2025",
    body: "Peer-reviewed validation of the MDplus Datathon as a model for teaching applied AI to medical trainees. Based on data and outcomes from the first three annual Datathons (2022–2024). The first published academic recognition of the MDplus model.",
    href: "https://mededu.jmir.org/",
  },
];

const FUTURE_DIRECTIONS = [
  {
    icon: FileText,
    title: "Datathon papers",
    body: "Each annual Datathon produces team submissions on real clinical datasets. Best work gets supported through publication — venues TBD per project.",
  },
  {
    icon: Users,
    title: "Member-authored work",
    body: "Op-ed writing groups in the Health Policy vertical target JAMA Viewpoints and NEJM Perspectives. Published pieces will land here.",
  },
];

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn · Publications"
        title={
          <>
            Peer-reviewed work{" "}
            <span className="text-denim-600">from the community.</span>
          </>
        }
        description={
          <>
            MDplus is a community first, but enough of the work has clinical
            and academic value that it ends up in journals. This page tracks
            published work from Datathon outputs and member writing.
          </>
        }
      />

      {/* ── Featured publication ───────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              Featured
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              The Datathon model, in a journal.
            </h2>
          </div>

          <div className="mt-12">
            {PUBLICATIONS.filter((p) => p.category === "feature").map((p) => (
              <article
                key={p.title}
                className="rounded-xl border border-yellow-200 bg-yellow-50 p-8 md:p-12"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-pill bg-rhino-700 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-500">
                    <FileText className="size-3" aria-hidden />
                    Peer-reviewed
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
                    {p.venue}
                  </span>
                  <span className="text-xs text-neutral-600">· {p.date}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-rhino-700 md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
                  {p.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-md bg-rhino-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-rhino-600"
                    >
                      Read on JMIR Medical Education
                      <ArrowUpRight className="size-4" aria-hidden />
                    </a>
                  )}
                  <Link
                    href="/programs/datathon"
                    className="inline-flex items-center gap-1 px-1 text-sm font-semibold text-rhino-700 hover:text-rhino-600"
                  >
                    See the Datathon program
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coming next ────────────────────────────────────── */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              In the pipeline
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              What we expect to publish next.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              The MDplus publication queue draws from two main sources —
              competition outputs and member-authored op-eds. Both are
              actively in motion.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {FUTURE_DIRECTIONS.map((d) => {
              const Icon = d.icon;
              return (
                <article
                  key={d.title}
                  className="rounded-lg border border-neutral-200 bg-neutral-0 p-6"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-md bg-denim-50 text-denim-600">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-rhino-700">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {d.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Submit your own ────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="rounded-xl border border-neutral-200 bg-yellow-50 p-10 md:p-16">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
                  Member-authored
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-rhino-700 md:text-3xl">
                  Working on a paper or op-ed? Bring it to MDplus.
                </h2>
                <p className="mt-3 text-base text-neutral-600">
                  The Health Policy vertical runs op-ed writing groups
                  targeting JAMA Viewpoints and NEJM Perspectives. The AI &
                  Data community supports Datathon-derived submissions. Both
                  start in Slack.
                </p>
              </div>
              <Link
                href="/join"
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-rhino-700 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-rhino-600"
              >
                Join free
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
