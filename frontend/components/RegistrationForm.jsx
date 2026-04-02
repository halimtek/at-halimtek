"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Add your logic to send data to your FastAPI or Next.js API here
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-32 w-full max-w-xl mx-auto z-20"
    >
      <div className="relative glass-card p-10 border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
        
        {/* Subtle Decorative Gradient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl -z-10" />

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-blue-600" />
            <p className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.3em]">Application Portal</p>
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
            ACADEMY <span className="text-blue-600">ENROLLMENT.</span>
          </h2>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form 
              exit={{ opacity: 0, scale: 0.95 }}
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {/* Row 1: Names */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono uppercase text-gray-500 ml-1">First Name</label>
                  <input type="text" required placeholder="Abdelhalim" className="pro-input" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono uppercase text-gray-500 ml-1">Last Name</label>
                  <input type="text" required placeholder="Adem" className="pro-input" />
                </div>
              </div>

              {/* Row 2: Contact */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-mono uppercase text-gray-500 ml-1">Work Email</label>
                <input type="email" required placeholder="name@company.com" className="pro-input" />
              </div>

              {/* Row 3: Selections */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono uppercase text-gray-500 ml-1">Track</label>
                  <select className="pro-input appearance-none cursor-pointer">
                    <option>Software Engineering</option>
                    <option>Full-Stack Web</option>
                    <option>Mobile (Flutter)</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono uppercase text-gray-500 ml-1">Experience</label>
                  <select className="pro-input appearance-none cursor-pointer">
                    <option>Junior (0-2 yrs)</option>
                    <option>Senior (3-5 yrs)</option>
                    <option>Lead / Architect</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Short Text */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-mono uppercase text-gray-500 ml-1">Main Technical Goal</label>
                <textarea rows="2" placeholder="What are you looking to master?" className="pro-input resize-none" />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    VERIFYING...
                  </>
                ) : "SUBMIT APPLICATION"}
              </button>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-xl font-bold dark:text-white uppercase tracking-tighter">Transmission Successful</h3>
              <p className="text-xs text-gray-500 font-mono tracking-wide px-8">
                Your application has been logged. Our engineering leads will review it and contact you via email.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .pro-input {
          width: 100%;
          padding: 0.85rem 1rem;
          font-size: 0.85rem;
          border-radius: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .pro-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.07);
          border-color: #2563eb;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }
        .pro-input::placeholder {
          color: #4b5563;
        }
        select option {
          background: #030712;
        }
      `}</style>
    </motion.div>
  );
}