import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const heroRef = useRef();

  const fullText = "Bridging Web Development & Cosmological AI Research";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      return () =>
        heroElement.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const handleScrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      ref={heroRef}
      className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center relative min-h-screen pt-20"
    >
      <div className="max-w-5xl mx-auto relative z-20">
        {/* Main title with enhanced effects */}
        <div className="relative mb-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 relative">
            <span 
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent relative z-20"
              style={{
                textShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
                WebkitTextStroke: '1px rgba(79, 70, 229, 0.3)'
              }}
            >
              Taha Khamessi
            </span>
          </h1>
        </div>

        {/* Professional title */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-cyan-300 font-medium mb-6">
            Full-Stack Developer | AI & Cosmology Researcher
          </p>

          {/* Description with better formatting */}
          <div className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed space-y-4">
            <p>
              {displayText}
              {isTyping && <span className="animate-pulse">|</span>}
            </p>
            <p className="text-cyan-300 font-medium">
              Building the future through code and cosmological research
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 justify-center mt-12">
          <button 
            onClick={handleScrollToProjects}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:scale-105 transition-transform"
          >
            View My Work
          </button>
          <button 
            onClick={handleScrollToContact}
            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 transition-colors"
          >
            Contact Me
          </button>
        </div>
      </div>

      

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </main>
  );
}