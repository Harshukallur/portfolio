import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Database, Sparkles, CheckCircle2, FolderGit2, Zap, ShieldAlert } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ProjectCustomGptPage: React.FC = () => {
return (
<div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
<Link
        to="/#projects"
        to="https://custom-gpt-7hkd.vercel.app/"
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
Custom GPT – Domain-Specific Conversational AI
</h1>
</div>
<span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
Flask · Groq API · LLaMA · RAG · YAML
</span>
</div>

{/* Section 1: Description at the Starting (Overview, Problem Statement & Objectives) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
<div>
<h2 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
<Sparkles className="w-4 h-4" />
<span>Project Overview & Problem Statement</span>
</h2>
<p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
Generic commercial LLMs frequently suffer from high inference latency, high token costs, and hallucinations when answering specialized domain queries outside their static training corpus.
</p>
<p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans mt-3">
This project resolves these challenges by building a lightweight, scalable conversational AI microservice utilizing Flask, Groq’s ultra-high-speed LPU inference engine, and open-weights LLaMA models. A custom Retrieval-Augmented Generation (RAG) pipeline is structured with YAML-templated prompt definitions to ensure strict domain factual alignment and low-latency response delivery.
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
<span>Achieve sub-500ms response latency using Groq LPU hardware acceleration.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-cyan-400 shrink-0 font-mono">•</span>
<span>Deterministic domain prompt management using declarative YAML templates.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-cyan-400 shrink-0 font-mono">•</span>
<span>Factual grounding through automated dense vector search and semantic chunking.</span>
</li>
</ul>

<div className="mt-5 flex flex-wrap gap-1.5">
{['Python', 'Flask', 'Groq API', 'LLaMA Models', 'RAG', 'YAML', 'NLP'].map((tech) => (
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
<Zap className="w-4 h-4 text-cyan-400" />
<span>Low Latency</span>
</div>
<p className="text-xs text-slate-400 font-sans leading-relaxed">
Groq LPUs process LLaMA token inference at ~300+ tokens/sec, ensuring round-trip responses in under 400ms.
</p>
</div>

<div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
<div className="flex items-center gap-2 text-white font-mono text-sm font-semibold mb-1">
<Database className="w-4 h-4 text-blue-400" />
<span>RAG Grounding</span>
</div>
<p className="text-xs text-slate-400 font-sans leading-relaxed">
Vector similarity indexing retrieves relevant document chunks to anchor model replies directly in verifiable evidence.
</p>
</div>

<div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
<div className="flex items-center gap-2 text-white font-mono text-sm font-semibold mb-1">
<ShieldAlert className="w-4 h-4 text-emerald-400" />
<span>Domain Boundary</span>
</div>
<p className="text-xs text-slate-400 font-sans leading-relaxed">
YAML prompt constraints prevent open-domain hallucination and enforce strict truthfulness boundaries.
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
