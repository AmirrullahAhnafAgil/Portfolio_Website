import React from 'react';
import { Github } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function Projects() {
  // Row 1 (Index 0 & 1, Sebelahan): Theme Cyan
  // Row 2 (Index 2 & 3, Sebelahan, Atas-Bawah Beda): Theme Indigo
  const projectList = [
    {
      title: 'Sentiment Analysis of Roblox Application User Reviews Using Convolutional Neural Network (CNN) Method',
      category: 'Machine Learning / NLP',
      tags: ['Python', 'TensorFlow', 'CNN', 'NLP', 'Scikit-Learn', 'Pandas'],
      github: 'https://github.com/AmirrullahAhnafAgil/Sentiment-Analysis-of-Roblox-Application-User-Reviews-Using-Convolutional-Neural-Network-CNN-Method.git',
      accentBar: 'bg-cyan-500',
      headerBg: 'bg-cyan-50/85 dark:bg-[#06202e] border-b border-cyan-200/80 dark:border-cyan-900/60',
      badge: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 border border-cyan-300/80 dark:border-cyan-700/50',
      linkText: 'text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300',
    },
    {
      title: 'Ticket Monitoring System',
      category: 'Web Application / Internship',
      tags: ['Laravel', 'PHP', 'Tailwind CSS', 'Blade', 'Vite', 'MySQL'],
      github: 'https://github.com/AmirrullahAhnafAgil/Ticket-Monitoring-System_Project-Internship.git',
      accentBar: 'bg-cyan-500',
      headerBg: 'bg-cyan-50/85 dark:bg-[#06202e] border-b border-cyan-200/80 dark:border-cyan-900/60',
      badge: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 border border-cyan-300/80 dark:border-cyan-700/50',
      linkText: 'text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300',
    },
    {
      title: 'Ticketing App',
      category: 'Web Development / BNSP',
      tags: ['Laravel', 'PHP', 'Tailwind CSS', 'Alpine.js', 'Laravel Breeze', 'MySQL'],
      github: 'https://github.com/AmirrullahAhnafAgil/ticketing_app_laravel_Tes-Sertifikasi-Pengembangan-web.git',
      accentBar: 'bg-indigo-500',
      headerBg: 'bg-indigo-50/85 dark:bg-[#121936] border-b border-indigo-200/80 dark:border-indigo-900/60',
      badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-300/80 dark:border-indigo-700/50',
      linkText: 'text-indigo-700 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300',
    },
    {
      title: 'Identification of Javanese Script Using ORB',
      category: 'Computer Vision / AI',
      tags: ['Python', 'OpenCV', 'ORB Algorithm', 'Streamlit', 'Scikit-Learn'],
      github: 'https://github.com/AmirrullahAhnafAgil/Identification_of_Javanese-Script_Using-ORB.git',
      accentBar: 'bg-indigo-500',
      headerBg: 'bg-indigo-50/85 dark:bg-[#121936] border-b border-indigo-200/80 dark:border-indigo-900/60',
      badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-300/80 dark:border-indigo-700/50',
      linkText: 'text-indigo-700 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300',
    },
  ];

  return (
    <section id="projects" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Title */}
      <SectionReveal>
        <div className="text-center space-y-2 mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-bankai">
            RECENT <span className="text-cyan-600 dark:text-cyan-400">PROJECT</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
        </div>
      </SectionReveal>

      {/* Projects Grid: 2 Columns */}
      <SectionReveal delay={120}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projectList.map((project, idx) => (
              <div
                key={idx}
                className="reiatsu-card rounded-2xl overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-md transition-all"
              >
                {/* 1. Solid Top Accent Bar: Row 1 = Cyan, Row 2 = Indigo (sebelahan sama, atas bawah beda) */}
                <div className={`h-1.5 w-full ${project.accentBar}`} />

                {/* 2. Top Header Block: Solid color without gradient or AI slop */}
                <div className={`p-5 sm:p-6 ${project.headerBg} space-y-3`}>
                  <div className="flex items-center justify-between gap-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider ${project.badge}`}>
                      {project.category}
                    </span>

                    {/* GitHub Button */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white dark:bg-black/60 text-slate-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-black/90 transition-all border border-slate-200 dark:border-white/10 shrink-0 shadow-xs cursor-pointer"
                      title="Source Code GitHub"
                      aria-label={`Source Code GitHub for ${project.title}`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>

                {/* 3. Tech Stack Badges & Repository Link */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-mono bg-slate-100 dark:bg-white/5 border border-slate-200/90 dark:border-white/10 text-slate-800 dark:text-gray-300 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 dark:border-slate-900 flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-[11px] sm:text-xs font-mono font-semibold ${project.linkText} flex items-center gap-1 group/btn`}
                    >
                      Explore Repository
                      <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                    </a>
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-gray-500 font-medium">Repository</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
      </SectionReveal>
    </section>
  );
}
