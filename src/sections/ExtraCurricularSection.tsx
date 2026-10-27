import React from 'react';
import { Flag, HeartHandshake, Users, Sparkles } from 'lucide-react';
import { EXTRA_CURRICULAR } from '../data/portfolioData';

export const ExtraCurricularSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      <div className="text-left mb-10">
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
          <Users className="w-4 h-4" />
          <span>Leadership & Outreach</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Extra-Curricular Activities
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-2xl">
          Active contributions to campus operations, collegiate fest leadership, and community volunteer mentoring initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXTRA_CURRICULAR.map((item, idx) => (
          <div
            key={idx}
            className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl flex items-start gap-4 border border-slate-800 hover:border-cyan-500/30"
          >
            <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-400 shrink-0">
              {idx === 0 ? <Flag className="w-5 h-5" /> : <HeartHandshake className="w-5 h-5" />}
            </div>

            <div>
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                {item.category}
              </div>
              <h3 className="text-lg font-bold text-white mt-1">
                {item.title}
              </h3>
              <div className="text-xs font-mono text-slate-300 mt-0.5">
                Role: {item.role}
              </div>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
