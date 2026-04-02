"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Integrate your NextAuth or FastAPI logic here
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md z-10"
    >
      <div className="glass-card p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle Branding Top-Right */}
        <div className="absolute top-4 right-6 opacity-10 font-black text-xl tracking-tighter dark:text-white">
          H<span className="text-blue-600">T</span>
        </div>

        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-black tracking-tighter dark:text-white uppercase leading-none">
            Welcome <span className="text-blue-600">Back.</span>
          </h2>
          <p className="text-[9px] font-mono text-slate-500 mt-3 uppercase tracking-[0.4em]">
            // Terminal Login Required
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-[9px] font-mono uppercase text-slate-400 ml-1">Access Identity</label>
            <input 
              type="email" 
              required 
              placeholder="EMAIL ADDRESS" 
              className="pro-input-style" 
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center px-1">
              <label className="text-[9px] font-mono uppercase text-slate-400">Security Key</label>
              <Link href="#" className="text-[9px] font-mono text-blue-500 hover:underline uppercase">Forgot?</Link>
            </div>
            <input 
              type="password" 
              required 
              placeholder="PASSWORD" 
              className="pro-input-style" 
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-xl shadow-blue-600/20 transition-all active:scale-95 disabled:opacity-50"
          >
            {loading ? "AUTHENTICATING..." : "AUTHORIZE ACCESS"}
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-slate-200 dark:border-white/5 text-center">
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            New to HalimTek?{" "}
            <Link href="/register" className="text-blue-500 font-bold hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        .pro-input-style {
          width: 100%;
          padding: 0.85rem 1.2rem;
          background: rgba(128, 128, 128, 0.05);
          border: 1px solid rgba(128, 128, 128, 0.1);
          border-radius: 0.75rem;
          color: inherit;
          font-size: 0.8rem;
          outline: none;
          transition: all 0.2s ease;
        }
        .pro-input-style:focus {
          border-color: #2563eb;
          background: rgba(128, 128, 128, 0.1);
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }
      `}</style>
    </motion.div>
  );
}