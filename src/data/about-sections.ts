import {
  Users,
  History as HistoryIcon,
  HeartHandshake,
  Mail,
  Shield,
  type LucideIcon,
} from "lucide-react";

/**
 * Single source of truth for the About area. Both the /about hub page
 * and the navbar About dropdown render from this list. Add an entry
 * here and it appears in both surfaces.
 *
 * Note: some entries point at top-level pages (/partners, /contact,
 * /guidelines) rather than /about/* sub-routes — these live on the
 * About hub for discoverability.
 */
export type AboutSection = {
  icon: LucideIcon;
  href: string;
  title: string;
  body: string;
};

export const ABOUT_SECTIONS: AboutSection[] = [
  {
    icon: Users,
    href: "/about/team",
    title: "Team",
    body: "The folks running the place — current leadership and past directors.",
  },
  {
    icon: HistoryIcon,
    href: "/about/history",
    title: "History",
    body: "From a NYC dinner in October 2019 to a 5,000+ member national community — six years, four leadership generations, full timeline inside.",
  },
  {
    icon: HeartHandshake,
    href: "/about/donate",
    title: "Donate",
    body: "We're a 501(c)3 non-profit. Donations help us run programs and stay free.",
  },
  {
    icon: Mail,
    href: "/contact",
    title: "Contact",
    body: "Get in touch with the team — partnerships, press, general inquiries.",
  },
  {
    icon: Shield,
    href: "/guidelines",
    title: "Guidelines",
    body: "How we behave in the Slack and across the community.",
  },
];
