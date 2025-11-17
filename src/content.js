import WebDeveloperPic1 from './assets/WebDeveloperPic1.png'
import WebDeveloperPic2 from './assets/WebDeveloperPic2.png'

export const profile = {
  name: 'Maneesh Reddy Devireddy',
  tagline: 'An AI full-stack developer',
  location: 'United States',
  // availability: 'Open for new projects and collaborations.',
  summary:
    "With a Master's degree in Computer Science, I am a full-stack developer specializing in creating robust and scalable web applications. I meticulously design and optimize systems, ensuring clean, well-documented code across front-end, back-end, and database architectures. My approach involves translating complex requirements into intuitive features, troubleshooting intricate issues, and collaborating effectively to deliver high-performance solutions. I am driven by a passion for developing innovative technologies that can intelligently process and interpret information, continuously pushing the boundaries of what's possible.",
  bio: "My passion is building technology that solves complex operational problems, bridging the gap between sophisticated backend systems and the fast, intuitive frontends people actually use. I've applied this skill in logistics, engineering route optimization systems , and in higher education, managing and improving accessibility for over 100 university websites. When I tackle a project, I bring a few signature frameworks to the table. I frequently build full-stack analytics platforms using Python-Flask, ReactJS, and MongoDB , like the 'Smart Data Explorer' which empowers non-technical users to visualize data. I also have a deep background in AI tech, architecting systems using Transformers and NLP. A core part of my process is automation, using GitHub Actions and Playwright  to ensure reliable, end-to-end deliverables. This combination of skills contributed to my team winning 1st Place at the Smart India Hackathon 2022 , where I designed the 3D rendering pipeline and virtual try-on feature for our AR/VR Turban app.",
};

export const highlights = [
  { label: 'Programming Experience', value: '4 years' },
  { label: 'Focus', value: 'Product & Systems Design' },
  { label: 'Currently', value: 'Web Developer' },
];

export const projects = [
  {
    title: 'AI AdMaker',
    description:
      'AdMaker is a Flask web application that helps marketers and creative teams bootstrap advertisement stories. Give it a product and the emotional tone you want to evoke, and the app stitches together ConceptNet associations, NRC emotion lexicon scores, and an OpenAI text model to draft ad-ready story ideas.',
    tech: ['AI', 'NLP', 'LLM', 'GPT-3', 'Conceptnet', 'NRCLex', 'Research'],
    link: 'https://github.com/ManeeshD07/AdMaker',
  },
  {
    title: 'Smart Data Explorer',
    description:
      'Smart Data Explorer is a full-stack web application that turns raw retail transaction data into interactive visual insights. Users authenticate through a secure JWT flow, explore top-selling grocery items, and view multiple Chart.js visualizations powered by a Flask API and MongoDB-backed user store.',
    tech: ['Python', 'Flask', 'ReactJS', 'MongoDB', 'Prophet', 'LSTM', 'Chart.js'],
    link: 'https://github.com/ManeeshD07/SmartDataExplorer',
  },
  {
    title: 'MediAssist: AI-Powered Multimodal Triage System',
    description:
      'MediAssist is a full-stack AI healthcare application designed to assist with patient pre-diagnosis and triage. The system uses a multimodal pipeline to process diverse patient inputs (voice, text, and images) and provides grounded, explainable triage recommendations by referencing medical databases.',
    tech: ['RAG', 'Hugging Face Transformers', 'FastAPI', 'PyTorch', 'Docker', 'Azure'],
    link: 'https://example.com/mobile',
  },
];

export const experience = [
  {
    company: 'Texas A&M University, Corpus Christi',
    role: 'Web Developer',
    period: 'June 2024 — June 2025',
    bullets: [
      "Managed over 100 departmental websites, collaborating with faculty and IT to maintain consistent, accessible content.",
      "Proposed UI enhancements on accessibility audits, influencing updates to over 100 departmental websites for better usability.",
      "Developed HTML, CSS and JavaScript templates, enhancing accessibility by aligning site design with WCAG standards.",
      "Optimized website performance using AJAX methods, reducing page load time by approximately 40%.",
      "Maintained the AI Faculty Page, validating data accuracy, responsive design, and visual consistency with university branding.",
      "Utilized Cascade CMS versioning to streamline updates and maintain content integrity with safe rollback capabilities."
    ],
  },
  {
    company: 'GoFlytta',
    role: 'Software Developer',
    period: 'Jan 2023 — June 2023',
    bullets: [
      "Engineered a Python-Flask route optimizer cutting delivery time by 15% and boosting fleet utilization by 25%.",
      "Programmed a real-time fleet tracking dashboard with Chart.js, reducing customer support queries by 37%.",
      "Enhanced reliability by resolving critical API inconsistencies, ensuring data integrity for 50,000+ daily logistics transactions.",
      "Developed unit and integration tests using PyTest, improving code reliability and achieving 95% test coverage for new features.",
      "Implemented automated build, test, and deployment workflows with GitHub Actions, streamlining the development lifecycle and cutting software release times by 50%"
    ],
  },
];

export const resources = [
  {
    label: 'Download résumé',
    description: 'Link this to your latest PDF or Notion page.',
    url: 'https://example.com/resume.pdf',
  },
  {
    label: 'View full case studies',
    description: 'A longer-form breakdown for stakeholders that want more context.',
    url: 'https://example.com/case-studies',
  },
];

export const contact = {
  email: 'maneeshreddyd2520@gmail.com',
  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/maneesh-reddy-devireddy' },
    { label: 'GitHub', url: 'https://github.com/ManeeshD07' },
  ],
};

export const gallery = [
  {
    alt: 'Maneesh collaborating on a full-stack build',
    url: WebDeveloperPic1,
  },
  {
    alt: 'Code review and UX planning session',
    url: WebDeveloperPic2,
  },
];

export const metrics = [
  { label: 'Projects shipped', value: 20, suffix: '+' },
  { label: 'Faster Page Loads', value: 40, suffix: '%' },
  { label: 'Teams supported', value: 12, suffix: '' },
];
