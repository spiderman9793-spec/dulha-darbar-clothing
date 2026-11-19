import React from 'react';
import { ArrowUp, Sparkles, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030303] text-[#e2e8f0] pt-24 pb-12 px-6 lg:px-16 border-t border-[#d4af37]/20 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#d4af37]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Atelier Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-16 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#d4af37]/50 flex items-center justify-center bg-black/60">
              <img
                src="/assets/brand-logo.png"
                alt="Dulha Darbar"
                className="w-9 h-9 object-contain filter invert contrast-125"
              />
            </div>
            <div>
              <span className="font-cinzel text-lg font-bold tracking-[0.2em] text-white block">
                DULHA DARBAR & TAILOR
              </span>
              <span className="font-mono-tech text-[10px] tracking-[0.3em] text-[#9ca3af] block">
                ROYAL COUTURE & BESPOKE MENSWEAR
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8022] text-black font-cinzel font-bold text-xs tracking-[0.18em] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 transition-all"
            >
              BOOK PRIVATE ATELIER APPOINTMENT
            </button>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full glass-panel border border-white/10 hover:border-[#d4af37] flex items-center justify-center text-white/70 hover:text-[#d4af37] transition-all"
              aria-label="Scroll To Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-white/10">
          <div>
            <h5 className="font-mono-tech text-xs tracking-[0.25em] text-[#d4af37] uppercase mb-4">
              MAISON //
            </h5>
            <ul className="space-y-2.5 font-sans text-xs text-[#9ca3af]">
              <li><a href="#silhouette" className="hover:text-white transition-colors">Courtly Heritage</a></li>
              <li><a href="#deconstructed" className="hover:text-white transition-colors">Master Karigars</a></li>
              <li><a href="#studio-360" className="hover:text-white transition-colors">360° Studio Archive</a></li>
              <li><a href="#lookbook" className="hover:text-white transition-colors">Royal Lookbook</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono-tech text-xs tracking-[0.25em] text-[#d4af37] uppercase mb-4">
              COLLECTIONS //
            </h5>
            <ul className="space-y-2.5 font-sans text-xs text-[#9ca3af]">
              <li><span className="text-white font-medium">The Obsidian Bandhgala</span></li>
              <li><span className="hover:text-white transition-colors">Zardozi Heritage Sherwani</span></li>
              <li><span className="hover:text-white transition-colors">Bespoke Jodhpuri Suit</span></li>
              <li><span className="hover:text-white transition-colors">Imperial Bridal Party Couture</span></li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono-tech text-xs tracking-[0.25em] text-[#d4af37] uppercase mb-4">
              SERVICES //
            </h5>
            <ul className="space-y-2.5 font-sans text-xs text-[#9ca3af]">
              <li><span className="hover:text-white transition-colors">In-Atelier Master Fitting</span></li>
              <li><span className="hover:text-white transition-colors">Traveling Tailor Home Visit</span></li>
              <li><span className="hover:text-white transition-colors">Virtual Video Consultation</span></li>
              <li><span className="hover:text-white transition-colors">Custom Hand Embroidery Drafting</span></li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono-tech text-xs tracking-[0.25em] text-[#d4af37] uppercase mb-4">
              CONCIERGE //
            </h5>
            <div className="space-y-2 font-mono-tech text-xs text-[#9ca3af]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>Flagship Atelier & Master Studio</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href="https://wa.me/?text=Hello%20Dulha%20Darbar" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp Concierge Available 24/7
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>bespoke@dulhadarbar.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Monolithic Giant Brand Title (Signature REGENT Style) */}
        <div className="py-12 sm:py-16 text-center select-none overflow-hidden">
          <h2 className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-[0.2em] text-white/10 hover:text-white/20 transition-colors duration-700 uppercase whitespace-nowrap">
            DULHA DARBAR
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-tech text-[#6b7280] tracking-widest gap-4">
          <p>© 2026 DULHA DARBAR & TAILOR. ALL RIGHTS RESERVED.</p>
          <p className="text-[#d4af37]/70">TAILORED WITH PRIDE IN INDIA</p>
        </div>
      </div>
    </footer>
  );
};
