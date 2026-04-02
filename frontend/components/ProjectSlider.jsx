"use client";
import { motion } from "framer-motion";

export default function ProjectSlider() {
  const projects = [
    { id: "01", title: "Halim Academy", tech: "NEXT.JS / FASTAPI", desc: "Full educational platform." },
    { id: "02", title: "Asset Tracker", tech: "FLUTTER / DART", desc: "Cross-platform logistics app." }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <motion.div 
          key={project.id}
          whileHover={{ scale: 0.98 }}
          className="glass-card group min-h-[400px] flex flex-col justify-end p-10 cursor-pointer"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors" />
          <div className="relative z-10">
            <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-[0.4em]">Project {project.id}</span>
            <h3 className="text-4xl font-black dark:text-white uppercase tracking-tighter mt-2">{project.title}</h3>
            <p className="text-sm text-slate-500 mt-4 max-w-xs">{project.desc}</p>
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">{project.tech}</span>
              <div className="w-10 h-10 rounded-full border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                <svg className="w-4 h-4 group-hover:text-white text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7M3 12h18" /></svg>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}