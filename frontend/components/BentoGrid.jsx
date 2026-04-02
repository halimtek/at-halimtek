"use client";
import { motion } from "framer-motion";

export default function BentoGrid() {
  const cards = [
    { title: "Mobile", sub: "Flutter & Dart", icon: "📱", size: "md:col-span-2 md:row-span-2" },
    { title: "Backend", sub: "Python / FastAPI", icon: "🚀", size: "md:col-span-2" },
    { title: "DevOps", sub: "Docker & Linux", icon: "🐳", size: "md:col-span-1" },
    { title: "Database", sub: "PostgreSQL", icon: "🗄️", size: "md:col-span-1" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -5 }}
          className={`${card.size} glass-card p-8 flex flex-col justify-end group`}
        >
          <div className="absolute top-6 right-6 text-3xl opacity-20 group-hover:opacity-100 group-hover:rotate-12 transition-all">
            {card.icon}
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-black dark:text-white uppercase leading-none">{card.title}</h3>
            <p className="text-[10px] font-mono text-blue-500 mt-2 uppercase tracking-widest">{card.sub}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}