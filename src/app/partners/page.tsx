import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Megaphone,
  UserPlus,
  Handshake,
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { BookCallButton } from "@/components/marketing/BookCallButton";
import {
  SPONSORSHIP_TRACKS,
  PARTNER_FAQ,
  type SponsorshipTrack,
} from "@/data/partners";

const PARTNER_CAL_LINK = "mdplus/partner-inquiry";
const PARTNER_EMAIL = "partnerships@mdplus.community";

const emailHref = (subject: string) =>
  `mailto:${PARTNER_EMAIL}?subject=${encodeURIComponent(subject)}`;

export const metadata: Metadata = {
  title: "For Partners",
  description:
    "Reach 5,000+ physicians and med students at the cross-section of medicine and healthcare innovation. Sponsorships, hiring, and co-built programs.",
};

const TRACK_ICON: Record<SponsorshipTrack["slug"], LucideIcon> = {
  sponsor: Megaphone,
  hire: UserPlus,
  partner: Handshake,
};

const WHERE_MEMBERS_WORK = [
  "Doximity",
  "a16z Bio + Health",
  "McKinsey",
  "Bain",
  "BCG",
  "Anthropic",
  "Flatiron Health",
  "AlleyCorp",
  "Roivant Sciences",
  "Bessemer",
];

const WE_DO = [
  "Provide visibility to a high-trust audience that opts in to engagement",
  "Co-build programs and content that benefit members and your org",
  "Offer curated talent pipelines and warm intros for hard-to-fill roles",
  "Disclose sponsorship publicly at every event, in every cohort, on every co-branded piece",
];

const WE_DONT = [
  "Sell or transfer member contact lists to anyone, ever",
  "Allow unsolicited outreach; members opt in to every event, AMA, or hiring conversation",
  "Run promotional spam in our channels; the Slack moderates self-promotion strictly",
  "Take a sponsor whose product or pitch doesn't actually serve the community",
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        variant="rhino"
        eyebrow="For partners + sponsors"
        title={
          <>
            Where healthcare&apos;s emerging decision-makers{" "}
            <span className="text-yellow-500">actually pay attention.</span>
          </>
        }
        description="MDplus is a 501(c)(3) community of 5,000+ medical students, residents, and physicians at the cross-section of medicine and healthcare innovation. If your work touches that audience (for hiring, sponsorship, or co-built programs), this is the door."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={emailHref("Partner inquiry")}
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-yellow-500 px-6 py-3.5 text-base font-semibold text-rhino-900 shadow-sm transition-colors hover:bg-yellow-400"
          >
            Email the team
            <ArrowRight className="size-4" aria-hidden />
          </a>
          <BookCallButton link={PARTNER_CAL_LINK} variant="outline" size="lg">
            Or book a 15-min call
          </BookCallButton>
        </div>
      </PageHero>

      {/* ── Audience by numbers ─────────────────────────────── */}
      <section className="border-b border-neutral-100 bg-neutral-0 py-16 md:py-20">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              Who&apos;s actually here
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              The audience composition.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Targeted reach beats broad reach for almost every partner who
              comes to us. Here&apos;s the rough composition of MDplus today.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { stat: "5,000+", label: "physicians + med students" },
              { stat: "120+", label: "medical schools represented" },
              { stat: "8", label: "active verticals" },
              { stat: "14", label: "regional chapters" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="font-display text-3xl font-bold text-rhino-700 md:text-4xl">
                  {item.stat}
                </dt>
                <dd className="mt-1 text-sm text-neutral-500">{item.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 rounded-xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-rhino-500">
              Where members already work
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {WHERE_MEMBERS_WORK.map((org) => (
                <li
                  key={org}
                  className="rounded-pill bg-neutral-0 px-3 py-1.5 text-sm font-medium text-rhino-700 ring-1 ring-neutral-200"
                >
                  {org}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-neutral-500">
              Plus most major medical schools and residencies. The audience
              you&apos;re trying to reach probably already includes MDplus
              members.
            </p>
          </div>
        </div>
      </section>

      {/* ── Trusted by ──────────────────────────────────────── */}
      <section className="bg-yellow-50 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-700">
              Trusted by
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              The companies and orgs that have worked with us.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Partners across AI, venture, healthtech, pharma, and medical
              education. Many came in as a single sponsorship and stayed for
              the long-term relationship.
            </p>
          </div>

          <div className="mt-14">
            <Image
              src="/past-partners.webp"
              alt="Past MDplus partners including Roivant Sciences, Flatiron, One Medical, Google, McKinsey & Company, a16z, Bessemer Venture Partners, AlleyCorp, Scale, Verily, and many more"
              width={1617}
              height={938}
              className="w-full rounded-2xl border border-yellow-200"
            />
          </div>
        </div>
      </section>

      {/* ── Three tracks ────────────────────────────────────── */}
      <section id="tracks" className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              Three ways to work with us
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              Pick the path that fits, or talk to us if you&apos;re unsure.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Each track has its own audience, its own products, and its own
              pricing logic. Most partner relationships start in one of the
              three and grow into a second over time.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {SPONSORSHIP_TRACKS.map((track) => {
              const Icon = TRACK_ICON[track.slug];
              return (
                <article
                  key={track.slug}
                  className="grid gap-10 border-t border-neutral-100 pt-12 md:grid-cols-3 md:gap-12 md:pt-16"
                >
                  <div className="md:sticky md:top-24 md:self-start">
                    <span className="inline-flex size-12 items-center justify-center rounded-md bg-yellow-500 text-rhino-900">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-yellow-700">
                      {track.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-rhino-700 md:text-3xl">
                      {track.headline}
                    </h3>
                    <div className="mt-6 flex flex-col items-start gap-3">
                      <a
                        href={emailHref(`${track.eyebrow} inquiry`)}
                        className="inline-flex items-center justify-center gap-1.5 rounded-md bg-denim-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
                      >
                        {track.cta}
                        <ArrowRight className="size-3.5" aria-hidden />
                      </a>
                      <BookCallButton link={PARTNER_CAL_LINK} variant="ghost">
                        or book a 15-min call
                        <ArrowRight className="size-3.5" aria-hidden />
                      </BookCallButton>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
                      {track.body}
                    </p>

                    <div className="mt-8 rounded-lg border border-neutral-200 bg-neutral-50 p-5 md:p-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-rhino-500">
                        Best fit for
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {track.bestFitFor.map((fit) => (
                          <li
                            key={fit}
                            className="flex items-start gap-2.5 text-sm text-neutral-700"
                          >
                            <Check
                              className="mt-0.5 size-4 shrink-0 text-denim-600"
                              strokeWidth={2.5}
                              aria-hidden
                            />
                            <span>{fit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <p className="text-xs font-semibold uppercase tracking-widest text-rhino-500">
                        Specific things you can sponsor / use
                      </p>
                      <ul className="mt-4 grid gap-3 md:grid-cols-2">
                        {track.products.map((product) => (
                          <li
                            key={product.title}
                            className="rounded-lg border border-neutral-200 bg-neutral-0 p-4"
                          >
                            <p className="font-display text-sm font-semibold text-rhino-700">
                              {product.title}
                            </p>
                            <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                              {product.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What we won't do ────────────────────────────────── */}
      <section className="bg-rhino-700 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-500">
              Where we draw the line
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
              What sponsorship is, and what it isn&apos;t.
            </h2>
            <p className="mt-6 text-lg text-rhino-100/90">
              MDplus is a community first. That changes the deal we offer
              partners. Some of this is the reason long-term partners stay;
              some of it is the reason a few self-disqualify early. Both are
              fine.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-500">
                What partners do get
              </p>
              <ul className="mt-5 space-y-3">
                {WE_DO.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-relaxed text-rhino-100/90"
                  >
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-rhino-900">
                      <Check className="size-3" strokeWidth={3} aria-hidden />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-500">
                What partners don&apos;t get
              </p>
              <ul className="mt-5 space-y-3">
                {WE_DONT.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-relaxed text-rhino-100/90"
                  >
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-rhino-900 text-yellow-500 ring-1 ring-yellow-500/40">
                      <X className="size-3" strokeWidth={3} aria-hidden />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-rhino-100/80">
            We protect the community&apos;s attention because that&apos;s the
            asset we&apos;re actually selling: to ourselves, to members, and
            to partners. A partner who&apos;d rather we didn&apos;t protect it
            isn&apos;t the partner we&apos;re looking for.
          </p>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              The questions we get asked first.
            </h2>
          </div>

          <dl className="mt-12 grid gap-4 md:grid-cols-2">
            {PARTNER_FAQ.map((item) => (
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

      {/* ── Final CTA ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-yellow-50 py-24 md:py-28">
        <div className="relative mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl md:mx-auto md:text-center">
            <h2 className="font-display text-3xl font-bold leading-tight text-rhino-700 md:text-5xl">
              Tell us what you&apos;re trying to do.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              We&apos;ll point you at the right surface: sponsorship, hiring,
              co-program, or a custom mix. No deck, no pitch funnel, just a
              short conversation.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 md:justify-center">
              <a
                href={emailHref("Partner inquiry")}
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-rhino-700 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-rhino-600"
              >
                Email the team
                <ArrowRight className="size-4" aria-hidden />
              </a>
              <BookCallButton
                link={PARTNER_CAL_LINK}
                variant="primary"
                size="lg"
              >
                Or book a 15-min call
                <ArrowRight className="size-4" aria-hidden />
              </BookCallButton>
            </div>
            <p className="mt-6 text-sm text-neutral-500 md:text-center">
              Email goes to{" "}
              <span className="font-mono text-rhino-700">{PARTNER_EMAIL}</span>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
