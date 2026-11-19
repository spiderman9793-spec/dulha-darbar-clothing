import React, { useState, FormEvent } from 'react';
import { X, Calendar, User, Phone, MapPin, Sparkles, Send, CheckCircle } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    eventDate: '',
    outfitType: 'Imperial Velvet Bandhgala',
    consultationType: 'In-Atelier Fitting',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp pre-filled message
    const message = encodeURIComponent(
      `Hello Maison Dulha Darbar,\n\nI would like to request a Bespoke Appointment:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• City: ${formData.city}\n` +
      `• Event Date: ${formData.eventDate || 'To be decided'}\n` +
      `• Desired Ensemble: ${formData.outfitType}\n` +
      `• Fitting Mode: ${formData.consultationType}\n` +
      (formData.notes ? `• Special Notes: ${formData.notes}\n` : '') +
      `\nPlease let me know your master tailor's available schedule.`
    );

    // Open WhatsApp in new tab after brief celebration
    setTimeout(() => {
      window.open(`https://wa.me/?text=${message}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl glass-panel border border-[#d4af37]/40 p-6 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.95)] max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-panel border border-white/10 text-white/70 hover:text-white hover:border-[#d4af37] transition-all duration-300"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span className="font-mono-tech text-[10px] sm:text-xs tracking-[0.25em] text-[#d4af37] uppercase">
                PRIVATE ATELIER RESERVATION
              </span>
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide mb-2">
              Bespoke Fitting & Concierge
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#9ca3af] font-light mb-8">
              Experience the master tailor consultation. Schedule a private fitting at our atelier or request our traveling tailor service to your residence.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono-tech text-[10px] tracking-[0.2em] text-[#cbd5e1] block mb-1.5 uppercase">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kunal Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono-tech text-[10px] tracking-[0.2em] text-[#cbd5e1] block mb-1.5 uppercase">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono-tech text-[10px] tracking-[0.2em] text-[#cbd5e1] block mb-1.5 uppercase">
                    City / Location *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai, Delhi, Jaipur"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono-tech text-[10px] tracking-[0.2em] text-[#cbd5e1] block mb-1.5 uppercase">
                    Wedding / Ceremony Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Ensemble Selection */}
              <div>
                <label className="font-mono-tech text-[10px] tracking-[0.2em] text-[#cbd5e1] block mb-1.5 uppercase">
                  Desired Ensemble
                </label>
                <select
                  value={formData.outfitType}
                  onChange={(e) => setFormData({ ...formData, outfitType: e.target.value })}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                >
                  <option value="Imperial Velvet Bandhgala">Imperial Velvet Bandhgala (Featured in Obsidian)</option>
                  <option value="Royal Acanthus Sherwani">Royal Acanthus Sherwani & Stole</option>
                  <option value="Bespoke Jodhpuri Tuxedo">Bespoke Jodhpuri Tuxedo (Indo-Western)</option>
                  <option value="Heritage Silk Kurta Ensemble">Heritage Silk Kurta & Bandi Jacket</option>
                  <option value="Full Groom Trouseau (Multi-Event)">Full Groom Trouseau (Multi-Event Package)</option>
                </select>
              </div>

              {/* Consultation Format */}
              <div>
                <label className="font-mono-tech text-[10px] tracking-[0.2em] text-[#cbd5e1] block mb-1.5 uppercase">
                  Preferred Consultation Mode
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    'In-Atelier Fitting',
                    'Home Visit Tailor',
                    'Virtual Concierge',
                  ].map((mode) => (
                    <button
                      type="button"
                      key={mode}
                      onClick={() => setFormData({ ...formData, consultationType: mode })}
                      className={`py-2 px-3 rounded-lg text-xs font-mono-tech text-center transition-all ${
                        formData.consultationType === mode
                          ? 'glass-panel border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10'
                          : 'border border-white/10 bg-black/40 text-[#9ca3af] hover:border-white/20'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="font-mono-tech text-[10px] tracking-[0.2em] text-[#cbd5e1] block mb-1.5 uppercase">
                  Custom Requirements / Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your theme, color palette, or specific tailoring preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5c07b] to-[#aa8022] text-black font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(212,175,55,0.7)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>CONFIRM & OPEN WHATSAPP CONCIERGE</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mb-6 text-[#d4af37] animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="font-cinzel text-3xl font-bold text-white tracking-wide mb-2">
              Appointment Request Sent
            </h3>

            <p className="font-cormorant italic text-xl text-[#cbd5e1] mb-6">
              "Opening WhatsApp with your bespoke request details..."
            </p>

            <p className="text-xs text-[#9ca3af] max-w-md mb-8">
              Our lead master tailor will coordinate your measurements, fabric swatches, and private trial time.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 rounded-full glass-panel border border-[#d4af37]/50 text-white font-mono-tech text-xs tracking-[0.2em] hover:bg-[#d4af37] hover:text-black transition-all"
            >
              RETURN TO ATELIER
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
