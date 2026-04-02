"use client";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? "h-16 bg-white/70 dark:bg-[#030712]/70 backdrop-blur-md border-b border-slate-200 dark:border-blue-500/10 shadow-2xl" 
          : "h-20 bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar (The Pro Touch) */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white text-xs group-hover:rotate-12 transition-transform">
            H
          </div>
          <span className="text-xl font-black tracking-tighter dark:text-white uppercase">
            HALIM<span className="text-blue-600">TEK</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="h-4 w-[1px] bg-slate-200 dark:bg-blue-500/20" />
          
          <div className="flex items-center gap-5">
           
            <Link 
              href="/login" 
              className="text-[10px] font-mono font-bold uppercase text-slate-500 hover:text-blue-500 transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="relative group px-6 py-2 overflow-hidden rounded-full bg-slate-900 dark:bg-white transition-all"
            >
              <span className="relative z-10 text-[10px] font-mono font-black uppercase text-white dark:text-black group-hover:text-blue-500 transition-colors">
                Join Academy
              </span>
              <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

             <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}