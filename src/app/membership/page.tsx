import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import {
  PREMIUM_PRICE,
  PREMIUM_INCLUDES,
  FREE_INCLUDES,
  FAQ,
} from "@/data/membership";

export const metadata: Metadata = {
  title: "Premium membership",
  description: `Premium MDplus membership — every Skills Library course included, priority Catalyst admission, members-only events. $${PREMIUM_PRICE.standard.amount}/year.`,
};

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Premium membership"
        title={
          <>
            One annual fee.{" "}
            <span className="text-denim-600">Everything paid, included.</span>
          </>
        }
        description={
          <>
            Premium turns the à-la-carte version of MDplus into all-you-can-eat.
            Every Skills Library course, priority Catalyst admission, and
            members-only events — for one annual price.
          </>
        }
      />

      {/* ── Two tiers: Free vs Premium ──────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Free tier */}
            <article className="rounded-xl border border-neutral-200 bg-neutral-0 p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Free, forever
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-rhino-700 md:text-3xl">
                The community
              </h2>
              <p className="mt-2 text-base text-neutral-600">
                Most of MDplus is and always will be free.
              </p>

              <p className="mt-8 font-display text-5xl font-bold text-rhino-700">
                $0
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                No card. No commitment.
              </p>

              <Link
                href="/join"
                className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-rhino-200 bg-neutral-0 px-5 py-3 text-sm font-semibold text-rhino-700 transition-colors hover:border-rhino-300 hover:bg-neutral-50"
              >
                Join free →
              </Link>

              <ul className="mt-8 space-y-3">
                {FREE_INCLUDES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-neutral-600"
                  >
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            {/* Premium tier */}
            <article className="relative rounded-xl border-2 border-yellow-500 bg-yellow-50 p-8 md:p-10">
              <span className="absolute -top-3 right-6 inline-flex items-center rounded-pill bg-rhino-700 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-500">
                Recommended
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
                Premium
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-rhino-700 md:text-3xl">
                All of it
              </h2>
              <p className="mt-2 text-base text-neutral-600">
                Skills Library + priority access + members-only events.
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <p className="font-display text-5xl font-bold text-rhino-700">
                  ${PREMIUM_PRICE.standard.amount}
                </p>
                <p className="text-base text-neutral-600">
                  / {PREMIUM_PRICE.standard.cadence}
                </p>
              </div>
              <p className="mt-1 text-sm text-neutral-600">
                <span className="font-semibold text-rhino-700">
                  ${PREMIUM_PRICE.student.amount}/{PREMIUM_PRICE.student.cadence}
                </span>{" "}
                for verified med students
              </p>

              <Link
                href="/join?intent=premium"
                className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-denim-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
              >
                Become a Premium member →
              </Link>

              <ul className="mt-8 space-y-4">
                {PREMIUM_INCLUDES.map((item) => (
                  <li key={item.title} className="flex items-start gap-2.5">
                    <Check />
                    <div>
                      <p className="text-sm font-semibold text-rhino-700">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-sm text-neutral-600">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ── Founding member callout ─────────────────────────── */}
      <section className="bg-rhino-700 py-16 md:py-20">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="grid gap-8 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-500">
                Founding members · First {PREMIUM_PRICE.founding.cap} only
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-white md:text-3xl">
                Lock in ${PREMIUM_PRICE.founding.amount}/year for life.
              </h2>
              <p className="mt-3 max-w-xl text-rhino-100/90">
                The first {PREMIUM_PRICE.founding.cap} Premium members get a
                permanent ${PREMIUM_PRICE.founding.amount}/{
                  PREMIUM_PRICE.founding.cadence
                }{" "}
                rate that never goes up — even when we raise prices on new
                signups. A thank-you for trusting us early.
              </p>
            </div>
            <Link
              href="/join?intent=founding"
              className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-6 py-3.5 text-base font-semibold text-rhino-900 shadow-sm transition-colors hover:bg-yellow-400"
            >
              Claim founding rate
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
              The questions you&apos;re about to ask.
            </h2>
          </div>
          <dl className="mt-12 grid gap-4 md:grid-cols-2">
            {FAQ.map((item) => (
              <div
                key={item.q}
                className="rounded-lg border border-neutral-200 bg-neutral-0 p-6"
              >
                <dt className="font-display text-base font-semibold text-rhino-700">
                  {item.q}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

function Check() {
  return (
    <svg
      aria-hidden
      className="mt-0.5 size-4 shrink-0 text-denim-600"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
