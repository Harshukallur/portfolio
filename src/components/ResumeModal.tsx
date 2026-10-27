import React from 'react';
import { X, Printer, Download, GraduationCap, Briefcase, Code, Sparkles, ExternalLink, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_DATA, EXPERIENCE_DATA, PROJECTS_SUMMARY } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/markdown resume and trigger file download
    const resumeText = `HARSHITHA K A
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

==================================================
CAREER OBJECTIVE
==================================================
${PERSONAL_INFO.bio}

==================================================
EDUCATION
==================================================
${EDUCATION_DATA.map((e) => `• ${e.degree} - ${e.institution}\n  ${e.score} | Year: ${e.year}\n  ${e.description || ''}`).join('\n\n')}

==================================================
INTERNSHIP EXPERIENCE
==================================================
${EXPERIENCE_DATA.map((exp) => `• ${exp.role} - ${exp.company} (${exp.location})\n  Duration: ${exp.duration}\n${exp.points.map((p) => `  - ${p}`).join('\n')}`).join('\n\n')}

==================================================
FEATURED PROJECTS
==================================================
${PROJECTS_SUMMARY.map((p) => `• ${p.title}\n  Category: ${p.category}\n  Stack: ${p.technologies.join(', ')}\n  Description: ${p.shortDescription}`).join('\n\n')}

==================================================
TECHNICAL SKILLS
==================================================
${SKILLS_DATA.map((cat) => `${cat.title}:\n${cat.skills.map((s) => `  - ${s.name} (${s.focus})`).join('\n')}`).join('\n\n')}
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Harshitha_K_A_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#050b1b] border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#030612]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm sm:text-base font-bold text-white font-mono">
              Curriculum Vitae Preview · Harshitha K A
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-mono border border-cyan-500/30 hover:bg-cyan-500/25 transition-all"
              title="Print formatted document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 text-xs font-mono hover:bg-slate-700 transition-all"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="p-6 sm:p-8 overflow-y-auto font-sans text-slate-200 space-y-7 bg-[#040817]">
          {/* Top Info */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-cyan-400 text-xs sm:text-sm font-mono mt-1">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-2.5 font-mono">
              <span>{PERSONAL_INFO.location}</span>
              <span>·</span>
              <span className="text-slate-300">{PERSONAL_INFO.email}</span>
              <span>·</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Academic Credentials
            </h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:justify-between items-start text-xs border-b border-slate-900 pb-2.5">
                  <div>
                    <h3 className="font-semibold text-white text-sm">{edu.degree}</h3>
                    <p className="text-slate-400">{edu.institution}</p>
                    {edu.description && <p className="text-slate-400 text-[11px] mt-1">{edu.description}</p>}
                  </div>
                  <div className="sm:text-right mt-1 sm:mt-0">
                    <span className="font-mono text-cyan-300 font-bold bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                      {edu.score}
                    </span>
                    <p className="text-slate-400 text-[11px] font-mono mt-1">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" /> Internship Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="text-xs border-b border-slate-900 pb-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-white text-sm">{exp.role}</h3>
                      <p className="text-cyan-300 font-mono text-[11px]">{exp.company} — {exp.location}</p>
                    </div>
                    <span className="text-slate-400 font-mono text-[11px] mt-0.5 sm:mt-0">{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 mt-2">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <FolderGit2 className="w-4 h-4" /> Key AI & Engineering Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {PROJECTS_SUMMARY.map((p) => (
                <div key={p.id} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                  <h3 className="font-semibold text-white">{p.title}</h3>
                  <p className="text-cyan-300 font-mono text-[10px] mt-0.5">{p.technologies.slice(0, 4).join(' · ')}</p>
                  <p className="text-slate-300 text-[11px] mt-1.5 leading-relaxed">{p.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Code className="w-4 h-4" /> Technical & Soft Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="text-slate-400 font-mono uppercase text-[10px] block mb-1">
                  AI, Machine Learning & NLP
                </span>
                <p className="text-white leading-relaxed">
                  Python, Machine Learning, Deep Learning, Natural Language Processing, Generative AI, Retrieval-Augmented Generation (RAG), Data Analysis
                </p>
              </div>
              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="text-slate-400 font-mono uppercase text-[10px] block mb-1">
                  Software Development & Stack
                </span>
                <p className="text-white leading-relaxed">
                  SQL, Flask, HTML, CSS, JavaScript, RESTful APIs, Git, YAML Configuration Templates
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-[#030612] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs hover:bg-slate-700 transition-colors font-mono"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
