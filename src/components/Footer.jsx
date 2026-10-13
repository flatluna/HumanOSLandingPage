import React from 'react';
import logo from '../assets/LogoHumanOS.png';

const COLUMNS = [
  {
    title: 'System',
    links: ['Memory Paradox', 'Engram Learning Engine', 'Human Capability Graph', 'AI Learning Agents'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms'],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2330] bg-[#05060a] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-xs">
            <span className="inline-flex rounded-lg bg-white p-2">
              <img src={logo} alt="HumanOS logo" className="h-9 w-auto object-contain" />
            </span>
            <p className="mt-4 text-[13.5px] leading-relaxed text-[#6b7386]">
              Humans first · AI agents second.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-[12.5px] font-semibold uppercase tracking-wider text-[#6b7386]">{col.title}</p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[13.5px] text-[#9aa3b8] transition-colors hover:text-[#f4f6fb]">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-[#1e2330] pt-8">
          <p className="text-[12.5px] text-[#6b7386]">
            © 2026 HUMAN·OS · humanos.one. Humans first · AI agents second.
          </p>
        </div>
      </div>
    </footer>
  );
}
