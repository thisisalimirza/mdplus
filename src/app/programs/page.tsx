import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { PROGRAMS_SECTIONS } from "@/data/programs-sections";

export const metadata: Metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Learn by doing, with peers."
        description="Programs are how we turn quiet members into active ones. Cohort-based, structured, peer-shared."
      />
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {PROGRAMS_SECTIONS.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.title}
                  href={p.href}
                  className="group block rounded-lg border border-neutral-200 bg-neutral-0 p-6 transition-all hover:-translate-y-0.5 hover:border-denim-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-md bg-yellow-100 text-yellow-700">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="shrink-0 rounded-pill bg-yellow-50 px-2.5 py-0.5 text-xs font-semibold text-yellow-700">
                      {p.status}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-xl font-bold text-rhino-700 group-hover:text-denim-700">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {p.body}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
