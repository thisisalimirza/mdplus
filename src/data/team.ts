/**
 * Team roster for /about/team. Edit this file to update the page —
 * no engineering required. Each member can have an optional `imageSrc`
 * pointing to /public/team-headshots/<filename>; without it, the Avatar
 * component renders deterministic initials in a brand color.
 *
 * NOTE: Names below are placeholder/demo names while real bios and
 * headshots are gathered. Replace before launch.
 */

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
  /** Set to true to surface in the "Past leadership" section instead. */
  past?: boolean;
};

export const TEAM: TeamMember[] = [
  // ── Current leadership ──────────────────────────────
  {
    name: "Dr. Maya Chen",
    role: "President & Co-founder",
    bio: "Internal medicine resident moving into healthtech. Started MDplus to make the path she took less lonely for the next person.",
  },
  {
    name: "Dr. Priya Rao",
    role: "VP of Community",
    bio: "Pediatrician and former management consultant. Owns the member experience — onboarding, regional meetups, and Slack culture.",
  },
  {
    name: "Jordan Patel",
    role: "VP of Programs",
    bio: "MS3 at a top-10 med school. Runs Catalyst, datathons, and the broader programs calendar.",
  },
  {
    name: "Kai Yamamoto",
    role: "Director of Data + AI",
    bio: "Radiology resident with a CS background. Curates the AI/ML tutorial library and runs the Journal Club.",
  },
  {
    name: "Devin Harper",
    role: "Director of Consulting",
    bio: "MD candidate and former BCG MD Scholar. Mentors members on case prep and the transition into MBB.",
  },
  {
    name: "Dr. Naomi Brooks",
    role: "Director of Health Policy",
    bio: "Family medicine attending and policy fellow. Hosts the policy podcast segment and runs the op-ed writing groups.",
  },
  {
    name: "Sam Rodriguez",
    role: "Director of Catalyst",
    bio: "Cardiology fellow. Designs the cohort curriculum and matches members with mentors and projects.",
  },
  {
    name: "Alex Reeves",
    role: "Director of Newsletter",
    bio: "PGY-2 with a writing background. Curates and edits the weekly briefing.",
  },
  {
    name: "Emma Whitaker",
    role: "Director of Venture Capital",
    bio: "MD/MBA candidate, prior healthtech investor. Maintains the investor database and runs VC office hours.",
  },
  {
    name: "Marcus Lee",
    role: "Director of Blockchain / DeSci",
    bio: "PhD candidate working at the intersection of decentralized science and clinical research. Hosts speaker sessions on DeSci applications in medicine.",
  },

  // ── Past leadership ─────────────────────────────────
  {
    name: "Dr. Eric Morton",
    role: "Past President (2022–2024)",
    bio: "One of the original co-founders. Now an attending and advisor to MDplus.",
    past: true,
  },
  {
    name: "Dr. Sofia Lin",
    role: "Past VP of Programs (2023–2024)",
    bio: "Built the first version of Catalyst. Now leading clinical AI efforts at a healthtech startup.",
    past: true,
  },
];

export const CURRENT_TEAM = TEAM.filter((m) => !m.past);
export const PAST_TEAM = TEAM.filter((m) => m.past);
