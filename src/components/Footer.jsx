import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { CV_URL } from '../constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-900 bg-slate-100 dark:bg-[#02050c] py-10 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10 text-xs text-slate-600 dark:text-gray-400 font-mono transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="text-center sm:text-left space-y-1.5">
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 p-[1.5px] shadow-[0_0_12px_rgba(56,189,248,0.4)]">
              <div className="w-full h-full bg-white dark:bg-[#030914] rounded-[6px] flex items-center justify-center select-none">
                <span className="font-logo font-black text-[11px] text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 via-sky-500 to-blue-700 dark:from-white dark:via-cyan-300 dark:to-sky-400">
                  A
                </span>
              </div>
            </div>
            <span className="font-logo font-black text-xs tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 dark:from-cyan-300 dark:via-sky-300 dark:to-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">
              AHNAF
            </span>
          </div>
          <p className="text-slate-500 dark:text-gray-500 text-[11px]">
            &copy; {new Date().getFullYear()} Amirrullah Ahnaf Agil. All Rights Reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-slate-600 dark:text-gray-400 text-xs">
          <a
            href="https://github.com/AmirrullahAhnafAgil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/amirrullah-ahnaf-agil-0b1a63373?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
          <a
            href="#contact"
            className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact
          </a>
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors cursor-pointer"
          >
            View CV (Drive)
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-300 text-slate-600 dark:text-gray-400 transition-all cursor-pointer shadow-xs"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
