/**
 * Source of truth for sub-community content. Edit this file to update any
 * community page — no engineering required, just keep the shape valid.
 *
 * Each community renders at /community/[slug] using this data.
 *
 * Data source: 2025-26 vertical leadership from internal MD+ knowledge
 * base (March 2026). Eight active verticals; Blockchain has been moved
 * to inactive status (channel last active August 2024).
 */

export type ResourceItem = {
  label: string;
  href?: string;
  note?: string;
};

export type ResourceGroup = {
  title: string;
  items: ResourceItem[];
};

export type Leader = {
  name: string;
  role: string;
};

export type Community = {
  slug: string;
  name: string;
  shortName?: string;
  /** Short, scannable promise that lives in the hero. */
  tagline: string;
  /** Full overview shown on the detail page. Plain prose. */
  description: string;
  /** Slack channel name without the # prefix. */
  slackChannel: string;
  /** Approximate count for badges. */
  memberCount?: string;
  /** Optional list of community leaders / co-directors. */
  leaders?: Leader[];
  /** Optional list of resource groups (guides, books, podcasts, etc.) */
  resources?: ResourceGroup[];
  /** Optional companies/orgs members are at — for social proof. */
  representativeAt?: string[];
};

export const COMMUNITIES: Community[] = [
  {
    slug: "data",
    name: "AI & Data Science",
    shortName: "Data + AI",
    tagline:
      "Hands-on tutorials in ML, RAG, and CNNs through a clinical lens — plus the annual Datathon.",
    description:
      "The largest and most active vertical. We maintain an AI/ML tutorial library with end-to-end Google Colab modules taught through a clinical lens, run a recurring Journal Club on the latest data and AI papers in medicine, and host the annual MD+ Datathon — a month-long competition that has run four years and produced peer-reviewed research published in JMIR Medical Education.",
    slackChannel: "ai-med",
    memberCount: "Most active",
    leaders: [
      { name: "Bhavana Kunisetty", role: "Director of AI & Data Science" },
      { name: "Sahil Suresh", role: "Director of AI & Data Science" },
      { name: "Emily Leventhal", role: "Director of AI & Data Science" },
    ],
    resources: [
      {
        title: "AI/ML Tutorial Library",
        items: [
          {
            label: "Q-Learning Module",
            note: "Reinforcement learning basics, in a clinical scenario",
          },
          {
            label: "Retrieval-Augmented Generation (RAG)",
            note: "Build a RAG system over medical literature",
          },
          {
            label: "Convolutional Neural Networks",
            note: "Imaging-focused intro to CNNs",
          },
        ],
      },
      {
        title: "Programs",
        items: [
          {
            label: "Annual Datathon",
            href: "/programs/datathon",
            note: "Four years running; ~300 participants in 2025",
          },
          {
            label: "Journal Club",
            href: "/learn/journal-club",
            note: "Recurring deep-dives into AI in medicine",
          },
        ],
      },
    ],
  },
  {
    slug: "vc",
    name: "Venture Capital",
    shortName: "VC",
    tagline:
      "Fellowship pipelines, investor introductions, and the resources to actually break into healthtech VC.",
    description:
      "The longest-running vertical at MDplus — the #md-vcs channel has been active since December 2019. The community runs a weekly News, Funds, and Deals recap, partners with Pillar VC on a 2-day VC 101 course, hosts panels with biotech, medtech, and digital-health investors, and connects members to fellowships at firms across healthtech. Members include current and former investors at a16z bio+health, Bessemer, Foresite, Artis Ventures, and Goldman Sachs healthcare.",
    slackChannel: "md-vcs",
    memberCount: "Most active",
    leaders: [
      { name: "Jessika Baral", role: "Director of Venture Capital" },
      { name: "Sam Youkilis", role: "Director of Venture Capital" },
    ],
    representativeAt: [
      "a16z bio+health",
      "Bessemer",
      "Foresite",
      "Pillar VC",
      "AlleyCorp",
    ],
    resources: [
      {
        title: "Get oriented",
        items: [
          { label: "VC Glossary", note: "MDplus internal doc" },
          { label: "Investment thesis guide" },
          { label: "Healthtech investor database" },
          {
            label: "YC Startup Library",
            href: "https://www.ycombinator.com/library",
          },
          { label: "John Gannon Blog", href: "https://www.johngannonblog.com" },
        ],
      },
      {
        title: "Programs",
        items: [
          {
            label: "Pillar VC 101",
            note: "Two-day course, recurring",
          },
          {
            label: "VC office hours",
            note: "Coffee chats with active investors",
          },
        ],
      },
      {
        title: "Books & podcasts",
        items: [
          { label: "Venture Deals", note: "Brad Feld" },
          { label: "Secrets of Sand Hill Road", note: "Scott Kupor" },
          { label: "Venture Unlocked" },
          { label: "The Twenty Minute VC" },
        ],
      },
    ],
  },
  {
    slug: "biotech",
    name: "Biotech",
    tagline:
      "Drug discovery, therapeutics investing, and physician pathways into biotech.",
    description:
      "The biotech vertical covers therapeutics, drug discovery, and the broader life-sciences industry. We send a weekly biotech newsletter, run panel events with physician-founders and biotech executives, and use RA Capital course material as reference for biotech investing. Recent programming includes a Nucleate Translate panel on physician careers in biotech (with Jay Bradner of NIBR, Shehnaaz Suliman of ReCode Therapeutics, and Akshay Vaishnaw of Alnylam), a week-long Bio × ML hackathon co-hosted with Lux Capital and OpenBioML, and JPM Healthcare Conference debrief sessions.",
    slackChannel: "md-biotech",
    leaders: [{ name: "Shannon McLaughlin", role: "Director of Biotech" }],
    representativeAt: ["Novartis NIBR", "ReCode Therapeutics", "Alnylam", "Lux Capital"],
    resources: [
      {
        title: "Programs",
        items: [
          { label: "Weekly biotech newsletter" },
          { label: "Panel events with physician-founders" },
          { label: "Bio × ML Hackathon (with Lux Capital, OpenBioML)" },
        ],
      },
    ],
  },
  {
    slug: "consulting",
    name: "Consulting",
    tagline:
      "Mentorship and case prep for clinicians moving into management consulting.",
    description:
      "Our consulting community introduces, mentors, and connects individuals interested in healthcare or management consulting to opportunities and training that enable their transition from clinical care. Members range from medical students to residents to attendings, and include full- and part-time consultants at McKinsey, Bain, BCG, LEK, and others. Many have prior consulting experience or have participated in McKinsey's MD Fellow or BCG's MD Scholar program. We published the MD+ Consulting Guide 2024 and partner with RocketBlocks for case-interview prep.",
    slackChannel: "md-consulting",
    leaders: [
      { name: "Esh Garg", role: "Director of Consulting" },
      { name: "Edward Kim", role: "Director of Consulting" },
    ],
    representativeAt: ["McKinsey", "Bain", "BCG", "LEK"],
    resources: [
      {
        title: "Get started",
        items: [
          { label: "Breaking into Consulting 101", note: "MDplus guide" },
          { label: "MD+ Consulting Guide 2024", note: "Published playbook" },
          { label: "Case Books Drive", note: "Shared library" },
          { label: "Case Prep Workshop", note: "Recurring" },
        ],
      },
      {
        title: "Partners",
        items: [
          {
            label: "RocketBlocks",
            note: "Case interview prep — member discounts and raffle prizes",
          },
        ],
      },
    ],
  },
  {
    slug: "policy",
    name: "Health Policy",
    shortName: "Policy",
    tagline:
      "Op-ed writing groups, expert speakers, and the policy segment of the MD+ Podcast.",
    description:
      "Our policy community makes health policy approachable for medical students and physicians. We run op-ed writing groups targeting JAMA Viewpoints and NEJM Perspectives, host expert speakers from healthcare and policy, track legislative developments via a shared calendar, and produce the policy segment of the MD+ Podcast. We send a biweekly Monday Morning Health Policy Recap and have brought members to ACP Leadership Day in Washington DC.",
    slackChannel: "health-policy",
    leaders: [
      { name: "Archita Goyal", role: "Director of Health Policy" },
      { name: "Elena Dennis", role: "Director of Health Policy" },
    ],
    resources: [
      {
        title: "Programs",
        items: [
          { label: "Op-ed writing groups", note: "JAMA Viewpoints, NEJM Perspectives" },
          { label: "Monday Morning Health Policy Recap", note: "Biweekly" },
          { label: "ACP Leadership Day delegation", note: "Annual, Washington DC" },
        ],
      },
      {
        title: "External resources",
        items: [
          {
            label: "Alliance for Health Policy",
            href: "https://www.allhealthpolicy.org",
          },
        ],
      },
    ],
  },
  {
    slug: "devices",
    name: "Medical Devices",
    shortName: "Devices",
    tagline:
      "Device development, FDA pathways, and hardware for clinical environments.",
    description:
      "The medical devices vertical covers device development, regulatory pathways, and the entrepreneurial side of medtech. Revived in 2025 with a new workshop series, the program runs an Intro to Medical Device Development workshop (educational segment plus breakout rooms) and collaborates closely with the Design vertical. Member discussions have spanned surgical innovation, neurotech, wearables, and the tension between hype and clinical evidence in medtech.",
    slackChannel: "md-devices",
    leaders: [{ name: "Mahima Goel", role: "Director of Medical Devices" }],
    resources: [
      {
        title: "Programs",
        items: [
          {
            label: "Intro to Medical Device Development",
            note: "Workshop — educational segment + breakout rooms",
          },
          {
            label: "Collaboration with MD+ Design",
            note: "Joint sessions on hardware UX",
          },
        ],
      },
    ],
  },
  {
    slug: "research",
    name: "Research (MD+ Labs)",
    shortName: "Research",
    tagline:
      "A research collaboration platform — post a project, find collaborators, ship a paper.",
    description:
      "MD+ Labs is the newest active vertical (launched in 2025). It's a Notion-based dashboard where members post research projects and find collaborators across the community. The team also supports conference submissions for innovation and biotech projects, and runs internal research on MD+ programming itself.",
    slackChannel: "research",
    leaders: [{ name: "Adam Elsayed", role: "Director of Research" }],
    resources: [
      {
        title: "Get involved",
        items: [
          {
            label: "MD+ Labs dashboard",
            href: "https://carnation-bloom-95e.notion.site/mdpluslabs",
            note: "Post a project or browse open ones",
          },
        ],
      },
    ],
  },
  {
    slug: "design",
    name: "Design",
    tagline:
      "Healthcare design thinking, user experience, and human-centered clinical innovation.",
    description:
      "The design vertical, launched in 2024-25, focuses on design thinking applied to healthcare — UX for clinical tools, service design for care delivery, and visual communication for medical education. The team partners with Medical Devices on hardware UX and contributes to MDplus's own brand and communication work.",
    slackChannel: "innovative-design",
    leaders: [{ name: "Devika Patel", role: "Director of Design" }],
  },
];

export function getCommunity(slug: string): Community | undefined {
  return COMMUNITIES.find((c) => c.slug === slug);
}
