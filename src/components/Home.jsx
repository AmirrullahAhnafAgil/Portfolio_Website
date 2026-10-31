import React from 'react';
import { Github, ArrowDown } from 'lucide-react';

// Kata-kata judul hero
const WORDS = ['Welcome', 'To', 'My', 'Portfolio', 'Website'];
// Stagger delay tiap kata (5 kata, interval ~0.18s)
const WORD_DELAYS = [0.05, 0.23, 0.41, 0.59, 0.77];

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] sm:min-h-screen flex flex-col items-center justify-between text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-20 sm:pt-28 pb-8 sm:pb-12 overflow-hidden"
    >
      {/* Anchor alias for scroll-spy */}
      <span id="hero" className="absolute top-0" />

      {/* Ambient ice glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[42rem] h-80 sm:h-[42rem] bg-cyan-500/12 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full my-auto z-10 gap-7 sm:gap-9">

        {/* ── Hero Heading: Word-by-word reveal ── */}
        <div className="max-w-5xl mx-auto px-2 py-2">
          <h1
            className="font-sans font-black tracking-tight leading-[1.1] select-none
                       text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                       flex flex-wrap items-center justify-center gap-x-[0.28em] gap-y-1"
          >
            {WORDS.map((word, i) => (
              /* Outer span: handles slide-up + fade animation */
              <span
                key={word}
                className="hero-word"
                style={{ animationDelay: `${WORD_DELAYS[i]}s` }}
              >
                {/* Inner span: handles shimmer gradient - separate from opacity animation */}
                <span className="hero-shimmer">{word}</span>
              </span>
            ))}
          </h1>
        </div>

        {/* GitHub Profile Button */}
        <div className="flex items-center justify-center">
          <a
            href="https://github.com/AmirrullahAhnafAgil"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-white dark:bg-white/5 hover:bg-cyan-50 dark:hover:bg-cyan-950/60 border border-slate-300/90 dark:border-white/10 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 shadow-[0_4px_16px_rgba(15,23,42,0.06)] dark:shadow-[0_0_20px_rgba(56,189,248,0.18)] hover:shadow-[0_8px_24px_rgba(14,165,233,0.2)] dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] hover:scale-105 flex items-center gap-2.5 group cursor-pointer"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 group-hover:rotate-6 transition-transform" />
            <span className="font-mono text-xs sm:text-sm text-slate-700 dark:text-gray-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-200 transition-colors">
              GitHub Profile
            </span>
          </a>
        </div>

      </div>

      {/* Scroll to Explore */}
      <div className="pt-6 sm:pt-10 pb-4 sm:pb-6 z-10">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1.5 text-slate-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors group cursor-pointer"
        >
          <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase">Scroll to Explore</span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
        </a>
      </div>

    </section>
  );
}
