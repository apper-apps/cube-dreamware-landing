import React, { forwardRef, useRef, useEffect } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ 
  className, 
  variant = "primary",
  size = "default",
  children,
  ...props 
}, ref) => {
  const buttonRef = useRef(null);
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 magnetic-btn magnetic-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-midnight disabled:pointer-events-none disabled:opacity-50";

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      // Limit the magnetic effect to a subtle 8px maximum displacement
      const maxDistance = 8;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const factor = Math.min(distance / 100, 1) * maxDistance / distance;
      
      const moveX = deltaX * factor;
      const moveY = deltaY * factor;
      
      button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    };

    const handleMouseEnter = () => {
      button.addEventListener('mousemove', handleMouseMove);
    };

    const handleMouseLeave = () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.style.transform = '';
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
const variants = {
    primary: "bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white shadow-lg hover:shadow-xl hover:shadow-[#0EA5E9]/30 transition-all duration-300",
    secondary: "bg-transparent border-2 border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white hover:shadow-lg hover:shadow-[#0EA5E9]/20 transition-all duration-300",
    ghost: "bg-transparent text-white hover:bg-white/10 transition-all duration-300",
    gradient: "bg-gradient-to-r from-[#0EA5E9] to-accent-purple hover:from-[#0EA5E9]/90 hover:to-accent-purple/90 text-white shadow-lg hover:shadow-xl transition-all duration-300",
  };

  const sizes = {
    sm: "h-9 px-4 py-2 text-sm rounded-md",
    default: "h-12 px-8 py-3 text-base rounded-lg",
    lg: "h-14 px-10 py-4 text-lg rounded-xl",
  };

return (
    <button
      ref={(node) => {
        buttonRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;