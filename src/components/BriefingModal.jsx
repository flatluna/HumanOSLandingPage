import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Send } from 'lucide-react';

export default function BriefingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: 'Enterprise L&D Leader',
    interest: 'Enterprise Skills Deployment',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:p-6">
      <div className="relative my-8 w-full max-w-2xl rounded-2xl border border-[#1e2330] bg-[#0b0e16] p-6 shadow-glass sm:p-10">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-md p-2 text-[#6b7386] transition-colors hover:bg-[#12151f] hover:text-[#f4f6fb]"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="mb-2 inline-flex items-center gap-1.5 font-mono-code text-xs font-bold uppercase tracking-wider text-[#06b6d4]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#06b6d4]" />
                <span>Enterprise Demo // HUMAN·OS</span>
              </div>
              <h3 className="text-3xl font-semibold text-[#f4f6fb] sm:text-4xl">
                Schedule Your Capability Briefing
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9aa3b8]">
                Meet with our team to review your organization's skills graph, capability gaps,
                and pilot rollout parameters.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase text-[#9aa3b8]">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. Elena Vance"
                    className="w-full rounded-lg border border-[#1e2330] bg-[#12151f] px-3.5 py-2.5 text-sm text-[#f4f6fb] outline-none transition-colors focus:border-[#6366f1]"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase text-[#9aa3b8]">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena.vance@enterprise.com"
                    className="w-full rounded-lg border border-[#1e2330] bg-[#12151f] px-3.5 py-2.5 text-sm text-[#f4f6fb] outline-none transition-colors focus:border-[#6366f1]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase text-[#9aa3b8]">Organization *</label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Global Systems Corp"
                    className="w-full rounded-lg border border-[#1e2330] bg-[#12151f] px-3.5 py-2.5 text-sm text-[#f4f6fb] outline-none transition-colors focus:border-[#6366f1]"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase text-[#9aa3b8]">Stakeholder Profile</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full cursor-pointer rounded-lg border border-[#1e2330] bg-[#12151f] px-3.5 py-2.5 text-sm text-[#f4f6fb] outline-none transition-colors focus:border-[#6366f1]"
                  >
                    <option>Enterprise L&D Leader</option>
                    <option>Talent &amp; Transformation Executive</option>
                    <option>University / Academy Provost</option>
                    <option>Learning Company / EdTech Founder</option>
                    <option>Strategic Systems Partner</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase text-[#9aa3b8]">Primary Objective</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full cursor-pointer rounded-lg border border-[#1e2330] bg-[#12151f] px-3.5 py-2.5 text-sm text-[#f4f6fb] outline-none transition-colors focus:border-[#6366f1]"
                >
                  <option>Enterprise Skills Deployment</option>
                  <option>Anti-Offloading Framework Rollout</option>
                  <option>AI Voice Tutor Pilot</option>
                  <option>Knowledge Graph & Factuals Integration</option>
                  <option>Capability Studio / OEM Licensing</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase text-[#9aa3b8]">Context (Optional)</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your organization's current learning bottlenecks or pilot goals..."
                  className="w-full resize-none rounded-lg border border-[#1e2330] bg-[#12151f] px-3.5 py-2.5 text-sm text-[#f4f6fb] outline-none transition-colors focus:border-[#6366f1]"
                />
              </div>

              <div className="flex items-center gap-2 pt-1 text-[11px] text-[#6b7386]">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#10b981]" />
                <span>Enterprise NDA and data privacy protections apply to all briefing requests.</span>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#06b6d4] px-6 py-3.5 text-sm font-semibold text-white shadow-glow-indigo transition-transform hover:scale-[1.01]"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Briefing Request</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-4 py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#10b981]/15 text-[#10b981]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#06b6d4]">
              Briefing Scheduled // HUMAN·OS
            </div>
            <h3 className="text-3xl font-semibold text-[#f4f6fb]">Thank you, {formData.name}.</h3>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-[#9aa3b8]">
              We have received your briefing request for{' '}
              <strong className="text-[#f4f6fb]">{formData.organization}</strong>. Our team will
              follow up with a calendar link within 24 business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="rounded-md bg-gradient-to-r from-[#6366f1] to-[#06b6d4] px-6 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                Return to Landing Page
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
