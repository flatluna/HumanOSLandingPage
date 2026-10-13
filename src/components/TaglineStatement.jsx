import React from 'react';
import { motion } from 'framer-motion';

export default function TaglineStatement() {
  return (
    <section className="relative overflow-hidden border-t border-[#1e2330] bg-[#05060a] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold uppercase leading-[1.1] tracking-tight text-[#f4f6fb] sm:text-6xl lg:text-7xl"
        >
          <span className="text-gradient-brand">Humans</span> first.
          <br />
          AI agents <span className="text-gradient-brand">second.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-[15.5px] leading-relaxed text-[#9aa3b8]"
        >
          Every capability we build strengthens human cognition first — AI is the coach, never the crutch.
        </motion.p>
      </div>
    </section>
  );
}
