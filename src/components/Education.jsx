import React from 'react';
import { GraduationCap, Award, CheckCircle2, Calendar, ExternalLink } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function Education() {
  // Row 1 (Index 0, 1, 2): Cyan Theme (Sebelahan sama)
  // Row 2 (Index 3, 4): Indigo Theme (Sebelahan sama, atas-bawah beda)
  const certifications = [
    {
      name: 'Getting Started with Python Programming',
      issuer: 'Dicoding Indonesia',
      year: '2026',
      link: 'https://drive.google.com/file/d/1cnbdFP0vF3r7gvZicaKn7tzVyi9hINDL/view?usp=sharing',
      accentBar: 'bg-cyan-500',
      headerBg: 'bg-cyan-50/85 dark:bg-[#06202e] border-b border-cyan-200/80 dark:border-cyan-900/60',
      badge: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 border border-cyan-300/80 dark:border-cyan-700/50',
      linkText: 'text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300',
    },
    {
      name: 'Learning the Basics of Data Science',
      issuer: 'Dicoding Indonesia',
      year: '2026',
      link: 'https://drive.google.com/file/d/1YDlqJjfzdVhRkoFr4Z-negj0jFlToqBo/view?usp=sharing',
      accentBar: 'bg-cyan-500',
      headerBg: 'bg-cyan-50/85 dark:bg-[#06202e] border-b border-cyan-200/80 dark:border-cyan-900/60',
      badge: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 border border-cyan-300/80 dark:border-cyan-700/50',
      linkText: 'text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300',
    },
    {
      name: 'Learning the Basics of Structured Query Language (SQL)',
      issuer: 'Dicoding Indonesia',
      year: '2026',
      link: 'https://drive.google.com/file/d/1E0-jEcVBfd50yJN_njShyoe9wDsAjdR1/view?usp=sharing',
      accentBar: 'bg-cyan-500',
      headerBg: 'bg-cyan-50/85 dark:bg-[#06202e] border-b border-cyan-200/80 dark:border-cyan-900/60',
      badge: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 border border-cyan-300/80 dark:border-cyan-700/50',
      linkText: 'text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300',
    },
    {
      name: 'AI Literacy for Everyone: Recognize, Use, Create',
      issuer: 'IS BASS Training Center & Consultant',
      year: '2025',
      link: 'https://drive.google.com/file/d/1uFTYr2lc32gP4Iym1UWpWFZEij7kITvp/view?usp=sharing',
      accentBar: 'bg-indigo-500',
      headerBg: 'bg-indigo-50/85 dark:bg-[#121936] border-b border-indigo-200/80 dark:border-indigo-900/60',
      badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-300/80 dark:border-indigo-700/50',
      linkText: 'text-indigo-700 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300',
    },
    {
      name: 'Web Developer',
      issuer: 'BNSP',
      year: '2025',
      link: 'https://drive.google.com/file/d/1d-r80qjMKNjgvnYf8-LCYnJYly-laPeK/view?usp=sharing',
      accentBar: 'bg-indigo-500',
      headerBg: 'bg-indigo-50/85 dark:bg-[#121936] border-b border-indigo-200/80 dark:border-indigo-900/60',
      badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-300/80 dark:border-indigo-700/50',
      linkText: 'text-indigo-700 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300',
    },
  ];

  return (
    <section id="education" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Title */}
      <SectionReveal>
        <div className="text-center space-y-2 mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-bankai">
            EDUCATION & <span className="text-cyan-600 dark:text-cyan-400">CERTIFICATE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
        </div>
      </SectionReveal>

      {/* Vertical Stack Layout */}
      <SectionReveal delay={120}>
        <div className="space-y-8">
        
        {/* ========================================================
            UPPER CARD: FORMAL EDUCATION (Cyan Theme)
           ======================================================== */}
        <div className="reiatsu-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
          {/* Top Solid Accent Bar: Cyan */}
          <div className="h-1.5 w-full bg-cyan-500" />

          {/* Top Header Block: Solid Cyan */}
          <div className="p-5 sm:p-7 bg-cyan-50/85 dark:bg-[#06202e] border-b border-cyan-200/80 dark:border-cyan-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-cyan-100 dark:bg-cyan-950 border border-cyan-300/80 dark:border-cyan-500/50 flex items-center justify-center text-cyan-800 dark:text-cyan-300 shadow-xs shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Education</h3>
                <span className="text-xs text-slate-500 dark:text-gray-400 font-mono">Formal Academic Degree</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 border border-cyan-300/80 dark:border-cyan-500/30 self-start sm:self-auto shadow-xs font-bold">
              <Calendar className="w-3.5 h-3.5 text-cyan-700 dark:text-cyan-400" />
              <span>2022 - 2026</span>
            </div>
          </div>

          <div className="p-5 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <h4 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                Bachelor of Informatics Engineering / Faculty of Computer Science
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 font-medium">
                Dian Nuswantoro University
              </p>
            </div>

            <div className="md:col-span-4 p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs shadow-xs">
              <div className="flex justify-between items-center text-slate-700 dark:text-gray-300">
                <span className="font-semibold text-slate-800 dark:text-gray-200">Cumulative GPA:</span>
                <span className="font-mono font-bold text-base text-cyan-700 dark:text-cyan-400">3.3 / 4.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            LOWER CARD: 5 CERTIFICATES & CREDENTIALS (Indigo Theme)
            (Atas Bawah Beda: Upper = Cyan, Lower = Indigo)
           ======================================================== */}
        <div className="reiatsu-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
          {/* Top Solid Accent Bar: Indigo */}
          <div className="h-1.5 w-full bg-indigo-500" />

          {/* Top Header Block: Solid Indigo */}
          <div className="p-5 sm:p-7 bg-indigo-50/85 dark:bg-[#121936] border-b border-indigo-200/80 dark:border-indigo-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950 border border-indigo-300/80 dark:border-indigo-500/50 flex items-center justify-center text-indigo-800 dark:text-indigo-300 shadow-xs shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">CERTIFICATE</h3>
                <span className="text-xs text-slate-500 dark:text-gray-400 font-mono">Verified Professional Credentials</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-800 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-950 px-3 py-1 rounded-full border border-indigo-300/80 dark:border-indigo-500/30 self-start sm:self-auto shadow-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>5 Certificates</span>
            </div>
          </div>

          {/* 5 Certifications Grid */}
          <div className="p-5 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="reiatsu-card rounded-xl overflow-hidden flex flex-col justify-between group shadow-xs hover:shadow-md transition-all"
              >
                {/* Accent Bar: Row 1 = Cyan, Row 2 = Indigo (sebelahan sama, atas bawah beda) */}
                <div className={`h-1 w-full ${cert.accentBar}`} />

                {/* Sub-card top header */}
                <div className={`p-4 ${cert.headerBg} flex items-center justify-between`}>
                  <span className={`text-[10px] sm:text-[11px] font-mono font-bold px-2 py-0.5 rounded ${cert.badge}`}>
                    Year {cert.year}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/30 font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                {/* Sub-card body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">
                      {cert.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 mt-1.5 font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                  
                  <div className="border-t border-slate-200/80 dark:border-white/5 pt-2.5 flex items-center justify-between">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold ${cert.linkText} transition-colors group/link cursor-pointer`}
                    >
                      <span>Open Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-gray-500">Official</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        </div>
      </SectionReveal>
    </section>
  );
}
