import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Network, CheckCircle2, Cpu, Scale, FolderGit2, ShieldAlert } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ProjectNeuroSymbolicPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Featured Projects</span>
      </Link>

      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800">
        {/* Title */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">
              Project Specification
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              Neuro-Symbolic AI Framework for Accuracy
            </h1>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-500/30">
            Symbolic AI · First-Order Logic · Rule Verification · LLMs
          </span>
        </div>

        {/* Section 1: Description at the Starting (Overview, Concepts & Objectives) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div>
            <h2 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Network className="w-4 h-4" />
              <span>Project Overview & Concept</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Traditional Large Language Models (LLMs) operate probabilistically: they excel at linguistic fluency and intuitive perception, but lack deterministic mathematical reasoning, strict constraint awareness, and explainable audit trails.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans mt-3">
              Neuro-Symbolic AI represents a powerful paradigm shift that unifies the perceptive versatility of deep neural networks with the rigorous truth-preservation of symbolic logic and rule-based verification engines. This framework validates generated responses against hard evidence constraints, ensuring zero hallucinations in mission-critical applications.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Scale className="w-4 h-4" />
              <span>Traditional LLMs vs. Neuro-Symbolic AI</span>
            </h2>
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#040817] text-xs">
              <div className="grid grid-cols-2 p-2.5 bg-slate-900 border-b border-slate-800 font-mono text-slate-300">
                <span>Traditional Pure LLMs</span>
                <span className="text-purple-300">Neuro-Symbolic Framework</span>
              </div>
              <div className="p-3 space-y-2 font-sans text-slate-400 text-[11px]">
                <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-900">
                  <span>Probabilistic token guessing</span>
                  <span className="text-slate-200">Formal logic verification</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-900">
                  <span>Prone to hallucinations</span>
                  <span className="text-slate-200">Mathematical proof tree</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span>Opaque black-box reasoning</span>
                  <span className="text-slate-200">100% Explainable audit trail</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {['Python', 'Symbolic AI', 'Rule-Based Reasoning', 'Logical Verification', 'LLMs', 'NLP'].map((tech) => (
                <span key={tech} className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-purple-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Key Architectural Highlights */}
        <div className="my-8 pt-6 border-t border-slate-800">
          <h3 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-4">
            Key Architectural Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center gap-2 text-white font-mono text-sm font-semibold mb-1">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>Zero Hallucination</span>
              </div>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Deterministic mathematical solvers prevent unsupported assertions from reaching end users.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center gap-2 text-white font-mono text-sm font-semibold mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Explainable</span>
              </div>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Every approved or declined response produces a human-auditable proof trail citing exact rules applied.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center gap-2 text-white font-mono text-sm font-semibold mb-1">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>Hybrid Synergy</span>
              </div>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Couples neural models&apos; linguistic fluency with the mathematical precision of symbolic logic.
              </p>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
          <Link
            to="/#projects"
            className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
          >
            &larr; Back to all projects
          </Link>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-purple-300 hover:border-purple-500/40 shrink-0 transition-colors"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
};
