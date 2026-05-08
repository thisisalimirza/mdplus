import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { COMMUNITIES } from "@/data/communities";
import { LEARN_SECTIONS } from "@/data/learn-sections";
import { PROGRAMS_SECTIONS } from "@/data/programs-sections";
import { ABOUT_SECTIONS } from "@/data/about-sections";

// Footer groups source from the same data files as the navbar
// dropdowns + hub pages, so edits to a data file propagate to every
// surface automatically. Hub-link entries (Overview / All programs /
// About) are prepended; cross-section pages (For Partners) are
// appended where they belong.

const FOOTER_GROUPS = [
  {
    label: "Community",
    links: [
      { href: "/community", label: "Overview" },
      ...COMMUNITIES.map((c) => ({
        href: `/community/${c.slug}`,
        label: c.shortName ?? c.name,
      })),
    ],
  },
  {
    label: "Learn",
    links: LEARN_SECTIONS.map((s) => ({ href: s.href, label: s.title })),
  },
  {
    label: "Programs",
    links: [
      ...PROGRAMS_SECTIONS.map((p) => ({ href: p.href, label: p.title })),
      { href: "/programs", label: "All programs" },
      { href: "/membership", label: "Premium membership" },
    ],
  },
  {
    label: "Org",
    links: [
      { href: "/about", label: "About" },
      ...ABOUT_SECTIONS.map((s) => ({ href: s.href, label: s.title })),
      { href: "/partners", label: "For Partners" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-100 bg-neutral-50">
      <div className="mx-auto max-w-(--container-max) px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm text-neutral-500">
              The community for physicians and med students building in tech,
              data, AI, and entrepreneurship.
            </p>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.label}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-rhino-500">
                {group.label}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 transition-colors hover:text-denim-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-neutral-200 pt-8 text-sm text-neutral-500 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} MDplus. A 501(c)(3) non-profit.
          </p>
          <p>
            Skills Library lives at{" "}
            <a
              href="https://skills.mdplus.community"
              className="font-medium text-rhino-700 hover:text-denim-600"
            >
              skills.mdplus.community
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
