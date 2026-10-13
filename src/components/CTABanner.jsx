import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarClock } from 'lucide-react';

export default function CTABanner({ onOpenBriefing }) {
  return (
    <section className="border-t border-[#1e2330] bg-[#05060a] py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-[#1e2330] bg-hero-glow bg-refined-grid px-8 py-16 text-center lg:px-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-[#f4f6fb] sm:text-4xl">
            Stop skimming. Start mastering.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-[#9aa3b8]">
            Experience the future of human intelligence and enterprise learning.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={onOpenBriefing}
              className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4] px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-glow-indigo transition-transform hover:scale-[1.02]"
            >
              Launch HUMAN·OS
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#enterprise"
              className="flex items-center justify-center gap-2 rounded-full border border-[#1e2330] bg-[#12151f]/60 px-7 py-3.5 text-[14.5px] font-semibold text-[#f4f6fb] transition-colors hover:border-[#2a3040]"
            >
              <CalendarClock className="h-4 w-4 text-[#06b6d4]" />
              Schedule Enterprise Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
