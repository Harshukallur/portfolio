import { EducationItem, SkillCategory, ExperienceItem, ProjectSummary } from '../types';

export const PERSONAL_INFO = {
  name: 'Harshitha K A',
  title: 'M.Tech AI Student | AI Enthusiast | Python Developer',
  headline: 'Building Intelligent Solutions with Artificial Intelligence',
  bio: 'M.Tech Artificial Intelligence student with strong skills in Python, Machine Learning, Data Analysis, and software development, eager to apply AI and data-driven approaches to solve real-world challenges and build innovative, reliable, and high-performance solutions.',
  email: 'harshithaharshi09303@gmail.com',
  github: 'https://github.com/Harshukallur',
  linkedin: 'https://www.linkedin.com/in/harshitha-k-a-649aa3326/',
  location: 'Bengaluru, Karnataka, India'
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'M.Tech in Artificial Intelligence',
    institution: 'MSRIT',
    score: 'CGPA: 9.24',
    year: '2027',
    badge: 'Master of Technology',
    description: 'Specializing in advanced neural representations, deep generative architectures, neuro-symbolic reasoning frameworks, and production-grade AI system design.'
  },
  {
    degree: 'B.Tech in Artificial Intelligence and Machine Learning',
    institution: 'University Visvesvaraya College of Engineering (UVCE)',
    score: 'CGPA: 9.05',
    year: '2025',
    badge: 'Bachelor of Technology',
    description: 'Comprehensive engineering foundation in machine learning pipelines, algorithms, statistical data analysis, distributed backend systems, and database architecture.'
  },
  {
    degree: 'Class 12 (Pre-University)',
    institution: 'RK Vision PU College',
    score: 'Percentage: 98.3%',
    year: '2021',
    badge: 'Pre-University Education',
    description: 'High-distinction academic performance with strong analytical and mathematical problem-solving focus.'
  },
  {
    degree: 'Class 10 (Secondary School)',
    institution: 'Sri Bhairaveshwara Vidhya Samasthe',
    score: 'Percentage: 92%',
    year: '2019',
    badge: 'Secondary Schooling',
    description: 'Excellence in core sciences and quantitative foundation.'
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Core intelligence models, generative systems, and neural architectures',
    skills: [
      { name: 'Artificial Intelligence', focus: 'Heuristic Search, Knowledge Representation, Agentic Workflows', tag: 'AI Core' },
      { name: 'Machine Learning', focus: 'Supervised & Unsupervised Modeling, Feature Engineering, Evaluation', tag: 'Modeling' },
      { name: 'Deep Learning', focus: 'Convolutional & Recurrent Networks, Attention Mechanisms, Backpropagation', tag: 'Neural' },
      { name: 'Natural Language Processing', focus: 'Tokenization, Semantic Embeddings, Named Entity Recognition', tag: 'NLP' },
      { name: 'Generative AI', focus: 'Large Language Models, Context Windows, Prompt Optimization', tag: 'GenAI' },
      { name: 'Retrieval-Augmented Generation (RAG)', focus: 'Vector Indexing, Chunking Strategies, Semantic Dense Retrieval', tag: 'RAG' }
    ]
  },
  {
    title: 'Programming & Software Development',
    description: 'Backend frameworks, data manipulation, relational databases, and frontend fundamentals',
    skills: [
      { name: 'Python', focus: 'Asynchronous Programming, OOP, NumPy, Pandas, Data Structures', tag: 'Language' },
      { name: 'SQL', focus: 'Relational Schema Design, Complex Joins, Indexing, Data Query Optimization', tag: 'Database' },
      { name: 'Flask', focus: 'Lightweight RESTful Microservices, Request Routing, API Serialization', tag: 'Backend' },
      { name: 'HTML', focus: 'Semantic HTML5 Markup, Component Accessibility, Web Standards', tag: 'Frontend' },
      { name: 'CSS', focus: 'Responsive Design, Grid/Flexbox Layouts, Glassmorphism, CSS Transitions', tag: 'Styling' },
      { name: 'JavaScript', focus: 'DOM Manipulation, Asynchronous Fetch API, ES6+ Modular Code', tag: 'Scripting' },
      { name: 'Data Analysis', focus: 'Exploratory Data Analysis (EDA), Statistical Modeling, Visualization', tag: 'Analytics' }
    ]
  },
  {
    title: 'Professional & Interpersonal Strengths',
    description: 'Demonstrated collaboration, technical articulation, and organizational leadership',
    skills: [
      { name: 'Leadership', focus: 'Initiative ownership, student mentoring, and milestone execution', tag: 'Interpersonal' },
      { name: 'Presentation Skills', focus: 'Translating complex algorithmic ideas into accessible presentations', tag: 'Articulation' },
      { name: 'Public Speaking', focus: 'Engaging audiences during academic workshops and seminar discussions', tag: 'Communication' },
      { name: 'Team Building', focus: 'Cross-functional collaboration, collaborative problem solving, code reviews', tag: 'Synergy' },
      { name: 'Communication', focus: 'Clear technical documentation, constructive peer feedback, active listening', tag: 'Professional' }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'NextBrain Technologies Pvt. Ltd.',
    role: 'Web Development Intern',
    location: 'Bengaluru, India',
    duration: 'March 2023 – May 2023',
    points: [
      'Created static and dynamic websites using HTML, CSS, and modern JavaScript standards.',
      'Contributed to the development of responsive web applications to improve user experience across screen sizes.',
      'Developed and integrated dynamic features using SQL databases and PHP server-side scripts.',
      'Worked extensively on frontend and backend web development concepts, state coordination, and code modularity.'
    ],
    skillsLearned: ['HTML5', 'CSS3', 'JavaScript', 'SQL', 'PHP', 'Responsive UI Design']
  },
  {
    company: 'Quant Masters',
    role: 'Aptitude & Communication Trainer Intern',
    location: 'Bengaluru, India',
    duration: 'February 2024 – April 2024',
    points: [
      'Improved communication through structured presentations, public speaking, and effective body language/gestures.',
      'Led interactive student sessions to improve quantitative aptitude skills, problem-solving speed, and confidence.',
      'Developed a strong foundation in marketing fundamentals, teamwork, leadership, and group discussions.',
      'Mentored peer cohorts on analytical approaches, logical reasoning, and structured technical articulation.'
    ],
    skillsLearned: ['Public Speaking', 'Aptitude Training', 'Team Leadership', 'Group Discussions', 'Marketing Dynamics']
  }
];

export const PROJECTS_SUMMARY: ProjectSummary[] = [
  {
    id: 'custom-gpt',
    slug: 'custom-gpt',
    title: 'Custom GPT – Domain-Specific Conversational AI',
    category: 'Conversational AI & RAG',
    shortDescription: 'Lightweight, scalable conversational AI built with Flask and Groq’s ultra-high-speed API with LLaMA models, featuring YAML-templated RAG for low latency and domain precision.',
    technologies: ['Python', 'Flask', 'Groq API', 'LLaMA Models', 'RAG', 'YAML', 'NLP'],
    imagePath: '/src/assets/images/custom_gpt_rag_preview_1793077011719.jpg',
    githubUrl: 'https://github.com/Harshukallur'
  },
  {
    id: 'neuro-symbolic-ai',
    slug: 'neuro-symbolic-ai',
    title: 'Neuro-Symbolic AI Framework for Accuracy',
    category: 'Hybrid AI & Explainable Logic',
    shortDescription: 'Hybrid intelligence engine integrating Large Language Models with symbolic reasoning and rule-based verification to reduce hallucinations and guarantee logical consistency.',
    technologies: ['Python', 'Artificial Intelligence', 'Large Language Models', 'Symbolic AI', 'Rule-Based Reasoning', 'Logical Verification', 'NLP'],
    imagePath: '/src/assets/images/neuro_symbolic_ai_preview_1793077013000.jpg',
    githubUrl: 'https://github.com/Harshukallur'
  },
  {
    id: 'jarvis-assistant',
    slug: 'jarvis-assistant',
    title: 'JARVIS Desktop Voice Assistant',
    category: 'Voice NLP & Automation',
    shortDescription: 'Intelligent virtual assistant concept processing natural language voice commands to automate desktop tasks, featuring acoustic waveform analysis, STT, intent routing, and TTS.',
    technologies: ['Python', 'Speech Recognition', 'Natural Language Processing', 'Voice Processing', 'Automation', 'Text-to-Speech'],
    imagePath: '/src/assets/images/jarvis_voice_assistant_preview_1793077012724.jpg',
    githubUrl: 'https://github.com/Harshukallur'
  },
  {
    id: 'bank-nlp',
    slug: 'bank-nlp',
    title: 'BankNLP – Local LLM Banking Assistant',
    category: 'Fintech AI & NLP-to-API',
    shortDescription: 'Local LLM-powered banking assistant with NLP-to-API execution planning, structured JSON validation, business-rule enforcement, session authentication, and user data isolation.',
    technologies: ['Python', 'Flask', 'Ollama', 'Qwen3', 'SQLite', 'NLP-to-API', 'JSON Validation', 'E2E Testing'],
    imagePath: '/src/assets/images/banknlp_banking_assistant_1793079212230.jpg',
    githubUrl: 'https://github.com/Harshukallur'
  }
];

export const EXTRA_CURRICULAR = [
  {
    title: 'Organizer for College Fest',
    role: 'Lead Student Coordinator',
    category: 'Event Leadership & Operations',
    description: 'Spearheaded event scheduling, stage operations, volunteer team management, and inter-collegiate participant coordination, ensuring smooth operational execution under demanding timelines.'
  },
  {
    title: 'Volunteer for NGO Programs',
    role: 'Community Outreach Volunteer',
    category: 'Social Impact & Education',
    description: 'Conducted interactive digital literacy sessions, aptitude workshops, and mentoring drives for underprivileged school students, fostering curiosity in computing and mathematics.'
  }
];
