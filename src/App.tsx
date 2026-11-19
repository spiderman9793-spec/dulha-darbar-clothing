import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ChapterSilhouette } from './components/ChapterSilhouette';
import { ChapterDeconstructed } from './components/ChapterDeconstructed';
import { ChapterStudio360 } from './components/ChapterStudio360';
import { ChapterLookbook } from './components/ChapterLookbook';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { CustomCursor } from './components/CustomCursor';

export const App: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-[#e2e8f0] relative cursor-default">
      {/* 120fps GSAP Magnetic Cursor Follower */}
      <CustomCursor />

      {/* Top Fixed Header */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Scrollytelling Flagship Journey */}
      <main>
        {/* Hero Section with 8-Second Looping Video Background & GSAP Parallax */}
        <HeroSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Chapter 01: The Silhouette with GSAP Entrance & Floating Spotlight */}
        <ChapterSilhouette onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Chapter 02: Deconstructed Bespoke Tailoring with Exploded GSAP Transitions */}
        <ChapterDeconstructed />

        {/* Chapter 03: 360° Studio Showcase & Multi-Angle Turntable with GSAP Easing */}
        <ChapterStudio360 />

        {/* Chapter 04: The Royal Atelier Lookbook & Runway Motion with 3D Tilt */}
        <ChapterLookbook onOpenConsultation={() => setIsConsultationOpen(true)} />
      </main>

      {/* Monolithic Grand Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Slide-out Private Consultation & WhatsApp Concierge Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
};

export default App;
