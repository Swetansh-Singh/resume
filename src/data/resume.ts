export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  bulletPoints: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface ResumeData {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  status: string;
  contacts: {
    email: string;
    github: string;
    linkedin: string;
    twitter?: string;
  };
  about: {
    summary: string[];
    stats: { label: string; value: string; detail?: string }[];
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  skillCategories: SkillCategory[];
  terminalCommands: { command: string; output: string }[];
}

export const resumeData: ResumeData = {
  name: 'Swetansh Singh',
  title: 'Data Science & Software Engineer',
  subtitle: 'Building intuitive analytics tools, computer vision models, and resilient web applications.',
  bio: 'Geeked and locked into data, machine learning, and clean software architecture. Focused on turning complex data problems into high-impact, beautifully engineered solutions.',
  location: 'India',
  status: 'Open to Opportunities',
  contacts: {
    email: 'swetanshsingh@example.com',
    github: 'https://github.com/Swetansh-Singh',
    linkedin: 'https://linkedin.com/in/swetansh-singh',
  },
  about: {
    summary: [
      'I am an engineer focused on data-driven intelligence, computer vision, and modern web application development.',
      'My work spans end-to-end data pipelines: from cleaning messy real-world datasets and creating automated KPI dashboards to training deep neural networks for medical image classification.',
      'I value clean code, minimalistic aesthetics, and high-performance user experiences that make complex systems feel effortless.',
    ],
    stats: [
      { label: 'Core Projects', value: '4+', detail: 'EDA, ML & Web Apps' },
      { label: 'Focus Areas', value: 'Data & AI', detail: 'Vision, Analytics, Systems' },
      { label: 'Code Quality', value: '100%', detail: 'Strict Type-Safe TypeScript & Python' },
      { label: 'Mindset', value: '10x', detail: 'Curious, Fast & Ship-Focused' },
    ],
  },
  experience: [
    {
      role: 'Machine Learning & Software Developer',
      company: 'Independent Projects & Open Source',
      location: 'Remote',
      period: '2024 — Present',
      description: 'Architecting exploratory analytics dashboards, deep learning vision models, and data pipelines.',
      bulletPoints: [
        'Built and deployed a zero-SQL interactive sales analytics platform in Streamlit processing transactional e-commerce datasets with real-time KPI metrics and automated summaries.',
        'Developed a deep learning convolutional neural network pipeline for classifying dermatological lesions to assist in skin cancer screening.',
        'Conducted granular exploratory data analyses (EDA) on multi-thousand entry enterprise datasets (Amazon Sales, Netflix Catalogs), identifying category trends and distribution patterns.',
      ],
      skills: ['Python', 'PyTorch', 'Streamlit', 'Pandas', 'TypeScript', 'Computer Vision'],
    },
    {
      role: 'Data Analyst & Researcher',
      company: 'Applied Data Projects',
      location: 'India',
      period: '2023 — 2024',
      description: 'Exploratory data analysis, statistical modeling, and data visualization across commercial domains.',
      bulletPoints: [
        'Formulated data cleaning scripts and validation pipelines to resolve missing values, format inconsistencies, and categorical anomalies.',
        'Engineered visual narratives using Matplotlib, Seaborn, and Plotly to convey actionable takeaways to non-technical stakeholders.',
        'Optimized data processing workflows in Jupyter Notebook environments to scale throughput across large CSV exports.',
      ],
      skills: ['EDA', 'Data Wrangling', 'Matplotlib', 'Seaborn', 'Statistical Analysis'],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Technology in Computer Science / Engineering',
      institution: 'University / Institute',
      location: 'India',
      period: 'Graduating 2025 / 2026',
      details: [
        'Coursework: Data Structures & Algorithms, Machine Learning, Database Management Systems, Computer Networks.',
      ],
    },
  ],
  skillCategories: [
    {
      title: 'Languages & Core',
      skills: [
        { name: 'Python' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'SQL' },
        { name: 'C++' },
        { name: 'HTML/CSS' },
      ],
    },
    {
      title: 'Data & Machine Learning',
      skills: [
        { name: 'PyTorch' },
        { name: 'Pandas' },
        { name: 'NumPy' },
        { name: 'Scikit-Learn' },
        { name: 'Computer Vision' },
        { name: 'EDA & Statistics' },
      ],
    },
    {
      title: 'Web & Tools',
      skills: [
        { name: 'Streamlit' },
        { name: 'Astro' },
        { name: 'Tailwind CSS' },
        { name: 'Git & GitHub' },
        { name: 'Docker' },
        { name: 'Linux' },
      ],
    },
  ],
  terminalCommands: [
    { command: 'whoami', output: 'Swetansh Singh — Engineer, Builder & Data Enthusiast' },
    { command: 'cat focus.txt', output: 'Deep Learning, Analytics Dashboards, High-Performance Web' },
    { command: 'git status', output: 'On branch main. All systems clean & locked in.' },
  ],
};
