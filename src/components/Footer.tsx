import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, FolderArchive } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-slate-800 bg-[#030612] text-slate-400 py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-white font-mono font-bold text-sm">
            {PERSONAL_INFO.name}
          </span>
          <p className="text-xs text-slate-400 mt-1 font-sans">
            M.Tech in Artificial Intelligence · AI Enthusiast & Python Developer
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-slate-700">·</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="text-slate-700">·</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
          <span className="text-slate-700">·</span>
          <a
            href="/harshitha-portfolio.zip"
            download="harshitha-portfolio-codebase.zip"
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
            title="Download full project archive"
          >
            <FolderArchive className="w-3.5 h-3.5" />
            <span>Project ZIP</span>
          </a>
        </div>

        <div className="text-xs font-mono text-slate-400 text-center md:text-right">
          © {new Date().getFullYear()} Harshitha K A. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
