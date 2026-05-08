import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { LEARN_SECTIONS } from "@/data/learn-sections";

export const metadata: Metadata = { title: "Learn" };

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Read, listen, and learn."
        description="Everything we publish — long-form, audio, weekly briefings, and the journal club — in one place."
      />
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LEARN_SECTIONS.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group block rounded-lg border border-neutral-200 bg-neutral-0 p-6 transition-all hover:-translate-y-0.5 hover:border-denim-300 hover:shadow-md"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-md bg-denim-50 text-denim-600">
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
    </>
  );
}
