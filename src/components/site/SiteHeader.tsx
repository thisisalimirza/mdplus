"use client";

import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { MobileMenu, type NavItem, type NavChild } from "./MobileMenu";
import { NavDropdown, type DropdownItem } from "./NavDropdown";
import { COMMUNITIES } from "@/data/communities";
import { LEARN_SECTIONS } from "@/data/learn-sections";
import { PROGRAMS_SECTIONS } from "@/data/programs-sections";
import { ABOUT_SECTIONS } from "@/data/about-sections";
import { COMMUNITY_ICON } from "@/lib/community-icons";

// Mobile children — lighter than desktop dropdown items (no descriptions —
// drawer is narrow). Same data sources, just mapped differently.
const COMMUNITY_CHILDREN: NavChild[] = COMMUNITIES.map((c) => ({
  href: `/community/${c.slug}`,
  title: c.name,
  icon: COMMUNITY_ICON[c.slug],
}));

const LEARN_CHILDREN: NavChild[] = LEARN_SECTIONS.map((s) => ({
  href: s.href,
  title: s.title,
  icon: s.icon,
}));

const PROGRAMS_CHILDREN: NavChild[] = PROGRAMS_SECTIONS.map((p) => ({
  href: p.href,
  title: p.title,
  icon: p.icon,
  badge: p.status,
}));

const ABOUT_CHILDREN: NavChild[] = ABOUT_SECTIONS.map((s) => ({
  href: s.href,
  title: s.title,
  icon: s.icon,
}));

const MOBILE_NAV: readonly NavItem[] = [
  { href: "/community", label: "Community", children: COMMUNITY_CHILDREN },
  { href: "/events", label: "Events" },
  { href: "/skills", label: "Skills" },
  { href: "/learn", label: "Learn", children: LEARN_CHILDREN },
  { href: "/programs", label: "Programs", children: PROGRAMS_CHILDREN },
  { href: "/about", label: "About", children: ABOUT_CHILDREN },
  { href: "/partners", label: "Partners" },
];

// Map each shared data source into the dropdown shape. The hub pages
// import the same data, so adding a community / learn-section /
// program / about-section automatically flows through to both places.
const COMMUNITY_DROPDOWN: DropdownItem[] = COMMUNITIES.map((c) => ({
  href: `/community/${c.slug}`,
  title: c.name,
  description: c.tagline,
  icon: COMMUNITY_ICON[c.slug],
}));

const LEARN_DROPDOWN: DropdownItem[] = LEARN_SECTIONS.map((s) => ({
  href: s.href,
  title: s.title,
  description: s.body,
  icon: s.icon,
}));

const PROGRAMS_DROPDOWN: DropdownItem[] = PROGRAMS_SECTIONS.map((p) => ({
  href: p.href,
  title: p.title,
  description: p.body,
  icon: p.icon,
  badge: p.status,
}));

const ABOUT_DROPDOWN: DropdownItem[] = ABOUT_SECTIONS.map((s) => ({
  href: s.href,
  title: s.title,
  description: s.body,
  icon: s.icon,
}));

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-100 bg-neutral-0/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-(--container-max) items-center justify-between px-6">
        <Wordmark />

        <nav
          aria-label="Primary"
          className="hidden items-center md:flex"
        >
          <ul className="flex items-center gap-1">
            <NavDropdown
              href="/community"
              label="Community"
              items={COMMUNITY_DROPDOWN}
            />
            <li>
              <Link
                href="/events"
                className="inline-flex rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-rhino-700"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="inline-flex rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-rhino-700"
              >
                Skills
              </Link>
            </li>
            <NavDropdown
              href="/learn"
              label="Learn"
              items={LEARN_DROPDOWN}
            />
            <NavDropdown
              href="/programs"
              label="Programs"
              items={PROGRAMS_DROPDOWN}
            />
            <NavDropdown
              href="/about"
              label="About"
              items={ABOUT_DROPDOWN}
            />
            <li>
              <Link
                href="/partners"
                className="inline-flex rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-rhino-700"
              >
                Partners
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-rhino-700 md:inline-block"
          >
            Sign in
          </Link>
          <Link
            href="/join"
            className="hidden items-center justify-center rounded-md bg-denim-500 px-4 py-2 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-denim-600 active:bg-denim-700 md:inline-flex"
          >
            Join free
          </Link>
          <Link
            href="/join"
            className="inline-flex items-center justify-center rounded-md bg-denim-500 px-3 py-1.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-denim-600 active:bg-denim-700 md:hidden"
          >
            Join free
          </Link>
          <MobileMenu nav={MOBILE_NAV} />
        </div>
      </div>
    </header>
  );
}
