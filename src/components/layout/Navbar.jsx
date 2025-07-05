import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallHeight, setIsSmallHeight] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "About", href: "#about", icon: "💻" },
    { name: "Projects", href: "#projects", icon: "🚀" },
    { name: "Skills", href: "#skills", icon: "⚡" },
    { name: "Blogs", href: "#blogs", icon: "🔬" },
    { name: "Contact", href: "#contact", icon: "📬" },
  ];

  // Optimized resize handler with debouncing
  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    setIsMobile(width < 768);
    setIsSmallHeight(height < 600);
    
    // Close mobile menu when switching to desktop
    if (width >= 1024 && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 20);

    // Update active section - optimized for mobile
    const sections = navItems.map((item) => item.name.toLowerCase());
    let currentSection = "home";

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Adjusted threshold for mobile
        if (rect.top <= 80 && rect.bottom >= 80) {
          currentSection = section;
        }
      }
    }

    setActiveSection(currentSection);
  }, []);

  // Setup event listeners with passive scrolling
  useEffect(() => {
    // Initial setup
    handleResize();
    
    let scrollTimeout;
    const throttledScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        handleScroll();
        scrollTimeout = null;
      }, 10);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [handleResize, handleScroll]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isOpen, isMobile]);

  const handleNavClick = (href, name) => {
    setIsOpen(false);
    setActiveSection(name.toLowerCase());

    // Smooth scroll with offset for mobile
    setTimeout(() => {
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.querySelector(href);
        if (element) {
          const offset = isMobile ? 80 : 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    }, 100);
  };

  // Touch handlers for better mobile interaction
  const handleTouchStart = (e) => {
    // Prevent scroll when touching menu button
    if (e.target.closest('.mobile-menu-button')) {
      e.preventDefault();
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'py-2 bg-black/95 backdrop-blur-lg border-b border-cyan-400/20 shadow-lg shadow-cyan-500/10'
            : 'py-3 sm:py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo - Mobile optimized */}
          <div
            className="group cursor-pointer flex-shrink-0 select-none"
            onClick={() => handleNavClick("#home", "Home")}
          >
            <div className="relative">
              <div className={`${
                isMobile ? 'text-xl' : 'text-2xl sm:text-3xl'
              } font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105 group-active:scale-95`}>
                TK.
              </div>

              {/* Logo glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>

              {/* Subtitle - Hide on small screens */}
              <div className={`${
                isMobile ? 'hidden' : 'block'
              } text-xs text-cyan-300/70 font-mono tracking-wider`}>
                Full-Stack Dev
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.name)}
                className={`relative group px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-1 xl:gap-2 text-sm font-medium tracking-wide">
                  <span className="text-lg">{item.icon}</span>
                  <span className="hidden xl:block">{item.name}</span>
                </span>

                {/* Active indicator */}
                <span
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}

            {/* Resume Button */}
            <Link to="/resume">
              <button className="group relative ml-4 px-4 xl:px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-medium text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2 text-sm">
                  <span>📄</span>
                  <span className="hidden xl:block">Resume</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </Link>
          </div>

          {/* Mobile menu button - Enhanced for touch */}
          <button
            className="mobile-menu-button lg:hidden relative z-50 p-3 -mr-2 text-white hover:text-cyan-400 transition-colors duration-300 flex-shrink-0 touch-manipulation"
            onClick={() => setIsOpen(!isOpen)}
            onTouchStart={handleTouchStart}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45 top-3" : "top-1"
                }`}
              />
              <span
                className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "top-3"
                }`}
              />
              <span
                className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 top-3" : "top-5"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Optimized */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ transform: isOpen ? 'translateZ(0)' : 'translateZ(-1px)' }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content - Full screen on mobile */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-gradient-to-br from-gray-900/98 to-black/98 backdrop-blur-xl border-l border-cyan-400/20 transform transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } overflow-y-auto overscroll-contain`}
        >
          <div className={`flex flex-col h-full ${
            isSmallHeight ? 'pt-16' : 'pt-20'
          } px-4 pb-4 safe-area-inset-bottom`}>
            
            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.name)}
                  className={`group flex items-center gap-4 w-full ${
                    isSmallHeight ? 'py-3' : 'py-4'
                  } px-4 rounded-xl transition-all duration-300 transform active:scale-95 touch-manipulation ${
                    activeSection === item.name.toLowerCase()
                      ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/30"
                      : "text-white/80 hover:text-white hover:bg-white/5 active:bg-white/10"
                  } mb-2`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    minHeight: '56px' // Ensure touch target is large enough
                  }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-lg font-medium">{item.name}</span>

                  {/* Active indicator */}
                  {activeSection === item.name.toLowerCase() && (
                    <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Resume Button */}
            <div className="mt-auto pt-4 border-t border-white/10">
              <Link to="/resume">
                <button 
                  className="group relative w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-semibold text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform active:scale-95 shadow-lg hover:shadow-cyan-500/30 overflow-hidden touch-manipulation"
                  style={{ minHeight: '56px' }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                    <span>📄</span>
                    Resume
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </Link>

              {/* Mobile menu footer */}
              <div className="text-center text-sm text-white/40 pt-4 pb-2">
                <p className="font-medium">Taha Khamessi</p>
                <p>Full-Stack Dev & AI Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}