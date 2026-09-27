/**
 * ScITech Academy - Course Seed Catalog
 * Illustrative, structured course data for filtering, sorting, search, and detail modal/pages.
 */
export const COURSES = [
  {
    id: 'lit-review-foundations',
    title: 'Literature Review Foundations & Synthesis',
    category: 'Research Skills',
    level: 'Beginner',
    type: 'Free',
    format: 'Recorded',
    availability: 'Instant Access',
    duration: '2.5 Hours',
    modulesCount: 5,
    summary: 'Master systematic searching, screening matrix creation, and thematic synthesis for thesis and paper literature reviews.',
    description: 'This foundational self-paced module guides researchers through structuring a rigorous literature review. Learn how to map search strategies across databases (PubMed, Scopus, IEEE Xplore), synthesize conflicting studies into a matrix, and formulate clear research gap statements.',
    outcomes: [
      'Construct reproducible Boolean search strings across academic databases',
      'Design a structured literature matrix to organize 50+ papers efficiently',
      'Identify critical research gaps without subjective bias',
      'Synthesize findings chronologically, thematically, or methodologically'
    ],
    audience: 'Postgraduate students, early-career researchers, and dissertation writers.',
    prerequisites: 'No prior experience required; access to an academic library or PubMed recommended.',
    curriculum: [
      { title: 'Module 1: Defining the Scope & Research Question (PICO / SPIDER)', duration: '25 mins' },
      { title: 'Module 2: Database Query Design & Search Strings', duration: '35 mins' },
      { title: 'Module 3: Building the Synthesis Matrix', duration: '30 mins' },
      { title: 'Module 4: Critical Appraisal & Bias Assessment', duration: '30 mins' },
      { title: 'Module 5: Writing the Literature Review Chapter', duration: '30 mins' }
    ],
    instructor: 'Dr. E. Vance, Senior Research Methodologist',
    actionText: 'Watch Free Lesson',
    hasPreview: true,
    sampleVideoUrl: null // Triggers honest "Preview coming soon" UI
  },
  {
    id: 'research-methodology-essentials',
    title: 'Research Methodology & Experimental Design',
    category: 'Research Skills',
    level: 'Intermediate',
    type: 'Paid',
    price: 'Enquire about enrollment',
    format: 'Live Workshop',
    availability: 'Next cohort: Oct 15, 2026',
    duration: '4 Weeks (8 Live Sessions)',
    modulesCount: 6,
    summary: 'Formulate robust experimental paradigms, control variables, and sampling strategies for quantitative & qualitative studies.',
    description: 'An intensive interactive workshop focusing on design integrity, threat reduction to internal/external validity, sampling power, and ethical protocol approval.',
    outcomes: [
      'Select between experimental, quasi-experimental, and observational designs',
      'Calculate statistical sample size and statistical power requirements',
      'Develop standardized data collection protocols and data dictionaries',
      'Prepare IRB / Ethics committee documentation'
    ],
    audience: 'Master’s and PhD researchers preparing methodology proposals.',
    prerequisites: 'Basic familiarity with research goals in your discipline.',
    curriculum: [
      { title: 'Week 1: Conceptual Frameworks & Variable Operationalization', duration: '2 hrs' },
      { title: 'Week 2: Quantitative Experimental Paradigms & Controls', duration: '2 hrs' },
      { title: 'Week 3: Qualitative Approaches & Triangulation', duration: '2 hrs' },
      { title: 'Week 4: Sampling Strategies & Ethical Compliance', duration: '2 hrs' }
    ],
    instructor: 'ScITech Research Faculty',
    actionText: 'Enquire about Enrollment',
    hasPreview: false
  },
  {
    id: 'academic-writing-referencing',
    title: 'Academic Writing Precision & Citation Mastery',
    category: 'Academic Writing',
    level: 'Beginner',
    type: 'Free',
    format: 'Recorded',
    availability: 'Instant Access',
    duration: '3.0 Hours',
    modulesCount: 4,
    summary: 'Eliminate academic prose ambiguities, structure arguments logically, and master APA, IEEE, and Chicago styles.',
    description: 'Transform rough drafts into crisp, publication-grade academic prose. Learn paragraph cohesion, hedge terms, precise citation placement, and automated reference management (Zotero/Mendeley).',
    outcomes: [
      'Apply the IMRaD structure effectively across journal papers',
      'Master academic hedging vs. decisive scientific claims',
      'Automate citation bib files and style switching in Word and LaTeX',
      'Avoid inadvertent plagiarism and improper paraphrase'
    ],
    audience: 'Students, researchers, and engineers writing papers, theses, or grant applications.',
    prerequisites: 'Working draft or outline of a scientific document.',
    curriculum: [
      { title: 'Module 1: Paragraph Architecture & Flow', duration: '40 mins' },
      { title: 'Module 2: Sentence Precision & De-cluttering Technical Jargon', duration: '45 mins' },
      { title: 'Module 3: Citation Standards (APA 7th, IEEE, Vancouver, Chicago)', duration: '45 mins' },
      { title: 'Module 4: Reference Manager Workflow (Zotero & LaTeX BibTeX)', duration: '50 mins' }
    ],
    instructor: 'A. Thorne, Senior Technical Editor',
    actionText: 'Watch Free Lesson',
    hasPreview: true
  },
  {
    id: 'statistical-analysis-fundamentals',
    title: 'Statistical Analysis Fundamentals for Researchers',
    category: 'Data Analysis',
    level: 'Intermediate',
    type: 'Paid',
    price: 'Enquire about enrollment',
    format: 'Live Workshop',
    availability: 'Next cohort: Nov 2, 2026',
    duration: '6 Weeks (12 Sessions)',
    modulesCount: 8,
    summary: 'Understand hypothesis testing, ANOVA, linear regression, and non-parametric statistics with R and Python.',
    description: 'Bridge the gap between raw datasets and defensible scientific inferences. Hands-on coding labs in R and Python covering normality tests, parametric/non-parametric tests, effect sizes, and p-value interpretations.',
    outcomes: [
      'Choose the correct statistical test for continuous vs. categorical data',
      'Execute paired/unpaired t-tests, ANOVA, and multivariate regression',
      'Compute confidence intervals and effect sizes (Cohen’s d, Eta-squared)',
      'Report statistical results adhering to peer-review journal standards'
    ],
    audience: 'Researchers requiring statistical validation for experimental data.',
    prerequisites: 'Basic algebra; no previous programming required.',
    curriculum: [
      { title: 'Week 1: Descriptive Statistics & Data Distributions', duration: '3 hrs' },
      { title: 'Week 2: Hypothesis Testing Principles & Confidence Intervals', duration: '3 hrs' },
      { title: 'Week 3: Parametric Tests (t-tests, ANOVA, MANOVA)', duration: '3 hrs' },
      { title: 'Week 4: Non-Parametric Alternatives (Mann-Whitney, Kruskal-Wallis)', duration: '3 hrs' },
      { title: 'Week 5: Regression Modeling & Multicollinearity', duration: '3 hrs' },
      { title: 'Week 6: Reporting Stats in Manuscripts & APA Tables', duration: '3 hrs' }
    ],
    instructor: 'Dr. M. Chen, Lead Data Scientist',
    actionText: 'Enquire about Enrollment',
    hasPreview: false
  },
  {
    id: 'data-viz-for-research',
    title: 'Data Visualization & Figure Design for Publications',
    category: 'Data Analysis',
    level: 'Intermediate',
    type: 'Free',
    format: 'Recorded',
    availability: 'Instant Access',
    duration: '2.0 Hours',
    modulesCount: 4,
    summary: 'Design high-resolution vectors, publication-ready plots, error bars, and accessible color palettes using Python & R.',
    description: 'Learn how to turn complex datasets into clear, communicative vector graphics (300+ DPI, EPS/PDF/PNG) that comply with Nature, IEEE, and Elsevier figure guidelines.',
    outcomes: [
      'Select effective chart types (box plots, violin plots, heatmaps, scatter plots)',
      'Incorporate standard error (SE) and standard deviation (SD) error bars correctly',
      'Use colorblind-friendly color palettes (Viridis, ColorBrewer)',
      'Export multi-panel figures (Figure 1A, 1B, 1C) at required print DPI'
    ],
    audience: 'Researchers, graduate students, and analysts creating publication figures.',
    prerequisites: 'Basic tabular dataset ready for visualization.',
    curriculum: [
      { title: 'Module 1: Principles of Scientific Data Visualization', duration: '30 mins' },
      { title: 'Module 2: Plotting Continuous & Discrete Distributions', duration: '30 mins' },
      { title: 'Module 3: Multi-Panel Figure Layouts & Annotation', duration: '30 mins' },
      { title: 'Module 4: Exporting High-Res Vector Graphics for Publishers', duration: '30 mins' }
    ],
    instructor: 'ScITech Analytics Team',
    actionText: 'Watch Free Lesson',
    hasPreview: true
  },
  {
    id: 'applied-ai-for-researchers',
    title: 'Applied AI & LLMs for Academic Workflows',
    category: 'AI & Technology',
    level: 'Advanced',
    type: 'Paid',
    price: 'Enquire about enrollment',
    format: 'Recorded',
    availability: 'Instant Access',
    duration: '4.5 Hours',
    modulesCount: 6,
    summary: 'Ethical application of LLMs for literature indexing, code debugging, tabular extraction, and thesis drafting assistance.',
    description: 'Learn how to integrate AI tooling into research workflows responsibly without compromising academic integrity, original authorship, or confidential data privacy.',
    outcomes: [
      'Use local open-source LLMs to index and query confidential research PDFs',
      'Prompt-engineer code assistance for statistical cleanup scripts',
      'Identify hallucinated citations and verify literature claims',
      'Comply with institutional and journal AI disclosure policies'
    ],
    audience: 'Academics, researchers, and software engineers seeking AI workflow enhancement.',
    prerequisites: 'Familiarity with basic AI/LLM concepts.',
    curriculum: [
      { title: 'Module 1: Academic Integrity & AI Disclosure Guidelines', duration: '40 mins' },
      { title: 'Module 2: Local PDF Indexing & RAG for Literature Retrieval', duration: '50 mins' },
      { title: 'Module 3: Code Generation & Debugging for R/Python Analysis', duration: '45 mins' },
      { title: 'Module 4: Tabular Data Extraction & Structuring', duration: '45 mins' },
      { title: 'Module 5: Detecting Hallucinations & Fact Verification', duration: '45 mins' },
      { title: 'Module 6: Creating Custom Academic Prompts', duration: '45 mins' }
    ],
    instructor: 'ScITech AI & Tech Lab',
    actionText: 'Enquire about Enrollment',
    hasPreview: false
  },
  {
    id: 'technical-report-crafting',
    title: 'Technical Report Crafting for Engineers & Scientists',
    category: 'Academic Writing',
    level: 'Intermediate',
    type: 'Free',
    format: 'Recorded',
    availability: 'Instant Access',
    duration: '1.8 Hours',
    modulesCount: 3,
    summary: 'Structure executive summaries, technical specs, risk matrices, and appendix datasets for industry & academic stakeholders.',
    description: 'Learn how to present engineering and empirical findings to both expert technical reviewers and non-technical decision-makers.',
    outcomes: [
      'Draft compelling executive summaries',
      'Organize technical specifications and compliance tables',
      'Format appendices, code snippets, and raw measurement logs'
    ],
    audience: 'Engineers, industrial researchers, and technical project leads.',
    prerequisites: 'Basic technical project background.',
    curriculum: [
      { title: 'Module 1: Executive Summaries & Decision Matrices', duration: '35 mins' },
      { title: 'Module 2: Technical Body Structuring & Risk Diagrams', duration: '40 mins' },
      { title: 'Module 3: Formatting Appendices & Raw Data Logs', duration: '35 mins' }
    ],
    instructor: 'ScITech Engineering Writing Group',
    actionText: 'Watch Free Lesson',
    hasPreview: true
  }
];
