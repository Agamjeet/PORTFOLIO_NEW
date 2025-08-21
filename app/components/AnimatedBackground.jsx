'use client';

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
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
    </>
  );
}
