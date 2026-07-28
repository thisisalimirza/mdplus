/**
 * Historical MDplus Datathon editions, ported from the old (Heroku-hosted)
 * MDplus DS&AI Flask site so the content survives that site's shutdown.
 *
 * Each edition renders at /programs/datathon/[year] using a single template
 * that shows only the sections present in the data — the schema is a superset
 * of what any one year needs. Add a new year by appending an entry here.
 *
 * Every external link from the old per-year pages is preserved here so we
 * don't lose registration forms, dataset docs, tutorials, recordings, or
 * example submissions when the old site goes away.
 */

export type DatathonLink = {
  label: string;
  href?: string;
  /** Optional sub-note shown under the link. */
  note?: string;
  /** Optional logo image path (used for sponsors), served from /public. */
  logo?: string;
};

/** Hero meta pill, e.g. "Team size: 3–6". */
export type DatathonMetaPill = { label: string; value: string };

/** Short "about" callout card (why this theme / who should join / etc.). */
export type DatathonHighlight = { title: string; body: string };

export type DatathonDataset = {
  name: string;
  href?: string;
  description: string;
  /** Access / usage requirements (credentialing, DUAs, training). */
  requirements?: DatathonLink[];
  /** Free-form note, e.g. "Beginner track" or download instructions. */
  note?: string;
};

/** A dated timeline entry (deadlines, kickoff, judging). */
export type DatathonTimelineItem = {
  date: string;
  title: string;
  description?: string;
  links?: DatathonLink[];
};

/** A scheduled event, often with a recording link. */
export type DatathonScheduleEvent = {
  when: string;
  title: string;
  description?: string;
  links?: DatathonLink[];
  /** Visually emphasize (e.g. the finalist pitch competition). */
  highlight?: boolean;
};

export type DatathonJudge = {
  name: string;
  href?: string;
  affiliation: string;
};

export type DatathonFinalist = {
  team: string;
  project: string;
  members: string;
};

export type DatathonFaq = {
  question: string;
  answer: string;
  /** Links referenced in the answer, preserved as a small "Related" list. */
  links?: DatathonLink[];
};

export type DatathonSponsorTier = {
  tier: string;
  sponsors: DatathonLink[];
};

export type DatathonTutorial = {
  title: string;
  links: DatathonLink[];
};

export type DatathonEdition = {
  /** URL segment and display year, e.g. "2025". */
  slug: string;
  year: string;
  /** e.g. "4th Annual". */
  edition: string;
  status: "upcoming" | "past";
  theme: string;
  /** Human-readable run dates. */
  dates: string;
  /** Hero subheading. */
  summary: string;
  /** Hero meta pills (dates, location, team size, eligibility). */
  meta?: DatathonMetaPill[];
  /** Intro paragraphs. */
  about: string[];
  /** Optional "about" callout cards. */
  highlights?: DatathonHighlight[];
  /** Competition tracks (2024's multi-track format). */
  tracks?: DatathonLink[];
  /** Any special rule callout (e.g. 2024's generative-AI restriction). */
  ruleCallout?: { title: string; body: string };
  datasets?: DatathonDataset[];
  githubHref?: string;
  tutorials?: DatathonTutorial[];
  /** Dated timeline (2025 style). */
  timeline?: DatathonTimelineItem[];
  /** Event schedule with recordings (2023 style). */
  schedule?: DatathonScheduleEvent[];
  judges?: DatathonJudge[];
  finalists?: DatathonFinalist[];
  /** Grand-prize copy, e.g. "$3,000 grand prize". */
  prize?: string;
  sponsors?: DatathonSponsorTier[];
  faqs?: DatathonFaq[];
  /** General resource links (e.g. the year's GitHub resource repo). */
  resources?: DatathonLink[];
  /** Point-of-contact organizers. */
  contacts?: DatathonLink[];
};

export const DATATHON_EDITIONS: DatathonEdition[] = [
  {
    slug: "2025",
    year: "2025",
    edition: "4th Annual",
    status: "past",
    theme: "Empowering Patients Through AI",
    dates: "October 17 – November 19, 2025",
    summary:
      "A national, month-long event bringing medical trainees together to explore complex healthcare challenges and build data-driven solutions on real clinical datasets.",
    meta: [
      { label: "Dates", value: "10/17/25 – 11/19/25" },
      { label: "Location", value: "Remote" },
      { label: "Team size", value: "3–6" },
      { label: "Open to", value: "Med students · Residents · Grad students" },
    ],
    about: [
      "The 4th annual MD+ Datathon was a national, month-long event that brought medical students from various backgrounds together to explore complex healthcare challenges and create data-driven solutions. Hosted by MD+ and its partners, the datathon encouraged interdisciplinary collaboration, innovative thinking, and real-world problem solving using clinical datasets. The theme was Empowering Patients Through AI.",
      "From the datasets provided, participants were asked to identify an addressable problem to explore by analyzing the dataset, then create an actionable recommendation or product.",
    ],
    highlights: [
      {
        title: "Why “Empowering Patients Through AI”?",
        body: "Students were encouraged to interpret the theme broadly and creatively — health literacy, access to care, after-visit summaries, chatbots for chronic conditions, insurance navigation, language accessibility, and more.",
      },
      {
        title: "Who should join?",
        body: "Medical students, residents, and graduate students pursuing degrees related to human health. Teams of 3–6 trainees; multidisciplinary teams are highly encouraged.",
      },
      {
        title: "What you'll gain",
        body: "Skills in data analysis and machine learning, experience tackling high-impact problems in patient care, opportunities to publish — and monetary prizes for the winners.",
      },
    ],
    datasets: [
      {
        name: "MIMIC-IV",
        href: "https://physionet.org/content/mimiciv/3.1/",
        description:
          "Patients admitted to the emergency department and the intensive care unit.",
        requirements: [
          {
            label: "Become a credentialed PhysioNet user",
            href: "https://physionet.org/settings/credentialing/",
          },
          {
            label: "Complete CITI Data or Specimens Only Research training",
            href: "https://physionet.org/content/eicu-crd/view-required-training/2.0/#1",
          },
          {
            label: "Sign the data use agreement",
            href: "https://physionet.org/sign-dua/eicu-crd/2.0/",
          },
        ],
      },
      {
        name: "mcPHASES",
        href: "https://physionet.org/content/mcphases/1.0.0/",
        description:
          "Physiological, hormonal, and self-reported events and symptoms for menstrual health tracking with wearables.",
        requirements: [
          {
            label: "Sign the data use agreement",
            href: "https://physionet.org/sign-dua/mcphases/1.0.0/",
          },
        ],
      },
      {
        name: "Chronic Illness Dataset",
        href: "https://www.kaggle.com/datasets/flaredown/flaredown-autoimmune-symptom-tracker",
        description:
          "Daily patient tracking of symptom severity, treatments and doses, and potential environmental triggers (foods, stress, allergens).",
        note: "Beginner track · Direct CSV download via Kaggle",
      },
      {
        name: "Diabetes Health Indicators",
        href: "https://www.kaggle.com/datasets/alexteboul/diabetes-health-indicators-dataset",
        description:
          "441,455 individuals and 330 features across survey questions and calculated variables, with three diabetes classes (none/pregnancy-only, prediabetes, diabetes).",
        note: "Beginner track · Direct CSV download via Kaggle",
      },
    ],
    timeline: [
      {
        date: "Anytime",
        title: "Find teammates",
        description: "Start finding 2–5 more teammates.",
        links: [
          {
            label: "Find teammates",
            href: "https://docs.google.com/presentation/d/1Jiq-VNzIVyjjiiXpymLOxcHlFMls37Tk2JnFb5Vt56I/edit?usp=sharing",
          },
        ],
      },
      {
        date: "Fri 10/17/25 · 11:59pm AOE",
        title: "Individual registration deadline",
        description: "Each individual submits the registration form.",
        links: [
          {
            label: "Register",
            href: "https://docs.google.com/forms/d/e/1FAIpQLSf3vxX_tvXN3muKcDPlrigADIwTgGW3p_nvGCJNFoz-wUjdJw/viewform?usp=dialog",
          },
        ],
      },
      {
        date: "Mon 10/20/25 · 7pm EST",
        title: "Kickoff meeting",
        links: [
          {
            label: "Google calendar",
            href: "https://calendar.google.com/calendar/embed?src=e849cd5a9656df4c9df59a8aec54db41db358511c24537ffb4af5ab03b92137d%40group.calendar.google.com&ctz=America%2FNew_York",
          },
        ],
      },
      {
        date: "Mon 10/20/25 · 11:59pm AOE",
        title: "Team registration deadline",
        description:
          "Register your team. If you haven't found teammates, reach out to us!",
        links: [
          {
            label: "Register your team",
            href: "https://docs.google.com/forms/d/e/1FAIpQLSeHMfRrCrcNUa5IOBXsXYtvcRj6d545g26KXJktRu156dkPVg/viewform?usp=dialog",
          },
        ],
      },
      {
        date: "Wed 10/29/25",
        title: "Week 2 check-in",
        description: "Our team reaches out via Slack for check-ins.",
      },
      { date: "Wed 11/5/25", title: "Week 3 check-in" },
      {
        date: "Thu 11/13/25 · 11:59pm AOE",
        title: "Final submission",
        links: [
          {
            label: "Submit final projects",
            href: "https://docs.google.com/forms/d/e/1FAIpQLSdbdL134TxA2_9lO6Wl24tjY2cJ8mnr3ly9VxqdRg4SChuHqA/viewform?usp=dialog",
          },
        ],
      },
      {
        date: "Wed 11/19/25 · 7pm EST",
        title: "Pitch competition",
        links: [
          {
            label: "Google calendar",
            href: "https://calendar.google.com/calendar/embed?src=e849cd5a9656df4c9df59a8aec54db41db358511c24537ffb4af5ab03b92137d%40group.calendar.google.com&ctz=America%2FNew_York",
          },
        ],
      },
    ],
    sponsors: [
      {
        tier: "Gold sponsors",
        sponsors: [
          { label: "Doximity", logo: "/datathon-sponsors/doximity.png" },
          { label: "Inflo Health", logo: "/datathon-sponsors/inflo.jpg" },
        ],
      },
      {
        tier: "Bronze sponsors",
        sponsors: [{ label: "Offcall", logo: "/datathon-sponsors/offcall.jpeg" }],
      },
      {
        tier: "Research collaborators",
        sponsors: [
          { label: "AMSA", logo: "/datathon-sponsors/amsa.png" },
          {
            label: "ConductScience",
            logo: "/datathon-sponsors/conductscience.png",
          },
        ],
      },
    ],
    faqs: [
      {
        question:
          "I have little/no data science or computational experience. Can I still participate?",
        answer:
          "Absolutely! Learning the computational tools is half the fun. Participants have access to tutorials covering the basics of Python and R and how to analyze the dataset. Submissions are judged on more than technical complexity — judges care more about the insights derived and the data analysis than the computational novelty.",
      },
      {
        question: "What is the time commitment?",
        answer:
          "We encourage all participants to attend the kickoff and the pitch competition, but otherwise there are no required synchronous events. The time commitment is as much as you and your team want to put into the project.",
      },
      {
        question: "What is the final product we are submitting?",
        answer:
          "Your team submits a report (of any length) of your findings along with your code. The report should include Background, Methods, Results, Discussion, and Conclusions.",
        links: [
          {
            label: "Submission guidelines",
            href: "https://docs.google.com/document/d/1KHmZIUCuyuoTis3iVjaT3MJmUyiLkpA7VJME6ZgEW5g/edit?usp=sharing",
          },
        ],
      },
      {
        question: "Do I need a team beforehand?",
        answer:
          "No. Search for teammates by adding your name and bio to the shared slides.",
        links: [
          {
            label: "Teammate-finder slides",
            href: "https://docs.google.com/presentation/d/1Jiq-VNzIVyjjiiXpymLOxcHlFMls37Tk2JnFb5Vt56I/edit?usp=sharing",
          },
        ],
      },
      {
        question: "Can I see previous examples of projects?",
        answer:
          "Yes! In 2024 the theme was “Responsible Generative AI,” and teams could publish an abstract-version of their findings in PRISM's special-edition journal. In 2023 the theme was Value-Based Care.",
        links: [
          {
            label: "PRISM special issue",
            href: "https://carolinaprism.unc.edu/current-issue/",
          },
          {
            label: "2023 example report submissions",
            href: "https://drive.google.com/drive/folders/1F8rYFLTICwNsY0T4PCZ27ImSuGBVcFCX?usp=drive_link",
          },
        ],
      },
    ],
    resources: [
      {
        label: "Datathon 2025 resources (GitHub)",
        href: "https://github.com/MDplusOfficial/Datathon2025",
      },
      {
        label: "Datasets overview doc",
        href: "https://docs.google.com/document/d/1CrcBUmhTZji_QYiRrDH7yV3LhVZHjP7X_WTzUm8QhNc/edit?tab=t.6fxpreswgmp2",
      },
    ],
    contacts: [
      { label: "Emily Leventhal", href: "mailto:emily.leventhal@icahn.mssm.edu" },
      { label: "Sahil Suresh", href: "mailto:sahil.suresh@tufts.edu" },
      { label: "Bhavana Kunisetty", href: "mailto:Bhavana.Kunisetty@bcm.edu" },
    ],
  },
  {
    slug: "2024",
    year: "2024",
    edition: "3rd Annual",
    status: "past",
    theme: "Multiple competition tracks",
    dates: "October 23 – November 13, 2024",
    summary:
      "The 3rd annual MD+ Datathon — a national, month-long event, and the first to run multiple parallel competition tracks each using a different publicly available dataset.",
    meta: [
      { label: "Dates", value: "10/23/24 – 11/13/24" },
      { label: "Pitch competition", value: "Mon 11/18/24 · 6pm EST" },
      { label: "Location", value: "Remote" },
      { label: "Prize", value: "$3,000 grand prize" },
    ],
    about: [
      "Welcome to the 2024 MDplus Datathon! The 3rd annual MD+ Datathon was a national, month-long event hosted by MD+ and sponsors to foster innovative thinking about complex healthcare problems and their data-driven solutions.",
      "Participants worked with medical students, graduate students, and trainees from all levels to generate insights and engineer solutions from clinical datasets. In contrast to prior years, this datathon was divided into three separate competition tracks, each using a different publicly available dataset. Specific datasets for each track were announced after team formation and made available on Hugging Face.",
      "Final projects and presentations were reviewed by a panel of expert judges, and the top 8 projects were invited to a live pitch competition. Pitches were capped at 8 minutes followed by 2 minutes of Q&A.",
    ],
    tracks: [
      { label: "Mental Health Track" },
      { label: "Clinical Documentation Track" },
      { label: "Medical Education Track" },
    ],
    ruleCallout: {
      title: "Use of generative AI",
      body: "If you used an LLM as part of your project, you could only use open-source models with 8 billion parameters or less. This restriction applied to the final submitted product, not the tools used during development.",
    },
    githubHref: "https://github.com/MDplusOfficial/Datathon2024/tree/main",
    tutorials: [
      {
        title: "Introduction to Python",
        links: [
          {
            label: "Example code",
            href: "https://github.com/MDplusOfficial/Datathon2024/blob/main/code/python_/intro.py",
          },
        ],
      },
      {
        title: "Introduction to R",
        links: [
          {
            label: "Example code",
            href: "https://github.com/MDplusOfficial/Datathon2024/blob/main/tutorials/INTRO_r.Rmd",
          },
        ],
      },
    ],
    timeline: [
      { date: "Tue 10/8/24", title: "Signups open" },
      { date: "Fri 10/18/24 · 11:59pm AOE", title: "Signups close" },
      {
        date: "10/18/24 – 10/23/24",
        title: "Application review, notification, and team formation",
      },
      {
        date: "Wed 10/23/24 · 6pm EST",
        title: "Start of datathon, datasets released",
      },
      {
        date: "Wed 11/13/24 · 11:59pm AOE",
        title: "Final submissions due",
      },
      {
        date: "Mon 11/18/24 · 6pm EST",
        title: "Finalist presentations in live pitch competition",
      },
    ],
    prize: "$3,000 grand prize",
    faqs: [
      {
        question:
          "I have little/no data science or computational experience. Can I still participate?",
        answer:
          "Absolutely! Learning the computational tools is half the fun. Participants have access to tutorials covering the basics of Python and R and how to analyze the dataset. Judges care more about the insights derived and the data analysis than computational novelty or complexity.",
      },
      {
        question: "What will we actually be doing?",
        answer:
          "Students are provided a dataset (e.g., claims and hospital data) and asked to identify an addressable problem (e.g., the impact of hospital quality metrics on spending), explore it by analyzing the dataset (e.g., an observational study comparing high- vs. low-quality hospitals, or an interpretable ML model), and create an actionable recommendation.",
      },
      {
        question: "What's the time commitment look like?",
        answer:
          "It's flexible and depends on your group and project.",
      },
    ],
    contacts: [
      { label: "Emily Leventhal" },
      { label: "Michael Yao", href: "mailto:michael@mdplusplus.org" },
      { label: "Lawrence Huang" },
    ],
  },
  {
    slug: "2023",
    year: "2023",
    edition: "2nd Annual",
    status: "past",
    theme: "Value-Based Care",
    dates: "October 25 – November 15, 2023",
    summary:
      "The 2nd annual MDplus Datathon — a chance to work with medical students, graduate students, and healthcare workers to derive data-driven insights and innovate solutions that advance patient care.",
    meta: [
      { label: "Dates", value: "10/25/23 – 11/15/23" },
      { label: "Pitch competition", value: "Mon 11/20/23 · 5pm EST" },
      { label: "Dataset", value: "MIMIC-IV" },
      { label: "Prize", value: "$3,000 grand prize" },
    ],
    about: [
      "Welcome to the 2023 MDplus Datathon! The datathon was a chance to work with medical students, graduate students, and healthcare workers from all backgrounds to derive data-driven insights and innovate solutions that advance patient care.",
      "The theme was value-based care. Teams of 3–5 explored a common dataset (MIMIC-IV) to answer a question or innovate a solution in alignment with the theme, using quantitative analyses to form clinical insights and contextualize them into actionable proposals for relevant stakeholders.",
    ],
    githubHref: "https://github.com/MDplusOfficial/Datathon2023/tree/main",
    tutorials: [
      {
        title: "Downloading & Overview of the MIMIC-IV Dataset",
        links: [
          {
            label: "Written tutorial",
            href: "https://github.com/MDplusOfficial/Datathon2023/blob/main/tutorials/MIMIC.md",
          },
        ],
      },
      {
        title: "Introduction to Python",
        links: [
          {
            label: "Example code",
            href: "https://github.com/MDplusOfficial/Datathon2023/blob/main/code/python_/intro.py",
          },
        ],
      },
      {
        title: "Introduction to R",
        links: [
          {
            label: "Example code",
            href: "https://github.com/MDplusOfficial/Datathon2023/blob/main/tutorials/INTRO_r.Rmd",
          },
        ],
      },
      {
        title: "Introduction to MIMIC-IV: Python",
        links: [
          {
            label: "Written tutorial",
            href: "https://github.com/MDplusOfficial/Datathon2023/blob/main/tutorials/MIMIC.md",
          },
          {
            label: "Example code",
            href: "https://github.com/MDplusOfficial/Datathon2023/blob/main/code/python_/database.py",
          },
        ],
      },
    ],
    schedule: [
      {
        when: "Wed 10/25 · 6pm EDT",
        title: "Datathon kickoff event",
        description:
          "The launch of the 2nd annual MD+ Datathon — event logistics, judging, and prizes.",
        links: [{ label: "Recording", href: "https://youtu.be/7hjTrusgtoc" }],
      },
      {
        when: "Mon 10/30 · 7pm EDT",
        title: "Introduction to Python",
        description:
          "For beginner programmers and those who have never programmed with Python.",
        links: [{ label: "Recording", href: "https://youtu.be/bJlYNFWc2vs" }],
      },
      {
        when: "Wed 11/01 · 7pm EDT",
        title: "Navigating MIMIC-IV with Python",
        description: "How to load, parse, and analyze the MIMIC-IV dataset.",
        links: [{ label: "Recording", href: "https://youtu.be/9g0GCwywQpI" }],
      },
      {
        when: "Tue 11/07 · 7pm EST",
        title: "Office Hours #1 with Lathan: R, general",
      },
      {
        when: "Wed 11/08 · 7pm EST",
        title: "Office Hours #2 with Michael: Python, general",
      },
      {
        when: "Sat 11/11 · noon EST",
        title: "Office Hours #3 with Michael: Python, general",
      },
      {
        when: "Mon 11/20 · 5pm EST",
        title: "Finalist pitch competition",
        description:
          "Pitches from the seven finalist teams competing for the $3,000 grand prize.",
        links: [
          { label: "Zoom link", href: "https://mssm.zoom.us/j/7595547813" },
        ],
        highlight: true,
      },
      {
        when: "Asynchronous",
        title: "Best Practices in Data Science",
        description:
          "A talk by Olivier Humblet, Head of HEOR at Regeneron, from the prior year's datathon.",
        links: [
          {
            label: "Recording",
            href: "https://drive.google.com/file/d/1lSkRFLWv4L1hGD7emTf68vMjcDWKfAiv/view",
          },
          {
            label: "Olivier Humblet",
            href: "https://www.linkedin.com/in/ohumblet",
          },
        ],
      },
    ],
    judges: [
      {
        name: "Reza Alavi, MD, MHS, MBA",
        href: "https://www.linkedin.com/in/reza-alavi-md-mba",
        affiliation: "Johns Hopkins University, Quintuple Aim Solutions",
      },
      {
        name: "Caroline Berchuck, MD, MPH",
        href: "https://www.linkedin.com/in/carolineberchuck",
        affiliation: "Brigham & Women's Hospital, McKinsey & Company",
      },
      {
        name: "Amit Phull, MD",
        href: "https://www.linkedin.com/in/amit-phull-09931667",
        affiliation: "Northwestern University, Doximity",
      },
      {
        name: "Sid Salvi",
        href: "https://www.linkedin.com/in/sid-salvi",
        affiliation: "ML/AI Product Leader & Advisor, prev. Cerebral",
      },
      {
        name: "Kathryn Teng, MD, MBA, FACP",
        href: "https://www.linkedin.com/in/kathryn-a-teng-md-mba-facp-92b4405b",
        affiliation: "Progressive Insurance, prev. Cleveland Clinic",
      },
    ],
    finalists: [
      {
        team: "Adrenergic Data-1 Receptor Agonists",
        project:
          "Minimizing Chronic Kidney Disease (CKD) Underdiagnosis Using Machine Learning",
        members:
          "Dany Alkurdi (Mt. Sinai), Felipe Giuste (Emory), Lawrence Huang (Brown), Keyvon Rashidi (Texas A&M), Sachin Shankar (Cincinnati)",
      },
      {
        team: "ALEYA",
        project:
          "Significant association of social work referral and 30-day unplanned hospital readmission for patients with alcohol-related disorders using MIMIC-IV data",
        members:
          "Amy Oh (Brown), Archita Goyal (Tufts), Emily Leventhal (Mt. Sinai), Lei Zhou (Mendel)",
      },
      {
        team: "Dodecahedron",
        project:
          "Can We Curb Frequent ED Visits Due to Alcohol-Related Conditions?",
        members:
          "Cailin Winston (UW Seattle), Caleb Winston (Stanford), Chloe Winston (Penn), Claris Winston (UW Seattle), Cleah Winston (UW Seattle)",
      },
      {
        team: "Rational Rockets",
        project:
          "Clinigrapher: Automatic Knowledge Graph Extraction from Medical Discharge Notes for Clinical Decision Support",
        members:
          "J.T. Bassett, Kiran Boyinepally, Lauren Fang, John Vergis (all University of Toledo)",
      },
      {
        team: "SuperLearners",
        project:
          "Contrast Overuse in Patients with Renal Disease: A Targeted Analysis",
        members:
          "Soryan Kumar (Brown), Ashwin Mahendra (Florida Atlantic), Arnav Kumar (Princeton)",
      },
      {
        team: "Team Pivot",
        project: "Analyzing Acuity as a Tool for Value-Based Care",
        members:
          "Joao Arthur Kawase De Queiroz Goncalves (Miami), Ian Ong (Penn), Sophie Reznik (Minnesota), Nikola Susic (Miami)",
      },
      {
        team: "Until It Compiles",
        project:
          "Machine Learning-driven forecasting and characterization of the ICU-admitted Heart Failure Patient Population in the MIMIC-IV v.04 database",
        members:
          "Nikith Erukulla, Jeff Kim, Simon Liu, Lucas Myint, Shashank Sandu (all University of Illinois)",
      },
    ],
    prize: "$3,000 grand prize",
    faqs: [
      {
        question:
          "I have little/no data science or computational experience. Can I still participate?",
        answer:
          "Absolutely! Learning the computational tools is half the fun. Participants have access to tutorials covering the basics of Python and R and how to analyze the dataset. Judges care more about the insights derived and the data analysis than computational novelty or complexity.",
      },
      {
        question: "What will we actually be doing?",
        answer:
          "Students are provided a dataset (e.g., claims and hospital data) and asked to identify an addressable problem, explore it by analyzing the dataset, and create an actionable recommendation.",
      },
      {
        question:
          "I don't have the best laptop for data analysis... Can I still participate?",
        answer:
          "Yes! We partnered with Hugging Face to bring free access to powerful computational resources dedicated to the event. Join the MDplus Hugging Face community to get started.",
        links: [
          { label: "MDplus on Hugging Face", href: "https://huggingface.co/mdplus" },
        ],
      },
      {
        question: "What's the time commitment look like?",
        answer:
          "It's flexible and depends on your group and project.",
      },
    ],
    contacts: [
      { label: "Eric Shan", href: "mailto:eric@mdplusplus.org" },
      { label: "Michael Yao", href: "mailto:michael@mdplusplus.org" },
    ],
  },
];

export function getDatathonEdition(
  slug: string,
): DatathonEdition | undefined {
  return DATATHON_EDITIONS.find((e) => e.slug === slug);
}
