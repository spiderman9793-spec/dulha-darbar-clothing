import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable custom cursor on non-touch desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Use GSAP quickTo for 120fps ultra-fluid cursor tracking
    const xDot = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3' });
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3' });
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power2.out' });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power2.out' });

    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const handleMouseEnter = () => {
      gsap.to(ring, {
        scale: 2.2,
        backgroundColor: 'rgba(212, 175, 55, 0.15)',
        borderColor: '#d4af37',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(dot, {
        scale: 0.5,
        backgroundColor: '#ffffff',
        duration: 0.3,
      });
      isHovering = true;
    };

    const handleMouseLeave = () => {
      gsap.to(ring, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: 'rgba(212, 175, 55, 0.4)',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(dot, {
        scale: 1,
        backgroundColor: '#d4af37',
        duration: 0.3,
      });
      isHovering = false;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Attach hover listeners to all interactive items
    const updateInteractiveElements = () => {
      const interactives = document.querySelectorAll('button, a, input, select, textarea, [data-cursor="pointer"]');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    updateInteractiveElements();
    const interval = setInterval(updateInteractiveElements, 2000);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Central Solid Gold Micro-Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#d4af37] pointer-events-none z-[9999] hidden md:block shadow-[0_0_8px_#d4af37]"
      />
      {/* Trailing Luxury Halo Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 -ml-4.5 -mt-4.5 rounded-full border border-[#d4af37]/40 pointer-events-none z-[9998] hidden md:block transition-opacity duration-300"
      />
    </>
  );
};
