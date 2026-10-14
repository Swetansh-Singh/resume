export interface ProjectOverride {
  title?: string;
  description?: string;
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
      description: 'Convolutional neural network (CNN) trained with TensorFlow/Keras and OpenCV to classify dermoscopic lesion images into malignant vs. benign categories with ROC-AUC validation.',
      featured: true,
      demoUrl: 'https://github.com/Swetansh-Singh/Skin-Cancer-Detection',
      tags: ['TensorFlow', 'OpenCV', 'Scikit-Learn', 'CNN', 'Computer Vision'],
      highlights: [
        'Built a CNN to classify lesion images into malignant vs. benign with ROC-AUC validation',
        'Preprocessed and augmented image data using OpenCV to handle class imbalances',
      ],
    },
    'Sales-Analysis-streamlitapp': {
      title: 'Sales Analysis Interactive Dashboard',
      description: 'Deployed a real-time sales tracking web app with dynamic multi-filter KPI dashboards, interactive charts, and accelerated query transformations.',
      featured: true,
      demoUrl: 'https://github.com/Swetansh-Singh/Sales-Analysis-streamlitapp',
      tags: ['Streamlit', 'Plotly', 'Pandas', 'Python', 'KPI Dashboards'],
      highlights: [
        'Deployed a real-time sales tracking web app with dynamic multi-filter KPI dashboards',
        'Optimized data-caching to accelerate chart rendering and large dataset queries',
      ],
    },
    'Amazon-Sales-EDA': {
      title: 'Amazon Sales Analysis & Forecasting',
      description: 'Granular exploratory data analysis on transaction records to isolate peak demand and margin trends, with currency normalization and delivery bottleneck diagnosis.',
      featured: false,
      demoUrl: 'https://github.com/Swetansh-Singh/Amazon-Sales-EDA',
      tags: ['Pandas', 'Matplotlib', 'Seaborn', 'EDA', 'Forecasting'],
      highlights: [
        'Performed EDA on transaction records to isolate peak demand and margin trends',
        'Cleaned raw currency data and identified root causes of courier delivery cancellations',
      ],
    },
    'Netflix-EDA': {
      title: 'Netflix Content Strategy & Catalog EDA',
      description: 'Comprehensive evaluation of streaming catalog metadata to analyze shifting trends between TV shows and movies, production volume, and runtime distributions.',
      featured: false,
      demoUrl: 'https://github.com/Swetansh-Singh/Netflix-EDA',
      tags: ['Pandas', 'Seaborn', 'Matplotlib', 'EDA', 'Python'],
      highlights: [
        'Analyzed catalog metadata to evaluate shifting trends between TV shows and movies',
        'Visualized country-wise production volume and runtime distributions across genres',
      ],
    },
  } as Record<string, ProjectOverride>,
};
