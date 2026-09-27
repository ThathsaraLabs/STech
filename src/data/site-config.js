/**
 * SciTech Site Configuration
 * Centralized brand metadata, navigation, contact channels, and integration endpoints.
 */
export const SITE_CONFIG = {
  name: 'SciTech',
  tagline: 'Science | Technology | Future',
  description: 'Academic & research guidance, IRB applications, assignment guidance, presentation design, writing & report support, data analysis, and online education.',
  contact: {
    whatsapp: '+821048355911',
    whatsappUrl: 'https://wa.me/821048355911',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM (KST / EST)',
    responseWindow: 'Fast response via WhatsApp'
  },
  servicesUrl: 'services.html',
  services: [
    {
      id: 'academic-research',
      title: 'Academic & Research Support',
      url: 'academic-research.html',
      description: 'Literature reviews, methodology design, IRB applications & reports, research writing & result interpretation guidance.',
      icon: 'microscope'
    },
    {
      id: 'writing-reports',
      title: 'Writing, Reports & Presentations',
      url: 'writing-reports.html',
      description: 'Technical reports, assignment guidance, academic presentation decks, language editing, proofreading & formatting.',
      icon: 'file-text'
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis & AI/ML',
      url: 'data-analysis.html',
      description: 'Statistical analysis, data cleaning, visualization, qualitative & quantitative interpretation.',
      icon: 'bar-chart'
    },
    {
      id: 'academy',
      title: 'SciTech Academy',
      url: 'academy.html',
      description: 'Structured live & recorded courses on research skills, writing, data, and applied AI.',
      icon: 'graduation-cap'
    }
  ],
  integrations: {
    formSubmitEndpoint: null,
    isPreview: true,
    fileUploadLimitMb: 10,
    supportedFormats: ['PDF', 'DOCX', 'CSV', 'XLSX', 'PPTX']
  }
};
