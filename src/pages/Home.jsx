import { Suspense } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/layout/Footer';
import StarsBackground from '../components/StarsBackground';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white bg-black">
      <StarsBackground />
      
      {/* Background Elements */}
      <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
        {/* Black hole video - made brighter and less transparent */}
        <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70 scale-110"  // Increased opacity from 40 to 70
            style={{ 
              filter: 'contrast(1.2) brightness(1.1)',  // Increased brightness from 0.8 to 1.1
              mixBlendMode: 'screen'
            }}
          >
            <source src="/assets/blackhole.webm" type="video/webm" />
            <source src="/assets/blackhole.mp4" type="video/mp4" />
          </video>
          
          {/* Adjusted gradient overlays to work with brighter video */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-purple-900/20"></div>
        </div>
      </Suspense>

      {/* Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}