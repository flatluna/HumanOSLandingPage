import React from 'react';
import { motion } from 'framer-motion';
import { Mic, GitBranch, FileStack, Building2 } from 'lucide-react';

const FEATURES = [
  {
    icon: Mic,
    title: 'Real-Time Voice AI',
    desc: 'Sub-second WebRTC latency. Converse directly with an AI coach via low-latency natural speech.',
    accent: 'from-[#6366f1] to-[#818cf8]',
  },
  {
    icon: GitBranch,
    title: 'Knowledge Graph & Factuals',
    desc: 'Zero hallucinations. Every tutoring session is strictly anchored to mathematical, scientific, or legal Knowledge Facts.',
    accent: 'from-[#06b6d4] to-[#22d3ee]',
  },
  {
    icon: FileStack,
    title: 'Capability Studio',
    desc: 'Ingest 300-page books, laws, or technical manuals to generate complete learning graphs, illustrations, and sequential Veo videos in minutes.',
    accent: 'from-[#8b5cf6] to-[#a78bfa]',
  },
  {
    icon: Building2,
    title: 'Enterprise Skills & Roadmaps',
    desc: 'Map company job descriptions to employee skill gaps and auto-match courses to promotion roadmaps.',
    accent: 'from-[#10b981] to-[#34d399]',
  },
];

export default function TechEcosystem() {
  return (
    <section id="enterprise" className="border-t border-[#1e2330] bg-section-gradient py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12.5px] font-mono-code uppercase tracking-wider text-[#06b6d4]">Multi-Agent &amp; Voice Ecosystem</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#f4f6fb] sm:text-4xl">
            The technology behind the transformation.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-[#1e2330] bg-[#0b0e16] p-8 transition-colors hover:border-[#2a3040]"
              >
                <span className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent}`}>
                  <Icon className="h-6 w-6 text-white" />
                </span>
                <h3 className="mb-2.5 text-[17px] font-semibold text-[#f4f6fb]">{f.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-[#9aa3b8]">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
