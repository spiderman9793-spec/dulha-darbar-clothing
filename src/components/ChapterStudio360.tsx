import React, { useState, useRef, MouseEvent, useEffect } from 'react';
import { RotateCw, ZoomIn, Eye, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

export const ChapterStudio360: React.FC = () => {
  const [activeAngleIndex, setActiveAngleIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLImageElement>(null);

  const angles = [
    {
      id: 'front',
      label: 'FRONTAL VIEW',
      sub: 'Zardozi Symmetry & Pearl Placket',
      file: '/assets/angle-1-front.jpg',
      code: 'ANGLE // 001',
    },
    {
      id: 'perspective',
      label: '3/4 PERSPECTIVE',
      sub: 'Dimensional Tailoring & Key Light',
      file: '/assets/angle-5-perspective.jpg',
      code: 'ANGLE // 002',
    },
    {
      id: 'left',
      label: 'LEFT PROFILE',
      sub: 'Breast Pocket Chain & Brooch Flow',
      file: '/assets/angle-4-left.jpg',
      code: 'ANGLE // 003',
    },
    {
      id: 'right',
      label: 'RIGHT PROFILE',
      sub: 'Armhole Cut & Cuff Button Alignment',
      file: '/assets/angle-3-right.jpg',
      code: 'ANGLE // 004',
    },
    {
      id: 'back',
      label: 'SPINAL CONTOUR',
      sub: 'Seamless Velvet Arch & Double Vents',
      file: '/assets/angle-2-back.jpg',
      code: 'ANGLE // 005',
    },
    {
      id: 'topdown',
      label: 'TOP-DOWN PITCH',
      sub: 'Mandarin Collar Radius & Shoulders',
      file: '/assets/angle-6-topdown.jpg',
      code: 'ANGLE // 006',
    },
  ];

  const current = angles[activeAngleIndex];

  // GSAP Turntable Camera Switch Transition
  useEffect(() => {
    if (!mainImageRef.current) return;
    gsap.fromTo(
      mainImageRef.current,
      { opacity: 0.3, scale: 0.94, filter: 'brightness(1.4)' },
      { opacity: 1, scale: 1, filter: 'brightness(1)', duration: 0.5, ease: 'power2.out' }
    );
  }, [activeAngleIndex]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  const handlePrev = () => {
    setActiveAngleIndex((prev) => (prev === 0 ? angles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveAngleIndex((prev) => (prev === angles.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="studio-360" className="relative py-28 px-6 lg:px-16 bg-[#08080a] border-t border-white/5 overflow-hidden">
      {/* Background Spotlight Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono-tech text-xs tracking-[0.3em] text-[#d4af37]">
                03 // DIGITAL SHOWROOM
              </span>
              <div className="w-8 h-[1px] bg-[#d4af37]/40" />
              <span className="font-mono-tech text-[10px] tracking-[0.2em] text-[#6b7280]">
                MULTI-ANGLE TURNTABLE
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-[0.14em] text-white uppercase">
              360° Studio <span className="text-gold-gradient">Inspection</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <span className="font-mono-tech text-xs tracking-[0.2em] text-[#9ca3af] flex items-center gap-2">
              <ZoomIn className="w-3.5 h-3.5 text-[#d4af37]" />
              HOVER TO MAGNIFY EMBROIDERY
            </span>
          </div>
        </div>

        {/* Main Turntable Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Inspection Viewport with Zoom Loupe */}
          <div className="lg:col-span-8 relative">
            <div
              ref={imageContainerRef}
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
              onMouseMove={handleMouseMove}
              className="relative w-full aspect-[4/5] sm:aspect-[16/11] max-h-[640px] rounded-2xl overflow-hidden glass-panel border border-[#d4af37]/30 bg-black flex items-center justify-center cursor-crosshair group shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
            >
              {/* Garment Image */}
              <img
                ref={mainImageRef}
                src={current.file}
                alt={current.label}
                className="w-full h-full object-contain filter contrast-125 brightness-95 select-none will-change-transform"
                style={{
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  transform: isZooming ? 'scale(2.2)' : 'scale(1)',
                  transition: isZooming ? 'none' : 'transform 0.4s ease-out',
                }}
              />

              {/* Angle HUD Watermark */}
              <div className="absolute top-6 left-6 glass-panel px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2 pointer-events-none">
                <RotateCw className="w-3.5 h-3.5 text-[#d4af37] animate-spin-slow" />
                <span className="font-mono-tech text-[10px] tracking-[0.25em] text-white">
                  {current.code}
                </span>
              </div>

              {/* Zoom Notification Badge */}
              {isZooming && (
                <div className="absolute top-6 right-6 glass-panel px-3 py-1 rounded-full border border-[#d4af37]/50 text-[#d4af37] font-mono-tech text-[10px] tracking-[0.2em] pointer-events-none flex items-center gap-1.5">
                  <ZoomIn className="w-3 h-3" />
                  <span>2.2X MACRO LENS ACTIVE</span>
                </div>
              )}

              {/* Prev / Next Chevrons on Stage */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-panel border border-white/10 hover:border-[#d4af37] flex items-center justify-center text-white hover:text-[#d4af37] transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Previous Angle"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-panel border border-white/10 hover:border-[#d4af37] flex items-center justify-center text-white hover:text-[#d4af37] transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Next Angle"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom Angle Readout Bar */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel-subtle p-3.5 rounded-xl flex items-center justify-between pointer-events-none">
                <div>
                  <h4 className="font-cinzel text-sm sm:text-base font-bold text-white tracking-[0.15em]">
                    {current.label}
                  </h4>
                  <p className="font-cormorant italic text-xs text-[#d1d5db]">
                    {current.sub}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono-tech text-xs text-[#d4af37]">
                    0{activeAngleIndex + 1}
                  </span>
                  <span className="font-mono-tech text-xs text-[#6b7280]">/ 06</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Angle Selector Thumbnails & Notes */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="font-mono-tech text-xs tracking-[0.25em] text-[#9ca3af] uppercase mb-1">
              SELECT PERSPECTIVE //
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">
              {angles.map((angle, index) => {
                const isActive = activeAngleIndex === index;
                return (
                  <button
                    key={angle.id}
                    onClick={() => setActiveAngleIndex(index)}
                    className={`flex items-center gap-3 p-2.5 rounded-xl text-left transition-all duration-300 border ${
                      isActive
                        ? 'glass-panel border-[#d4af37] bg-white/[0.04] shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                        : 'border-white/5 bg-black/40 hover:border-white/20 hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="w-12 h-14 rounded-lg overflow-hidden bg-black/80 shrink-0 border border-white/10">
                      <img
                        src={angle.file}
                        alt={angle.label}
                        className="w-full h-full object-cover filter contrast-125"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`font-mono-tech text-[9px] tracking-[0.2em] ${isActive ? 'text-[#d4af37]' : 'text-[#6b7280]'}`}>
                          {angle.code}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                        )}
                      </div>
                      <h5 className="font-cinzel text-xs font-bold text-white truncate tracking-wider">
                        {angle.label}
                      </h5>
                      <p className="text-[10px] text-[#9ca3af] truncate font-light">
                        {angle.sub}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
