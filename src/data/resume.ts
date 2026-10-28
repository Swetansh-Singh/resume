export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gradeLabel?: string;
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
  status: string;
  contacts: {
    email: string;
    phone: string;
    github: string;
    linkedin?: string;
  };
  education: EducationItem[];
  skillCategories: SkillCategory[];
  personalStrengths: string[];
  spokenLanguages: { name: string; proficiency: string }[];
  terminalCommands: { command: string; output: string[] }[];
}

export const resumeData: ResumeData = {
  name: 'Swetansh Singh',
  title: 'Python & Data Science Developer',
  subtitle: 'Transforming complex datasets into actionable insights and high-performance computational solutions.',
  bio: 'Proactive Computer Science undergraduate specializing in Data Science, with a strong foundation in Python and its data manipulation ecosystem. Adept at transforming complex datasets into actionable insights and building scalable computational solutions. Driven by a continuous learning mindset and eager to contribute technically in a fast-paced development or analytics role.',
  location: 'Durgapur, West Bengal, India',
  status: 'Open to Opportunities',
  contacts: {
    email: 'singhswetansh1972@gmail.com',
    phone: '+91 74640 30034',
    github: 'https://github.com/Swetansh-Singh',
  },
  education: [
    {
      degree: 'B.Tech in Computer Science & Engineering (Data Science)',
      institution: 'NSHM Knowledge Campus',
      location: 'Durgapur, West Bengal',
      period: '08/2024 – Present',
      gradeLabel: 'CGPA (Current)',
      grade: '7.37',
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
      gradeLabel: 'Score',
      grade: '72.0%',
      details: ['Foundation in Computer Applications and Sciences.'],
    },
    {
      degree: 'Secondary Education (ICSE, Class X)',
      institution: "St. Joseph's Convent School",
      location: 'Chittaranjan, West Bengal',
      period: '2019',
      gradeLabel: 'Score',
      grade: '82.4%',
      details: ['Focused on Physics, Chemistry, and Mathematics.'],
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
        { name: 'CNNs & Computer Vision' },
        { name: 'EDA & Feature Engineering' },
        { name: 'Forecasting' },
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
  personalStrengths: [
    'Analytical Problem-Solving',
    'Cross-Functional Communication',
    'Team Leadership',
    'Time Management',
    'Rapid Adaptability',
  ],
  spokenLanguages: [
    { name: 'English', proficiency: 'Fluent' },
    { name: 'Hindi', proficiency: 'Fluent' },
    { name: 'Bengali', proficiency: 'Proficient' },
  ],
  terminalCommands: [
    {
      command: 'python3 -m workflow --status',
      output: [
        '✔ Data Ingestion & Cleaning (Pandas / NumPy / SQL)',
        '✔ Model Training & Validation (TensorFlow / Scikit-Learn)',
        '✔ Interactive BI Deployment (Streamlit / Plotly)',
      ],
    },
    {
      command: 'cat metrics.txt',
      output: [
        '4 End-to-End ML & Analytics Repositories • 7.37 B.Tech CGPA',
      ],
    },
    {
      command: 'cat availability.txt',
      output: [
        'Internships, Data Analyst & Python Developer Roles (Remote / On-site)',
      ],
    },
  ],
};
