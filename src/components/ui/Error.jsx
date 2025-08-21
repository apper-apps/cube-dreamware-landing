import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ 
  className, 
  title = "Something went wrong",
  message = "We encountered an error while loading this content. Please try again.",
  onRetry,
  variant = "default"
}) => {
  if (variant === "hero") {
    return (
      <div className={cn("min-h-screen bg-midnight flex items-center justify-center", className)}>
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ApperIcon name="AlertTriangle" size={48} className="text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">{title}</h1>
          <p className="text-white/70 mb-8 leading-relaxed">{message}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-3 rounded-lg font-medium transition-colors magnetic-btn"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("bg-dark-gray/30 border border-red-500/20 rounded-xl p-8 text-center", className)}>
      <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <ApperIcon name="AlertTriangle" size={32} className="text-red-500" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white/70 mb-6 leading-relaxed">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-2 rounded-lg font-medium transition-colors magnetic-btn"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default Error;