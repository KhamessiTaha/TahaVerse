import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  const navItems = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "About", href: "#about", icon: "👨‍💻" },
    { name: "Projects", href: "#projects", icon: "🚀" },
    { name: "Skills", href: "#skills", icon: "⚡" },
    { name: "Blogs", href: "#blogs", icon: "🔬" },
    { name: "Contact", href: "#contact", icon: "📬" },
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
      
      // Close mobile menu on resize to larger screen
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.name.toLowerCase());
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (href, name) => {
    setIsOpen(false);
    setActiveSection(name.toLowerCase());

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Dynamic sizing based on screen dimensions
  const isSmallHeight = windowDimensions.height < 600;
  const isVerySmallWidth = windowDimensions.width < 375;
  const isMediumScreen = windowDimensions.width >= 768 && windowDimensions.width < 1024;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? `${isSmallHeight ? 'py-2' : 'py-3'} bg-purple/100 backdrop-blur-md border-b border-cyan-400/20 shadow-lg shadow-cyan-500/10`
            : `${isSmallHeight ? 'py-3' : 'py-4'} bg-transparent`
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 flex justify-between items-center">
          {/* Enhanced Logo - Responsive sizing */}
          <div
            className="group cursor-pointer flex-shrink-0"
            onClick={() => handleNavClick("#home", "Home")}
          >
            <div className="relative">
              <div className={`${
                isVerySmallWidth ? 'text-xl' : isSmallHeight ? 'text-2xl' : 'text-2xl sm:text-3xl'
              } font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105`}>
                TK.
              </div>

              {/* Logo glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>

              {/* Subtitle - Hide on very small screens */}
              <div className={`${
                isVerySmallWidth ? 'hidden' : 'block'
              } text-xs text-cyan-300/70 font-mono tracking-wider`}>
                Full-Stack Dev
              </div>
            </div>
          </div>

          {/* Desktop Navigation - More responsive breakpoints */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.name)}
                className={`relative group px-2 xl:px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-medium tracking-wide">
                  <span className="text-sm xl:text-lg">{item.icon}</span>
                  <span className={`${windowDimensions.width < 1200 ? 'hidden xl:block' : 'block'}`}>
                    {item.name}
                  </span>
                </span>

                {/* Active indicator */}
                <span
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />

                {/* Hover glow */}
                <div className="absolute inset-0 bg-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            ))}

            {/* Resume Button - Responsive sizing */}
            <Link to="/resume">
              <button className="group relative ml-2 xl:ml-4 px-3 xl:px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-medium text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 overflow-hidden">
                <span className="relative z-10 flex items-center gap-1 xl:gap-2 text-xs xl:text-sm">
                  <span>📄</span>
                  <span className={`${windowDimensions.width < 1200 ? 'hidden xl:block' : 'block'}`}>
                    Resume
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </Link>
          </div>

          {/* Mobile menu button - Responsive sizing */}
          <button
            className="lg:hidden relative z-50 p-2 text-white hover:text-cyan-400 transition-colors duration-300 flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className={`${isVerySmallWidth ? 'w-5 h-5' : 'w-6 h-6'} relative`}>
              <span
                className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? "rotate-45 top-2.5" : isVerySmallWidth ? "top-1" : "top-1"
                }`}
              />
              <span
                className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? "opacity-0" : isVerySmallWidth ? "top-2" : "top-2.5"
                }`}
              />
              <span
                className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 top-2.5" : isVerySmallWidth ? "top-3.5" : "top-4"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Responsive dimensions */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content - Dynamic width and positioning */}
        <div
          className={`absolute right-0 top-0 h-full ${
            isVerySmallWidth ? 'w-full' : windowDimensions.width < 480 ? 'w-full' : 'w-80'
          } max-w-full bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border-l border-cyan-400/20 transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } overflow-y-auto`}
        >
          <div className={`flex flex-col h-full ${
            isSmallHeight ? 'pt-16' : 'pt-20'
          } px-4 sm:px-6 pb-4`}>
            
            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.name)}
                  className={`group flex items-center gap-3 w-full ${
                    isSmallHeight ? 'py-3' : 'py-4'
                  } px-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.name.toLowerCase()
                      ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/30"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  } mb-2`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className={`${isSmallHeight ? 'text-xl' : 'text-2xl'}`}>{item.icon}</span>
                  <span className={`${
                    isSmallHeight ? 'text-lg' : 'text-xl'
                  } font-medium`}>{item.name}</span>

                  {/* Mobile item glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </button>
              ))}
            </div>

            {/* Mobile Resume Button */}
            <div className="mt-auto">
              <Link to="/resume">
                <button className="group relative w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-semibold text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 overflow-hidden mb-4">
                  <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                    <span>📄</span>
                    Resume
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </Link>

              {/* Mobile menu footer */}
              <div className="text-center text-sm text-white/40 pb-2">
                <p>Taha Khamessi</p>
                <p>AI Engineer & Researcher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}