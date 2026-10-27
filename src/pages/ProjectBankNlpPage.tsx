import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Database, CheckCircle2, FolderGit2, Cpu, FileJson, Lock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ProjectBankNlpPage: React.FC = () => {
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
        {/* Title Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
              Project Specification
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              BankNLP – Local LLM Banking Assistant
            </h1>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
            Python · Flask · Ollama · Qwen3 · SQLite · NLP-to-API
          </span>
        </div>

        {/* Section 1: Description at the Starting (Overview, Problem Statement & Objectives) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Project Overview & Problem Statement</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Financial operations require zero-tolerance for hallucinations, strict transactional integrity, and airtight data isolation. Relying directly on raw language model generation for banking commands introduces severe risks of accidental transactions, prompt injection, and unauthorized data leakage.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans mt-3">
              BankNLP is a localized, secure banking assistant developed using Python, Flask, Ollama, Qwen3, and SQLite. It implements an NLP-to-API planning pipeline where the language model proposes structured execution plans, while the application independently enforces business rules, session authentication, and user-level data boundaries.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Core Objectives & Key Technologies</span>
            </h2>
            <ul className="text-xs sm:text-sm text-slate-300 space-y-2 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 shrink-0 font-mono">•</span>
                <span>Local private LLM execution via Ollama and Qwen3 without sending sensitive data to external APIs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 shrink-0 font-mono">•</span>
                <span>NLP-to-API planning with structured JSON schema validation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 shrink-0 font-mono">•</span>
                <span>Session-based authentication and strict user-level data isolation in SQLite.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 shrink-0 font-mono">•</span>
                <span>Automated end-to-end testing suite validating execution planning and error states.</span>
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {['Python', 'Flask', 'Ollama', 'Qwen3', 'SQLite', 'NLP-to-API', 'JSON Validation', 'E2E Testing'].map((tech) => (
                <span key={tech} className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Key Architectural Highlights */}
        <div className="my-8 pt-6 border-t border-slate-800">
          <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
            Key Architectural Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center gap-2 text-white font-mono text-sm font-semibold mb-1">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>LLM Proposes, App Validates</span>
              </div>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                The LLM strictly proposes an execution plan in structured format; the backend application validates the plan and applies business rules before executing operations. This reduces reliance on model-generated decisions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center gap-2 text-white font-mono text-sm font-semibold mb-1">
                <FileJson className="w-4 h-4 text-blue-400" />
                <span>Structured JSON Validation</span>
              </div>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                NLP queries map to deterministic JSON API contracts with parameter typing and constraint boundaries, rejecting invalid or ambiguous intents prior to any database execution.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center gap-2 text-white font-mono text-sm font-semibold mb-1">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>Session Auth & Isolation</span>
              </div>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Session-based credentials bind all queries strictly to the authenticated user ID in SQLite, guaranteeing tenant isolation, tamper-resistant access, and automated E2E test coverage.
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 hover:border-cyan-500/40 shrink-0 transition-colors"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
};
