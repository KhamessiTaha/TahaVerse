import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z', 
      url: 'https://github.com/khamessitaha',
      color: 'hover:text-gray-300',
      bgColor: 'hover:bg-gray-800/50'
    },
    { 
      name: 'LinkedIn', 
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', 
      url: 'https://www.linkedin.com/in/taha-khamessi-396aba1a3/',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-500/10'
    },
    { 
      name: 'Email', 
      icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6', 
      url: 'mailto:taha.khamessi@gmail.com',
      color: 'hover:text-cyan-400',
      bgColor: 'hover:bg-cyan-500/10'
    }
  ];

  const handleSocialClick = (url) => {
    // Add haptic feedback for mobile
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="relative z-10 border-t border-gray-800/30 backdrop-blur-sm">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="relative px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
        {/* Mobile Layout */}
        {isMobile ? (
          <div className="flex flex-col items-center space-y-4">
            {/* Social Links - Top on mobile */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <button
                  key={social.name}
                  onClick={() => handleSocialClick(social.url)}
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className={`group relative p-3 rounded-full transition-all duration-300 transform active:scale-95 touch-manipulation ${social.color} ${social.bgColor} hover:scale-110`}
                  aria-label={social.name}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    minWidth: '48px',
                    minHeight: '48px'
                  }}
                >
                  <svg 
                    className="h-6 w-6 transition-all duration-300 group-hover:drop-shadow-lg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    style={{
                      filter: hoveredSocial === social.name ? 'drop-shadow(0 0 8px currentColor)' : 'none'
                    }}
                  >
                    <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                  </svg>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-full bg-current opacity-0 group-active:opacity-10 transition-opacity duration-200"></div>
                </button>
              ))}
            </div>

            {/* Copyright and tagline */}
            <div className="text-center space-y-2">
              <p className="text-gray-400/90 text-sm font-medium">
                © {currentYear} Taha Khamessi
              </p>
              <p className="text-gray-500 text-xs flex items-center justify-center gap-1.5 flex-wrap">
                <span>Built with</span>
                <span className="text-red-400 animate-pulse text-sm">♥</span>
                <span>passion and</span>
                <span className="text-cyan-400 animate-bounce text-sm">⚡</span>
                <span>innovation</span>
              </p>
            </div>
          </div>
        ) : (
          /* Desktop Layout */
          <div className="flex justify-between items-center">
            {/* Left space for balance */}
            <div className="flex-1"></div>

            {/* Center content */}
            <div className="text-center flex-1">
              <p className="text-gray-400/90 text-sm mb-1 font-medium">
                © {currentYear} Taha Khamessi
              </p>
              <p className="text-gray-500 text-xs flex items-center justify-center gap-1.5">
                <span>Built with</span>
                <span className="text-red-400 animate-pulse">♥</span>
                <span>passion and</span>
                <span className="text-cyan-400 animate-bounce">⚡</span>
                <span>innovation</span>
              </p>
            </div>

            {/* Social Links - Right side on desktop */}
            <div className="flex items-center gap-3 flex-1 justify-end">
              {socialLinks.map((social, index) => (
                <button
                  key={social.name}
                  onClick={() => handleSocialClick(social.url)}
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className={`group relative p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${social.color} ${social.bgColor}`}
                  aria-label={social.name}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <svg 
                    className="h-5 w-5 transition-all duration-300 group-hover:drop-shadow-lg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    style={{
                      filter: hoveredSocial === social.name ? 'drop-shadow(0 0 8px currentColor)' : 'none'
                    }}
                  >
                    <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                  </svg>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    {social.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Subtle animation line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
    </footer>
  );
}