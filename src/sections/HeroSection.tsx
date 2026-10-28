
import React from 'react';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

const GOOGLE_DRIVE_RESUME_URL =
  'https://drive.google.com/file/d/1hJh7owhJlU9o4mBOiNKOIgz1O9BWlEcn/view?usp=sharing';

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
}) => {
  const handleDownloadResume = () => {
    window.open(
      GOOGLE_DRIVE_RESUME_URL,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-indigo-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center">
        <div className="max-w-3xl text-center flex flex-col items-center">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            Hello, I'm {PERSONAL_INFO.name}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.14]">
            Building Intelligent Solutions with{' '}
            <span className="cyber-gradient-text block mt-1">
              Artificial Intelligence
            </span>
          </h1>

          <p className="mt-5 text-xs sm:text-sm md:text-base text-cyan-300/90 font-mono font-medium">
            M.Tech Artificial Intelligence Student{' '}
            <span className="text-slate-600">|</span> AI Enthusiast{' '}
            <span className="text-slate-600">|</span> Python Developer
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs sm:text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/25 group"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              type="button"
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 font-medium text-xs sm:text-sm hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <div className="flex items-center gap-2 ml-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <div className="glass-panel p-4 rounded-xl">
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
              M.Tech in AI
            </span>
            <span className="text-lg sm:text-xl font-bold text-white mt-1 block">
              CGPA 9.24
            </span>
            <span className="text-xs text-slate-400">MSRIT (2027)</span>
          </div>

          <div className="glass-panel p-4 rounded-xl">
            <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">
              B.Tech in AI &amp; ML
            </span>
            <span className="text-lg sm:text-xl font-bold text-white mt-1 block">
              CGPA 9.05
            </span>
            <span className="text-xs text-slate-400">
              UVCE Bengaluru (2025)
            </span>
          </div>

          <div className="glass-panel p-4 rounded-xl">
            <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider block">
              Class 12
            </span>
            <span className="text-lg sm:text-xl font-bold text-white mt-1 block">
              98.3%
            </span>
            <span className="text-xs text-slate-400">
              RK Vision PU College (2021)
            </span>
          </div>

          <div className="glass-panel p-4 rounded-xl">
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">
              Class 10
            </span>
            <span className="text-lg sm:text-xl font-bold text-white mt-1 block">
              92.0%
            </span>
            <span className="text-xs text-slate-400">
              Sri Bhairaveshwara Vidhya Samasthe (2019)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
