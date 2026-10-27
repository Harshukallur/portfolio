import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ParticleNetwork } from './components/ParticleNetwork';
import { BackToTop } from './components/BackToTop';
import { ResumeModal } from './components/ResumeModal';
import { HomePage } from './pages/HomePage';
import { ProjectCustomGptPage } from './pages/ProjectCustomGptPage';
import { ProjectNeuroSymbolicPage } from './pages/ProjectNeuroSymbolicPage';
import { ProjectJarvisPage } from './pages/ProjectJarvisPage';
import { ProjectBankNlpPage } from './pages/ProjectBankNlpPage';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans relative selection:bg-cyan-500/30 selection:text-cyan-200">
      <ParticleNetwork />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      <div className="flex-grow z-10">
        <Routes>
          <Route path="/" element={<HomePage onOpenResume={() => setIsResumeOpen(true)} />} />
          <Route path="/projects/custom-gpt" element={<ProjectCustomGptPage />} />
          <Route path="/projects/neuro-symbolic-ai" element={<ProjectNeuroSymbolicPage />} />
          <Route path="/projects/jarvis-assistant" element={<ProjectJarvisPage />} />
          <Route path="/projects/bank-nlp" element={<ProjectBankNlpPage />} />
          <Route path="*" element={<HomePage onOpenResume={() => setIsResumeOpen(true)} />} />
        </Routes>
      </div>

      <Footer />
      <BackToTop />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
