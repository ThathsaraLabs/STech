/**
 * ScITech Resources Seed Data
 * Articles, Research Guides, Templates, and Free Learning Materials.
 */
export const RESOURCES = [
  {
    id: 'lit-review-checklist',
    title: 'Literature Review Planning & Matrix Checklist',
    category: 'Templates',
    type: 'Checklist & Template',
    format: 'PDF / Markdown',
    size: '145 KB',
    date: 'Sep 2026',
    readTime: '5 min review',
    summary: 'A structured 12-point checklist to scope research questions, track database queries, and build a literature synthesis matrix.',
    description: `### Literature Review Planning & Matrix Checklist
    
This sample starter checklist helps researchers systematically plan, execute, and document a literature review for a thesis, dissertation, or manuscript.

#### Key Sections:
1. **Scope & Research Question Formulation**
   - [ ] Define the primary research question using PICO (Population, Intervention, Comparison, Outcome) or SPIDER framework.
   - [ ] Identify secondary questions and explicit inclusion/exclusion criteria.
2. **Database Search Strategy**
   - [ ] Formulate key terms, synonyms, and MeSH / IEEE keywords.
   - [ ] Combine terms with Boolean operators (\`AND\`, \`OR\`, \`NOT\`) and field tags (\`TITLE-ABS-KEY\`).
   - [ ] Document search queries, database names, and date of execution for reproducibility.
3. **Screening & Quality Assessment**
   - [ ] Screen titles and abstracts against inclusion criteria.
   - [ ] Retrieve full-text PDFs and store using systematic file naming (\`Author_Year_Keyword.pdf\`).
   - [ ] Perform risk of bias or methodological quality assessment.
4. **Synthesis Matrix Construction**
   - [ ] Record Author, Year, Study Design, Sample Size, Primary Measures, Key Findings, Limitations, and Gaps.
   - [ ] Group studies by methodology, thematic outcome, or chronological evolution.
`,
    downloadUrl: '#download-lit-review-checklist',
    downloadFilename: 'ScITech_LitReview_Checklist.pdf'
  },
  {
    id: 'research-brief-template',
    title: 'Research Project Scope & Consultation Brief Template',
    category: 'Templates',
    type: 'Document Template',
    format: 'DOCX / Markdown',
    size: '120 KB',
    date: 'Sep 2026',
    readTime: '8 min template',
    summary: 'A comprehensive project specification template to outline research objectives, dataset parameters, writing scope, and timelines before seeking guidance.',
    description: `### Research Project Scope & Consultation Brief Template

Use this structured template to organize your research goals, methodology outline, data parameters, and specific support needs before consulting with ScITech guidance specialists.

#### Template Structure:
1. **Project Identification**
   - Project Title & Discipline
   - Target Document Type (Dissertation Chapter, Journal Paper, Conference Report)
   - Academic Level or Professional Context
2. **Current Project Status**
   - Completed Stages (Literature Review, Data Collection, Initial Draft)
   - Specific Pain Points or Blockers (e.g., statistical model selection, manuscript conciseness)
3. **Methodology & Data Overview (If Applicable)**
   - Research Design (Quantitative, Qualitative, Mixed-Methods)
   - Dataset Description (Sample size, variables, file format, confidentiality requirements)
4. **Deliverables & Timeline**
   - Requested Guidance Scope (Methodology Review, Language Editing, Data Analysis Guidance)
   - Key Target Deadlines
`,
    downloadUrl: '#download-research-brief-template',
    downloadFilename: 'ScITech_Research_Brief_Template.docx'
  },
  {
    id: 'data-prep-checklist',
    title: 'Data Preparation & Data Dictionary Checklist',
    category: 'Research Guides',
    type: 'Technical Guide',
    format: 'PDF / Markdown',
    size: '210 KB',
    date: 'Aug 2026',
    readTime: '10 min read',
    summary: 'Step-by-step guidelines for handling missing values, encoding variables, auditing outliers, and compiling a data dictionary prior to statistical testing.',
    description: `### Data Preparation & Data Dictionary Checklist

A clean dataset is essential for reliable statistical inference and reproducibility. Follow this checklist before executing statistical procedures or building AI models.

#### Audit Steps:
1. **Variable Naming & Encoding**
   - [ ] Use snake_case or camelCase for variable names (avoid spaces, special symbols, or trailing punctuation).
   - [ ] Explicitly code missing values (e.g., \`NA\` or \`NaN\`, never arbitrary zeros).
   - [ ] Create a comprehensive Data Dictionary detailing variable name, data type (nominal, ordinal, continuous), units of measurement, and valid value ranges.
2. **Data Cleaning & Anomaly Detection**
   - [ ] Check for duplicate record entries using unique participant IDs.
   - [ ] Perform univariate distribution checks (histograms/boxplots) to identify extreme values and recording errors.
   - [ ] Evaluate missingness mechanisms (MCAR, MAR, MNAR) before applying deletion or imputation strategies.
3. **Data Verification & Documentation**
   - [ ] Save immutable raw dataset copies in read-only format (\`raw_data.csv\`).
   - [ ] Document all cleaning transformations in a reproducible script (\`clean_data.R\` or \`clean_data.py\`).
`,
    downloadUrl: '#download-data-prep-checklist',
    downloadFilename: 'ScITech_Data_Prep_Checklist.pdf'
  },
  {
    id: 'structuring-technical-reports',
    title: 'Structuring Technical Reports: Executive Summaries & Technical Appendices',
    category: 'Articles',
    type: 'Article',
    format: 'Web Guide',
    size: 'Online',
    date: 'Aug 2026',
    readTime: '6 min read',
    summary: 'How to organize technical documentation so both executive stakeholders and technical peer reviewers can quickly extract critical insights.',
    description: `### Structuring Technical Reports

Technical reports bridge empirical engineering data and strategic decision-making. 

#### 1. The Dual-Audience Principle
A technical report must serve two distinct readers:
- **Executive Stakeholders:** Require key conclusions, risk assessments, cost-benefit trade-offs, and actionable recommendations within 2 pages.
- **Technical Reviewers:** Require full experimental protocols, mathematical derivations, boundary conditions, and raw measurement logs to verify validity.

#### 2. Recommended Structure
- **Title Page & Executive Summary:** Problem statement, core methodology, key quantitative result, and primary recommendation.
- **Introduction & Technical Background:** Context, design constraints, and regulatory/academic standards.
- **Methodology & Test Setup:** Hardware/software specs, experimental parameters, and calibration procedures.
- **Results & Data Interpretation:** Annotated plots, statistical confidence, and error source discussion.
- **Conclusions & Recommendations:** Prioritized action items.
- **Technical Appendices:** Detailed calculations, raw data tables, code snippets, and schematic diagrams.`,
    downloadUrl: null
  },
  {
    id: 'ai-tools-ethical-research',
    title: 'Ethical Guidelines for AI Tool Usage in Scientific Writing',
    category: 'Free Learning Materials',
    type: 'Policy Guide',
    format: 'PDF / Web',
    size: '180 KB',
    date: 'Jul 2026',
    readTime: '7 min read',
    summary: 'A clear guide on acceptable vs. unacceptable uses of AI language models in manuscript drafting, literature searching, and code generation.',
    description: `### Ethical Guidelines for AI Tool Usage in Scientific Writing

As large language models (LLMs) become common in academic workflows, researchers must maintain strict adherence to institutional ethics and publisher policies.

#### Acceptable AI Assistance:
- Correcting grammar, punctuation, and sentence clarity (copy-editing).
- Brainstorming search queries and Boolean database strings.
- Generating draft code snippets for data visualization and cleaning.
- Summarizing personal reading notes for quick review.

#### Unacceptable / Risky Practices:
- Generating fabricated citations, quotes, or empirical results.
- Submitting unverified AI-generated text as original scholarly analysis.
- Uploading confidential or unpublished research datasets/drafts to public, unencrypted cloud APIs without institutional authorization.
- Claiming AI software as a co-author on manuscripts.`,
    downloadUrl: '#download-ai-ethics-guide',
    downloadFilename: 'ScITech_AI_Ethics_Guide.pdf'
  }
];
