import Link from "next/link";
import { Wordmark } from "./Wordmark";

const FOOTER_GROUPS = [
  {
    label: "Community",
    links: [
      { href: "/community", label: "Overview" },
      { href: "/community/consulting", label: "Consulting" },
      { href: "/community/data", label: "Data + AI" },
      { href: "/community/vc", label: "Venture Capital" },
      { href: "/community/policy", label: "Policy" },
      { href: "/community/blockchain", label: "Blockchain / DeSci" },
      { href: "/community#meetups", label: "Meetups" },
    ],
  },
  {
    label: "Learn",
    links: [
      { href: "/learn/blog", label: "Blog" },
      { href: "/learn/podcast", label: "Podcast" },
      { href: "/learn/newsletter", label: "Newsletter" },
      { href: "/learn/journal-club", label: "Journal Club" },
      { href: "/learn/publications", label: "Publications" },
    ],
  },
  {
    label: "Programs",
    links: [
      { href: "/programs/catalyst", label: "Catalyst" },
      { href: "/programs", label: "Datathons" },
      { href: "/membership", label: "Premium membership" },
    ],
  },
  {
    label: "Org",
    links: [
      { href: "/about", label: "About" },
      { href: "/about/team", label: "Team" },
      { href: "/about/history", label: "History" },
      { href: "/partners", label: "For Partners" },
      { href: "/about/donate", label: "Donate" },
      { href: "/guidelines", label: "Guidelines" },
      { href: "/contact", label: "Contact" },
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
