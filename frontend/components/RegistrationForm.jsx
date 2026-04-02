// components/RegistrationForm.jsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-28 w-full max-w-2xl z-40 self-start"
    >
      <div className="glass-card p-1 shadow-2xl overflow-hidden rounded-[2rem]">
        <div className="bg-white/5 dark:bg-[#030712]/40 backdrop-blur-3xl p-8 md:p-12">
          
          {/* Header Section */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <h2 className="text-3xl font-black tracking-tighter dark:text-white uppercase leading-none">
                Begin <span className="text-blue-600">Onboarding.</span>
              </h2>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] mt-3">
                // System Access Level: Candidate
              </p>
            </div>
            <div className="hidden sm:block text-right">
              <span className="text-[9px] font-mono text-blue-500/50 block">REF_ID: HT-2026</span>
              <span className="text-[9px] font-mono text-green-500/50 block">STATUS: SECURE</span>
            </div>
          </div>

          <form className="space-y-8">
            {/* Group 1: Identity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="pro-label">Full Legal Name</label>
                <div className="relative">
                  <input type="text" placeholder="e.g. Abdelhalim Adem" className="pro-input" />
                  <span className="input-icon">👤</span>
                </div>
              </div>
              <div className="form-group">
                <label className="pro-label">Professional Email</label>
                <div className="relative">
                  <input type="email" placeholder="name@domain.com" className="pro-input" />
                  <span className="input-icon">✉️</span>
                </div>
              </div>
            </div>

            {/* Group 2: Technical Focus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="pro-label">Primary Stack</label>
                <select className="pro-input appearance-none">
                  <option>Full-Stack (Next.js/FastAPI)</option>
                  <option>Mobile (Flutter/Dart)</option>
                  <option>Systems (Python/Linux)</option>
                </select>
              </div>
              <div className="form-group">
                <label className="pro-label">Experience Tier</label>
                <select className="pro-input appearance-none">
                  <option>Junior Associate</option>
                  <option>Mid-Level Engineer</option>
                  <option>Senior/Lead Architect</option>
                </select>
              </div>
            </div>

            {/* Group 3: Project Intent */}
            <div className="form-group">
              <label className="pro-label">Project Vision (Short Summary)</label>
              <textarea rows="3" placeholder="Describe the application you intend to build..." className="pro-input resize-none" />
            </div>

            {/* Action Section */}
            <div className="pt-4">
              <button className="pro-btn-primary">
                Confirm & Initialize Account
              </button>
              <p className="text-center text-[10px] font-mono text-slate-500 mt-6 uppercase tracking-widest">
                By submitting, you agree to the <span className="text-blue-500 cursor-pointer">Protocol Terms</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}