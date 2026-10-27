import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { EducationSection } from '../sections/EducationSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { GitHubSection } from '../sections/GitHubSection';
import { ExtraCurricularSection } from '../sections/ExtraCurricularSection';
import { ContactSection } from '../sections/ContactSection';

interface HomePageProps {
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenResume }) => {
  return (
    <main>
      <HeroSection onOpenResume={onOpenResume} />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <GitHubSection />
      <ExtraCurricularSection />
      <ContactSection />
    </main>
  );
};
