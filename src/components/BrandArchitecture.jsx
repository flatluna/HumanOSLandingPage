import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Network, Waypoints, Bot, Compass } from 'lucide-react';

const PILLARS = [
  {
    icon: Brain,
    name: 'Memory Paradox',
    desc: 'The scientific insight that anchors everything: instant AI answers erode active retention. Naming the paradox is the first step to reversing it.',
  },
  {
    icon: Network,
    name: 'Engram Learning Engine',
    desc: 'An "engram" is the neuroscience term for a physical memory trace. The engine is built to carve durable engrams, not fleeting impressions.',
  },
  {
    icon: Waypoints,
    name: 'Human Capability Graph',
    desc: 'A living, non-linear map of concepts, people, and skills — visual and systematic, designed for educators and enterprises to see mastery, not just completion.',
  },
  {
    icon: Bot,
    name: 'AI Learning Agents',
    desc: 'Personalized, adaptive tutors that coach in real time — always in service of your cognition, never a replacement for it.',
  },
];

export default function BrandArchitecture() {
  return (
    <section className="border-t border-[#1e2330] bg-[#05060a] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12.5px] font-mono-code uppercase tracking-wider text-[#06b6d4]">Why HUMAN·OS</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#f4f6fb] sm:text-4xl">
            An operating system for human capability.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-[#9aa3b8]">
            Just as an operating system is essential infrastructure for a computer, HUMAN·OS is
            essential infrastructure for human development — a name that signals innovation, technical
            depth, and a product built to be foundational, not optional.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-[#1e2330] bg-[#0b0e16] p-7"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#6366f1] to-[#06b6d4]">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="mb-2 text-[15.5px] font-semibold text-[#f4f6fb]">{p.name}</h3>
                <p className="text-[13.5px] leading-relaxed text-[#9aa3b8]">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl border border-[#6366f1]/30 bg-gradient-to-b from-[#12152280] to-[#0b0e16] p-8 text-center lg:p-10"
        >
          <span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#6366f1]">
            <Compass className="h-5 w-5 text-white" />
          </span>
          <h3 className="text-[17px] font-semibold text-[#f4f6fb]">The Human Design Principle</h3>
          <p className="mx-auto mt-3 max-w-2xl text-[14.5px] leading-relaxed text-[#9aa3b8]">
            Every course, every agent, every graph is designed around human needs and capabilities
            first — with structured accompaniment and reflection built into the loop. AI accelerates
            the system. Humans remain its center.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
