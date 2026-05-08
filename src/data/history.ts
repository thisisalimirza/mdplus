/**
 * Timeline of MDplus milestones, used by /about/history.
 *
 * Grouped by era for visual rhythm. Each milestone is short by design —
 * the page is about scanning the org's arc, not reading a textbook.
 *
 * Data source: internal MD+ knowledge base (Org History & Timeline doc,
 * March 2026).
 */

export type HistoryMilestone = {
  date: string;
  title: string;
  body: string;
};

export type HistoryEra = {
  label: string;
  range: string;
  intro: string;
  milestones: HistoryMilestone[];
};

export const HISTORY: HistoryEra[] = [
  {
    label: "Founding",
    range: "2019–2020",
    intro:
      "Four medical students in New York start informal meetups and a Slack. By the time MDplus goes public in May 2020, it's a community of ten founding members.",
    milestones: [
      {
        date: "Aug 27, 2019",
        title: "Slack workspace created",
        body: "Sherman Leung sets up the original MD++ Slack — the workspace that's still the gravitational center of the community five years later.",
      },
      {
        date: "Oct 2, 2019",
        title: "First meetup in NYC",
        body: "About 20–30 non-traditional medical students gather in New York for the first in-person MDplus event. Co-founders Sherman Leung, Sarah Zweifach, Omar Njie, and Walter Hsiang are all there.",
      },
      {
        date: "May 2020",
        title: "Public launch",
        body: "MD++ launches publicly with 10 founding members. Sherman publishes \"Introducing MD++\" on Medium, framing the community as the bridge between clinical medicine and tech, business, and policy.",
      },
    ],
  },
  {
    label: "Early growth",
    range: "2021–2022",
    intro:
      "The community grows from a few hundred to 1,400+ members in a year. The first formal exec team forms; the first competitions launch.",
    milestones: [
      {
        date: "June 2021",
        title: "First Innovation Challenge",
        body: "50+ medical students compete across digital health, data, and devices tracks. The first event with industry partners (AlleyCorp).",
      },
      {
        date: "Oct–Nov 2021",
        title: "Roivant Sciences Innovation Challenge",
        body: "70+ participants. Winners — Annovate, Food Farmacy, EyeWonder — get follow-up partnerships with Roivant.",
      },
      {
        date: "January 2022",
        title: "Inaugural Datathon",
        body: "200+ medical students compete on the National Inpatient Sample dataset. The Datathon — now MDplus's flagship event — is born under data-science director Lathan Liou and AI director Katie Link.",
      },
      {
        date: "2022",
        title: "Rebrand to MD+ and website launch",
        body: "MD++ becomes MD+. mdplus.community goes live. The first executive team grows to 29 members.",
      },
    ],
  },
  {
    label: "Maturation",
    range: "2023–2024",
    intro:
      "Membership crosses 4,000. The Podcast launches. The Datathon model gets peer-reviewed. Leadership transitions twice — from founder era to institutional era.",
    milestones: [
      {
        date: "June 2023",
        title: "MD+ Podcast launches",
        body: "Hosted by Geoff Bocobo, MD. Three formats: Founder Stories, Fireside Chats, and Trainee Decision Points. Available on Spotify.",
      },
      {
        date: "Oct–Nov 2023",
        title: "2nd Annual Datathon",
        body: "Theme: Value-Based Care. 28 teams using MIMIC-IV. Solidifies the Datathon as the org's signature program.",
      },
      {
        date: "March 2024",
        title: "Leadership transitions",
        body: "Clara Sun + Steve Stephen become co-chairs, succeeding Lathan + Clara. Lathan moves to VP of Finance — the first non-founder leadership generation is fully in place.",
      },
      {
        date: "Oct 24, 2024",
        title: "Let's Talk Digital 2024",
        body: "First MDplus national conference. In-person, focused on digital health, healthcare innovation, and policy.",
      },
      {
        date: "Nov 2024",
        title: "3rd Annual Datathon",
        body: "First Datathon with multiple competition tracks. Pitch competition held November 18.",
      },
    ],
  },
  {
    label: "Current era",
    range: "2025–2026",
    intro:
      "Academic recognition, ~5,000 members, eight active verticals, 14 regional chapters. The org enters institutional maturity.",
    milestones: [
      {
        date: "March 2025",
        title: "Datathon model published in JMIR Medical Education",
        body: "\"Leveraging Datathons to Teach AI in Undergraduate Medical Education\" lands in a peer-reviewed journal — formal academic validation of the Datathon as a model for medical education.",
      },
      {
        date: "April 2025",
        title: "Match Panel with Thalamus",
        body: "100+ participants. The first major event under the new Steve + Arvind co-chair pairing.",
      },
      {
        date: "Oct–Nov 2025",
        title: "4th Annual Datathon",
        body: "Theme: \"Empowering Patients Through AI.\" 31 teams, ~300 participants from multiple countries. Gold sponsors: Doximity, Inflo Health. Largest and most internationally represented Datathon to date.",
      },
      {
        date: "February 2026",
        title: "2026–27 leadership recruitment opens",
        body: "First systematic, application-based exec team recruitment process. Marks the formalization of succession planning that earlier transitions handled informally.",
      },
    ],
  },
];

export const LEADERSHIP_ERAS = [
  {
    years: "2021–2022",
    coChairs: "Sherman Leung (sole chair)",
    teamSize: 15,
    note: "Founding executive team formed",
  },
  {
    years: "2022–2023",
    coChairs: "Sherman Leung + Lathan Liou",
    teamSize: 29,
    note: "Major expansion; team nearly doubles",
  },
  {
    years: "2023–2024",
    coChairs: "Lathan Liou + Clara Sun",
    teamSize: 23,
    note: "Right-sizing; Sherman steps back",
  },
  {
    years: "2024–2025",
    coChairs: "Clara Sun + Steve Stephen",
    teamSize: 24,
    note: "Third generation of leadership",
  },
  {
    years: "2025–2026",
    coChairs: "Steve Stephen + Arvind Rajan",
    teamSize: 27,
    note: "Operations and Alumni roles added",
  },
] as const;

export const GROWTH_NUMBERS = [
  { year: "2019", count: "20–50", note: "Pre-launch meetups" },
  { year: "2020", count: "10", note: "Public launch" },
  { year: "2021", count: "1,400+", note: "Explosive growth year" },
  { year: "2022", count: "2,500", note: "Geographic expansion begins" },
  { year: "2023", count: "4,200+", note: "Podcast + regional footprint" },
  { year: "2025", count: "~5,000", note: "International reach" },
] as const;
