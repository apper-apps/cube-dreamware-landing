import React, { useEffect, useState } from "react";
import { landingPageService } from "@/services/api/landingPageService";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import Loading from "@/components/ui/Loading";
import IndustryCard from "@/components/molecules/IndustryCard";
import { cn } from "@/utils/cn";

const IndustriesSection = () => {
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({}, 2);
  const loadIndustries = async () => {
    setLoading(true);
    setError("");
    
    try {
      const data = await landingPageService.getIndustries();
      setIndustries(data);
    } catch (err) {
      setError("Failed to load industries data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadIndustries();
  }, []);

  if (loading) {
    return <Loading variant="section" />;
  }

  if (error) {
    return (
      <section className="py-20" id="industries">
        <div className="container mx-auto px-5 sm:px-10 lg:px-20">
          <Error 
            title="Industries Information Unavailable"
            message={error}
            onRetry={loadIndustries}
          />
        </div>
      </section>
    );
  }

  if (industries.length === 0) {
    return (
      <section className="py-20" id="industries">
        <div className="container mx-auto px-5 sm:px-10 lg:px-20">
          <Empty 
            icon="Building"
            title="No Industries Listed"
            message="We're currently updating our industry information. Please check back soon."
          />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32" id="industries">
      <div className="container mx-auto px-5 sm:px-10 lg:px-20">
        <div 
          ref={ref}
          className={cn(
            "animate-in-view",
            hasIntersected && "in-view"
          )}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Who We Help <span className="gradient-text">Build & Scale</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              From healthcare to fintech, we've helped founders across diverse industries 
              turn their vision into successful digital products.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={industry.Id}
                className={cn(
                  "animate-in-view",
                  hasIntersected && "in-view"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <IndustryCard
                  name={industry.name}
                  icon={industry.icon}
                  description={industry.description}
                  delay={index * 100}
                />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={cn(
            "text-center mt-16 animate-in-view",
            hasIntersected && "in-view"
          )} style={{ transitionDelay: `${industries.length * 100}ms` }}>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Don't See Your Industry?
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                We work with founders across all industries. Every business has unique needs, 
                and our AI-powered approach adapts to your specific requirements.
              </p>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-3 rounded-lg font-medium transition-colors magnetic-btn"
              >
                Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;