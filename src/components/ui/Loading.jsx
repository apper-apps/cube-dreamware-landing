import React from "react";
import { cn } from "@/utils/cn";

const Loading = ({ className, variant = "default" }) => {
  if (variant === "hero") {
    return (
      <div className={cn("min-h-screen bg-midnight", className)}>
        <div className="container mx-auto px-5 sm:px-10 lg:px-20">
          {/* Navigation Skeleton */}
          <div className="flex items-center justify-between py-6">
            <div className="w-32 h-8 bg-dark-gray rounded shimmer"></div>
            <div className="hidden lg:flex items-center space-x-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-16 h-6 bg-dark-gray rounded shimmer"></div>
              ))}
            </div>
            <div className="w-24 h-10 bg-dark-gray rounded-lg shimmer"></div>
          </div>
          
          {/* Hero Content Skeleton */}
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <div className="w-full max-w-4xl space-y-6">
              <div className="w-full h-16 bg-dark-gray rounded shimmer"></div>
              <div className="w-3/4 h-16 bg-dark-gray rounded shimmer mx-auto"></div>
              <div className="w-full max-w-2xl h-6 bg-dark-gray rounded shimmer mx-auto"></div>
              <div className="w-3/4 max-w-xl h-6 bg-dark-gray rounded shimmer mx-auto"></div>
              
              {/* Benefit Pills Skeleton */}
              <div className="flex flex-wrap justify-center gap-4 mt-12">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-48 h-12 bg-dark-gray rounded-full shimmer"></div>
                ))}
              </div>
              
              {/* CTA Buttons Skeleton */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <div className="w-64 h-14 bg-dark-gray rounded-lg shimmer"></div>
                <div className="w-48 h-14 bg-dark-gray rounded-lg shimmer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className={cn("py-20", className)}>
        <div className="container mx-auto px-5 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <div className="w-96 h-12 bg-dark-gray rounded shimmer mx-auto mb-6"></div>
            <div className="w-2/3 h-6 bg-dark-gray rounded shimmer mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-dark-gray/50 border border-medium-gray rounded-xl p-8">
                <div className="w-12 h-12 bg-dark-gray rounded-lg shimmer mb-6"></div>
                <div className="w-full h-8 bg-dark-gray rounded shimmer mb-4"></div>
                <div className="w-full h-6 bg-dark-gray rounded shimmer mb-2"></div>
                <div className="w-3/4 h-6 bg-dark-gray rounded shimmer"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center justify-center p-8", className)}>
      <div className="flex items-center space-x-4">
        <div className="w-6 h-6 border-2 border-accent-blue border-t-transparent rounded-full animate-spin"></div>
        <span className="text-white/70">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;