import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      <div className="text-left mb-14">
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
          <Briefcase className="w-4 h-4" />
          <span>Professional Experience</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Internship Experience
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-2xl">
          Industry internships spanning dynamic web engineering, SQL database integration, aptitude training, and technical communications.
        </p>
      </div>

      <div className="relative border-l border-slate-800 ml-4 md:ml-36 space-y-12">
        {EXPERIENCE_DATA.map((exp, index) => (
          <div key={index} className="relative pl-6 md:pl-10 group">
            {/* Timeline node */}
            <div className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-[#030712] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-sm shadow-cyan-400/50" />

            {/* Date Tag on larger displays */}
            <div className="hidden md:block absolute -left-40 top-1 text-right w-32 text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">
              {exp.duration}
            </div>

            <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-cyan-400 font-mono mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    {exp.location}
                  </span>
                  <span className="md:hidden flex items-center gap-1 text-cyan-300">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mt-4 text-xs sm:text-sm text-slate-300">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-slate-400 mr-2 uppercase">
                  Skills & Tools:
                </span>
                {exp.skillsLearned.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono text-slate-300 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
