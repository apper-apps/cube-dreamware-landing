import React, { useState, useEffect } from "react";
import Button from "@/components/atoms/Button";
import BenefitPill from "@/components/molecules/BenefitPill";
import { landingPageService } from "@/services/api/landingPageService";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/utils/cn";

const HeroSection = () => {
  const [benefitPills, setBenefitPills] = useState([]);
const [ref, isIntersecting, hasIntersected, sectionStaggerDelay] = useIntersectionObserver({}, 0);

  useEffect(() => {
    const loadBenefitPills = async () => {
      try {
        const pills = await landingPageService.getBenefitPills();
        setBenefitPills(pills);
      } catch (error) {
        console.error("Failed to load benefit pills:", error);
      }
    };

    loadBenefitPills();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToDemo = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-midnight relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-purple/5" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
        <div 
          ref={ref}
          className={cn(
            "text-center max-w-5xl mx-auto animate-in-view",
            hasIntersected && "in-view"
          )}
        >
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6">
            We build your{" "}
            <span className="gradient-text">tech</span>,<br />
            you build your{" "}
            <span className="gradient-text">business</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto">
            With AI-powered development, Dreamware helps non-technical founders launch in weeks, not months.
          </p>

          {/* Benefit Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {benefitPills.map((pill, index) => (
              <div
                key={pill.Id}
                className={cn(
                  "animate-in-view",
                  hasIntersected && "in-view"
                )}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <BenefitPill
                  icon={pill.icon}
                  text={pill.text}
                />
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center items-center animate-in-view",
              hasIntersected && "in-view"
            )}
            style={{ transitionDelay: "600ms" }}
          >
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="animate-float text-base sm:text-lg px-8 sm:px-12 min-w-[280px]"
            >
              Let's Discuss Your Needs Now
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={scrollToDemo}
              className="text-base sm:text-lg px-8 sm:px-12 min-w-[200px]"
            >
              See Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;