/**
 * Source of truth for sub-community content. Edit this file to update any
 * community page — no engineering required, just keep the shape valid.
 *
 * Each community renders at /community/[slug] using this data.
 *
 * LEADERSHIP is derived automatically from src/data/team.ts via the
 * `teamVertical` field — set it to the matching vertical name and the page
 * will always show whoever is currently listed as a director in CURRENT_TEAM,
 * including their headshot if one is on file. No manual `leaders` array needed.
 *
 * Eight active verticals; Blockchain has been moved to inactive status
 * (channel last active August 2024).
 */

import type { DirectorVertical } from "./team";

export type ResourceItem = {
  label: string;
  href?: string;
  note?: string;
};

export type ResourceGroup = {
  title: string;
  items: ResourceItem[];
};

export type LearningPathwayStep = {
  label: string;
  description: string;
  href?: string;
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
  /**
   * Links this community to its vertical in team.ts. When set, the community
   * page derives its leadership list automatically from CURRENT_TEAM — whoever
   * is a director for this vertical shows up, with headshots, no code change
   * required. Must match a value in DIRECTOR_VERTICALS exactly.
   */
  teamVertical?: DirectorVertical;
  /** Optional list of resource groups (guides, books, podcasts, etc.) */
  resources?: ResourceGroup[];
  /** Optional companies/orgs members are at — for social proof. */
  representativeAt?: string[];
  /** Optional step-by-step learning pathway shown on the community detail page. */
  learningPathway?: LearningPathwayStep[];
};

export const COMMUNITIES: Community[] = [
  {
    slug: "data",
    name: "AI & Data Science",
    shortName: "Data + AI",
    tagline:
      "The largest and most active MD+ vertical — structured tutorials, Datathon, Journal Club, and Catalyst for clinicians who want to build with AI.",
    description:
      "The largest and most active vertical in MD+. We offer a complete learning pathway: from foundational tutorials in Python, clinical data science, and machine learning, through hands-on Google Colab modules on Q-Learning, RAG, and CNNs taught through a clinical lens. Members compete in the annual MD+ Datathon — a month-long competition now in its fourth year with ~300 participants in 2025, producing peer-reviewed research published in JMIR Medical Education. Those who want hands-on project experience and leadership can apply to Catalyst. The AI & Data Science community is where clinicians go from zero experience to building real AI projects.",
    slackChannel: "ai-med",
    teamVertical: "AI & Data Science",
    learningPathway: [
      {
        label: "Learn",
        description:
          "Build your foundation with structured articles, resources, and educational content.",
        href: "/learn",
      },
      {
        label: "Tutorials",
        description:
          "Work through hands-on Colab modules on Q-Learning, RAG, CNNs, Python, clinical data science, and more.",
      },
      {
        label: "Journal Club",
        description:
          "Deep-dive into landmark AI in medicine papers with the community — or browse the archive of past sessions.",
        href: "/learn/journal-club",
      },
      {
        label: "Datathon",
        description:
          "Compete in our annual month-long AI competition on real clinical datasets. Four years running, ~300 participants in 2025.",
        href: "/programs/datathon",
      },
      {
        label: "Catalyst",
        description:
          "A structured cohort for members who want hands-on AI projects, real-world experience, and leadership opportunities.",
        href: "/programs/catalyst",
      },
      {
        label: "Leadership & Research",
        description:
          "Director roles, peer-reviewed publications, and community leadership in the largest MD+ vertical.",
      },
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
        title: "Educational Content",
        items: [
          { label: "API Key Management & Security Best Practices" },
          { label: "Clinical Datasets & HIPAA Considerations" },
          { label: "Data De-identification & Privacy-Preserving Workflows" },
          { label: "Intro to Python for Healthcare Data Science" },
          { label: "Jupyter Notebook Fundamentals" },
          { label: "Basic Machine Learning Workflows" },
          { label: "Medical Imaging & Computer Vision" },
          { label: "LLMs in Healthcare" },
          { label: "RAG for Medical Literature & Clinical Knowledge Bases" },
          { label: "Clinical NLP Fundamentals" },
          { label: "Data Visualization for Healthcare Datasets" },
          { label: "Reproducible Research & Version Control (Git/GitHub)" },
          { label: "End-to-End Healthcare AI Project Tutorials" },
        ],
      },
      {
        title: "Programs",
        items: [
          {
            label: "Annual Datathon",
            href: "/programs/datathon",
            note: "Four years running; ~300 participants in 2025; published in JMIR Medical Education",
          },
          {
            label: "Catalyst",
            href: "/programs/catalyst",
            note: "Hands-on AI projects, leadership, and real-world experience",
          },
          {
            label: "Journal Club (Archive)",
            href: "/learn/journal-club",
            note: "Past deep-dives into AI, data science, and clinical innovation papers",
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
      "The longest-running vertical at MDplus: the #md-vcs channel has been active since December 2019. The community runs a weekly News, Funds, and Deals recap, partners with Pillar VC on a 2-day VC 101 course, hosts panels with biotech, medtech, and digital-health investors, and connects members to fellowships at firms across healthtech. Members include current and former investors at a16z bio+health, Bessemer, Foresite, Artis Ventures, and Goldman Sachs healthcare.",
    slackChannel: "md-vcs",
    teamVertical: "Venture Capital",
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
    teamVertical: "Biotech",
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
    teamVertical: "Consulting",
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
            note: "Case interview prep; member discounts and raffle prizes",
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
      "Op-ed writing groups, expert speakers, and workshops to make health policy approachable.",
    description:
      "Our policy community makes health policy approachable for medical students and physicians. We run op-ed writing groups targeting local news outlets, host expert speakers from healthcare and policy, have workshops aimed at developing policy skills, and are developing a systems science curriculum.",
    slackChannel: "health-policy",
    teamVertical: "Health Policy",
    resources: [
      {
        title: "Programs",
        items: [
          { label: "Op-ed writing groups", note: "Targeting local news outlets" },
          { label: "Expert speaker series", note: "Healthcare and policy" },
          { label: "Policy skills workshops" },
          { label: "Systems science curriculum", note: "In development" },
        ],
      },
      {
        title: "External resources",
        items: [
          {
            label: "The Full Picture",
            href: "https://thefullpicture.org",
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
    teamVertical: "Medical Devices",
    resources: [
      {
        title: "Programs",
        items: [
          {
            label: "Intro to Medical Device Development",
            note: "Workshop: educational segment + breakout rooms",
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
      "A research collaboration platform: post a project, find collaborators, ship a paper.",
    description:
      "MD+ Labs is the newest active vertical (launched in 2025). It's a Notion-based dashboard where members post research projects and find collaborators across the community. The team also supports conference submissions for innovation and biotech projects, and runs internal research on MD+ programming itself.",
    slackChannel: "research",
    teamVertical: "Research",
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
      "The design vertical, launched in 2024-25, focuses on design thinking applied to healthcare: UX for clinical tools, service design for care delivery, and visual communication for medical education. The team partners with Medical Devices on hardware UX and contributes to MDplus's own brand and communication work.",
    slackChannel: "innovative-design",
    // No teamVertical — Design has no current director in CURRENT_TEAM.
    // Add one there and set teamVertical: "Design" once DIRECTOR_VERTICALS includes it.
  },
];

export function getCommunity(slug: string): Community | undefined {
  return COMMUNITIES.find((c) => c.slug === slug);
}
