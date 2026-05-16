/**
 * Team roster for /about/team.
 *
 * CURRENT_TEAM  — active 2026–27 exec team with verbatim bios and profile data.
 * PAST_YEARS    — append-only log; add each outgoing year at the top so the
 *                 accordion shows newest-first. Names stay indexable for SEO.
 * FOUNDERS      — static; the four who started it in 2019.
 */

export type RoleTier = "co-chair" | "vp" | "director";

export type CurrentMember = {
  name: string;
  role: string;
  tier: RoleTier;
  vertical?: string;
  school?: string;
  /** Verbatim "Website Bio" from the team directory. Shown full in the modal,
   *  truncated on the card. */
  bio?: string;
  /** Verbatim "What is your plus?" */
  plus?: string;
  /** Verbatim "Why did you join MD+?" */
  whyJoined?: string;
  /** Verbatim "Interesting/Weird Fact or Talent" */
  funFact?: string;
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
  // ── Co-Chairs ─────────────────────────────────────────────────────────────
  {
    name: "Arvind Rajan",
    role: "Co-Chair",
    tier: "co-chair",
    school: "UNC School of Medicine",
    bio: "Arvind is an MD candidate at the UNC School of Medicine currently on a leave of absence working in healthcare AI at Doximity. Before medical school he pursued an MPH where he researched racial disparities in cancer care, which developed his interest in oncology as a field. In medical school, he's further explored that interest through research and has deepened his focus on clinical AI, particularly in medical education. In his free time, he enjoys Carolina basketball, traveling, and videography.",
    plus: "My plus is healthcare AI - specifically how it can transform both medical education and clinical workflows. I'm currently on a leave of absence working at Doximity, where I focus on building AI tools that reduce physician burnout and help clinicians deliver better care on their own terms. I'm equally drawn to the medical education side - how AI can improve how we train the next generation of clinicians.",
    whyJoined:
      "I came into med school with a side interest in tech/innovation, but it was hard to find a community of folks in med school with similar interests. I found MD+ and realized there was a whole community of people thinking about the same things I was. Since joining, I've met people I genuinely wouldn't have found otherwise, and a lot of the opportunities I've gotten at the intersection of medicine and tech have come directly through this organization. It's been incredibly valuable to be able to contribute to this organization that has given me so much.",
    funFact:
      "I was in the Mr. Beast squid game video for under 1 second - still got a major bag though",
  },
  {
    name: "Emily Leventhal",
    role: "Co-Chair",
    tier: "co-chair",
    school: "Icahn School of Medicine at Mount Sinai",
    bio: "Emily is an MD-PhD student in her first year of the PhD at the Icahn School of Medicine at Mount Sinai. Her research leverages genetics, clinical data, and AI to better understand women's health and mental health conditions. Before and during medical school, she has worked on a mobile health intervention for anxiety, at an e-consult platform startup, and at a biotech startup focused on precision medicine. Through MD+, she has led two national datathons and spearheaded an initiative in which trainees authored white papers on the role of AI across clinical specialties. At Sinai, she co-directed courses on ethical AI and modern medical ethics. Beyond medicine and academics, Emily loves to run in Central Park, do yoga, listen to music, and spend time with friends in NY!",
    plus: "My pluses are AI and ethics. I love the prospect of building models with new technology that will meaningfully advance the future of women's health. In undergrad, I also minored in bioethics and have always loved exploring ethics topics in medicine.",
    whyJoined:
      "I initially joined MD+ to find opportunities to continue to develop my knowledge in AI and develop my computational skills while in medical school. Medical school can feel all-encompassing at times, and it has been so great for me to have a way to continue to develop my outside interests and maintain that aspect of my identity during this time. I have absolutely loved connecting with like-minded students across the entire country and building meaningful initiatives for this group!",
  },

  // ── VPs — Operations ──────────────────────────────────────────────────────
  {
    name: "Kaden Bunch",
    role: "VP of Operations",
    tier: "vp",
    school: "Warren Alpert Medical School of Brown University",
    bio: "Kaden Bunch is a second-year medical student at the Warren Alpert Medical School of Brown University with a background in biology, business, and entrepreneurship. He earned an MBA focused on operations and start-ups before medical school and applies this expertise to healthcare innovation. His research explores machine learning and large language models for predicting mental health conditions and disease outcomes, as well as leadership competencies in medical education. He has led initiatives in vision screening for underserved populations and curriculum innovation while also supporting students in data science through MD+. Outside of medicine, Kaden enjoys spending time at the beach with his wife and caring for their two Sphynx cats.",
    funFact:
      "As a child, I once flew from Utah to Minnesota with a scorpion in my shorts pocket after everyone told me not to. It went on to live for another three years with me afterward.",
  },
  {
    name: "Veer Shah",
    role: "VP of Operations",
    tier: "vp",
    school: "Icahn School of Medicine at Mount Sinai",
  },

  // ── VPs — External Relations ──────────────────────────────────────────────
  {
    name: "Ali Mirza",
    role: "VP of External Relations",
    tier: "vp",
    school: "UConn School of Medicine",
    bio: "Ali is an MD Candidate at UConn School of Medicine. A Foote Fellow and Da Vinci Scholar at the University of Miami, he studied Biochemistry and Classics while pursuing broad interests in computer science, game theory, economics, and international relations, supported by a fifth-year scholarship in Healthcare Economics, Management, and Policy. Prior to medical school, he worked as a Project Manager at Epic in Madison, WI, and founded Janus, a marketing agency he grew to $250K ARR. In medical school, he has published two machine learning papers, writes on his Substack Side Effects, and built Rounds (100 DAU) and Sitr (1,000+ peak users). He is pursuing Cardiology with a focus on technology-enabled innovation in patient care.",
    plus: "My 'plus' is treating medicine, entrepreneurship, and philosophy as parts of the same problem: how do we enable world-improving innovations? Whether it's building software to streamline clinical work or practicing cardiology to extend a patient's life, the goal is the same: providing people the time and tools to realize their own potential.",
    whyJoined:
      "I learned pretty early on that anyone who builds things, products, services, or systems, often walks a pretty lonely road with very few people who understand the challenges at every step. When I first got started in 2023, Nick Soman told me the most impactful thing I needed to hear: \"you need to put yourself in a different environment. You already are who you want to be, I can see it. You need to find the right environment to feel less crazy.\" This helped me find other innovators and builders, one of whom told me about MDplus, and I immediately knew I wanted to help other people pursue innovation and find community in the same way.",
    funFact:
      "I have self published a short stories book, Reveries: Through The Eyes of Others, available on Amazon.",
  },
  {
    name: "Kush Patel",
    role: "VP of External Relations",
    tier: "vp",
    school: "University of Miami Miller School of Medicine",
    bio: "Kush Patel is an MD/MBA candidate at the University of Miami Miller School of Medicine and the Herbert Business School. Before medical school, he received his Associate's and Bachelor's degrees from Emory University, where he spent much of his time organizing university-wide events and working in the Department of Cell Biology studying inflammatory pathways in cutaneous carcinomas. He is currently interested in interventional oncology and emerging technologies that enable localized chemotherapy delivery and improved tumor management. Outside of academics, Kush enjoys staying active and spending time outdoors, whether that's playing basketball, climbing, or trying new outdoor activities.",
    plus: "Since starting medical school, I've connected with alumni and leaders across healthcare to better understand where the field is heading. Through mentorship and guidance, I became interested in healthcare innovation and venture capital and currently serve as a Deal Analyst with the Cane Angel Network, where I help evaluate early-stage companies. I'm particularly interested in how physicians can play a role in shaping healthcare startups and ensuring new technologies and companies are built with a real understanding of clinical medicine and patient care.",
    whyJoined:
      "Toward the end of my time at Emory, I became involved in advocacy with the American Cancer Society, traveling to Capitol Hill to speak with legislators about cancer policy. Around the same time, I took a graduate-level computer science course on DNA alignment that introduced me to precision medicine and the growing role of technology in healthcare. While searching for communities that were passionate about this kind of innovation, I found MD+. Since joining, it has been a great way to connect with other students interested in the intersection of medicine, technology, business, and policy, and to learn from people thinking about the future of healthcare in different ways.",
    funFact: "I went to the French Alps to ice climb and learn alpine mountaineering.",
  },
  {
    name: "Rishma Jivan",
    role: "VP of External Relations",
    tier: "vp",
    school: "Rush Medical College",
    bio: "Rishma Jivan is an MD candidate at Rush Medical College and Community Champion for MD+ Chicago. Before medical school, she spent five years at San Francisco health tech startups Augmedix and Lyra Health, where she built revenue cycle management platforms and led EHR implementation projects. She also served as Clinic Coordinator for Ashland Free Medical Clinic, developing their hybrid telehealth platform during COVID-19. At Rush, Rishma founded three community service organizations focused on refugee health, transplant awareness, and cardiovascular wellness. As M4 Chair of Rush AI in Medicine, she is developing a four-year longitudinal AI curriculum and organizing workshops on AI applications in clinical practice. She has organized national medical conferences and advises early-stage health tech startups on clinical validation, AI workflows, and strategy. Outside of medicine, she dances, trains/boxes, and reads voraciously.",
    plus: "From advising early stage startups, doing clinical AI research, to understanding the business of healthcare, I love all of it! I feel strongly about having physicians at the forefront of driving the tech solutions we're building, what we are investing in, and the direction our medical care is taking while maintaining patients at the center of these decisions.",
    whyJoined:
      "I came into medical school having worked in healthtech and began feeling a disconnect from my peers when it came to my passions outside of my clinical work. Since the role of the physician is ever-evolving, especially amidst the current wave of innovation, I wanted a community to connect with who shared my passion for tech, research, business, and more within the field of healthcare. MD+ has been an amazing place to connect, collaborate, and be inspired by my peers and find different ways to drive the future of healthcare.",
    funFact: "I grew up in London!",
  },

  // ── VPs — Growth ──────────────────────────────────────────────────────────
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

  // ── VPs — Community ───────────────────────────────────────────────────────
  {
    name: "Maya Roytman",
    role: "VP of Community",
    tier: "vp",
    school: "Loyola University Chicago / Stritch School of Medicine",
    bio: "Maya is a MD/MA in Bioethics and Health Policy candidate at Loyola University Chicago Stritch School of Medicine. She is passionate about combining her interests in clinical medicine, entrepreneurship, ethics, and public health in her future career. Before medical school, she was a summer biomedical ethics research intern at Mayo Clinic, an intern at the AMA in the Council on Ethical and Judicial Affairs, and a Dana Neuroscience and Society Planning Grant Next Generation Leader at Harvard Medical School Center for Bioethics. She was previously an AI Clinical Fellow and Deputy Safety, Ethics, and Alignment Lead at Glass Health. In her free time, she loves watching movies, reading, and playing tennis.",
    funFact: "I did competitive Latin/ballroom dancing for six years!",
  },
  {
    name: "Ishani Bansal",
    role: "VP of Community",
    tier: "vp",
    school: "Icahn School of Medicine at Mount Sinai",
  },

  // ── Directors — AI & Data Science ─────────────────────────────────────────
  {
    name: "Joshua Robert",
    role: "Director",
    tier: "director",
    vertical: "AI & Data Science",
    school: "Texas A&M / EnMed",
    bio: "Joshua Robert is an MD/MEng candidate in Engineering Medicine (EnMed) at Texas A&M and the Editor-in-Chief of the Journal for Artificial Intelligence in Medicine (JAIM). His work sits at the intersection of clinical medicine, artificial intelligence, and biomedical innovation. Joshua has led and contributed to multiple AI-driven research projects spanning neuromodulation, cardiovascular risk modeling, and surgical safety systems. Beyond research, he is active in the startup and innovation ecosystem through the Texas Medical Center Innovation Factory, NASA, and national accelerators. In his free time he enjoys thrifting, flying his drone, videography, working out, and traveling.",
    plus: "My \"plus\" is artificial intelligence and data-driven systems in healthcare. I'm particularly interested in how AI can move beyond research and become practical infrastructure for medicine — tools that help physicians interpret complex information, reduce cognitive burden, and improve patient care. I'm especially excited about building systems that augment physicians rather than replace them, helping clinicians make better decisions while navigating the growing complexity of modern medicine.",
    whyJoined:
      "I joined MD+ because it brings together people in medicine who are thinking beyond the traditional path. I've always been interested in the intersection of medicine, technology, and entrepreneurship, but those conversations can be hard to find within the usual structure of medical training. MD+ creates a community where those interests are not only normal but encouraged. Since getting involved, I've met people who are building companies, shaping policy, advancing research, and rethinking how healthcare systems work.",
    funFact:
      "My birthday is Friday the 13th, half my wardrobe is thrifted, I founded and exited a startup, & Silver II in Fortnite btw 🤓",
  },
  {
    name: "Brandon Ye",
    role: "Director",
    tier: "director",
    vertical: "AI & Data Science",
    school: "Johns Hopkins University School of Medicine",
    bio: "Brandon Ye is a first year medical student at the Johns Hopkins University School of Medicine. Previously, he graduated with a bachelor's and master's degree in computational biology from the University of Southern California, where he developed tools to predict cancer patient outcomes using large single-cell liquid biopsy datasets. Brandon is passionate about using technology to advance medicine. At Hopkins, he conducts research in surgical outcomes, brain-computer interfaces, and AI-enabled medical devices. He enjoys spending his free time exploring the outdoors through backpacking, hiking, and trail-running.",
    plus: "Learning and working at the intersection of AI and medicine has made two things clear to me. First, AI is destined to change how we approach healthcare administration and patient care; but second, much work remains to be done to ensure it can perform ethically and safely at the bedside. I hope to combine my medical training and technical background to sustain dialogues between physicians, scientists, and policymakers regarding the ethical deployment of these new technologies in the service of our patients.",
    whyJoined:
      "My path to medicine was not straightforward — before I decided I wanted to become a doctor, I wanted to be a scientist. But in undergrad, a formative experience in the lab — the opportunity to work side by side with clinicians, scientists, and engineers — convinced me that medicine was a way to more directly apply creative and interdisciplinary perspectives in the service of patients. I'm grateful to have found a community that embodies this ethos in MD+.",
    funFact:
      "Before starting med school, I ran the Grand Canyon Rim-to-Rim-to-Rim and Trans-Catalina Trail, and solo-backpacked the Tahoe Rim Trail — always looking for recs on the East Coast 👀",
  },
  {
    name: "Alice Yu",
    role: "Director",
    tier: "director",
    vertical: "AI & Data Science",
    school: "Carle Illinois College of Medicine / UIUC",
    bio: "Alice Yu is a first-year medical student at the Carle Illinois College of Medicine at the University of Illinois Urbana-Champaign. Before medical school, she worked as a software engineer at Amazon, where she developed a mindset rooted in engineering at scale, systems thinking, and business. With a background in bioinformatics and big data, she is now applying that foundation to projects in clinical informatics and health tech. Outside of school, Alice immerses herself in the startup and hackathon community, building and advising solutions to optimize healthcare delivery. In her free time, she reviews restaurants on Beli, hikes, and travels in search of new places and experiences.",
    plus: "My plus is tech and healthcare innovation. I'm deeply interested in applying that to improve clinical workflows and healthcare delivery. Since joining MD+, I've been excited to discover new roles and pathways for physicians fusing tech and medicine to build at scale.",
    whyJoined:
      "Coming from a software engineering background, I'm excited about building things with scale and impact. I joined MD+ because I was looking for a community of physician-innovators who were looking for the same challenge. It's refreshing to be around people with a similar mindset about tech, business, and entrepreneurship in medicine. I'm excited to nurture that mindset and spark in the next generation of physicians, and help this community grow.",
    funFact: "One Shanghai summer as a kid, I owned a pet cricket named Guo Guo 🦗",
  },

  // ── Directors — Health Policy ──────────────────────────────────────────────
  {
    name: "Ankith Alluri",
    role: "Director",
    tier: "director",
    vertical: "Health Policy",
    school: "Drexel University College of Medicine",
    bio: "Ankith Alluri is an M1 in the B.S./M.D. program at Drexel University College of Medicine. He is involved with UN Shot@Life, where he organizes advocacy workshops and helps coordinate meetings between trained advocates and members of Congress to advance equitable global vaccine access. He also founded The Full Picture, a student-led curricular initiative involving more than 30 medical students that aims to teach the practical, policy, and systems-level aspects of medicine often missing from traditional medical education. Ankith is broadly interested in the intersection of medicine, health policy, and health systems. Outside of school, he enjoys reading widely—especially about healthcare policy and systems reform—thrifting, and exploring Philadelphia.",
    plus: "My curricular initiative is a way for me to help expand both my own and other medical students' understanding of health systems and topics not typically covered in medical school.",
    whyJoined:
      "Coming from a community-based medical school, I struggled to find others who shared my interests in health systems and the broader structure of healthcare. MD+ provided an outlet for those interests and a community where I could connect with like-minded peers. Since joining, I've met people pursuing policy work, building startups, and exploring diverse paths in healthcare, many of whom have offered valuable advice on how to build a network and further develop my nonclinical interests.",
    funFact:
      "I went skydiving in Maui with my mom — even though we're both afraid of heights!",
  },
  {
    name: "Uswa Khan",
    role: "Director",
    tier: "director",
    vertical: "Health Policy",
    school: "Washington University School of Medicine",
  },

  // ── Directors — Venture Capital ────────────────────────────────────────────
  {
    name: "Aneri Kothari",
    role: "Director",
    tier: "director",
    vertical: "Venture Capital",
    school: "UNC School of Medicine",
    bio: "Aneri Kothari is an MD/MBA candidate at the UNC School of Medicine. Prior to medical school, she worked in healthcare venture capital, where she evaluated digital health and clinical based startups, and developed a strong interest in the intersection of innovation, business, and clinical care. During medical school, she has continued to build on this interest through her work in women's health, medical education, and healthcare innovation, with a particular focus on how medical devices and emerging technologies can improve outcomes and expand access to care in obstetrics and gynecology, especially in underserved populations. Outside of medicine, Aneri enjoys traveling, staying active, spending time with friends, and exploring creative outlets including baking and painting.",
    plus: "My pluses are healthcare innovation and entrepreneurship and venture capital. I am equally motivated to take what I learn at the bedside and translate it into solutions that can improve care at scale — whether through building new tools, supporting early-stage companies, or helping shape how innovations enter clinical practice.",
    whyJoined:
      "I joined MD+ to find a community of individuals in medicine who were thinking beyond traditional clinical training and exploring innovation, technology, and new ways to improve healthcare. Since joining, I've connected with and learned from so many people doing exciting things in the healthcare innovation space! I'm looking forward to help strengthen and expand this community for others who are looking for the same sense of connection and opportunity.",
    funFact:
      "I've been skydiving, bungee jumping, and paragliding and am always looking forward to the next adventure!",
  },

  // ── Directors — Medical Devices ───────────────────────────────────────────
  {
    name: "Aliya Shabbir",
    role: "Director",
    tier: "director",
    vertical: "Medical Devices",
    school: "Harvard Medical School",
    bio: "Aliya Shabbir is a third-year medical student at Harvard Medical School. Prior to medical school, she worked as a clinical trials coordinator, where she gained hands-on experience at the interface of research and clinical care.",
  },

  // ── Directors — Biotech ───────────────────────────────────────────────────
  {
    name: "Shannon McLaughlin",
    role: "Director",
    tier: "director",
    vertical: "Biotech",
  },

  // ── Directors — Research ──────────────────────────────────────────────────
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
    bio: "Sam Mallahan is a first year medical student at Loyola Chicago Stritch School of Medicine. She graduated from Vanderbilt University in 2023 with a biomedical engineering degree and then worked as a data analyst at Tempus AI, a precision-oncology AI company in Chicago for two years. Her passion for her \"plus\" began after interning at Fogarty Innovation, a silicon-valley based startup incubator where she was paired with a women's FemTech company called Materna Medical — and from then on she's been deeply passionate about the ecosystem of healthcare innovation.",
    whyJoined:
      "I joined MD+ to continue exploring how I want my future career to look as an aspiring physician innovator. From my first exposure to the startup world working at Fogarty, to exploring the role of AI in medicine at Tempus, I was worried when I went back to school that I would have to give up these passions as a medical student — and I realized that was not true at all due to the awesome community of MDplus that has actually enabled me to do the exact opposite :)",
    funFact: "I solo backpacked Southeast Asia for a couple months before starting medical school!",
  },

  // ── Directors — Consulting ────────────────────────────────────────────────
  {
    name: "Eshita Garg",
    role: "Director",
    tier: "director",
    vertical: "Consulting",
    school: "Wright State University / Boonshoft School of Medicine",
    bio: "Esh Garg is a fourth-year medical student at Wright State University Boonshoft School of Medicine. Prior to medical school, she earned her B.S. from UC San Diego and her M.S. from Columbia University. After graduation, she'll be trading in the hospital for the world of management consulting. Outside of academics and professional pursuits, Esh loves to travel, junk journal, and enthusiastically dive into new hobbies — most of which she absolutely cannot keep up with for more than a week.",
    plus: "My \"pluses\" are biotech innovation, AI, and consulting — which is a long way of saying I have never been able to be just one thing. I've always known I didn't want to be \"just a physician,\" and along the way, I've leaned into that curiosity through experiences with ExactRx, No Patient Left Behind, Global Biotech Revolution, Nucleate, and more. I am building toward becoming a physician who understands these \"pluses\" and uses them to rethink and improve the healthcare ecosystem — because healthcare shouldn't exist in a silo, and neither should we.",
    whyJoined:
      "I joined MD+ to find my people — the ones who love medicine and have a few \"pluses\" on the side. I stumbled upon the Slack community during my leave of absence, when I was deep in my \"wait… do I actually want to do residency?\" era and exploring non-clinical paths. Joining the executive board was honestly a happy accident. I got excited (maybe too excited) about sharing everything I was learning on my journey into consulting, and somehow that turned into helping build a community where others can explore their own paths too.",
    funFact: "I am a supertaster (confirmed with the TAS2R38 gene variant)!",
  },
  {
    name: "Kai Thomas",
    role: "Director",
    tier: "director",
    vertical: "Consulting",
    school: "University of Central Florida College of Medicine",
    bio: "Kai Thomas is an MS1 at the University of Central Florida College of Medicine. During his undergraduate studies at UCSB, he worked as a surgical technician, gaining a unique understanding of the interaction between medical device companies and the surgeons who consult on new technologies. He is currently interning at NeXtGen Biologics, a medical device startup, focusing on the research and development of a novel bone product for spine surgeries, and plans to transition to a consultant role following his internship. Kai is involved in multiple orthopedic research projects and will further explore the field this summer through an internship at the UCSF Orthopaedic Trauma Institute. In his free time, he enjoys basketball, surfing, snowboarding, traveling, and finance.",
    plus: "My plus is interning at a medical device company as R&D consultant. For the past three months, my internship at NeXtGen Biologics has provided incredible insight into the world of medical device development and the critical role physicians play in that process. I am excited to continue this work and plan to explore every available opportunity in the field.",
    whyJoined:
      "I joined MD+ because I am passionate about the intersection of clinical care and medical technology. It is easy to get focused entirely on traditional training, but my experiences have shown me how much innovation happens behind the scenes. I wanted to surround myself with a community of forward-thinking peers who are just as driven to explore consulting, device development, and the broader business of medicine.",
    funFact: "I've ran with the bulls in Spain!",
  },

  // ── Directors — Alumni Engagement ─────────────────────────────────────────
  {
    name: "Connor Alder",
    role: "Director",
    tier: "director",
    vertical: "Alumni Engagement",
    school: "Washington University School of Medicine",
    bio: "Connor Alder is an M2 at Washington University School of Medicine in St. Louis with interests in global health, entrepreneurship, and healthcare innovation. Before and during medical school, he has built and led multiple ventures at the intersection of medicine and technology, including a marketing agency for mental health clinics and Brivy, an AI-powered clinical scribe for therapists. He also leads research in global ophthalmology, with publications about the cost-effectiveness of addressing ROP in Rwanda, and authorship representation in sub-Saharan Africa. Outside of medicine, Connor loves watching and playing basketball and going on backpacking trips with friends.",
    plus: "My plus is exploring healthcare startups. For now, I'm particularly interested in AI as a means to improve access and equity in global ophthalmology. I'm especially interested in understanding which interventions are scalable even in low-resource settings.",
    whyJoined:
      "I joined MD+ because of the people! This is one of the first places in medical school where I found people interested in building things and thinking about problems beyond the clinic. Some of my favorite experiences in medical school so far came from being around people with this kind of \"innovator\" mindset. It's not super common in medicine, but MD+ is a place where it's the norm.",
    funFact: "I'm a big foodie. Been rocking the Yelp Elite badge since 2021.",
  },
  {
    name: "Rohan Chandraghatgi",
    role: "Director",
    tier: "director",
    vertical: "Alumni Engagement",
    school: "Drexel University College of Medicine",
    bio: "Rohan Chandraghatgi is an MS1 in Drexel University College of Medicine's BS/MD program. Before medical school, he conducted research in computational drug discovery and developed image registration algorithms for digital pathology workflows at Mayo Clinic. He is now working with a team at Penn Medicine focused on data drift detection in digital pathology, and this summer he will be joining MD Anderson Cancer Center to pursue deep learning research in radiation oncology. His work is guided by a broader interest in healthcare AI and digital transformation, and the challenge of building intelligent systems that perform reliably in real clinical environments. Outside of research, he enjoys exploring Philadelphia's food scene and traveling as much as possible.",
    plus: "My plus is in the development of robust AI technologies to improve healthcare delivery. Currently, I investigate data drift in longitudinal pathology datasets and its implications for deploying deep learning models in diagnostic support systems. In the future, I hope to help health systems deploy diagnostic support tools safely and effectively.",
    whyJoined:
      "I have always been passionate about medical innovation but struggled to find peers at my medical school who shared my interests. Through MD+, I found a community of likeminded peers passionate about transforming healthcare. I have met some incredibly talented people through MD+ and have learned so much more about medical innovation than I would have on my own.",
    funFact: "I was on the last ever Spirit flight to take off!",
  },
];

// ── Founders ──────────────────────────────────────────────────────────────────

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

// ── Past years — append-only, newest first ───────────────────────────────────

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
      { name: "Kylie Long", role: "VP of Growth" },
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
  {
    year: "2024–25",
    members: [
      { name: "Clara Sun", role: "Co-Chair" },
      { name: "Steve Stephen", role: "Co-Chair", school: "University of Rochester" },
      { name: "Arvind Rajan", role: "VP of Community", school: "UNC School of Medicine" },
      { name: "Maya Roytman", role: "VP of Community", school: "Loyola Chicago" },
      { name: "Kylie Long", role: "VP of Growth" },
      { name: "Lathan Liou", role: "VP of Finance", school: "Icahn School of Medicine" },
      { name: "Ann Marie Flusche", role: "VP of External Relations" },
      { name: "Aditya Jain", role: "VP of External Relations" },
      { name: "Sarah Wenyon", role: "Director, Internships" },
      { name: "Michael Yao", role: "Director, AI & Data Science" },
      { name: "Emily Leventhal", role: "Director, AI & Data Science", school: "Icahn School of Medicine" },
      { name: "Lawrence Huang", role: "Director, AI & Data Science" },
      { name: "Sam Youkilis", role: "Director, Venture Capital" },
      { name: "Jessika Baral", role: "Director, Venture Capital" },
      { name: "Apurva Kanneganti", role: "Director, Biotech" },
      { name: "Wilson Wang", role: "Director, Biotech" },
      { name: "Ian Odland", role: "Director, Medical Devices" },
      { name: "Arman Zadeh", role: "Director, Medical Devices" },
      { name: "Archita Goyal", role: "Director, Health Policy" },
      { name: "Elena Dennis", role: "Director, Health Policy" },
      { name: "Pranav Sanghvi", role: "Director, Consulting" },
      { name: "Dhuru Patel", role: "Director, Consulting" },
      { name: "Devika Patel", role: "Director, Design" },
    ],
  },
  {
    year: "2023–24",
    members: [
      { name: "Lathan Liou", role: "Co-Chair", school: "Icahn School of Medicine" },
      { name: "Clara Sun", role: "Co-Chair" },
      { name: "Steve Stephen", role: "VP of External Relations", school: "University of Rochester" },
      { name: "Vamsi Chodisetty", role: "VP of External Relations" },
      { name: "David Kulp", role: "VP of Community" },
      { name: "Zac Schulman", role: "VP of Community" },
      { name: "Heath Rutledge-Jukes", role: "VP of Growth" },
      { name: "Kylie Long", role: "VP of Growth" },
      { name: "Tsikata Apenyo", role: "VP of Finance" },
      { name: "Areeba Abid", role: "Director, AI" },
      { name: "Sarah Wenyon", role: "Director, Mentorship" },
      { name: "William Wulftange", role: "Director, Blockchain" },
      { name: "Michael Yao", role: "Director, Data" },
      { name: "Eric Shan", role: "Director, Data" },
      { name: "Ru Rashid", role: "Director, Venture Capital" },
      { name: "Jonathan Wakim", role: "Director, Venture Capital" },
      { name: "Apurva Kanneganti", role: "Director, Biotech" },
      { name: "Ian Odland", role: "Director, Medical Devices" },
      { name: "Arman Zadeh", role: "Director, Medical Devices" },
      { name: "Archita Goyal", role: "Director, Health Policy" },
      { name: "Navin Balaji", role: "Director, Consulting" },
      { name: "Prateek Sahni", role: "Director, Consulting" },
    ],
  },
  {
    year: "2022–23",
    members: [
      { name: "Lathan Liou", role: "Co-Chair", school: "Icahn School of Medicine" },
      { name: "Sherman Leung", role: "Founder, Co-Chair" },
      { name: "Clara Sun", role: "VP of Community" },
      { name: "Roxy Ghadimi", role: "VP of Community" },
      { name: "Peter Campbell", role: "VP of External Relations" },
      { name: "Natasha Puri", role: "VP of External Relations" },
      { name: "Kylie Long", role: "VP of Growth" },
      { name: "Charu Vyas", role: "VP of Growth" },
      { name: "Tsikata Apenyo", role: "VP of Finance" },
      { name: "Aneeqah Naeem", role: "VP of Advocacy" },
      { name: "Paul Lee", role: "Director, Data Science" },
      { name: "Areeba Abid", role: "Director, AI" },
      { name: "Abdullah Ahmed", role: "Director, AI" },
      { name: "Prateek Sahni", role: "Director, Healthcare Consulting" },
      { name: "Galen Shearn-Nance", role: "Director, Life Sciences" },
      { name: "Rob Chen", role: "Director, Life Sciences" },
      { name: "Geoff Bocobo", role: "Director, Medical Devices" },
      { name: "Ian Odland", role: "Director, Medical Devices" },
      { name: "Sarah Wenyon", role: "Director, Internships" },
      { name: "William Wulftange", role: "Director, Blockchain" },
      { name: "Jackie Xu", role: "Director, Health Policy" },
      { name: "Daniel Friedman", role: "Advisor" },
      { name: "Jon Wang", role: "Advisor (Entrepreneurship)" },
      { name: "Navin Balaji", role: "Advisor (Healthcare Consulting)" },
      { name: "Katie Link", role: "Advisor (AI)" },
    ],
  },
  {
    year: "2021–22",
    members: [
      { name: "Sherman Leung", role: "Founder, Co-Chair" },
      { name: "Daniel Friedman", role: "VP of External Relations" },
      { name: "Alex Wong", role: "VP of External Relations" },
      { name: "Bethany Dubois", role: "VP of Community" },
      { name: "Navin Balaji", role: "VP of Community" },
      { name: "David Mui", role: "VP of Content" },
      { name: "Caroline Liang", role: "VP of Finance" },
      { name: "Jay Canarick", role: "VP of Advocacy" },
      { name: "Jon Wang", role: "Director, Entrepreneurship" },
      { name: "Jun Jeon", role: "Director, Biotech" },
      { name: "Lathan Liou", role: "Director, Data Science" },
      { name: "Katie Link", role: "Director, AI" },
      { name: "Geoff Bocobo", role: "Director, Medical Devices" },
      { name: "Gary Wang", role: "Director, Health Policy" },
      { name: "William Wulftange", role: "Committee Chair, Crypto" },
    ],
  },
];

// ── Derived helpers ───────────────────────────────────────────────────────────

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
