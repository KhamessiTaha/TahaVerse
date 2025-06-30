import { Suspense } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Blogs from '../components/sections/Blogs';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import StarsCanvas from '../components/StarsBackground';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white bg-black">
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
          <section id="home" className="relative min-h-screen">
            {/* Video layer - more transparent */}
            <div className="absolute inset-0 z-10 w-[2750px] h-[700px]">
              <Suspense fallback={<div className="w-full h-full bg-black/20" />}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-70 rounded-xl"
                  style={{ 
                    filter: 'contrast(1.4) brightness(1.1) blur(1px)',
                    mixBlendMode: 'overlay'
                  }}
                >
                  <source src="/assets/blackhole.webm" type="video/webm" />
                </video>
                {/* Subtle gradient overlays */}
                
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
  );
}