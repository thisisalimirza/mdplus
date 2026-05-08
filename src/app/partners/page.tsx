import Link from "next/link";
import type { Metadata } from "next";
import { Megaphone, UserPlus, Handshake, ArrowRight, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";

export const metadata: Metadata = {
  title: "For Partners",
  description:
    "Reach 5,000+ physicians and med students before they become healthcare's decision-makers.",
};

const TRACKS: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
}[] = [
  {
    icon: Megaphone,
    eyebrow: "Sponsor",
    title: "Reach the next generation of healthcare's decision-makers.",
    body: "Sponsor a Datathon, name a Catalyst cohort, run a featured workshop, or place an insert in the newsletter. Pricing scales with audience and intent.",
    cta: "Talk to us about sponsorship",
  },
  {
    icon: UserPlus,
    eyebrow: "Hire",
    title: "Hire physician-innovators who already speak product, data, and clinical.",
    body: "Post roles to a curated talent pool of clinicians moving into industry. Includes member directory access and warm-intro support for senior roles.",
    cta: "Talk to us about hiring",
  },
  {
    icon: Handshake,
    eyebrow: "Partner",
    title: "Co-create programs that put your work in front of the next generation of leaders.",
    body: "Joint research initiatives, co-branded content, residency partnerships, and academic collaborations. We bring the audience; you bring the substance.",
    cta: "Talk to us about partnerships",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        variant="rhino"
        eyebrow="For partners"
        title={
          <>
            5,000+ physicians and med students.{" "}
            <span className="text-yellow-500">One front door.</span>
          </>
        }
        description="MDplus is where the most curious clinicians-to-decision-makers gather to learn, hire, build, and invest. If your work touches healthcare innovation, we should talk."
      />

      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="grid gap-10 md:gap-16">
            {TRACKS.map((t, i) => {
              const Icon = t.icon;
              return (
                <article
                  key={t.eyebrow}
                  className={`grid gap-8 md:grid-cols-3 md:items-start ${
                    i > 0 ? "border-t border-neutral-100 pt-10 md:pt-16" : ""
                  }`}
                >
                  <div>
                    <span className="inline-flex size-12 items-center justify-center rounded-lg bg-yellow-500 text-rhino-900">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-yellow-700">
                      {t.eyebrow}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-rhino-700 md:text-3xl">
                      {t.title}
                    </h2>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-lg leading-relaxed text-neutral-600">
                      {t.body}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-denim-600 hover:text-denim-700"
                    >
                      {t.cta}
                      <ArrowRight className="size-3.5" aria-hidden />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 py-16 md:py-20">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-bold text-rhino-700 md:text-3xl">
                Not sure which fits?
              </h2>
              <p className="mt-3 text-base text-neutral-600">
                Tell us what you&apos;re trying to do and we&apos;ll point you
                at the right surface.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-rhino-700 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-rhino-600"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
