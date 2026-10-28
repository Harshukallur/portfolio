import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Cpu,
  Network,
  Mic,
  FolderGit2,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import { PROJECTS_SUMMARY } from '../data/portfolioData';

const CUSTOM_GPT_URL = 'https://custom-gpt-7hkd.vercel.app/';

export const ProjectsSection: React.FC = () => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'custom-gpt':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'neuro-symbolic-ai':
        return <Network className="w-5 h-5 text-purple-400" />;
      case 'jarvis-assistant':
        return <Mic className="w-5 h-5 text-emerald-400" />;
      case 'bank-nlp':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  // CustomGPT opens the hosted application.
  // Other projects retain their existing details-page URLs.
const getProjectUrl = (project: { id: string; slug: string }) => {
  if (project.id === 'custom-gpt') {
    return CUSTOM_GPT_URL;
  }

  return `/projects/${project.slug}`;
};

  const isExternalProject = (projectId: string) =>
    projectId === 'custom-gpt';

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10"
    >
      <div className="text-left mb-14">
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
          <Layers className="w-4 h-4" />
          <span>Featured Systems</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Featured AI &amp; ML Projects
        </h2>

        <p className="mt-2 text-sm text-slate-400 max-w-2xl">
          Complete, end-to-end implementations with comprehensive technical
          specifications, system objectives, and key architectural highlights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS_SUMMARY.map((project) => {
          const projectUrl = getProjectUrl(project);
          const isExternal = isExternalProject(project.id);

          return (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl flex flex-col justify-between group overflow-hidden border border-slate-800 hover:border-cyan-500/40"
            >
              <div>
                {/* Visual Preview Image */}
                <Link
                  to={projectUrl}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="block relative aspect-video overflow-hidden bg-slate-900"
                >
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#040817] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-3 left-3 p-2 rounded-lg bg-black/60 backdrop-blur border border-white/10">
                    {getProjectIcon(project.id)}
                  </div>
                </Link>

                {/* Card Body */}
                <div className="p-6">
                  <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
                    {project.category}
                  </div>

                  <Link
                    to={projectUrl}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                  >
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}

                    {project.technologies.length > 5 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 rounded text-slate-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 border-t border-slate-900 mt-2 space-y-2">
                <Link
                  to={projectUrl}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/25 hover:border-cyan-400 font-medium text-xs font-mono transition-all group/btn"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 flex items-center justify-center gap-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 text-xs font-mono transition-colors"
                  >
                    <FolderGit2 className="w-3.5 h-3.5" />
                    <span>View GitHub Repository</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
