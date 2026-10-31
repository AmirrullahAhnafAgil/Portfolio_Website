import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme, isDark } = useTheme();

  const navLinks = [
    { id: 'home', name: 'Home', href: '#home' },
    { id: 'about', name: 'About', href: '#about' },
    { id: 'skills', name: 'Skill', href: '#skills' },
    { id: 'projects', name: 'Project', href: '#projects' },
    { id: 'education', name: 'Education', href: '#education' },
    { id: 'contact', name: 'Contact', href: '#contact' },
  ];

  // Mendeteksi section yang sedang aktif saat di-scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

    const handleScroll = () => {
      // Jika masih di paling atas, aktifkan home
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      // Jika sudah scroll sampai mendekati paling bawah halaman, aktifkan contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70) {
        setActiveSection('contact');
        return;
      }

      // Hitung posisi section yang berada di area pandang aktif (sekitar 35% tinggi viewport)
      const triggerY = window.innerHeight * 0.35;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerY && rect.bottom >= triggerY) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger sekali saat pertama dimuat

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Centered Pill Navbar Container */}
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center items-center px-3 sm:px-4 pointer-events-none">
        <div className="pointer-events-auto bg-white/90 dark:bg-[#030914]/85 backdrop-blur-xl border border-slate-200 dark:border-cyan-500/35 rounded-full px-3 sm:px-5 py-1.5 sm:py-2.5 shadow-[0_10px_30px_rgba(15,23,42,0.08),0_0_15px_rgba(56,189,248,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(56,189,248,0.2)] flex items-center justify-between gap-2.5 sm:gap-4 transition-all">
          
          {/* Brand Logo: Icon 'A' + 'AHNAF' */}
          <a
            href="#home"
            className="flex items-center gap-2 group shrink-0"
            aria-label="Home"
            onClick={() => setActiveSection('home')}
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 p-[1.5px] group-hover:scale-105 transition-all duration-300 shadow-[0_0_12px_rgba(56,189,248,0.45)]">
              <div className="w-full h-full bg-white dark:bg-[#030914] rounded-[6px] flex items-center justify-center select-none">
                <span className="font-logo font-black text-xs sm:text-sm text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 via-sky-500 to-blue-700 dark:from-white dark:via-cyan-300 dark:to-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.7)]">
                  A
                </span>
              </div>
            </div>
            <span className="font-logo font-black text-xs sm:text-sm tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 dark:from-cyan-300 dark:via-sky-300 dark:to-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)] group-hover:from-cyan-500 group-hover:to-blue-600 dark:group-hover:from-white dark:group-hover:to-cyan-300 transition-all select-none">
              AHNAF
            </span>
          </a>

          {/* Pemisah Vertikal Halus */}
          <div className="w-[1px] h-4 sm:h-5 bg-slate-200 dark:bg-cyan-500/25 hidden md:block" />

          {/* Desktop Navigation Links dengan Indikator Halaman Aktif */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 text-xs font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`relative px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] lg:text-xs font-semibold tracking-wider transition-all duration-300 whitespace-nowrap select-none text-center ${
                    isActive
                      ? 'text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-400/60 shadow-[0_0_12px_rgba(14,165,233,0.2)] dark:shadow-[0_0_15px_rgba(56,189,248,0.35)]'
                      : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Pemisah Vertikal Halus (Desktop Right) */}
          <div className="w-[1px] h-4 sm:h-5 bg-slate-200 dark:bg-cyan-500/25 hidden md:block" />

          {/* Desktop Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="hidden md:flex items-center justify-center p-1.5 sm:p-2 rounded-full text-slate-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200/80 dark:border-white/10 transition-all cursor-pointer shadow-xs"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-cyan-600 hover:-rotate-12 transition-transform" />
            )}
          </button>

          {/* Mobile Right Controls: 1-Tap Theme Toggle + Hamburger Button */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg text-slate-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200/60 dark:border-white/10 transition-all cursor-pointer"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-600" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-slate-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg cursor-pointer focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Floating Mobile Dropdown Menu saat hamburger dibuka */}
      {isOpen && (
        <div className="fixed top-18 sm:top-20 inset-x-4 z-50 md:hidden bg-white/95 dark:bg-[#030914]/95 backdrop-blur-2xl border border-slate-200 dark:border-cyan-500/40 rounded-2xl p-3.5 shadow-[0_15px_35px_rgba(15,23,42,0.12),0_0_20px_rgba(56,189,248,0.15)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(56,189,248,0.2)] space-y-1 max-w-sm mx-auto animate-in fade-in slide-in-from-top-3 duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setIsOpen(false);
                }}
                className={`flex items-center text-xs font-medium py-2.5 px-3.5 rounded-xl transition-all ${
                  isActive
                    ? 'text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-500/50 font-bold shadow-[0_0_12px_rgba(14,165,233,0.15)] dark:shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                    : 'text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                <span>{link.name}</span>
              </a>
            );
          })}

          {/* Mobile Menu Theme Switcher Row */}
          <div className="pt-2 mt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between px-3 py-1">
            <span className="text-xs font-mono text-slate-600 dark:text-gray-400">
              Theme: <span className="font-semibold text-slate-800 dark:text-gray-200 capitalize">{theme}</span>
            </span>
            <button
              onClick={toggleTheme}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 cursor-pointer"
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Dark</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
