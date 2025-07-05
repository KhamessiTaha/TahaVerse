import { Suspense, useState, useEffect, useCallback, useMemo } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Blogs from '../components/sections/Blogs';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import StarsCanvas from '../components/StarsBackground';
import CosmicLoadingScreen from '../components/CosmicLoadingScreen';

// Custom hook for video preloading
const useVideoPreloader = (src) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (!src) return;

    const video = document.createElement('video');
    video.src = src;
    video.preload = 'metadata';
    video.muted = true; // Ensure autoplay works
    
    const handleCanPlayThrough = () => {
      setVideoLoaded(true);
      setVideoError(false);
    };

    const handleLoadedData = () => {
      setVideoLoaded(true);
      setVideoError(false);
    };

    const handleError = () => {
      setVideoError(true);
      setVideoLoaded(false);
      console.warn('Video failed to load:', src);
    };

    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    
    // Start loading
    video.load();
    
    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [src]);

  return { videoLoaded, videoError };
};

// Enhanced video component with better error handling
const BackgroundVideo = ({ src, onLoad, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleCanPlay = useCallback(() => {
    setIsPlaying(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    console.warn('Background video failed to load');
  }, []);

  if (hasError) {
    return (
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-black/40 ${className}`}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)'
        }}
        role="img"
        aria-label="Cosmic background"
      />
    );
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className={`w-full h-full object-cover transition-opacity duration-1000 ${
        isPlaying ? 'opacity-70' : 'opacity-0'
      } ${className}`}
      style={{ 
        filter: 'contrast(1.4) brightness(1.1) blur(1px)',
        mixBlendMode: 'overlay'
      }}
      onCanPlayThrough={handleCanPlay}
      onLoadedData={handleCanPlay}
      onError={handleError}
      aria-hidden="true"
    >
      <source src={src} type="video/webm" />
    </video>
  );
};

// Loading fallback component
const VideoFallback = () => (
  <div 
    className="w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 animate-pulse"
    role="img"
    aria-label="Loading cosmic background"
  />
);

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const videoSrc = '/assets/blackhole.webm';
  const { videoLoaded, videoError } = useVideoPreloader(videoSrc);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Handle content initialization
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setShowLoading(false);
  }, []);

  const handleVideoLoad = useCallback(() => {
    // Additional logic when video loads if needed
  }, []);

  // Memoize section configuration
  const sections = useMemo(() => [
    { id: 'home', component: Hero, className: 'relative min-h-screen mb-40' },
    { id: 'about', component: About, className: 'relative min-h-screen py-20' },
    { id: 'projects', component: FeaturedProjects, className: 'relative min-h-screen py-20' },
    { id: 'skills', component: Skills, className: 'relative min-h-screen py-20' },
    { id: 'blogs', component: Blogs, className: 'relative min-h-screen py-20' },
    { id: 'contact', component: Contact, className: 'relative min-h-screen py-20' }
  ], []);

  // Render background with your friend's transparency technique
  const renderBackground = () => {
    if (reducedMotion || videoError) {
      return (
        <div 
          className="absolute inset-0 z-10 w-full h-full bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-black/40"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)'
          }}
          role="img"
          aria-label="Cosmic background"
        />
      );
    }

    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Suspense fallback={<VideoFallback />}>
          <BackgroundVideo 
            src={videoSrc}
            onLoad={handleVideoLoad}
          />
          
          {/* Fallback background while video loads */}
          {!videoLoaded && (
            <div 
              className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-black/40 animate-pulse"
              style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)'
              }}
              role="img"
              aria-label="Loading cosmic background"
            />
          )}
        </Suspense>
      </div>
    );
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
      >
        Skip to main content
      </a>

      {/* Home page content */}
      <div 
        className={`relative w-full min-h-screen overflow-hidden text-white bg-black transition-opacity duration-1000 ${
          contentReady ? 'opacity-100' : 'opacity-0'
        }`}
        role="main"
      >
        {/* Background star layer (lowest layer) */}
        <div className="fixed inset-0 z-0" aria-hidden="true">
          <StarsCanvas />
        </div>
        
        {/* Content (middle layer) */}
        <div className="relative z-20 flex flex-col min-h-screen">
          <Navbar />
          
          {/* Main content sections */}
          <main id="main-content" className="flex-1">
            {sections.map(({ id, component: Component, className }, index) => (
              <section 
                key={id} 
                id={id} 
                className={className}
                aria-labelledby={`${id}-heading`}
              >
                {/* Special handling for hero section with video background */}
                {id === 'home' && renderBackground()}
                
                {/* Section content */}
                <div className={id === 'home' ? 'relative z-20' : ''}>
                  <Component />
                </div>
              </section>
            ))}
          </main>

          <Footer />
        </div>

        {/* Enhanced styles with better mobile support */}
        <style jsx>{`
          @keyframes twinkle {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
          }
          
          /* Video positioning like your friend's approach */
          video {
            /* The rotate-180 and top offset create the transparency effect */
            /* No additional transforms needed as it's handled in className */
          }
          
          @media (max-width: 768px) {
            video {
              object-position: center center;
              /* Adjust top offset for mobile if needed */
              top: -200px;
            }
          }
          
          /* Reduce motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
          
          /* Screen reader only utility */
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
          
          .focus\\:not-sr-only:focus {
            position: static;
            width: auto;
            height: auto;
            padding: 0.5rem 1rem;
            margin: 0;
            overflow: visible;
            clip: auto;
            white-space: normal;
          }
        `}</style>
      </div>

      {/* Loading screen overlay */}
      {showLoading && (
        <CosmicLoadingScreen 
          onLoadingComplete={handleLoadingComplete}
          minLoadingTime={2500}
        />
      )}
    </>
  );
}