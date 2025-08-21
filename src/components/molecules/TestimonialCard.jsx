import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const TestimonialCard = ({ quote, author, role, company, isActive = false, className }) => {
  return (
    <div className={cn(
      "testimonial-fade text-center max-w-4xl mx-auto absolute inset-0 flex flex-col justify-center",
      isActive ? "testimonial-active" : "testimonial-inactive",
      className
    )}>
      {/* Quote marks background */}
      <div className="relative">
        <ApperIcon 
          name="Quote" 
          size={80} 
          className="text-accent-blue/10 absolute -top-10 left-1/2 transform -translate-x-1/2 z-0" 
        />
        <blockquote className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light italic leading-relaxed mb-8 relative z-10 px-4">
          "{quote}"
        </blockquote>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-purple rounded-full flex items-center justify-center mb-4 shadow-lg">
          <span className="text-white font-bold text-lg">
            {author.charAt(0)}
          </span>
        </div>
        <cite className="not-italic">
          <div className="text-lg font-semibold text-white mb-1 font-bold">{author}</div>
          <div className="text-white/60">
            {role} at <span className="text-accent-blue font-medium">{company}</span>
          </div>
        </cite>
      </div>
    </div>
  );
};

export default TestimonialCard;