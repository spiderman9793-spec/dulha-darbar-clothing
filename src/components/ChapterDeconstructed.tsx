import React, { useState, useEffect, useRef } from 'react';
import { Layers, Sparkles, Scissors, Gem, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ChapterDeconstructed: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageStageRef = useRef<HTMLDivElement>(null);
  const garmentImgRef = useRef<HTMLImageElement>(null);
  const detailsColRef = useRef<HTMLDivElement>(null);

  const layers = [
    {
      id: 'velvet',
      number: '01',
      title: 'Midnight Cotton-Silk Velvet',
      subtitle: 'The Architectural Canvas',
      image: '/assets/angle-1-front.jpg',
      badge: 'FOUNDATION WEAVE',
      details: [
        '360 GSM heavy cotton-silk velvet sourced for deep light-absorbent black pile.',
        'Stabilized inner canvas ensures structured shoulder pitch without stiffness.',
        'Breathable cupro lining dyed in bespoke royal charcoal to minimize heat on stage.',
      ],
      specs: {
        Weight: '360 GSM',
        Composition: '70% Silk / 30% Cotton',
        Structure: 'Full Floating Canvas',
      },
    },
    {
      id: 'embroidery',
      number: '02',
      title: 'Silver Acanthus Zardozi',
      subtitle: 'Hand-Rendered Baroque Geometry',
      image: '/assets/angle-5-perspective.jpg',
      badge: 'METALLIC THREADWORK',
      details: [
        'Continuous interlocking acanthus chain motifs drafted by master karigars.',
        'Spun silver resham threads hammered flat to catch ambient venue lighting.',
        'Over 380 hours of meticulous hand-needlework spanning all 41 exterior panels.',
      ],
      specs: {
        Technique: 'Zardozi & Dabka',
        Thread: 'Spun Silver Resham',
        Execution: 'Master Karigar Guild',
      },
    },
    {
      id: 'collar-buttons',
      number: '03',
      title: 'Mandarin Collar & Pearl Insets',
      subtitle: 'Imperial Court Fastenings',
      image: '/assets/angle-6-topdown.jpg',
      badge: 'JEWELRY HARDWARE',
      details: [
        'Curved stand collar cut precisely to align cleanly with the groom’s jawline.',
        'Natural South Sea mother-of-pearl buttons mounted on cast silver alloy stems.',
        'Functional hand-sewn buttonholes reinforced with micro-silk lock-stitches.',
      ],
      specs: {
        'Collar Height': '4.2 cm Royal Mandarin',
        Buttons: 'Natural Mother-of-Pearl',
        Mount: 'Silver Alloy Cast',
      },
    },
    {
      id: 'brooch-chain',
      number: '04',
      title: 'Heraldic Crest & Triple Drape Chain',
      subtitle: 'Aristocratic Ceremomial Insignia',
      image: '/assets/angle-4-left.jpg',
      badge: 'REGAL ORNAMENTATION',
      details: [
        'Detachable breast pocket brooch with custom engraved DDT royal monogram.',
        'Triple cascading silver curb chain engineered with tension-draped curvature.',
        'Velvet welt pocket positioned at an exact 15° imperial slant for the pocket square.',
      ],
      specs: {
        Monogram: 'Dulha Darbar Crest',
        'Chain Length': '18 cm Cascading Drop',
        Finish: 'Oxidized Antique Silver',
      },
    },
  ];

  const current = layers[activeLayer];

  // GSAP Exploded Transition on Layer Switch
  useEffect(() => {
    if (!garmentImgRef.current || !detailsColRef.current) return;

    // Exploded disassembling animation
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      garmentImgRef.current,
      { scale: 1.12, opacity: 0.3, filter: 'brightness(1.5) blur(4px)' },
      { scale: 1, opacity: 1, filter: 'brightness(1) blur(0px)', duration: 0.65 }
    );

    tl.fromTo(
      detailsColRef.current.children,
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.08, duration: 0.5 },
      '-=0.4'
    );
  }, [activeLayer]);

  return (
    <section
      ref={sectionRef}
      id="deconstructed"
      className="relative py-28 px-6 lg:px-16 bg-[#050505] border-t border-white/5 overflow-hidden"
    >
      {/* Radial Atmospheric Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4af37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono-tech text-xs tracking-[0.3em] text-[#d4af37]">
                02 // THE ARCHITECTURE
              </span>
              <div className="w-8 h-[1px] bg-[#d4af37]/40" />
              <span className="font-mono-tech text-[10px] tracking-[0.2em] text-[#6b7280]">
                EXPLODED TAILORING
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-[0.14em] text-white uppercase">
              Deconstructed <span className="text-gold-gradient">By Design</span>
            </h2>
          </div>

          <p className="font-cormorant italic text-lg sm:text-xl text-[#9ca3af] max-w-md mt-4 md:mt-0 font-light">
            "We dissect every seam so you will never have to wonder how perfection was achieved."
          </p>
        </div>

        {/* Interactive Layer Selection Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {layers.map((layer, index) => {
            const isSelected = activeLayer === index;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(index)}
                className={`text-left p-4 sm:p-5 rounded-xl transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? 'glass-panel border-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.2)]'
                    : 'bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d4af37] to-transparent" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono-tech text-xs tracking-[0.2em] ${isSelected ? 'text-[#d4af37]' : 'text-[#6b7280]'}`}>
                    {layer.number} // LAYER
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-[#9ca3af] font-mono-tech">
                    {layer.badge}
                  </span>
                </div>
                <h4 className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wide">
                  {layer.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Exploded View Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center glass-panel p-6 sm:p-10 rounded-2xl border border-white/10">
          {/* Left: Interactive Highlighted Part Image */}
          <div
            ref={imageStageRef}
            className="lg:col-span-6 relative rounded-xl overflow-hidden bg-black/80 border border-white/10 group aspect-[4/5] flex items-center justify-center"
          >
            <img
              ref={garmentImgRef}
              src={current.image}
              alt={current.title}
              className="w-full h-full object-contain filter contrast-125 brightness-95 select-none will-change-transform"
            />

            {/* Glowing Technical Markers */}
            <div className="absolute top-6 left-6 glass-panel px-3.5 py-1.5 rounded-full border border-[#d4af37]/40 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-mono-tech text-[10px] tracking-[0.25em] text-[#d4af37]">
                LAYER {current.number} // ACTIVE INSPECTION
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 glass-panel-subtle p-3 rounded-lg flex items-center justify-between">
              <span className="font-mono-tech text-[10px] tracking-[0.2em] text-[#9ca3af]">
                CLICK TABS ABOVE TO DECONSTRUCT
              </span>
              <span className="font-mono-tech text-[10px] text-[#d4af37]">
                0{activeLayer + 1} / 04
              </span>
            </div>
          </div>

          {/* Right: Technical Specs & Karigar Story */}
          <div ref={detailsColRef} className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-block px-3 py-1 rounded bg-[#d4af37]/10 text-[#d4af37] font-mono-tech text-[10px] tracking-[0.25em] mb-4 w-fit border border-[#d4af37]/20">
              {current.badge}
            </div>

            <h3 className="font-cinzel text-2xl sm:text-4xl font-bold text-white tracking-[0.1em] mb-2">
              {current.title}
            </h3>

            <p className="font-cormorant italic text-lg sm:text-xl text-[#d1d5db] font-light mb-6">
              "{current.subtitle}"
            </p>

            {/* Detailed Bullet Points */}
            <div className="space-y-3.5 mb-8">
              {current.details.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                  <p className="text-sm text-[#9ca3af] font-light leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Micro Specifications Table */}
            <div className="glass-panel p-4 rounded-xl border border-white/5 grid grid-cols-3 gap-4">
              {Object.entries(current.specs).map(([key, val]) => (
                <div key={key}>
                  <span className="font-mono-tech text-[9px] tracking-[0.2em] text-[#6b7280] block mb-0.5 uppercase">
                    {key}
                  </span>
                  <span className="font-sans text-xs font-semibold text-white block">
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
