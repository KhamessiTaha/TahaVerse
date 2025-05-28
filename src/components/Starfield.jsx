import React, { useRef, useEffect, useState } from 'react';
const Starfield = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    let shootingStars = [];
    const numStars = 300;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      stars = Array.from({ length: numStars }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.5 + 0.1,
        twinkle: Math.random() * 0.02 + 0.01,
      }));
    };

    const createShootingStar = () => {
      if (Math.random() < 0.003) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: 0,
          length: Math.random() * 80 + 20,
          speed: Math.random() * 3 + 2,
          opacity: 1,
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw regular stars
      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        star.alpha += star.twinkle;
        if (star.alpha > 1 || star.alpha < 0.2) star.twinkle = -star.twinkle;
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
        
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      }

      // Draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.length, star.y - star.length);
        ctx.strokeStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        star.x += star.speed;
        star.y += star.speed;
        star.opacity -= 0.01;
        
        if (star.opacity <= 0 || star.x > canvas.width) {
          shootingStars.splice(i, 1);
        }
      }
    };

    const animate = () => {
      createShootingStar();
      drawStars();
      requestAnimationFrame(animate);
    };

    resize();
    createStars();
    animate();
    window.addEventListener("resize", () => {
      resize();
      createStars();
    });
    
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};
export default Starfield;