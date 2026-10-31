/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        rukia: {
          ice: "#38bdf8",
          cyan: "#06b6d4",
          frost: "#e0f2fe",
          crystal: "#a5f3fc",
          deepBlue: "#0284c7",
          navy: "#0a192f",
          midnight: "#030712",
          card: "rgba(7, 18, 34, 0.85)",
        },
      },
      fontFamily: {
        bankai: ['"Cinzel"', 'serif'],
        logo: ['"Orbitron"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseRukia 3s infinite ease-in-out',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin 28s linear infinite reverse',
      },
      keyframes: {
        pulseRukia: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.25), inset 0 0 15px rgba(6, 182, 212, 0.15)' },
          '50%': { boxShadow: '0 0 45px rgba(56, 189, 248, 0.55), 0 0 25px rgba(165, 243, 252, 0.35), inset 0 0 25px rgba(56, 189, 248, 0.3)' },
        }
      }
    },
  },
  plugins: [],
}
