/**
 * Team roster for /about/team. Edit this file to update the page.
 *
 * CURRENT_TEAM reflects the active 2026–27 executive team.
 * PAST_YEARS is an append-only log: add each outgoing year here
 * so past members stay discoverable (and indexable).
 * FOUNDERS is static.
 */

export type RoleTier = "co-chair" | "vp" | "director";

export type CurrentMember = {
  name: string;
  role: string;
  tier: RoleTier;
  vertical?: string;
  school?: string;
  bio?: string;
  plus?: string;
  imageSrc?: string;
};

export type Founder = {
  name: string;
  role: "Co-Founder";
  bio: string;
};

export type HistoricalMember = {
  name: string;
  role: string;
  school?: string;
};

export type PastYear = {
  year: string;
  members: HistoricalMember[];
};

export const CURRENT_YEAR = "2026–27";

export const CURRENT_TEAM: CurrentMember[] = [
  // ── Co-Chairs ─────────────────────────────────────────────
  {
    name: "Arvind Rajan",
    role: "Co-Chair",
    tier: "co-chair",
    school: "UNC School of Medicine",
    bio: "MD candidate at UNC on leave working in healthcare AI at Doximity. Researches racial disparities in cancer care and clinical AI in medical education.",
    plus: "Healthcare AI — how it can transform both medical education and clinical workflows.",
  },
  {
    name: "Emily Leventhal",
    role: "Co-Chair",
    tier: "co-chair",
    school: "Icahn School of Medicine at Mount Sinai",
    bio: "MD-PhD student leveraging genetics, clinical data, and AI to advance women's health and mental health research. Led two national datathons and co-directed courses on ethical AI and modern medical ethics.",
    plus: "AI and ethics — building models that will meaningfully advance the future of women's health.",
  },

  // ── Vice Presidents — Operations ──────────────────────────
  {
    name: "Kaden Bunch",
    role: "VP of Operations",
    tier: "vp",
    school: "Brown University / Warren Alpert Medical School",
    bio: "MS2 with an MBA in operations and entrepreneurship. Researches ML and LLMs for predicting mental health conditions. Led vision screening initiatives for underserved communities.",
  },
  {
    name: "Veer Shah",
    role: "VP of Operations",
    tier: "vp",
    school: "Icahn School of Medicine at Mount Sinai",
  },

  // ── Vice Presidents — External Relations ──────────────────
  {
    name: "Ali Mirza",
    role: "VP of External Relations",
    tier: "vp",
    school: "UConn School of Medicine",
    bio: "MD candidate who published two ML papers and built Rounds (100 DAU) and Sitr (1,000+ peak users). Former PM at Epic; founded a marketing agency at $250K ARR. Pursuing Cardiology.",
  },
  {
    name: "Kush Patel",
    role: "VP of External Relations",
    tier: "vp",
    school: "University of Miami Miller School of Medicine",
    bio: "MD/MBA candidate focused on interventional oncology and emerging technologies for targeted chemotherapy delivery. Deal Analyst with the Cane Angel Network.",
  },
  {
    name: "Rishma Jivan",
    role: "VP of External Relations",
    tier: "vp",
    school: "Rush Medical College",
    bio: "Five years at Augmedix and Lyra Health before medicine. M4 Chair of Rush AI in Medicine developing a four-year longitudinal AI curriculum. Speaker and advisor to early-stage health tech startups.",
  },

  // ── Vice Presidents — Growth ──────────────────────────────
  {
    name: "Jennifer Ipe",
    role: "VP of Growth",
    tier: "vp",
  },
  {
    name: "Sathiyaa Balachandran",
    role: "VP of Growth",
    tier: "vp",
  },

  // ── Vice Presidents — Community ───────────────────────────
  {
    name: "Maya Roytman",
    role: "VP of Community",
    tier: "vp",
    school: "Loyola University Chicago / Stritch School of Medicine",
    bio: "MD/MA in Bioethics and Health Policy candidate. Former AI Clinical Fellow and Deputy Safety, Ethics, and Alignment Lead at Glass Health.",
  },
  {
    name: "Ishani Bansal",
    role: "VP of Community",
    tier: "vp",
    school: "Icahn School of Medicine at Mount Sinai",
  },

  // ── Directors — AI & Data Science ─────────────────────────
  {
    name: "Joshua Robert",
    role: "Director",
    tier: "director",
    vertical: "AI & Data Science",
    school: "Texas A&M / EnMed",
    bio: "MD/MEng candidate and Editor-in-Chief of the Journal for AI in Medicine (JAIM). Research in neuromodulation, cardiovascular risk modeling, and surgical safety systems.",
    plus: "Moving AI beyond research into practical infrastructure for medicine — tools that augment physicians rather than replace them.",
  },
  {
    name: "Brandon Ye",
    role: "Director",
    tier: "director",
    vertical: "AI & Data Science",
    school: "Johns Hopkins University School of Medicine",
    bio: "MS1 with BS/MS in computational biology from USC. Research in surgical outcomes, brain-computer interfaces, and AI-enabled medical devices.",
    plus: "Sustaining dialogues between physicians, scientists, and policymakers on the ethical deployment of AI at the bedside.",
  },
  {
    name: "Alice Yu",
    role: "Director",
    tier: "director",
    vertical: "AI & Data Science",
    school: "Carle Illinois College of Medicine / UIUC",
    bio: "MS1 and former Amazon software engineer applying a bioinformatics background to clinical informatics and health tech. Active in the startup and hackathon community.",
    plus: "Tech and healthcare innovation — applying software engineering at scale to improve clinical workflows and delivery.",
  },

  // ── Directors — Health Policy ──────────────────────────────
  {
    name: "Ankith Alluri",
    role: "Director",
    tier: "director",
    vertical: "Health Policy",
    school: "Drexel University College of Medicine",
    bio: "M1 who founded The Full Picture, a 30+ student initiative teaching policy and systems aspects of medicine. Organizes advocacy with UN Shot@Life for global vaccine access.",
  },
  {
    name: "Uswa Khan",
    role: "Director",
    tier: "director",
    vertical: "Health Policy",
    school: "Washington University School of Medicine",
  },

  // ── Directors — Venture Capital ────────────────────────────
  {
    name: "Aneri Kothari",
    role: "Director",
    tier: "director",
    vertical: "Venture Capital",
    school: "UNC School of Medicine",
    bio: "MD/MBA candidate with a background in healthcare VC evaluating digital health and clinical startups. Focused on medical devices and women's health in obstetrics and gynecology.",
    plus: "Translating bedside learning into solutions that improve care at scale — through building, investing, or shaping how innovations enter clinical practice.",
  },

  // ── Directors — Medical Devices ───────────────────────────
  {
    name: "Aliya Shabbir",
    role: "Director",
    tier: "director",
    vertical: "Medical Devices",
    school: "Harvard Medical School",
    bio: "MS3 with clinical trials coordination experience prior to medical school.",
  },

  // ── Directors — Biotech ───────────────────────────────────
  {
    name: "Shannon McLaughlin",
    role: "Director",
    tier: "director",
    vertical: "Biotech",
  },

  // ── Directors — Research ──────────────────────────────────
  {
    name: "Adam Elsayed",
    role: "Director",
    tier: "director",
    vertical: "Research",
    school: "Penn State College of Medicine",
  },
  {
    name: "Samantha Mallahan",
    role: "Director",
    tier: "director",
    vertical: "Research",
    school: "Loyola University Chicago / Stritch School of Medicine",
    bio: "MS1 with a biomedical engineering degree from Vanderbilt. Former data analyst at Tempus AI. Interned at Fogarty Innovation with FemTech startup Materna Medical.",
  },

  // ── Directors — Consulting ────────────────────────────────
  {
    name: "Eshita Garg",
    role: "Director",
    tier: "director",
    vertical: "Consulting",
    school: "Wright State University / Boonshoft School of Medicine",
    bio: "MS4 with a BS from UC San Diego and MS from Columbia. Transitioning to management consulting after graduation.",
    plus: "Biotech innovation, AI, and consulting — building toward a career that doesn't pick just one lane.",
  },
  {
    name: "Kai Thomas",
    role: "Director",
    tier: "director",
    vertical: "Consulting",
    school: "University of Central Florida College of Medicine",
    bio: "MS1 with a surgical technician background. Interning at NeXtGen Biologics on novel bone products for spine surgeries and exploring orthopedic research at UCSF.",
    plus: "Medical device development and the critical role physicians play in the R&D process.",
  },

  // ── Directors — Alumni Engagement ─────────────────────────
  {
    name: "Connor Alder",
    role: "Director",
    tier: "director",
    vertical: "Alumni Engagement",
    school: "Washington University School of Medicine",
    bio: "M2 building ventures at medicine's edge, including Brivy, an AI clinical scribe for therapists. Researches cost-effectiveness of ophthalmology interventions in sub-Saharan Africa.",
    plus: "Healthcare startups — AI as a means to improve access and equity in global ophthalmology.",
  },
  {
    name: "Rohan Chandraghatgi",
    role: "Director",
    tier: "director",
    vertical: "Alumni Engagement",
    school: "Drexel University College of Medicine",
    bio: "MS1. Computational drug discovery and digital pathology research at Mayo Clinic; now at Penn Medicine investigating data drift detection in digital pathology AI models.",
    plus: "Building robust AI technologies that perform reliably in real clinical environments — systems that help health systems deploy diagnostic support safely.",
  },
];

export const FOUNDERS: Founder[] = [
  {
    name: "Sherman Leung",
    role: "Co-Founder",
    bio: "Founded MD+ in 2019 at Mount Sinai. Stanford CS → MS in Management Science → vaccine researcher at NIH → PM at PatientPing → healthcare investor at AlleyCorp. Now an Emergency Medicine resident at Stanford and Venture Fellow at a16z bio+health.",
  },
  {
    name: "Sarah Zweifach",
    role: "Co-Founder",
    bio: "NYU MD/MBA. One of the four co-founders at the October 2019 founding meetup. Built the early events operation that turned the Slack into a real community.",
  },
  {
    name: "Omar Njie",
    role: "Co-Founder",
    bio: "Mount Sinai. Co-founded MD+ at the 2019 founding meetup; contributed to early community building.",
  },
  {
    name: "Walter Hsiang",
    role: "Co-Founder",
    bio: "Yale MD/MBA. Co-founded MD+ at the 2019 founding meetup.",
  },
];

/**
 * Append-only record of past executive teams.
 * Newest year first. Used to render the collapsible history section.
 */
export const PAST_YEARS: PastYear[] = [
  {
    year: "2025–26",
    members: [
      { name: "Steve Stephen", role: "Co-Chair", school: "University of Rochester" },
      { name: "Arvind Rajan", role: "Co-Chair", school: "UNC School of Medicine" },
      { name: "Lathan Liou", role: "VP of Finance", school: "Icahn School of Medicine" },
      { name: "Maya Roytman", role: "VP of Community", school: "Loyola Chicago" },
      { name: "Ethan Zhu", role: "VP of Community" },
      { name: "Kaden Bunch", role: "VP of Operations", school: "Brown / Warren Alpert" },
      { name: "Veer Shah", role: "VP of Operations", school: "Icahn School of Medicine" },
      { name: "Ann Marie Flusche", role: "VP of External Relations" },
      { name: "Aditya Jain", role: "VP of External Relations" },
      { name: "Jennifer Ipe", role: "VP of Growth" },
      { name: "Mitali Shroff", role: "VP of Growth" },
      { name: "Bhavana Kunisetty", role: "Director, AI & Data Science" },
      { name: "Sahil Suresh", role: "Director, AI & Data Science" },
      { name: "Emily Leventhal", role: "Director, AI & Data Science", school: "Icahn School of Medicine" },
      { name: "Jessika Baral", role: "Director, Venture Capital" },
      { name: "Sam Youkilis", role: "Director, Venture Capital" },
      { name: "Shannon McLaughlin", role: "Director, Biotech" },
      { name: "Mahima Goel", role: "Director, Medical Devices" },
      { name: "Archita Goyal", role: "Director, Health Policy" },
      { name: "Elena Dennis", role: "Director, Health Policy" },
      { name: "Esh Garg", role: "Director, Consulting" },
      { name: "Edward Kim", role: "Director, Consulting" },
      { name: "Devika Patel", role: "Director, Design" },
      { name: "Darshan Kalola", role: "Director, Alumni Engagement" },
      { name: "Owais Aftab", role: "Director, Alumni Engagement" },
      { name: "Adam Elsayed", role: "Director, Research" },
    ],
  },
];

// ── Derived helpers ──────────────────────────────────────────────────────────

export const CHAIRS = CURRENT_TEAM.filter((m) => m.tier === "co-chair");
export const VPS = CURRENT_TEAM.filter((m) => m.tier === "vp");
export const DIRECTORS = CURRENT_TEAM.filter((m) => m.tier === "director");

export const DIRECTOR_VERTICALS = [
  "AI & Data Science",
  "Health Policy",
  "Venture Capital",
  "Medical Devices",
  "Biotech",
  "Research",
  "Consulting",
  "Alumni Engagement",
] as const;

export type DirectorVertical = (typeof DIRECTOR_VERTICALS)[number];

export function directorsByVertical(vertical: DirectorVertical): CurrentMember[] {
  return DIRECTORS.filter((m) => m.vertical === vertical);
}
