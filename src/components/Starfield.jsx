import React, { useRef, useEffect, useState } from 'react';

const Starfield = () => {
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
    let shootingStars = [];
    let nebulae = [];
    const numStars = 500; // Increased star count
    const starLayers = 3; // Parallax effect layers

    // Improved color palette
    const starColors = [
      'rgba(255, 255, 255, ALPHA)', // White
      'rgba(200, 220, 255, ALPHA)', // Cool blue
      'rgba(255, 220, 180, ALPHA)', // Warm yellow
      'rgba(180, 220, 255, ALPHA)'  // Blue-white
    ];

    // Handle window resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
      initStars();
      initNebulae();
    };

    // Initialize star layers with parallax effect
    const initStars = () => {
      stars = [];
      for (let layer = 0; layer < starLayers; layer++) {
        const layerStars = Array.from({ length: numStars / starLayers }, () => ({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          radius: Math.random() * (1 + layer * 0.5), // Bigger stars in front
          alpha: Math.random() * 0.8 + 0.2,
          speed: (Math.random() * 0.5 + 0.1) * (1 + layer * 0.3), // Faster in front
          twinkle: Math.random() * 0.02 + 0.01,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          layer
        }));
        stars.push(...layerStars);
      }
    };

    // Create subtle nebula clouds
    const initNebulae = () => {
      nebulae = Array.from({ length: 3 }, () => ({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        radius: Math.random() * 300 + 100,
        color: `rgba(${Math.floor(Math.random() * 30 + 30)}, ${
          Math.floor(Math.random() * 30 + 30)
        }, ${Math.floor(Math.random() * 50 + 50)}, ${
          Math.random() * 0.03 + 0.01
        })`
      }));
    };

    // Enhanced shooting stars with tails
    const createShootingStar = () => {
      if (Math.random() < 0.002) { // Slightly less frequent but more dramatic
        const angle = Math.random() * Math.PI / 4 + Math.PI / 8; // 22.5-67.5 degree angle
        shootingStars.push({
          x: -50,
          y: Math.random() * dimensions.height * 0.5,
          angle,
          speed: Math.random() * 5 + 5,
          length: Math.random() * 100 + 50,
          opacity: 1,
          decay: Math.random() * 0.008 + 0.005,
          tail: Array.from({ length: 10 }, (_, i) => ({
            opacity: 1 - i * 0.1,
            length: Math.random() * 20 + 10
          }))
        });
      }
    };

    // Draw nebula clouds
    const drawNebulae = () => {
      for (const nebula of nebulae) {
        const gradient = ctx.createRadialGradient(
          nebula.x,
          nebula.y,
          0,
          nebula.x,
          nebula.y,
          nebula.radius
        );
        gradient.addColorStop(0, nebula.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Slow drift
        nebula.x += 0.05;
        nebula.y += 0.02;
        if (nebula.x > dimensions.width + nebula.radius) nebula.x = -nebula.radius;
        if (nebula.y > dimensions.height + nebula.radius) nebula.y = -nebula.radius;
      }
    };

    // Draw stars with parallax effect
    const drawStars = () => {
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        
        // Twinkle effect
        star.alpha += star.twinkle;
        if (star.alpha > 1 || star.alpha < 0.2) star.twinkle = -star.twinkle;
        
        // Apply color with current alpha
        ctx.fillStyle = star.color.replace('ALPHA', star.alpha);
        ctx.fill();
        
        // Parallax movement
        star.y += star.speed;
        if (star.y > dimensions.height) {
          star.y = 0;
          star.x = Math.random() * dimensions.width;
        }
      }
    };

    // Draw enhanced shooting stars with tails
    const drawShootingStars = () => {
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        
        // Draw tail segments
        for (let j = star.tail.length - 1; j >= 0; j--) {
          const segment = star.tail[j];
          const segmentX = star.x - Math.cos(star.angle) * star.speed * j * 2;
          const segmentY = star.y - Math.sin(star.angle) * star.speed * j * 2;
          
          ctx.beginPath();
          ctx.moveTo(segmentX, segmentY);
          ctx.lineTo(
            segmentX - Math.cos(star.angle) * segment.length,
            segmentY - Math.sin(star.angle) * segment.length
          );
          ctx.strokeStyle = `rgba(255, 255, 255, ${segment.opacity * star.opacity})`;
          ctx.lineWidth = 1 + (j / star.tail.length) * 2;
          ctx.stroke();
        }
        
        // Update position and opacity
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= star.decay;
        
        // Remove when faded out or off screen
        if (star.opacity <= 0 || 
            star.x > dimensions.width + 100 || 
            star.y > dimensions.height + 100) {
          shootingStars.splice(i, 1);
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Draw background elements
      drawNebulae();
      drawStars();
      drawShootingStars();
      
      // Create new shooting stars occasionally
      if (Math.random() < 0.01) createShootingStar();
      
      animationFrameId = requestAnimationFrame(render);
    };

    // Initialize and start animation
    initStars();
    initNebulae();
    render();

    // Event listeners
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

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