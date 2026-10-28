import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
const [isOpen, setIsOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const location = useLocation();
const isHomePage = location.pathname === '/';

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 20);
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);

const navLinks = [
{ name: 'Education', href: isHomePage ? '#education' : '/#education' },
{ name: 'Skills', href: isHomePage ? '#skills' : '/#skills' },
{ name: 'Experience', href: isHomePage ? '#experience' : '/#experience' },
{ name: 'Projects', href: isHomePage ? '#projects' : '/#projects' },
{ name: 'GitHub', href: isHomePage ? '#github' : '/#github' },
{ name: 'Contact', href: isHomePage ? '#contact' : '/#contact' }
];

return (
<header
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
       scrolled
         ? 'bg-[#030712]/90 backdrop-blur-md border-b border-cyan-500/15 py-3.5 shadow-lg shadow-black/40'
         : 'bg-transparent py-5'
     }`}
>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between gap-8">
{/* Zone 1: Single text element wordmark */}
<Link
to="/"
className="flex items-center gap-2.5 text-base font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
>
<span className="font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">
Harshitha K A
</span>
<span className="hidden sm:inline text-xs text-slate-400 font-normal">
/ M.Tech in AI
</span>
</Link>

{/* Zone 2: 4–5 clean single-line text navigation links */}
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
{navLinks.map((link) => (
<a
key={link.name}
href={link.href}
className="whitespace-nowrap shrink-0 hover:text-cyan-300 transition-colors relative py-1 text-xs uppercase tracking-wider font-mono"
>
{link.name}
</a>
))}
</nav>
 
      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#060d1f]/95 backdrop-blur-xl border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60 font-mono"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 px-3 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 hover:text-white"
            >
              GitHub / Harshukallur
            </a>
            <a
              href={isHomePage ? '#contact' : '/#contact'}
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 px-3 rounded-lg bg-cyan-400 text-slate-950 text-xs font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
