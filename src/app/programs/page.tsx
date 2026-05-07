import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";

export const metadata: Metadata = { title: "Programs" };

const PROGRAMS = [
  {
    href: "/programs/catalyst",
    title: "Catalyst",
    body: "Our flagship program. A cohort-based experience for physicians and med students serious about building.",
    status: "Live",
  },
  {
    href: "/programs",
    title: "Datathons",
    body: "Multi-day team competitions on real clinical datasets. Best work gets published.",
    status: "Recurring",
  },
  {
    href: "/learn/journal-club",
    title: "Journal Club",
    body: "Structured paper deep-dives. Read together, discuss, ship.",
    status: "Recurring",
  },
] as const;

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Learn by shipping, with peers."
        description="Programs are how we turn lurkers into builders. Cohort-based, deadline-driven, peer-shared."
      />
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {PROGRAMS.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group block rounded-lg border border-neutral-200 bg-neutral-0 p-6 transition-all hover:-translate-y-0.5 hover:border-denim-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-xl font-bold text-rhino-700 group-hover:text-denim-700">
                    {p.title}
                  </h2>
                  <span className="rounded-pill bg-yellow-50 px-2.5 py-0.5 text-xs font-semibold text-yellow-700">
                    {p.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {p.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
