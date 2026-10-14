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
  grade?: string;
  details?: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string }[];
}

export interface ResumeData {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  phone: string;
  status: string;
  contacts: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  about: {
    summary: string[];
    stats: { label: string; value: string; detail?: string }[];
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  skillCategories: SkillCategory[];
  spokenLanguages: { name: string; proficiency: string }[];
  terminalCommands: { command: string; output: string }[];
}

export const resumeData: ResumeData = {
  name: 'Swetansh Singh',
  title: 'Python & Data Science Developer',
  subtitle: 'Transforming complex datasets into actionable insights and high-performance computational solutions.',
  bio: 'Proactive Computer Science undergraduate specializing in Data Science, with a strong foundation in Python and its data manipulation ecosystem. Adept at transforming complex datasets into actionable insights and building scalable computational solutions. Driven by a continuous learning mindset and eager to contribute technically in a fast-paced development or analytics role.',
  location: 'Durgapur, West Bengal, India',
  phone: '+91 74640 30034',
  status: 'Open to Opportunities',
  contacts: {
    email: 'singhswetansh1972@gmail.com',
    phone: '+91 74640 30034',
    github: 'https://github.com/Swetansh-Singh',
    linkedin: 'https://github.com/Swetansh-Singh', // User can add personal LinkedIn link
  },
  about: {
    summary: [
      'Proactive Computer Science undergraduate specializing in Data Science, with a strong foundation in Python and its data manipulation ecosystem.',
      'Adept at transforming complex datasets into actionable insights and building scalable computational solutions. Experienced with convolutional neural networks (CNNs), exploratory data analysis (EDA), and interactive Streamlit analytics dashboards.',
      'Driven by a continuous learning mindset, rigorous mathematical grounding, and eager to contribute technically in high-impact development and analytics teams.',
    ],
    stats: [
      { label: 'CGPA (B.Tech)', value: '7.37', detail: 'Sem 1–6 (Data Science)' },
      { label: 'Core Projects', value: '4+', detail: 'Computer Vision & Analytics' },
      { label: 'Primary Stack', value: 'Python', detail: 'TensorFlow, Pandas, Streamlit' },
      { label: 'Spoken Languages', value: '3', detail: 'English, Hindi, Bengali' },
    ],
  },
  experience: [
    {
      role: 'Computer Vision & Deep Learning Developer',
      company: 'Skin Cancer Detection Project',
      location: 'Durgapur, India',
      period: '2024 — Present',
      description: 'Engineered an end-to-end deep learning pipeline to classify dermatological lesions into malignant and benign categories.',
      bulletPoints: [
        'Built a Convolutional Neural Network (CNN) architecture to classify dermoscopic lesion images with ROC-AUC validation.',
        'Preprocessed and augmented image data using OpenCV and TensorFlow/Keras to mitigate severe class imbalances.',
        'Structured modular training, evaluation, and inference pipelines for clinical diagnostic screening benchmarks.',
      ],
      skills: ['TensorFlow/Keras', 'OpenCV', 'Scikit-Learn', 'CNNs', 'Computer Vision', 'Python'],
    },
    {
      role: 'Data Applications & Dashboard Engineer',
      company: 'Sales Analysis Interactive Dashboard',
      location: 'Remote',
      period: '2024',
      description: 'Designed and deployed an interactive sales tracking web application eliminating the need for manual SQL and pivot queries.',
      bulletPoints: [
        'Deployed a real-time sales tracking web app with dynamic multi-filter KPI dashboards using Streamlit, Plotly, and Pandas.',
        'Optimized data-caching and query transformations to accelerate chart rendering across large transaction datasets.',
        'Provided automated narrative breakdowns and trend summaries for cross-functional business stakeholders.',
      ],
      skills: ['Streamlit', 'Plotly', 'Pandas', 'KPI Dashboards', 'Data Wrangling'],
    },
    {
      role: 'Data Analyst & Forecasting Researcher',
      company: 'Amazon Sales & Netflix Catalog EDA',
      location: 'India',
      period: '2023 — 2024',
      description: 'Extracted strategic insights from multi-thousand row enterprise sales and streaming catalog datasets.',
      bulletPoints: [
        'Performed exploratory data analysis (EDA) on transaction records to isolate peak demand periods, fulfillment margins, and category distributions.',
        'Cleaned raw currency and regional delivery data to uncover root causes behind courier cancellations and shipping delays.',
        'Evaluated Netflix catalog shifts between TV shows and movies, visualizing country-wise production volume and runtime distributions.',
      ],
      skills: ['EDA', 'Feature Engineering', 'Seaborn', 'Matplotlib', 'Statistical Analysis'],
    },
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science & Engineering (Data Science)',
      institution: 'NSHM Knowledge Campus',
      location: 'Durgapur, West Bengal',
      period: '08/2024 – Present',
      details: [
        'Specialization in Data Science, Machine Learning, and Computational Statistics.',
        'Hands-on coursework in Python algorithms, database management, and deep neural networks.',
      ],
    },
    {
      degree: 'Senior Secondary (CBSE, Class XII)',
      institution: 'DAV Public School',
      location: 'Rupnarayanpur, West Bengal',
      period: '2021',
      grade: 'Score: 72.0%',
      details: ['Focused on Physics, Chemistry, and Mathematics.'],
    },
    {
      degree: 'Secondary Education (ICSE, Class X)',
      institution: "St. Joseph's Convent School",
      location: 'Chittaranjan, West Bengal',
      period: '2019',
      grade: 'Score: 82.4%',
      details: ['Foundation in Computer Applications and Sciences.'],
    },
  ],
  skillCategories: [
    {
      title: 'Languages & Web',
      skills: [
        { name: 'Python' },
        { name: 'SQL' },
        { name: 'HTML5 / CSS3' },
        { name: 'TypeScript' },
      ],
    },
    {
      title: 'ML & Data Science',
      skills: [
        { name: 'TensorFlow / Keras' },
        { name: 'OpenCV' },
        { name: 'Scikit-Learn' },
        { name: 'Pandas' },
        { name: 'NumPy' },
        { name: 'CNNs & Vision' },
      ],
    },
    {
      title: 'Visualization & Tooling',
      skills: [
        { name: 'Streamlit' },
        { name: 'Plotly' },
        { name: 'Matplotlib' },
        { name: 'Seaborn' },
        { name: 'Git & GitHub' },
        { name: 'Jupyter' },
      ],
    },
  ],
  spokenLanguages: [
    { name: 'English', proficiency: 'Fluent' },
    { name: 'Hindi', proficiency: 'Fluent' },
    { name: 'Bengali', proficiency: 'Proficient' },
  ],
  terminalCommands: [
    { command: 'whoami', output: 'Swetansh Singh — Python & Data Science Developer' },
    { command: 'cat education.txt', output: 'B.Tech CSE (Data Science) @ NSHM Knowledge Campus (CGPA: 7.37)' },
    { command: 'cat contact.json', output: '{"email": "singhswetansh1972@gmail.com", "phone": "+91 74640 30034"}' },
  ],
};
