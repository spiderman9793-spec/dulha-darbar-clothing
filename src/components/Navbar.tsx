import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '01 // SILHOUETTE', href: '#silhouette' },
    { label: '02 // ANATOMY', href: '#deconstructed' },
    { label: '03 // 360° ATELIER', href: '#studio-360' },
    { label: '04 // LOOKBOOK', href: '#lookbook' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-panel py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-b border-[#d4af37]/20'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full border border-[#d4af37]/40 flex items-center justify-center bg-black/60 overflow-hidden group-hover:border-[#d4af37] transition-colors">
              <img
                src="/assets/brand-logo.png"
                alt="Dulha Darbar"
                className="w-8 h-8 object-contain filter invert contrast-125 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-sm sm:text-base tracking-[0.25em] font-bold text-white group-hover:text-[#d4af37] transition-colors">
                DULHA DARBAR
              </span>
              <span className="font-mono-tech text-[9px] tracking-[0.3em] text-[#a3a3a3]">
                BESPOKE & TAILOR
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono-tech text-[11px] tracking-[0.2em] text-[#9ca3af] hover:text-[#d4af37] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/?text=Hello%20Dulha%20Darbar,%20I%20would%20like%20to%20inquire%20about%20the%20royal%20bespoke%20Bandhgala%20suit."
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-tech text-[11px] tracking-[0.15em] text-[#d4af37] hover:text-white px-3 py-1.5 rounded-full border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300 flex items-center gap-1.5 bg-[#d4af37]/5"
            >
              <span>WHATSAPP CONCIERGE</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <button
              onClick={onOpenConsultation}
              className="group relative px-5 py-2 rounded-full overflow-hidden border border-[#d4af37] bg-gradient-to-r from-[#d4af37] to-[#aa8022] text-black font-semibold text-xs tracking-[0.15em] font-cinzel shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-black" />
                <span>BOOK APPOINTMENT</span>
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-center px-8 md:hidden">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-cinzel text-xl tracking-[0.2em] text-[#e2e8f0] hover:text-[#d4af37] py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="mt-6 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8022] text-black font-cinzel font-bold text-sm tracking-[0.2em] flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK BESPOKE APPOINTMENT</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
