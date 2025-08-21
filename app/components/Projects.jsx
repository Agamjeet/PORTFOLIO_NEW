'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AICard from './AICard';
import SearchCard from './SearchCard';
import VisionCard from './VisionCard';
import CreativeCard from './CreativeCard';
import AnalyticsCard from './AnalyticsCard';

const projects = [
  { 
    id: 1, 
    title: "AI EOB Extractor", 
    desc: "Advanced OCR and NLP system that extracts structured data from Explanation of Benefits documents. Uses computer vision to identify key fields and natural language processing to parse medical terminology.", 
    img: "/project1.png",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "OpenCV", "NLP"],
    github: "https://github.com/yourusername/eob-extractor",
    live: "https://eob-extractor.com",
    cardType: "ai-card"
  },
  { 
    id: 2, 
    title: "RAG Search Engine", 
    desc: "Retrieval-Augmented Generation search system built with vector databases and large language models. Provides accurate, contextual responses by combining real-time data retrieval with AI generation.", 
    img: "/project2.png",
    category: "Backend",
    technologies: ["Node.js", "Pinecone", "OpenAI", "FastAPI"],
    github: "https://github.com/yourusername/rag-search",
    live: "https://rag-search.com",
    cardType: "search-card"
  },
  { 
    id: 3, 
    title: "Document Classifier", 
    desc: "Computer vision model for automatic document classification and routing. Uses deep learning to categorize invoices, contracts, receipts, and other business documents with high accuracy.", 
    img: "/project3.png",
    category: "Computer Vision",
    technologies: ["Python", "PyTorch", "FastAPI", "Docker"],
    github: "https://github.com/yourusername/doc-classifier",
    live: "https://doc-classifier.com",
    cardType: "vision-card"
  },
  { 
    id: 4, 
    title: "Creative AI Platform", 
    desc: "SaaS platform that generates custom marketing images using AI. Features include brand customization, template library, and integration with popular design tools and social media platforms.", 
    img: "/project4.png",
    category: "SaaS",
    technologies: ["React", "Stable Diffusion", "Stripe", "AWS"],
    github: "https://github.com/yourusername/creative-ai",
    live: "https://creative-ai.com",
    cardType: "creative-card"
  },
  { 
    id: 5, 
    title: "Real-time Analytics", 
    desc: "Real-time data analytics dashboard with streaming capabilities. Processes millions of events per second and provides interactive visualizations for business intelligence and monitoring.", 
    img: "/project5.png",
    category: "Data Science",
    technologies: ["Kafka", "Elasticsearch", "D3.js", "Kubernetes"],
    github: "https://github.com/yourusername/analytics-dashboard",
    live: "https://analytics-dashboard.com",
    cardType: "analytics-card"
  }
];

export default function Projects() {
  const [flipped, setFlipped] = useState({});
  const [cardOrder, setCardOrder] = useState(projects);
  const [dealtCards, setDealtCards] = useState(new Set());
  const [hasDealt, setHasDealt] = useState(false);
  const sectionRef = useRef(null);

  // Generate consistent random positions for each card
  const cardPositions = useMemo(() => {
    return projects.map(project => ({
      id: project.id,
      rotation: (Math.random() - 0.5) * 10, // -5 to +5 degrees (less rotation)
      offset: (Math.random() - 0.5) * 20, // -10px to +10px (less offset)
      top: Math.random() * 60 + 15, // 15% - 75% from top (more centered)
      left: Math.random() * 60 + 15, // 15% - 75% from left (more centered)
    }));
  }, []);

  // Deal cards animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasDealt) {
            setHasDealt(true);
            dealCards();
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasDealt]);

  const dealCards = async () => {
    for (let i = 0; i < projects.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 200)); // 200ms delay between each card
      setDealtCards(prev => new Set([...prev, projects[i].id]));
    }
  };

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Custom card content functions
  const customFrontContent = (project) => (
    <div className="flex flex-col items-center">
      <div className="text-6xl mb-6">♠️</div>
      <h3 className="text-4xl font-extrabold tracking-tight mb-4 text-center leading-tight">
        {project.title}
      </h3>
      <div className="text-lg font-medium opacity-90">
        {project.category}
      </div>
    </div>
  );

  const customBackContent = (project) => (
    <>
      {/* Project Image/Placeholder */}
      <div className="w-full h-48 bg-white/20 rounded-2xl mb-6 overflow-hidden">
        {project.img ? (
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-white/10">
            <span className="text-white text-sm font-medium">Project Image</span>
          </div>
        )}
      </div>
      {/* Title and Description */}
      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-white/90 text-base leading-relaxed">{project.desc}</p>
      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mt-4 mb-6">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
            {tech}
          </span>
        ))}
      </div>
      {/* Links */}
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
      {/* Instructions */}
      <div className="mt-6 flex items-center justify-between text-xs text-white/70">
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
    </>
  );

  return (
    <section ref={sectionRef} id="projects" className="relative min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interactive project cards - click to flip for more details.
          </p>
        </div>

        {/* Scatter zone */}
        <div className="relative w-full h-[90vh]">
          {cardOrder.map((project, index) => {
            const position = cardPositions.find(pos => pos.id === project.id);
            const isFlipped = flipped[project.id];
            const isDealt = dealtCards.has(project.id);

            // Render appropriate custom card based on cardType
            const renderCustomCard = () => {
              switch (project.cardType) {
                case 'ai-card':
                  return <AICard project={project} isFlipped={isFlipped} onFlip={toggleFlip} />;
                case 'search-card':
                  return <SearchCard project={project} isFlipped={isFlipped} onFlip={toggleFlip} />;
                case 'vision-card':
                  return <VisionCard project={project} isFlipped={isFlipped} onFlip={toggleFlip} />;
                case 'creative-card':
                  return <CreativeCard project={project} isFlipped={isFlipped} onFlip={toggleFlip} />;
                case 'analytics-card':
                  return <AnalyticsCard project={project} isFlipped={isFlipped} onFlip={toggleFlip} />;
                default:
                  return <AICard project={project} isFlipped={isFlipped} onFlip={toggleFlip} />;
              }
            };

            return (
              <motion.div
                key={project.id}
                className="absolute cursor-grab active:cursor-grabbing"
                style={{ 
                  top: `${position.top}%`, 
                  left: `${position.left}%` 
                }}
                initial={{
                  scale: 0.8,
                  opacity: 0,
                  rotate: 0,
                }}
                animate={isDealt ? {
                  scale: 1,
                  opacity: 1,
                  rotate: position.rotation,
                } : {
                  scale: 0.8,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2
                }}
                drag
                dragMomentum={false}
                dragElastic={0.1}
                whileDrag={{
                  scale: 1.1,
                  rotate: 0,
                  zIndex: 1000,
                }}
                onDragEnd={(event, info) => {
                  // Update card position after drag
                  const newTop = (info.point.y / window.innerHeight) * 100;
                  const newLeft = (info.point.x / window.innerWidth) * 100;
                  // You could store these positions in state if needed
                }}
              >
                {renderCustomCard()}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}