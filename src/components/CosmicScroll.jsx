import { useEffect } from 'react';

const CosmicScroll = ({ children }) => {
  useEffect(() => {
    // Optional scroll progress indicator effect
    const updateScrollProgress = () => {
      const scrollProgress = document.querySelector('.scroll-progress');
      if (scrollProgress) {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const progressWidth = (scrollPosition / scrollTotal) * 100;
        scrollProgress.style.width = `${progressWidth}%`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      {/* Optional scroll progress indicator */}
      <div className="scroll-progress" />
      
      {children}

      {/* Inject global styles */}
      <style jsx global>{`
        :root {
          scrollbar-width: thin;
          scrollbar-color: #7e22ce #1e1b4b;
        }

        /* WebKit browsers */
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #1e1b4b;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #7e22ce, #3b82f6);
          border-radius: 10px;
          border: 2px solid #1e1b4b;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #9333ea, #2563eb);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Scroll indicator */
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          width: 0%;
          height: 4px;
          background: linear-gradient(to right, #7e22ce, #3b82f6);
          z-index: 1000;
          transition: width 0.1s ease-out;
        }
      `}</style>
    </>
  );
};

export default CosmicScroll;