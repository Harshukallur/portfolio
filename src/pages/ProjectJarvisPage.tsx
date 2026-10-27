import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mic, Volume2, Cpu, CheckCircle2, Monitor, FolderGit2, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ProjectJarvisPage: React.FC = () => {
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
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">
              Project Specification
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              JARVIS Desktop Voice Assistant
            </h1>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30">
            Python · Speech Recognition · NLP · Voice Processing · Automation · TTS
          </span>
        </div>

        {/* Section 1: Description at the Starting (Overview, Concepts & Objectives) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div>
            <h2 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              <span>Project Overview & Concept</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Developed as a hands-free desktop virtual assistant concept engineered to interpret spoken natural language commands and automate everyday computing operations smoothly.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans mt-3">
              The project processes human speech through four sequential operations: acoustic voice capture with noise suppression, neural speech-to-text decoding, natural language intent classification, and task automation with audible vocal feedback via text-to-speech.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Monitor className="w-4 h-4" />
              <span>Core Objectives & Tech Stack</span>
            </h2>
            <ul className="text-xs sm:text-sm text-slate-300 space-y-2 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 shrink-0 font-mono">•</span>
                <span>Real-time voice activity detection (VAD) and ambient noise suppression.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 shrink-0 font-mono">•</span>
                <span>Accurate acoustic-to-text token transcription with punctuation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 shrink-0 font-mono">•</span>
                <span>Automated intent and slot extraction to trigger OS and web routines.</span>
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {['Python', 'Speech Recognition', 'NLP', 'Voice Processing', 'Automation', 'Text-to-Speech'].map((tech) => (
                <span key={tech} className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Key Architectural Highlights */}
        <div className="my-8 pt-6 border-t border-slate-800">
          <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-4">
            Key Architectural Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center gap-2 text-white font-mono text-sm font-semibold mb-1">
                <Mic className="w-4 h-4 text-emerald-400" />
                <span>Acoustic Capture</span>
              </div>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Processes continuous microphone audio streams with dynamic voice thresholding and background noise filtering.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center gap-2 text-white font-mono text-sm font-semibold mb-1">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Task Automation</span>
              </div>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Direct integration with browser launch handlers, search engines, and local OS commands for hands-free productivity.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center gap-2 text-white font-mono text-sm font-semibold mb-1">
                <Volume2 className="w-4 h-4 text-blue-400" />
                <span>Speech Synthesis</span>
              </div>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Text-to-Speech audio feedback synthesizes spoken confirmations for an intuitive two-way conversational flow.
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-300 hover:border-emerald-500/40 shrink-0 transition-colors"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
};
