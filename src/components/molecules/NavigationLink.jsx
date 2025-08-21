import React from "react";
import { cn } from "@/utils/cn";

const NavigationLink = ({ 
  href, 
  children, 
  isActive = false, 
  className,
  onClick
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    
    // Smooth scroll to section
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "relative text-white/80 hover:text-white transition-colors duration-300 py-2",
        "after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-accent-blue after:to-accent-purple after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full",
        isActive && "text-white after:w-full",
        className
      )}
    >
      {children}
    </a>
  );
};

export default NavigationLink;