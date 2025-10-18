"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import GsapButton from "./GsapButton";

export default function Hero() {
  const roles = [
    "AI Developer & Data Scientist",
    "Full Stack Engineer", 
    "Creative Artist",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (!isDeleting) {
      if (currentText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  return (
         <section
       id="top"
       className="hero min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 overflow-hidden"
     >
       {/* Floating blobs with vibrant colors */}
       <motion.div
         className="absolute top-1/4 left-[10%] w-80 h-80 bg-pink-400 rounded-full mix-blend-overlay filter blur-md opacity-70"
         animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
       />
       <motion.div
         className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-yellow-400 rounded-full mix-blend-overlay filter blur-md opacity-70"
         animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
         transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
       />
       <motion.div
         className="absolute top-1/2 left-[20%] w-60 h-60 bg-green-400 rounded-full mix-blend-overlay filter blur-md opacity-65"
         animate={{ y: [0, -30, 0], x: [0, -15, 0] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
       />
       <motion.div
         className="absolute top-1/3 right-[20%] w-70 h-70 bg-orange-400 rounded-full mix-blend-overlay filter blur-md opacity-60"
         animate={{ y: [0, 25, 0], x: [0, 10, 0] }}
         transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
       />
       <motion.div
         className="absolute bottom-1/3 left-[5%] w-50 h-50 bg-red-400 rounded-full mix-blend-overlay filter blur-md opacity-65"
         animate={{ y: [0, -20, 0], x: [0, 25, 0] }}
         transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
       />

      {/* Easter Egg: Clickable Sisyphus */}
      <a 
        href="/sisyphus" 
        className="absolute top-20 right-10 z-20 hover:scale-110 transition-transform duration-300"
        title="Click me!"
      >
        <img 
          src="/sis.png" 
          alt="Sisyphus Easter Egg"
          className="w-16 h-16 cursor-pointer"
          style={{ imageRendering: 'pixelated' }}
        />
      </a>

      {/* Hero Content */}
      <div className="hero-content text-center relative z-10">
        <div className="max-w-2xl">
                                                                                       <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
               Hi, I&apos;m <span className="relative inline-block">
                 <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-200">Agamjeet Singh</span>
                 <motion.div
                   className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/30 to-blue-500/20"
                   style={{
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     backgroundClip: 'text'
                   }}
                   animate={{
                     y: [0, -3, 0],
                     opacity: [0.4, 0.7, 0.4],
                   }}
                   transition={{
                     duration: 2.5,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                 >
                   Agamjeet Singh
                 </motion.div>
               </span>
             </h1>
                     <p className="py-6 text-2xl md:text-3xl font-medium text-white">
             {currentText}
             <span className="animate-pulse">|</span>
           </p>
                <a href="#contact">
                   <GsapButton
                     text="Get in touch"
                     startColor="#ffffff"
                     fillColor="#3b82f6"
                     textColor="#3b82f6"
                     fillTextColor="#ffffff"
                   />
                 </a>
        </div>
      </div>
    </section>
  );
}
