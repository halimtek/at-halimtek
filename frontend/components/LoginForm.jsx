// components/LoginForm.jsx
"use client";
import { motion } from "framer-motion";

export default function LoginForm() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md"
    >
      <div className="glass-card p-1 shadow-2xl rounded-[2rem]">
        <div className="bg-white/5 dark:bg-[#030712]/60 backdrop-blur-3xl p-10">
          
          <div className="text-center mb-12">
            <div className="inline-block p-4 rounded-2xl bg-blue-600/10 border border-blue-500/20 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-black text-white">H</div>
            </div>
            <h2 className="text-2xl font-black tracking-tighter dark:text-white uppercase">
              Identity <span className="text-blue-600">Check.</span>
            </h2>
            <p className="text-[9px] font-mono text-slate-500 mt-2 uppercase tracking-[0.4em]">
              Authorized Personnel Only
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="pro-label text-blue-500/80">Access Token (Email)</label>
              <input type="email" placeholder="ADMIN@HALIMTEK.COM" className="pro-input text-center tracking-widest font-mono" />
            </div>
            
            <div className="space-y-2">
              <label className="pro-label text-blue-500/80">Security Key</label>
              <input type="password" placeholder="••••••••" className="pro-input text-center tracking-widest" />
            </div>

            <button className="pro-btn-primary mt-4">
              Unlock Terminal
            </button>
            
            <div className="flex justify-between items-center px-2 pt-4">
              <span className="text-[9px] font-mono text-slate-600 uppercase cursor-pointer hover:text-blue-500">Request Reset</span>
              <span className="text-[9px] font-mono text-slate-600 uppercase">Encrpytion: AES-256</span>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}