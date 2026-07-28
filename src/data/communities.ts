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
  /** Optional note shown below the group title, e.g. "Planned content". */
  note?: string;
};

export type LearningPathwayStep = {
  label: string;
  description: string;
  href?: string;
  /** Optional pill shown on the pathway card, e.g. "Paused" or "Coming soon". */
  status?: string;
};

export type RepresentativeOrg = {
  name: string;
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
  representativeAt?: RepresentativeOrg[];
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
          "Past sessions are preserved in the archive — focused on AI, data science, and clinical innovation. New sessions paused for now.",
        href: "/learn/journal-club",
        status: "Paused",
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
            href: "https://colab.research.google.com/drive/1JTC0PjcaFKqR9zTIb9_P0zVs4QYvOslN?usp=sharing&copy=true",
            note: "Reinforcement learning basics, in a clinical scenario",
          },
          {
            label: "Retrieval-Augmented Generation (RAG)",
            href: "https://colab.research.google.com/drive/1sYL1f5YqV6KCu1OZkD2c8L9cj4ifFjqO?usp=sharing&copy=true",
            note: "Build a RAG system over medical literature",
          },
          {
            label: "Convolutional Neural Networks",
            href: "https://colab.research.google.com/drive/1OijmTzfz1H2R-ZGDIutJDgCxO5e5dPrX?usp=sharing&copy=true",
            note: "Imaging-focused intro to CNNs",
          },
        ],
      },
      {
        title: "Educational Content",
        note: "Planned — content coming soon",
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
            href: "https://vanilla-emmental-550.notion.site/1cd8bdd2e2a34976a2fd4fcc01dbdd07?v=90466d91ab9b4d95b46c7c9e18e0c4b0",
            note: "Past deep-dives into AI, data science, and clinical innovation papers",
          },
        ],
      },
      // Curated learning library, ported from the retired MDplus DS&AI site so
      // these community-vetted external resources aren't lost.
      {
        title: "Learn Python",
        items: [
          {
            label: "BE/Bi 103a (Caltech)",
            href: "https://bebi103a.github.io/index.html",
            note: "College-level intro assuming no background; work with biological data",
          },
          {
            label: "MedML@Emory Workshop",
            href: "https://colab.research.google.com/drive/1eij5s6YoSthXUAWMUJ0-ouydIFK0D_1d?usp=sharing",
            note: "Quick Python + ML tutorial; build an ECG analyzer",
          },
          {
            label: "Stanford Python Tutorial",
            href: "https://cs231n.github.io/python-numpy-tutorial/",
            note: "NumPy, SciPy, and matplotlib essentials",
          },
        ],
      },
      {
        title: "Learn R",
        items: [
          {
            label: "Intro to R (Posit/RStudio)",
            href: "https://education.rstudio.com/learn/beginner/",
            note: "Getting-started guides from the developers of R",
          },
          {
            label: "R for Data Science",
            href: "https://r4ds.hadley.nz/",
            note: "Full textbook; no prior programming experience needed",
          },
        ],
      },
      {
        title: "AI tutorials",
        items: [
          {
            label: "MIT: ML for Healthcare",
            href: "https://ocw.mit.edu/courses/6-s897-machine-learning-for-healthcare-spring-2019/video_galleries/lecture-videos/",
            note: "Beginner · lecture series overview of ML for healthcare",
          },
          {
            label: "AI for Everyone (Andrew Ng)",
            href: "https://www.coursera.org/learn/ai-for-everyone",
            note: "Beginner · non-technical, ~10 hours",
          },
          {
            label: "Kaggle Diabetes Classification",
            href: "https://www.kaggle.com/code/shrutimechlearn/step-by-step-diabetes-classification-knn-detailed",
            note: "Beginner · hands-on baseline diagnosis models",
          },
          {
            label: "NPJ: AI and Medicine perspective",
            href: "https://www.nature.com/articles/s41746-020-00333-z",
            note: "Beginner · non-technical overview article",
          },
          {
            label: "An Introduction to Statistical Learning",
            href: "https://www.statlearning.com/",
            note: "Beginner · statistical learning with R",
          },
          {
            label: "CS50: Intro to AI (Harvard)",
            href: "https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python?delta=0",
            note: "Advanced · build AI tools from scratch in Python",
          },
          {
            label: "Hugging Face NLP Course",
            href: "https://huggingface.co/course/chapter1/1",
            note: "Advanced · NLP and LLMs from 0 to 100",
          },
          {
            label: "Model evaluation metrics (aman.ai)",
            href: "https://aman.ai/primers/ai/evaluation-metrics/",
            note: "Advanced · more AI primers at aman.ai/primers/ai",
          },
          {
            label: "AI primers (aman.ai)",
            href: "https://aman.ai/primers/ai/",
            note: "Advanced · guides on model design and engineering",
          },
          {
            label: "Hugging Face Diffusers",
            href: "https://huggingface.co/docs/diffusers/index",
            note: "Advanced · build generative diffusion models",
          },
          {
            label: "Lilian Weng: Diffusion Models",
            href: "https://lilianweng.github.io/posts/2021-07-11-diffusion-models/",
            note: "Advanced · technical overview of diffusion models",
          },
          {
            label: "Project MONAI Tutorials",
            href: "https://github.com/Project-MONAI/tutorials",
            note: "Advanced · ML for medical imaging (classify/segment)",
          },
          {
            label: "The Elements of Statistical Learning",
            href: "https://hastie.su.domains/ElemStatLearn/",
            note: "Advanced · reference text for statistical methods",
          },
        ],
      },
      {
        title: "Data science & SQL",
        items: [
          {
            label: "Wrangle",
            href: "http://www.wranglecode.com/",
            note: "Built by MDplus members · 100+ SQL and R practice problems",
          },
          {
            label: "W3Schools SQL",
            href: "https://www.w3schools.com/sql/",
            note: "Beginner · SQL fundamentals",
          },
          {
            label: "SQLZoo",
            href: "https://sqlzoo.net/wiki/SQL_Tutorial",
            note: "Beginner · learn SQL by doing",
          },
          {
            label: "LeetCode Database",
            href: "https://leetcode.com/problemset/database/",
            note: "Practice SQL problem-solving",
          },
          {
            label: "Codecademy Data Science Foundations",
            href: "https://www.codecademy.com/catalog/subject/data-science",
            note: "Advanced · Python for data science, incl. medical-insurance project",
          },
        ],
      },
      {
        title: "Podcasts",
        items: [
          {
            label: "NEJM AI Grand Rounds",
            href: "https://ai-podcast.nejm.org",
            note: "Monthly conversations with experts in AI + medicine",
          },
          {
            label: "For Your Informatics (AMIA)",
            href: "https://amia.org/news-publications/podcasts/for-your-informatics",
            note: "AI + medicine from clinical, research, and societal angles",
          },
        ],
      },
      {
        title: "Newsletters & blogs",
        items: [
          {
            label: "Glass Box",
            href: "https://glassboxmedicine.com",
            note: "ML + medicine blog by Dr. Rachel Draelos (Cydoc)",
          },
          {
            label: "Decoding Bio",
            href: "https://decodingbio.substack.com",
            note: "Substack by Dr. Patrick Malone (KdT Ventures)",
          },
          {
            label: "Doctor Penguin",
            href: "https://doctorpenguin.com/index",
            note: "Weekly newsletter on AI research across specialties",
          },
          {
            label: "Import AI",
            href: "https://jack-clark.net",
            note: "Jack Clark's weekly AI research newsletter",
          },
        ],
      },
      {
        title: "People to follow",
        items: [
          {
            label: "Roxana Daneshjou",
            href: "https://twitter.com/RoxanaDaneshjou",
            note: "Stanford dermatologist working on AI + precision health",
          },
          {
            label: "James Zou",
            href: "https://twitter.com/james_y_zou",
            note: "Stanford professor; AI for biotech and healthcare",
          },
          {
            label: "Dereck Paul",
            href: "https://twitter.com/dereckwpaul",
            note: "Physician; CEO of Glass Health",
          },
          {
            label: "Dan Hashimoto",
            href: "https://twitter.com/Laparoscopes",
            note: "Surgeon applying computer vision to surgical video",
          },
          {
            label: "Suchi Saria",
            href: "https://twitter.com/suchisaria",
            note: "Johns Hopkins professor of AI; ML + medicine founder",
          },
        ],
      },
      // Datathon Python/R workshop references, ported from the retired DS&AI
      // site. The full workshop materials live in the archived Datathon GitHub
      // repos (linked from each /programs/datathon/[year] page); these are the
      // external tools, docs, and cheat sheets the workshops pointed to.
      {
        title: "Workshops & cheat sheets",
        note: "Full workshop materials live in the archived Datathon GitHub repos",
        items: [
          {
            label: "Install Python",
            href: "https://www.python.org/downloads/",
            note: "python.org downloads",
          },
          {
            label: "Install VS Code",
            href: "https://code.visualstudio.com/download",
          },
          {
            label: "Install R (CRAN — macOS)",
            href: "https://cran.r-project.org/bin/macosx/",
          },
          {
            label: "Install R (CRAN — Windows)",
            href: "https://cran.r-project.org/bin/windows/base/",
          },
          {
            label: "Install RStudio (Posit)",
            href: "https://posit.co/download/rstudio-desktop/",
          },
          {
            label: "pandas cheat sheet (PDF)",
            href: "https://github.com/pandas-dev/pandas/blob/main/doc/cheatsheet/Pandas_Cheat_Sheet.pdf",
          },
          {
            label: "NumPy cheat sheet",
            href: "https://www.dataquest.io/blog/numpy-cheat-sheet/",
          },
          {
            label: "RStudio data-wrangling cheat sheet",
            href: "https://www.rstudio.com/wp-content/uploads/2015/02/data-wrangling-cheatsheet.pdf",
          },
          {
            label: "pandas user guide",
            href: "https://pandas.pydata.org/docs/user_guide/index.html#user-guide",
            note: "Includes read_csv / read_excel and more",
          },
          {
            label: "NumPy user guide",
            href: "https://numpy.org/doc/stable/user/index.html#user",
          },
          {
            label: "matplotlib pyplot tutorial",
            href: "https://matplotlib.org/stable/tutorials/pyplot.html#sphx-glr-tutorials-pyplot-py",
          },
        ],
      },
      {
        title: "Mentorship & getting involved",
        items: [
          {
            label: "Become a mentor",
            href: "https://forms.gle/mfh8mp3Zn5QTu4RaA",
            note: "Offer coffee chats to members exploring DS&AI",
          },
          {
            label: "Coffee-chat feedback",
            href: "https://forms.gle/wzg1TeAKXZHhjLNB7",
            note: "Share feedback after a mentorship meeting",
          },
          {
            label: "Suggest a resource",
            href: "https://forms.gle/yU7FWYEATdkjSYWg7",
            note: "Recommend a DS&AI resource for this list",
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
      "The longest-running vertical at MDplus: the #md-vcs channel has been active since December 2019. The community hosts panels with biotech, medtech, and digital-health investors, provides educational resources relevant for healthcare VC including development of market maps and competitive landscapes, and connects members to fellowships at firms across healthtech. Members include current and former investors at a16z bio+health, Bessemer, Foresite, Artis Ventures, Goldman Sachs Healthcare, and more.",
    slackChannel: "md-vcs",
    teamVertical: "Venture Capital",
    representativeAt: [
      { name: "a16z bio+health" },
      { name: "Bessemer" },
      { name: "Foresite" },
      { name: "Artis Ventures" },
      { name: "Goldman Sachs Healthcare" },
    ],
    resources: [
      {
        title: "Get oriented",
        items: [
          {
            label: "Sherman's Guide",
            href: "https://docs.google.com/document/d/1TjklF11-f4VqwFNGMcyhYygiav6X1uYcLRNWIM4_yho/edit",
            note: "VC fundamentals overview",
          },
          { label: "VC Glossary", note: "MDplus internal doc" },
          {
            label: "Investment thesis guide",
            href: "https://medium.com/the-importance-of-being-earnest/an-aspiring-vcs-guide-to-building-an-investment-thesis-990a8e24666",
          },
          {
            label: "Healthtech investor database",
            href: "https://airtable.com/appi82OqC0sofDlcH/shrdqT0dM0vaIeO9u/tblyAK2VE4dS8O4dZ/viwiaTchRnMLqZqsS?backgroundColor=blue&blocks=hide",
          },
          {
            label: "YC Startup Library",
            href: "https://www.ycombinator.com/library",
          },
          {
            label: "John Gannon Blog",
            href: "https://johngannonblog.com",
          },
          {
            label: "The Business of Venture Capital",
            href: "https://www.thebusinessofvc.com",
          },
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
        title: "Books",
        items: [
          {
            label: "Venture Deals",
            href: "https://www.venturedeals.com",
            note: "Brad Feld",
          },
          {
            label: "Secrets of Sand Hill Road",
            href: "https://www.amazon.com/Secrets-Sand-Hill-Road-Venture/dp/059308358X",
            note: "Scott Kupor",
          },
        ],
      },
      {
        title: "Podcasts",
        items: [
          {
            label: "Venture Unlocked",
            href: "https://podcasts.apple.com/us/podcast/venture-unlocked-the-playbook-for-venture-capital/id1535501313",
          },
          {
            label: "The Twenty Minute VC",
            href: "https://www.thetwentyminutevc.com",
          },
          {
            label: "Spearhead",
            href: "https://podcasts.apple.com/us/podcast/spearhead/id1412486606",
          },
          {
            label: "The Consumer VC",
            href: "https://theconsumervc.com",
          },
          {
            label: "How I Built This",
            href: "https://www.npr.org/series/490248027/how-i-built-this",
          },
          {
            label: "Women in Venture Capital",
            href: "https://podcasts.apple.com/us/podcast/women-in-venture-capital/id1526012261",
          },
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
    representativeAt: [
      { name: "Novartis NIBR" },
      { name: "ReCode Therapeutics" },
      { name: "Alnylam" },
      { name: "Lux Capital" },
    ],
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
      "Mentorship and resources for clinicians building careers in consulting, life sciences, and healthcare strategy.",
    description:
      "Our community mentors and connects clinicians navigating careers at the intersection of medicine and industry; whether that's management consulting, life sciences strategy, or advisory work at medtech companies, startups, and beyond. Members range from medical students to attendings, spanning full- and part-time consultants, physicians in industry roles, and those doing side-gig advisory work at life sciences firms, digital health startups, and device companies. We partner with consulting firms and case prep resources to help you break in and succeed.",
    slackChannel: "md-consulting",
    teamVertical: "Consulting",
    representativeAt: [
      { name: "McKinsey", href: "https://www.mckinsey.com" },
      { name: "Bain", href: "https://www.bain.com" },
      { name: "BCG", href: "https://www.bcg.com" },
      { name: "LEK", href: "https://www.lek.com" },
      { name: "EY-Parthenon", href: "https://www.ey.com/en_us/services/strategy/parthenon" },
      { name: "Charles River Associates", href: "https://www.crai.com" },
      { name: "Accenture", href: "https://www.accenture.com" },
      { name: "Deloitte", href: "https://www.deloitte.com" },
    ],
    resources: [
      {
        title: "Sign Ups for Consulting Opportunities",
        items: [
          {
            label: "Harvard Biotech Club",
            href: "https://thebiotechclub.us16.list-manage.com/subscribe?id=1d5beb74df&u=081d647514108a0ce600a149b",
          },
          {
            label: "Duke Consulting Club",
            href: "https://lists.duke.edu/sympa/info/consulting",
          },
          {
            label: "Yale Graduate Student Consulting Club",
            href: "https://www.ygccgradconsulting.org/join-us",
          },
          {
            label: "Biotech Connection Bay Area",
            href: "https://biotechconnectionbay.org/",
          },
          {
            label: "Consulting Club at Texas Medical Center",
            href: "https://www.medcenterconsulting.com/plans",
          },
        ],
      },
      {
        title: "General Consulting Resources",
        items: [
          {
            label: "Resume Template",
            href: "https://www.wallstreetoasis.com/resources/templates/word-templates/consulting-resume-template",
          },
          {
            label: "Cover Letter Template",
            href: "https://managementconsulted.com/consulting-cover-letter/",
          },
          {
            label: "MBB Online Tests",
            href: "https://www.casebasix.com/pages/consulting-articles#consultingonlinetests",
            note: "Free practice",
          },
          {
            label: "Consulting Casebooks",
            href: "https://www.casebasix.com/pages/mbb-case-bank",
          },
          {
            label: "Roadmap to Consulting",
            href: "https://docs.google.com/presentation/d/1Ygg5YL78tZye25DeG6UIRI0l9eJMiEGiNBrLQ2DLZSU/edit?usp=sharing",
            note: "Slide deck",
          },
          {
            label: "Breaking into Consulting 101",
            href: "https://drive.google.com/file/d/1tOoB6I3XOUYuDw0sdxGW9f3-n0S_AZmf/view?usp=drive_link",
          },
        ],
      },
      {
        title: "Partners",
        items: [
          {
            label: "RocketBlocks",
            href: "https://www.rocketblocks.me/",
            note: "Case interview prep — use code MDplus_2025 for 10% off",
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
    slackChannel: "md-research",
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
