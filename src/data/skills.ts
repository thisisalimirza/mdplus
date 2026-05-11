/**
 * Skills Library catalog — content shown on the /skills marketing page.
 * Edit here to update what's featured. The actual library product lives
 * at skills.mdplus.community; this is the marketing-facing index.
 *
 * Tier guide:
 *   • free         — open to everyone, no signup
 *   • email-gated  — open after sharing an email (lead magnet)
 *   • paid         — purchased individually, OR free with Premium membership
 */

export type SkillCategory = "data-ai" | "consulting" | "vc" | "research" | "career";
export type SkillTier = "free" | "email-gated" | "paid";
export type SkillFormat =
  | "module"
  | "course"
  | "guide"
  | "database"
  | "workshop"
  | "playbook";

export type Skill = {
  slug: string;
  title: string;
  description: string;
  category: SkillCategory;
  tier: SkillTier;
  format: SkillFormat;
  duration?: string;
  /** External link to the actual content on skills.mdplus.community. */
  href?: string;
  /** Show on /skills hero / featured strip. */
  featured?: boolean;
};

export const CATEGORIES: { slug: SkillCategory; name: string; blurb: string }[] = [
  {
    slug: "data-ai",
    name: "Data + AI",
    blurb: "Hands-on machine learning, RAG, and clinical AI, built for clinicians, not engineers.",
  },
  {
    slug: "consulting",
    name: "Consulting",
    blurb: "Case prep, frameworks, and the playbooks members actually used to land at McKinsey, Bain, BCG.",
  },
  {
    slug: "vc",
    name: "Venture Capital",
    blurb: "From investor glossary to investment-thesis writing to a database of healthtech VCs.",
  },
  {
    slug: "research",
    name: "Research",
    blurb: "Curated databases of summer research and innovation-focused residency programs.",
  },
  {
    slug: "career",
    name: "Career",
    blurb: "Building your medical career outside the OR, from personal brand to first founder pitch.",
  },
];

export const SKILLS: Skill[] = [
  // ── Data + AI ─────────────────────────────────────────
  {
    slug: "rag-clinical-pipeline",
    title: "Build a Clinical RAG Pipeline",
    description:
      "A 90-minute course on retrieval-augmented generation over medical literature. Ship a working pipeline by the end.",
    category: "data-ai",
    tier: "paid",
    format: "course",
    duration: "90 min",
    featured: true,
  },
  {
    slug: "q-learning-module",
    title: "Q-Learning Module",
    description:
      "Reinforcement learning fundamentals introduced through a clinical decision-making scenario. Google Colab notebook.",
    category: "data-ai",
    tier: "free",
    format: "module",
    duration: "60 min",
  },
  {
    slug: "rag-module",
    title: "Retrieval-Augmented Generation (RAG)",
    description:
      "Walk through a working RAG system step-by-step. Learn how LLMs use external knowledge to answer clinical questions.",
    category: "data-ai",
    tier: "free",
    format: "module",
    duration: "75 min",
  },
  {
    slug: "cnn-imaging",
    title: "Convolutional Neural Networks",
    description:
      "An imaging-focused intro to CNNs. Train a model on a publicly available medical dataset.",
    category: "data-ai",
    tier: "free",
    format: "module",
    duration: "75 min",
  },

  // ── Consulting ────────────────────────────────────────
  {
    slug: "breaking-into-consulting-101",
    title: "Breaking into Consulting 101",
    description:
      "The end-to-end guide for clinicians transitioning into management consulting. Written by members already inside.",
    category: "consulting",
    tier: "free",
    format: "guide",
    featured: true,
  },
  {
    slug: "case-prep-workshop",
    title: "Case Prep Workshop",
    description:
      "Recorded workshop on case interviews: frameworks, common pitfalls, and live walkthroughs of MBB cases.",
    category: "consulting",
    tier: "email-gated",
    format: "workshop",
    duration: "120 min",
  },
  {
    slug: "case-books-drive",
    title: "Case Books Drive",
    description:
      "A curated drive of case interview prep books, contributed by alumni at MBB firms. Members-only.",
    category: "consulting",
    tier: "paid",
    format: "playbook",
  },

  // ── VC ────────────────────────────────────────────────
  {
    slug: "vc-glossary",
    title: "VC Glossary for Clinicians",
    description:
      "Every term you'll hear in a healthtech VC conversation, defined in plain English by people who do this every day.",
    category: "vc",
    tier: "free",
    format: "guide",
  },
  {
    slug: "investment-thesis-writing",
    title: "Writing Your First Investment Thesis",
    description:
      "A walkthrough of how clinicians-turned-investors structure investment theses. Templates included.",
    category: "vc",
    tier: "paid",
    format: "course",
    duration: "60 min",
    featured: true,
  },
  {
    slug: "healthtech-investor-database",
    title: "Healthtech Investor Database",
    description:
      "Searchable database of active healthtech VCs, what they invest in, and warm-intro paths from members.",
    category: "vc",
    tier: "paid",
    format: "database",
  },

  // ── Research ──────────────────────────────────────────
  {
    slug: "summer-research-database",
    title: "Summer Research Opportunities Database",
    description:
      "A regularly-updated list of summer research positions: funded, structured, and open to med students.",
    category: "research",
    tier: "free",
    format: "database",
  },
  {
    slug: "innovation-residency-database",
    title: "Innovation-Focused Residencies",
    description:
      "Residency programs with formal innovation, entrepreneurship, or industry tracks. With member commentary.",
    category: "research",
    tier: "free",
    format: "database",
  },

  // ── Career ────────────────────────────────────────────
  {
    slug: "your-medtech-brand",
    title: "Building Your Med-Tech Brand",
    description:
      "How to build a public-facing identity as a physician moving into industry, without it feeling cringe.",
    category: "career",
    tier: "paid",
    format: "course",
    duration: "75 min",
  },
];

export const SKILLS_LIBRARY_URL = "https://skills.mdplus.community";
