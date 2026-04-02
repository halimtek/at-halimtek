"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "Halim Academy",
    category: "Full-Stack Platform",
    tech: ["Next.js", "FastAPI", "PostgreSQL"],
    description: "A comprehensive educational system with automated enrollment and progress tracking.",
    link: "#",
    image: "/assets/project-1.jpg" // Add your image path
  },
  {
    id: "02",
    title: "Telemed Connect",
    category: "Mobile Healthcare",
    tech: ["Flutter", "Dart", "Firebase"],
    description: "Cross-platform mobile application for remote patient-doctor consultations in Ethiopia.",
    link: "#",
    image: "/assets/project-2.jpg"
  },
  {
    id: "03",
    title: "HalimTek Bot",
    category: "Automation",
    tech: ["Python", "Telegram API", "Docker"],
    description: "Automated messaging and lead generation bot integrated with cloud deployment.",
    link: "#",
    image: "/assets/project-3.jpg"
  }
];

export default function ProjectSlider() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          className="group relative"
        >
          {/* Main Card */}
          <div className="glass-card h-[500px] flex flex-col p-8 hover:border-blue-500/40 transition-all duration-500">
            
            {/* Project Number & Category */}
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-[0.5em]">
                System_{project.id}
              </span>
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                {project.category}
              </span>
            </div>

            {/* Title & Description */}
            <div className="flex-grow">
              <h3 className="text-3xl font-black dark:text-white uppercase tracking-tighter leading-none group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-blue-500/5 border border-blue-500/10 text-[9px] font-mono text-blue-500 uppercase rounded-full">
                  {t}
                </span>
              ))}
            </div>

            {/* Action Button */}
            <Link 
              href={project.link}
              className="w-full py-4 border border-slate-200 dark:border-white/10 dark:text-white text-[10px] font-mono uppercase tracking-[0.3em] text-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-500 rounded-xl"
            >
              Initialize View
            </Link>

            {/* Background Decorative Glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full group-hover:bg-blue-600/10 transition-all" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}