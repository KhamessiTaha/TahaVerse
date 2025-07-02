import { Suspense, useState, useEffect } from 'react';
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

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  // Preload video and handle loading states
  useEffect(() => {
    const video = document.createElement('video');
    video.src = '/assets/blackhole.webm';
    video.preload = 'auto';
    
    const handleCanPlayThrough = () => {
      setVideoLoaded(true);
    };

    const handleLoadedData = () => {
      setVideoLoaded(true);
    };

    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('loadeddata', handleLoadedData);
    
    // Start loading immediately
    video.load();
    
    // Allow content to render after a brief delay
    setTimeout(() => {
      setContentReady(true);
    }, 100);
    
    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  return (
    <>
      {/* Home page content - always rendered */}
      <div className={`relative w-full min-h-screen overflow-hidden text-white bg-black transition-opacity duration-1000 ${
        contentReady ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Background star layer (lowest layer) */}
        <div className="fixed inset-0 z-0">
          <StarsCanvas />
        </div>
        
        {/* Content (middle layer) */}
        <div className="relative z-20 flex flex-col min-h-screen">
          <Navbar />
          
          {/* Main content sections */}
          <main className="flex-1">
            {/* Hero Section with layered video and stars */}
            <section id="home" className="relative min-h-screen mb-40">
              {/* Video layer - more transparent */}
              <div className="absolute inset-0 z-10 w-[2750px] h-[1050px] -translate-y-50">
                <Suspense fallback={
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 animate-pulse" />
                }>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className={`w-full h-full object-cover rounded-xl transition-opacity duration-1000 ${
                      videoLoaded ? 'opacity-70' : 'opacity-0'
                    }`}
                    style={{ 
                      filter: 'contrast(1.4) brightness(1.1) blur(1px)',
                      mixBlendMode: 'overlay'
                    }}
                    onCanPlayThrough={() => setVideoLoaded(true)}
                    onLoadedData={() => setVideoLoaded(true)}
                  >
                    <source src="/assets/blackhole.webm" type="video/webm" />
                  </video>
                  
                  {/* Fallback background while video loads */}
                  {!videoLoaded && (
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-black/40 animate-pulse"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)'
                      }}
                    />
                  )}
                </Suspense>
              </div>
              
              <Hero />
            </section>

            {/* About Section */}
            <section id="about" className="relative min-h-screen py-20">
              <About />
            </section>

            {/* Featured Projects Section */}
            <section id="projects" className="relative min-h-screen py-20">
              <FeaturedProjects />
            </section>

            {/* Skills Section */}
            <section id="skills" className="relative min-h-screen py-20">
              <Skills />
            </section>

            {/* Blogs Section */}
            <section id="blogs" className="relative min-h-screen py-20">
              <Blogs />
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative min-h-screen py-20">
              <Contact />
            </section>
          </main>

          <Footer />
        </div>

        {/* CSS for star animations */}
        <style jsx>{`
          @keyframes twinkle {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
          }
        `}</style>
      </div>

      {/* Loading screen overlay - only shows when loading */}
      {showLoading && (
        <CosmicLoadingScreen 
          onLoadingComplete={handleLoadingComplete}
          minLoadingTime={2500} // Minimum 2.5 seconds of loading
        />
      )}
    </>
  );
}