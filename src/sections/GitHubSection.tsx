import React, { useEffect, useState } from 'react';
import { Github, FolderGit2, Star, GitFork, ExternalLink, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://api.github.com/users/Harshukallur/repos?sort=updated&per_page=6');
        if (!res.ok) {
          throw new Error(`GitHub API Status: ${res.status}`);
        }
        const data = await res.json();
        if (isMounted) {
          setRepos(Array.isArray(data) ? data : []);
        }
      } catch (err: any) {
        if (isMounted) {
          setError('Public GitHub repositories are accessible directly on GitHub.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-slate-900 border border-cyan-500/30 text-cyan-400">
              <Github className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
                  Harshukallur
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Open source repositories, AI prototypes, and full-stack implementations on GitHub.
              </p>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20"
          >
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repositories Showcase */}
        <div className="mt-8">
          <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2">
            <FolderGit2 className="w-4 h-4 text-cyan-400" />
            <span>Public Repositories Showcase</span>
          </div>

          {loading ? (
            <div className="py-12 flex flex-col items-center justify-center text-slate-400 font-mono text-xs">
              <div className="w-7 h-7 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mb-3" />
              <span>Fetching public repositories from GitHub API...</span>
            </div>
          ) : error || repos.length === 0 ? (
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <p className="text-xs text-slate-400 font-mono mb-3">
                {error || 'No public repositories found or rate-limit reached.'}
              </p>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline font-mono"
              >
                <span>Browse @Harshukallur directly on GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-850/70 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 font-mono truncate">
                        {repo.name}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 shrink-0" />
                    </div>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 font-sans">
                      {repo.description || 'Repository codebase and algorithm documentation.'}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1 text-cyan-300">
                      <Code2 className="w-3 h-3" />
                      {repo.language || 'Code'}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-400" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3 text-slate-400" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
