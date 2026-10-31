import { useEffect, useRef } from 'react';

/**
 * SectionReveal
 * Wraps children in a div that fades + slides up every time it enters the viewport,
 * both when scrolling DOWN and UP.
 *
 * How it works:
 *  - IntersectionObserver adds 'is-visible' class when element enters viewport.
 *  - When element leaves, 'is-visible' is removed instantly (no CSS transition on
 *    the hidden state), so the next entrance always starts from scratch.
 *  - The entrance animation (transition) lives only on '.is-visible' in CSS.
 */
export default function SectionReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
        } else {
          // Instant reset — no transition on exit, ready to re-animate
          el.classList.remove('is-visible');
        }
      },
      {
        // Trigger when 10% of element is visible, with a small top/bottom margin
        threshold: 0.1,
        rootMargin: '-40px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`section-reveal ${className}`}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

