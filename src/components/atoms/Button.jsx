import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ 
  className, 
  variant = "primary",
  size = "default",
  children,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 magnetic-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-midnight disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-accent-blue hover:bg-accent-blue/90 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-transparent border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white",
    ghost: "bg-transparent text-white hover:bg-white/10",
    gradient: "bg-gradient-to-r from-accent-blue to-accent-purple hover:from-accent-blue/90 hover:to-accent-purple/90 text-white shadow-lg hover:shadow-xl",
  };

  const sizes = {
    sm: "h-9 px-4 py-2 text-sm rounded-md",
    default: "h-12 px-8 py-3 text-base rounded-lg",
    lg: "h-14 px-10 py-4 text-lg rounded-xl",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;