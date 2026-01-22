'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';
  delay?: number;
}

export function ScrollReveal({ 
  children, 
  className = '', 
  animation = 'slide-up',
  delay = 0 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  const animationClass = {
    'fade': 'scroll-reveal-fade',
    'slide-up': 'scroll-reveal',
    'slide-left': 'scroll-reveal-slide-left',
    'slide-right': 'scroll-reveal-slide-right',
    'scale': 'scroll-reveal-scale'
  }[animation];

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
}
