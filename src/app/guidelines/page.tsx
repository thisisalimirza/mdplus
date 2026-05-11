import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";

export const metadata: Metadata = { title: "Community guidelines" };

const RULES = [
  {
    title: "DMs are welcomed.",
    body: "We're a community where one-on-one outreach is encouraged, whether it's mentorship, advice, or a project pitch. Be respectful, but don't be afraid to reach out.",
  },
  {
    title: "Self-promotion is discouraged.",
    body: "Sharing your work is fine when it's relevant and rare. Mass-broadcasting your startup, blog, or job board across multiple channels is not.",
  },
  {
    title: "Spam will get you removed.",
    body: "We'd rather have a smaller community of people who are genuinely here than a noisy one. Recruiters, vendors, and crypto/affiliate spam will be banned.",
  },
] as const;

export default function GuidelinesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guidelines"
        title="How we behave here."
        description="Three simple rules that keep the community valuable for everyone in it. We enforce them lightly but consistently."
      />
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {RULES.map((r) => (
              <article
                key={r.title}
                className="rounded-lg border border-neutral-200 bg-neutral-0 p-8"
              >
                <h2 className="font-display text-xl font-bold text-rhino-700">
                  {r.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {r.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-12 max-w-2xl text-sm text-neutral-500">
            Violations are handled by the moderator team. If you see something
            that doesn&apos;t fit these guidelines, ping any moderator in
            Slack. We appreciate the heads-up.
          </p>
        </div>
      </section>
    </>
  );
}
