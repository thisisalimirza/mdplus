import Link from "next/link";
import type { Metadata } from "next";
import {
  Mail,
  CalendarDays,
  MessagesSquare,
  ArrowRight,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { BookCallButton } from "@/components/marketing/BookCallButton";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Three ways to get in touch with MDplus — email, a 15-minute call, or just join the Slack community.",
};

// Single source of truth for outbound contact info. Update here if
// addresses or links change.
const CONTACT_EMAIL = "hello@mdplus.community";
const PARTNERSHIPS_EMAIL = "partnerships@mdplus.community";
const GENERAL_CAL_LINK = "mdplus/15min";

type ContactOption = {
  icon: LucideIcon;
  iconBg: string;
  iconText: string;
  eyebrow: string;
  title: string;
  body: string;
  bestFor: string[];
  cta: { type: "email"; address: string; subject: string; label: string }
       | { type: "cal"; link: string; label: string }
       | { type: "internal"; href: string; label: string };
};

const OPTIONS: ContactOption[] = [
  {
    icon: Mail,
    iconBg: "bg-denim-500",
    iconText: "text-white",
    eyebrow: "Most paths start here",
    title: "Email us",
    body: "Best for partnership inquiries, press, general questions, or anything that benefits from being written down. We respond within ~2 business days.",
    bestFor: [
      "Partnership and sponsorship inquiries",
      "Press, podcast, and interview requests",
      "Anything that needs context or attachments",
    ],
    cta: {
      type: "email",
      address: CONTACT_EMAIL,
      subject: "MDplus inquiry",
      label: "Send an email",
    },
  },
  {
    icon: CalendarDays,
    iconBg: "bg-yellow-500",
    iconText: "text-rhino-900",
    eyebrow: "When you'd rather just talk",
    title: "Book a 15-minute call",
    body: "If your question is genuinely faster on a call, pick a slot that works. We use these for partner discussions, press calls, and quick clarifying conversations.",
    bestFor: [
      "Partner discussions where back-and-forth would take days over email",
      "Press or podcast pre-interviews",
      "Quick clarifying questions on Catalyst, Datathon, or sponsorship",
    ],
    cta: {
      type: "cal",
      link: GENERAL_CAL_LINK,
      label: "See available times",
    },
  },
  {
    icon: MessagesSquare,
    iconBg: "bg-rhino-700",
    iconText: "text-white",
    eyebrow: "If you're trying to join MDplus",
    title: "Join the Slack",
    body: "Most member-related questions — about programs, communities, opportunities, or local events — answer themselves once you're in the Slack. It's free to join and that's where the community actually lives.",
    bestFor: [
      "\"Is MDplus right for me?\" → just look around",
      "Specific community questions (Biotech, VC, etc.)",
      "Connecting with other members directly",
    ],
    cta: {
      type: "internal",
      href: "/join",
      label: "Join free",
    },
  },
];

function ContactCard({ option }: { option: ContactOption }) {
  const Icon = option.icon;

  const cta = (() => {
    switch (option.cta.type) {
      case "email":
        return (
          <a
            href={`mailto:${option.cta.address}?subject=${encodeURIComponent(option.cta.subject)}`}
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-denim-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
          >
            {option.cta.label}
            <ArrowRight className="size-3.5" aria-hidden />
          </a>
        );
      case "cal":
        return (
          <BookCallButton link={option.cta.link} variant="primary">
            {option.cta.label}
            <ArrowRight className="size-3.5" aria-hidden />
          </BookCallButton>
        );
      case "internal":
        return (
          <Link
            href={option.cta.href}
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-denim-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
          >
            {option.cta.label}
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        );
    }
  })();

  return (
    <article className="flex flex-col rounded-xl border border-neutral-200 bg-neutral-0 p-7 md:p-8">
      <span
        className={`inline-flex size-12 items-center justify-center rounded-md ${option.iconBg} ${option.iconText}`}
      >
        <Icon className="size-6" aria-hidden />
      </span>
      <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-rhino-500">
        {option.eyebrow}
      </p>
      <h2 className="mt-2 font-display text-2xl font-bold text-rhino-700">
        {option.title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-neutral-600">
        {option.body}
      </p>

      <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-rhino-500">
        Best for
      </p>
      <ul className="mt-2 space-y-1.5">
        {option.bestFor.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2 text-sm leading-relaxed text-neutral-600"
          >
            <span
              aria-hidden
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-yellow-500"
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex-1" />

      <div className="mt-2">{cta}</div>
    </article>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Three paths in,{" "}
            <span className="text-denim-600">depending on what you need.</span>
          </>
        }
        description="MDplus is a small volunteer-led 501(c)(3). Picking the right path here saves everyone time — including you. Most inquiries are best by email; some are faster on a call; member-side questions usually answer themselves in the Slack."
      />

      {/* ── Three options ──────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-28">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {OPTIONS.map((opt) => (
              <ContactCard key={opt.title} option={opt} />
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-sm text-neutral-500">
            For partnership-specific questions — sponsorship pricing, hiring,
            or co-program proposals — the{" "}
            <Link
              href="/partners"
              className="font-medium text-denim-600 hover:text-denim-700"
            >
              Partners page
            </Link>{" "}
            has more detail and a dedicated{" "}
            <span className="font-mono text-rhino-700">
              {PARTNERSHIPS_EMAIL}
            </span>{" "}
            inbox.
          </p>
        </div>
      </section>

      {/* ── How to write a good message ────────────────────── */}
      <section className="bg-yellow-50 py-20 md:py-24">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-yellow-700">
                One ask
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-rhino-700 md:text-4xl">
                Help us help you faster.
              </h2>
              <p className="mt-6 text-lg text-neutral-600">
                MDplus runs on volunteer time. The clearer your first message,
                the faster you get a useful response — usually same-day for
                well-scoped inquiries.
              </p>
            </div>
            <div className="rounded-xl border border-yellow-200 bg-neutral-0 p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-rhino-500">
                A good first email tells us:
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Who you are and the org you're with",
                  "What you're trying to do (the actual goal, not just the ask)",
                  "Rough timeline or urgency",
                  "Optional: budget range, if relevant",
                ].map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-neutral-700"
                  >
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-yellow-500 font-display text-xs font-bold text-rhino-900">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ────────────────────────────────────── */}
      <section className="bg-neutral-0 py-20 md:py-24">
        <div className="mx-auto max-w-(--container-max) px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-xl border border-neutral-200 bg-neutral-50 p-8 md:p-10">
            <div className="max-w-xl">
              <h2 className="font-display text-xl font-bold text-rhino-700 md:text-2xl">
                Still not sure which one?
              </h2>
              <p className="mt-2 text-base text-neutral-600">
                Default to email. We&apos;ll route you to the right path.
              </p>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("MDplus inquiry")}`}
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-rhino-700 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-rhino-600"
            >
              Email {CONTACT_EMAIL}
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
