import { useState, useEffect } from 'react';

const SimpleLoadingScreen = ({ onLoadingComplete, minLoadingTime = 2000 }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 4 + 2;
      });
    }, 30);

    const checkComplete = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (progress >= 100 && elapsed >= minLoadingTime) {
        clearInterval(checkComplete);
        setFadeOut(true);
        setTimeout(() => {
          onLoadingComplete && onLoadingComplete();
        }, 30);
      }
    }, 50);

    return () => {
      clearInterval(progressInterval);
      clearInterval(checkComplete);
    };
  }, [progress, minLoadingTime, onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-300 ${
      fadeOut ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className="text-center">
        {/* WebM Animation */}
        <div className="relative w-46 h-46 mx-auto">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          >
            <source src="/assets/load.webm" type="video/webm" />
            {/* Fallback for browsers that don't support WebM */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
            </div>
          </video>
        </div>
      </div>
    </div>
  );
};

export default SimpleLoadingScreen;