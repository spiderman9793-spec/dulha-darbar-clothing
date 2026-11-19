import React, { useEffect, useRef } from 'react';
import { Award, Compass, Scissors, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ChapterSilhouetteProps {
  onOpenConsultation: () => void;
}

export const ChapterSilhouette: React.FC<ChapterSilhouetteProps> = ({ onOpenConsultation }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const spotlightImgRef = useRef<HTMLImageElement>(null);

  const specs = [
    { label: 'HAND EMBROIDERY', val: '380+ Hours', desc: 'Continuous zardozi threadwork' },
    { label: 'BASE TEXTURE', val: 'Midnight Velvet', desc: 'Dense structural cotton-silk' },
    { label: 'TAILORING PANELS', val: '41 Architectural Cuts', desc: 'Bespoke sculpted drape' },
    { label: 'BUTTON INSETS', val: 'Mother-of-Pearl', desc: 'Hand-turned silver alloy mount' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance on ScrollTrigger
      if (textColRef.current) {
        gsap.fromTo(
          textColRef.current.children,
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
            },
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1.1,
            ease: 'power3.out',
          }
        );
      }

      // 2. Stagger Cards Grid
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 35, opacity: 0, scale: 0.95 },
          {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
            },
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            duration: 0.9,
            ease: 'back.out(1.4)',
          }
        );
      }

      // 3. Floating breathing motion on Model Spotlight
      if (spotlightImgRef.current) {
        gsap.to(spotlightImgRef.current, {
          y: -10,
          scale: 1.02,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        // Parallax scrub on image container
        gsap.to(imageColRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
          y: -40,
          ease: 'none',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="silhouette"
      className="relative py-28 px-6 lg:px-16 bg-[#080808] border-t border-white/5 overflow-hidden"
    >
      {/* Ambient Lighting & Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Editorial Narrative & Specifications */}
        <div ref={textColRef} className="lg:col-span-7 flex flex-col justify-center">
          {/* Section Indicator */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-tech text-xs tracking-[0.3em] text-[#d4af37]">
              01 // THE SILHOUETTE
            </span>
            <div className="w-12 h-[1px] bg-[#d4af37]/40" />
            <span className="font-mono-tech text-[10px] tracking-[0.2em] text-[#6b7280]">
              EST. DULHA DARBAR
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.12em] text-white uppercase mb-6 leading-tight">
            Born of Courtly <span className="text-gold-gradient">Heritage</span>
          </h2>

          {/* Editorial Paragraph */}
          <p className="font-cormorant text-xl sm:text-2xl text-[#d1d5db] font-light leading-relaxed mb-6 italic">
            "Before an ornament is pinned or a single word declared, the silhouette commands the room. Designed for the groom whose presence is felt long before footsteps are heard."
          </p>

          <p className="font-sans text-sm sm:text-base text-[#9ca3af] font-light leading-relaxed mb-10 max-w-2xl">
            The DDT Imperial Bandhgala combines the regal posture of traditional Jodhpuri courts with the sharp lines of modern haute couture. Every piece is drafted directly against the individual client’s posture, allowing the velvet to fall clean without tension or pull.
          </p>

          {/* Atelier Metrics Grid */}
          <div ref={cardsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {specs.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 rounded-xl border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 group cursor-default"
              >
                <span className="font-mono-tech text-[9px] tracking-[0.25em] text-[#9ca3af] block mb-1 group-hover:text-[#d4af37] transition-colors">
                  {item.label}
                </span>
                <span className="font-cinzel text-base sm:text-lg font-bold text-white block mb-0.5">
                  {item.val}
                </span>
                <span className="text-[11px] text-[#6b7280] block font-light">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3 rounded-full bg-white text-black font-cinzel font-bold text-xs tracking-[0.2em] hover:bg-[#d4af37] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              BOOK PRIVATE ATELIER FITTING
            </button>
            <a
              href="#deconstructed"
              className="font-mono-tech text-xs tracking-[0.2em] text-[#d4af37] hover:text-white transition-colors"
            >
              EXPLORE ANATOMY →
            </a>
          </div>
        </div>

        {/* Right Column: Model Spotlight Visual */}
        <div ref={imageColRef} className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden glass-panel border border-[#d4af37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
            {/* Spotlight Image */}
            <img
              ref={spotlightImgRef}
              src="/assets/model-spotlight.jpg"
              alt="Dulha Darbar Model Spotlight"
              className="w-full h-auto object-cover filter contrast-110 will-change-transform"
            />

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

            {/* Floating Tag */}
            <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-full border border-[#d4af37]/40">
              <span className="font-mono-tech text-[10px] tracking-[0.25em] text-[#d4af37]">
                ROYAL COUTURE // ARCHIVE #01
              </span>
            </div>

            {/* Bottom Details Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-mono-tech text-[10px] tracking-[0.3em] text-[#9ca3af] block">
                FEATURING
              </span>
              <h3 className="font-cinzel text-xl font-bold text-white tracking-[0.15em] mb-1">
                THE IMPERIAL OBSIDIAN JODHPURI
              </h3>
              <p className="font-cormorant italic text-sm text-[#cbd5e1]">
                Complete ensemble with custom flared flared trousers & handcrafted pearl buttons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
