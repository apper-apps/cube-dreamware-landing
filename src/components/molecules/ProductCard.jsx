import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";

const ProductCard = ({ product, index, isReversed = false }) => {
  const imageRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        setParallaxOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLearnMore = () => {
    // Scroll to testimonials or comparison section
    const testimonialsSection = document.getElementById("testimonials");
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={cn(
      "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
      isReversed && "lg:grid-flow-dense"
    )}>
      {/* Product Image */}
      <div className={cn(
        "relative",
        isReversed ? "lg:col-start-2" : "lg:col-start-1"
      )}>
        <div 
          ref={imageRef}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-blue/20 via-accent-purple/20 to-transparent p-1"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <div className="bg-dark-gray rounded-xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-blue/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent-purple/20 to-transparent rounded-full blur-2xl" />
            
            {/* Product Image Placeholder */}
            <div className="relative z-10 flex items-center justify-center h-64 lg:h-80">
              <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-accent-blue to-accent-purple rounded-3xl flex items-center justify-center transform hover:scale-110 transition-transform duration-500 parallax-float">
                <ApperIcon 
                  name={product.icon} 
                  size={64} 
                  className="text-white lg:w-20 lg:h-20" 
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-8 w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
            <div className="absolute bottom-1/3 right-12 w-2 h-2 bg-accent-purple rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Product Content */}
      <div className={cn(
        "space-y-6",
        isReversed ? "lg:col-start-1" : "lg:col-start-2"
      )}>
        <Card variant="glass" className="border-accent-blue/20">
          {/* Product Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg flex items-center justify-center">
                <ApperIcon name={product.icon} size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  {product.name}
                </h3>
                <p className="text-accent-blue font-medium">
                  {product.description}
                </p>
              </div>
            </div>
            
            <p className="text-lg text-white/80 leading-relaxed">
              {product.valueProposition}
            </p>
          </div>

          {/* Features List */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className={cn(
                    "flex items-center gap-3 text-white/70 animate-in-view"
                  )}
                  style={{ transitionDelay: `${featureIndex * 100}ms` }}
                >
                  <div className="w-5 h-5 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <ApperIcon name="Check" size={12} className="text-white" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="gradient" 
              onClick={handleGetStarted}
              className="flex-1 sm:flex-none"
            >
              Get Started
            </Button>
            <Button 
              variant="secondary" 
              onClick={handleLearnMore}
              className="flex-1 sm:flex-none"
            >
              Learn More
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductCard;