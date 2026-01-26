import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsFading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };

    if (document.readyState === 'complete') {
      setTimeout(handleLoad, 500);
    } else {
      window.addEventListener('load', () => setTimeout(handleLoad, 500));
    }

    // Fallback timeout
    const timeout = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => setIsLoading(false), 300);
    }, 2000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-300 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Pizza Icon */}
      <div className="relative">
        <div className="animate-spin-slow">
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            {/* Pizza slice shape */}
            <path
              d="M50 10 L90 80 Q50 95 10 80 Z"
              fill="hsl(var(--primary))"
              stroke="hsl(var(--zayka-charcoal))"
              strokeWidth="2"
            />
            {/* Crust */}
            <path
              d="M10 80 Q50 95 90 80"
              fill="hsl(45 70% 50%)"
              stroke="hsl(var(--zayka-charcoal))"
              strokeWidth="2"
            />
            {/* Pepperoni dots */}
            <circle cx="40" cy="50" r="8" fill="hsl(var(--zayka-red))" />
            <circle cx="60" cy="55" r="7" fill="hsl(var(--zayka-red))" />
            <circle cx="50" cy="70" r="6" fill="hsl(var(--zayka-red))" />
            <circle cx="35" cy="65" r="5" fill="hsl(var(--zayka-red))" />
            <circle cx="65" cy="72" r="5" fill="hsl(var(--zayka-red))" />
          </svg>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 animate-pulse-glow rounded-full" />
      </div>

      {/* Brand name */}
      <h1 className="mt-8 font-urdu text-4xl font-bold text-foreground">
        زائقہ
      </h1>
      <p className="mt-2 text-lg font-medium text-muted-foreground">
        Zayka
      </p>

      {/* Loading dots */}
      <div className="mt-6 flex gap-2">
        <div className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: '0ms' }} />
        <div className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: '150ms' }} />
        <div className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
};

export default LoadingScreen;
