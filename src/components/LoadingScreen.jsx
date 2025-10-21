import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isLoading, onComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-grafito flex items-center justify-center">
      {/* Main Content */}
      <div className="text-center">
        {/* Logo con barra circular */}
        <div className="mb-8 relative">
          {/* Barra circular de progreso */}
          <div className="relative w-32 h-32 mx-auto">
            {/* Círculo de fondo */}
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-grafito-soft"
              />
              {/* Círculo de progreso */}
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 50}`}
                strokeDashoffset={`${2 * Math.PI * 50 * (1 - progress / 100)}`}
                className="transition-all duration-300 ease-out"
              />
              {/* Gradiente */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#CBEA6A" />
                  <stop offset="100%" stopColor="#CFAF6A" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Logo centrado */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://horizons-cdn.hostinger.com/7374c107-f8ac-4061-8bc8-58e7fc5c4c31/eb54702e245d3090dadd93563340f94b.png" 
                alt="BWAY Productions Logo" 
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-white mb-4 font-montserrat">
          Cargando experiencias visuales...
        </h2>

        {/* Progress Percentage */}
        <span className="text-lime-accent font-bold text-lg">
          {Math.floor(progress)}%
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
