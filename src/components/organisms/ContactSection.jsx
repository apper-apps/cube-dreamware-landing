import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ApperIcon from "@/components/ApperIcon";
import ContactForm from "@/components/molecules/ContactForm";
import Button from "@/components/atoms/Button";
import { cn } from "@/utils/cn";

const ContactSection = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  const handleFormSuccess = () => {
    // Additional success handling if needed
    console.log("Contact form submitted successfully!");
  };

  return (
    <section 
className="py-20 lg:py-32 bg-gradient-to-br from-midnight via-dark-gray to-midnight relative overflow-hidden"
      id="contact"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
        <div 
          ref={ref}
className={cn(
            "text-center max-w-5xl mx-auto animate-in-view",
            hasIntersected && "in-view"
          )}
        >
          {/* Main Headline */}
          <div className={cn(
            "mb-8 animate-in-view",
            hasIntersected && "in-view"
          )} style={{ transitionDelay: "0ms" }}>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Let's transform your ideas into{" "}
              <span className="gradient-text">action</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Take the first step and start building your product today
            </p>
          </div>

          {/* Primary CTA Button */}
          <div className={cn(
            "mb-12 animate-in-view",
            hasIntersected && "in-view"
          )} style={{ transitionDelay: "200ms" }}>
            <Button 
              size="lg" 
              pulse
              onClick={handleFormSuccess}
              className="text-lg px-12 py-4 min-w-[280px] animate-pulse-cta"
            >
              Start With a Chat
            </Button>
          </div>

          {/* Trust Points */}
          <div className={cn(
            "flex flex-col sm:flex-row sm:justify-center sm:gap-8 gap-4 text-white/80 animate-in-view",
            hasIntersected && "in-view"
          )} style={{ transitionDelay: "400ms" }}>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <ApperIcon name="Check" size={16} className="text-green-500 flex-shrink-0" />
              <span className="text-sm sm:text-base">Full ownership</span>
            </div>
            <div className="hidden sm:block text-white/40">•</div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <ApperIcon name="Check" size={16} className="text-green-500 flex-shrink-0" />
              <span className="text-sm sm:text-base">Simple process</span>
            </div>
            <div className="hidden sm:block text-white/40">•</div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <ApperIcon name="Check" size={16} className="text-green-500 flex-shrink-0" />
              <span className="text-sm sm:text-base">24/5 Support after launch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;