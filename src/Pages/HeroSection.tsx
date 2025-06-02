import React, { useState, useEffect } from "react";
import Adobe from "../assets/Adobe Express - file.png";
import { useTheme } from "../context/ThemeProvider";
import Style from "../Style/HeroSection.module.css"
import {Link} from "react-router-dom";
export default function HeroSection() {
  const { theme } = useTheme();
  const shapeColor = theme === "dark" ? "#22c55e" : "#22c55e";

  const fullText = "Hello, I am a MERN stack developer";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index + 1 === fullText.length) {
          setIsDeleting(true);
        }
      } else {
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  return (
   <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 py-10 gap-8 md:gap-0">
  {/* Image Section */}
  <div className="relative w-full  md:w-1/2 flex justify-center items-center mb-8 sm:mb-10 md:mb-0 md:-mt-8">
    <svg
      viewBox="0 0 400 300"
      className="absolute w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 z-0"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
      }}
    >
      <defs>
        <filter id="grunge">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" />
        </filter>

        <filter id="greenGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#22c55e" floodOpacity="0.4" />
        </filter>
      </defs>

      <rect
        x="20"
        y="20"
        width="360"
        height="260"
        rx="30"
        ry="30"
        fill={shapeColor}
        filter="url(#grunge) url(#greenGlow)"
      />
    </svg>

    <img
      src={Adobe}
      alt="Profile Picture"
      className="z-10 relative rounded-xl shadow-1xl p-2 mb-10 w-52 sm:w-62 md:w-76"
    />
  </div>

  {/* Text Section */}
  <div className="w-full  md:w-1/2 text-center md:text-left md:mt-10">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-green-700 dark:text-green">
      M.Ali Shakeel
    </h1>

    <h2 className="font-bold mb-4 text-green-700 dark:text-green min-h-[32px]">
      {displayedText}
      <span className="border-r-2 border-green-700 dark:border-white animate-pulse ml-1"></span>
    </h2>

    <p className={`max-w-xl mx-auto md:mx-0 ${theme === "dark" ? "text-white" : "text-black"}`}>
      I'm passionate about building full-stack web applications using MongoDB,
      Express, React, and Node.js. I enjoy solving real-world problems and
      collaborating with teams to deliver scalable solutions.
    </p>
<Link to="/projects">
  <button
      className={`mt-6 px-6 py-3 rounded-full font-semibold transition-all duration-300 
        ${
          theme === "dark"
            ? "bg-white text-green-600 hover:bg-gray-200"
            : "bg-green-600 text-white hover:bg-green-700"
        }`}

    >
      Explore My Work
    </button>
</Link>
  
  </div>
</section>

  );
}
