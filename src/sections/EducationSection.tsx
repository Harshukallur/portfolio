import React from 'react';
import { GraduationCap, Calendar, School, Award } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      <div className="text-left mb-12">
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
          <GraduationCap className="w-4 h-4" />
          <span>Academic Foundation</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Education & Academic Background
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-2xl">
          Demonstrated academic excellence in Artificial Intelligence, Machine Learning, and Engineering Mathematics across undergraduate and postgraduate study.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION_DATA.map((item, index) => (
          <div
            key={index}
            className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                <span className="text-cyan-400 font-medium">{item.badge}</span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.year}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {item.degree}
              </h3>

              <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-slate-300">
                <School className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{item.institution}</span>
              </div>

              {item.description && (
                <p className="mt-3.5 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Academic Score
              </span>
              <span className="font-mono text-cyan-300 font-bold text-sm bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-500/25">
                {item.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
