export interface ProjectOverride {
  title?: string;
  description?: string;
  language?: string;
  featured?: boolean;
  demoUrl?: string;
  tags?: string[];
  highlights?: string[];
}

export const projectsConfig = {
  githubUsername: 'Swetansh-Singh',
  exclude: [] as string[],
  overrides: {
    'Skin-Cancer-Detection': {
      title: 'Skin Cancer Detection & Lesion Classifier',
      description: 'End-to-end computer vision pipeline for automated melanoma screening and early dermatological lesion classification.',
      language: 'Python',
      featured: true,
      tags: ['TensorFlow', 'OpenCV', 'Scikit-Learn', 'CNN', 'Computer Vision'],
      highlights: [
        'Built a CNN to classify lesion images into malignant vs. benign with ROC-AUC validation',
        'Preprocessed and augmented image data using OpenCV to handle class imbalances',
      ],
    },
    'Sales-Analysis-streamlitapp': {
      title: 'Sales Analysis Interactive Dashboard',
      description: 'Self-service business intelligence web app that turns raw CSV exports into instant visual insights without SQL or pivot tables.',
      language: 'Python',
      featured: true,
      tags: ['Streamlit', 'Plotly', 'Pandas', 'KPI Dashboards'],
      highlights: [
        'Deployed a real-time sales tracking web app with dynamic multi-filter KPI dashboards',
        'Optimized data-caching to accelerate chart rendering and large dataset queries',
      ],
    },
    'Amazon-Sales-EDA': {
      title: 'Amazon Sales Analysis & Forecasting',
      description: 'E-commerce fulfillment and revenue study uncovering regional purchasing patterns and logistics bottlenecks.',
      featured: false,
      tags: ['Pandas', 'Matplotlib', 'Seaborn', 'EDA', 'Forecasting'],
      highlights: [
        'Performed EDA on transaction records to isolate peak demand and margin trends',
        'Cleaned raw currency data and identified root causes of courier delivery cancellations',
      ],
    },
    'Netflix-EDA': {
      title: 'Netflix Content Strategy & Catalog EDA',
      description: 'Global streaming catalog study tracking content acquisition strategy, genre evolution, and regional production.',
      featured: false,
      tags: ['Pandas', 'Seaborn', 'Matplotlib', 'EDA'],
      highlights: [
        'Analyzed catalog metadata to evaluate shifting trends between TV shows and movies',
        'Visualized country-wise production volume and runtime distributions across genres',
      ],
    },
  } as Record<string, ProjectOverride>,
};
