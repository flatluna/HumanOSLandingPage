import React, { useState } from 'react';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/LogoHumanOS.png';

const NAV_LINKS = [
  { label: 'Memory Paradox', href: '#framework' },
  { label: 'Capability Graph', href: '#graph' },
  { label: 'Learning Engine', href: '#studio' },
  { label: 'Enterprise', href: '#enterprise' },
];

export default function Navbar({ onOpenBriefing }) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('EN');

  return (
    <header className="sticky top-0 z-50 border-b border-[#1e2330] bg-[#05060a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1">
            <img src={logo} alt="HumanOS logo" className="h-full w-full object-contain" />
          </span>
          <span className="text-[17px] font-bold tracking-tight text-[#f4f6fb]">
            HUMAN<span className="text-gradient-brand">·OS</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13.5px] font-medium text-[#9aa3b8] transition-colors hover:text-[#f4f6fb]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            onClick={() => setLang(lang === 'EN' ? 'ES' : 'EN')}
            className="flex items-center gap-1.5 text-[13px] font-medium text-[#9aa3b8] transition-colors hover:text-[#f4f6fb]"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang}
          </button>
          <a href="#signin" className="text-[13.5px] font-medium text-[#9aa3b8] transition-colors hover:text-[#f4f6fb]">
            Sign In
          </a>
          <button
            onClick={onOpenBriefing}
            className="group flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4] px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-glow-indigo transition-transform hover:scale-[1.03]"
          >
            Launch App
            <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        <button className="lg:hidden text-[#f4f6fb]" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#1e2330] lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="text-sm font-medium text-[#9aa3b8]">
                  {link.label}
                </a>
              ))}
              <button
                onClick={onOpenBriefing}
                className="mt-2 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4] px-5 py-3 text-sm font-semibold text-white"
              >
                Launch App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
