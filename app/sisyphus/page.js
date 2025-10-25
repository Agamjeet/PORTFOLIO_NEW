'use client';

import { useState, useEffect } from 'react';
import GsapButton from '../components/GsapButton';

export default function Sisyphus() {
  // Sisyphus position based on Twitter followers
  const [twitterFollowers, setTwitterFollowers] = useState(135);
  const [windowWidth, setWindowWidth] = useState(0);
  
  // Position parameter - you can also manually adjust this
  const position = twitterFollowers; // This controls Sisyphus position

  // Handle window resize for responsive positioning
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Function to move Sisyphus up when someone checks out X
  const handleCheckX = () => {
    setTwitterFollowers(prev => prev + 1);
    // Open X in new tab
    window.open('https://x.com/Agam_io', '_blank');
  };
  



  // Responsive positioning based on screen size
  const getResponsivePosition = () => {
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth < 1024;
    
    if (isMobile) {
      return {
        x: 15 + (position * 0.3), // Smaller movement on mobile
        y: 180 - (position * 0.15)  // Start lower on mobile (180px from top)
      };
    } else if (isTablet) {
      return {
        x: 45 + (position * 0.4),
        y: 200 - (position * 0.18)  // Start lower on tablet too
      };
    }
    // Desktop fallback
    return {
      x: 90 + (position * 0.5),
      y: 400git s - (position * 0.2)  // Adjusted for lg:h-96 (384px) container
    };
  };

  const spritePosition = getResponsivePosition();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">Sisyphus</h1>
          <div className="mt-2 sm:mt-4 p-3 sm:p-4 bg-slate-800 rounded-lg inline-block">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400">Followers: {twitterFollowers}</h2>
            <p className="text-xs sm:text-sm text-gray-400">Position: {position}</p>
          </div>
          <div className="mt-4 sm:mt-6">
            <GsapButton
              text="Move Sisyphus up!"
              startColor="#ffffff"
              fillColor="#1da1f2"
              textColor="#1da1f2"
              fillTextColor="#ffffff"
              size="default"
              onClick={handleCheckX}
            />
          </div>
        </div>

        {/* Concept Explanation */}
        <div className="mt-4 sm:mt-6 lg:mt-8 card bg-slate-800 text-white">
          <div className="card-body p-4 sm:p-6">
            <h3 className="card-title text-blue-400 text-lg sm:text-xl">The Sisyphus Concept</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Inspired by the myth of Sisyphus, this page visualizes the eternal struggle.
              Here, Sisyphus pushes his boulder up a never-ending slope.
              Each time someone follows me on X, Sisyphus moves one step further up the mountain,
            
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 sm:mt-4">
              Click the button above to check out my X and help Sisyphus climb higher!
            </p>
          </div>
        </div>

        {/* Game Canvas */}
        <div className="relative bg-slate-700 rounded-lg p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8 h-64 sm:h-80 lg:h-96 w-full">
          {/* Custom Background */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="/bg.png" 
              alt="Mountain Background"
              className="w-full h-full object-cover rounded-lg"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          {/* Sprite */}
          <div 
            className="absolute z-10"
            style={{ 
              left: `${spritePosition.x}px`, 
              top: `${spritePosition.y}px`,
            }}
          >
            <img 
              src="/sis.png" 
              alt="Sisyphus Sprite"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 xl:w-48 xl:h-48"
              style={{ 
                imageRendering: 'pixelated',
                transform: 'translate(-50%, -100%)' // Position sprite on top of the path
              }}
            />
          </div>

        </div>

      </div>
    </div>
  );
}
