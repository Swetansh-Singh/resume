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
    'Sales-Analysis-streamlitapp': {
      title: 'Sales Analytics Streamlit App',
      description: 'Interactive analytics dashboard transforming raw sales CSVs into executive KPIs, time-series trends, and automated narrative insights.',
      featured: true,
      demoUrl: 'https://github.com/Swetansh-Singh/Sales-Analysis-streamlitapp',
      tags: ['Streamlit', 'Python', 'Pandas', 'Plotly', 'Data Viz'],
      highlights: [
        'Instant KPI cards and dynamic sales breakdown',
        'Time-series aggregation and seasonal trend detection',
        'Zero-SQL interface designed for non-technical stakeholders'
      ],
    },
    'Skin-Cancer-Detection': {
      title: 'Skin Lesion Classifier & Cancer Detection',
      description: 'Computer vision and deep learning pipeline for early classification of dermoscopic skin lesions to support diagnostic triage.',
      featured: true,
      demoUrl: 'https://github.com/Swetansh-Singh/Skin-Cancer-Detection',
      tags: ['Deep Learning', 'Computer Vision', 'PyTorch', 'TypeScript', 'Healthcare AI'],
      highlights: [
        'Multi-class lesion classification with high sensitivity',
        'Data augmentation and class imbalance handling',
        'Modern client interface for image inference preview'
      ],
    },
    'Netflix-EDA': {
      title: 'Netflix Content Ecosystem EDA',
      description: 'Comprehensive exploratory data analysis examining 8,000+ titles across genres, country production dynamics, and release schedules.',
      featured: false,
      demoUrl: 'https://github.com/Swetansh-Singh/Netflix-EDA',
      tags: ['Python', 'EDA', 'Data Wrangling', 'Matplotlib', 'Seaborn'],
      highlights: [
        'Content growth patterns pre- and post-international expansion',
        'Genre clusters and cross-national co-production analysis'
      ],
    },
    'Amazon-Sales-EDA': {
      title: 'Amazon E-Commerce Sales Insights',
      description: 'End-to-end cleaning and exploratory analysis of Amazon India sales data, analyzing fulfillment channels, category margins, and geographic clusters.',
      featured: false,
      demoUrl: 'https://github.com/Swetansh-Singh/Amazon-Sales-EDA',
      tags: ['Python', 'Pandas', 'E-commerce Analytics', 'Jupyter'],
      highlights: [
        'Fulfillment efficiency comparison (FBA vs merchant)',
        'State-wise order distribution and basket size analytics'
      ],
    },
  } as Record<string, ProjectOverride>,
};
