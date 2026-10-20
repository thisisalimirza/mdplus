import type { Metadata } from "next";
import {
  Megaphone,
  Handshake,
  Mic,
  UserPlus,
  Gift,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { PartnerInterestForm } from "./PartnerInterestForm";

export const metadata: Metadata = {
  title: "Partner with us",
  description:
    "Interested in sponsoring or partnering with MDplus on Catalyst, Datathon, FemTech, or something year-round? Tell us here and the team will follow up.",
};

const WAYS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Megaphone,
    title: "Event sponsorship",
    body: "Back Catalyst, Datathon, FemTech, or another MDplus event, with visibility to the members who show up.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    body: "Co-build a program, content series, or initiative that serves the community and your organization.",
  },
  {
    icon: Mic,
    title: "Speakers, judges + mentors",
    body: "Lend your team's expertise: judge a Datathon, mentor a Catalyst cohort, or speak at an event.",
  },
  {
    icon: UserPlus,
    title: "Recruiting",
    body: "Meet physicians and med students for roles at the cross-section of medicine and innovation.",
  },
  {
    icon: Gift,
    title: "In-kind support",
    body: "Credits, datasets, tools, venues, or prizes that make our programs better.",
  },
];

export default function PartnerInterestPage() {
  return (
    <>
      <PageHero
        variant="rhino"
        eyebrow="Partner with us"
        title={
          <>
            Work with MDplus,{" "}
            <span className="text-yellow-500">any time of year.</span>
          </>
        }
        description="Whether you want to sponsor a specific event or explore something new, tell us a bit about your organization. Your note goes straight to the MDplus executive team, and we keep it on file as new opportunities come up."
      />

      <section className="border-b border-neutral-100 bg-neutral-0 py-16 md:py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
              Ways to get involved
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
              Pick one, several, or none of the above.
            </h2>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WAYS.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="rounded-xl border border-neutral-200 bg-neutral-0 p-6 shadow-sm"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-denim-500 text-white">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-rhino-700">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 md:py-24" id="form">
        <div className="container-narrow">
          <h2 className="font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
            Tell us about your interest.
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Takes about two minutes. Fields marked{" "}
            <span aria-hidden className="text-red-600">*</span>
            <span className="sr-only">with an asterisk</span> are required.
          </p>
          <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-0 p-6 shadow-sm md:p-10">
            <PartnerInterestForm />
          </div>
          <p className="mt-6 text-sm text-neutral-500">
            Prefer email? Write to{" "}
            <a
              href="mailto:partnerships@mdplus.community"
              className="font-mono text-rhino-700 underline-offset-2 hover:underline"
            >
              partnerships@mdplus.community
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
