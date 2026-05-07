import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";

export const metadata: Metadata = {
  title: "Join free",
  description:
    "Join 2,500+ physicians and med students building in tech, data, AI, and entrepreneurship.",
};

const STEPS = [
  {
    n: "1",
    title: "Tell us a little about you",
    body: "30-second profile — role, where you are in training, what you're curious about. We use it to route you into the right channels.",
  },
  {
    n: "2",
    title: "Get your Slack invite",
    body: "Instant invite to the MDplus Slack with 2,500+ members. We'll auto-join you to the sub-community channels you picked.",
  },
  {
    n: "3",
    title: "Lurk, then introduce yourself",
    body: "Take a few days to read. When you're ready, post in #intros — that's how most lasting connections start here.",
  },
] as const;

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Free, forever"
        title={
          <>
            Join the community.{" "}
            <span className="text-denim-600">Take a look around.</span>
          </>
        }
        description="No payment, no commitment. The Slack is where everything actually happens — programs, mentorship, hiring, deals, friendships."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="#start"
            className="inline-flex items-center justify-center rounded-md bg-denim-500 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
          >
            Start signup →
          </a>
          <Link
            href="/community"
            className="inline-flex items-center justify-center rounded-md border border-rhino-200 bg-neutral-0 px-6 py-3.5 text-base font-semibold text-rhino-700 transition-colors hover:border-rhino-300 hover:bg-neutral-50"
          >
            See what&apos;s inside first
          </Link>
        </div>
      </PageHero>

      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              How it works
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
              Three steps. Two minutes.
            </h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <li
                key={step.n}
                className="rounded-lg border border-neutral-200 bg-neutral-0 p-8"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-pill bg-yellow-500 font-display text-lg font-bold text-rhino-900">
                  {step.n}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-rhino-700">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <div
            id="start"
            className="mt-16 rounded-xl border border-yellow-200 bg-yellow-50 p-8 md:p-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
              Signup form
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold text-rhino-700 md:text-3xl">
              Coming next pass.
            </h3>
            <p className="mt-3 max-w-xl text-sm text-neutral-600">
              The proper signup flow (profile + Slack invite via SSO) is the
              next thing being wired up. Until then, message us on the current
              site or DM Ali for an invite.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
