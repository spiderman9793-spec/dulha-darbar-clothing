import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ChapterLookbookProps {
  onOpenConsultation: () => void;
}

export const ChapterLookbook: React.FC<ChapterLookbookProps> = ({ onOpenConsultation }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Tilt / Parallax Entry on Cards
      gsap.fromTo(
        [card1Ref.current, card2Ref.current],
        { y: 60, opacity: 0, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 1.1,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        card3Ref.current,
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: card3Ref.current,
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lookbook"
      className="relative py-28 px-6 lg:px-16 bg-[#050505] border-t border-white/5 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono-tech text-xs tracking-[0.3em] text-[#d4af37]">
                04 // EDITORIAL ARCHIVE
              </span>
              <div className="w-8 h-[1px] bg-[#d4af37]/40" />
              <span className="font-mono-tech text-[10px] tracking-[0.2em] text-[#6b7280]">
                STUDIO REVEAL
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-[0.14em] text-white uppercase">
              The Royal <span className="text-gold-gradient">Lookbook</span>
            </h2>
          </div>

          <p className="font-cormorant italic text-lg sm:text-xl text-[#9ca3af] max-w-md mt-4 md:mt-0 font-light">
            "Captured within the shadows of the atelier. Moments of poise, craftsmanship, and quiet majesty."
          </p>
        </div>

        {/* Editorial Masonry / Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Dynamic Video Transition Card (Runway Motion) */}
          <div
            ref={card1Ref}
            className="md:col-span-7 relative rounded-2xl overflow-hidden glass-panel border border-white/10 group min-h-[460px] flex flex-col justify-end p-8"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-1000 will-change-transform"
            >
              <source src="/assets/transition-video.mp4" type="video/mp4" />
            </video>

            {/* Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

            {/* Content Overlay */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#d4af37]/40 mb-3">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="font-mono-tech text-[10px] tracking-[0.25em] text-[#e2e8f0]">
                  RUNWAY MOTION // 1080P CINEMATIC
                </span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide mb-2">
                Fluidity In Motion
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#cbd5e1] max-w-lg mb-4 font-light">
                Witness how the structural midnight velvet moves effortlessly with the wearer, preserving crisp lines from red carpet entrance to reception stage.
              </p>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-[0.2em] text-[#d4af37] hover:text-white transition-colors"
              >
                <span>REQUEST THIS CUSTOM FIT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Editorial Portrait */}
          <div
            ref={card2Ref}
            className="md:col-span-5 relative rounded-2xl overflow-hidden glass-panel border border-white/10 group min-h-[460px] flex flex-col justify-end p-8"
          >
            <img
              src="/assets/model-editorial.jpg"
              alt="Editorial Bespoke Ensemble"
              className="absolute inset-0 w-full h-full object-cover filter contrast-115 group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="font-mono-tech text-[10px] tracking-[0.25em] text-[#d4af37] block mb-1">
                STUDIO SESSION // ARCHIVE 02
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide mb-2">
                Bespoke Trouser Drape
              </h3>
              <p className="font-cormorant italic text-sm text-[#cbd5e1]">
                Paired with flared architectural black trousers crafted to fall cleanly over polished patent leather oxford shoes.
              </p>
            </div>
          </div>

          {/* Card 3: Macro Craftsmanship Grid */}
          <div
            ref={card3Ref}
            className="md:col-span-12 relative rounded-2xl overflow-hidden glass-panel border border-white/10 p-8 sm:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div>
                <span className="font-mono-tech text-[10px] tracking-[0.25em] text-[#d4af37] block mb-2">
                  THE DULHA DARBAR PROMISE
                </span>
                <h4 className="font-cinzel text-2xl font-bold text-white tracking-wide mb-3">
                  Tailored Directly to Your Aura
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#9ca3af] font-light leading-relaxed mb-4">
                  No two grooms possess the same posture or aura. Our master cutters draft a bespoke pattern unique to your shoulder slope, chest arch, and ceremony lighting.
                </p>
                <div className="flex items-center gap-3">
                  <span className="font-mono-tech text-xs text-[#d4af37]">01. PRIVATE MEASUREMENT</span>
                  <span className="text-[#6b7280]">→</span>
                  <span className="font-mono-tech text-xs text-[#d4af37]">02. TOILE FITTING</span>
                  <span className="text-[#6b7280]">→</span>
                  <span className="font-mono-tech text-xs text-[#d4af37]">03. FINAL HANDOVER</span>
                </div>
              </div>

              <div className="md:col-span-2 grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-white/10 aspect-[4/3] bg-black/60 group">
                  <img
                    src="/assets/angle-5-perspective.jpg"
                    alt="Bespoke Detail"
                    className="w-full h-full object-cover filter contrast-125 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 aspect-[4/3] bg-black/60 group">
                  <img
                    src="/assets/angle-4-left.jpg"
                    alt="Chain Detail"
                    className="w-full h-full object-cover filter contrast-125 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
