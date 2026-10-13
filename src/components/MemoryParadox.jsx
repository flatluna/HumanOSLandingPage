import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const OFFLOADING_STEPS = [
  'Question → AI generates answer',
  'Passive skim of the response',
  'Brain forgets in 48 hours',
  'Growing dependency on lookup',
];

const ENGRAM_STEPS = [
  'Prediction error triggers curiosity',
  'Conceptual synthesis with analogies',
  'Unassisted recall under pressure',
  'Real-world application → mastery',
];

export default function MemoryParadox() {
  return (
    <section id="framework" className="bg-section-gradient border-t border-[#1e2330] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12.5px] font-mono-code uppercase tracking-wider text-[#06b6d4]">The Memory Paradox</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#f4f6fb] sm:text-4xl">
            Instant answers are making us forget faster.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-[#9aa3b8]">
            The more we outsource thinking to AI, the weaker our active retention becomes. Engram
            reverses cognitive offloading with graph-based anti-offloading design.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#1e2330] bg-[#0b0e16] p-8"
          >
            <div className="mb-6 flex items-center gap-2.5">
              <XCircle className="h-5 w-5 text-[#f87171]" />
              <h3 className="text-lg font-semibold text-[#f4f6fb]">Traditional AI Learning</h3>
            </div>
            <p className="mb-6 text-[13px] uppercase tracking-wider text-[#6b7386]">Cognitive Offloading</p>
            <ol className="space-y-4">
              {OFFLOADING_STEPS.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1e2330] text-[11px] font-semibold text-[#9aa3b8]">
                    {i + 1}
                  </span>
                  <span className="text-[14.5px] text-[#9aa3b8]">{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border border-[#6366f1]/40 bg-gradient-to-b from-[#12152280] to-[#0b0e16] p-8 shadow-glow-indigo"
          >
            <div className="mb-6 flex items-center gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-[#10b981]" />
              <h3 className="text-lg font-semibold text-[#f4f6fb]">Engram Graph Learning</h3>
            </div>
            <p className="mb-6 text-[13px] uppercase tracking-wider text-[#06b6d4]">Anti-Offloading</p>
            <ol className="space-y-4">
              {ENGRAM_STEPS.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6366f1] to-[#06b6d4] text-[11px] font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="text-[14.5px] text-[#f4f6fb]">{step}</span>
                  {i < ENGRAM_STEPS.length - 1 && (
                    <ArrowRight className="ml-auto mt-1 h-3.5 w-3.5 shrink-0 text-[#2a3040]" />
                  )}
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
