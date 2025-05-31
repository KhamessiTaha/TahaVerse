import React, { useRef, useEffect, useState } from 'react';

const Starfield = ({ starDensity = 1 }) => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    const starCount = Math.floor(dimensions.width * dimensions.height * 0.0002 * starDensity);

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    const initStars = () => {
      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        radius: Math.random() * 1.5,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.3 + 0.1,
        twinkleSpeed: Math.random() * 0.02 + 0.01
      }));
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Draw subtle cosmic gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, dimensions.height);
      gradient.addColorStop(0, '#0a0e17');
      gradient.addColorStop(1, '#020204');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);
      
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        
        // Twinkle effect
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < 0.3) star.twinkleSpeed = -star.twinkleSpeed;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
        
        // Movement
        star.y += star.speed;
        if (star.y > dimensions.height) {
          star.y = 0;
          star.x = Math.random() * dimensions.width;
        }
      }
      
      animationFrameId = requestAnimationFrame(drawStars);
    };

    initStars();
    drawStars();

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions, starDensity]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
    />
  );
};

export default Starfield;