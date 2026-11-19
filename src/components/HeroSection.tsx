import React, { useEffect, useRef } from 'react';
import { ChevronDown, ShieldCheck, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Page Load Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      )
        .fromTo(
          headlineRef.current,
          { y: 60, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 1.3, ease: 'power4.out' },
          '-=0.7'
        )
        .fromTo(
          subtextRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.8'
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        );

      // 2. ScrollTrigger Parallax Scrub
      if (sectionRef.current && videoRef.current) {
        gsap.to(videoRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
          scale: 1.25,
          y: 80,
          opacity: 0.45,
          ease: 'none',
        });

        // Parallax lift on hero text
        gsap.to([headlineRef.current, subtextRef.current, ctaRef.current], {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
          y: -120,
          opacity: 0,
          ease: 'none',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 8-Second Cinematic Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/model-spotlight.jpg"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.15] scale-[1.03] will-change-transform"
        >
          <source src="/assets/hero-bg-video.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Vignette, Radial Spotlight & Subtle Mist */}
        <div className="absolute inset-0 cinematic-vignette pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60 pointer-events-none" />
        <div className="absolute inset-0 spotlight-radial pointer-events-none" />
      </div>

      {/* Hero Content Stage */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Top Atelier Crest Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel-subtle mb-6 border border-[#d4af37]/30 shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="font-mono-tech text-[10px] sm:text-xs tracking-[0.28em] text-[#e2e8f0]">
            MAISON DULHA DARBAR // ROYAL BESPOKE 2026
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
        </div>

        {/* Grand Brand Headline */}
        <h1
          ref={headlineRef}
          className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.18em] font-extrabold uppercase mb-4 text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
        >
          DULHA <span className="text-gold-gradient">DARBAR</span>
        </h1>

        {/* Editorial Sub-Headline */}
        <div ref={subtextRef} className="flex flex-col items-center">
          <p className="font-cormorant italic text-xl sm:text-2xl md:text-3xl text-[#e2e8f0]/90 max-w-2xl mb-4 font-light tracking-wide">
            "The Architecture of Royalty — Hand-Carved Zardozi on Midnight Velvet"
          </p>

          <p className="font-mono-tech text-xs sm:text-sm tracking-[0.18em] text-[#9ca3af] max-w-xl mb-10 uppercase">
            Bespoke Bandhgala & Sherwani Couture engineered exclusively for imperial wedding ceremonies.
          </p>
        </div>

        {/* Call to Actions */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5c07b] to-[#aa8022] text-black font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(212,175,55,0.7)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            REQUEST PRIVATE FITTING
          </button>

          <a
            href="#deconstructed"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full glass-panel text-white font-mono-tech text-xs tracking-[0.2em] hover:text-[#d4af37] hover:border-[#d4af37]/60 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span>DISCOVER THE CRAFT</span>
          </a>
        </div>
      </div>

      {/* Floating Bottom Status Bar & Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-6 left-0 right-0 z-10 px-8 flex flex-col items-center justify-center pointer-events-none"
      >
        <a
          href="#silhouette"
          className="pointer-events-auto flex flex-col items-center gap-2 group cursor-pointer"
        >
          <span className="font-mono-tech text-[10px] tracking-[0.3em] text-[#9ca3af] group-hover:text-[#d4af37] transition-colors">
            SCROLL TO ENTER THE DARBAR
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#d4af37] to-transparent animate-bounce" />
        </a>
      </div>
    </section>
  );
};
