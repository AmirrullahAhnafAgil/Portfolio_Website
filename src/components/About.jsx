import React, { useState, useEffect } from 'react';
import {
  User,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import SectionReveal from './SectionReveal';
import { CV_URL } from '../constants';

export default function About() {
  const [introText, setIntroText] = useState('');
  // Muat foto profil dengan fallback otomatis ke berbagai format
  const [photoSrc, setPhotoSrc] = useState('/profile.jpg');
  const [photoError, setPhotoError] = useState(false);

  const handlePhotoError = () => {
    if (photoSrc === '/profile.jpg') {
      setPhotoSrc('/profile.jpeg');
    } else if (photoSrc === '/profile.jpeg') {
      setPhotoSrc('/profile.jpg.jpeg');
    } else if (photoSrc === '/profile.jpg.jpeg') {
      setPhotoSrc('/profile.png');
    } else {
      setPhotoError(true);
    }
  };

  // Teks perkenalan yang dijadikan gerak-gerak (typewriter loop)
  const fullIntro = "Hi, I'm AMIRRULLAH AHNAF AGIL";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeoutId;

    const typeIntro = () => {
      if (!isDeleting) {
        index++;
        setIntroText(fullIntro.slice(0, index));
        if (index === fullIntro.length) {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            typeIntro();
          }, 3200); // Tahan 3.2 detik saat selesai mengetik
          return;
        }
        timeoutId = setTimeout(typeIntro, 85);
      } else {
        index--;
        setIntroText(fullIntro.slice(0, index));
        if (index === 0) {
          isDeleting = false;
          timeoutId = setTimeout(typeIntro, 500);
          return;
        }
        timeoutId = setTimeout(typeIntro, 40);
      }
    };

    timeoutId = setTimeout(typeIntro, 400);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="about" className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <SectionReveal>
        <div className="text-center space-y-2 mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-bankai">
            ABOUT <span className="text-cyan-600 dark:text-cyan-400">ME</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
        </div>
      </SectionReveal>

      {/* Main Profile Grid: Photo & Bio */}
      <SectionReveal delay={120}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Modern Floating Photo Frame */}
        <div className="lg:col-span-5 flex justify-center order-1">
          <div className="relative flex items-center justify-center w-56 xs:w-64 sm:w-72 md:w-80 lg:w-88">

            {/* Outer glow pulse ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/30 via-sky-400/20 to-blue-600/15 blur-2xl animate-pulse pointer-events-none" />

            {/* Spinning gradient border ring */}
            <div
              className="absolute -inset-[3px] rounded-[2rem] pointer-events-none z-10"
              style={{
                background: 'conic-gradient(from 0deg, #38bdf8, #06b6d4, #0ea5e9, #a5f3fc, #38bdf8)',
                borderRadius: '2rem',
                animation: 'spin 6s linear infinite',
                opacity: 0.85,
              }}
            />

            {/* Static backdrop ring (matte, hides the conic gap) */}
            <div className="absolute -inset-[2px] rounded-[1.85rem] bg-slate-50 dark:bg-[#030712] pointer-events-none z-10" />

            {/* Main photo container */}
            <div className="relative w-full aspect-square rounded-[1.75rem] overflow-hidden z-20 shadow-[0_12px_40px_rgba(15,23,42,0.12),0_0_25px_rgba(56,189,248,0.2)] dark:shadow-[0_0_40px_rgba(56,189,248,0.3),0_0_80px_rgba(6,182,212,0.15)] group bg-slate-100 dark:bg-[#02050c]">

              {/* Subtle scan-line overlay */}
              <div
                className="absolute inset-0 z-30 pointer-events-none"
                style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(56,189,248,0.03) 3px, rgba(56,189,248,0.03) 4px)',
                }}
              />

              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-500 dark:border-cyan-400/80 z-40 rounded-tl-sm pointer-events-none" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-500 dark:border-cyan-400/80 z-40 rounded-tr-sm pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-500 dark:border-cyan-400/80 z-40 rounded-bl-sm pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-500 dark:border-cyan-400/80 z-40 rounded-br-sm pointer-events-none" />

              {/* Photo or fallback */}
              {!photoError ? (
                <img
                  src={photoSrc}
                  alt="Foto Profil Amirrullah Ahnaf Agil"
                  onError={handlePhotoError}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-b from-slate-200 to-slate-300 dark:from-[#051528] dark:to-[#020712] flex items-center justify-center">
                  <User className="w-20 h-20 sm:w-24 sm:h-24 text-cyan-600 dark:text-cyan-400/70" />
                </div>
              )}

              {/* Bottom gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-slate-100/70 dark:from-[#030712]/60 to-transparent z-30 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Animated Typing Greeting */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left order-2">
          
          {/* Animated Typing Title - Gerak-gerak tanpa garis cursor */}
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight min-h-[2.5rem] sm:min-h-[3.5rem]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 dark:from-cyan-300 dark:via-sky-300 dark:to-blue-400 ichigo-glow-text">
              {introText || '\u00A0'}
            </span>
          </h3>

          {/* Bio Paragraph */}
          <p className="text-slate-600 dark:text-gray-300 text-xs xs:text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
            A fresh graduate holding a Bachelor's degree in Informatics Engineering from the Faculty of Computer Science, Dian Nuswantoro University (UDINUS). A fast learner with high motivation to continuously develop technical skills, proficient in utilizing Artificial Intelligence (AI) tools, and capable of working both independently and collaboratively within a team.
          </p>

          {/* Fresh Graduate Highlight Stat */}
          <div className="pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-xs font-mono shadow-xs">
              <span className="text-base sm:text-lg font-bold text-cyan-700 dark:text-cyan-400">3.3</span>
              <span className="text-slate-500 dark:text-gray-400">GPA</span>
            </div>
          </div>

          {/* Actions: Hubungi Saya & CV */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <a
              href="#contact"
              className="slash-hover px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-bold text-xs sm:text-sm tracking-wider shadow-[0_4px_16px_rgba(14,165,233,0.3)] dark:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_6px_24px_rgba(14,165,233,0.5)] dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.7)] transition-all flex items-center justify-center gap-2 border border-cyan-300/40 text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CONTACT ME</span>
            </a>

            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-white dark:bg-white/5 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 border border-slate-300/90 dark:border-white/10 hover:border-cyan-500 text-cyan-700 dark:text-cyan-300 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer text-center shadow-xs"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View CV (Google Drive)</span>
            </a>
          </div>

        </div>

      </div>
      </SectionReveal>

    </section>
  );
}
