import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Card = forwardRef(({ 
  className, 
  variant = "default",
  hover = true,
  children,
  ...props 
}, ref) => {
  const baseStyles = "bg-dark-gray border border-medium-gray rounded-xl transition-all duration-300";
  
  const variants = {
    default: "p-6",
    elevated: "p-8 shadow-lg",
    glass: "p-6 bg-dark-gray/50 backdrop-blur-sm border-medium-gray/50",
    gradient: "p-6 bg-gradient-to-br from-dark-gray to-dark-gray/50 border-accent-blue/20",
  };

  const hoverStyles = hover ? "hover:shadow-xl hover:border-medium-gray/80 hover:-translate-y-1" : "";

  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        hoverStyles,
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;