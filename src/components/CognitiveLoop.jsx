import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, GraduationCap, RotateCcw, Hammer, ClipboardCheck } from 'lucide-react';

const STEPS = [
  {
    icon: Lightbulb,
    title: 'Hypothesis',
    desc: 'Make unassisted predictions to spark schema activation before any answer is revealed.',
  },
  {
    icon: GraduationCap,
    title: 'Teaching',
    desc: 'Deep conceptual breakdowns with analogies, diagrams, and AI multi-clip videos.',
  },
  {
    icon: RotateCcw,
    title: 'Recall',
    desc: 'Active memory retrieval performed entirely without looking back at the text.',
  },
  {
    icon: Hammer,
    title: 'Production',
    desc: 'Hands-on real-world application where you design and build the solution yourself.',
  },
  {
    icon: ClipboardCheck,
    title: 'Assessment',
    desc: 'AI-evaluated multi-question rounds scored against objective rubrics.',
  },
];

export default function CognitiveLoop() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="loop" className="border-t border-[#1e2330] bg-[#05060a] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12.5px] font-mono-code uppercase tracking-wider text-[#06b6d4]">How Each Concept Is Learned</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#f4f6fb] sm:text-4xl">
            The Engram Cognitive Loop
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#9aa3b8]">
            Every concept in the Knowledge Graph — like Algebra, Equations, or Coefficients — is
            mastered node-by-node through this exact five-step loop. No shortcuts.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const active = hovered === i;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative rounded-2xl border p-6 transition-all duration-300 ${
                  active
                    ? 'border-[#6366f1]/50 bg-[#12151f] shadow-glow-indigo -translate-y-1'
                    : 'border-[#1e2330] bg-[#0b0e16]'
                }`}
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#6366f1] to-[#06b6d4] text-[11px] font-bold text-white">
                  {i + 1}
                </span>
                <Icon className={`mb-3 h-6 w-6 ${active ? 'text-[#06b6d4]' : 'text-[#9aa3b8]'}`} />
                <h3 className="mb-2 text-[15px] font-semibold text-[#f4f6fb]">{step.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-[#9aa3b8]">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
