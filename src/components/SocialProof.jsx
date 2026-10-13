import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Timer, FileSearch } from 'lucide-react';

const STATS = [
  { icon: ShieldCheck, value: '100%', label: 'Zero-Hallucination', sub: 'Grounded in graph factuals' },
  { icon: TrendingUp, value: '5x', label: 'Retention Rate', sub: 'Active recall vs passive video' },
  { icon: Timer, value: 'Sub-Second', label: 'Realtime Voice', sub: 'WebRTC voice interaction' },
  { icon: FileSearch, value: 'Minutes', label: 'To Graph', sub: 'PDF-to-curriculum generation' },
];

export default function SocialProof() {
  return (
    <section className="border-t border-[#1e2330] bg-section-gradient py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-[#1e2330] bg-[#0b0e16] p-7 text-center"
              >
                <Icon className="mx-auto mb-4 h-6 w-6 text-[#06b6d4]" />
                <p className="text-2xl font-bold tracking-tight text-gradient-brand">{s.value}</p>
                <p className="mt-1 text-[14px] font-semibold text-[#f4f6fb]">{s.label}</p>
                <p className="mt-1 text-[12.5px] text-[#6b7386]">{s.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
