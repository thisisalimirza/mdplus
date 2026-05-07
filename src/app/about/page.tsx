import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";

export const metadata: Metadata = { title: "About" };

const SECTIONS = [
  {
    href: "/about/team",
    title: "Team",
    body: "The folks running the place — current leadership and past directors.",
  },
  {
    href: "/about/history",
    title: "History",
    body: "Where MDplus came from and how it became a 2,500+ member community.",
  },
  {
    href: "/about/donate",
    title: "Donate",
    body: "We're a 501(c)3 non-profit. Donations help us run programs and stay free.",
  },
  {
    href: "/partners",
    title: "For Partners",
    body: "Sponsor, hire, or partner — three audiences, three different pitches.",
  },
  {
    href: "/contact",
    title: "Contact",
    body: "Get in touch with the team — partnerships, press, general inquiries.",
  },
  {
    href: "/guidelines",
    title: "Guidelines",
    body: "How we behave in the Slack and across the community.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A 501(c)3 non-profit, built by physicians for physicians."
        description="MDplus exists to make the path from medicine into tech, data, AI, and entrepreneurship easier and less lonely. Everything we do laddders up to that."
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
