/**
 * Partners page data: existing partners by category, sponsorship
 * products by track, FAQ. Edit here to update the page.
 *
 * Partner roster sourced from the MD+ knowledge base (March 2026
 * Programs Catalog + Org Overview). Categories are simplified for
 * the marketing page — internal records have more granular tagging.
 */

export type PartnerCategory = {
  label: string;
  blurb: string;
  partners: string[];
};

export const PARTNER_CATEGORIES: PartnerCategory[] = [
  {
    label: "AI + technology",
    blurb: "Companies building the tools members are using.",
    partners: ["Anthropic", "Scale AI", "OpenEvidence", "RStudio"],
  },
  {
    label: "Venture capital",
    blurb: "Healthcare-focused funds, often hiring or sourcing through us.",
    partners: [
      "a16z Bio + Health",
      "AlleyCorp",
      "Pillar VC",
      "Scrub Capital",
      "RA Capital",
    ],
  },
  {
    label: "Healthtech",
    blurb:
      "Companies shipping for clinicians who need clinical advisors, design partners, and credible peer attention.",
    partners: [
      "Doximity",
      "Inflo Health",
      "Thalamus",
      "Roon",
      "Offcall",
      "Chamber Cardio",
      "Fabric",
    ],
  },
  {
    label: "Pharma + health systems",
    blurb:
      "Established orgs whose innovation, research, or partnerships work touches our members directly.",
    partners: ["Merck", "Flatiron Health", "Roivant Sciences", "Vituity"],
  },
  {
    label: "Medical education + training",
    blurb:
      "Organizations whose missions overlap ours — co-programs, content partnerships, audience swaps.",
    partners: [
      "AMSA",
      "Nucleate",
      "RocketBlocks",
      "ConductScience",
      "Sketchy",
      "Simply Neuroscience",
    ],
  },
];

export type SponsorshipProduct = {
  title: string;
  description: string;
};

export type SponsorshipTrack = {
  slug: "sponsor" | "hire" | "partner";
  eyebrow: string;
  headline: string;
  body: string;
  bestFitFor: string[];
  products: SponsorshipProduct[];
  cta: string;
};

export const SPONSORSHIP_TRACKS: SponsorshipTrack[] = [
  {
    slug: "sponsor",
    eyebrow: "Sponsor",
    headline:
      "Get in front of clinicians-to-decision-makers, before they become decision-makers.",
    body: "MDplus members aren't reach you can buy on LinkedIn. They're physicians, residents, and senior medical students who've actively self-selected into healthcare innovation — and who, in five to ten years, will be the clinical leads, founders, advisors, and operators making decisions about which products clinicians actually use. Sponsorships put your work in front of that audience while it's forming.",
    bestFitFor: [
      "Healthtech companies looking for clinical advisors, design partners, or early credibility",
      "AI / data tooling companies building for clinical use cases",
      "Investors and accelerators sourcing physician founders",
      "Pharma + medical-device companies investing in clinician relationships",
    ],
    products: [
      {
        title: "Datathon Gold sponsorship",
        description:
          "Named placement on our signature annual event — ~300 participants in 2025, peer-reviewed publication in JMIR Medical Education. Past Gold sponsors include Doximity and Inflo Health.",
      },
      {
        title: "Catalyst cohort sponsorship",
        description:
          "Named backer of a Catalyst program cohort. Current Catalyst sponsors include Anthropic, OpenEvidence, a16z Bio + Health, AlleyCorp, Chamber Cardio, Thalamus, Fabric, and Scrub Capital.",
      },
      {
        title: "Innovation Challenge sponsorship",
        description:
          "Underwrite a multi-week competition track in your domain (e.g., Roivant's 2021 Challenge, Vituity's EM Innovation Challenge). Winners get follow-up partnerships with the sponsor.",
      },
      {
        title: "Featured fireside chat",
        description:
          "Host a 1-hour conversation with members on something your team genuinely knows. Recent examples: Roon co-founders (August 2025), Offcall on generative AI in clinical practice.",
      },
      {
        title: "Newsletter placement",
        description:
          "Recurring or one-off placement in the MDplus newsletter (~3,000 subscribers, weekly). Used sparingly — usually one sponsor mention per issue, related to that week's content.",
      },
      {
        title: "Vertical-specific sponsorship",
        description:
          "Scope a sponsorship to a single vertical (AI & Data, VC, Biotech, Health Policy, Medical Devices, Consulting, Research, Design) for tighter audience match.",
      },
    ],
    cta: "Talk to us about sponsorship",
  },
  {
    slug: "hire",
    eyebrow: "Hire",
    headline:
      "Hire physicians who already speak product, data, and clinical.",
    body: "Healthcare is hiring more clinicians than ever for non-clinical roles — clinical product, clinical informatics, MSL, advisor, founding team. The hard part isn't the search; it's finding clinicians with cross-domain literacy and credibility on both sides. MDplus members spend years inside our verticals learning those second languages. By the time they're ready for the role you're filling, they've usually already done the equivalent of an internal residency in it.",
    bestFitFor: [
      "Healthtech startups hiring clinical product, clinical advisors, or founding-team clinicians",
      "Health systems and academic centers hiring innovation, informatics, or industry-track roles",
      "VC firms hiring physician investors, fellows, or scouts",
      "Pharma / medical-device companies recruiting MSLs, KOLs, or clinical strategy",
    ],
    products: [
      {
        title: "Posting to #opportunities",
        description:
          "Direct posting to our highest-volume Slack channel (573+ files of curated career opportunities, the org's primary internal job board). Reaches members actively browsing.",
      },
      {
        title: "Member directory access",
        description:
          "Search our member base by training stage, specialty, and area of interest. Used by partners building targeted outreach for senior or hard-to-fill roles.",
      },
      {
        title: "Warm-intro program",
        description:
          "For senior or sensitive roles, our team personally introduces you to 3–5 relevant members based on the role spec. Higher signal than a posting; we screen for fit on both sides.",
      },
      {
        title: "Clinical advisory recruitment",
        description:
          "Find your medical advisory board from a vetted, peer-validated pool. Common path for early-stage healthtech companies.",
      },
      {
        title: "Recurring internship pipeline",
        description:
          "Formalize a yearly intern source — annual cohort posting, scheduled coffee chats, structured application path through MDplus.",
      },
    ],
    cta: "Talk to us about hiring",
  },
  {
    slug: "partner",
    eyebrow: "Partner",
    headline:
      "Co-create programs that put your work in front of the next generation of healthcare leaders.",
    body: "Some of MDplus's best programs were built with partners. The Datathon model that got published in JMIR Medical Education came from collaboration with academic researchers. Pillar VC's two-day VC 101 course is now part of our permanent education stack. Thalamus's Match Panel draws 100+ members annually. If your work touches healthcare innovation and your audience overlaps with ours, there's likely a co-program where the math works for both sides.",
    bestFitFor: [
      "Educational platforms whose curriculum could embed inside MDplus programming",
      "Other med-student / clinician orgs with overlapping audiences",
      "Research institutes running clinician-facing initiatives",
      "Conferences, training programs, and academic centers seeking program collaborators",
    ],
    products: [
      {
        title: "Embedded curriculum",
        description:
          "Your educational content built into MDplus programming. Pillar VC's VC 101 is the model — a partner-built course now run as a recurring MDplus offering.",
      },
      {
        title: "Joint research initiatives",
        description:
          "Survey-based studies, white papers, datathon partnerships — leveraging member-generated data for peer-reviewed work. The 2025 JMIR Medical Education paper is one example.",
      },
      {
        title: "Co-branded content",
        description:
          "Podcast episodes, newsletter pieces, op-eds, and webinars co-produced with the partner. Past examples: MDplus × Offcall generative AI webinar, Nucleate Translate panel.",
      },
      {
        title: "Cross-promotional partnerships",
        description:
          "For orgs with overlapping audiences — mutual newsletter mentions, shared events, member-discount programs. Examples: AMSA, Sketchy, Simply Neuroscience.",
      },
      {
        title: "Residency + institutional partnerships",
        description:
          "Formal partnerships with residency programs, medical schools, and academic centers — joint chapters, curated resource sharing, recurring speaker exchanges.",
      },
    ],
    cta: "Talk to us about a partnership",
  },
];

export type PartnerFaq = {
  q: string;
  a: string;
};

export const PARTNER_FAQ: PartnerFaq[] = [
  {
    q: "How do you measure ROI on a sponsorship?",
    a: "Depends on the goal. For events, we share attendee counts, completion rates, and post-event survey data. For hiring, fill rates and time-to-hire. For brand sponsorships, newsletter open rates, podcast listens, and social-media reach. We're a small org so we keep this honest and proportional — no inflated dashboards.",
  },
  {
    q: "We're an early-stage startup, not an established company. Can we still partner?",
    a: "Yes. Several of our long-running partners started as small healthtech startups (Roon, Offcall, Inflo Health all engaged with MDplus pre-Series A). For early-stage companies we tend to structure in-kind partnerships, founder fireside chats, or scoped vertical sponsorships that fit early-stage budgets when alignment is right.",
  },
  {
    q: "Can we sponsor a specific vertical instead of the whole community?",
    a: "Yes — and we usually recommend it. Each of our eight verticals (AI & Data, VC, Biotech, Consulting, Health Policy, Medical Devices, Research, Design) has its own programming, leadership, and engagement patterns. Vertical-specific sponsorships are tighter, cheaper, and usually outperform community-wide placements for targeted audiences.",
  },
  {
    q: "What's your process for evaluating potential sponsors?",
    a: "We screen for alignment with what the community actually needs. We've turned down sponsors whose products didn't serve our members, even when the budget was generous. The community's trust is the asset — protecting it isn't just principled, it's commercial.",
  },
  {
    q: "What's the price range?",
    a: "Newsletter placements start in the low four figures. Vertical sponsorships sit in the low-to-mid five figures. Datathon Gold and full Catalyst cohort sponsorships are in the mid-to-high five figures. We're a 501(c)(3) so pricing is transparent and proportional to scope — happy to share specific numbers on a call.",
  },
  {
    q: "Do members know when a program is sponsored?",
    a: "Yes, always and explicitly. Sponsorship is disclosed at every event, named in every cohort, and credited in every co-branded piece of content. We don't run hidden placements — both because we shouldn't and because the community would notice.",
  },
];
