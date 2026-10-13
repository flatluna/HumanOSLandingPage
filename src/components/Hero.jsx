import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';
import logo from '../assets/LogoHumanOS.png';

const NODES = [
  { id: 'statements', label: 'Financial Statements', x: 50, y: 12, tier: 0 },
  { id: 'income', label: 'Income Statement', x: 18, y: 40, tier: 1 },
  { id: 'balance', label: 'Balance Sheet', x: 50, y: 52, tier: 1 },
  { id: 'cashflow', label: 'Cash Flow', x: 82, y: 40, tier: 1 },
  { id: 'revenue', label: 'Revenue', x: 12, y: 78, tier: 2 },
  { id: 'assets', label: 'Assets', x: 50, y: 86, tier: 2 },
  { id: 'expenses', label: 'Expenses', x: 88, y: 78, tier: 2 },
];

const EDGES = [
  ['statements', 'income'],
  ['statements', 'balance'],
  ['statements', 'cashflow'],
  ['income', 'revenue'],
  ['balance', 'assets'],
  ['cashflow', 'expenses'],
];

const LEGEND = [
  { label: 'Income Statement', desc: 'Shows profit: revenue minus expenses over time' },
  { label: 'Balance Sheet', desc: 'A snapshot of assets, liabilities, and equity' },
  { label: 'Cash Flow', desc: 'Tracks real cash moving in and out of the business' },
];

export default function Hero({ onOpenBriefing }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % NODES.length), 1800);
    return () => clearInterval(t);
  }, []);

  const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

  return (
    <section className="relative overflow-hidden bg-hero-glow bg-refined-grid pt-20 pb-24 lg:pt-28 lg:pb-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex rounded-2xl bg-white p-4 shadow-glow-indigo"
          >
            <img src={logo} alt="HumanOS logo" className="h-20 w-auto object-contain sm:h-24" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1e2330] bg-[#12151f]/80 px-4 py-1.5 text-[12.5px] font-medium text-[#9aa3b8]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#06b6d4]" />
            HUMAN·OS · The Operating System for Human Capability
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-[#f4f6fb] sm:text-6xl"
          >
            Where Knowledge Becomes{' '}
            <span className="text-gradient-brand">Permanent Memory.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-[#9aa3b8]"
          >
            AI is accelerating. Human capability must accelerate faster. Build durable, unshakeable
            mental mastery through graph-based active recall, real-time voice coaching, and
            AI-generated courses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <button
              onClick={onOpenBriefing}
              className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4] px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-glow-indigo transition-transform hover:scale-[1.02]"
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#studio"
              className="flex items-center justify-center gap-2 rounded-full border border-[#1e2330] bg-[#12151f]/60 px-7 py-3.5 text-[14.5px] font-semibold text-[#f4f6fb] transition-colors hover:border-[#2a3040]"
            >
              <Compass className="h-4 w-4 text-[#06b6d4]" />
              Explore Capability Studio
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="glass-panel relative aspect-square w-full max-w-lg mx-auto rounded-3xl p-6 shadow-glass">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              {EDGES.map(([a, b], i) => {
                const n1 = byId[a];
                const n2 = byId[b];
                return (
                  <line
                    key={i}
                    x1={n1.x}
                    y1={n1.y}
                    x2={n2.x}
                    y2={n2.y}
                    stroke="url(#edgeGrad)"
                    strokeWidth="0.4"
                    opacity="0.5"
                  />
                );
              })}
              <defs>
                <linearGradient id="edgeGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              {NODES.map((n, i) => {
                const isActive = active === i;
                const baseRadius = n.tier === 0 ? 5.2 : n.tier === 1 ? 3.6 : 4.2;
                const baseFill = n.tier === 0 ? '#06b6d4' : n.tier === 1 ? '#6366f1' : '#8b5cf6';
                const engramNumber = n.tier === 2 ? NODES.filter((m) => m.tier === 2).findIndex((m) => m.id === n.id) + 1 : null;
                return (
                  <g key={n.id}>
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={isActive ? baseRadius + 1 : baseRadius}
                      fill={isActive ? '#06b6d4' : baseFill}
                      className={isActive ? 'animate-node-pulse' : ''}
                      opacity={isActive ? 1 : n.tier === 2 ? 0.9 : 0.85}
                    />
                    {engramNumber && (
                      <text
                        x={n.x}
                        y={n.y + 1.1}
                        fontSize="3.4"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontWeight="700"
                      >
                        E{engramNumber}
                      </text>
                    )}
                    <text
                      x={n.x}
                      y={n.y - baseRadius - 2.5}
                      fontSize={n.tier === 0 ? '3.8' : '3'}
                      textAnchor="middle"
                      fill={isActive ? '#f4f6fb' : '#9aa3b8'}
                      fontWeight={n.tier === 0 ? '700' : '600'}
                    >
                      {n.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          <p className="mt-4 text-center text-[13.5px] font-semibold text-[#f4f6fb]">
            Every Engram is a durable memory trace.
          </p>
          <p className="mt-1 text-center text-[12px] text-[#6b7386]">
            The lowest-level concepts (E1, E2, E3) are the Engrams stored in your memory.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {LEGEND.map((item) => (
              <div key={item.label} className="rounded-lg border border-[#1e2330] bg-[#0b0e16] px-3.5 py-2.5">
                <p className="flex items-center gap-1.5 text-[12px] font-semibold text-[#f4f6fb]">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#6366f1] to-[#06b6d4]" />
                  {item.label}
                </p>
                <p className="mt-0.5 text-[11.5px] leading-snug text-[#6b7386]">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
