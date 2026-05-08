import {
  Zap,
  Trophy,
  BookMarked,
  type LucideIcon,
} from "lucide-react";

/**
 * Single source of truth for what's under /programs. Both the /programs
 * hub page and the navbar dropdown render from this list. Status flags
 * surface as pills on cards and badges in the dropdown.
 */
export type ProgramSection = {
  href: string;
  title: string;
  body: string;
  icon: LucideIcon;
  status: "Live" | "Annual" | "Recurring";
};

export const PROGRAMS_SECTIONS: ProgramSection[] = [
  {
    icon: Zap,
    href: "/programs/catalyst",
    title: "Catalyst",
    body: "Our flagship program. A cohort-based experience for physicians and med students serious about taking on real work.",
    status: "Live",
  },
  {
    icon: Trophy,
    href: "/programs/datathon",
    title: "Datathon",
    body: "Annual month-long AI competition on real clinical datasets. 4th edition in 2025 had ~300 participants. Model published in JMIR Medical Education.",
    status: "Annual",
  },
  {
    icon: BookMarked,
    href: "/learn/journal-club",
    title: "Journal Club",
    body: "Structured paper deep-dives. Read together, discuss, publish.",
    status: "Recurring",
  },
];
