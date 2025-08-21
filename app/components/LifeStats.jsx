"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function LifeStats() {
  const [age, setAge] = useState(25);
  const [showStats, setShowStats] = useState(false);
  const [stats, setStats] = useState({});
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);

  // Background animation
  useEffect(() => {
    if (backgroundRef.current) {
      gsap.to(backgroundRef.current, {
        backgroundPosition: "200% 200%",
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }
  }, []);

  // Floating particles animation
  useEffect(() => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-white/20 rounded-full';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      containerRef.current?.appendChild(particle);
      particles.push(particle);
    }

    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: -100,
        x: Math.random() * 50 - 25,
        duration: 10 + Math.random() * 10,
        repeat: -1,
        ease: "none",
        delay: index * 0.5
      });
    });

    return () => {
      particles.forEach(particle => particle.remove());
    };
  }, []);

  const calculateStats = (userAge) => {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - userAge;
    const daysLived = userAge * 365.25;
    const heartbeats = daysLived * 24 * 60 * 75; // 75 beats per minute
    const averageStepsPerDay = 7500;
    const totalSteps = daysLived * averageStepsPerDay;
    const stepsPerMile = 2000;
    const milesWalked = totalSteps / stepsPerMile;
    const countryLength = 2800; // Approximate miles across US
    const timesAcrossCountry = milesWalked / countryLength;

    // Fun pop culture facts by year
    const popCultureFacts = {
      1999: "The Matrix was released, changing sci-fi forever!",
      1998: "Google was founded in a garage!",
      1997: "Titanic became the highest-grossing film ever!",
      1996: "The first Pokémon games were released!",
      1995: "Toy Story, the first CGI feature film, was released!",
      1994: "Friends premiered on NBC!",
      1993: "Jurassic Park revolutionized special effects!",
      1992: "The first text message was sent!",
      1991: "The World Wide Web was made public!",
      1990: "The Simpsons premiered on TV!",
      1989: "The Berlin Wall fell!",
      1988: "The first mobile phone call was made!",
      1987: "The first Final Fantasy game was released!",
      1986: "The Space Shuttle Challenger disaster occurred.",
      1985: "Back to the Future was released!",
      1984: "The first Macintosh computer was introduced!",
      1983: "The first mobile phone was released!",
      1982: "ET: The Extra-Terrestrial became a blockbuster!",
      1981: "The first Space Shuttle mission launched!",
      1980: "The Empire Strikes Back was released!",
      1979: "The first Sony Walkman was released!",
      1978: "Saturday Night Fever dominated the charts!",
      1977: "Star Wars: A New Hope was released!",
      1976: "Apple Computer was founded!",
      1975: "Jaws became the first summer blockbuster!",
      1974: "The first personal computer was released!",
      1973: "The first mobile phone call was made!",
      1972: "Pong, the first video game, was released!",
      1971: "The first email was sent!",
      1970: "The Beatles broke up!",
      1969: "Man walked on the moon!",
      1968: "The Beatles released the White Album!",
      1967: "The first Super Bowl was played!",
      1966: "Star Trek premiered on TV!",
      1965: "The Beatles performed on The Ed Sullivan Show!",
      1964: "The Beatles arrived in America!",
      1963: "President Kennedy was assassinated.",
      1962: "The first James Bond film was released!",
      1961: "The first human went to space!",
      1960: "The first televised presidential debate!",
      1959: "The first Barbie doll was released!",
      1958: "The first Grammy Awards were held!",
      1957: "The first satellite, Sputnik, was launched!",
      1956: "Elvis Presley became a star!",
      1955: "Disneyland opened!",
      1954: "The first color TV was sold!",
      1953: "The first James Bond novel was published!",
      1952: "The first video game was created!",
      1951: "The first color TV broadcast!",
      1950: "The first credit card was introduced!",
      1949: "The first Emmy Awards were held!",
      1948: "The first TV commercial was aired!",
      1947: "The first transistor was invented!",
      1946: "The first computer was built!",
      1945: "World War II ended!",
      1944: "The first computer bug was found!",
      1943: "The first computer was programmed!",
      1942: "The first nuclear reactor was built!",
      1941: "The first computer was designed!",
      1940: "The first color TV was demonstrated!",
      1939: "The first TV broadcast!",
      1938: "The first superhero, Superman, was created!",
      1937: "The first animated feature film, Snow White, was released!",
      1936: "The first TV was demonstrated!",
      1935: "The first parking meter was installed!",
      1934: "The first drive-in movie theater opened!",
      1933: "The first drive-in restaurant opened!",
      1932: "The first parking meter was invented!",
      1931: "The first drive-in movie theater was patented!",
      1930: "The first drive-in restaurant was opened!",
      1929: "The first Academy Awards were held!",
      1928: "The first Mickey Mouse cartoon was released!",
      1927: "The first talking movie was released!",
      1926: "The first TV was invented!",
      1925: "The first TV broadcast was made!",
      1924: "The first Winter Olympics were held!",
      1923: "The first radio commercial was aired!",
      1922: "The first radio station was licensed!",
      1921: "The first radio broadcast was made!",
      1920: "The first radio station was founded!",
      1919: "The first radio broadcast was made!",
      1918: "World War I ended!",
      1917: "The first radio broadcast was made!",
      1916: "The first radio broadcast was made!",
      1915: "The first radio broadcast was made!",
      1914: "World War I began!",
      1913: "The first crossword puzzle was published!",
      1912: "The Titanic sank!",
      1911: "The first radio broadcast was made!",
      1910: "The first radio broadcast was made!",
      1909: "The first radio broadcast was made!",
      1908: "The first radio broadcast was made!",
      1907: "The first radio broadcast was made!",
      1906: "The first radio broadcast was made!",
      1905: "The first radio broadcast was made!",
      1904: "The first radio broadcast was made!",
      1903: "The first powered flight was made!",
      1902: "The first radio broadcast was made!",
      1901: "The first radio broadcast was made!",
      1900: "The first radio broadcast was made!"
    };

    return {
      daysLived: Math.floor(daysLived),
      heartbeats: Math.floor(heartbeats),
      timesAcrossCountry: Math.floor(timesAcrossCountry * 100) / 100,
      popCultureFact: popCultureFacts[birthYear] || "The world was a different place back then!"
    };
  };

  const handleRevealStats = () => {
    const calculatedStats = calculateStats(age);
    setStats(calculatedStats);
    setShowStats(true);
  };

  const animateCounter = (element, targetValue, duration = 2) => {
    gsap.fromTo(element, 
      { innerHTML: 0 },
      { 
        innerHTML: targetValue,
        duration: duration,
        ease: "power2.out",
        snap: { innerHTML: 1 }
      }
    );
  };

  useEffect(() => {
    if (showStats) {
      const elements = document.querySelectorAll('.counter');
      elements.forEach((element, index) => {
        setTimeout(() => {
          const targetValue = parseInt(element.getAttribute('data-target'));
          animateCounter(element, targetValue);
        }, index * 500);
      });
    }
  }, [showStats]);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
      style={{
        backgroundImage: `linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(99, 102, 241, 0.1))`,
        backgroundSize: "400% 400%"
      }}
    >
      <div ref={backgroundRef} className="absolute inset-0" />
      
      <AnimatePresence mode="wait">
        {!showStats ? (
          <motion.div
            key="input"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center min-h-screen p-4"
          >
            <div className="card w-96 bg-base-100 shadow-2xl border border-white/20 backdrop-blur-sm">
              <div className="card-body text-center">
                <h1 className="text-3xl font-bold text-primary mb-6">Your Life in Stats</h1>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">How old are you?</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                    className="range range-primary range-lg"
                  />
                  <div className="w-full flex justify-between text-xs px-2">
                    <span>1</span>
                    <span>25</span>
                    <span>50</span>
                    <span>75</span>
                    <span>100</span>
                  </div>
                </div>

                <div className="my-6">
                  <span className="text-6xl font-bold text-primary">{age}</span>
                  <span className="text-2xl ml-2">years old</span>
                </div>

                <button
                  onClick={handleRevealStats}
                  className="btn btn-primary btn-lg w-full text-lg font-bold"
                >
                  Reveal My Stats!
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center text-white mb-12"
            >
              Your Life in Numbers
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="card bg-base-100 shadow-xl border border-white/20"
              >
                <div className="card-body text-center">
                  <h2 className="card-title justify-center text-primary">Days Lived</h2>
                  <div className="text-4xl font-bold text-primary counter" data-target={stats.daysLived}>
                    0
                  </div>
                  <p className="text-sm opacity-70">Every day counts!</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="card bg-base-100 shadow-xl border border-white/20"
              >
                <div className="card-body text-center">
                  <h2 className="card-title justify-center text-secondary">Heartbeats</h2>
                  <div className="text-4xl font-bold text-secondary counter" data-target={stats.heartbeats}>
                    0
                  </div>
                  <p className="text-sm opacity-70">Your heart never stops!</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="card bg-base-100 shadow-xl border border-white/20"
              >
                <div className="card-body text-center">
                  <h2 className="card-title justify-center text-accent">Distance Walked</h2>
                  <div className="text-4xl font-bold text-accent counter" data-target={stats.timesAcrossCountry}>
                    0
                  </div>
                  <p className="text-sm opacity-70">Times across the country!</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="card bg-base-100 shadow-xl border border-white/20 lg:col-span-2"
              >
                <div className="card-body text-center">
                  <h2 className="card-title justify-center text-info">Pop Culture Fact</h2>
                  <p className="text-lg font-semibold text-info">{stats.popCultureFact}</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-8"
            >
              <button
                onClick={() => setShowStats(false)}
                className="btn btn-outline btn-primary"
              >
                Calculate Again
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
