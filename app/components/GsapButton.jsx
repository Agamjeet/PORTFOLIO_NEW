'use client';
import { useRef } from "react";
import gsap from "gsap";

export default function RadialFillButton({
  text = "Hover Me",
  startColor = "#ffffff",
  fillColor = "#000000",
  textColor = "#000000",
  fillTextColor = "#ffffff",
  size = "default",
  onClick = () => {}
}) {
  const btnRef = useRef(null);
  const circleRef = useRef(null);

  const sizeClasses = {
    xs: "px-3 py-2 text-sm w-[120px] h-[40px]",
    small: "px-3 py-2 text-sm w-[120px] h-[40px] sm:px-6 sm:py-3 sm:text-base sm:w-[200px] sm:h-[50px]",
    default: "px-8 py-4 text-lg w-[280px] h-[60px]",
    large: "px-8 py-4 text-lg w-[320px] h-[80px]"
  };

  const handleEnter = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.set(circleRef.current, {
      left: x,
      top: y,
      backgroundColor: fillColor
    });

    gsap.to(circleRef.current, {
      scale: 20,
      duration: 0.5,
      ease: "power2.out"
    });

    gsap.to(btnRef.current, {
      color: fillTextColor,
      duration: 0.3
    });
  };

  const handleMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.set(circleRef.current, {
      left: x,
      top: y
    });
  };

  const handleLeave = () => {
    gsap.to(circleRef.current, {
      scale: 0,
      duration: 0.5,
      ease: "power2.in"
    });

    gsap.to(btnRef.current, {
      color: textColor,
      duration: 0.3
    });
  };

  return (
    <button
      ref={btnRef}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={`relative overflow-hidden rounded-lg font-bold border-2 border-white/30 ${sizeClasses[size]}`}
      style={{
        backgroundColor: startColor,
        color: textColor
      }}
    >
      <span className="relative z-10">{text}</span>
      <span
        ref={circleRef}
        className="absolute w-4 h-4 rounded-full scale-0"
        style={{
          transformOrigin: "center",
          backgroundColor: fillColor
        }}
      ></span>
    </button>
  );
}
