import {
  FileText,
  Mic,
  Mail,
  BookMarked,
  Award,
  type LucideIcon,
} from "lucide-react";

/**
 * Single source of truth for what's under /learn. Both the /learn hub
 * page and the navbar dropdown render from this list — add a new entry
 * here and it appears in both surfaces with no further config.
 */
export type LearnSection = {
  href: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

export const LEARN_SECTIONS: LearnSection[] = [
  {
    href: "/learn/blog",
    title: "Blog",
    body: "Member-authored essays on the cross-section of medicine and innovation.",
    icon: FileText,
  },
  {
    href: "/learn/podcast",
    title: "Podcast",
    body: "Conversations with physicians, founders, and operators in healthtech.",
    icon: Mic,
  },
  {
    href: "/learn/newsletter",
    title: "Newsletter",
    body: "Weekly insights — designed for people who aren't (yet) in the Slack.",
    icon: Mail,
  },
  {
    href: "/learn/journal-club",
    title: "Journal Club",
    body: "Recurring deep-dives into the latest data + AI papers in medicine.",
    icon: BookMarked,
  },
  {
    href: "/learn/publications",
    title: "Publications",
    body: "Peer-reviewed research from MDplus Datathons and member work.",
    icon: Award,
  },
];
