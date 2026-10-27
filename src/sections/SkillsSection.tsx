import React, { useState } from 'react';
import { Layers, Cpu, Terminal, Users, Sparkles, Search } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeCategory = SKILLS_DATA[selectedCategoryIndex];

  // Filter skills based on search
  const filteredSkills = activeCategory.skills.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.focus.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      <div className="text-left mb-10">
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
          <Layers className="w-4 h-4" />
          <span>Technical & Professional Capabilities</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Core Competencies & Stack
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-2xl">
          Systematically organized across Machine Learning engineering, full-stack application development, and collaborative leadership.
        </p>
      </div>

      {/* Category Segmented Controls & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 overflow-x-auto">
          {SKILLS_DATA.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => {
                setSelectedCategoryIndex(idx);
                setSearchQuery('');
              }}
              className={`px-3.5 py-2 text-xs font-mono font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategoryIndex === idx
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {idx === 0 && 'AI & Machine Learning'}
              {idx === 1 && 'Software & Stack'}
              {idx === 2 && 'Leadership & Soft Skills'}
            </button>
          ))}
        </div>

        {/* Quick Filter Input */}
        <div className="relative max-w-xs">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter competencies..."
            className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-400 font-mono focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Active Category Display */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-800 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              {activeCategory.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {activeCategory.description}
            </p>
          </div>
          <span className="text-xs font-mono text-cyan-400">
            {filteredSkills.length} Verified {filteredSkills.length === 1 ? 'Competency' : 'Competencies'}
          </span>
        </div>

        {filteredSkills.length === 0 ? (
          <div className="py-12 text-center text-xs font-mono text-slate-400">
            No competencies match &quot;{searchQuery}&quot; in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-850/80 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-slate-100 group-hover:text-cyan-300 font-mono text-sm transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400">
                      {skill.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {skill.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
