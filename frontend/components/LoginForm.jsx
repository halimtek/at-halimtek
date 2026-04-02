"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Add your login logic/NextAuth call here
    console.log("Logging in with:", formData);
    setTimeout(() => setLoading(false), 1500); 
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative max-w-md mx-auto"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20" />

      <div className="relative glass-card p-8 border border-white/10 backdrop-blur-xl shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">
            WELCOME <span className="text-blue-500">BACK.</span>
          </h2>
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] mt-2">
            // Authorized Personnel Only
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <input
              type="email"
              name="email"
              placeholder="EMAIL ADDRESS"
              required
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-mono text-xs focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>

          <div className="space-y-2">
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              required
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-mono text-xs focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-black rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 shadow-lg"
          >
            {loading ? "AUTHENTICATING..." : "LOGIN TO DASHBOARD"}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-white/5 pt-6">
          <p className="text-xs text-slate-500 font-mono">
            NEW TO THE PLATFORM?{" "}
            <Link href="/register" className="text-blue-500 hover:underline font-bold">
              CREATE ACCOUNT
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}