"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use a variable for class logic to keep the JSX clean
  const navStyles = scrolled || isOpen
    ? "h-16 bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl border-b border-blue-500/10 shadow-2xl shadow-blue-500/5"
    : "h-20 bg-transparent border-b border-transparent";

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${navStyles}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 z-[110] group">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-black text-white text-xs group-hover:rotate-12 transition-transform">
            H
          </div>
          <span className="text-xl font-black tracking-tighter dark:text-white uppercase">
            HALIM<span className="text-blue-600">TEK</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            <Link href="/#about" className="nav-link">About</Link>
            <Link href="/#services" className="nav-link">Services</Link>
            <Link href="/#projects" className="nav-link">Deployments</Link>
          </div>

          {/* Divider Line */}
          <div className="h-4 w-[1px] bg-slate-200 dark:bg-white/10" />

          <div className="flex items-center gap-6">
            <Link href="/login" className="text-[10px] font-mono font-bold uppercase text-slate-500 hover:text-blue-600 transition-colors tracking-widest">
              Login
            </Link>
            <Link href="/register" className="px-6 py-2.5 bg-blue-600 text-white text-[10px] font-mono font-black uppercase rounded-xl shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95 transition-all">
              Initialize
            </Link>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4 z-[110]">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 dark:text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-3xl border-b border-blue-500/10 overflow-hidden md:hidden shadow-2xl"
          >
            <div className="p-8 flex flex-col gap-6">
              <Link onClick={() => setIsOpen(false)} href="/#about" className="mobile-nav-link">About</Link>
              <Link onClick={() => setIsOpen(false)} href="/#services" className="mobile-nav-link">Services</Link>
              <Link onClick={() => setIsOpen(false)} href="/#projects" className="mobile-nav-link text-blue-500">Deployments</Link>
              
              <div className="h-[1px] w-full bg-slate-100 dark:bg-white/5 my-2" />
              
              <div className="grid grid-cols-2 gap-4">
                <Link onClick={() => setIsOpen(false)} href="/login" className="py-4 text-center text-xs font-mono uppercase font-bold dark:text-white border border-slate-200 dark:border-white/10 rounded-xl">
                  Login
                </Link>
                <Link onClick={() => setIsOpen(false)} href="/register" className="py-4 text-center text-xs font-mono uppercase font-black bg-blue-600 text-white rounded-xl">
                  Join
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}