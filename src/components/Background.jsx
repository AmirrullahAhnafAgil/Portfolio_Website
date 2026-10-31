import React from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Background Component
 * - Dark Mode: radial-gradient(ellipse at 50% 10%, #071932 0%, #030712 65%, #010309 100%)
 * - Light Mode: radial-gradient(ellipse at 50% 10%, #e0f2fe 0%, #f8fafc 60%, #f1f5f9 100%)
 * - Subtle engineering micro-grid, clean & modern aesthetic (zero AI slop)
 */
export default function Background() {
  const { isDark } = useTheme();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-all duration-700"
      style={{
        background: isDark
          ? 'radial-gradient(ellipse at 50% 10%, #071932 0%, #030712 65%, #010309 100%)'
          : 'radial-gradient(ellipse at 50% 10%, #e0f2fe 0%, #f8fafc 60%, #f1f5f9 100%)',
      }}
    >
      {/* Subtle Engineering Micro-Grid (Ultra-crisp & elegant) */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: isDark ? 0.35 : 0.45,
          backgroundImage: isDark
            ? `
              linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px)
            `
            : `
              linear-gradient(to right, rgba(14, 165, 233, 0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(14, 165, 233, 0.07) 1px, transparent 1px)
            `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 90% 75% at 50% 25%, #000 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 75% at 50% 25%, #000 40%, transparent 95%)',
        }}
      />
    </div>
  );
}

