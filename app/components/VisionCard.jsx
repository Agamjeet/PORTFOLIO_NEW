'use client';

import { motion } from 'framer-motion';

export default function VisionCard({ project, isFlipped, onFlip }) {
  const handleClick = () => {
    if (onFlip) {
      onFlip(project.id);
    }
  };

  return (
    <motion.div
      className="relative w-80 h-[28rem] rounded-3xl cursor-pointer"
      animate={{
        rotateY: isFlipped ? 180 : 0,
        zIndex: isFlipped ? 20 : 10
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d" }}
      onClick={handleClick}
    >
      {/* Front - Vision Theme */}
      <div
        className="absolute w-full h-full rounded-3xl shadow-2xl flex flex-col items-center justify-center
                   text-white font-bold text-center p-8"
        style={{
          backfaceVisibility: "hidden",
          background: 'linear-gradient(135deg, #fa709a, #fee140, #ff9a9e)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
        }}
      >
        <div className="text-6xl mb-6">👁️</div>
        <h3 className="text-3xl font-extrabold tracking-tight mb-4 text-center leading-tight">
          {project.title}
        </h3>
        <div className="text-lg font-medium opacity-90">
          {project.category}
        </div>
        <div className="mt-4 text-sm opacity-80">
          Computer Vision & Deep Learning
        </div>
      </div>

      {/* Back - Detailed Content */}
      <div
        className="absolute w-full h-full rounded-3xl p-8 shadow-2xl text-white"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: 'linear-gradient(135deg, #fa709a, #fee140)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
        }}
      >
        <div className="w-full h-48 bg-white/20 rounded-2xl mb-6 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-white/10">
            <span className="text-white text-sm font-medium">Document Classification</span>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-white/90 text-base leading-relaxed">{project.desc}</p>
        
        <div className="flex flex-wrap gap-2 mt-4 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="space-y-3">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full px-4 py-2 bg-white/20 text-white text-center rounded-lg hover:bg-white/30 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub
          </a>
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full px-4 py-2 bg-white/20 text-white text-center rounded-lg hover:bg-white/30 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

