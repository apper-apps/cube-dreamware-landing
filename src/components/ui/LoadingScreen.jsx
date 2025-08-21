import React from 'react';
import { cn } from '@/utils/cn';

const LoadingScreen = ({ isVisible }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 bg-midnight z-50 flex items-center justify-center transition-opacity duration-1000",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-purple/5" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-purple/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 text-center">
        {/* Dreamware Logo */}
        <div className="mb-8 animate-logo-fade-in">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto animate-logo-pulse"
          >
            {/* Logo Background Circle */}
            <circle
              cx="60"
              cy="60"
              r="58"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            
            {/* Dreamware 'D' Symbol */}
            <path
              d="M40 30 L40 90 L70 90 C82 90 90 82 90 70 L90 50 C90 38 82 30 70 30 L40 30 Z M48 38 L70 38 C77 38 82 43 82 50 L82 70 C82 77 77 82 70 82 L48 82 L48 38 Z"
              fill="url(#gradient)"
              className="animate-logo-fade-in"
            />
            
            {/* Tech Circuit Lines */}
            <path
              d="M25 25 L35 25 M85 25 L95 25 M25 95 L35 95 M85 95 L95 95"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-pulse"
            />
            
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Loading Text */}
        <div className="animate-logo-fade-in" style={{ animationDelay: '500ms' }}>
          <h2 className="text-2xl font-bold gradient-text mb-4">Dreamware</h2>
          <p className="text-white/60 text-sm">Loading your experience...</p>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-1 mt-6 animate-logo-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="w-2 h-2 bg-accent-blue rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-accent-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-accent-blue rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;