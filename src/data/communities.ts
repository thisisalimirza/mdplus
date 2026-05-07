/**
 * Source of truth for sub-community content. Edit this file to update any
 * community page — no engineering required, just keep the shape valid.
 *
 * Each community renders at /community/[slug] using this data.
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
    slug: "consulting",
    name: "Consulting",
    tagline:
      "Mentorship and case prep for clinicians moving into management consulting.",
    description:
      "Our consulting community introduces, mentors, and connects individuals interested in healthcare or management consulting to opportunities and training that enable their transition from clinical care. Members range from medical students to residents to attendings, and include full- and part-time consultants at McKinsey, Bain, BCG, LEK, and others. Many are students at top medical schools, have prior consulting experience, or have participated in McKinsey's MD Fellow or BCG's MD Scholar program.",
    slackChannel: "md-consulting",
    memberCount: "200+",
    leaders: [
      { name: "Prateek Sahni", role: "Co-Director of Consulting" },
      { name: "Navin Balaji", role: "Co-Director of Consulting" },
    ],
    representativeAt: ["McKinsey", "Bain", "BCG", "LEK"],
    resources: [
      {
        title: "Get started",
        items: [
          { label: "Breaking into Consulting 101", note: "MDplus guide" },
          { label: "Case Books Drive", note: "shared library" },
          { label: "Case Prep Workshop", note: "recurring" },
        ],
      },
    ],
  },
  {
    slug: "data",
    name: "Data + AI",
    shortName: "Data",
    tagline:
      "Hands-on tutorials in ML, RAG, and CNNs through a clinical lens — plus the Journal Club.",
    description:
      "The MDplus data and AI community is for clinicians and trainees who want to actually build with the tools, not just read about them. We maintain a tutorial library with end-to-end Google Colab modules taught through a clinical lens, run a recurring Journal Club on the most important data and AI papers in medicine, and connect members working at the cutting edge of clinical machine learning.",
    slackChannel: "md-data",
    leaders: [],
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
        title: "Recurring",
        items: [
          {
            label: "Journal Club",
            href: "/learn/journal-club",
            note: "Data + AI papers, every other week",
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
      "The VC community is a network of like-minded medical students and physicians who share a passion for innovation and venture capital. Members get connections, fellowship opportunities, and resources to learn the VC space — with mentorship from members already inside the industry to help navigate the intricacies of the venture capital landscape.",
    slackChannel: "md-vcs",
    leaders: [],
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
        title: "Books",
        items: [
          { label: "Venture Deals", note: "Brad Feld" },
          { label: "Secrets of Sand Hill Road", note: "Scott Kupor" },
        ],
      },
      {
        title: "Podcasts",
        items: [
          { label: "Venture Unlocked" },
          { label: "Spearhead" },
          { label: "The Consumer VC" },
          { label: "The Twenty Minute VC" },
          { label: "How I Built This" },
          { label: "Women in Venture Capital" },
        ],
      },
    ],
  },
  {
    slug: "policy",
    name: "Health Policy",
    shortName: "Policy",
    tagline:
      "Op-ed writing groups, expert speakers, and a podcast segment translating policy into plain English.",
    description:
      "Our policy community is built to make health policy approachable for medical students and physicians. We run op-ed writing groups where members workshop and publish their perspectives, host expert speakers from healthcare and policy, and produce a dedicated MD+ podcast segment that breaks down complex policy topics into clear, useful conversations.",
    slackChannel: "health-policy",
    leaders: [
      { name: "Archita Goyal", role: "Director of Health Policy" },
    ],
    resources: [
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
    slug: "blockchain",
    name: "Blockchain / DeSci",
    shortName: "Blockchain",
    tagline:
      "Decentralized science applied to medicine — from data ownership to publishing reform.",
    description:
      "Blockchain has applications in science and medicine that go well beyond cryptocurrency: data ownership, publishing reform, archival integrity, and grant-funding mechanics. The application of blockchain in scientific communities is known as Decentralized Science (DeSci), and it's a rapidly expanding space. MD+Blockchain introduces the next generation of physicians to this technological frontier — covering the basic mechanisms of blockchain, hosting speakers shaping the DeSci landscape, and running discussion sessions to spark new applications.",
    slackChannel: "blockchain",
    leaders: [],
    resources: [],
  },
];

export function getCommunity(slug: string): Community | undefined {
  return COMMUNITIES.find((c) => c.slug === slug);
}
