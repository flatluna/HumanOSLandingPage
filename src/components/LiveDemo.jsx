import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Mic } from 'lucide-react';

const STEPS = ['Hypothesis', 'Recall', 'Production'];

export default function LiveDemo() {
  const [step, setStep] = useState(0);
  const [bars] = useState(Array.from({ length: 24 }, (_, i) => i));

  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % STEPS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="graph" className="border-t border-[#1e2330] bg-[#05060a] py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12.5px] font-mono-code uppercase tracking-wider text-[#06b6d4]">Live Demo</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#f4f6fb] sm:text-4xl">
            Step inside a real Engram node.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-3xl border border-[#1e2330] bg-[#0b0e16] p-8 lg:p-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1e2330] pb-6">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#6366f1] to-[#06b6d4]">
                <Zap className="h-4.5 w-4.5 text-white" />
              </span>
              <div>
                <p className="text-[15px] font-semibold text-[#f4f6fb]">Ohm&apos;s Law &amp; Circuit Analysis</p>
                <p className="text-[12.5px] text-[#6b7386]">Node #0417 · Electrical Engineering Graph</p>
              </div>
            </div>
            <div className="flex gap-2">
              {STEPS.map((s, i) => (
                <span
                  key={s}
                  className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors ${
                    i === step
                      ? 'bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white'
                      : 'bg-[#12151f] text-[#6b7386]'
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-sm">
              <p className="text-[13px] uppercase tracking-wider text-[#6b7386]">AI Voice Tutor</p>
              <p className="mt-2 text-[15px] leading-relaxed text-[#f4f6fb]">
                {step === 0 && '"Before I explain anything — what do you predict happens to current if resistance doubles?"'}
                {step === 1 && '"Without looking, walk me back through V = I × R and why."'}
                {step === 2 && '"Design a voltage divider for a 5V sensor. Show your work."'}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1e2330] bg-[#12151f]">
                <Mic className="h-4.5 w-4.5 text-[#06b6d4]" />
              </span>
              <div className="flex h-10 items-end gap-1">
                {bars.map((b) => (
                  <span
                    key={b}
                    style={{ animationDelay: `${b * 0.05}s` }}
                    className="animate-waveform w-1 rounded-full bg-gradient-to-t from-[#6366f1] to-[#06b6d4]"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
