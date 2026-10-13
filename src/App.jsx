import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TaglineStatement from './components/TaglineStatement';
import BrandArchitecture from './components/BrandArchitecture';
import MemoryParadox from './components/MemoryParadox';
import CognitiveLoop from './components/CognitiveLoop';
import PathComposer from './components/PathComposer';
import TechEcosystem from './components/TechEcosystem';
import LiveDemo from './components/LiveDemo';
import SocialProof from './components/SocialProof';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import BriefingModal from './components/BriefingModal';

export default function App() {
  const [briefingModalOpen, setBriefingModalOpen] = useState(false);
  const openBriefing = () => setBriefingModalOpen(true);

  return (
    <div className="flex min-h-screen flex-col bg-[#05060a] text-[#f4f6fb] selection:bg-[#6366f1] selection:text-white">
      <Navbar onOpenBriefing={openBriefing} />

      <main className="flex-1">
        <Hero onOpenBriefing={openBriefing} />
        <CognitiveLoop />
        <PathComposer />
        <TaglineStatement />
        <BrandArchitecture />
        <MemoryParadox />
        <TechEcosystem />
        <LiveDemo />
        <SocialProof />
        <CTABanner onOpenBriefing={openBriefing} />
      </main>

      <Footer />

      <BriefingModal isOpen={briefingModalOpen} onClose={() => setBriefingModalOpen(false)} />
    </div>
  );
}

