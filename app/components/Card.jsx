'use client';

import { motion } from 'framer-motion';

export default function Card({
  project,
  index,
  isFlipped,
  onFlip,
  isDraggable = true,
  showInstructions = true,
  cardStyle = {},
  frontContent,
  backContent,
  ...props
}) {
  if (!project) {
    console.error("Card component received an undefined 'project' prop and will not render.");
    return null;
  }

  const finalRotate = index * 5 - 10;

  const handleClick = () => {
    if (onFlip) onFlip(project.id);
  };

  const cardElement = (
    <motion.div
      className="relative w-full h-full rounded-3xl"
      animate={{
        rotateY: isFlipped ? 180 : 0,
        zIndex: isFlipped ? 20 : index + 10,
      }}
      initial={{ zIndex: index }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      style={{ transformStyle: 'preserve-3d' }}
      whileHover={{
        scale: 1.05,
        rotate: finalRotate,
        zIndex: 30,
        transition: { duration: 0.3 },
      }}
      onClick={handleClick}
      {...props}
    >
      {/* FRONT — Blue with simple content (spade + title) */}
      <div
        className="absolute w-full h-full rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white font-bold text-center p-8 bg-blue-600"
        style={{
          backfaceVisibility: 'hidden',
          ...cardStyle.front,
          background: 'linear-gradient(135deg, #2563eb, #3b82f6, #1d4ed8)',
          boxShadow:
            '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
        }}
      >
        {frontContent ? (
          frontContent(project)
        ) : (
          <div className="flex flex-col items-center">
            <div className="text-6xl mb-6">♠️</div>
            <h3 className="text-4xl font-extrabold tracking-tight mb-4 text-center leading-tight">
              {project.title}
            </h3>
            <div className="text-lg font-medium opacity-90">
              {project.category}
            </div>
          </div>
        )}
      </div>

      {/* BACK — White with detailed content */}
      <div
        className="absolute w-full h-full rounded-3xl p-8 shadow-2xl text-gray-800"
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          ...cardStyle.back,
          background:
            'linear-gradient(135deg, rgba(255,255,255,1), rgba(249,250,251,1))',
          boxShadow:
            '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,0.05) inset',
        }}
      >
        {/* Drag handle to visually incentivize dragging */}
        {isDraggable && (
          <div className="absolute top-4 left-4 text-gray-400 opacity-70 cursor-grab">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="5" r="1"></circle>
              <circle cx="19" cy="5" r="1"></circle>
              <circle cx="5" cy="19" r="1"></circle>
              <circle cx="19" cy="19" r="1"></circle>
            </svg>
          </div>
        )}
        {backContent ? (
          backContent(project)
        ) : (
          <>
            {/* Project Image/Placeholder */}
            <div className="w-full h-48 bg-gray-100 rounded-2xl mb-6 overflow-hidden">
              {project.img ? (
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                  <span className="text-gray-400 text-sm font-medium">Project Image</span>
                </div>
              )}
            </div>
            {/* Title and Description */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{project.desc}</p>
            {/* Instructions */}
            {showInstructions && (
              <div className="mt-8 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                  <span>Reorder with drag</span>
                </span>
                <span className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <polyline points="9 21 3 21 3 15"></polyline>
                    <line x1="21" y1="3" x2="14" y2="10"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                  <span>Click to flip</span>
                </span>
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );

  if (isDraggable) {
    return (
      <motion.div
        className="w-96 h-[32rem] cursor-grab active:cursor-grabbing"
        whileDrag={{ scale: 1.1, rotate: 0 }}
      >
        {cardElement}
      </motion.div>
    );
  }

  return <div className="w-96 h-[32rem]">{cardElement}</div>;
}
