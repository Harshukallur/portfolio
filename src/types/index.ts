export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  year: string;
  badge?: string;
  description?: string;
}

export interface SkillItem {
  name: string;
  focus: string;
  tag: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  duration: string;
  points: string[];
  skillsLearned: string[];
}

export interface ProjectSummary {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  technologies: string[];
  imagePath: string;
  githubUrl?: string;
}
