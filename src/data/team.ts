/**
 * Team roster for /about/team. Edit this file to update the page —
 * no engineering required. Each member can have an optional `imageSrc`
 * pointing to /public/team-headshots/<filename>; without it, the Avatar
 * component renders deterministic initials in a brand color.
 *
 * Data source: 2025-26 executive team roster from internal MD+ knowledge
 * base (March 2026). Bios are short by design — the team page uses card
 * layout. Where we have rich background, the bio mentions one or two
 * concrete things; where we don't, the role line speaks for itself.
 */

export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  imageSrc?: string;
  /** Mark for the "Founders" section. */
  founder?: boolean;
  /** Mark for the "Past leadership" section. */
  past?: boolean;
};

export const TEAM: TeamMember[] = [
  // ── Co-Chairs ───────────────────────────────────────
  {
    name: "Steve Stephen",
    role: "Co-Chair",
    bio: "MD/MBA candidate at University of Rochester. Third consecutive year in senior leadership: VP of External Relations (2023-24) → Co-Chair (2024-present). Medical student representative for Thalamus.",
  },
  {
    name: "Arvind Rajan",
    role: "Co-Chair",
    bio: "VP of Community (2024-25) → Co-Chair (2025-present). Owns strategy and growth, plus the broader knowledge base that feeds programs across the org.",
  },

  // ── VPs ─────────────────────────────────────────────
  {
    name: "Maya Roytman",
    role: "VP of Community",
  },
  {
    name: "Ethan Zhu",
    role: "VP of Community",
  },
  {
    name: "Lathan Liou",
    role: "VP of Finance",
    bio: "The longest-serving leader in MD+ history: 5 consecutive years. Director of Data Science (2021-22) → Co-Chair (2022-24) → VP of Finance (2024-present). Launched the MD+ Datathon, now in its 4th year. Mount Sinai MS4 (FlexMed).",
  },
  {
    name: "Kaden Bunch",
    role: "VP of Operations",
  },
  {
    name: "Veer Shah",
    role: "VP of Operations",
  },
  {
    name: "Ann Marie Flusche",
    role: "VP of External Relations",
  },
  {
    name: "Aditya Jain",
    role: "VP of External Relations",
  },
  {
    name: "Jennifer Ipe",
    role: "VP of Growth",
  },
  {
    name: "Mitali Shroff",
    role: "VP of Growth",
  },

  // ── Directors ───────────────────────────────────────
  {
    name: "Bhavana Kunisetty",
    role: "Director of AI & Data Science",
  },
  {
    name: "Sahil Suresh",
    role: "Director of AI & Data Science",
  },
  {
    name: "Emily Leventhal",
    role: "Director of AI & Data Science",
  },
  {
    name: "Jessika Baral",
    role: "Director of Venture Capital",
  },
  {
    name: "Sam Youkilis",
    role: "Director of Venture Capital",
  },
  {
    name: "Shannon McLaughlin",
    role: "Director of Biotech",
  },
  {
    name: "Mahima Goel",
    role: "Director of Medical Devices",
  },
  {
    name: "Archita Goyal",
    role: "Director of Health Policy",
  },
  {
    name: "Elena Dennis",
    role: "Director of Health Policy",
  },
  {
    name: "Esh Garg",
    role: "Director of Consulting",
  },
  {
    name: "Edward Kim",
    role: "Director of Consulting",
  },
  {
    name: "Devika Patel",
    role: "Director of Design",
  },
  {
    name: "Darshan Kalola",
    role: "Director of Alumni Engagement",
  },
  {
    name: "Owais Aftab",
    role: "Director of Alumni Engagement",
  },
  {
    name: "Adam Elsayed",
    role: "Director of Research",
  },

  // ── Founders ────────────────────────────────────────
  {
    name: "Sherman Leung",
    role: "Co-Founder",
    bio: "Founded MD+ in 2019 while at Mount Sinai. Stanford CS undergrad → MS in Management Science → vaccine researcher at NIH → early PM at PatientPing → healthcare investor at AlleyCorp. Now an Emergency Medicine resident at Stanford and Venture Fellow at a16z bio+health.",
    founder: true,
  },
  {
    name: "Sarah Zweifach",
    role: "Co-Founder",
    bio: "NYU MD/MBA. One of the four co-founders at the October 2019 founding meetup. Built the early events operation that turned the Slack into a real community.",
    founder: true,
  },
  {
    name: "Omar Njie",
    role: "Co-Founder",
    bio: "Mount Sinai. Co-founded MD+ at the 2019 founding meetup; contributed to early community building.",
    founder: true,
  },
  {
    name: "Walter Hsiang",
    role: "Co-Founder",
    bio: "Yale MD/MBA. Co-founded MD+ at the 2019 founding meetup.",
    founder: true,
  },

  // ── Past leadership ─────────────────────────────────
  {
    name: "Clara Sun",
    role: "Past Co-Chair (2023-2025)",
    bio: "VP of Community (2022-23) → Co-Chair with Lathan (2023-24) → Co-Chair with Steve (2024-25). The bridge between the founder era and the current leadership. Right-sized the executive team and held the org together through two leadership transitions.",
    past: true,
  },
  {
    name: "Kylie Long",
    role: "Past VP of Growth (2022-2026)",
    bio: "Four consecutive years as VP of Growth, the longest-serving Growth lead. Provided continuity through three different co-chair pairings.",
    past: true,
  },
];

export const CURRENT_TEAM = TEAM.filter((m) => !m.past && !m.founder);
export const FOUNDERS = TEAM.filter((m) => m.founder);
export const PAST_TEAM = TEAM.filter((m) => m.past);
