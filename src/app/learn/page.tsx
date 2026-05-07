import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";

export const metadata: Metadata = { title: "Learn" };

const SECTIONS = [
  {
    href: "/learn/blog",
    title: "Blog",
    body: "Member-authored essays on the cross-section of medicine and innovation.",
  },
  {
    href: "/learn/podcast",
    title: "Podcast",
    body: "Conversations with physicians, founders, and operators in healthtech.",
  },
  {
    href: "/learn/newsletter",
    title: "Newsletter",
    body: "Weekly insights — designed for people who aren't (yet) in the Slack.",
  },
  {
    href: "/learn/journal-club",
    title: "Journal Club",
    body: "Recurring deep-dives into the latest data + AI papers in medicine.",
  },
  {
    href: "/learn/publications",
    title: "Publications",
    body: "Peer-reviewed research from MDplus Datathons and member work.",
  },
] as const;

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Read, listen, and ship."
        description="Everything we publish — long-form, audio, weekly briefings, and the journal club — in one place."
      />
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SECTIONS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group block rounded-lg border border-neutral-200 bg-neutral-0 p-6 transition-all hover:-translate-y-0.5 hover:border-denim-300 hover:shadow-md"
              >
                <h2 className="font-display text-xl font-bold text-rhino-700 group-hover:text-denim-700">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {s.body}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-denim-600">
                  Coming soon →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
