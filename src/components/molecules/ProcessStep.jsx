import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ProcessStep = ({ number, title, description, icon, isLast = false, delay = 0 }) => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={cn(
        "flex gap-6 animate-in-view",
        hasIntersected && "in-view"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Number and Line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-purple rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl font-bold text-white">{number}</span>
        </div>
        {!isLast && (
          <div className="w-0.5 h-20 bg-gradient-to-b from-accent-blue/50 to-transparent"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-6 text-accent-blue">
            <ApperIcon name={icon} size={24} />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-white/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;