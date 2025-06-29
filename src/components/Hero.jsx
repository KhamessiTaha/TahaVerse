import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const heroRef = useRef();

  const fullText = "Exploring the Cosmos of AI & Deep Learning";

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

  const skills = [
    { name: "Neural Networks", icon: "🧠", color: "from-cyan-400 to-blue-500" },
    {
      name: "Computer Vision",
      icon: "👁️",
      color: "from-blue-500 to-purple-500",
    },
    { name: "NLP", icon: "💬", color: "from-purple-500 to-pink-500" },
    { name: "MLOps", icon: "⚙️", color: "from-pink-500 to-cyan-400" },
  ];

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
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main title with enhanced effects */}
        <div className="relative mb-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent relative z-10">
              Taha Khamessi
            </span>

            {/* Holographic background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 blur-xl animate-pulse"></div>

            {/* Glitch effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent opacity-0 hover:opacity-20 transition-opacity duration-300 transform scale-105"></div>
          </h1>
        </div>

        {/* Animated subtitle */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <p className="text-2xl md:text-4xl text-white/90 font-light">
            {displayText}
            {isTyping && <span className="animate-pulse text-cyan-400">|</span>}
          </p>
        </div>

        {/* Professional title */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-cyan-300 font-medium mb-6">
            AI Researcher & Deep Learning Engineer
          </p>

          {/* Enhanced skill tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group px-6 py-3 bg-gradient-to-r ${skill.color} bg-opacity-20 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:scale-110 hover:bg-opacity-30 transition-all duration-300 cursor-default relative overflow-hidden`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <span className="mr-2">{skill.icon}</span>
                <span>{skill.name}</span>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </div>
            ))}
          </div>

          {/* Description with better formatting */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Pushing the boundaries of artificial intelligence through
            cutting-edge research and practical applications.
            <span className="text-cyan-300">
              {" "}
              Building the future, one neural network at a time.
            </span>
          </p>
        </div>

        {/* Enhanced call-to-action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <button
            onClick={handleScrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-semibold text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>🚀</span>
              Explore My Research
            </span>

            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

            {/* Button glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10 scale-110"></div>
          </button>

          <button
            onClick={handleScrollToContact}
            className="group relative px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400/10 hover:border-cyan-400/80 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>💫</span>
              Let's Collaborate
            </span>

            {/* Button highlight effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-cyan-400/20 to-cyan-400/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
        </div>

        {/* Scroll indicator with animation */}
        <div className="animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-sm font-mono">scroll down</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <div className="w-px h-8 bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
          </div>
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
