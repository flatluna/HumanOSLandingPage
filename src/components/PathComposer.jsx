import React from 'react';
import { motion } from 'framer-motion';
import { Layers3, Route, Mic2, RefreshCw, ArrowRight } from 'lucide-react';

const NARRATIVE = [
  {
    title: 'Plans a path with you',
    desc: 'It starts by understanding you — your work, your goal — and lays out the way there.',
  },
  {
    title: 'Adapts to how you learn',
    desc: 'The pace, the examples, the explanations — shaped to you.',
  },
  {
    title: 'Stays with you',
    desc: 'Patiently, until you\'ve actually mastered the skill — not just finished it.',
  },
];

const LAYERS = [
  {
    label: 'Content',
    detail: 'Engrams, Factuals, and the 5-step Blueprint — authored once per domain, canonical and verified.',
  },
  {
    label: 'Path',
    detail: 'The exact sequence of nodes for one learner — composed live, on every query, from the shared graph.',
  },
  {
    label: 'Delivery',
    detail: 'How the Tutor explains that node — examples, tone, and depth adapted to that learner in real time.',
  },
];

const CAPABILITIES = [
  {
    icon: Route,
    title: 'Mastery-Aware Path Planning',
    desc: "From a learner's current mastery frontier to any goal node, the graph is traversed respecting hard prerequisites and prioritizing related context — a live query, never a duplicated course.",
  },
  {
    icon: Layers3,
    title: 'Diagnostic Placement',
    desc: 'Before teaching anything, we place each learner on the graph — so no one relearns what they already know.',
  },
  {
    icon: Mic2,
    title: 'Adaptive Delivery',
    desc: "The same verified node is explained with examples drawn from the learner's own role and background — content stays fixed, delivery adapts.",
  },
  {
    icon: RefreshCw,
    title: 'Decay-Aware Resurfacing',
    desc: "Mastered engrams that start to fade are automatically reinserted into the path before they're forgotten — memory that truly stays with you.",
  },
];

export default function PathComposer() {
  return (
    <section className="border-t border-[#1e2330] bg-section-gradient py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12.5px] font-mono-code uppercase tracking-wider text-[#06b6d4]">One-to-One, Not One-to-Many</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#f4f6fb] sm:text-4xl">
            A system designed for one, not for the masses.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {NARRATIVE.map((item, i) => (
            <div key={item.title} className="rounded-2xl border border-[#6366f1]/25 bg-[#0b0e16] p-7 text-center">
              <span className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#6366f1] to-[#06b6d4] text-[13px] font-bold text-white">
                {i + 1}
              </span>
              <h3 className="text-[16px] font-semibold text-[#f4f6fb]">{item.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#9aa3b8]">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-[12.5px] font-mono-code uppercase tracking-wider text-[#06b6d4]">One Graph, Not One Course Per Person</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#f4f6fb] sm:text-4xl">
            Infinite personalized paths. Zero duplicated content.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-[#9aa3b8]">
            A course isn't a static file — it's a live view over a shared graph. We separate what's
            fixed from what's personal, so one canonical graph can serve every learner a different path.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center"
        >
          {LAYERS.map((layer, i) => (
            <React.Fragment key={layer.label}>
              <div className="flex-1 rounded-2xl border border-[#1e2330] bg-[#0b0e16] p-6">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-[#06b6d4]">{layer.label}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#9aa3b8]">{layer.detail}</p>
              </div>
              {i < LAYERS.length - 1 && (
                <ArrowRight className="mx-auto hidden h-5 w-5 shrink-0 text-[#2a3040] lg:block" />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CAPABILITIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-[#1e2330] bg-[#0b0e16] p-7"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#6366f1] to-[#06b6d4]">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="mb-2 text-[15.5px] font-semibold text-[#f4f6fb]">{c.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-[#9aa3b8]">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
