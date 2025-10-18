'use client';

import { useState } from 'react';
import GsapButton from '../components/GsapButton';

export default function Sisyphus() {
  // Sisyphus position based on Twitter followers
  const [twitterFollowers, setTwitterFollowers] = useState(135);
  
  // Position parameter - you can also manually adjust this
  const position = twitterFollowers; // This controls Sisyphus position
  
  // Function to move Sisyphus up when someone checks out X
  const handleCheckX = () => {
    setTwitterFollowers(prev => prev + 1);
    // Open X in new tab
    window.open('https://x.com/Agam_io', '_blank');
  };
  



  // Simple pixel-based positioning
  const spritePosition = {
    x: 90 + (position * 0.5), // Move right as followers increase
    y: 580 - (position * 0.2)  // Move up as followers increase (started lower)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Sisyphus</h1>
          <div className="mt-4 p-4 bg-slate-800 rounded-lg inline-block">
            <h2 className="text-2xl font-bold text-blue-400">Followers: {twitterFollowers}</h2>
            <p className="text-sm text-gray-400">Position: {position}</p>
          </div>
          <div className="mt-6">
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
        <div className="mt-8 card bg-slate-800 text-white">
          <div className="card-body">
            <h3 className="card-title text-blue-400">The Sisyphus Concept</h3>
            <p className="text-gray-300">
              Inspired by the myth of Sisyphus, this page visualizes the eternal struggle.
              Here, Sisyphus pushes his boulder up a never-ending slope.
              Each time someone follows me on X, Sisyphus moves one step further up the mountain,
            
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Click the button above to check out my X and help Sisyphus climb higher!
            </p>
          </div>
        </div>

        {/* Game Canvas */}
        <div className="relative bg-slate-700 rounded-lg p-8 mb-8" style={{ height: '600px', width: '100%' }}>
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
              className="w-[200px] h-[200px]"
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
